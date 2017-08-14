function cleanUrl() {
	//let dirty = window.location.href;
  let dirty ='http://www.google.com/heydaslyoi/joeyrethf@myemail.com/dhlskjljhdf/spomthing';
  let middle;
  if(dirty.indexOf('@') > 0) {
  	//middle = dirty.indexOf('@') + 1;
    let dirtyReverse = dirty.split("").reverse().join("");
    middle = dirtyReverse.indexOf('@');
    middle2 = dirty.indexOf('@');
    //let begin = dirtyReverse.substring(middle, (dirtyReverse.split('/', 1).length));
    let begin = dirty.substring(middle2, (dirtyReverse.split('/', 1).length));
    let begin2 = begin.substring(begin.lastIndexOf('/') + 1, begin.length + 1);
    console.log(dirtyReverse);
    console.log(begin);
    console.log(begin2);
  } else {
  	console.log('No email address is contained with the URL.')
  }
  //let next = dirty.substring(dirty.lastIndexOf('/') + 1, dirty.lastIndexOf('/') + 2);
  //let clean = dirty.substring(0, next);
  //let stateObj = { do: "nothing"};
  //let title = null;
  //let url = '/';
  //if(dirty.substring()
  //console.log(next);
  //window.history.pushState(stateObj, title, url);
}

cleanUrl();
