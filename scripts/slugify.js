const fs = require('fs/promises');

const slugify = require('slugify');

if (process.argv.length !== 3) {
  console.log(`usage: ${process.argv[0]} ${process.argv[1]} <path to input json>`);
  process.exit(1);
}

const [, , inputFilePath] = process.argv;

const existingSlugs = new Map();
function slugMap(club) {
  const originalSlug = slugify(club.name, { lower: true, strict: true });
  const existing = existingSlugs.get(originalSlug) ?? 0;
  const slug = existing ? originalSlug + '-' + (existing + 1) : originalSlug;
  existingSlugs.set(originalSlug, existing + 1);
  return {
    ...club,
    slug,
  };
}

const originalBytes = (await fs.readFile(inputFilePath)).buffer;
const originalString = new Buffer.from(originalBytes).toString();
const originalJSON = JSON.parse(originalString);

const sluggedJSON = originalJSON.map(slugMap);

console.log(JSON.stringify(sluggedJSON, null, 2));
