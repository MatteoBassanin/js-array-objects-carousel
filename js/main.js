const imgArray = [
    '01.webp',
    '02.webp',
    '03.webp',
    '04.webp',
    '05.webp'
];


const imgListDom = document.querySelector('.img_list');
const imgThumbDom = document.querySelector(`.container_thumbs`);
let bigWrapperDom = "";
let thumsWrapperDom = "";

for (let i = 0; i < imgArray.length; i++ ){
    const newImgWrapper =   `<div class="img_wrapper">
    <img class="img_cover" src="img/${imgArray[i]}" />
    </div>`;
    const newImgThumb = `<div class="thumbs_wrapper">
    <img class="img_thumb" src="img/${imgArray[i]}" alt="" />
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
        
        // nextDom.classList.remove('hide');
       
     
    }
);