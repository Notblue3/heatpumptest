import sys
import re

def scrape_quotes(html_content):
    quotes = []
    pattern = r'<div class="quote">\s*<span class="description">(.*?)</span>\s*<span class="appliance-cost">(.*?)</span>\s*<span class="install-cost">(.*?)</span>\s*</div>'
    matches = re.findall(pattern, html_content, re.DOTALL)
    
    for match in matches:
        quote = {
            'description': match[0].strip(),
            'appliance-cost': match[1].strip(),
            'install-cost': match[2].strip()
        }
        quotes.append(quote)
    
    return quotes

def main():
    try:
        # Mock HTML content
        mock_html = """
        <html>
          <body>
            <div class="quote">
              <span class="description">Sanden Eco® Plus Hot Water Heat Pump</span>
              <span class="appliance-cost">$3,500</span>
              <span class="install-cost">$1,000</span>
            </div>
            <div class="quote">
              <span class="description">Rheem® Metro® Max Hot Water Heat Pump</span>
              <span class="appliance-cost">$2,800</span>
              <span class="install-cost">$900</span>
            </div>
            <div class="quote">
              <span class="description">Bosch Compress 3000 Hot Water Heat Pump</span>
              <span class="appliance-cost">$3,200</span>
              <span class="install-cost">$950</span>
            </div>
          </body>
        </html>
        """
        
        quotes = scrape_quotes(mock_html)
        
        # Print in a more readable format
        print("Scraped Quotes:")
        for quote in quotes:
            print(f"Description: {quote['description']}")
            print(f"Appliance Cost: {quote['appliance-cost']}")
            print(f"Installation Cost: {quote['install-cost']}")
            appliance_cost = float(quote['appliance-cost'].replace('$', '').replace(',', ''))
            install_cost = float(quote['install-cost'].replace('$', '').replace(',', ''))
            total_cost = appliance_cost + install_cost
            print(f"Total Cost: ${total_cost:,.2f}")
            print()

        # Explicitly flush the output
        sys.stdout.flush()
        
    except Exception as e:
        print(f"An error occurred: {str(e)}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    main()
    sys.exit(0)  # Ensure we always exit with a success code