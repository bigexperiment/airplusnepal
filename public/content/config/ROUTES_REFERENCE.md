# Routes Reference

This document lists all treks and trips organized from the tour packages menu.

## Treks Routes

These items will be accessible at `/treks/[slug]`:

### Volunteering Treks
- annapurna-base-camp-volunteering-trek
- mardi-himal-volunteering-trek
- ghorepani-poonhill-volunteering-trek

### Homestay Treks
- ghale-gaun-homestay-tour
- lwang-homestay-tour-trek
- syangja-sirubari-homestay-tour-trek

## Trips Routes

These items will be accessible at `/trips/[slug]`:

### Helicopter Tours
- everest-base-camp-heli-tour
- annapurna-base-camp-heli-tour
- gosaikunda-helicopter-tour
- rara-lake-helicopter-tour
- langtang-valley-helicopter-tour
- muktinath-helicopter-tour
- damodar-kunda-helicopter-tour

### Mountain Bike Tours
- upper-mustang-biking-tour
- kathmandu-valley-mountain-biking-tour
- pokhara-valley-mountain-biking-tour

### One Day Trips
- day-hike-around-pokhara
- everest-mountain-flight-tour
- paragliding-in-pokhara-nepal
- bungee-jump-tour-in-nepal
- one-day-kathmandu-sightseeing-tour
- one-day-pokhara-sightseeing-tour
- zipline-from-sarangkot-pokhara

### Holiday Tour Packages
- one-week-holiday-tour-in-nepal
- two-week-holiday-tour-in-nepal
- nepal-adventure-tour-package
- 4-night-5-days-nepal-tour-package
- family-holidays-tour-in-nepal
- 2-night-3-days-nepal-tour-package
- 7-night-8-days-kathmandu-pokhara-chitwan-tour
- kathmandu-pokhara-chitwan-lumbini-tour
- kathmandu-nagarkot-chitwan-bandipur-pokhara-tour
- corporate-tour-in-nepal
- 2-night-3-days-pokhara-tour-package-from-kathmandu

### Off Road Tours
- manang-jeep-tour
- rara-lake-jeep-tour
- upper-mustang-jeep-tour-off-road-adventure-in-nepal
- muktinath-tour-package-by-jeep

### Religious Tour Packages
- muktinath-tour-package
- lumbini-tour-package
- pashupatinath-package-tour
- janakpur-dham-tour
- pashupatinath-manakamana-and-muktinath-tour
- manakamana-tour-package
- muktinath-and-kailash-mansarovar-yatra

### Rafting Tours
- bhote-koshi-river-rafting
- kaligandaki-river-rafting
- upper-seti-river-rafting
- karnali-river-rafting
- trishuli-river-rafting

### Honeymoon Tour Packages
- kathmandu-honeymoon-tour
- kathmandu-chitwan-pokhara-with-everest-mountain-flight-honeymoon-tour
- kathmandu-pokhara-honeymoon-tour
- kathmandu-pokhara-ghandruk-village-honeymoon-tour

### Wildlife Tour Packages
- chitwan-national-park-tour
- bardiya-national-park-tour-discover-nepals-authentic-wildlife-experience
- dhorpatan-hunting-tour
- koshi-tappu-bird-watching-wild-life-tour

## Notes

- All routes use dynamic routing with `[slug]` folders in Next.js App Router
- Treks: `/treks/[slug]` - e.g., `/treks/annapurna-base-camp-volunteering-trek`
- Trips: `/trips/[slug]` - e.g., `/trips/everest-base-camp-heli-tour`
- Slugs are generated from the item names (lowercase, hyphenated)
- Pages will be generated statically via `generateStaticParams()` when data is added to `treks.json` and `trips.json`

