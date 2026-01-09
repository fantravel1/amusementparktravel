module.exports = function(eleventyConfig) {
  // Pass through static assets
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/assets/fonts");
  eleventyConfig.addPassthroughCopy({ "src/assets/css/styles.css": "assets/css/styles.css" });
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy({ "src/.nojekyll": ".nojekyll" });

  // Watch CSS files for changes
  eleventyConfig.addWatchTarget("src/assets/css/");

  // Date formatting filter
  eleventyConfig.addFilter("dateFormat", (date, format) => {
    const d = new Date(date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return d.toLocaleDateString('en-US', options);
  });

  // Slug filter
  eleventyConfig.addFilter("slug", (str) => {
    return str
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');
  });

  // Limit filter for arrays
  eleventyConfig.addFilter("limit", (arr, limit) => {
    return arr.slice(0, limit);
  });

  // Sort by date
  eleventyConfig.addFilter("sortByDate", (arr) => {
    return [...arr].sort((a, b) => new Date(b.date) - new Date(a.date));
  });

  // Price range formatter
  eleventyConfig.addFilter("priceRange", (price) => {
    if (price === "$") return "Budget";
    if (price === "$$") return "Moderate";
    if (price === "$$$") return "Premium";
    if (price === "$$$$") return "Luxury";
    return price;
  });

  // Collection for parks by region
  eleventyConfig.addCollection("parksByRegion", function(collectionApi) {
    const parks = collectionApi.getFilteredByTag("park");
    const regions = {};
    parks.forEach(park => {
      const region = park.data.region || "other";
      if (!regions[region]) regions[region] = [];
      regions[region].push(park);
    });
    return regions;
  });

  // Collection for all parks
  eleventyConfig.addCollection("allParks", function(collectionApi) {
    return collectionApi.getFilteredByTag("park").sort((a, b) => {
      return a.data.title.localeCompare(b.data.title);
    });
  });

  // Collection for featured parks
  eleventyConfig.addCollection("featuredParks", function(collectionApi) {
    return collectionApi.getFilteredByTag("park").filter(park => park.data.featured);
  });

  // Collection for guides
  eleventyConfig.addCollection("guides", function(collectionApi) {
    return collectionApi.getFilteredByTag("guide").sort((a, b) => {
      return new Date(b.data.date) - new Date(a.data.date);
    });
  });

  // Shortcode for current year
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Paired shortcode for FAQ items (AEO optimization)
  eleventyConfig.addPairedShortcode("faqItem", function(content, question) {
    return `<div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
      <button class="faq-question" aria-expanded="false" itemprop="name">
        ${question}
        <svg class="faq-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div class="faq-answer" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <div itemprop="text">${content}</div>
      </div>
    </div>`;
  });

  // Shortcode for quick facts box
  eleventyConfig.addShortcode("quickFact", function(label, value) {
    return `<div class="quick-fact">
      <dt class="quick-fact-label">${label}</dt>
      <dd class="quick-fact-value">${value}</dd>
    </div>`;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_includes/layouts",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
