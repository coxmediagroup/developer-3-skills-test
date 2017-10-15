(function () {
    'use strict';
    window.onload = function() {
        var urlList;
        var resetURL = function() {
            let originalUrl = window.location.href;
            let newUrl;
            let key = "email";

            setOriginal(originalUrl);
            newUrl =  cleanUrl(key, originalUrl);
            setNew(newUrl);

        };

        var setOriginal = function setOriginal(originalUrl) {
            var div = document.getElementById('originalVal');
            div.innerHTML += originalUrl;
        };

        var cleanUrl = function(key, original){
            let rtn = original.split("?")[0],
                param,
                params_arr =[ ],
                queryString = (original.indexOf("?") !== -1) ? original.split("?")[1] : "";
            if(queryString !== ""){
                params_arr = queryString.split("&");
                for(var i = params_arr.length - 1; i >= 0; i -= 1){
                    param = params_arr[i].split("=")[0];
                    if(param === key){
                        params_arr.splice(i, 1);
                    }
                }
                rtn = rtn + "?" + params_arr.join("&");
            }
            return rtn;
        };

        var setNew = function(newUrl){
            window.history.replaceState({}, document.title, "/" + newUrl);
            document.getElementById('newVal').innerHTML = newUrl;
        };

        resetURL();

    };



    
}());