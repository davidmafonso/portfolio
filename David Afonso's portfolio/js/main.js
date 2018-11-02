// define a function that can take two parameters
function loadImage(id, targetId) {

// fetch the HTML element by using the value of id
var el = document.getElementById(id);

// fetch a target element to add a class to, but only if a targetId is provided. Otherwise, we revert to the element above    
var targetEl = targetId ? document.getElementById(targetId) : el;

// instantiate the imageToLoad variable    
var imageToLoad;

// if data-image is provided, we use that value if the browser doesn't support srcset and currentSrc , we use the src value of the <img> otherwise we can simply use currentSrc
if (el.dataset.image) {
imageToLoad = el.dataset.image;
} else if (typeof el.currentSrc === 'undefined') {
imageToLoad = el.src;
} else {
imageToLoad = el.currentSrc;
}

// check if imageToLoad holds a value    
if (imageToLoad) {

// create a new image from which the src is the value of the imageToLoad    
var img = new Image();
img.src = imageToLoad;

// when the image is completely loaded by the browser, we add the CSS class is-loaded to the target element
img.onload = function() {
targetEl.classList.add('is-loaded');
};
}
}



document.addEventListener('DOMContentLoaded', function() {
loadImage('wallpaper');
loadImage('pictureImage', 'picture');
});
