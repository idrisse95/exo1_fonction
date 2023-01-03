function addition(nb1,nb2){
    result = nb1+nb2
    return result;
}
addition()


function soustraction(nb1,nb2){
    return nb2-nb1   
}
soustraction()


function multi(nb1,nb2){
    return nb1*nb2
}
multi()


function divise(nb1,nb2){
    return nb1/nb2
}
divise()


function modulo(nb1,nb2){
    return nb1 % nb2
}
modulo()


function carrer(nb){
    return Math.sqrt(nb)
}
carrer()


function exposant(nb1,nb2){
    return Math.pow(nb1,nb2)
}
exposant()



function maj(mot){
    return mot.charAt(0).toUpperCase() + mot.substring(1).toLowerCase();
}
console.log(maj('IDRISSSs'));


function ope(nb1,ope,nb2){
   
    switch(true){
        case ope === "+":
            return nb1+nb2;
            break;

        case ope === "-":
            return nb1-nb2;
            break;
                
        case ope === "*":
            return nb1*nb2;
            break;
        
        case ope === "/":
            return nb1/nb2;
            break;


        default:
            break;
    }
}
ope()

















// exo2





// EXO1
// Créer une function [reverseNumber] qui retourne une série de nombre à l'envers (exemple si j'entre 851 elle me retourne 158)
function reverseNumber(nb){
    return (
        (
          nb
            .toString()
            .split('')
            .reverse()
            .join('')
        ) * Math.sign(nb)
      )                 
}
reverseNumber()


// EXO2
// Créer une function [divPar2] contenant un switch qui vérifie si un nombre est divisible par 2
// Qui répond "Le num x est divisible par 2 x:2 = z"
// Dans le cas ou ce n'est pas divisible il répond : "Ce nombre n'est pas divisible par 2"

function divPar2(nb){
    switch(true){
        case nb % 2 == 0:
            return 'bien Joué';
            break;
        default:
            return 'non';
            break;

    }
}



// EXO3
// Créer une fonction [logIn] qui va demander à l'utilisateur un mot de passe et vérifier s'il a bien entré "mdp" si oui, faites une alert "Vous êtes connecté", si non, redemander le mot de passe jusqu'à ce que l'utilisateur rentre "mdp"