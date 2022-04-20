//
Matthisfunction estPair(a){
    var resultat
    if(a%2!=0){
        resultat=False
    }else{
        resultat=True
    }
    return resultat
}

function estPair (a){   //Création d'une fonction pour savoir si un nombre est pair
    var resultat
    if ( (a % 2) == 0 ){ //regarde si le reste de la division euclidienne est bien nulle et donc le nombre est pair
        resultat = TRUE
    }
    else {
        resultat = FALSE
    }
    return resultat
}
