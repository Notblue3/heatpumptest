export function scrapeQuotes(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const quotes = [];

  doc.querySelectorAll('.quote').forEach((quoteElement) => {
    const quote = {
      date: quoteElement.querySelector('.date').textContent.trim(),
      description: quoteElement.querySelector('.description').textContent.trim(),
      company: quoteElement.querySelector('.company').textContent.trim(),
      applianceCost: quoteElement.querySelector('.appliance-cost').textContent.trim(),
      installCost: quoteElement.querySelector('.install-cost').textContent.trim(),
      source: quoteElement.querySelector('.source').textContent.trim(),
      dateUpdated: quoteElement.querySelector('.date-updated').textContent.trim(),
      modelDetails: quoteElement.querySelector('.model-details').textContent.trim(),
      warranty: quoteElement.querySelector('.warranty').textContent.trim(),
      energyRating: quoteElement.querySelector('.energy-rating').textContent.trim(),
      associatedLinks: JSON.parse(quoteElement.querySelector('.associated-links').textContent.trim())
    };
    quotes.push(quote);
  });

  return quotes;
}

export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' }).format(amount);
}