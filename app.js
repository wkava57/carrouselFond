let tabloImg = [
    "./imgs/img1.jpg", 
    "./imgs/img2.jpg",
    "./imgs/img3.jpg",
    "./imgs/img4.jpg",
    "./imgs/img5.jpg",
];
let container = document.getElementById("container");
const carrousel = document.getElementById("carrousel");
let btnG = document.getElementById("btnG");
let btnD = document.getElementById("btnD");
let index = 0;


// Mettre dans un premier temps une image de fonds dans le container pour commencer avec une image
carrousel.style.backgroundImage = 'url('+tabloImg[index]+')';


// ne pas oublier de mettre container en cover 

// au click du bouton gauche l'image de fond prend une déccrémentation index-- si index est inférieur à 0
btnG.addEventListener("click", () =>{
    index--;
    if(index < 0){
        // 
         index = tabloImg.length-1;
                         
    }
    carrousel.style.backgroundImage = 'url('+tabloImg[index]+')';
    
})

btnD.addEventListener("click", () =>{
    index++;
    if(index > tabloImg.length-1){
         index = 0;                  
    }
    carrousel.style.backgroundImage = 'url('+tabloImg[index]+')';
    
})