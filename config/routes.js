var index = require('../routes/index');

module.exports = function (app) {
	//HOME
	app.get('/', index.index);
};