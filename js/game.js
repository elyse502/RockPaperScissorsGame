
let object = [
    {equalize:"paper",win1:"rock",win2:"spock",lose1:"scissors",lose2:"lizard"},
    {equalize:"scissors",win1:"paper",win2:"lizard",lose1:"rock",lose2:"spock"},
    {equalize:"rock",win1:"scissors",win2:"lizard",lose1:"paper",lose2:"spock"},
    {equalize:"lizard",win1:"paper",win2:"spock",lose1:"scissors",lose2:"rock"},
    {equalize:"spock",win1:"scissors",win2:"rock",lose1:"paper",lose2:"lizard"}
];
let score = 0;

window.onload = () => {

$(".clone").hide()
$(".score p").text(score)
}

//function for show and hide rules

$(".rules").on("click", function () {

$(".show-rules").toggleClass("hide");
})
$(".display img").on("click",function () {

$(".show-rules").addClass("hide");
if ($(".show-rules").attr("id") == $(".se-rl").attr("data-lose") ) {
console.log($(".se-rl").attr("data-lose"))
}else(
console.log($(".se-rl").attr("data-win"))
)

})



let theButton = $(".level");

let theHrRules = $(".hrd-rl");

let theEarules = $(".se-rl");
// function for start playing game
function CloneDiv(thebackground) {

for (let i = 0; i < 5; i++) {

$(thebackground).eq(i).on("click",function () {
    let theRandom = Math.floor(Math.random() * 3);
   
    $(".level").css("opacity",'0')

    $(thebackground).eq(i).clone().appendTo($('.select'));

    $(".clone").show()

    $(".selected").hide();

    setTimeout(() =>{ $(thebackground).eq(theRandom).clone().appendTo($('.cp-select'))

if ($(thebackground).eq(theRandom).attr("id") == object[i].equalize) {

    $(".play p").text("you draw");

    $(".play button").css("color",'blue')
}
if($(thebackground).eq(theRandom).attr("id") == object[i].win1 || $(thebackground).eq(theRandom).attr("id") == object[i].win2 ) {

    score++;

    $(".play p").text("you win");

    $(".score p").text(score);

    $(".play button").css("color",'green');

   
}
if ($(thebackground).eq(theRandom).attr("id") == object[i].lose1 || $(thebackground).eq(theRandom).attr("id") == object[i].lose2 ) {
    
    $(".play p").text("you lose");

    $(".play button").css("color",'red');

    if (score > 0) {

        score--;

    $(".score p").text(score);

    }else{

        $(".play").show()

    }
    
    
}
$(".play").show();

$(".clone .cp-select").css("opacity","1");

$(".play button").addClass("scale");
 
},1000)
})

}

}
CloneDiv($(".hard .background"));

CloneDiv($(".easy .background"));

// function to replay game

$(".play button").on("click",function () {

$(".clone .cp-select").css("opacity","0");

$(".clone .select .background").remove();

$(".clone .cp-select .background").remove();

$(".level").css("opacity",'1');

$(".play").hide();

$(".clone").hide();

$(".selected").show();

})
//function to change the level of game

$(theButton).on("click",function () {


if ($(theHrRules).hasClass("hide")) {


$(".hard").show().addClass("selected");

$(".easy").hide().removeClass("selected");

$(theHrRules).removeClass("hide");

$(theEarules).addClass('hide');

$(theButton).text("set to easy");

$(".head .name img").attr("src", $(".hr").attr('src'));

}else{
$(".easy").show().addClass("selected");

$(".hard").hide().removeClass("selected");

$(theHrRules).addClass("hide");

$(theEarules).removeClass('hide');

$(theButton).text("set to hard");

$(".head .name img").attr("src", $(".es").attr('src'));

}


})
