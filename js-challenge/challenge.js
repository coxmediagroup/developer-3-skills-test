
var url = location.href; //get url

function extractEmails(url) {
    //find all emails in url
    return url.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
}

//convert email list to an array
emails = "" + extractEmails(url) + "";
var array = emails.split(",");

//loop through array and remove each email
for (var i = array.length - 1; i >= 0; i--) {
    newUrl = url.replace(array[i], "");
    url = newUrl; //this var holds the altered email until all emails have been removed from the url
}

//changes url in address bar without refreshing the page
window.history.pushState('', '', newUrl);
