const fs = require('fs');
const http = require('http');
const https = require('https');
const url = require('url');

const filename = process.argv[2];

if (!filename) {
  console.error('Please specify a filename as an argument.');
  process.exit(1);
}

const urls = fs.readFileSync(filename, 'utf-8').split('\n');

for (const u of urls) {
  if (!u) {
    continue;
  }
  const parsedUrl = url.parse(u);
  const protocol = parsedUrl.protocol === 'https:' ? https : http;
  const options = {
    method: 'GET',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
    }
  };
  const req = protocol.request(parsedUrl.href, options, (res) => {
    let body = '';
    res.on('data', (chunk) => {
      body += chunk;
    });
    res.on('end', () => {
      const hostname = parsedUrl.hostname;
      const filename = `${hostname}.txt`;
      fs.writeFile(filename, body, (err) => {
        if (err) {
          console.error(`Error writing file ${filename}: ${err}`);
        } else {
          console.log(`Wrote file ${filename}`);
        }
      });
    });
  });
  req.on('error', (err) => {
    console.error(`Error requesting URL ${parsedUrl.href}: ${err}`);
  });
  req.end();
}