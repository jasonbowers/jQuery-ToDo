//check off specific todos by clicking
//using .on "click" and passing the li so newly added lis are affected by this code
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

//Click on X to delete to do
$("ul").on("click", "li span", function(e){
  //fade out parent and remove it after 500ms
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
    console.log("parent remove");
  });
  //stop bubbling
  e.stopPropagation();
});

//get enter button keypress on the input
$("input[type='text']").keypress(function(e){
  if(e.which === 13){
    //get text in the input
    var todoText = $(this).val();
    //clear the input and append a li to the ul
    $(this).val("");
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
  }
});

$("#plus").click(function(){
  $("input[type='text']").fadeToggle();
});
