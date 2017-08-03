var multer = require('multer');
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

module.exports = function(app){
  app.route('/upload').post(upload.single('file'), function(req, res){
    res.send(req.file.size);
  });
}