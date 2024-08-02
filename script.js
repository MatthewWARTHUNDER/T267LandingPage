var nomeGlobal
var msgGlobal

function conferirMensagemWhatsApp() {
    var nome = document.getElementById("nome").value;
    var mensagem = document.getElementById("mensagem").value;
    var confDiv = document.getElementById("aparecercontact");

    nomeGlobal = nome
    msgGlobal = mensagem

    confDiv.style.display = "flex"
    document.getElementById("ConfNome").textContent = nome
    document.getElementById("ConfMsg").textContent = mensagem
}

function enviar() {
    var NumeroTelefone = "55419999999999"

    var link = "https://wa.me" + NumeroTelefone + "?text=nome: " + nomeGlobal + " - " + msgGlobal;

    window.open(link, '_blank');

}