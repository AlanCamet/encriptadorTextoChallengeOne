const mensaje = document.querySelector("#zonaEncriptado");
const textArea = document.querySelector("textarea");
const encriptarButton = document.querySelector("#encriptar");
const salidaEncriptado = document.querySelector("#salidaEncriptado");
let encriptado = [];
let salida;

mensaje.textContent = "Ingrese texto aqui"
mensaje.addEventListener("click", ()=>{
    mensaje.textContent = ""
})

encriptarButton.addEventListener("click", (event) => {
    event.preventDefault();
    clean();
    encriptar();
    let p = document.createElement("p");
    p.textContent = salida;
    salidaEncriptado.appendChild(p);
});

function clean(){
    salidaEncriptado.innerHTML = "";
};

function encriptar(){
    salida = "";
    encriptado = [];
    let text = mensaje.value;
    encriptado.push(text);
    for(let i=0; i<encriptado[0].length; i++){
        let concat = salida + encriptado[0][i]
        if(encriptado[0][i] == "a"){
            salida = concat + "i";
        }else if (encriptado[0][i] == "e"){
            salida = concat + "nter";
        }else if (encriptado[0][i] == "i"){
            salida = concat + "mes";
        }else if (encriptado[0][i] == "o"){
            salida = concat + "ber";
        }else if (encriptado[0][i] == "u"){
            salida = concat + "fat";
        }else{
            salida = concat

        }
    };
};