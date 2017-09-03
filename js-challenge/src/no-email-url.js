/*
the following script assumes the email address is used as a parameter in the URL
for example: https://codepen.io/mcgraw/pen/RZdKJW?editors=1010?email=michael@mcgraw.codes
*/

function NoEmailUrl() {
  //get current address
  this.currentURL = window.location.href;
}

NoEmailUrl.prototype = {
//get the existing url
  getUrl: function() {
    return this.currentURL;
  },
  //from the existing url, if an email exists return a new url that has rmd the email address and parameter name
  extractEmail: function(email) {
    var query = this.getUrl();
    var vars = query.split("&");
    //regex for email
    var re = /\S+@\S+\.\S+/;
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      for (var j = 0; j < pair.length; j++) {
        if (re.test(pair[j])) {
          var updatedURL = query.substring(0, query.indexOf('?email='+pair[j]));
          return updatedURL;
        } else alert('no email found in ' + query);
      }
    }
  },
  //use HTML5's replaceState() method to update the existing url w/out reloading the page
  updateURL: function() {
    window.history.replaceState(null, null, this.extractEmail());
  }
};
//create an instance of NoEmailUrl & call updateURL()
document.addEventListener("DOMContentLoaded", function() {
  var neurl = new NoEmailUrl();
  neurl.updateURL();
});
