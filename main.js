const myBody = document.getElementsByTagName ('body')[0];
const btn= document.getElementById ('Color');
const currentColor = document.getElementById('nameCo');

let newColor;


btn.addEventListener('click', function Color(){
    newColor = '#' + (Math.random() * 0XFFFFFF<<0).toString (16) ;
    if ( newColor < 7){
        Color();
    }

 myBody.style.background = newColor;
    
 currentColor.innerHTML= newColor;

});

btn.addEventListener('mouseover',()=> {
    btn.style.color = '#00000';

});


btn.addEventListener('mouseleave',()=> {
    btn.style.color = 'newColor';

});
