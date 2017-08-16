$(document).ready(function() {
  console.log("Hi I am loaded")
  logo()
  navBar()
  menuImg()
  // eventImages()
})

function logo(){
  $('#navbar').html(function(){
    return '<center><br><br><br><a href="index.html"><img src="images/Junebarlogo.png"></img></a></center>'
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

function eventImg(){
  
}
