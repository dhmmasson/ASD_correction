function minimum( valeurs ){
  var i
  var plusPetite
  plusPetite = valeurs[0]
  i = 0
  while ( i < longueur( valeurs ) ) {
    if( valeurs[ i ] < plusPetite  ) {
      plusPetite = valeurs[ i ]
    }
    i = i + 1
  }
  return plusPetite
}


function minimum( valeurs ){
  var i
  var plusPetite
  plusPetiteValeurVue = valeurs[ 0 ]
  i = 1
  while ( i < longueur( valeurs ) ) {
    plusPetiteValeurVue = min( valeurs[ i ], plusPetiteValeurVue )
    i = i + 1
  }
  return plusPetiteValeurVue
}

var i, valeur
i = 0
while ( i < longueur(tableau) ) {
  valeur = tableau[ i ]
  //Code goes here
  i = i + 1
}


function renverse( tableau ) {
  var i
  var tableauRenverse
  var n
  var derniereCase
  n = longueur( tableau )
  derniereCase = n - 1
  tableauRenverse = nouveauTableau( n )

  i = 0
  while ( i < n ) {
    tableauRenverse[ i ] = tableau[ derniereCase - i ]
    i = i + 1
  }

  return tableauRenverse
}

function renverse( tableau ) {
  var i
  var n
  var avantEchange
  var derniereCase
  n = longueur( tableau )
  derniereCase = n - 1

  i = 0
  while ( i < n / 2 ) {
    avantEchange = tableau[ i ]
    tableau[ i ] = tableau[ derniereCase - i ]
    tableau[ derniereCase - i ] =   avantEchange
    i = i + 1
  }
  return tableau
}
