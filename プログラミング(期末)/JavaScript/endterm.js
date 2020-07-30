$("#top-page").click (function (){
    window.location.href = 'https://novil-official.github.io/%E3%83%95%E3%82%9A%E3%83%AD%E3%82%AF%E3%82%99%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%AF%E3%82%99(%E6%9C%9F%E6%9C%AB)/top-page.html';
});

$("#about-music").click (function () {
   window.location.href = 'https://novil-official.github.io/%E3%83%95%E3%82%9A%E3%83%AD%E3%82%AF%E3%82%99%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%AF%E3%82%99(%E6%9C%9F%E6%9C%AB)/about-music.html'; 
});

$("#link-navigation").click (function () {
   window.location.href = 'https://novil-official.github.io/%E3%83%95%E3%82%9A%E3%83%AD%E3%82%AF%E3%82%99%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%AF%E3%82%99(%E6%9C%9F%E6%9C%AB)/link-navigation.html'; 
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
