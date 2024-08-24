function codificar(texto){
    texto=document.getElementById("texto1").value;
    texto=texto.replaceAll("e","enter");
    texto=texto.replaceAll("i","imes");
    texto=texto.replaceAll("a","ai");
    texto=texto.replaceAll("o","ober");
    texto=texto.replaceAll("u","ufat");
    document.getElementsByClassName("resultado")[0].innerHTML="";
    document.getElementsByClassName("resultado")[0].innerHTML="<span class=\"texto-resultado-modificable-2\">"+texto+"</span>";
}//debido a como se codifica, no es necesario mas que hacer un replace
function decodificar(texto){
    texto=document.getElementById("texto1").value;
    texto=texto.replaceAll("ufat","u");
    texto=texto.replaceAll("ober","o");
    texto=texto.replaceAll("ai","a");
    texto=texto.replaceAll("imes","i");
    texto=texto.replaceAll("enter","e");
    document.getElementsByClassName("resultado")[0].innerHTML="";
    document.getElementsByClassName("resultado")[0].innerHTML="<span class=\"texto-resultado-modificable-2\">"+texto+"</span>";
}
