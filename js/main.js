const imgArray = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }

]




const imgListDom = document.querySelector('.img_list');
const imgThumbDom = document.querySelector(`.container_thumbs`);
let bigWrapperDom = "";
let thumsWrapperDom = "";

for (let i = 0; i < imgArray.length; i++ ){
    const newImgWrapper =   `<div class="img_wrapper">
    <img class="img_cover" src="${imgArray[i].image}" />
    <div class="text_container">
    <h3> ${imgArray[i].title} </h3>
    <p>  ${imgArray[i].text} </p>
    </div>
    </div>`;
    const newImgThumb = `<div class="thumbs_wrapper">
    <img class="img_thumb" src="${imgArray[i].image}" alt="" />
    </div>`;

    bigWrapperDom += newImgWrapper;
    thumsWrapperDom += newImgThumb ;

}

console.log(bigWrapperDom);
console.log(thumsWrapperDom);

imgListDom.innerHTML = bigWrapperDom;
imgThumbDom.innerHTML = thumsWrapperDom;

const imgWrapperDOM = document.getElementsByClassName('img_wrapper');
const imgWrapperThumbDom = document.getElementsByClassName('img_thumb');

let activeImage = 0;

imgWrapperDOM[activeImage].classList.add('show');
imgWrapperThumbDom[activeImage].classList.add('selected');

const nextDom = document.querySelector('#next');
const prevDom = document.querySelector('#prev');


nextDom.addEventListener('click', 
    function() {
     
            
            imgWrapperDOM[activeImage].classList.remove('show');
            imgWrapperThumbDom[activeImage].classList.remove('selected');
            
            
            if (activeImage == imgWrapperDOM.length - 1){
                activeImage = 0;
                
            }else{
                activeImage++;
            }
            
            imgWrapperDOM[activeImage].classList.add('show');
            imgWrapperThumbDom[activeImage].classList.add('selected');
        
    }
);



prevDom.addEventListener('click', 
    function() {

        imgWrapperThumbDom[activeImage].classList.remove('selected');
        imgWrapperDOM[activeImage].classList.remove('show');
        
        if (activeImage == 0){
            activeImage = imgWrapperDOM.length - 1;
        }else {
            activeImage--;
        }
        
        imgWrapperDOM[activeImage].classList.add('show');
        imgWrapperThumbDom[activeImage].classList.add('selected');
        
     
       
     
    }
);





imgWrapperThumbDom[0].addEventListener('click',function(){
        
            imgWrapperDOM[activeImage].classList.remove('show');
            imgWrapperDOM[0].classList.add("show");
            imgWrapperThumbDom[activeImage].classList.remove('selected');
            imgWrapperThumbDom[0].classList.add('selected');
         
        }    
        );
    

imgWrapperThumbDom[1].addEventListener('click',function(){
        
            imgWrapperDOM[activeImage].classList.remove('show');
            imgWrapperDOM[1].classList.add("show");
            imgWrapperThumbDom[activeImage].classList.remove('selected');
            imgWrapperThumbDom[1].classList.add('selected');
         
        }    
        );
        

imgWrapperThumbDom[2].addEventListener('click',function(){
        
            imgWrapperDOM[activeImage].classList.remove('show');
            imgWrapperDOM[2].classList.add("show");
            imgWrapperThumbDom[activeImage].classList.remove('selected');
            imgWrapperThumbDom[2].classList.add('selected');
         
        }    
        );


imgWrapperThumbDom[3].addEventListener('click',function(){
        
            imgWrapperDOM[activeImage].classList.remove('show');
            imgWrapperDOM[3].classList.add("show");
            imgWrapperThumbDom[activeImage].classList.remove('selected');
            imgWrapperThumbDom[3].classList.add('selected');
         
        }    
        );


imgWrapperThumbDom[4].addEventListener('click',function(){
        
            imgWrapperDOM[activeImage].classList.remove('show');
            imgWrapperDOM[4].classList.add("show");
            imgWrapperThumbDom[activeImage].classList.remove('selected');
            imgWrapperThumbDom[4].classList.add('selected');
         
        }    
        );







