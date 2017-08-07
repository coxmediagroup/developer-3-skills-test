/*
Place this code before advertising script is loaded
*/

(function() {
    // select "namespace" if already exists, else create new
    this.URLScrubber = this.URLScrubber || {};
    
    // shorthand reference
    var ns = this.URLScrubber;

    ns.scrub = function scrub() {
        //retrieve parameters section of url
        var urlParams = window.location.href.split("?")[1];
        if(urlParams) {
            urlParams = urlParams.split("&");
        }

        console.log(urlParams);
    }
}());

URLScrubber.scrub();