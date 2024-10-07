import unittest
from scraper import scrape_quotes

class TestScraper(unittest.TestCase):
    def test_scrape_quotes(self):
        mock_html = """
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
        """

        quotes = scrape_quotes(mock_html)

        self.assertEqual(len(quotes), 2)
        self.assertEqual(quotes[0]['description'], "Hot Water Heat Pump Model A")
        self.assertEqual(quotes[0]['appliance-cost'], "$1,500")
        self.assertEqual(quotes[0]['install-cost'], "$500")
        self.assertEqual(quotes[1]['description'], "Hot Water Heat Pump Model B")
        self.assertEqual(quotes[1]['appliance-cost'], "$2,000")
        self.assertEqual(quotes[1]['install-cost'], "$600")

if __name__ == '__main__':
    unittest.main()