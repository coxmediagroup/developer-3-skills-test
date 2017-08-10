## Comments for Cox Media Group Challenge Submissions

#### c001
The source for this reset has long since been lost but in its own comments, it cited inspiration from those listed below. We have since made own modifications to it but it is largely intact as it was when we first started implementing it.
+ [Eric Meyer](http://meyerweb.com)
+ [HTML5 Doctor](http://html5doctor.com)
+ [HTML5 Boilerplate](http://html5boilerplate.com)

#### c002
Keep in mind that the ` <table> ` element still needs *cellspacing="0"* in the markup.

#### c003
For those among us who like trivia:
+ ` white-space: pre; ` for CSS2
+ ` white-space: pre-wrap; ` for CSS 2.1
+ ` white-space: pre-line; ` for CSS 3 (works also in 2.1)
+ ` word-wrap: break-word; ` for our beloved Internet Explorer

#### c004
Using ` sup ` and ` sub ` can result in [unexpected behavior](https://gist.github.com/unruthless/413930) when also using ` line-height `.

#### c005
This standardizes monospaced elements.

#### c006
Webkit browsers add a 2px margin outside the chrome of form elements.

#### c007
Make buttons play nice in Internet Explorer.

#### c008
This scales images in IE7 in a more pleasant manner.

#### c009
This is [non-standard](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-tap-highlight-color) behavior as of August 2017.

#### c010
Our heartfelt thanks go out to Nicholas Gallagher for the [Clearfix Hack](http://nicolasgallagher.com/micro-clearfix-hack/).

#### c011
Mozilla does not style placeholders by default.

#### c012
Here we remove any [text shadows](http://twitter.com/miketaylr/status/12228805301) and give a background color to selections in the browser.

#### c013
The base font size for this application is Arial 14px. We express ` font-weight ` with a number, as follows:
+ 400 Normal or Regular
+ 700 Bold
Sizes above and below ` $base ` are written with *rem* intentionally so that a change to  ` $base ` will also change any other sizes we use. The idea is to keep the size ratios between the fonts constant even if a change becomes necessary.

#### c014
Responsive breakpoints are provided but will likely be unnecessary if we Bootstrap.

#### c015
This is simply to mark a Twitter Bootstrap breakpoint.

#### c016
The file *zasu.scss* is the digital equivalent of scratch paper. We use this file to test styles that may or may not be ultimately implemented. It should be empty when we deploy.
