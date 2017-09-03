/*
the following script assumes the email address is used as a parameter in the URL
for example: https://codepen.io/mcgraw/pen/RZdKJW?editors=1010?email=michael@mcgraw.codes
*/

function NoEmailUrl() {
  //get current address
  this.currentURL = window.location.href;
}

NoEmailUrl.prototype = {
  getUrl: function() {
    return this.currentURL;
  },
  extractEmail: function(email) {
    var query = this.getUrl();
    var vars = query.split("&");
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
  updateURL: function() {
    window.history.replaceState(null, null, this.extractEmail());
  }
};

document.addEventListener("DOMContentLoaded", function() {
  var neu = new NoEmailUrl();
  neu.updateURL();
});
