const puppeteer = require('puppeteer');
const $ = require('cheerio');
const url = 'https://www.reddit.com';

puppeteer
    .launch()
    .then(browser => {
        return browser.newPage();
    })
    .then(page => {
        page.setDefaultNavigationTimeout(0);
        return page.goto(url).then(() => {
            return page.content();
        });
    })
    .then(html => {
        console.log($('h2', html).text());
    })
    .catch(err => {
        console.warn(err);
    });