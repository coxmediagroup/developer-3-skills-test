(function (window) {
  var emailRegex = /([a-zA-Z0-9_\-\.]+)@(([a-zA-Z0-9_\-\.]+)\.)+([a-zA-Z]+)/g;
  var replacement = 'EMAIL_REDACTED';
  /** redactEmail
    Replaces all instances of the email regex
    in `str` with the replacement string
  */
  function redactEmail(str) {
    return str.replace(emailRegex, replacement);
  }
  /**
    A simple test harness to test various email formats.
    Can be safely removed
  */
  function runTests(window) {
    [
      'ryan.bridges@gmail.com',
      'ryan.bridges@test.gmail.com',
      '.ryan.bridges@test.gmail.com',
    ].forEach(function (test) {
      var redacted = redactEmail(test);
      if (replacement === redacted) {
        console.log("Result", test, redacted, "PASS");
      } else {
        console.error("Result", test, redacted, "PASS");
      }
    });
  }
  /*
    Bind to the DOMContentLoaded so the replacement can occur before
    external resources are fetched and before any further javascript can be
    executed
  */
  window.addEventListener("DOMContentLoaded", function (event) {
    // Run the tests. Check the console for errors
    runTests(window);
    // Grab the current location in String context
    var url = String(window.location);
    // Redact the email addresses, if any
    var newUrl = redactEmail(url);
    // Replace the current URL with the cleansed version
    history.replaceState(null, null, newUrl);
  });
}(this))
