// Top four existing city pages by GSC clicks; impressions break ties.
// Report: 2026-07-10 through 2026-10-09 (rolling period, not a calendar quarter).
// Selection evidence: content/navigation/search-performance-2026-10-11.json
export const cityNavigation = [
  {
    "slug": "nyc",
    "label": "New York",
    "links": [
      {
        "href": "/destination/nyc/is-nyc-safe-at-night",
        "label": "Safety at night"
      },
      {
        "href": "/destination/nyc/nyc-safety-guide",
        "label": "Safety guide"
      },
      {
        "href": "/destination/nyc/subway-safety-guide",
        "label": "Subway safety"
      },
      {
        "href": "/destination/nyc/solo-trip-to-nyc",
        "label": "Solo travel"
      }
    ]
  },
  {
    "slug": "la",
    "label": "Los Angeles",
    "links": [
      {
        "href": "/destination/la/metro-safety-guide",
        "label": "Metro safety"
      },
      {
        "href": "/destination/la/is-la-safe-at-night",
        "label": "Safety at night"
      },
      {
        "href": "/destination/la/la-female-solo-travel-guide",
        "label": "Solo travel for women"
      },
      {
        "href": "/destination/la",
        "label": "Los Angeles travel guide"
      }
    ]
  },
  {
    "slug": "lasvegas",
    "label": "Las Vegas",
    "links": [
      {
        "href": "/destination/lasvegas/is-lasvegas-safe-at-night",
        "label": "Safety at night"
      },
      {
        "href": "/destination/lasvegas/lasvegas-female-solo-travel-guide",
        "label": "Solo travel for women"
      },
      {
        "href": "/destination/lasvegas/food",
        "label": "Food and dining"
      },
      {
        "href": "/destination/lasvegas/solo-trip-to-lasvegas",
        "label": "Solo travel"
      }
    ]
  },
  {
    "slug": "orlando",
    "label": "Orlando",
    "links": [
      {
        "href": "/destination/orlando/orlando-female-solo-travel-guide",
        "label": "Solo travel for women"
      },
      {
        "href": "/destination/orlando/safety-guide",
        "label": "Safety guide"
      },
      {
        "href": "/destination/orlando/is-orlando-safe-at-night",
        "label": "Safety at night"
      },
      {
        "href": "/destination/orlando",
        "label": "Orlando travel guide"
      }
    ]
  }
] as const;
