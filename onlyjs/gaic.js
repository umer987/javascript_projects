//:::::::::::::::::::::::::::::::::ex#1:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


// let message = "hello eric you are finding python toturials"
// console.log(message)


//:::::::::::::::::::::::::::::::::ex#2:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


// let formate_change = "hello eric you are finding python toturials"
// console.log("the orignal form: ",formate_change)
// console.log("the upperletter form: ",formate_change.toUpperCase())
// console.log("the lower form: ",formate_change.toLowerCase())
// console.log("the titlecase form: ",formate_change.replace(/\b\w/g, char => char.toUpperCase()))


//:::::::::::::::::::::::::::::::::ex#3:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// let author ="Albert Einstein once said, "
// let qoute =' “A person    who never     made a mistake     never tried anything new.”'
// console.log(author,qoute)

//:::::::::::::::::::::::::::::::::ex#4:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// let author ="Albert Einstein once said, "
// let qoute =' “A \t  person who \t never made a \t \t mistake   never tried anything new.”'
// console.log("the orignal string " +author+ qoute)
// let stripp = qoute.trim();
// console.log("the modified string (without spaces) " + author +stripp)


//:::::::::::::::::::::::::::::::::ex#4:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// let namess =["revo" ,"ap" ,"ka" ,"naam " , "he"]

// for (let index = 0; index < namess.length; index++) {
//     console.log("hellow " +namess[index])

// }


//part 2  
// let transports =["toyota revo" , "toyota corolla" , "toyota surf" ,"mistubishi pajero" , "honda motorcycle"]

// for (let i = 0; i < transports.length; i++) {


//    console.log("I would like to own a: "+transports[i] )

// }
//part 3 paramid
// 

//:::::::::::::::::::::::::::::::::ex#5:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


// let namess =["karachi" ,"dubai" ,"london" ,"america " , "newyork"]
// console.log("the orignal array "+namess)
// console.log("the alphabaatical array "+namess.sort())
// console.log("still same array "+namess)
// console.log("the alphabaatical reversed array "+namess.sort().reverse())
// console.log("the alphabaatical again reversed array "+namess.reverse())
// console.log("the again sorted array "+namess.sort())
// console.log("the alphabaatical sorted and reversed array "+namess.sort().reverse())



//:::::::::::::::::::::::::::::::::ex#5:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// let namess =["revo" ,"ap" ,"ka" ,"naam " , "he"]
// console.log("we are inviting " +namess.length + " guest")

//:::::::::::::::::::::::::::::::::ex#6:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// let cities = ["Tokyo ", "Paris ", "New York ", "Dubai ", "London "];
// console.log("cities are " + cities)
// cities.push("sydney") // Add a new city to the list
// console.log("after cities are add " + cities)
// cities.pop() // Remove the last city from the list
// console.log("after remove city " + cities)
// console.log("after sorting city " + cities.sort())
// console.log("after reverse city " + cities.reverse())

//:::::::::::::::::::::::::::::::::ex#7"OBJECTS":::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// let car={
//     name:"corolla",
//     year:2021,
//     company:"toyota",
//     reg_no:"API-123",
//     electrict:false,


// }


// console.log(car)
// console.log(car.name)
// console.log(car.company)
// console.log(car.reg_no)
// console.log(car.year)


//:::::::::::::::::::::::::::::::::ex#7"if-else":::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// let car = 'jggg';

// console.log("Is car == 'subaru'? I predict fasle.")

// console.log(car == 'subaru')


// let person1="umer"
// let person2 ="shakir"
// console.log("person 1 == person2", person1 == person2)
// console.log("person 1 == person2", person1 == "umer")
// console.log("person 1 == person2", person1 != person2)


// let city = "New York"

// console.log("is city is == NewYork", city.toLowerCase() === "new york" )
// console.log("is city is == NewYork", city.toLowerCase() !== "new york" )

//:::::::::::::::::::::::::::::::::ex#8"if-else":::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// let alien_color ="green"
// if(alien_color == "green"){
//     console.log("you won")
// }
// else if(alien_color == "yellow"){

//     console.log("helth is too low")

// }
// else if(alien_color == "red"){

//     console.log("you died")

// }
// else{
//     console.log(" ")
// }

//:::::::::::::::::::::::::::::::::ex#8"if-else":::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// let age =50

// if (age <= 18) {
//     console.log("you are children")
// }
// else if(age >= 18 && age<=40){
// console.log("you are youn and teen")
// } 
// else {
//     console.log("you are old")
// }
//:::::::::::::::::::::::::::::::::ex#8"if-else":::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// let fruits =["mango","banana","apple","orange"]


// if (fruits.includes("stawberry")) {
//     console.log("mango is here")
// } else {
//     console.log("404 stawberry not found")
// }
//:::::::::::::::::::::::::::::::::ex#8"if-else":::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// let users =["admin","umer","shamhair","shakeel","daniyal"]
// for (let i = 0; i < users.length; i++) {
// if (users[i]== "admin" ) {
//     console.log("you are warm wellcome admin sahab ")    

// }
// else{
//     console.log("hello and wellcome back "+ users[i])    

// }
// }
//:::::::::::::::::::::::::::::::::ex#8"if-else":::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// let users =[]

// for (let i = 0; i <1; i++) {

// if (users.length === 0 ) {
//     console.log("we have to find out some users ")    

// }
// else{
//     console.log("hello and wellcome back "+ users[i])    

// }
// }

//:::::::::::::::::::::::::::::::::ex#8"if-else":::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// let users =["admin","umer","shamhair","shakeel","daniyal"]
// for (let i = 0; i < users.length; i++) {
// users.splice(0,users.length)
// if (users == true) {

//     console.log("hello and wellcome back "+ users[i]) 
// }
// else{
//     console.log("empty list we have to add some users ") 

// }
// }
//:::::::::::::::::::::::::::::::::ex#8"if-else":::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// let usernames =["admin","umer","shamhair","shakeel","daniyal"]
// let avalableusers =["furqan","rehman","shahmir","farzan","saniya"]
// for (let i = 0; i < usernames.length; i++) {
//   let add="umer"
//     if (usernames[i] == add) {
//         console.log("user name already taken: " , add)
//         console.log("avalable user names: ",avalableusers)
//     } else {

//     }

// }

//:::::::::::::::::::::::::::::::::ex#8"if-else":::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// ["1st","2nd","3rd","4th","5th","6th","7th","8th","9th"]
// console.log("the index of array "+index[i] +" is on " + i)

// let index =["1","2","3","4","5","6","","8","9"]
// for (let i = 0; i < index.length; i++) {
//   if (index[i] == 1) {
//     console.log(index[i] +"st" )
//   } 
//   else if (index[i] == 2){

//     console.log(index[i] +"nd" )

//   }
//   else if (index[i] == 3){

//     console.log(index[i] +"rd" )

//   }
//   else {
//     console.log(index[i]+"th")
//   }



// }

//:::::::::::::::::::::::::::::::::ex#8"if-else":::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// let pizza = ["pepronie", "fajita", "malai"]
// let ad_sentences= " such as i like pizzsas"
// for (let i = 0; i < pizza.length; i++) {
//   console.log("i like "+pizza[i]+ " pizza" + ad_sentences)
// }

//:::::::::::::::::::::::::::::::::ex#9"functions":::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// function shirt(size ,message){

// console.log("MESSEGE IS : "+message+ "\nAND SIZE IS "+size)

// }
// shirt("'15'"," 'Levis' ")

//:::::::::::::::::::::::::::::::::ex#9"functions":::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// function shirt(size ,message){
//   if (size=="large") {
//     console.log("i love type script")
//   } 
//   else if (size=="medium") {
//     console.log("i love java script")
//   }
//   else{
//     console.log("i want to learn programming")

//   }



// }
// shirt("small"," 'Levis' ")

 //:::::::::::::::::::::::::::::::::ex#9"functions":::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//  let default_city = "karachi"
//  function citi (default_city){
//   console.log(default_city +"is yhe city of pakistan")
//  }

//  citi(default_city)
//  citi("lahore")
//  citi("islamabad")




 //:::::::::::::::::::::::::::::::::ex#9"functions":::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

 //rough work:::::if (cities[i]=="lahore" && cities[i]=="islamabad" && cities[i]=="karachi" ) {



//  function find_cities(citi){
 
//   let cities =["lahore","islamabad","karachi"]

//   for (let i = 0; i < 1; i++) {
   
//     if (cities.includes(citi)) {
//       console.log(citi + " is the city of pakistan")
//     } else {
//       console.log("this is not a city of pakistan")
//     }


//   }

// }

// find_cities("new york")



 //:::::::::::::::::::::::::::::::::ex#9"functions":::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// function syn (citi ,country){

// console.log('"'+citi+'"'+','+'"'+country+'"')




// }

// syn("lahore" , "pakistan")
 //:::::::::::::::::::::::::::::::::ex#9"functions":::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// function make_album(name ,title ,no_oftracks=null){

// let album={
//     name_of_artist:name,
//     title_of_album: title,

// }
// if(no_oftracks!== null){
//   album.numbers_of_songs=no_oftracks
// }
// return album;

// }


// let album1=make_album("atif aslam","yaad",12)
// let album2=make_album("asim azhar","tu hai kaha","")

// console.log(album1)
// console.log(album2)



 //:::::::::::::::::::::::::::::::::ex#9"functions":::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
let magicians =["me" ,"tum","ye duniya"]