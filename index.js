$(document).ready(function() {
  console.log("Hi I am loaded")
  logo()

})

function logo(){
  $('#navbar').html(function(){
    return '<center><br><br><br><img src="images/Junebarlogo.png"></img></center>'
  })
}
