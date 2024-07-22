const element = document.getElementById('myElement');
const elements = document.getElementsByClassName('myClass');
const queryElement = document.querySelector('.myClass');
const queryelement = document.querySelector('#myId');
const queryelements = document.querySelectorAll('myId');

// Changing content
element.innerText = 'Hello, World!';

// Event listeners
element.addEventListener('click', () => {
    element.style.backgroundColor = 'Blue';
    element.style.color = 'white';
});

element.addEventListener('mouseout', () => {
    element.style.backgroundColor = 'white';
    element.style.color = 'black';
});
// const element =document.getElementbyId('myElement');
// const elements=document.getElementsByClassName('myClass');
// const queryElement=document.querySelector('.myClass');
// const queryElement=document.querySelector('myclass');
// const queryElements=document.querySelectorAll('myid');
// elements.innertext='hello,World!';
// element.addEventListener('click',()=>{
//     element.style.background='Blue';
//     element.style.color='white';
// });
// element.addEventListener('mouseout',()=>{
//     element.style.background='white';
//     element.style.color='white';
// });
//const element=document.getelementbyId('myElement')
//element.innertext="hello World"
//element.addEventlistener('click',()=>{
    // element.style.background=>'blue';
    //     element.style.color='black';

    // });
// const element=document.getelementbyId('myElement')
//element.innertext="hello world"
//element.addEventlisterner('click',()=>{
    // element.style.background=blue;
    // element.style.color='black';
    // });
//const element=document.getElementbyId('myElement')
//element.innertext="hello world"
//element.addEventlistener('click',()=>{
    //element.style.background=blue;
    //element.style.color='black';
// });
// element.addEventListener('mouseout',()=>{
//     //element.style.background=black;
//     //element.style.color='white';
// });
// const element=document.getElementById('myElement')
// element.innerText='Hello world';
// element.addEventListener('click',()=>{
//     element.style.background=blue;
//     element.style.background='white';
// });
// const element=document.getElementById('myElement')
// element.innerText='Hello world';
// element.addEventListener('click',()=>{
//     element.style.background=blue;
//     element.style.background=white;
// });
// const element=document.getElementById('myElement')
// element.innerText='Hello World';
// element.addEventListener('click',()=>{
//     element.style.background=blue;
//     element.style.background=white;
// });
// const element=document.getElementById('myElement')
// element.innerText='hello world';
// element.addEventListener('click',()=>{
//     element.style.background=blue;
//     element.style.background=white;
// });
// const element=document.getElementById('myElement')
// element.innerText='Hello World';
// element.addEventListener(click=()=>{
//    element.style.background=blue;
//    element.style.background=white; 
// });
// element.addEventListener(click=()=>{
//     element.innerText='hello world';
//     element.addEventListener(click=()=>{
//         element.style.background=blue;
//         element.style.background=white;
//     });
// });
// const element= document.getElementById('classname');
// element.innerText='hello world';
// element.addEventListener(click=()=>{
//     element.style.background=blue;
//     element.style.background=white;
// });
// const element=document.getElementById('classname');
// element.innerText='hello world';
// element.addEventListener(click=()=>{
//     element.style.background=blue;
//     element.style.background=white;
// });

