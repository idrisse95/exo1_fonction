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


function logIn(pass){
    switch (true) {
        case pass === "mdp":
            alert ('c bon merci')
            break;


        default:
            alert ('refait')
            break;
    }
}
logIn()









// exo3


// Écrivez une fonction qui prend un nombre en entrée et qui renvoie la somme des n premiers nombres naturels.
// Par exemple, si on appelle la fonction avec 5 en entrée, elle devra renvoyer 15 (1 + 2 + 3 + 4 + 5).

function som(nb) {
    for (let i = 0; i < nb; i++) {
       return nb + i
    }
    
}



// Écrivez une fonction qui prend un nombre en entrée et qui renvoie vrai si ce nombre est un nombre premier, et faux sinon.
// Un nombre premier est un nombre qui n'est divisible que par 1 et par lui-même.
// Par exemple, 2 est un nombre premier, alors que 4 ne l'est pas (il est divisible par 2).

// Écrivez une fonction qui prend un tableau de chaînes de caractères en entrée et qui renvoie une nouvelle liste contenant les chaînes de caractères triées par ordre alphabétique.
// Par exemple, si on appelle la fonction avec ["girafe", "chien", "chat", "oiseau"] en entrée, elle devra renvoyer ["chat", "chien", "girafe", "oiseau"].

// Écrivez une fonction qui prend un nombre en entrée et qui renvoie la somme des chiffres de ce nombre.
// Par exemple, si on appelle la fonction avec 123 en entrée, elle devra renvoyer 6 (1 + 2 + 3).

// Écrivez une fonction qui prend un tableau de nombres en entrée et qui renvoie vrai si le tableau est un palindrome (c'est-à-dire si le tableau est le même lorsqu'on le lit de droite à gauche ou de gauche à droite), et faux sinon.
// Par exemple, si on appelle la fonction avec [1, 2, 3, 2, 1] en entrée, elle devra renvoyer vrai. Si on l'appelle avec [1, 2, 3, 4, 5] en entrée, elle devra renvoyer faux.