const assert = require('assert');
const { scrapeQuotes } = require('./scraper');

function testScrapeQuotes() {
  const mockHtml = `
    <html>
      <body>
        <div class="quote">
          <span class="description">Hot Water Heat Pump Model A</span>
          <span class="appliance-cost">$1,500</span>
          <span class="install-cost">$500</span>
        </div>
        <div class="quote">
          <span class="description">Hot Water Heat Pump Model B</span>
          <span class="appliance-cost">$2,000</span>
          <span class="install-cost">$600</span>
        </div>
      </body>
    </html>
  `;

  const quotes = scrapeQuotes(mockHtml);

  assert.strictEqual(quotes.length, 2, 'Should have scraped 2 quotes');
  assert.strictEqual(quotes[0].description, 'Hot Water Heat Pump Model A', 'First quote description should match');
  assert.strictEqual(quotes[0].applianceCost, '$1,500', 'First quote appliance cost should match');
  assert.strictEqual(quotes[0].installCost, '$500', 'First quote install cost should match');
  assert.strictEqual(quotes[1].description, 'Hot Water Heat Pump Model B', 'Second quote description should match');
  assert.strictEqual(quotes[1].applianceCost, '$2,000', 'Second quote appliance cost should match');
  assert.strictEqual(quotes[1].installCost, '$600', 'Second quote install cost should match');

  console.log('All tests passed!');
}

testScrapeQuotes();