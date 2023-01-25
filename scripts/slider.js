const photos = ["images/meme-1.jpg", "images/meme-2.jpg", "images/meme-3.jpg", "images/meme-4.jpg"]

const prevBtn = document.querySelector('.arrow-prev');
const nextBtn = document.querySelector('.arrow-next');

const imgTag = document.querySelector(".slider__image");
let count = 0;

function next(){
    count++;
    if(count >= photos.length){
        count = 0;
        imgTag.src = photos[count];
    } else{
        imgTag.src = photos[count];
    }
}

function prev(){
    count--;
    if(count < 0) {
        count = photos.length -1;
        imgTag.src = photos[count];
    } else {
        imgTag.src = photos[count];
    }
}

prevBtn.addEventListener('click', function(e) {
    prev();
});

nextBtn.addEventListener('click', function(e){
    next();
})