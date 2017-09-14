'use strict';

// Do an IIFE to not pollute the global namespace.
(function(){

  // window.onPopState() is called whenever the active browser history entry changes:
  // https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
  // However, calling history.pushState() or history.replaceState() won't trigger a popstate event.
  // Hence we wrap the originals below in case the window history changes,
  // e.g. for single page app.
  var windowHistoryPushState = window.history.pushState;
  var windowHistoryReplaceState = window.history.replaceState;

  // The email regex might have to be finetuned.
  var emailRegEx = /(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})/i;
  
  var cleanUrl = function(url) {
    return url.replace(emailRegEx, 'email-removed');
  }

  window.onPopState = function(event) {
    var currentUrl =  window.location.href;
    // Nothing to do if the current URL has already been cleaned.
    if (event.state && event.state.cleanedUrl && event.state.cleanedUrl === currentUrl) return;

    var cleanedUrl = cleanUrl(currentUrl);
    if (currentUrl !== cleanedUrl) {
      windowHistoryReplaceState({currentUrl: currentUrl, cleanedUrl: cleanedUrl}, "Cleaned URL", cleanedUrl);
    }
  };

  window.history.pushState = function(state, title, url) {
    windowHistoryPushState(state, title, cleanUrl(url);
  };

  window.history.replaceState = function(state, title, url) {
    windowHistoryReplaceState(state, title, cleanUrl(url));
  };

}());
