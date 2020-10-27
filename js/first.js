// This is the Array of  images in the page 
var myImg =Array.from(document.getElementsByClassName('img-fluid'));
// This is the box image that appear when click image 
var myBox = document.getElementById('myBox');
// The button to close The image 
var close = document.getElementById('close');
// The button to Go to the next Image 
var next = document.getElementById('next');
// The button to Go to the previous Image 
var prev = document.getElementById('prev');
// I create variable to know the index of image in Array When i click in any image 
var currentIndex  = 0  ; 


for (var i =0 ; i < myImg.length; i++) 
{
    myImg[i].addEventListener("click" , showImg )
}

close.addEventListener("click" , closeImg );


next.addEventListener("click" , goNext );

prev.addEventListener("click" , goPrev  );

function showImg(e)
{
    myBox.style.display = "flex" ; 
    var imgSrc  =   e.target.src ; 
    myBox.firstElementChild.style.backgroundImage = "url("+ imgSrc +")"
    myBox.firstElementChild.style.backgroundImage = "url("+ myImg[0] +")"

    currentIndex = myImg.indexOf(e.target) ; 
}

function closeImg()
{
    myBox.style.display = "none" ; 
}
function goNext()
{
    currentIndex++  ;
    if(currentIndex == myImg.length)   currentIndex = 0 ; 
    else 
    myBox.firstElementChild.style.backgroundImage = "url("+ myImg[currentIndex].src +")"
}

function goPrev()
{
    currentIndex-- ; 
    if(currentIndex < 0 )   currentIndex = myImg.length-1 ; 
    else 
    myBox.firstElementChild.style.backgroundImage = "url("+ myImg[currentIndex].src +")"
}

document.addEventListener("keydown"  , function(e)
{
    if(e.keyCode == 39)  goNext() ; 
    else if (e.keyCode == 37)  goPrev() ; 
    else if(e.keyCode == 27)  closeImg(); 
    else if(e.keyCode == 32)  showImg(); 

});