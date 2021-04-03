const rp = require('request-promise');
const $ = require('cheerio');

const potusParse = async (url) => {
    try {
        const html = await rp(url);
        return({
            name: $('.firstHeading', html).text(),
            birthday: $('td > span > .bday', html).text()
        });
    }
    catch(error) {
        console.warn(error);
    }
}

module.exports = potusParse;