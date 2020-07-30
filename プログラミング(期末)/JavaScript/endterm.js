$("#top-page").click (function (){
    window.location.href = 'top-page.html';
});

$("#about-music").click (function () {
   window.location.href = 'about-music.html'; 
});

$("#link-navigation").click (function () {
   window.location.href = 'link-navigation.html'; 
});

function charactersize(size) {
    if (size == 0) {
        $("p").css('font-size', '1em');
    } else if (size == 1) {
        $("p").css('font-size', '1.5em');
    } else {
        $("p").css('font-size', '2em');
    }
}
