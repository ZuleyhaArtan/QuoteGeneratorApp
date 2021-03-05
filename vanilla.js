

const url = "https://api.quotable.io/random";

function newQuote(data){
   const randomNumber = Math.floor(Math.random() * data.length);
   return data[randomNumber];
}
function generateQuote(){
   fetch(url)
  .then(function(data) {
         return data.json();
    })
    .then(function(data){    
      const randomquote = newQuote(data); 

        document.getElementById("quote").innerHTML = data.content;
        document.querySelector(".author").innerHTML = "- " + data.author;
        
   })
 .catch(function(err) {
    console.log(err); 
    });
      
   }

   function buttonQuote() {
      tweet = `https://twitter.com/intent/tweet?text= ${ quote.innerHTML}-${author.innerHTML}`;
      window.open(tweet,"_blank")
  }
   
   btn.addEventListener("click", generateQuote());
   button.addEventListener("click", buttonQuote());

