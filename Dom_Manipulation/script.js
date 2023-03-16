let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  //  Write a JavaScript statement that selects the #main-titleID element.
  ////////////Method 1///////////
  let title = document.getElementById("main-title");
  //  Change the text of the title to something shorter.
  title.textContent = "Dom.com";
  ////////////Method 2///////////
  // document.querySelector("#main-title").textContent = `Dom.com`;

  // Part 2
  //Select the body and change the background-color to a new color of your choice.
   ////////////Method 1///////////
  let color = document.getElementsByTagName("body")[0];
  color.style.backgroundColor = 'green';
        //need to specify position because body is located beneath the script code, so it cannot be found yet unless location specified
  ////////////Method 2///////////
  //   for (let i = 0; i < color.length; i++) {
  //     color[i].style.backgroundColor = 'green';
  // }
  ////////////Method 3///////////
  // document.querySelector("body").style.background = "gold";

  // Part 3
  // Select DOM's Favorite Things list and remove the last list item.
    ////////////Method 1///////////
    let list = document.getElementById("favorite-things")
    list.removeChild(list.lastElementChild)
    ////////////Method 2///////////
    // let remove = document.querySelectorAll("#favorite-things > li");
    // document.querySelector("#favorite-things").removeChild(remove [5]);
    ////////////Method 2///////////
    // let remove = document.querySelectorAll("#favorite-things > li");
    // document.querySelector("#favorite-things").removeChild(remove[remove.length - 1]);

  // Part 4
  // Select all .special-title class elements and change their font-sizeto 2rem. 
  ////////////Method 1///////////
  let fonts = document.getElementsByClassName('special-title');
  for (let i = 0; i < fonts.length; i++) {
  fonts[i].style.fontSize = '2rem';
  }
  ////////////Method 2///////////
  // document.querySelectorAll('.special-title').forEach((fonts) => {
  //   fonts.style.fontSize = '2rem'
  // })

  // Part 5
  // Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.
  ////////////Method 1///////////
  let remover = document.getElementById("past-races")
    remover.removeChild(remover.children[3])
  ////////////Method 2///////////
  // let remove = document.querySelectorAll("#past-races > li");
  // document.querySelector("#past-races").removeChild(remove [3]);

  // Part 6
  // Let's add to DOM's Past Races list
  let  parent = document.getElementById('past-races');
  //Create a new <li> element
  let listItem = document.createElement('li');
  // change the new <li>text to the name of a city
  listItem.textContent = 'New Jersey';
  // append it to the Past Races list.
  parent.appendChild(listItem)
  
  // Part 7
  //Create a new .blog-post corresponding to the new city added in Part 6.
  let newDiv = document.createElement('div');
  let mainParent = document.getElementsByClassName('main')[0];
    // or try below because getElementsByClassName returns an array
      // let mainParent = document.querySelector('.main');
  newDiv.classList.add('blog-post');
    //remember class name cant have spaces
  newDiv.classList.add('purple');
  let header = document.createElement('h1');
  header.innerHTML = 'New Jersey';
  let para = document.createElement('p');
  para.innerHTML = 'I DIDNT WATCH THE MOVIE'
    //order matters <3
  mainParent.appendChild(newDiv);
  newDiv.appendChild(header);
  newDiv.appendChild(para);
  // Part 8
  // Query select the #quote-titleID element and add a click event handler. 
  // That event handler should use the function randomQuotewhenever #quote-title is clicked
   ////////////Method 1///////////
  let random = document.getElementById('quote-title');
  random.addEventListener('click',function (){
    randomQuote();
  })
  ////////////Method 2///////////
  // document.querySelector('#quote-title').addEventListener('click', () => {
  // randomQuote()
  // });


  // Part 9
  /*Select all .blog-post class elements. 
  Iterate through the list of .blog-postclass elements and apply two event handlers to each node.
   The first event handler should be listening for mouseout events while the second handler 
   should be listening for mouseenter events.*/

  // The mouseout handler should toggle the class .purple
  
  // function mouseout(item) {
  // item.currentTarget.classList.toggle("purple");
  //}
   ////////////Method 1///////////
  let blog = document.querySelectorAll('.blog-post');

  for (let i = 0; i < blog.length; i++) {
  blog[i].addEventListener('mouseout', function(item) {
    item.stopPropagation();
    item.currentTarget.classList.toggle("purple")  
  });

  blog[i].addEventListener('mouseenter', function(item) {
    item.stopPropagation();
    item.currentTarget.classList.toggle("red")
  });
}
   ////////////Method 2///////////
  // document.querySelectorAll(".blog-post").forEach((item) => {
  //   item.addEventListener("mouseout", (item) => {
  //     // item.stopPropagation();
  //     item.currentTarget.classList.toggle("purple");
  //   });
  //     // The mouseenter handler should toggle the class .red
  //   item.addEventListener("mouseenter", (item) => {
  //     item.stopPropagation();
  //     item.currentTarget.classList.toggle("red");
  //   });
  // });
});
