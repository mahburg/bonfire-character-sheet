const fs = require('fs');
const path = require('path');
const equipment = require('./src/data/equipmentRaw.json');

const newEquipmentList = [];

let currentCategory = null;
let subCategory = null;

for (const item of equipment) {
  if (!item.size) {
    const [cat, subCat] = item.name.split(', ');

    currentCategory = cat.trim();
    subCategory = subCat ? subCat.trim() : null;

    continue;
  }

  const categorizedItem = {
    ...item,
    category: currentCategory,
    subCategory: subCategory,
  };

  newEquipmentList.push(categorizedItem);
}

console.log(newEquipmentList.length);

const outputPath = path.join(__dirname, 'src', 'data', 'equipment.json');
fs.writeFileSync(outputPath, JSON.stringify(newEquipmentList, null, 2), 'utf8');
console.log(`Categorized equipment data has been saved to ${outputPath}`);
// Check if the output file exists
if (fs.existsSync(outputPath)) {
  console.log('Output file exists.');
} else {
  console.error('Output file does not exist.');
}
// Check if the output file is not empty
const stats = fs.statSync(outputPath);
if (stats.size > 0) {
  console.log('Output file is not empty.');
}
