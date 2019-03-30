Array.prototype.unique = function (a) {
  return function () { return this.filter(a) }
}(function (a, b, c) {
  return c.indexOf(a, b + 1) < 0
});

function changeTextValue(template, arrTextVal) {
  let arrTemplateVal = template.split(' ');
  let arrVal = []
  let obj = {}

  arrTemplateVal.map(elem => {
      let textId = getTextInQuotes(elem)[0];
      arrVal.push(textId);
  })

  let arrValUnique = arrVal.unique();
  arrValUnique.map(elem => {
      arrTextVal.map(element => {
      if (elem === element.id) {
          let identifierId = template.indexOf(elem);
          let newString = template.substr(identifierId);

          let majorSing = newString.indexOf(">") + 1;
          let minorSing = newString.indexOf("<");

          let text = newString.substring(majorSing, minorSing);

          if (Object.keys(obj).length === 0) {
          let newText = template.replace(text, element.text);
          obj['elem'] = newText
          } else {
          let newText = obj['elem'].replace(text, element.text);
          obj['elem'] = newText
          }
      } 
      });
  });
  return obj['elem'];
}

function getTextInQuotes(id) {
  const regex = /[^'"\\]*(?:\\.[^'"\\]*)*(["'])([^"'\\]*(?:(?:(?!\1)["']|\\.)[^"'\\]*)*)\1/gy
  let grupo,
  resultado = [];

  while ((grupo = regex.exec(id)) !== null) {
    resultado.push(grupo[2]);
  }

  return resultado;
}