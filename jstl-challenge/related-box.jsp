<%-- Assumptions:
<%@ taglib prefix="x" uri="http://java.sun.com/jstl/xml" %>
--%>

<%@ include file="/WEB-INF/tags/eom/PortalConfig/np-free/taglibs.jpt" %>

<p:currentObject content="data" metadata="meta" />
<c:set var="extraClasses" value="${cacheScope.extraClasses}" />

<c:set var="maxItemCount" value="9" />

<%-- Set indicator that determines if we have at lease one related photo item.  --%>
<c:set var="relatedItemsExist" value="false" />
<c:set var="queryItemsExist" value="false" />

<%--
This seems to iterate over the relatedObjectList just to determine if there are
related or query items, using the webType or eomType.
This section looks very complicated for what it does, but I don't see how it can be be
simplified a lot within the JSP. I would want to do more processing before the data gets here.
--%>
<p:list var="relatedObjectList">
	<x:forEach
		select="$data/doc/story/story-links/descendant::node()/@href | $data/doc/story/story-links/descendant::node()/@fileref"
		var="item" varStatus="stat">

		<p:getObject xpath="$item" var="relatedObject" />
		<p:object webObject="${relatedObject}" metadata="relatedMeta" />
		<p:out xvalue="$relatedMeta//WebType" var="webType" />

		<c:choose>
			<c:when
				test="${not empty relatedObject and webType ne 'image' and webType ne 'Sponsor' and webType ne ''}">
				<p:add value="${relatedObject}" />
				<%-- We have at least one related item, so set indicator.  --%>
				<c:set var="relatedItemsExist" value="true" />
			</c:when>
			<c:when
				test="${not empty relatedObject and (relatedObject.eomType eq 'EOM::Query' or relatedObject.eomType eq 'EOM::AlertQuery')}">
				<%-- We have at lease one related query, so set indicator.  --%>
				<c:set var="relatedItemsQueryExist" value="true" />
        <%-- Builds a collection of related queries from the relatedObject for later use. --%>
				<p:getCollection var="relatedQuery" webObject="${relatedObject}" />
				<np-free:uniq var="relatedQuery" list="${relatedQuery}" forceVisible="true" />
			</c:when>
			<c:otherwise>
				<%-- not displaying unsupported type: ${webType}  --%>

			</c:otherwise>
		</c:choose>
	</x:forEach>
</p:list>


<c:set var="relatedItemCount" value="0" scope="page" />

<c:if test="${relatedItemsExist or relatedItemsQueryExist}">
	<%-- Related Content: ${fn:length(relatedObjectList)} items --%>
	<div class="related-content-container margin-bottom clearfix ${extraClasses}">
		<h5 class="section-heading uppercase">Related</h5>
		<ul class="related-headlines">

    <%-- Displays the first 5 items; max is 9 now. --%>
		<c:forEach items="${relatedObjectList}" var="relatedObject" varStatus="stat" end="${maxItemCount}">

      <jsp:include page="related-item-init.jsp"/>

      <%-- If the relatedObject's webType is not Story, then isStory=true and queryItemsExist=true --%>
			<c:if test="${ relatedObjectWebType ne 'story' }" var="isStory">
				<c:set var="queryItemsExist" value="true" />
			</c:if>

      <%--
      Override for related image url: Sometimes the related gallery object also has related objects that
      generate a story-links/media-group xml. When this happens the related gallery shows the first related
      link image instead, since story-links appears above all media-group nodes. The overly generic xpath
      in wrapper.tag finds all media-groups. We need to override this to produce the correct image.
      --%>
      <%-- relatedImgUrl is overwritten with XPath expression from relatedData --%>
      <p:url var="relatedImgUrl" xvalue="$relatedData//media-group[not(ancestor::story-links)]/photo/@fileref" format="image_inline" onError="ignore" />

      <jsp:include page="related-item-document.jsp"/>
      <jsp:include page="related-item-image.jsp">
        <jsp:param name="imageUrl" value="${relatedImgUrl}"/>
        <jsp:param name="queryItemsExist" value="${queryItemsExist}"/>
      </jsp:include>

      <c:set var="relatedItemCount" value="${relatedItemCount + 1}" scope="page" />
		</c:forEach>

    <%--
    This section looks very complicated for what it does, but I don't see how it can be be
    simplified a lot within the JSP. I would want to do more processing before the data gets here.
    --%>
    <c:set var="relatedItemsEnd" value="${maxItemCount - relatedItemCount}" />
    <c:set var="queryItemsEnd" value="${maxItemCount - relatedItemCount}" />
    <c:if test="${relatedItemsEnd < 0}">
    	<c:set var="relatedItemsEnd" value="0" />
    </c:if>
    <%--  Increase the count for related items by Query if some of them are not stories. Excluding images for example --%>
    <c:forEach items="${relatedQuery}" var="relatedObject" end="${relatedItemsEnd}" varStatus="stat">
    	<p:object webObject="${relatedObject}" metadata="relatedMeta" content="relatedData" />
    	<p:out var="relatedObjectWebType" xvalue="$relatedMeta//WebType" />
    	<c:if test="${ relatedObjectWebType eq 'image' }" var="isImage">
    		<c:set var="queryItemsEnd" value="${queryItemsEnd + 1}" />
    	</c:if>
    </c:forEach>

    <%--
			Related Query

			A lot of this logic is duplicated from above, and might possibly be optimized,
			but Related Queries are supposed to be *after* the rest of the content, so this
			might be the most efficient way.
     --%>
    <%-- The condition '(queryItemsEnd == 5 and relatedItemsQueryExist eq 'true' )' seems redundant --%>
    <c:if test="${relatedItemsQueryExist eq 'true' and queryItemsEnd > 0}">
    	<c:forEach items="${relatedQuery}" var="relatedObject" end="${queryItemsEnd}" varStatus="stat">

        <jsp:include page="related-item-init.jsp"/>
        <jsp:include page="related-item-document.jsp"/>
        <jsp:include page="related-item-image.jsp">
          <jsp:param name="imageUrl" value="${imgObj}"/>
          <jsp:param name="queryItemsExist" value="true"/>
        </jsp:include>

    	</c:forEach>
    </c:if>

    </ul>
  </div>
</c:if>
