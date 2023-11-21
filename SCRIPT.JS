//for the given json over the given
//forloop
var array =[23,24,25,26,27,28]
    
for(let i = 0;i<array.length;i++)

console.log(array[i])

//forin
const person1 = {
  name: 'John Doe',
  age: 30,
  occupation: 'Software Engineer'
};

for (const key in person1) {
  console.log(`${key}: ${person1[key]}`);
}

//for of
const obj = {
  name: 'Joseph',
  age: 30,
  occupation: 'Software Engineer'
};

for (const value of Object.values(obj)) {
  console.log(obj);
}

//RESUME
 const resume ={
  fullName: "S. Srihari",
  Email: "sri948653@gmail.com",
  Phone: "+91 6385846149",
  Address: "Maruthuvakkudi, India",
  Linkedin: "http://www.linkedin.com/in/",
  Github: "https://github.com/sriharinewuser",Summary: " Looking for a new opportunity to use my skills  using knowledge to contribute to the success carrier of a team.",
  Skills : ["basic java script", "Time management", "Hard work"],
  Projects: [
    {
      Name: "Anti security system",
      Description: "Developed a  system security purpose mobile application."
    }
  ][
     Education =[
    {
      institution: "elumalaiyan polytechnic college kollmangudi",
      degree: "Diploma in Electrical and Electronics Engineering",
      year: "2022"
}
    ]
  ]
}
console.log(resume);

 



