const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function(req, res) {
  
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(5000, function () {
  console.log('Iniciando servidor con el puerto 5000!')
})


app.use(function(req, res, next) {
  let err = new Error('Ruta no encontrada');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  res
  .status(err.status || 500)
  .json({
      success:false,
      code: err.code || 500,
      message: err.message 
    });
});

