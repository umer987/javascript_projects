let rows = 5
// for (let i = 1; i <= rows; i++) {
// let str =""
//     for (let k = 1; k < rows - i; k++) {
//         str+=" "
        
//     }
// for (let j = 0; j < i; j++) {
   
//     str+="* "
// }

// console.log(str)
// }




for (let p = 0; p < rows; p++) {
   let ob=1
    let str=""
for (let q = 0; q < rows - p; q++) {
    str+=" " 
   
}

for (let w = 0; w < p; w++) {
    ob+=p+1
}



console.log(str,ob)


}



