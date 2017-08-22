/*
URLScrubber Script v1.0
by Dotun Ogunsakin
IMPORTANT: Place this code *before* advertising script is loaded!
*/

(function() {
    // select namespace if already exists, else create new
    this.URLScrubber = this.URLScrubber || {};
    
    // shorthand reference to namespace
    var ns = this.URLScrubber;

    ns.url = window.location.href;

    ns.scrubEmail = function scrubEmail() {
        // retrieve page & parameter sections section of url
        var fullUrl = ns.url.split("?");
        var urlPage = fullUrl[0];
        var urlParams = fullUrl[1];
        
        //run if urlParams is not undefined i.e. parameters exist
        if(typeof urlParams === "string") {
            /*
               Create an array of parameter key-value pairs.
               Error-handling comes free with String.split(),
               since it returns the entire string as sole 
               array node if the separator is not found
               (in our code, that means only one key-value pair).
            */
            urlParamsArray = urlParams.split("&");

            var filteredUrlParamsArray = urlParamsArray.filter(function(node) {
                var pattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                return !(pattern.test(node));
            });

            //replace browser history state & address bar url with filtered parameters
            history.replaceState({}, "", (urlPage + "?" + filteredUrlParamsArray.join("&")));
        }
    }
}());