# JavaScript Challenge

This test is designed to focus on your raw JavaScript skills. We are looking for creative problem solving and unquestionable mastery working with vanilla JavaScript. Please create a script that meets the AC below.

## User Story
As a site owner, I want to meet our advertising platform's requirement of not using Personally Identifiable Information (PII) as ad targeting.

## Background
We have recieved complaints by our advertising platform that PII is appearing in ad requests. Development has determined that the policy breach is coming from email addresses in the page's url being added from our member service. We have made that team aware of the issue and they are working to correct, but we have been given a timeline of 4 days to implement a fix for all pages regardless of its connection to the member service. Failure to fix this issue will result in the advertising platorm blacklisting all of our newspaper sites.

## Acceptance Criteria
* Remove any emails from a page's url.
* The page ***should not refresh*** after the url is scrubbed.
  * Refreshing the page would mean duplicate ad and metrics impressions as well as poor user experience.
* The url should be visibly corrected in the browser bar.
  * The advertising system will use whatever url value is visible in the browser bar when it runs.
* Assume our browser test matrix is only latest desktop Chrome.
* The script you create should be able to be reused across all development teams.
  * Developers should be able to add your script to the beginning of any site's bundle.
