function scrubEmails() {
    var url = location.href; //get url

    //find emails and store in an array
    emails = "" + url.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi) + "";
    var array = emails.split(",");

    //loop through array and remove each email
    for (var i = array.length - 1; i >= 0; i--) {
        newUrl = url.replace(array[i], "");
        url = newUrl; //this var holds the altered email until all emails have been removed from the url
    }

    //return newUrl.replace(/(&?\w+=((?=$)|(?=&)))/g, '') //returns new URL and scrubs any empty parameters;
    return newUrl;
}

//changes url in address bar without refreshing the page
window.history.replaceState(null, null, scrubEmails());
