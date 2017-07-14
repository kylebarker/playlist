$(document).ready(function() {
  console.log("ready!");


  $(window).load(function() {
    $.get("https://lit-fortress-6467.herokuapp.com/object", function(data) {
      var dataArray = data["results"];
      console.log(dataArray)

      //push to art array
      for (var i = 0; i < dataArray.length; i++) {
        var coverArt = dataArray[i]["cover_art"];
        var img = $('<img />').attr({
          'id': dataArray[i]["id"],
          'src': './images/' + coverArt,
          'class': 'albumArt',
        }).appendTo('.artList');
      }

      $('.albumArt').click(function(e) {
        var targetID = e.target["id"]
        for (var i = 0; i < dataArray.length; i++) {
          if (targetID == dataArray[i]["id"]) {
            var artist = dataArray[i]["artist"]
            var album = dataArray[i]["title"]
            var boxData = artist + ": " + album;
            $('.selectedTracks').append(
              $('<div/>')
              .addClass("trackInfo")
              .text(boxData)
            );
          }
        }
      });

      $('.clearButton').click(function() {
        $('.selectedTracks').empty();
      });

      $('.submitButton').click(function() {
    
      });


    });
  });
});
