$(document).ready(function () {

    // var myanswer = "";
    filename = [
        "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg",
        "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg",
        "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg",
        "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg",
        "21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg",
        "26.jpg", "27.jpg", "28.jpg", "29.jpg", "30.jpg",
        "31.jpg", "32.jpg", "33.jpg", "34.jpg", "35.jpg",
        "36.jpg", "37.jpg", "38.jpg",
        "39.jpg", "40.jpg", "41.jpg", "42.jpg", "43.jpg",
        "44.jpg", "45.jpg", "46.jpg",
        "47.jpg", "48.jpg", "49.jpg", "50.jpg", "51.jpg",
        "52.jpg", "53.jpg", "54.jpg", "55.jpg", "56.jpg"];

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
        "wa", "wo", "n",
        "ga","gi","gu","ge","go",
        "za", "ji", "zu", "ze", "zo"];

    selected = [];
    var loop;
    win = 0;
    loss = 0;

    // game setup
    gamesetup();
    // $("#ans1").html(myanswer);

    $('#skipbutton').on('click', function () {
        gamesetup();
    })


    // click register
    $("#ans1").on('click', function () {
        selectedanswer = $("#ans1").text();
        console.log(selectedanswer);
        checkifcorrect();
    })
    $("#ans2").on('click', function () {
        selectedanswer = $("#ans2").text();
        console.log(selectedanswer);
        checkifcorrect();
    })
    $("#ans3").on('click', function () {
        selectedanswer = $("#ans3").text();
        console.log(selectedanswer);
        checkifcorrect();
    })
    $("#ans4").on('click', function () {
        selectedanswer = $("#ans4").text();
        console.log(selectedanswer);
        checkifcorrect();
    })

    $("#goback").on('click', function () {
        window.location = "/";
    })



    //prevent the normal submission of the form

    function checkifcorrect() {
        if (selectedanswer == myanswer) {
            $('#puzzlejp').attr("src", "/response/correct.png");
            setTimeout(function () { gamesetup(); }, 300)
            win++;
            showscores();
            $('#scorewin').text(win);
        }
        else {
            $('#puzzlejp').attr("src", "/response/wrong.png");
            setTimeout(function () { gamesetup(); }, 300)
            loss++;
            showscores();
            $('#scoreloss').text(loss);
        }

    }


    showtip();


})

function showscores() {
    console.log("win: " + win);
    console.log("loss: " + loss);
}

function gamesetup() {
    selected = [];

    $(this).addClass("active").siblings().removeClass("active");

    if ($('#puzzlejp').hasClass("imageclipleft")) {
        $('#puzzlejp').removeClass('imageclipleft');
        $('#puzzlejp').addClass('imageclipright');
    }



    for (i = 1; i <= 4; i++) {
        // console.log(romanjipop);

        loop = true;
        while (loop) {
            loop = true;
            randomletterstart = Math.floor(Math.random() * (romanji.length));
            // console.log(randomletterstart);
            // console.log((romanji[randomletterstart]));

            if (selected.indexOf(romanji[randomletterstart]) == -1) {
                selected.push(romanji[randomletterstart]);
                $("#ans" + i).html(romanji[randomletterstart]);
                loop = false;
            }
        }

        // console.log(romanjipop);
    }


    // select image
    randomimage = Math.floor(Math.random() * (romanji.length));
    $('#puzzlejp').attr("src", "/katakana/" + filename[randomimage]);
    myanswer = romanji[randomimage];
    // console.log(filename[randomimage]);
    // console.log(randomimage);
    // console.log(romanji);
    // console.log(myanswer);

    if (selected.indexOf(myanswer) !== -1) {
        // console.log("alteady there");
    }
    else {
        // console.log("need to add to a random place")
        randomplace = Math.floor(Math.random() * (4)) + 1;
        $("#ans" + randomplace).html(myanswer);

    }

}

function showtip() {
    $('#showtip').on('click', function () {
        // console.log("show tip");


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