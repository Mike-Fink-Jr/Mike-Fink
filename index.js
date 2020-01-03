var express = require('express');
var app = express();
var request= require('request');
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
var mailgun = require('mailgun-js')({apiKey: process.env.MAILGUN_API_KEY || 'no key', domain: process.env.MAILGUN_DOMAIN||'no domain'});
var device = require('express-device');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(device.capture());
device.enableViewRouting(app);
device.enableDeviceHelpers(app);

app.get('/.well-known/pki-validation/', function(req,res){
   res.send('BCBF20F9416DD1845B88B8BC5048DF1D.txt');
  var file = __dirname + 'BCBF20F9416DD1845B88B8BC5048DF1D.txt';
  res.download(file); // Set disposition and send it});

app.get('/', function(req, res) {
  res.render('pages/home',{route: "/", title:"Mike-Fink.com", index:0});
});

app.get('/exp', function(req, res) {
  //res.render('pages/work_exp');
  res.render("pages/work_exp", {route: "/exp", title:"Experience", index:1});
});

app.get('/skills', function(req, res) {
  res.render('pages/skillz', {route: "/skills", title:"My Skills", index:2});
  //res.render("pages/coming_soon");
});
app.get('/passions', function(req, res) {
  //res.render('pages/passions');
  res.render("pages/coming_soon", {route: "/passions", title:"Passions", index:0});
});
app.get('/about', function(req, res) {
 // res.render('pages/about_me');
  res.render("pages/about_me", {route: "/about", title:"About Me", index:3});
});

app.get('/contact', function(req, res) {
  res.render('pages/contact', {route: "/contact", title:"Contact", index:4});
});

app.get('/test', function(req, res){
  res.render('pages/test', {route: "/", title:"Michael Fink", index:6});
});

app.get('/resume', function(req, res){
  res.render('pages/resume', {route: "/resume", title:"Resume", index:5});
});

app.get('/resume/download', function(req, res) {
  var file = __dirname + '/Files/Michael_Fink_Resume.pdf';
  console.log(file)
  res.download(file); // Set disposition and send it.
});

app.get('/resume/download/pdf', function(req, res) {
  var file = __dirname + '/Files/Michael_Fink_Resume.pdf';
  console.log(file)
  res.download(file); // Set disposition and send it.
});

app.get('/resume/download/docx', function(req, res) {
  var file = __dirname + '/Files/Michael_Fink_Resume.docx';
  console.log(file)
  res.download(file); // Set disposition and send it.
});




app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});





 app.post('/contact/submit', function(req, res) {
var data = {
  from: req.body.email,
  to: process.env.MAILTO,
  subject: req.body.subject,
  text: req.body.data,
};
 mailgun.messages().send(data, function (error, body) {
  console.log(data);
});

  res.redirect('/');
});

