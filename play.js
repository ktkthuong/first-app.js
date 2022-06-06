// const Name = 'Max';
// let age = 29;
// const hasHobbies = true;


// age = 30;
//cách 2:  const summarizeUser = function(userName, userAge, userHobby){
//     return(
//         'Name is ' +userName+', age is '+ userAge+' and the user has hobbies: '+userHobby
//     );

// }


// cách 1: function summarizeUser(userName, userAge, userHobby){
//     return(
//         'Name is ' +userName+', age is '+ userAge+' and the user has hobbies: '+userHobby
//     );

// }


//cách 3 arrow function
// const summarizeUser = (userName, userAge, userHobby) => {
//     return(
//         'Name is ' +userName+', age is '+ userAge+' and the user has hobbies: '+userHobby
//     );

// }


//Làm việc với hàm mũi tên
//const add = (a, b) =>  a + b;

//console.log(add(1,2));

//const addOne = a => a + 1;
//console.log(addOne(1));

// const addRandom = () => 1+2;
// console.log(addRandom());



// console.log(summarizeUser(Name, age, hasHobbies));

//Làm việc với đối tượng, thuộc tính và phương thức
const person = {
    Name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.Name);
    }
};
//person.greet();

//coppy person
// const copiedPerson = {...person};
// console.log(copiedPerson);


//mảng và hàm khi làm việc với mảng
const hobbies= ['cooking', 'reading'];
// for(let hobby of hobbies){
//     console.log(hobby);
// }
// console.log(hobbies.map(hobby => 'Hobby:' + hobby
// ));
// console.log(hobbies);

// mảng, đối tượng, kiểu tham chiếu
// hobbies.push('programming');
// console.log(hobbies);

//hiểu các toán tử spread & rest
//coppy array hobbies
//const copiedArray = hobbies.slice();
const copiedArray = [...hobbies];
console.log(copiedArray);


// const toArray = (arg1,arg2, arg3) => {
//     return [arg1,arg2, arg3];
// };
// console.log(toArray(1,2,3));
// const toArray = (...args) => {
//     return args;
// };
// console.log(toArray(1,2,3,4));

//tái cấu trúc
const printName =( personData) =>{
    console.log(personData.Name);
};
printName(person);

const {Name, age} = person;
console.log(Name, age);

const [hobby1, hobby2] = hobbies;
console.log(hobby1,hobby2);

