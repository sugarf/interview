document.getElementById("percent").innerHTML="1.207%";
document.getElementById("amount").innerHTML="$842.65";
/*function myDate(){
   var currentDate = $("#datepicker").datepicker( "getDate" );
   document.getElementById("date").innerHTML = currentDate;
   alert(currentDate);
}
*/

function getDate(){
var d = document.getElementById("myDate").value;
document.getElementById("date").innerHTML=d;
}