//objects
/* const Omor = {
    name: "Omor",
    dob: 2003,
    graduated: false,
    age: function() {
        //console.log(this);
        return 2020 - this.dob; //"this" refers to object
    }
}; //data stored inside object

function test() {
    const window = this;
    console.log(this);
} */

/* const Homer = {
    name:"Homer",
    age: 32,
    family: {
        wife: {
        name: "Marge",
        age: 32
    },
        son: "Bart",
        age:10
    },
    pets: ["Cat", "Dog"]
};
 */

///////////Destructuring
/* const Sandra = {
    name: "Sandra",
    age: 17,
    student: true,
    year: "junior",
    graduated: false
};

const {name, year} = Sandra;
 //const student = {};
 //student.name = Sandra.name;
const student = Sandra; //"student" object is a reference to Sandra
 */

 //////////Challenge questions
 const presidents = [
     { name: "Donald Trump", terms: 1, party: "R" },
     { name: "Barack Obama", terms: 2, party: "D" },
     { name: "George W. Bush", terms: 2, party: "R" },
     { name: "Bill Clinton", terms: 2, party: "D" },
     { name: "George H.W. Bush", terms: 1, party: "R" },
     { name: "Ronald Reagan", terms: 2, party: "R" },
     { name: "Jimmy Carter", terms: 1, party: "D" },
     { name: "Gerald Ford", terms: 1, party: "R" },
     { name: "Richard Nixon", terms: 2, party: "R" },
     { name: "John F. Kennedy", terms: 1, party: "D" },
     { name: "Lyndon Johnson", terms: 2, party: "D" },
     { name: "Dwight Eisenhower", terms: 2, party: "R" }
 ];

 //Challenge questions 
 //1) Filter all presidents, leaving only the democratic ones
const result = presidents.filter(president => president.party === "D");
console.log(result);

 //2} Filter all presidents to leave only one term Republican presidents HINT use If statement



 //3) Return only the last three presidents
const last3 = presidents.slice(-3);
console.log(last3); 

 //4} log all dems who served 2 terms. HINT use chain filter, filter and slice
/* const dem = presidents.filter (function (president) {
  return president.terms === 2 && president.party === "D";
}) .map(function (president) {
    return president.name;
});  
console.log(dem);
*/