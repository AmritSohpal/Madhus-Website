//for submission 
/*
const submission = document.getElementById("submitForum")

submission.addEventListener("click", function(){
  console.log("Hello World")
})
*/


function onSubmit(token) {
  document.getElementById("contactForum").submit();
}


document.getElementById('clientRequest').addEventListener('submit', function(event) {
  var clientName = document.getElementById('clientName').value;
  var clientEmail = document.getElementById('clientEmail').value;
  document.getElementsByName('subject')[0].value = "New Client inquiry: " + clientName + ' (' + clientEmail + ')';
});

// features for services buttons to work 

window.onload = function(){
  var params = new URLSearchParams(window.location.search);
  var eventType = params.get('typeOfEvent');
  if (eventType){
    document.getElementById("typeOfEvent").value = eventType;
  }
};

document.getElementById('location').addEventListener('change', function() {
  if(this.value == "Other"){
    document.getElementById("otherMessage").innerHTML = "Please include the city where you require the service in your message.";
  }
  else{
    document.getElementById("otherMessage").innerHTML = "";
  }
});