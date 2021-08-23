let imgArr = [
    "./assets/airbnb.svg",
    "./assets/Hubspot logo.svg",
    "./assets/Google Logo.svg",
    "./assets/Microsoft Logo.svg",
    "./assets/Walmart Logo.svg",
    "./assets/FedEx logo.svg"
]




document.addEventListener("DOMContentLoaded", function(event) {
    var ulEle = document.querySelector('.carousel-list-cntnr');

    for (let i = 0; i < imgArr.length; i++) {
        let li = document.createElement('li');

        let img = document.createElement('img');
        img.src = imgArr[i];
        li.appendChild(img);
        ulEle.appendChild(li);
    }
});





function currentSlide(n) {
    var ulEle = document.querySelector('.carousel-list-cntnr');
    var n = [];
    for (let i = 0; i < imgArr.length; i++) {
        let newlocation = (i + (imgArr.length - 1)) % imgArr.length;
        n[newlocation] = imgArr[i];
    }
    ulEle.innerHTML = '';
    imgArr = n;
    for (let i = 0; i < imgArr.length; i++) {
        let li = document.createElement('li');

        let img = document.createElement('img');
        img.src = imgArr[i];
        img.id = i;
        li.appendChild(img);
        ulEle.appendChild(li);
    }
}