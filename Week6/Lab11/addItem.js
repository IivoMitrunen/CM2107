$(function() {
  alert("document ready");

$("#searchform").submit(function(){
  addItemList("example item");
  return false;
  });
});

function addItemList (item){
  $("#results").append("<li>" +item + "</li>");
}
