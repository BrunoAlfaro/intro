
(function(){

	var app = angular.module("tienda",[]);

	app.controller('tiendaCodejobs',function(){
		this.products = cursos;
	});

	var cursos = [
		{
			name: 'producto 234',
			price: 45,
			description: 'php curse',
			canPurchase: false,
			soldOut: false,
			reviews:[
				{
					stars:5,
					body:"Este curso me encanta",
					author:"bruno"

				},{
					stars:3,
					body:"Este curso no me gussta",
					author:"cris"
				}]
		
		},
		{
			name: 'producto 232423',
			price: 30,
			description: 'Este curso es de jquery',
			canPurchase: true,
			soldOut: false,
			reviews:[
				{
					stars:1,
					body:"angular js",
					author:"pedro"

				},{
					stars:3,
					body:"php es mejor",
					author:"goku"
				}]
		}
	];

})();

