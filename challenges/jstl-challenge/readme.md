# JSTL Challenge

This test is designed to focus on your ability to review existing code and rewrite based on a set of AC. Please rewrite the file `related-box.jpt` to not only meet the AC listed below, but to also show us your ability to design clean and maintainable solutions.

**Do not get distracted by the minor details of what each tag does** - in fact we don't expect your code to run. Instead, we will be looking at your ability to make educated guesses at what the tags do and to create clean and well-organized code that other developers can easily maintain and scale. If you have information you want us to know when looking at your code (such as how you had to make up an imaginary filepath) - talk to us in your comments!

If you get confused or have questions about how certain lines of code work - please make your best educated guess and describe what you are trying to achieve in your comments. We're not expecting you to create a solution that runs, however we are trying to challenge your ability to figure things out and take control of the code. Remember this is a rewrite not a refactor, so feel free to show us your aggressive side.

## User Story
As a content producer, I want to be able to add up to 9 items to the related box on story pages.

## Background
The related-content box is a constant source of frustration for our business partners. We want to reimplement the feature based on a new set of AC in such a way that it behaves consistantly and other developers can easily maintain it in the future.

## Acceptance Criteria
* Keep the existing set of filetype restrictions.
* Max of 9 items ever in the related box.
* Do not show the box if there are no related items.
* Queries are collections of content items. Only 1 related query is supported. Additional queries should be ignored.
* Items in the query should be filtered using the same set of filetype restrictions as directly related content.
* Items in the query should be added to the box last and only if there is room left.
* No individual images should ever display in the related box. Image galleries are okay.

**Example:** If a story has 2 related Videos, 3 photo galleries, 3 blog posts, and a query of 10 items, then only 1 item from the query will display.

**Example:** If a story has a query of 20 items and no other related content types, then 9 items from the query will display.

**Example:** If a story has 2 related stories and a query of 2 items, then all 4 items will display.

## Notes to get you started
### Comments
```
<%-- This is a JSTL comment. --%>
```

### <p:include>
```
<p:include webObject="${relatedQuery}" styleName="/path/to/my/car/template.jpt">
    <p:param name="make" value="mazda" />
</p:include>
```

### <p:param>
```
My neighbor owns a ${cacheScope.make}!
```
