//////////////////



var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]}
    //[
        //     {text: 'about', href: '/about'},
        //     {text: 'catalog', href: '/catalog'},
        //     {text: 'orders', href: '/orders'},
        //     {text: 'account', href: '/account'},
        //   ];
  ]

//////////
  let mainEl = document.querySelector('main');
  
  mainEl.style.backgroundColor = 'var(--main-bg)';
  
  mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
  
  mainEl.classList.add('flex-ctr'); 
  
//////////
let  topMenuEl = document.getElementById('top-menu');
//console.log(topMenuEl);
topMenuEl.style.height = '100%';

topMenuEl.style.backgroundColor = 'var( --top-menu-bg)';

topMenuEl.classList.add('flex-around');
//////////

for(let i in menuLinks){

    let a= document.createElement('a');

    a.textContent = menuLinks[i].text;

    a.setAttribute('href','menuLink[i].href');
    
    topMenuEl.appendChild(a);
    
//     let names = document.getElementsByTagName("a");
// console.log(names)
}

//////////
// Task 4.0
// Select and cache the <nav id="sub-menu">element in a variable named subMenuEl.
let subMenuEl = document.getElementById('sub-menu');
//////////
// Task 4.1
// Set the height subMenuElelement to be 100%.
subMenuEl.style.height = '100%';
//////////
// Task 4.2
// Set the background color of subMenuEl to the value stored in the --sub-menu-bgCSS custom property.
subMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
//////////
// Task 4.3
// Add the class of flex-around to the subMenuElelement.
subMenuEl.classList.add('flex-around');
// Task 4.4
// Set the CSS positionproperty of subMenuElto the value of absolute.
subMenuEl.style.position = 'absolute';
// Task 4.5
// Set the CSS top property of subMenuElto the value of 0.
subMenuEl.style.top = '0px'

// Task 5.1
// Select and cache the all of the <a>elements inside of topMenuElin a variable named topMenuLinks.
let topMenuLinks = document.querySelectorAll('nav a')
// console.log(topMenuLinks)
// Declare a global showing SubMenu variable and initialize it to false;
var showingSubMenu = false;
// Task 5.2
// Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener('click', function(evt) {
// The first line of code of the event listener function should call the event object's preventDefault()method.
evt.preventDefault();
// The second line of code function should immediately return if the element clicked was not an <a> element.
let target = evt.target.tagName;
//console.log(target)
// Clicking anywhere other than on a link should do nothing.
 
if (target === 'A') {console.log(evt.target.textContent)}
else {return};

// console.log the content of the <a> to verify the handler is working.
    // const atext = evt.target.textContent;
    // console.log(atext);

// Task 5.3
// Next in the event listener, if the clicked <a>link has a class of active:
// Remove the active class from the clicked <a>element.
let target2 = evt.target.classList;
if (target2 === 'active') {
    target2.classList.remove('active');
// Set the showingSubMenu to false.
    showingSubMenu = false;
// Set the CSS topproperty of subMenuElto 0.
    subMenuEl.style.top = '0px'
 // returnto exit the handler
    return;
}

// Task 5.4
// Next, the event listener should remove a class name of active from each <a>element in topMenuLinks-
// whether the activeclass exists or not.
    // let removemulti = document.querySelectorAll('a');
topMenuLinks.forEach((a) => {a.classList.remove('active')});

// Hint: Removing a non-existent class from an element does not cause an error, so just remove it!
    //console.log(topMenuLinks.classList);
// Task 5.5
// Next, the event listener should add a class name of active to the <a>element that was clicked.
// let target3 = evt.target
// target3.classList.add('active');
    //console.log(target3)
// Task 5.6
// Set showingSubMenuto trueif the clicked <a> element's "link" object within menuLinks has a subLinks property 
//(all do, except for the "link" object for ABOUT), otherwise, set it to false.

///////////////////loop attempt below - will fix later///////////////////////////////

// if (menuLinks.hasOwnProperty('subLinks')) {
//     showingSubMenu = true;
// } else {
//     showingSubMenu = false;
// }

// Hint: Saving the "link" object in a variable will come in handy for passing its subLinksarray in Task 5.7

// Task 5.7
// Next in the event listener...

// If showingSubMenu is true:
// if (showingSubMenu = true) {
// Call a buildSubMenufunction passing to it the subLinks array for the clicked <a>element.
// function buildSubMenu (links) {


// // Iterates over the subLinksarray passed as an argument; and for each "link" object:
// for (let i = 1; i < links.length; i++) {
//     for(let j = 1; j < links.length; j++) {
//         if (evt.target.text = menuLinks[i].text) {
//             let secLinks = document.createElement('a');
//             secLinks.setAttribute('href','a.href');
//             secLinks.textContent = subLinks[i][j];
//             subMenuEl.appendChild(secLinks);
//         }
//     }
// }
// Clears the contents of subMenuEl.

// buildSubMenu (links);
// Create an <a>element.
// On the new element, add an hrefattribute with its value set to the hrefproperty of the "link" object.
// Set the new element's content to the value of the textproperty of the "link" object.
// Append the new element to the subMenuElelement.
// }
// // Set the CSS topproperty of subMenuElto 100%.
// subMenuEl.style.top = '100%'
// // Otherwise (showingSubMenuis false):   Set the CSS topproperty of subMenuElto 0.
// } else {
//     subMenuEl.style.top = '0px';
// }
// })
subMenuEl.textContent = "";

menuLinks.forEach((a) => {
  if (a.text === evt.target.textContent) {
    if (a.hasOwnProperty("subLinks")) {
        let links = []
      showingSubMenu = true;
      a.subLinks.forEach(function (link) {
              let secLinks = document.createElement("a");
        // let secLinks = document.createElement('a');
        secLinks.setAttribute("href", link.href);
        secLinks.textContent = link.text;
        subMenuEl.style.top = "100%";
        links.push(secLinks)
      });
      subMenuEl.style.top = "100%";
      console.log('hi', links)
      links.forEach(function(e){
        console.log(e)
      })
      links.forEach((link)=> subMenuEl.append(link))
      //or try this:
    //   subMenuEl.append(...links);
      //console.log(subMenuEl)
    } else {
      showingSubMenu = false;
      subMenuEl.style.top = "0px";
    }
  }
});
})




// Task 6.0
// Attach a delegated 'click' event listener to subMenuEl.
subMenuEl.addEventListener('click', function(evt) {
// The first line of code of the event listener function should call the event object's preventDefault()method.
evt.preventDefault();
let target = evt.target;

if (target === 'A') {
    target.forEach(console.log(evt.target.textContent))}
else {};
// Task 6.1
// Set showingSubMenuto false.
showingSubMenu = false;
// Set the CSS topproperty of subMenuElto 0.
subMenuEl.style.top = '0';
  
// Task 6.3
// Update the contents of mainElto the contents of the <a>element, within an <h1>, clicked within subMenuEl.
mainEl.innerHTML = `<h1>${evt.target.text}</h1>`;
})
