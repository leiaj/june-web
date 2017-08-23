$(document).ready(function() {
  console.log("Hi I am loaded")
  logo()
  // navBar()
  // menuImg()
  logoBlink()
  homePage()

})

function logo(){
  $('#logo').html(function(){
    return '<center><br><br><br><a href="index.html"><img src="images/Junebarlogo.png" id="blinking_image"></img></a></center>'
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
    return '<br><br><div id="gifs"><img src="images/cheers.gif"><img src="images/cheers.gif"><img src="images/cheers.gif"><img src="images/cheers.gif"><img src="images/cheers.gif"><img src="images/cheers.gif"><br><br><img src="images/coffee.gif"><img src="images/coffee.gif"><img src="images/coffee.gif"><img src="images/coffee.gif"><img src="images/coffee.gif"><img src="images/coffee.gif"><img src="images/coffee.gif"><br><br><img src="images/skelly.gif"><img src="images/skelly.gif"><img src="images/skelly.gif"><img src="images/skelly.gif"><img src="images/skelly.gif"><img src="images/skelly.gif"><br><br><img src="images/bud.gif"><img src="images/bud.gif"><img src="images/bud.gif"><img src="images/bud.gif"><img src="images/bud.gif"><img src="images/bud.gif"><img src="images/bud.gif"><img src="images/bud.gif"><img src="images/bud.gif"><img src="images/bud.gif"></div>'
  })
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
