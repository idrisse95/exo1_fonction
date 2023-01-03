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



function maj(){
    return mot.charAt(0).toUpperCase()
}
maj()


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