const fs = require('fs');
const YAML = require('yaml');

const sourceFile = fs.readFileSync(`${__dirname}/data/locations.yml`, 'utf8');
const sourceData = YAML.parse(sourceFile);

// console.log('TEST', sourceData);

Object.keys(sourceData).forEach((locationId) => {
  const location = sourceData[locationId];
  fs.writeFile(
    `${__dirname}/data/locations/${locationId}.yml`,
    YAML.stringify({
      id: locationId,
      ...location,
    }),
    console.log
  );
});
