
function myMove() {
  var elem = document.getElementById("animate");   
  var pos = 0;
  var id = setInterval(frame, 5);

  console.log('id: ' + id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 700) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px";
      // console.log("top: " + elem.style.top);
      // console.log("left: " + elem.style.left);
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

	Object.defineProperty(person, "test", {
	  get : function () {
	  	this.lastname = 'alt lastname'; 
	  	return this.lastname;
	  }
	});
	console.log(person.test);
	console.log(person);
	document.getElementById("demo").innerHTML = person.lang;

}

function Person(firstName, lastName, language) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.language = language;
	this.name = function() {
		return this.firstName + ' ' + this.lastName;
	}
}
Person.prototype.calcAge = function (birthYear) {
	age = 2019 - birthYear;
	this.age = age;
	return age;
}
var andy = new Person('Andy', 'Chen', 'en');


objectDemonstration();
