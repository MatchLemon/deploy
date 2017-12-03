var swig  = require('swig');
var template = swig.compileFile('./conf/server.conf');
yaml = require('js-yaml');
fs = require('fs');
try {
  var data = yaml.safeLoad(fs.readFileSync('./host/data.yml', 'utf8'));
  var output = template(data);
  fs.writeFileSync("./conf/application.properties",output);
} catch (e) {
  console.log(e);
}