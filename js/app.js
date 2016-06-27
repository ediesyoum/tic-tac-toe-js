window.onload = function () {
  console.log("I've been linked!");


 var boxes = document.getElementsByClassName('box');
    for (var i=0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', start);
}

// need to create "play" function here


}
