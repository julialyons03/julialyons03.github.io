const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageList = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg'];


/* Declaring the alternative text for each image file */
const AltText = {
    'pic1.jpg': 'Pic1',
    'pic2.jpg': 'Pic2',
    'pic3.jpg': 'Pic3',
    'pic4.jpg': 'Pic4',
    'pic5.jpg': 'Pic5',
};

/* Looping through images */

/*newImage.setAttribute(‘src’, ‘images/pic’ + i + ‘.jpg’);*/

for (let i = 0; i < imageList.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src','images/'+ imageList[i]);
    //newImage.setAttribute('src', ‘images/’ + i + ‘.jpg’);
    newImage.setAttribute('alt', 'image'+(i+1));
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', displayedImage);


//Add click listener for thumbnail images
newImage.addEventListener('click',function(){
    displayedImage.setAttribute('src','images/'+imageList[i]);
    displayedImage.setAttribute('alt','Image ' + (i+1));
});
}
/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', function() {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
        //document.querySelector('.overlay').style.backgroundColor = 'rgba(0,0,0,0.5)';
    }else{
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
        //document.querySelector('.overlay').style.backgroundColor = 'rgba(0,0,0,0)';
    }
});