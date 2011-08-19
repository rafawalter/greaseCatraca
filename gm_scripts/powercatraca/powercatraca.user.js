// ==UserScript==
// @name           powerCatraca
// @namespace      free
// @include       *QQMarcacao*
// @include       http://rjapp02/aa/seraa.nsf/QQMarcacao?OpenForm
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// ==/UserScript==
function data_hora(data) {
	return data.getHours() + ":" + data.getMinutes();
}

function saldo() {
	return "10:00";
}

function agora() {
	return data_hora(new Date());
}


$("tr:last td:nth-child(2)").append(agora()).css("color", "#999");
$("tr:last td:nth-child(4)").append(saldo()).css("color", "#00F");
$("tr:last td:nth-child(5)").append("-"+saldo()).css("color", "#F00");
linha_nova = $("table table tr:last").clone();
$("table table").append(linha_nova);
$("table table tr:last").css("color", "#AAA");
$("table table tr:last td:nth-child(1)").html("*");
$("table table tr:last td:nth-child(2)").html("03:30 13:00 / 06:00 15:30 / 07:00 16:30");
$("table table tr:last td:nth-child(4)").html("*");
$("table table tr:last td:nth-child(5)").html("*");