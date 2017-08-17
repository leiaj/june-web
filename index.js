$(document).ready(function() {
  console.log("Hi I am loaded")
  logo()
  navBar()
  menuImg()
  eventImg()
})

function logo(){
  $('#navbar').html(function(){
    return '<center><br><br><br><a href="index.html"><img src="images/Junebarlogo.png"></img></a></center>'
  })
}

function navBar(){
  $('#actualNavBar').html(function(){
    return '<div class="ui fluid five item menu"><a class="item" href="menu.html">Menu</a><a class="item" href="events.html">Events</a><a class="item" href="gallery.html">Gallery</a><a class="item">Contact</a><a class="item">Hours</a></div>'
  })
}

function menuImg(){
  $('#menu').html(function(){
    return '<br><br><center><img src="images/junemenu1.png"></img><img src="images/junemenu2.png"></img></center>'
  })
}

function eventImg(){
  var feed = new Instafeed({
        get: 'location',
        locationId: '1905780242995666',
        clientId: 'bef6401d60bf42778fb1d55644f535bf',
        accessToken: '7345015.1677ed0.0bf47f94d28943f6a5cad5e90cba76c4'
    });
    feed.run();
}
