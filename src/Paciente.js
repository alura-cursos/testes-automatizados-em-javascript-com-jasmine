function Paciente(nome, idade,
	peso, altura) {

	var clazz = {

		imprime : function() {
			alert(nome + " tem " + idade);
		},

		batimentos : function() {
			return idade * 365 * 24 * 60 * 80;
		},

		imc : function() {
			return peso/(altura*altura);
		}
	};

	return clazz;
}