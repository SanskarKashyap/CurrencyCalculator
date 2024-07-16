const URL = "https://dogapi.dog/api/v2/breeds";
let para1 = document.querySelector("#para1");
let para2 = document.querySelector("#para2");
let button = document.querySelector(".button");



const Getfacts = async () => {
  console.log("getting data..............");
  let Response = await fetch(URL);
  console.log(Response.status);
  let data = await Response.json();

  // Generate a random index between 0 and 9
  let randomIndex = Math.floor(Math.random() * 10);

  // Access the random breed in the 'data' array
  let breed = data.data[randomIndex]; 

  para1.innerText = `${breed.attributes.name}`;
  para2.innerText = `${breed.attributes.description}`;
  console.log(`Name: ${breed.attributes.name}`);
  console.log(`Description: ${breed.attributes.description}`);
};

console.log(1);
Getfacts();
button.addEventListener("click", Getfacts);
