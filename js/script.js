// Author: <student name and student number>
// Program Purposes:description

document.querySelector('#btn').addEventListener('click', () => {
    document.querySelector('.myClass').classList.add("highlight");
    document.querySelector('#btn').innerHTML = "Hello World";
    document.querySelector('#btn').style.color = "red";
})
