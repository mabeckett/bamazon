var inquirer = require ('inquirer');
var mysql = require ('mysql');
// connection to database
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '#Gr33kbanah#', //remember to enter your password
	database: 'bamazon'
});
// tests to confirm a connection
connection.connect(function(error) {
	if (error) throw error;
	console.log('connected as id' + connection.threadId);
	inventoryList();
});

var inventoryList = function() {
	connection.query('SELECT * FROM products', function(error, products) {
		if (error) throw error;

		 for (var i=0; i < products.length; i++) {
		 	console.log('-----------------------------------------------------------------------');
		 	console.log('Item ID:' + products[i].ItemID + '/Product Name:' + products[i].ProductName + '/Department Name:' + products[i].DepartmentName + 
		 		'/Price:' + products[i].Price);
		 	console.log('-----------------------------------------------------------------------');
		 };
	});

	




}
// inventoryList();