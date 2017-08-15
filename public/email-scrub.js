function cleanUrl() {
	//let dirty = window.location.href;
  // let dirty ='http://www.google.com/heydaslyoi/sally@myemail.com/dhlskjljhdf/something';
  let dirty ='http://www.google.com/?email=joey@biteme.net';
  let middle = dirty.indexOf('@');  // our starting point, the @ sign
  let firstHalf = dirty.substring(0, middle).split("/").pop();  // everything before the @ sign
  let reverse = dirty.substring(middle, dirty.length).split("").reverse().join("");  // we reverse everything after the @ so we can calculate the distance between the @ and the end of the email
  let count = reverse.length - reverse.indexOf('.') + 3;  // we look for the period and then count + 3 to get the domain name
  let secondHalf = dirty.substring(middle, middle + count);  // our final output
  // console.log(firstHalf);
  // console.log(middle);
  // console.log(secondHalf);
  // console.log(reverse);
  // console.log(count);
  let email = firstHalf + secondHalf

  if(middle) {
    console.log(email);
  } else {
  	console.log('No email address is contained within the URL.')
  }
}

cleanUrl();
