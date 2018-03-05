$(function() {
  //document documentReady
  alert("document ready");


$('#searchform').submit(submit() {
  //get current value and add to items list
  var searchterms = $('#searchterms').val();
  //call our search youtube function
  getResultsFromOMDB(searchterms);
  return false;
  });
});

function getResultsFromOMDB(searchterms) {
  //call youtube API using ajax
  //build url for the reguest
  var url ="http://wwww.omdbapi.com/?apikey=8af9349a&s=" + searchterms;
    //use jquery json shortcut
    $.getJSON(url, function(jsondata) {
      //handle the results
      printJSON(jsondata);
    });
}


function printJSON(jsondata) {
    //prints the JSON to the screen
    var normal = JSON.stringify(jsondata);
    $('#resultsbox').append("<p>" + normal + "</p>");
}
