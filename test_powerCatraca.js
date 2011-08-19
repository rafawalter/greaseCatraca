module('PowerCatraca');

test('Trabalhei 0 horas', function() {
    var string_horas = "09:00    09:00    ";
    var resultado_esperado = "00:00";
    same(horas_trabalhadas(string_horas), resultado_esperado);
});

test('Deve converter horas e milisegundos corretamente', function() {
    var string_horas = "09:00";
    same(mili_para_horas(horas_para_mili(string_horas)), string_horas);
});

test('Trabalhei 4 horas', function() {
    var string_horas = "09:00    13:00    ";
    var resultado_esperado = "04:00";
    same(horas_trabalhadas(string_horas), resultado_esperado);
});

test('Trabalhei 6 horas', function() {
    var string_horas = "09:00    15:00    ";
    var resultado_esperado = "06:00";
    same(horas_trabalhadas(string_horas), resultado_esperado);
});

test('Trabalhei 3:30 horas', function() {
    var string_horas = "10:00    13:30    ";
    var resultado_esperado = "03:30";
    same(horas_trabalhadas(string_horas), resultado_esperado);
});

test('Sai para almocar', function() {
    var string_horas = "10:00    13:00    14:00    18:00    ";
    var resultado_esperado = "07:00";
    same(horas_trabalhadas(string_horas), resultado_esperado);
});


test('Deve subtrair horas corretamente', function() {
    same(subtrair_horas("03:00", "02:00"), "01:00");
});

test('Calculo basico de saldo', function() {
    var string_horas = "10:00    13:00    14:00    18:01";
    var resultado_esperado = "00:01";
    same(saldo(string_horas), resultado_esperado);
});

test('Calculo basico de saldo negativo', function() {
    var string_horas = "10:00    13:00    14:00    16:30";
    var resultado_esperado = "-01:30";
    same(saldo(string_horas), resultado_esperado);
});

test('Saldo maximo de 2 horas por dia', function() {
    var string_horas = "09:00    20:00    ";
    var resultado_esperado = "02:00";
    same(saldo(string_horas), resultado_esperado);
});

test('Tolerancia de 15 mins para saída de 07:00', function() {
    var string_horas = "10:00    13:00    14:00    17:45";
    var resultado_esperado = "00:00";
    same(saldo(string_horas), resultado_esperado);
});

