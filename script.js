let photo = 0;
let numOfPhoto = 3;

function change() {
    photo++;
    let elem = document.getElementById('author-photo');
    elem.src = `./photo${photo % numOfPhoto + 1}.jpg`;
}
