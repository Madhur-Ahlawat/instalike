



var countL = 0;

if (location.href == 'https://www.instagram.com/')
{

			function mF() {

			  var minSec = 3,
			  maxSec = 7;
			  var rand = Math.floor(Math.random() * (maxSec - minSec + 1) + minSec); //Generate Random number between 3 - 7
			  


var likes = document.querySelectorAll('._aamw');


for (var i = 0; i < likes.length; i++) {

	likes[i].querySelector('button').click();
	countL++

}

console.log("countL=" + countL);


			 window.scrollBy(0, 550);

setTimeout(mF, rand * 1000);
}
mF();
			 

}			 
else
{


			var count = 1;
			function f() {	


let like = document.getElementsByClassName('_aamw');
like[0].querySelector('button').click();
countL++
			  var minSec = 6, 
			  maxSec = 20;
			  var rand = Math.floor(Math.random() * (maxSec - minSec + 1) + minSec); //Generate Random number between 5 - 10
			  console.log('Wait for ' + rand + ' seconds');			
				var next = document.querySelector('._aaqg'); 
				next.querySelector('button').click();				
				console.log(count + " - next" + next);  
				delete next;	


console.log("countL=" + countL);
			 setTimeout(f, rand * 1000);			 			 
			 }

			f()
}
