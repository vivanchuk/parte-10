function exchange(cambiolibras, cambiodolar,cambioyen){

alert(euro+" euros son "+ cambiolibras +" libras");
alert(euro + " euros son "+ cambiodolar+  " dolares");
alert(euro + " euros son " +cambioyen+  " yenes");


}
let euro=parseInt(prompt("indique un numero en euros"));
let cambiolibras=euro*0.86
let cambiodolar=euro*1.28611
let cambioyen=euro*129.852
exchange(cambiolibras, cambiodolar,cambioyen);