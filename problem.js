// let convert = [
//      {
//         cloth: "Gown",
//         amount: "1000",
//         brand: "Gucci"
//     }
// ]
// console.log(convert);
// console.log( );


// const x = ["Micheal", "Dickson", "Tobi", "Blessing", "Precious"]
// // console.log(x)
// let g = [];

// for(s of x){
//     g.push(s)
// }

// console.log(g);

// // Today the 11th of february class

// for(lucy=0; lucy<=10; lucy++){
// for(precious=-0; lucy<=10; lucy--){
//     if(lucy === precious){
//         console.log("Congratulations");
//     }
// }
// }
// create a variable that would hold the key to the door
// collect the input
// check if the input is equals to the first index of the key 
// collect another input and check its equal to the second index
// collect the last input and check if its equal to the last index
// line 33-35 would be done using the alert method 
// 
// 
// const 
const key = [7,3,2]
const check= [0,1,2,3,4,5,6,7,8,9]
let collect = []
for(i=0; i<key.length; i++){
    let store = key[i]
    for(j= 0; j<check.length;){
        let checker= check[j]
        if (store===checker){
            collect.push(checker)
            // console.log(checker);
            break;
        }else{
            j++
        }
    }
}


console.log(collect);
// create a function that would loop through a certain numbers to check if the number is equal to the key
// const keyHolder=()=>{
// for(i=0; i<=10; i++){
//     if(i===key.indexOf(0)){

//     }else{
//     }
// }
// }