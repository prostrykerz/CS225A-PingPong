/*
 * GET home page.
 */

exports.index = function(req, res){
	res.render('index.html', {
      pageName : 'Kuka Pong'
  });
};