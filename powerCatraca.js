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

function mili_para_horas(mili) {
	sinal = '';
	if (mili < 0) {
		sinal = '-';
		mili = -mili;
	}
	horas = Math.floor(mili / (60*60*1000));
	minutos = Math.floor(mili / (60*1000)) % 60;
	umaHora = sinal + completa_com_zeros(horas) + ':' + completa_com_zeros(minutos);
	console.log(mili + ' > ' + umaHora);
	return umaHora;
}

function horas_para_mili(umaHora) {
	horas = parseFloat(umaHora.substring(0,2));
	minutos = parseFloat(umaHora.substring(3,5));
	mili =  horas*60*60*1000 + minutos*60*1000;
	console.log(umaHora + ' > ' + mili);
	return mili
}

function subtrair_horas(umaHora, outraHora) {
	return mili_para_horas( horas_para_mili(umaHora) - horas_para_mili(outraHora));
}

function limita_horas(horas) {
	MAX_HORAS_POR_DIA = "02:00";
	if (horas > MAX_HORAS_POR_DIA) {
		horas = MAX_HORAS_POR_DIA;
	}
	return horas;
}

function aplica_tolerancia_de_15mins(horas) {
	if (horas >= "06:45" && horas < "07:00") {
		horas = "07:00";
	}
	return horas;
}

function horas_trabalhadas(string_horas) {
		var mili = 0;
		marcacoes = string_horas.split(' ').filter(preenchido);
		for (i = 0; i < marcacoes.length; i += 2) {
			mili += horas_para_mili(marcacoes[i+1]) - horas_para_mili(marcacoes[i]);
		}
		horas = mili_para_horas(mili);
    return horas;
}

function saldo(string_horas) {
	trabalhado = aplica_tolerancia_de_15mins(horas_trabalhadas(string_horas));
	console.log(trabalhado);
	total = subtrair_horas(trabalhado, "07:00");
	total = limita_horas(total);
	return total;		
}
