<%-- Initialize objUrl to relatedObjUrl; p:out seems to the same as c:set --%>
<p:out var="objUrl" value="${relatedObjUrl}" />

<%-- If the relatedObject's webType is Link, then isLink=true --%>
<c:if var="isLink" test="${relatedObjectWebType eq 'Link'}">
  <%-- Set objUrl to ExternalLink from relatedMeta --%>
  <p:out var="objUrl" xvalue="$relatedMeta//ExternalLink" />
  <%-- Set objTarget to ExternalTarget from relatedMeta --%>
  <p:out var="objTarget" xvalue="$relatedMeta//ExternalTarget" />
</c:if>

<p:out var="hasImage" value="${not empty param.imageUrl}" />
<li data-index="${stat.index}"
  class="${(stat.last and !showMoreLink and param.queryItemsExist) ? 'last-item' : ''} ${hasImage ? '' : ' no-image'}">
  <a href="${objUrl}" class="related-object-link" target="${isLink ? objTarget : '_self'}">
    <c:if test="${hasImage}">
      <div class="tease-image">
        <np-free:img src="${param.imageUrl}" ratio="16:9" title="${headline}" />
      </div>
    </c:if>
    <div class="tease-headline">${relatedHeadline}</div>
  </a>
</li>
