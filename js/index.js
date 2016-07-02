FastClick.attach(document.body);
~function () {
    var clinW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = clinW / 640 * 100 + "px";
}();
new Swiper(".swiper-container",{
    loop:true,
    direction:"vertical",
    onSlidePrevEnd: changeEnd,
    onSlideNextEnd: changeEnd
});
function changeEnd(swiper){
    var n=swiper.activeIndex,
        slideAry=swiper.slides;
    [].forEach.call(slideAry,function(slide,index){
        if (n===index){
            //slide.id=(n==1||n==6)?"page1":"page2";
            if (slide.id=(n==1||n==6)){
                slide.id="page1";
            }else if (slide.id=(n==2)){
                slide.id="page2";
            }else if (slide.id=(n==3)){
                slide.id="page3";
            }else if (slide.id=(n==4)){
                slide.id="page4";
            }else {
                slide.id="page5";
            }
            return
        }
        slide.id=null;
    })
}
var music = document.getElementById("music"),
    musicAudio = document.getElementById("musicAudio");
window.setTimeout(function () {
    musicAudio.play();
    musicAudio.addEventListener("canplay", function () {
        music.style.display = "block";
        music.className = "music move";
    }, false);
}, 1000);
music.addEventListener("click", function () {
    if (musicAudio.paused) {
        musicAudio.play();
        music.className = "music move";
        return;
    }
    musicAudio.pause();
    music.className = "music";
}, false);