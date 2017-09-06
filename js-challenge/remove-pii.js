// assigns new clean url and calls function to clean pii from url in browser
var cleanURL = scrubPII()
//console.log(cleanURL); 
//pushes new url to browser window without refreshing
window.history.replaceState({}, " ", cleanURL);


function scrubPII(){
//get url
var piiURL = window.location.href;
//locate email
if(piiURL.search(/([^.@\s]+)(\.[^.@\s]+)*@([^.@\s]+\.)+([^.@\s]+)/) !== -1){
    //console.log("There is an email !");
    //remove email
    var noPII = piiURL.split("?")[0] + "";
}
//return clean url
return noPII;
}