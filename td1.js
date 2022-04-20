//Matthis
function estPair(a){
    var resultat
    if(a%2!=0){
        resultat=False
    }else{
        resultat=True
    }
    return resultat
}
//Example 2 of estPair
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


function max( nombre1, nombre2 ) {
  var a
  if( nombre1 > nombre2 ) {
    a = nombre1
    return a
  } else {
    a = nombre2
  }
  a = a + 2

  return a
}
