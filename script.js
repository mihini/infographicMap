// //Change color on mouseover
// $(".land").on("mouseover", function(){
//   $(this).css({ "fill": "#adadad", "stroke": "#505050"});
//   $(".land").on("mouseleave", function(){
//     $(this).css({ "fill": "#CCCCCC", "stroke": "white"});
//   });
//   console.log(this.id);
// });
$(".introText").hide(0).delay(500).fadeIn(2000);

//Change color on mouseover
$(".land").hover(function(){
  $(this).css({"fill-opacity":"1.1" ,"stroke": "#505050", "cursor": "pointer"});
  }, function(){
      // removes style
      $(this).removeAttr("style");
      // $(this).css(
      //   { "fill": "#CCCCCC", "stroke": "white"});
});

var text= "";
  //Country text
$(".land").on("click", function(){
  switch (this.id) {
    case "CN":
      text = "China: People in China speak chinese, There is at least 1,5 billion people in China that speaks chinese. The principal language is Mandarin-chinese and there is at least 298 languages/dialects in China.";
      break;
    case "SE":
      text = "Sweden: Swedish is the principal language. At least 89% of the population know english. Other than swedish there is minority languages like finnish and saami.";
      break;
    case "US":
      text = "USA: The national language in USA is english. 230 million people in USA speak english. Hawaiian and english is official language in Hawaii. De facto provincial language in New Mexico is spanish";
      break;
    case "GB":
      text = "UK: The official language is english. 95% of the UK's population are monolingual english spekers. ";
      break;
    case "TW":
      text = "Taiwan: The official language is Mandarin-chinese. 70% of the population speaks taiwanese hokkien(chinese dialect) as their mother tongue in addition to mandarin.";
      break;
    case "KR":
      text = "South Korea: The official language in korea is korean. At least 77 million speaks korean";
      break;
    case "IN":
      text = "India: Principal languages used in India are english and hindi. India has 122 major languages/dialects";
      break;
    case "DE":
      text = "Germany: The official language in Germany is german and over 95% of the population speaks it.";
      break;
      default: text= "No information";

  }
    popup(text);
});


var isClicked = false;
//Show family languages
$("#btnFamily").on("click", function(){
  $(".top5Lang").hide();

  if(isClicked){
    $(".spanish").removeClass("spanishColor");
    $(".english").removeClass("englishColor");
    $(".chinese").removeClass("chineseColor");
    $(".hindi").removeClass("hindiColor");
    $(".arabic").removeClass("arabicColor");

  }

  $(".indo").addClass("indoColor");
  $(".sino").addClass("sinoColor");
  $(".austro").addClass("austroColor");
  $(".afro").addClass("afroColor");
  $(".trans").addClass("transColor");
  $(".niger").addClass("nigerColor");
  isClicked =true;

  $(".langFam").hide(0).delay(50).fadeIn(250);
});

//Show top 5 languages
$("#btnTop").on("click", function(){
  $(".langFam").hide();

  if(isClicked){
    $(".indo").removeClass("indoColor");
    $(".sino").removeClass("sinoColor");
    $(".austro").removeClass("austroColor");
    $(".afro").removeClass("afroColor");
    $(".trans").removeClass("transColor");
    $(".niger").removeClass("nigerColor");

  }



  $(".spanish").addClass("spanishColor");
  $(".english").addClass("englishColor");
  $(".chinese").addClass("chineseColor");
  $(".hindi").addClass("hindiColor");
  $(".arabic").addClass("arabicColor");


  isClicked =true;

  $(".top5Lang").hide(0).delay(50).fadeIn(250);

});
$("#btnReset").on("click", function(){
  $(".spanish").removeClass("spanishColor");
  $(".english").removeClass("englishColor");
  $(".chinese").removeClass("chineseColor");
  $(".hindi").removeClass("hindiColor");
  $(".arabic").removeClass("arabicColor");

  $(".indo").removeClass("indoColor");
  $(".sino").removeClass("sinoColor");
  $(".austro").removeClass("austroColor");
  $(".afro").removeClass("afroColor");
  $(".trans").removeClass("transColor");
  $(".niger").removeClass("nigerColor");

  $(".top5Lang").hide();
  $(".langFam").hide();



});
//Top countries color
// $("#btnTop").on("click", function(){
//   $(".spanish").css(
//     { "fill": "#b60000", "stroke": "#505050"});
//
//   $(".english").css(
//     { "fill": "#0a741b", "stroke": "#505050"});
//
//   $(".hindi").css(
//     { "fill": "#75087e", "stroke": "#505050"});
//
//   $(".arabic").css(
//     { "fill": "#9e0c49", "stroke": "#505050"});
//
//   $(".chinese").css(
//     { "fill": "#32a298", "stroke": "#505050"});
//
// });

//Popup ruta
function popup(text){
  $(".countryText").empty();
  $(".countryInfo").css("display", "block");
  $(".countryText").append(text);


  $(".close").on("click", function(){
    $(".countryInfo").css("display", "none");
  });

}
