let sommePairs = 0;
let sommeIMpairs = 0;




for ( i = 1 ; i <= 50 ; i++){

    if ( i % 2 == 0){
        sommePairs += i; 
    } else { 
        sommeIMpairs += i; 
    }
}
    console.log(" la somme des nombres pair entre 1 et 50 est : " + sommePairs );
    console.log(" la somme des nombres impair entre 1 et 50 est : " + sommeIMpairs );
