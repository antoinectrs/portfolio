let title,content;
window.addEventListener('load', function(event) {

    content = document.querySelectorAll(".bio");
    title = document.querySelectorAll("h1");
    init(".name",content);
     console.log(title);
});
function init(value,content,target){
    target = document.querySelector(value);
    target.addEventListener("click", (e)=>{
        title.forEach(element => {
            element.classList.toggle("italic");
        });
        content.forEach(element => {
            toggleClass(element,"isBio")
        });
    })
}
function toggleClass(element,style){
    element.classList.toggle(style);
    
}