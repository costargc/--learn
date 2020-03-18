$(document).ready(function () {

    myanswer = "";
    filename = ["1.png", "2.png", "3.png", "4.png", "5.jpg", "6.png", "7.png", "8.png", "9.png", "10.png", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg", "21.jpg", "22.jpg", "23.jpg", "24.png", "25.jpg", "26.png", "27.jpg", "28.jpg", "29.jpg", "30.png", "31.jpg", "32.jpg", "33.jpg", "34.jpg", "35.jpg", "36.jpg", "37.png", "38.jpg", "39.png", "40.jpg", "41.jpg", "42.jpg", "43.jpg", "44.png", "45.jpg", "46.jpg"];
    romanji = [
        "a", "i", "u", "e", "o",
        "ka", "ki", "ku", "ke", "ko",
        "sa", "si", "su", "se", "so",
        "ta", "chi", "tsu", "te", "to",
        "na", "ni", "nu", "ne", "no",
        "ha", "hi", "fu", "he", "ho",
        "ma", "mi", "mu", "me", "mo",
        "ya", "yu", "yo",
        "ra", "ri", "ru", "re", "ro",
        "wa", "wo", "n"];

    inititialsetup();
    skiptestcheck();





    //prevent the normal submission of the form
    $('.form-control').on('keyup', function () {
        console.log($(this).val());
        if ($(this).val() == myanswer) {
            console.log("you got it!")
        }
    });



    console.log(filename[randomletter]);
    console.log(myanswer);

    showtip();


})


function inititialsetup() {
    randomletter = Math.floor(Math.random() * (45 - 0 + 1)) + 0;
    $('#puzzlejp').attr("src", "/hiragana/" + filename[randomletter]);
    myanswer = romanji[randomletter];
}

function skiptestcheck() {
    $('#skipbutton').on('click', function () {
        randomletter = Math.floor(Math.random() * (45 - 0 + 1)) + 0;
        $('#puzzlejp').attr("src", "/hiragana/" + filename[randomletter]);
        myanswer = romanji[randomletter];

        if ($('#puzzlejp').hasClass("imageclipleft")) {
            $('#puzzlejp').removeClass('imageclipleft');
            $('#puzzlejp').addClass('imageclipright');
        }
    })
}

function showtip() {
    $('#showtip').on('click', function () {
        console.log("show tip");


        if ($('#puzzlejp').hasClass("imageclipleft")) {
            $('#puzzlejp').removeClass('imageclipleft');
            $('#puzzlejp').addClass('imageclipright');
        }
        else {
            $('#puzzlejp').removeClass('imageclipright');
            $('#puzzlejp').addClass('imageclipleft');
        }


    });
}