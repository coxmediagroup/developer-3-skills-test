
/*
## Acceptance Criteria
* Remove any emails from a page's url.
		I assume this means anchors

* The page ***should not refresh*** after the url is scrubbed.
		? unclear to me, if you aren't changed document.location url then no problem with refresh  
  * Refreshing the page would mean duplicate ad and metrics impressions as well as poor user experience.
  * The url should be visibly corrected in the browser bar.
  * The advertising system will use whatever url value is visible in the browser bar when it runs.
* Assume our browser test matrix is only latest desktop Chrome.
		? yep
* The script you create should be able to be reused across all development teams.
  * Developers should be able to add your script to the beginning of any site's bundle.
*/

var JQ = document.createElement('script');
JQ.type="text/javascript";
JQ.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js";
document.head.appendChild(JQ);
// I consider jquery vanilla javascript. don't leave home without it :)
//can't do anything until JQ loads
JQ.onload = function(){
	//document onload 
	$(function(){
		
	var allCount=0;
	var parmsCount=0;
	var badCount=0;
	
	var emailRegex= /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    jQuery('a').each(function(){

		var address = $(this).attr('href');
		/*
			am I overthinking this, could it be as easy as this?
			if (emailRegex.test(address)){
				address=address.replace(emailRegex,'');
				$(this).attr('href',address);
			}
			
		*/
		
		allCount++;
	
		var parmsList = '';
			
		var baseHit=false;
		
		var okParms = 0;
		var badParms=0;
		
	
		var segs1 = address.split('?');
		
		var baseUrl = segs1[0];
		if (emailRegex.test(baseUrl)){
			baseHit=true;
			baseUrl=baseUrl.replace(emailRegex,'');
		}

		if (segs1.length > 1){
			parmsCount++;	
			
			var segs2=segs1[1].split("&");
			
			for (var i=0;i<segs2.length;i++){
				var segs3=segs2[i].split("=");
				if (emailRegex.test(segs3[0]) || emailRegex.test(segs3[1])){
					badParms++;
				}else{
					if (okParms > 0) parmsList +='&';
					okParms++;
					parmsList += segs2[i];
				}					
			}
			  
		}
		
		if (baseHit || badParms !=0){
			badCount++;
			var newAddress = (okParms == 0 ? baseUrl : baseUrl + '?' + parmsList);
			
			$(this).attr('href',newAddress);
			console.log('old url ' + address );	
			console.log('new url ' + newAddress);	
			
		}
		
		
    });
	
	console.log ('all ' + allCount + ' parms ' + parmsCount + ' bad ' + badCount);
	});
};