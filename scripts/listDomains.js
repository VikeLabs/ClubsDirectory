const fs = require('fs/promises');

if (process.argv.length !== 3) {
  console.log(`usage: ${process.argv[0]} ${process.argv[1]} <path to input json>`);
  process.exit(1);
}

const [, , inputFilePath] = process.argv;

async function main() {
  const originalBytes = (await fs.readFile(inputFilePath)).buffer;
  const originalString = new Buffer.from(originalBytes).toString();
  const originalJSON = JSON.parse(originalString);

  const domainMap = new Map();

  originalJSON.forEach((club) => {
    club.socialMedia
      .filter((s) => s !== '')
      .forEach((s) => {
        const url = new URL(s);
        const domain = url.hostname.replace(/^www\./, '');
        if (domainMap.has(domain)) {
          domainMap.set(domain, domainMap.get(domain) + 1);
        } else {
          domainMap.set(domain, 1);
        }
      });
    console.log(club);
  });

  console.log(domainMap);
  return;
}

main();
