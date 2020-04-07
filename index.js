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

 /* //////////Challenge questions
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

const oneTermRep = presidents.filter (function(pres){
    if(pres.terms === 1 && pres.party === "R") {
        return true;
    }
});

 //3) Return only the last three presidents
const last3 = presidents.slice(-3);
console.log(last3); 

 //4} log all dems who served 2 terms. HINT use chain filter, filter and slice


const Dems2 = presidents 
    .filter((presidents) => president.party === "D")
    .filter((el) => el.terms === 2);
*/

///////////////////////////////////
//DOM manipulation day 1

/* 
const items = document.querySelectorAll(".list-item"); 
//querySelectorAll returns NODELIST not an Array
const itemArr = Array.from(items);
headerClass.textContent = "hi"; */
/* 
const headerClass = document.querySelector
("#Idheader"); 
const toggle = document.querySelector(".toggle")
toggle.addEventListener("click", function() {
    headerClass.classList.toggle("Karen"); //toggle accepts argument
}); */
//headerClass.classList.add("Karen");
//headerClass.classList.remove("Karen");

/* const background = document.querySelector(".background");
const changeBtn = document.querySelector(".button");
const headerTwo = document.querySelector(".header-two");

changeBtn.addEventListener("click", function() {
    if (background.style.backgroundColor !== "rgb(255, 0, 0)") {
        background.style.backgroundColor = "rgb(255, 0, 0)";
        headerTwo.textContent = "RED";
    } else {
        background.style.backgroundColor = "rgb(0, 0, 255)";
        headerTwo.textContent = "BLUE";
    }
});
 */

///////////////////////
//Challenge use const = R, const = B, const = G to create button with random background color, use math.random and math.floor
const background = document.querySelector(".background");
const button = document.querySelector(".button");

button.addEventListener("click", function() {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);
    background.style.backgroundColor = "rgb("+R+","+G+","+B+")";
});

