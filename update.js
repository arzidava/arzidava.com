const sh = require('shelljs');

// fetch concepts repo
sh.rm('-rf','concept');
sh.exec('npx degit arzidava/concepts concepts');

// copy concepts page
sh.mkdir('__sapper__')
sh.cp('-r', 'concepts/dist', '__sapper__/export')

// cleanup
sh.rm('-rf', 'concepts')