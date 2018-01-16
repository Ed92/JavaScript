//Functions

function calculateAge(yearOfBirth) {
	var age = 2016 - yearOfBirth;
	return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);
console.log(ageMary);

function yearsUntilRetirement(name, yearOfBirth) {
	var age = calculateAge(yearOfBirth);
	var retirement = 65 - age;
	console.log(name + ' retires in ' + retirement + ' years.');

	if(retirement >= 0) {
		console.log(name + ' retires in ' + retirement + ' years.');
	} else {
		console.log(name + ' is already retired.');
	}


}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1948);

// Objects

var john = {
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false
};
console.log(john.lastName);
console.log(john['job']);

var xyz = 'job';
console.log(john[xyz]);
john.lastname = 'Miller';
john['job'] = 'programmer';

console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);

//more objects

var john = {
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	isMarried: false,
	job: 'teacher',
	family: ['Jane', 'Mark', 'Bob'],
	calculateAge: function() {
		return 2016 - this.yearOfBirth;

	}
};

//console.log(john.calculateAge(1970));
console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;
console.log(john);

//v 2.0

var john = {
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	isMarried: false,
	job: 'teacher',
	family: ['Jane', 'Mark', 'Bob'],
	calculateAge: function() {
		//return 2016 - this.yearOfBirth;
		this.age = 2016 - this.yearOfBirth;

	}
};

john.calculateAge();
console.log(john);

//Loops
//For Loops

for (var i = 0; i < 10; i ++) {
	console.log(i);
}

var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

for (var i = 0; i < names.length; i++) {
	console.log(names[i]);
}

for (var i = names.length - 1; i >= 0 ; i--) {

	console.log(names[i]);

}

//While Loops
var i = 0;
while(i < names.length) {
	console.log(names[i]);
	i++;

}

//Break and continue Loop statements

for (var i = 1; i <= 5; i++) {
	console.log(i);

	if (i === 3) {
		break;
	}
}

for (var i = 1; i <=5; i++) {
	if (i === 3) {
		continue;
	}
	console.log(i);
}

