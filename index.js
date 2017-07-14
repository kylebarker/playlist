$(document).ready(function() {
  console.log("ready!");

  $(window).load(function() {
    $.get("https://lit-fortress-6467.herokuapp.com/object", function(data) {

      var dataArray = data["results"];
      console.log(dataArray)
      var coverArtArray = [];

      //push to art array
      for(var i = 0; i < dataArray.length; i++){
        var coverArt = dataArray[i]["cover_art"];
        coverArtArray.push(coverArt);
      }
      //make random piece of art
      var randomArtOne = coverArtArray[Math.floor(Math.random()*coverArtArray.length)];
      var randomArtTwo = coverArtArray[Math.floor(Math.random()*coverArtArray.length)];
      var randomArtThree = coverArtArray[Math.floor(Math.random()*coverArtArray.length)];

      //make sure we don't have duplicates on the art
      while(randomArtOne === randomArtTwo || randomArtOne === randomArtThree || randomArtTwo === randomArtThree){
        randomArtTwo = coverArtArray[Math.floor(Math.random()*coverArtArray.length)];
        randomArtThree = coverArtArray[Math.floor(Math.random()*coverArtArray.length)];
      }

      var imageOneString = './images/' + randomArtOne;
      var imageTwoString = './images/' + randomArtTwo;
      var imageThreeString = './images/' + randomArtThree;


      $("#pictureOne").attr('src', imageOneString);
      $("#pictureTwo").attr('src', imageTwoString);
      $("#pictureThree").attr('src', imageThreeString);
    });
  });
});
