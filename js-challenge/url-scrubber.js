/*
URLScrubber Script v1.0
by Dotun Ogunsakin
Place this code before advertising script is loaded
*/

(function() {
    // select namespace if already exists, else create new
    this.URLScrubber = this.URLScrubber || {};
    
    // shorthand reference to namespace
    var ns = this.URLScrubber;

    ns.url = window.location.href;

    ns.scrubEmail = function scrub() {
        // retrieve parameters section of url
        var urlParams = ns.url.split("?")[1];
        
        if(typeof urlParams === "string") {
            /*
               Create an array of parameter key-value pairs.
               Error-handling comes free with String.split(),
               since it returns the entire string as sole 
               array node if the separator is not found
               (i.e. here, only one key-value pair).
            */
            urlParams = urlParams.split("&");

            var filteredUrlParams = urlParams.filter(function(node) {
                var pattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                return !(pattern.test(node));
            });

            console.log(urlParams);
            console.log(filteredUrlParams);
        }
    }
}());