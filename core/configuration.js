'use strict'
const bodyParser = require('body-parser');


function configureApp(app){
	configureCors(app);
	configureBodyParser(app)
	configureRoutes(app);
	return app;
}

function configureCors(app){
	// Cors
	app.use((req, res, next) => {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, X-SOCKET-ID, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
		res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
		res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
		next();
	});
}

function configureBodyParser(app){
	//Middleware
	app.use(bodyParser.urlencoded({extended: false}))
	app.use(bodyParser.json());
	return app;
}

function configureRoutes(app){
	app.use('/api/users', require('../routes/user'));
	
	return app;
}

module.exports = configureApp;
