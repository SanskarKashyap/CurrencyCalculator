URL = "https://dogapi.dog/api/v2/breeds";

const Getfacts = async () => {
  console.log("getting data..............");
  let Response = await fetch(URL);
  console.log(Response);

  let data = await Response.json();
  console.log(data);
};

Getfacts();
