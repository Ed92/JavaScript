var x = 15;
if (x < 5) {
  console.log('x is less than 5');

} else {
  console.log('x is not smaller than 5');
}



//Function constructor

var john = {
    name: 'john',
    yearOfBirth:1990,
    job: 'teacher'

};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

  }
    Person.prototype.calculateAge = function() {
      console.log(2016 -
      this.yearOfBirth);
    };

    Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);


// OB
