var title = "Introduction au JS";

function displayTitle(){
    document.getElementsByTagName('section')[0].innerHTML += "<h1>" + title + "</h1>";
}
displayTitle();