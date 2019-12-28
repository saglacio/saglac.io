const fs = require('fs');
const YAML = require('yaml');

const sourceFile = fs.readFileSync(`${__dirname}/authors.yml`, 'utf8');
const sourceData = YAML.parse(sourceFile);

// console.log('TEST', sourceData);

Object.keys(sourceData).forEach((authorId) => {
  const author = sourceData[authorId];
  fs.writeFile(`${__dirname}/authors/${authorId}.yml`, YAML.stringify({
    id: authorId,
    ...author,
  }), console.log);
});
