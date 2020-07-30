$("#top-page").click (function (){
    window.location.href = '%E3%83%88%E3%83%83%E3%83%97%E3%83%9A%E3%83%BC%E3%82%B8.html';
});

$("#about-music").click (function () {
   window.location.href = '%E9%9F%B3%E6%A5%BD%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6.html'; 
});

$("#link-navigation").click (function () {
   window.location.href = '%E5%90%84%E7%A8%AESNS%E3%81%B8%E3%81%AE%E3%83%AA%E3%83%B3%E3%82%AF.html'; 
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