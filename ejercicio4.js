import fetch from 'node-fetch';
import { load } from 'cheerio';
const url1 = "https://web.archive.org/web/20131001152630/https://www.spiegel.de/";
const url2 = "https://web.archive.org/web/20231001152630/https://www.spiegel.de/";

async function getData(url) {
    try {
        const response = await fetch(url);
        const html = await response.text();
        const $ = load(html);
        const headlines = [];
        $('h2, h3').each((i, element) => {
            headlines.push($(element).text().trim());
        });
        return headlines;
    } catch (error) {
        console.error("Error al obtener datos:", error.message);
        return [];
    }
}

async function compareData() {
    const url1HeadLines = await getData(url1);
    const url2HeadLines = await getData(url2);

    console.log("Titulares de 2013:");
    console.log(url1HeadLines);
    console.log("\nTitulares de 2023:");
    console.log(url2HeadLines);

    const changes = url1HeadLines.filter(headline => !url2HeadLines.includes(headline));
    if (changes.length === 0) {
        console.log("\nNo hay cambios significativos en los titulares.");
    } else {
        console.log("\nTitulares que han cambiado o desaparecido:");
        console.log(changes);
    }
}

compareData();

/* NO HE PODIDO HACERLO porque HTML dinámico
async function getData() {
    try {
        const response = await fetch('https://mx.investing.com/crypto/');
        const data = await response.text();
        console.log(data);
        let $ = cheerio.load(data);
        console.log($('h2').text());
    } catch (error) {
        console.error("Error:", error.message);
    }
}
getData();*/