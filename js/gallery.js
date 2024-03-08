
// function to display a full size image
function displayFullsize(image){

    let srcName = image.getAttribute('src');            // get src attribute of chosen image
    let largeImgSrcName = srcName.replace('small', 'large');   // change the "size" part of the file name
         
    let featuredImg = document.getElementById("featuredImg");   // get the image field which will diplay the featued picture  
    featuredImg.src = largeImgSrcName;      // assign largeImg src to featuredImf src
    console.log(featuredImg)

    // Display information on <figcaption> element
    let imgInfo = document.getElementById('imgInfo');
    imgInfo.innerHTML = image.alt;          // display alt attribute text to figcaption field

}
