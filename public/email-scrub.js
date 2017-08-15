function cleanParam(url) {
  console.log('a');
}

function cleanEmail(url) {
  let middle = url.indexOf('@');  //c028
  let firstHalf = url.substring(0, middle).split("/").pop();  //c029
  let secondHalfPrep = url.substring(middle, url.length)  //c030
  let count = secondHalfPrep.indexOf('.') + 4;  //c031
  let secondHalf = url.substring(middle, middle + count);  //c032
  let email = firstHalf + secondHalf

  if(middle) {
    console.log(`The email address ${email} has been scrubbed from the URL`);
  } else {
    console.log('There is no email address contained within the URL.')
  }
}

function cleanUrl() {
	//let dirty = window.location.href;
  let dirty = 'http://www.google.com/heydaslyoi/sally@myemail.com/dhlskjljhdf/something';
  // let dirty ='http://www.google.com/?email=joey@biteme.net';
  if(dirty.indexOf('?') >= 0) {
    return cleanParam(dirty);
  } else {
    return cleanEmail(dirty);
  }
}

cleanUrl();
