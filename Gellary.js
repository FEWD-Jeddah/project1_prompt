let sliderImages = document.querySelectorAll('.slide');
let arrowRight = document.querySelector('#arrow-right');
let current = 0;


function reset(){
    for(let i = 0; i < 4; i++){
        sliderImages[i].style.display = 'none';
        
    }
};


function slideRight(){
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
}


arrowRight.addEventListener('click', function(){
    if(current === 4 - 1){
        current = -1;
    }
        slideRight();
    
    
});

