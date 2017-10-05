var url = location.href;

function extractEmails(url) {
    return url.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
}

emails = "" + extractEmails(url) + "";
var array = emails.split(",");

for (var i = array.length - 1; i >= 0; i--) {
    newUrl = url.replace(array[i], "");
    url = newUrl;
}

window.history.pushState('', '', newUrl);
