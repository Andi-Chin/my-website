function myMove() {
  var elem = document.getElementById("animate");   
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px";
      console.log("top: " + elem.style.top);
      console.log("left: " + elem.style.left);
    }
  }
}

function objectDemonstration() {
	var person = {
	  firstName: "John",
	  lastName : "Doe",
	  language : "en",
	  get lang() {
	    return this.language;
	  }
	};
	document.getElementById("demo").innerHTML = person.lang;

}
objectDemonstration();
