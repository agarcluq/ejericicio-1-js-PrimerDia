// En este ejercicio deberéis crear un array de objetos a partir de la siguiente lista de usuarios:
//  * name: usuario1, country: spain, money: 199, premiumAccount: true
//  * name: usuario2, country: france, money: 0, premiumAccount: false
//  * name: usuario3, country: spain, money: 537, premiumAccount: false
//  * name: usuario4, country: italy, money: 1004, premiumAccount: true
//  * name: usuario5, country: spain, money: 250, premiumAccount: false
//  * name: usuario6, country: ireland, money: 799, premiumAccount: true
//  * name: usuario7, country: spain, money: 3345, premiumAccount: false

// Este array de usuarios debe generarse en una función llamada "createUsers". Al generar el array hay que asignarlo a una variable que haya sido declarada globalmente fuera de la función.

// Después de crear el array, deberéis realizar un filtrado empleando el método del objeto "Array", "filter".
// Este filtrado deberá generar otro array con los usuarios que sean de españa y que tengan más de 200 euros.
// El filtrado se realizará desde una función llamada "filterUsers" que recibirá por parámetros la lista de usuarios y devolverá el array filtrado.
// Las dos últimas instrucciones de la función "onLoad" deben ser dos console.log para mostrar los dos arrays.
// Utilizad constantes siempre que sea posible.
// Suerte!
console.log("hola");
//  * name: usuario1, country: spain, money: 199, premiumAccount: true
//  * name: usuario2, country: france, money: 0, premiumAccount: false
//  * name: usuario3, country: spain, money: 537, premiumAccount: false
//  * name: usuario4, country: italy, money: 1004, premiumAccount: true
//  * name: usuario5, country: spain, money: 250, premiumAccount: false
//  * name: usuario6, country: ireland, money: 799, premiumAccount: true
//  * name: usuario7, country: spain, money: 3345, premiumAccount: false

/**CREANDO LA VARIABLE USERS LA ORIGINAL */
var users;
/**CREANDO FUNCIÓN USERS LA ORIGINAL: CREA Y MUESTRA*/
function createUsers() {
  var persona1 = {
    name: "usuario1",
    country: " spain",
    money: 199,
    premiumAccount: true
  };

  var persona2 = {
    name: "usuario2",
    country: " france",
    money: 0,
    premiumAccount: false
  };
  var persona3 = {
    name: " usuario3",
    country: " spain",
    money: 537,
    premiumAccount: false
  };
  var persona4 = {
    name: "usuario4",
    country: "italy",
    money: 1004,
    premiumAccount: true
  };
  var persona5 = {
    name: "usuario5",
    country: "spain",
    money: 250,
    premiumAccount: false
  };
  var persona6 = {
    name: "usuario6",
    country: "ireland",
    money: 799,
    premiumAccount: true
  };
  var persona7 = {
    name: "usuario7",
    country: "spain",
    money: 3345,
    premiumAccount: false
  };
  users = [
    persona1,
    persona2,
    persona3,
    persona4,
    persona5,
    persona6,
    persona7
  ];
  for (i = 0; i < users.length; i++) {
    console.log(users[i]);
    console.log("okei");
  }
}

/**CREANDO LA VARIABLE US2 y us1 para guardar los dos arrays */
let us2;
let us1;
/**CREANDO FUNCIÓN USERS FILTRADA */
function filterUsers() {
  for (i = 0; i < users.length; i++) {
    if (users[i].country == "spain" && users[i].money > 200) {
      console.log(users[i]);
      console.log("ok");
    }
  }
}

window.addEventListener("load", onLoad);
/**MUESTRA AMBOS ARRAYS*/
function onLoad() {
  console.log("================ARRAY SIN FILTRAR================");
  us1 = createUsers();
  console.log(us1);
  console.log("================ARRAY FILTRADO================");
  us2 = filterUsers();
  console.log(us2);
}
