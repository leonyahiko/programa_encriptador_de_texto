var txaTexto = document.getElementById("txaTexto");
var btnEncriptar = document.getElementById("btnEncriptar"),
btnDesencriptar = document.getElementById("btnDesencriptar"),
articuloSinRespuesta = document.getElementById("articuloSinRespuesta"),
artRespuesta = document.getElementById("artRespuesta"),
txaRespuesta = document.getElementById("txaRespuesta"),
btnCopiar = document.getElementById("btnCopiar");

//Funcion para Mostrar el area de texto encriptado si el textArea donde se escribe el mensaje no está vacio
var mostrarArea = (texto) =>
{
    if(texto ==="")
    {
        articuloSinRespuesta.style.display='block';
        artRespuesta.style.display="none";
        return false;
    }
    else
    {
        articuloSinRespuesta.style.display='none';
        artRespuesta.style.display="block";
        return true;
    }
    txaRespuesta.value = texto;
}
//Función para limpiar el textArea
var limpiarArea = () => txaTexto.value="";


//Evento para que no permita mayusculas ni caracteres especiales salvo el borrar o el espacio
txaTexto.onkeydown = function check(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8 || tecla == 32) {
        return true;
    }

    // Patrón de entrada, en este caso solo acepta numeros y letras
    patron = /[a-zA-Z0-9]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}

//Función que quita los acentos, o los cambia
txaTexto.onkeyup = () =>
{
    txaTexto.value = txaTexto.value.replace(/á/igm,'a');
    txaTexto.value = txaTexto.value.replace(/é/igm,'e');
    txaTexto.value = txaTexto.value.replace(/í/igm,'i');
    txaTexto.value = txaTexto.value.replace(/ó/igm,'o');
    txaTexto.value = txaTexto.value.replace(/ú/igm,'u');
    txaTexto.value = txaTexto.value.replace(/´/igm,'');
}


//evento para el botón encriptar
btnEncriptar.addEventListener('click', (e) =>
{
    let texto = txaTexto.value;
    if(mostrarArea(texto)==true)
    {
        textoEncriptado = texto.replace(/e/igm,"enter");
        textoEncriptado = textoEncriptado.replace(/i/igm,"imes");
        textoEncriptado = textoEncriptado.replace(/a/igm,"ai");
        textoEncriptado = textoEncriptado.replace(/o/igm,"ober");
        textoEncriptado = textoEncriptado.replace(/u/igm,"ufat");
        txaRespuesta.value = "";
        txaRespuesta.value = textoEncriptado;
        limpiarArea();
    }
});

//evento para el botón desencriptar
btnDesencriptar.addEventListener('click', (e) =>
{
    let texto = txaTexto.value;
    if(mostrarArea(texto)==true)
    {
        textodesencriptado = texto;
        textodesencriptado = textodesencriptado.replace(/ai/igm,"a");
        textodesencriptado = textodesencriptado.replace(/imes/igm,"i");
        textodesencriptado = textodesencriptado.replace(/enter/igm,"e");
        textodesencriptado = textodesencriptado.replace(/ober/igm,"o");
        textodesencriptado = textodesencriptado.replace(/ufat/igm,"u");
        txaRespuesta.value = "";
        txaRespuesta.value = textodesencriptado;
        limpiarArea();
    }
});

//evento para el botón copiar
btnCopiar.addEventListener('click', (e) =>
{
    txaRespuesta.value = txaRespuesta.value.toLowerCase();
    txaRespuesta.select();
    document.execCommand('copy');
});
