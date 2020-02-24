


var modal = document.getElementById("myModal")

var resume = document.getElementById("resume")
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01")
var captionText = document.getElementById("caption");


function check(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
//resume.onclick = function(){
//    modal.style.display = "block";
//    modalImg.src = this.src;
//captionText.innerHTML = this.alt;
 //   console.log(1)
 // };

  // Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
//span.onclick = function() {
 /// modal.style.display = "none";
//}
