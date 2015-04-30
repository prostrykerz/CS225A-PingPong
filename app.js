/**
* Module dependencies.
*/

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

// var nodemailer = require('nodemailer');
// var smtpTransport = require('nodemailer-smtp-transport');

var app = express();

//SETUP
app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

// REQUIRE EJS - To view html files directly
app.engine('html', require('ejs').renderFile);
//

// ROUTES
require("./config/routes")(app);

app.post('/contact', function(req,res) {
  // // create reusable transporter object using SMTP transport
  // var transporter = nodemailer.createTransport(smtpTransport({
  //     service: 'Gmail',
  //     auth: {
  //         user: 'kukapong.team@gmail.com',
  //         pass: 'FloorIsLava210'
  //     }
  // }));

  // // NB! No need to recreate the transporter object. You can use
  // // the same transporter object for all e-mails

  // // setup e-mail data with unicode symbols
  // var plainText = "Name: " + req.body.name + "\n"
  // plainText += "Email: " + req.body.email + "\n"
  // plainText += "Message: " + req.body.message + "\n"
  // var htmlText = "Name: " + req.body.name + "<br />"
  // htmlText += "Email: " + req.body.email + "<br />"
  // htmlText += "Message: " + req.body.message + "<br />"
  // var mailOptions = {
  //     from: 'Webmaster Kuka Pong <web@kukapong.com>', // sender address
  //     to: 'kukapong_team@lists.stanford.edu', // list of receivers
  //     subject: 'Kuka Pong Contact Me Message From: ' + req.body.name, // Subject line
  //     text: plainText, // plaintext body
  //     html: htmlText // html body
  // };

  // // send mail with defined transport object
  // transporter.sendMail(mailOptions, function(error, info){
  //     if (error){
  //         res.status(400).send(error);
  //     } else {
  //         res.status(200).send('Message sent: ' + info.response);
  //     }
  // });
  // Simple syntax to create a new subclass of Parse.Object.
  // var Contact = Parse.Object.extend("Contact");
  // var contact = new Contact();
  // contact.set("Name", req.body.name);
  // contact.set("Email", req.body.email);
  // contact.set("Message", req.body.message);

  // contact.save(null, {
  //   success: function(contact) {
  //     res.status(200).send("Success")
  //   },
  //   error: function(contact, error) {
  //     res.status(400).send('Failed to create new object, with error code: ' + error.message);
  //   }
  // });
})


// START SERVER
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
