const fs = require('fs');
const path = require('path');

// Mock browser environment for app.js execution
global.window = {
    location: { pathname: '/', hash: '' },
    addEventListener: () => {},
    scrollTo: () => {},
    adsbygoogle: []
};
global.document = {
    addEventListener: () => {},
    querySelector: () => null,
    querySelectorAll: () => [],
    createElement: () => ({}),
    head: { appendChild: () => {} }
};
global.adsbygoogle = [];

const appJsPath = path.join(__dirname, 'app.js');
const sitemapPath = path.join(__dirname, 'sitemap.xml');

let appJsContent = fs.readFileSync(appJsPath, 'utf8');

// Append sitemap generation function to run in the same scope as constants
appJsContent += `
;(() => {
    const urls = [
        'https://www.soflostays.co/',
        'https://www.soflostays.co/about',
        'https://www.soflostays.co/privacy-terms',
        'https://www.soflostays.co/best-of',
        'https://www.soflostays.co/guides'
    ];

    if (typeof HOTEL_DATA !== 'undefined') {
        HOTEL_DATA.forEach(hotel => {
            urls.push('https://www.soflostays.co/hotel/' + hotel.id);
        });
    }

    if (typeof BEST_OF_CATEGORIES !== 'undefined') {
        BEST_OF_CATEGORIES.forEach(cat => {
            urls.push('https://www.soflostays.co/best-of/' + cat.id);
        });
    }

    if (typeof EDITORIAL_GUIDES !== 'undefined') {
        EDITORIAL_GUIDES.forEach(guide => {
            urls.push('https://www.soflostays.co/guides/' + guide.id);
        });
    }

    const sitemapXml = '<?xml version="1.0" encoding="UTF-8"?>\\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\\n' + 
        urls.map(url => '  <url>\\n    <loc>' + url + '</loc>\\n  </url>').join('\\n') + 
        '\\n</urlset>';

    global.sitemapResult = sitemapXml;
    global.sitemapUrlCount = urls.length;
})();
`;

// Execute the code
try {
    eval(appJsContent);
} catch (err) {
    console.error('Error executing app.js:', err);
    process.exit(1);
}

// Write the sitemap file
if (global.sitemapResult) {
    fs.writeFileSync(sitemapPath, global.sitemapResult, 'utf8');
    console.log('Successfully generated sitemap.xml with ' + global.sitemapUrlCount + ' URLs!');
} else {
    console.error('Failed to generate sitemap content.');
    process.exit(1);
}
