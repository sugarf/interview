document.getElementById("percent").innerHTML="1.207%";
document.getElementById("amount").innerHTML="$842.65";
$( function() {
    $( "#datepicker" ).datepicker({
        onClose: function(date) {
            document.getElementById("date").innerHTML = date;
        }
    });
});
