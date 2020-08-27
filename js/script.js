var nb;
function demo(){
    alert('Bonjour, Demo');
}
function helloWorld(){
    console.log("hello world");
    nb = prompt("taper un chiffre");
    console.log("vous avez choisi le nombre " + nb);
    var resultat= nb*2;
    console.log("Le resultat est " + resultat);
}
helloWorld();