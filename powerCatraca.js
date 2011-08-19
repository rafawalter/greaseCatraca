function preenchido(elemento) {
	return elemento != "";
}

function data_hora(hora) {
	return new Date (new Date().toDateString() + ' ' + hora);
}

function completa_com_zeros(valor) {
	texto = "" + valor;
	if (texto.length < 2) {
		texto = '0' + texto;
	}
	return texto;
}

function extrai_hora(data) {
	return completa_com_zeros(data.getHours()) + ':' + completa_com_zeros(data.getMinutes());
}

function subtrair_horas(umaHora, outraHora) {
	return extrai_hora(new Date(data_hora(umaHora).getTime() - data_hora(outraHora).getTime()));			
}

function somar_horas(umaHora, outraHora) {
	return extrai_hora(new Date(data_hora(umaHora).getTime() + data_hora(outraHora).getTime()));			
}

function limita_horas(horas) {
	MAX_HORAS_POR_DIA = "09:00";
	if (horas > MAX_HORAS_POR_DIA) {
		horas = MAX_HORAS_POR_DIA;
	}
	return horas;
}

function horas_trabalhadas(string_horas) {
		var horas = "00:00";
		marcacoes = string_horas.split(' ').filter(preenchido);
		for (i = 0; i < marcacoes.length; i += 2) {
			console.log(i);
			horas = somar_horas(horas, subtrair_horas(marcacoes[i+1], marcacoes[i]));
		}
		horas = limita_horas(horas);
    return horas;
}
