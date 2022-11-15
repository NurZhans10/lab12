console.log("Hello,World!");

//changed h1 element//
let h1_arr=document.getElementsByTagName("h1")
console.log(h1_arr[0])
let h=h1_arr[0]
h.innerHTML="Lab12 Assignment"
h.style.color="blue"

//added hr element//
let hr=document.createElement("hr")
console.log(hr)
document.body.appendChild(hr)

//added h2 element//
let h2=document.createElement("h2")
h2.innerText="Task"
h2.style.color="red"
document.body.appendChild(h2)

let p1=document.createElement("p1")
p1.innerHTML="In this task you have to reproduce this  HTML page as is using <strong> only  </strong> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:"
document.body.appendChild(p1)

const list2 = ["find elements in the DOM (5 points);", "create/add/remove elements (5 points);", "change content of the elements (5 points);", "change styles of the elements (5 points);", "change attributes of the elements (5 points);", "change classes of the elements (5 points)."];

list(list2)


let p2=document.createElement("p2")
p2.innerHTML="Basic necessary code can be found in the supplementary materials to the Lecture 12 via this  "
document.body.appendChild(p2)

//add a link
let a= document.createElement("a")
a.innerText="link"
a.setAttribute("href", "https://github.com/yessen/nu_web_programming/tree/main/week12")
document.body.appendChild(a)


//added hr element//
let myhr=document.createElement("hr"); // проблема с этим элементом,если убрать число 2 то код не работает
console.log(myhr);
document.body.appendChild(myhr);

//added h3 element//
let h3=document.createElement("h3")
h3.innerText="Submission"
h3.style.color="red"
document.body.appendChild(h3)

let p3=document.createElement("p3")
p3.innerHTML=" To submit your work, follow these instructions:"
document.body.appendChild(p3)

const list1 = [ "Create a new repository on Github, named  lab12(1 point). ", "Clone this repository to your local machine and work inside it.", 
"Create a new HTML file, called index.html, which has only one <h1> tag with Hello, World! message (1 point).", "Create a new JavaScript file, called  main.js, which must contain your program (assignment) described above (1 point) .",
 "Link this  main.js  file to your index.html file (Note: place your script at the end of the  body section).", "Write a JavaScript program in  main.js to make your  index.html  look identical to this HTML file (5 points) .","After you finish your work, submit it to the Github (2 points)."]
function list(x) {
  const ulTag = document.createElement('ul');
  ulTag.setAttribute('class', 'theList');
  for (let i=0; i<x.length; i++){
      const liTag = document.createElement('li');
      liTag.innerText = x[i];
      if (i%2===0){
        liTag.style.color = "green";
        liTag.classList.add("even")
      }
      else{
        liTag.style.color = "purple";
        liTag.classList.add("odd")
      }
      ulTag.appendChild(liTag);
  }  
  document.body.appendChild(ulTag)
}
list(list1);

let myyhr=document.createElement("hr"); // проблема с этим элементом,если убрать число 2 то код не работает
console.log(myyhr);
document.body.appendChild(myyhr);




