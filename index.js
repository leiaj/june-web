$(document).ready(function() {
  console.log("Hi I am loaded")
  logo()
  // navBar()
  // menuImg()
  logoBlink()
  homePage()
  instaFeed()
})

function logo(){
  $('#logo').html(function(){
    return '<center><br><a href="index.html"><img src="images/Junebarlogo.png" id="blinking_image"></img></a></center><br><br><center><div id="nav"><h2><a href="gallery.html" id="gallery">GALLERY</a> <a href="contact.html" id="contact">CONTACT</a><a href="events.html" id="events">EVENTS</a><a href="menu.html" id="menu">MENU</a></h2></div></center>'
  })
}

function logoBlink(){
  var img = document.getElementById('blinking_image');
  var interval = window.setInterval(function(){
    if(img.style.visibility == 'hidden'){
        img.style.visibility = 'visible';
    }else{
        img.style.visibility = 'hidden';
    }
}, 500);
}

function instaFeed(){
  var userFeed = new Instafeed({
       get: 'user',
       userId: '1632740798',
       accessToken: '1632740798.1677ed0.3bb7d08f81af49a4b4753ebe14325e44',
       clientId: 'bef6401d60bf42778fb1d55644f535bf',
       resolution: 'thumbnail',
       limit: '18',
       template: '<div id="image"><center><br><a href="{{link}}"><img src="{{image}}" width="{{width}}" height="{{height}}"></a></center></div><div>'
   });
   userFeed.run();
}

// function navBar(){
//   $('#actualNavBar').html(function(){
//     return '<div class="ui inverted fluid three item menu"><a class="item" href="events.html">Events</a><a class="item" href="gallery.html">Gallery</a><a class="item">Contact</a></div>'
//   })
// }

// function menuImg(){
//   $('#menu').html(function(){
//     return '<br><br><center><img src="images/junemenu1.png"></img><img src="images/junemenu2.png"></img></center>'
//   })
// }

function homePage(){
  $('#welcome').html(function(){
    return '<br><div id="gifs"><a href="images/rocks.jpg"><img src="images/cheers.gif"></a><img src="images/cheers.gif" id="newfriend" onClick="newFriend()"><img src="images/cheers.gif"><img src="images/cheers.gif"><img src="images/cheers.gif"><img src="images/cheers.gif"><br><br><img src="images/coffee.gif"><img src="images/coffee.gif"><img src="images/coffee.gif"><img src="images/coffee.gif"><img src="images/coffee.gif"><img src="images/coffee.gif"><img src="images/coffee.gif"><br><br><img src="images/skelly.gif" onClick="chalkyHello()"><img src="images/skelly.gif"><img src="images/skelly.gif"><img src="images/skelly.gif"><img src="images/skelly.gif"><img src="images/skelly.gif"><br><br><img src="https://media1.giphy.com/media/qJmRItfKnC40M/giphy.gif"><img src="https://media1.giphy.com/media/qJmRItfKnC40M/giphy.gif"><img src="https://media1.giphy.com/media/qJmRItfKnC40M/giphy.gif"><img src="https://media1.giphy.com/media/qJmRItfKnC40M/giphy.gif"><img src="https://media1.giphy.com/media/qJmRItfKnC40M/giphy.gif"><img src="https://media1.giphy.com/media/qJmRItfKnC40M/giphy.gif"><marquee id="sit">"A great place to sit"</marquee></div>'
  })
}

function newFriend(){
  var msg = new SpeechSynthesisUtterance(`Welcome to Junes, New Friend`);
    msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == 'Friend'; })[0];
    speechSynthesis.speak(msg);
}

function chalkyHello(){
  var msg = new SpeechSynthesisUtterance(`Chalk e`);
    msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == 'Friend'; })[0];
    speechSynthesis.speak(msg);
}



// function instaGallery(){
//   fetch('https://api.instagram.com/v1/tags/junebrooklyn/media/recent?access_token=7345015.bef6401.88931f18e3a34515baf786432bfd90b1', {mode: 'no-cors'})
//   .then(function(response) {
//     console.log(response);
//   }).catch(function(error) {
//     console.log('Request failed', error)
//   });
// }



// function eventImg(){
// }
