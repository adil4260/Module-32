console.log('Explore API');

const aboutMe = {
    name: "Adil",
    age: 20,
    department: "CSE",
    university: "DIU",
    friends: ['Asif', 'Sami', 'Mim'],
    isRich: false
}
console.log(aboutMe);

// JSON-->JS object with notation

const meJson = JSON.stringify(aboutMe)
console.log(meJson, typeof meJson) //{"name":"Adil","age":20,"department":"CSE","university":"DIU","friends":["Asif","Sami","Mim"],"isRich":false}

const parseJson = JSON.parse(meJson)
console.log(parseJson, typeof parseJson)