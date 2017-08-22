 //Call our ReplaceEmailIdInURL method on window onload
        window.onload = function () {
            ReplaceEmailIdInURL();
        }

        //Javascript function to replace emailid in URL
        var ReplaceEmailIdInURL = function (replaceString, selectionElementId) {
            if (replaceString === undefined || replaceString == '')
                replaceString = '';

            //Get all anchor elements in the page
            var wrapperElement = null;
            if (selectionElementId === undefined || selectionElementId == '')
                wrapperElement = document.getElementsByTagName('body')[0];
            else
                wrapperElement = document.getElementById(selectionElement)[0];

            var anchorElements = wrapperElement.getElementsByTagName('a');
            //Regex pattern to identify email
            var email_regex_pattern = /[a-zA-Z0-9](\.?[a-zA-Z0-9_-]){0,}@[a-zA-Z0-9-]+\.([a-zA-Z]{1,6}\.)?[a-zA-Z]{2,6}/g;
            //Loop through all URL and replace eamil by empty
            for (var i = 0; i < anchorElements.length; i++) {
                var a = anchorElements[i];
                var href = a.getAttribute('href');
                var replacedHref = href.replace(email_regex_pattern, replaceString);
                a.setAttribute('href', replacedHref);
            }
        };
        //Either we can call ReplaceEmailIdInURL on demand or on Window.Onload function
        //ReplaceEmailIdInURL();