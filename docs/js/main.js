let iframeId = "chapter-content";

function navOnClickHandler(chapterName) {
    let iframe = document.getElementById(iframeId);
    iframe.src = `./${chapterName}.html`;
}

window.onload = function() {
    // Get the image element
    var img = document.getElementById("image");
    
    // Check if the image width exceeds the container width
    if (window.innerWidth < 700) {
      // Resize the image to fit the container width
      img.style.width = "300px";
      img.style.height = "auto";
    }
  };