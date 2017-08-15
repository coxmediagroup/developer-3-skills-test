## Comments for Cox Media Group Challenge Submissions

### c001
The source for this reset has long since been lost but in its own comments, it cites inspiration from those listed below. We have since made own modifications to it but it is largely intact as it was when we first started implementing it.
+ [Eric Meyer](http://meyerweb.com)
+ [HTML5 Doctor](http://html5doctor.com)
+ [HTML5 Boilerplate](http://html5boilerplate.com)

### c002
Keep in mind that the ` <table> ` element still needs *cellspacing="0"* in the markup.

### c003
For those among us who like trivia:
+ ` white-space: pre; ` for CSS2
+ ` white-space: pre-wrap; ` for CSS 2.1
+ ` white-space: pre-line; ` for CSS 3 (works also in 2.1)
+ ` word-wrap: break-word; ` for our beloved Internet Explorer

### c004
Using ` sup ` and ` sub ` can result in [unexpected behavior](https://gist.github.com/unruthless/413930) when also using ` line-height `.

### c005
This standardizes monospaced elements.

### c006
Webkit browsers add a 2px margin outside the chrome of form elements.

### c007
Make buttons play nice in Internet Explorer.

### c008
This scales images in IE7 in a more pleasant manner.

### c009
This is [non-standard](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-tap-highlight-color) behavior as of August 2017.

### c010
Our heartfelt thanks go out to Nicholas Gallagher for the [Clearfix Hack](http://nicolasgallagher.com/micro-clearfix-hack/).

### c011
Mozilla does not style placeholders by default.

### c012
Here we remove any [text shadows](http://twitter.com/miketaylr/status/12228805301) and give a background color to selections in the browser.

### c013
The base font size for this application is Arial 14px. We express ` font-weight ` with a number, as follows:
+ 400 Normal or Regular
+ 700 Bold  
Sizes above and below ` $base ` are written with *rem* intentionally so that a change to  ` $base ` will also change any other sizes we use. The idea is to keep the size ratios between the fonts constant even if a change becomes necessary.

### c014
Responsive breakpoints are provided but will likely be unnecessary if we use Bootstrap.

### c015
This is simply to mark a Twitter Bootstrap breakpoint.

### c016
The file *zasu.scss* is the digital equivalent of scratch paper. We use this file to test styles that may or may not be ultimately implemented. It should be empty when we deploy.

### c017
See c013, particularly the first sentence.

### c018
JavaScript and jQuery are used only in development to add the width and height of the viewport to the browser. This speeds things up as we write code that is responsive.

### c019
We only load the parts of Bootstrap that we need.

### c020
This marks code that overrides or otherwise nullifies a default setting in Bootstrap or FontAwesome.

### c021
We disable this because this site has a few different colors applied to ` <a> ` depending on where it is located.

### c022
This is for the POC only. Upon deployment, we will need a better solution in case the number of items in *New Right Now* changes.

### c023
This is for the POC only. A designer should weigh in on where these elements should be placed for mobile.

### c024
This is for the POC only. Since comps were not provided for widths below 992px and we have columns in *New Right Row* wrapping, a designer should review.

### c025
To speed up development, we have come up with our own classes to take care of little things like padding and margin overrides. Although Bootstrap has built-in classes to do the same thing but, we are choosing speed over the official Bootstrap syntax.

### c026
This is for the POC only.

### c027
#### Summary Commentary for *html-css-challenge*
+ I have added several custom breakpoints, most of which are below 992px, to more efficiently use the available space.
+ I generally avoid using *Bootstrap* because doing so inevitably requires a number of overrides. Such is the case here as evidenced by the code contained in *MODIFICATIONS* on line 500 of *_modules.scss*. I have no doubt there is a better way to do this but given time constraints, I have simply made the POC presentable to the client.
+ You may notice a small box in the lower right of the viewport which indicates the current size of the viewport. I always use this when I develop responsively and have left it intact as you review my code.
+ To compare the provided *.jpg* to my code, the viewport should be set to 1200px wide.
+ The *we* you will see throughout the comments in the [royal we](https://en.wikipedia.org/wiki/Royal_we) and is used only to be consistent with conventions often found in code used to teach others. I am the sole author of this code.

### c028
To begin our extraction of the email from a URL, we first need the index of the *@* sign.
Example: *38*

### c029
Once we have the *@* sign (see c028), we get everything in front of it that pertains to an email address and store this in a variable. Because we know that the URL in question does not store the email as a parameter, we can use ` .split("/") ` and ` pop() ` to zero in on the index where the email begins.
Example: *sally*

### c030
Here we collect all of the text that follows the *@* sign, including text that does not pertain to the email address.
Example: *@myemail.com/dhlskjljhdf/something*

### c031
With ` secondHalfPrep ` now storing the *@* sign and everything after it, we can now calculate the distance between the *@* sign and the end of the email by finding the index of the the dot in the email address. We then add 3 to ` count ` in order to get the complete domain name. One advantage of searching this way is we do not have to worry if the domain name ends in *.net*, *.com*, *edu*, etc. One very glaring disadvantage is that domain names with more than one period or ones with more than 3 letters after the dot will not be calculated properly.
Example: *12*

### c032
This stores only the characters that pertain to the email address after the *@* sign (and includes the *@* sign, as well).
Example: *sally@myemail.com*

### c030


### c031


### c032


### c033
