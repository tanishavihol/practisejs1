let URL = 'https://jsonplaceholder.typicode.com/posts';

let TANU = async() => { //CONTINUES ALL THE OTHER ACTIONS
  let response = await fetch(URL);// AWAIT IS TO PAUSE ALL THE ACTIONS
  console.log(response);
  let data = await response.json();
  console.log(data);
  console.log(data[1].title);
}
console.log('hello world');