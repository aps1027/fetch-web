const fs = require("fs");
const path = require("path");
const axios = require("axios");
const cheerio = require("cheerio");

const fetchWebPage = async (url) => {
  try {
    const response = await axios.get(url);
    const { data } = response;

    const fileName = `${url
      .replace(/^https?:\/\//, "")
      .replace(/[/\\?%*:|"<>]/g, "_")}.html`;
    const savePath = path.join(__dirname, fileName);

    // Save HTML file
    fs.writeFileSync(savePath, data);

    console.log(`Fetched ${url} and saved as ${fileName}`);
    console.log(`--------------------------`);

    return savePath;
  } catch (error) {
    console.error(`Error fetching ${url}:`, error.message);
    throw error;
  }
};

const fetchMetadata = (html) => {
  const $ = cheerio.load(html);
  const numLinks = $("a").length;
  const numImages = $("img").length;
  const lastFetch = new Date().toUTCString();

  console.log(`site: ${$("title").text()}`);
  console.log(`num_links: ${numLinks}`);
  console.log(`images: ${numImages}`);
  console.log(`last_fetch: ${lastFetch}`);
  console.log(`--------------------------`);
};

const main = async () => {
  const args = process.argv.slice(2);

  if (args.includes("--metadata")) {
    for (let index = 1; index < args.length; index++) {
      const url = args[index];
      const savedFilePath = await fetchWebPage(url);
      const html = fs.readFileSync(savedFilePath, "utf8");
      fetchMetadata(html);
    }
  } else {
    for (const url of args) {
      await fetchWebPage(url);
    }
  }
};

main();
