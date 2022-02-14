// class Student {
//     constructor (firstName, lastName, age, dateOfbirth){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.dateOfbirth = dateOfbirth
//     }

//         // console.log('welcome ${this.firstName} ${this.lastName}');
//     }

// const student1 = new Student("Peter", "Oti", 18, "October");
// console.log(student1);

// const model = (n) => {
//     const arrlength = [];
//     const arr = n.split(" ");
//     // console.log(arr);  
//     for (let s of arr){
//         arrlength = arr.push(s.length)
//     };
//     console.log('This is' + arr)
//     // console.log(Math.min(...arr))
// }

// // model("This is the day that the Lord has made")


// // // This is to check the least number of words in an array
// const model = (n) => {
//     const xx = [];
//     const x = n.split(" ");
//     console.log(x);
//     for(let s of x){
//         xx.push(s.length);
//     }
// //     console.log("This is:", xx);
// //     console.log(Math.min(...xx));
// // }
// // console.log(model("this is a new year"))

// // This is to check for 
// // const model2 = (n)=>{
// // const convertN = n.toString();
// // const ax = convertN.split("").reverse().join("");
// // const  axx = parseInt(ax);

// // console.log(axx)
// // }

// //  model2(45678) 

// // remove all the vowels in the string
// // const models = (n) => {
// //     const e = n.replace(/[aeiou]/gi, "");
// //     console.log(e)
// // };

// // models("This is the day that the lord has made");
 
// const index = (n) => {
// const collect = [];
// const conn = "abcdefghijklmnopqrstuvwxyz";
// const split = conn.split("");
// console.log(split);
// for(let i = 1; i<split.length; i++;) => {
//         return collect.push(i).includes(i.sort()) = ret
//         }
        
// }

const word = (text) => {
const change = text.split(" ");
let arr = []
for(s of change){
        arr.push(s.length);        
}
console.log(arr)
console.log(Math.min(...arr));

}

console.log(word("salmon is a great dish"))
