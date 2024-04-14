const quote=document.getElementById("quote");
const author=document.getElementById("author");

const apiurl="http://api.quotable.io/random";
async function getquote(url){
    const response=await fetch(url);
    var data=await response.json();
    quote.innerHTML=data.content;
    author.innerHTML=data.author;
}
getquote(apiurl);

function tweet(){
    tweetPost=`https://twitter.com/intent/tweet?text=${quote.innerHTML}--by ${author.innerHTML}`;
    window.open(tweetPost);
}