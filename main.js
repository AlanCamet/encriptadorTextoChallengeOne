const mensaje = document.querySelector("#zonaEncriptado");
const textArea = document.querySelector("textarea");
const encriptarButton = document.querySelector("#encriptar");
const desencriptarButton = document.querySelector("#desencriptar")
const salidaEncriptado = document.querySelector("#salidaEncriptado");
let encriptado = [];
let salida;
let input = document.createElement("textarea");
let button = document.createElement("button")

mensaje.textContent = "Ingrese texto aqui"
mensaje.addEventListener("click", ()=>{
    mensaje.select()
    mensaje.setSelectionRange(0, 999999)
})

desencriptarButton.addEventListener("click", (evt) => {
    evt.preventDefault();
    clean();
    desencriptar();
    input.value = salida;
    input.disabled = true
    button.textContent = "Copy"
    salidaEncriptado.appendChild(input);
    salidaEncriptado.appendChild(button);
});

encriptarButton.addEventListener("click", (event) => {
    event.preventDefault();
    clean();
    encriptar();
    input.value = salida;
    input.disabled = true
    button.textContent = "Copy"
    salidaEncriptado.appendChild(input);
    salidaEncriptado.appendChild(button);
});

button.addEventListener("click", ()=>{
    input.disabled = false;
    input.select();
    input.setSelectionRange(0,99999);
    document.execCommand("copy")
    input.disabled = true;
})

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
function desencriptar(){
    salida = "";
    encriptado = [];
    let text = mensaje.value;
    encriptado.push(text);
    for(let i=0; i<encriptado[0].length; i++){
        let concat = salida + encriptado[0][i]
        if(encriptado[0][i] == "a"){
            salida = concat 
            i = i+1
        }else if (encriptado[0][i] == "e"){
            salida = concat 
            i = i+4
        }else if (encriptado[0][i] == "i"){
            salida = concat 
            i = i+3
        }else if (encriptado[0][i] == "o"){
            salida = concat 
            i = i+3
        }else if (encriptado[0][i] == "u"){
            salida = concat 
            i = i+3
        }else{
            salida = concat

        }
    };
};