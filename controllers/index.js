module.exports.set = function(app) {

  var main = require('./main.js');
  app.get('/', main.renderMain);
   /* Examples
    app.get('/unread/:id',checkUserGet,main.markUnread);
    app.post('/logout',user.logout);*/

  app.all("*", function (req, res, next) {
        res.send("404 no page found"); 
  });
}