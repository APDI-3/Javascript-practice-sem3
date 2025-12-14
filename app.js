
// --------------------------------------------

// question 1
// let mainTitle=document.getElementById('mainTitle')
// mainTitle.innerHTML='Welcome to the DOM Laboratory'

// question 2
//  let info=document.getElementsByClassName('info')
//  for (item of info){
//     item.style.color='red'
//  }



//  question 3
//  let section1=document.getElementById('section1').getElementsByTagName('p')
// for(item of section1){
//     item.style.background='lightblue'
// }




// question 4

// let sec1=document.getElementById('section1').querySelector('p')
// sec1.style.fontWeight='bold'



// question 5

// let myList=document.getElementById('myList').querySelectorAll('li')
// for(i of myList){
//     i.style.border='1px solid red'
// }



// question6 6
// let mylink=document.querySelector('#myLink')
// mylink.innerHTML='Visit Google'



// question 7
// let section4=document.querySelector('#section4')
// section4.style.background='orange'



// question 8
// let inf=document.querySelectorAll('.info')[1].style.fontSize='40px'



// question 9
// let div=document.getElementsByTagName('div')
// for(d of div){
//     div.clasList.add('highlight')
// }



// question 10
// let h=document.querySelector("#output h2")
// h.textContent = "DOM Output Area";



// question 11
// let p1=document.getElementById('p1')
// console.log(p1)
// p1.textContent='This text was updated using textContent()'



// question 12

// let replace=document.querySelector('#section2').querySelectorAll('a')
// for(item of replace){
//     item.innerHTML='<a href="#">New Dynamic Link</a>'
// }



// question 13 &  question 14

// let nmyLink=document.querySelector('#myLink ') 

// nmyLink.setAttribute("href", "https://example.com");
// console.log(nmyLink.getAttribute("href"));


// question 15

// let section1=document.getElementById('section1')
// section1.style.background='green'

// let section3=document.getElementById('section3')
// section3.style.color='blue'


// question 16

// let section1=document.getElementById('section1')
// section1.classList.add('highlight')
// question 17 
// section1.classList.remove('highlight')



// question 18
//  let p=document.createElement('p')
//  p.innerHTML='new pargraph created'
//  p.document.getElementById("output").appendChild(p);


// question 19

// let li = document.createElement("li");
// li.textContent = "Item D";
// myList.appendChild(li);


// question 21
// let div = document.createElement("div");
// div.className = "card";
// div.textContent = "Dynamically Added Box";
// document.body.appendChild(div);

// question 22
// let newP = document.createElement("p");
// newP.textContent = "Inserted Paragraph";
// let firstP = document.querySelector("#section1 p");
// section1.insertBefore(newP, firstP);

// question 23

// let b = document.createElement("button");
// b.textContent = "Alert";
// b.onclick = () => alert("Hello!");
// section4.appendChild(b);

// question 24
// ////////////////////////////////////
// ////////////////////////



// question 25
// let copy = document.getElementById("p1").cloneNode(true);
// section3.appendChild(copy);



// question 26
// myList.children[0].remove();



// question 27
// section4.remove();



// question 28
// myList.lastElementChild.remove();


// question 29
// btnMsg.remove();



// question 30
// let newLi = document.createElement("li");
// newLi.textContent = "Replaced Item";
// myList.replaceChild(newLi, myList.children[1]);


// question 31
// let newH1 = document.createElement("h1");
// newH1.textContent = "DOM Mastery in Progress";
// let oldH1 = document.getElementById("mainTitle");
// oldH1.replaceWith(newH1);



// question 32
// document.querySelectorAll(".info").forEach(info => {
//   let p = document.createElement("p");
//   p.textContent = "Replaced Info Paragraph";
//   info.replaceWith(p);
// });



// question 33
// let btn = document.createElement("button");
// btn.textContent = "Click Here";
// let oldLink = section2.querySelector("a");
// oldLink.replaceWith(btn);



// question 34
// let newh2 = document.createElement("h2");
// newh2.textContent = "Replaced Output Heading";
// let oldh2 = output.querySelector("h2");
// output.replaceChild(newh2, oldh2);
