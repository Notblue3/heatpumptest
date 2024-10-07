import { scrapeQuotes, formatCurrency } from './scraper.js';

// ... (previous code remains unchanged)

function generateMockHtml() {
  const models = [
    'Aquatech X6 Heat Pump',
    'Hydrotherm X8 Heat Pump',
    'Reclaim 315L CO₂ Heat Pump',
    'iStore 270L Heat Pump',
    'Aquaplus All In One Heat Pump',
    'Apricus All In One Heat Pump'
  ];
  const installers = [
    {
      name: 'Melbourne Hot Water & Heating',
      website: 'https://www.melbournehotwater.com.au/heat-pump-hot-water-systems/'
    },
    {
      name: 'Efficient Pure Plumbing',
      website: 'https://efficientpureplumbing.com.au/heat-pump-hot-water-systems/'
    },
    {
      name: 'Mr Emergency Plumbing',
      website: 'https://www.mremergencyplumbing.com.au/heat-pump-hot-water/'
    },
    {
      name: "O'Shea Plumbing",
      website: 'https://www.osheasplumbing.com.au/heat-pump-hot-water-systems/'
    },
    {
      name: 'Precision Plumbing',
      website: 'https://www.precisionplumbing.com.au/hot-water-systems/heat-pump-hot-water/'
    },
    {
      name: 'Metropolitan Plumbing',
      website: 'https://metropolitanplumbing.com.au/hot-water/heat-pump-hot-water/'
    },
    {
      name: "Jim's Plumbing",
      website: 'https://jimsplumbing.com.au/heat-pump-hot-water-systems/'
    },
    {
      name: 'Gallant Plumbing',
      website: 'https://www.gallantplumbing.com.au/heat-pump-hot-water-systems/'
    }
  ];
  
  let html = '<html><body>';
  
  for (let i = 0; i < 20; i++) {
    const modelIndex = Math.floor(Math.random() * models.length);
    const installerIndex = Math.floor(Math.random() * installers.length);
    const model = models[modelIndex];
    const installer = installers[installerIndex];
    const applianceCost = Math.floor(Math.random() * 2000) + 3000; // Random cost between $3000 and $5000
    const installCost = Math.floor(Math.random() * 500) + 1000; // Random cost between $1000 and $1500
    
    // Generate a random date within the last 3 days
    const date = new Date();
    date.setDate(date.getDate() - Math.floor(Math.random() * 3));
    const formattedDate = date.toISOString().split('T')[0];
    
    // Generate additional information
    const dateUpdated = new Date(date.getTime() + Math.random() * 86400000).toISOString().split('T')[0];
    const modelDetails = `${model} - Capacity: ${Math.floor(Math.random() * 50 + 200)}L`;
    const warranty = `${Math.floor(Math.random() * 3 + 5)} years`;
    const energyRating = `${Math.floor(Math.random() * 2 + 4)} stars`;
    const associatedLinks = [
      { text: 'Product Specifications', url: `${installer.website}specs` },
      { text: 'Installation Guide', url: `${installer.website}install-guide` },
      { text: 'Energy Efficiency Information', url: `${installer.website}energy-info` }
    ];
    
    html += `
      <div class="quote">
        <span class="date">${formattedDate}</span>
        <span class="description">${model}</span>
        <span class="company">${installer.name}</span>
        <span class="appliance-cost">$${applianceCost}</span>
        <span class="install-cost">$${installCost}</span>
        <span class="source">${installer.website}</span>
        <span class="date-updated">${dateUpdated}</span>
        <span class="model-details">${modelDetails}</span>
        <span class="warranty">${warranty}</span>
        <span class="energy-rating">${energyRating}</span>
        <span class="associated-links">${JSON.stringify(associatedLinks)}</span>
      </div>
    `;
  }
  
  html += '</body></html>';
  return html;
}

// ... (rest of the code remains unchanged)