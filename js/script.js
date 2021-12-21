/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//List of random quotes
quotes = [
  {
  quote:"Show me the money!", 
  source:'Jerry Maquire', 
  citation:'JERRY MAGUIRE',  
  year: 1996 
  },
  
  {
  quote:"You can't handle the truth!", 
  source:'Colonel Jessup', 
  citation:'A FEW GOOD MEN',  
  year: 1992 
  },
  
  {
  quote:"Well, nobody's perfect.", 
  source:'Osgood Fielding III', 
  citation:'SOME LIKE IT HOT',  
  year: 1959 
  },

  {
  quote:"Here's looking at you, kid.", 
  source:'Rick Blaine', 
  citation:'CASABLANCA',  
  year: 1942
  },

  {
  quote:"What we've got here is failure to communicate.", 
  source:'Captain', 
  citation:'COOL HAND LUKE',  
  year: 1967 
  },

  {
  quote:"I'll be back.", 
  source:'Terminator', 
  citation:'THE TERMINATOR',  
  year: 1984 
  },
  
  {
  quote:"Mama always said life was like a box of chocolates. You never know what you're gonna get.", 
  source:'Forest Gump', 
  citation:'FORREST GUMP',  
  year: 1994 
  },
  
  {
  quote:"Hello, gorgeous", 
  source:'Fanny Brice', 
  citation:'FUNNY GIRL',  
  year: 1968 
  },

  {
  quote:"My precious.", 
  source:'Gollum', 
  citation:'THE LORD OF THE RINGS: TWO TOWERS',  
  year: 2002 
  },

  {
  quote:"I'm king of the world!", 
  source:'Jack Dawson', 
  citation:'TITANIC',  
  year: 1997
  }

];


//Funtion to generate random quotes
function getRandomQuote () {
  let randomNumber = Math.floor(Math.random()*quotes.length);
  return quotes[randomNumber];
}


//Function to print random quote to web page
function printQuote() {
  let html = "";
  let randomQuote = getRandomQuote();
  html = `
  <p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source}
  `;

  //Include the citation if quote provides it
  if ("citation" in randomQuote) {
    html += `<span class="citation"> ${randomQuote.citation} </span>`;
  }

  //Include the year if quote provides it
  if ("year" in randomQuote) {
    html += `<span class="year"> ${randomQuote.year}</span>`;
  }

  document.getElementById('quote-box').innerHTML = html;
}

document.getElementById('load-quote').addEventListener("click", printQuote, false);