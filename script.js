
var main = document.querySelector("main");

let posts = [
    {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMRM3DfofbBBvqXlRheeRDNvl3vY83tp38hw&s",
    Title: "Shrek",
    Post: "This is a picture of a cool shrek."
    },
    {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR00aYvRzdGNGGM-VufGsZf735X4kvLtvPIYQ&s",
    Title: "Me As a baby",
    Post: "This is a picture of me as a baby, i was such a funny kid."
    },
    {
    image:"https://thunderdungeon.com/wp-content/uploads/2024/10/ai-fails-8-20241004.jpg",
    Title: "Skibidy boy",
    Post: "This is a picture of an AI Skibidy boy."
    } 
];

posts.forEach(function(post){
 main.insertAdjacentHTML('beforeend',`
    <img src="${post.image}>"
    <h3>${post.Title}</h3>
    <p>${post.Post}</p>
 `);
 });








