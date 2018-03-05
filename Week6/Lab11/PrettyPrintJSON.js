$(function() {
  // document Ready
  alert("document ready");


$('#searchform').submit(function() {
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
  var url ="http://wwww.omdbapi.com/?apikey=8dbb4272&s=" + searchterms;
    //use jquery json shortcut
    $.getJSON(url, function(jsondata) {
      //handle the results
      prettyprintJSON(jsondata);
    });
}


function prettyprintJSON(jsondata) {
    //prints the JSON to the screen
    var normal = JSON.stringify(jsondata, null, 4);
    $('#resultsbox').append("<pre>" + pretty + "</pre>");
}
