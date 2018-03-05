$(function(){
  //document Ready
  alert("document ready");



  $('#searchform').submit(function(){
    var searchterms = $("searchterms").val();
    addItemList(searchterms);
    return false;
  });
});

function addItemToList (item) {
  $('results').append("<li>" +item + <"</li>");
}
