$(document).ready(function() {
  console.log("Hi I am loaded")
  logo()
  navBar()
  menuImg()

})

function logo(){
  $('#navbar').html(function(){
    return '<center><br><br><br><img src="images/Junebarlogo.png"></img></center>'
  })
}

function navBar(){
  $('#actualNavBar').html(function(){
    return '<div class="ui fluid five item menu"><a class="item" href="menu.html">Menu</a><a class="item" href="events.html">Events</a><a class="item">Gallery</a><a class="item">Contact</a><a class="item">Hours</a></div>'
  })
}

function menuImg(){
  $('#menu').html(function(){
    return '<br><br><center><img src="images/junemenu1.png"></img><img src="images/junemenu2.png"></img></center>'
  })
}
