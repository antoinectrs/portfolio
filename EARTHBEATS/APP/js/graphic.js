// function translatecircle(val){
//     const transConvert = mapRange(val, 0, 480, 30, 70);
// }
function animation(slider) {
    const x = document.getElementsByClassName("group");
    const mapHeight = mapRange(slider, 0, 100, 100, 150);
    const mapTranslate = mapRange(slider, 0, 100, 0, -50);
    const mapTranslate2 = mapRange(slider, 0, 100, 0, 12);
    
    for (let index = 0; index < x.length; index++) {
        x[index].style.height = mapHeight + '%';
        x[index].style.borderRadius = slider + '%';
    }
    x[0].style.borderRadius = "0% 0%"+slider + '% '+slider + '%';
    x[1].style.borderRadius = slider + '% '+slider + '%'+"0% 0%";
    x[0].style.transform = "translate(0, "+ mapTranslate +"%)";
    x[1].style.transform = "translate(0, "+ mapTranslate2 +"%)";
}