var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/

var search = function(lastname){
    var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
	    if(contacts[i].lastname = lastname)
		printPerson(contacts[i]);
	}
    };
    
    search("Jones");
    
    
var add = function(firstName, lastName, email, phoneNumber){
    var jason = {
        firstName : firstName,
        lastName : lastName,
        phoneNumber : phoneNumber,
        email : email
    }
    return jason;
};

contacts[contacts.length]= add("Jason", "Yu", "hx@ualr.edu", "(502) - 8294")

list();

