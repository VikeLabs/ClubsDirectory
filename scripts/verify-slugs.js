const fs = require('fs/promises');

if (process.argv.length !== 3) {
  console.log(`usage: ${process.argv[0]} ${process.argv[1]} <path to input json>`);
  process.exit(1);
}

const [, , inputFilePath] = process.argv;

const slugPattern = /^[-a-z0-9]+$/;
const existingSlugs = new Set();
function validateSlug(club) {
  const { slug } = club;
  if (existingSlugs.has(slug)) {
    console.log(`Slug "${slug}" is a duplicate!`);
    return false;
  } else if (!slug.match(slugPattern)) {
    console.log(`Slug "${slug}" doesn't match pattern: ${slugPattern.source}`);
    return false;
  }
  existingSlugs.add(slug);
  return true;
}

async function main() {
  const originalBytes = (await fs.readFile(inputFilePath)).buffer;
  const originalString = new Buffer.from(originalBytes).toString();
  const originalJSON = JSON.parse(originalString);

  if (originalJSON.every(validateSlug)) {
    console.log('All slugs are valid.');
  } else {
    console.log('Invalid slug found.');
    process.exit(1);
  }
}

main();
