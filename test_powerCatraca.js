module('PowerCatraca');

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

test('Maximo de 9 horas trabalhadas por dia', function() {
    var string_horas = "09:00    20:00    ";
    var resultado_esperado = "09:00";
    same(horas_trabalhadas(string_horas), resultado_esperado);
});

test('Tolerancia de 15 mins para saída de 07:00', function() {
    var string_horas = "10:00    13:00    14:00    17:45";
    var resultado_esperado = "07:00";
    same(horas_trabalhadas(string_horas), resultado_esperado);
});

