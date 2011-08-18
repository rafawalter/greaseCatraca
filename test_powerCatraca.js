module('PowerCatraca');

test('Trabalhei direto', function() {
    var string_horas = "09:12    13:41    ";
    var resultado_esperado = "04:29";
    same(horas_trabalhadas(string_horas), resultado_esperado);
});

