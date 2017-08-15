function cleanUrl() {
	//let dirty = window.location.href;
  // let dirty = 'http://www.google.com/heydaslyoi/sally@myemail.com/dhlskjljhdf/something';
  let dirty ='http://www.google.com/?random=thoughts&email=joey@opera.net&someparam=Africa&anotherparam=28394';
  let middle = dirty.indexOf('@');
  let firstHalf;
  if(dirty.indexOf('?') >= 0) {
    firstHalf = dirty.substring(0, middle).split("email=").pop();  //c033
  } else if(dirty.indexOf('@') >= 0) {
    firstHalf = dirty.substring(0, middle).split("/").pop();  //c029
  } else {
    console.log('There is no email address contained within the URL.');
    return false;
  }
  let secondHalfPrep = dirty.substring(middle, dirty.length)
  let count = secondHalfPrep.indexOf('.') + 4;
  let secondHalf = dirty.substring(middle, middle + count);
  let email = firstHalf + secondHalf
  if(middle) {
    console.log(`The email address ${email} has been scrubbed from the URL.`);
  } else {
    console.log('An unknown error has occurred.')
    return false;
  }
}

cleanUrl();
