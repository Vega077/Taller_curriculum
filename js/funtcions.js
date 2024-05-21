// FORMAS DE IMPRIMIR EN PANTALLA CON JS

// alert("HOLA SOY UN ALERT DESDE EL ARCHIVO EXTERNO DE JS");
// console.log("HOLA SOY UN MENSAJE DE CONSOLA");
// document.write("HOLA SOY LA INTERFAZ PRINCIPAL");
// Swal.fire("Hola soy una alerta de una libreria");
// Swal.fire({
//     title: "The Internet?",
//     text: "That thing is still around?",
//     icon: "question",
//     showConfirmButton: true,
//     timer : 1500

//   });
//----------------------------------------------------------------
// VARIABLES Y TIPO DDE DATOSS

const pi = 3.14; //decimal
var name = "Keyner Vega"; // String
let edad = 18; // entero
let edad_string = "18"; // String
var bool = true; // false boleanos

// OPERADORES BASICOS + - / * %

var suma = 5 - 2;
console.log(suma);
console.log(edad_string);
var one = 10;
var two = 20;
console.log(one + two);
console.log(one - two);
console.log(one / two);
console.log(one * two);
console.log(one % two);

// OPERADORES DE COMPARACION < > <= >= <> == =
// = ASIGNACION
// == COMPARACION 5=="5"
// OPERADORES LOGICOS  AND &&  OR  ||

console.log("Mi nombre " + name + " tiene como edad " + edad);
function load_page() {
    Swal.fire({
        imageUrl: "https://ufpso.edu.co/administradoru15/ventana/banner%20Admitidos_Mesa%20de%20trabajo%201%20(3)%20(1).jpg",
        imageAlt: "A tall image",
        timer: 1500,
        showConfirmButton: false
    });
    // document.getElementById("fecha").value= new Date();
    let fecha = new Date();
    document.getElementById("semana").innerText = fecha.getDay();
    let year = new Date();
    document.getElementById("año").innerText = year.getFullYear();
    let mes = new Date();
    document.getElementById("mes").innerText = mes.getMonth();
    let dia = new Date();
    document.getElementById("dia").innerText = dia.getDate();
    let hora = new Date();
    document.getElementById("hora").innerText = hora.getHours();
    let minutos = new Date();
    document.getElementById("minutos").innerText = minutos.getMinutes();
    let segundos = new Date();
    document.getElementById("segundos").innerText = segundos.getSeconds();
    let miliSegundos = new Date();
    document.getElementById("miliSegundos").innerText = miliSegundos.getMilliseconds();
    let tiempo = new Date();
    document.getElementById("time").innerText = tiempo.getTime();
    let tiempoZona = new Date();
    document.getElementById("tiMezoneOffSet").innerText = tiempoZona.getTimezoneOffset();
}

function send_info() {

    let name = document.getElementById("name").value;
    let Last_name = document.getElementById("last_name").value;
    let password = document.getElementById("password").value;
    let repeat = document.getElementById("repeat").value;

    if (name.length == 0 || Last_name.length == 0) {
        Swal.fire({
            title: "Campos vacios",
            text: "Algunos de los campos se encuentran vacios",
            icon: "error",
            customClass: {
                container:"alert"
            },
            iconColor: '#000',
            confirmButtonColor: 'red'
        });



    } else if (name.length == 0) {
        document.getElementById("name").style.border = "2px solid red"
    } else if (Last_name.length == 0) {
        document.getElementById("last_name").style.border = "2px solid red"
    }else if (repeat != password) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Contraseña Incorrecta",
            footer: 'Vuelva a ingresar su contraseña'
        });
    }else {
        document.getElementById("print").innerText = name + " " + Last_name;
        document.getElementById("name").style.border = "2px solid green"
        document.getElementById("last_name").style.border = "2px solid green"
        document.getElementById("password").style.border = "2px solid green"
        document.getElementById("repeat").style.border = "2px solid green"
        Swal.fire({
            icon: "success",
            title: "Correcto",
        });
    }
}

//ARRAYS

var dias_sem=["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

var array_num=[1,2,3,4,5,6,7,8,9];

var array_mix=[1,2.5,"abc"];

var array_mul=[
    {name:"Wilder", age: 32, color: "green"},
    {name:"Keyner", age: 18, color: "red"},
    {name:"Uribe", age: 46, color: "black"},
    {name:"Hitler", age: 34, color: "white"}
];

var json_ejm= {
    name:"Keyner",
    lastname:"Vega",
    phone:"3204885863",
    email:"kavegal@ufpso.edu.co"
}

console.log(dias_sem);
console.log(array_num);
console.log(array_mix);
console.log(array_mul);
console.log(json_ejm);

for(let i=0;i<dias_sem.length;i++){

    console.log(dias_sem[i]);
}

var j=0;
while(j<array_num.length){
    console.log(array_num[j]);
    j++;
}

accu=0;
for(let h=0; h<array_num.length;h++){
    accu+=array_num[h];
}
console.log(accu);

accum=0;
for(let k=0; k<array_mul.length; k++){
    accum = accum + array_mul[k].age;
}
// document.write("la suma de la edad es es: " + accum);// Esta no se usa crack
document.getElementById("print_age").innerText = "El valor de la suma es:" + accum;

var array_ejm = [1, 2, 3, 4, 5, 6, 7, 8, 9];
document.getElementById("valores").value = array_ejm;
function aggfirst() {
    let valor = document.getElementById("agnum").value;
    array_ejm.unshift(valor);
    document.getElementById("valores").value = array_ejm;
    
}
function aggend() {
    let valor = document.getElementById("agnum").value;
    array_ejm.shift(valor);
    document.getElementById("valores").value = array_ejm;
    
}

function agregar() {
    let valor = document.getElementById("agnum").value;
    array_ejm.push(valor);
    document.getElementById("valores").value = array_ejm;
    
}

function eliminar() {
    let valor = document.getElementById("agnum").value;
    array_ejm.pop(valor);
    document.getElementById("valores").value = array_ejm;
}
function reverse() {
    document.getElementById("valores").value = array_ejm.reverse();
}

function limpiar() {   
    document.getElementById("agnum").value = ""; 
    document.getElementById("valores").value = ""
    document.getElementById("print_age").innerHTML = " ";

}

// funcion para enviar el nombre concatenado

function send_name(){
    let name_one = document.getElementById("name_one").value;
    let name_two = document.getElementById("name_two").value;
    let search_var = document.getElementById("search_var").value;
    let name_com = name_one.toUpperCase()+" "+name_two.toUpperCase();
    // let variable = name_com.charAt(3)
    let variable = name_com.charAt(search_var);
    if(search_var >= name_com.length && search_var !=0){
        Swal.fire({
            icon: "error",
            title: "no tiene valor o espacio de memoria no existente"
        })
        document.getElementById("print_name").innerText = "";
    }else if(isNaN(search_var)){
        Swal.fire({
            icon: "error",
            title: "El valor no es número"
        })
        document.getElementById("print_name").innerText = "";
    }else{
        console.log(variable);
        Swal.fire(variable);
        document.getElementById("print_name").innerText = "La letra correspondiente al #"+search_var+" es:"+variable;
    }
    
    
}