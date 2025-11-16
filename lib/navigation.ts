/**
 * Navigation structure for trips
 * Each trip is organized by category with name and slug
 */

export interface TripNavItem {
  name: string
  slug: string
}

export interface TripNavCategory {
  category: string
  trips: TripNavItem[]
}

export const tripsNavigation: TripNavCategory[] = [
  {
    category: 'Helicopter Tours',
    trips: [
      { name: 'Everest Base Camp Heli Tour', slug: 'everest-base-camp-heli-tour' },
      { name: 'Annapurna Base Camp Heli Tour', slug: 'annapurna-base-camp-heli-tour' },
      { name: 'Gosaikunda Helicopter Tour', slug: 'gosaikunda-helicopter-tour' },
      { name: 'Rara Lake Helicopter Tour', slug: 'rara-lake-helicopter-tour' },
      { name: 'Langtang Valley Helicopter Tour', slug: 'langtang-valley-helicopter-tour' },
      { name: 'Muktinath Helicopter Tour', slug: 'muktinath-helicopter-tour' },
      { name: 'Damodar Kunda Helicopter Tour', slug: 'damodar-kunda-helicopter-tour' },
    ],
  },
  {
    category: 'Mountain Bike Tours',
    trips: [
      { name: 'Upper Mustang Biking Tour', slug: 'upper-mustang-biking-tour' },
      { name: 'Kathmandu Valley Mountain Biking Tour', slug: 'kathmandu-valley-mountain-biking-tour' },
      { name: 'Pokhara Valley Mountain Biking Tour', slug: 'pokhara-valley-mountain-biking-tour' },
    ],
  },
  {
    category: 'One Day Trips',
    trips: [
      { name: 'Day Hike Around Pokhara', slug: 'day-hike-around-pokhara' },
      { name: 'Everest Mountain Flight Tour', slug: 'everest-mountain-flight-tour' },
      { name: 'Paragliding in Pokhara, Nepal', slug: 'paragliding-in-pokhara-nepal' },
      { name: 'Bungee Jump Tour In Nepal', slug: 'bungee-jump-tour-in-nepal' },
      { name: 'One Day Kathmandu Sightseeing Tour', slug: 'one-day-kathmandu-sightseeing-tour' },
      { name: 'One Day Pokhara Sightseeing Tour', slug: 'one-day-pokhara-sightseeing-tour' },
      { name: 'Zipline from Sarangkot Pokhara', slug: 'zipline-from-sarangkot-pokhara' },
    ],
  },
  {
    category: 'Holiday Tour Packages',
    trips: [
      { name: 'One Week Holiday Tour in Nepal', slug: 'one-week-holiday-tour-in-nepal' },
      { name: 'Two Week Holiday Tour in Nepal', slug: 'two-week-holiday-tour-in-nepal' },
      { name: 'Nepal Adventure Tour Package', slug: 'nepal-adventure-tour-package' },
      { name: '4 Night 5 Days Nepal Tour Package', slug: '4-night-5-days-nepal-tour-package' },
      { name: 'Family Holidays Tour in Nepal', slug: 'family-holidays-tour-in-nepal' },
      { name: '2 Night 3 Days Nepal Tour Package', slug: '2-night-3-days-nepal-tour-package' },
      { name: '7 Night 8 Days Kathmandu Pokhara Chitwan Tour', slug: '7-night-8-days-kathmandu-pokhara-chitwan-tour' },
      { name: 'Kathmandu Pokhara Chitwan Lumbini Tour', slug: 'kathmandu-pokhara-chitwan-lumbini-tour' },
      { name: 'Kathmandu Nagarkot Chitwan Bandipur Pokhara Tour', slug: 'kathmandu-nagarkot-chitwan-bandipur-pokhara-tour' },
      { name: 'Corporate Tour in Nepal', slug: 'corporate-tour-in-nepal' },
      { name: '2 Night 3 Days Pokhara Tour Package from Kathmandu', slug: '2-night-3-days-pokhara-tour-package-from-kathmandu' },
    ],
  },
  {
    category: 'Off Road Tours',
    trips: [
      { name: 'Manang Jeep Tour', slug: 'manang-jeep-tour' },
      { name: 'Rara Lake Jeep Tour', slug: 'rara-lake-jeep-tour' },
      { name: 'Upper Mustang Jeep Tour - Off-Road Adventure in Nepal', slug: 'upper-mustang-jeep-tour-off-road-adventure-in-nepal' },
      { name: 'Muktinath Tour Package by Jeep', slug: 'muktinath-tour-package-by-jeep' },
    ],
  },
  {
    category: 'Religious Tour Packages',
    trips: [
      { name: 'Muktinath Tour Package', slug: 'muktinath-tour-package' },
      { name: 'Lumbini Tour Package', slug: 'lumbini-tour-package' },
      { name: 'Pashupatinath Package Tour', slug: 'pashupatinath-package-tour' },
      { name: 'Janakpur Dham Tour', slug: 'janakpur-dham-tour' },
      { name: 'Pashupatinath Manakamana and Muktinath Tour', slug: 'pashupatinath-manakamana-and-muktinath-tour' },
      { name: 'Manakamana Tour Package', slug: 'manakamana-tour-package' },
      { name: 'Muktinath and Kailash Mansarovar Yatra', slug: 'muktinath-and-kailash-mansarovar-yatra' },
    ],
  },
  {
    category: 'Rafting Tours',
    trips: [
      { name: 'Bhote Koshi River Rafting', slug: 'bhote-koshi-river-rafting' },
      { name: 'Kaligandaki River Rafting', slug: 'kaligandaki-river-rafting' },
      { name: 'Upper Seti River Rafting', slug: 'upper-seti-river-rafting' },
      { name: 'Karnali River Rafting', slug: 'karnali-river-rafting' },
      { name: 'Trishuli River Rafting', slug: 'trishuli-river-rafting' },
    ],
  },
  {
    category: 'Honeymoon Tour Packages',
    trips: [
      { name: 'Kathmandu Honeymoon Tour', slug: 'kathmandu-honeymoon-tour' },
      { name: 'Kathmandu Chitwan Pokhara with Everest Mountain flight Honeymoon Tour', slug: 'kathmandu-chitwan-pokhara-with-everest-mountain-flight-honeymoon-tour' },
      { name: 'Kathmandu Pokhara Honeymoon Tour', slug: 'kathmandu-pokhara-honeymoon-tour' },
      { name: 'Kathmandu Pokhara Ghandruk Village Honeymoon Tour', slug: 'kathmandu-pokhara-ghandruk-village-honeymoon-tour' },
    ],
  },
  {
    category: 'Wildlife Tour Packages',
    trips: [
      { name: 'Chitwan National Park Tour', slug: 'chitwan-national-park-tour' },
      { name: 'Bardiya National Park Tour - Discover Nepal\'s Authentic Wildlife Experience', slug: 'bardiya-national-park-tour-discover-nepals-authentic-wildlife-experience' },
      { name: 'Dhorpatan Hunting Tour', slug: 'dhorpatan-hunting-tour' },
      { name: 'Koshi Tappu Bird Watching Wild Life Tour', slug: 'koshi-tappu-bird-watching-wild-life-tour' },
    ],
  },
]

// Treks navigation structure
export interface TrekNavItem {
  name: string
  slug: string
}

export interface TrekNavCategory {
  category: string
  treks: TrekNavItem[]
}

// Helper function to generate slug from name
function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

export const treksNavigation: TrekNavCategory[] = [
  {
    category: 'Everest Region Trek',
    treks: [
      { name: 'Everest Base Camp Trek - 15 Days', slug: toSlug('Everest Base Camp Trek - 15 Days') },
      { name: 'Everest View Trek', slug: toSlug('Everest View Trek') },
      { name: 'Everest Base Camp Trek with Helicopter Return', slug: toSlug('Everest Base Camp Trek with Helicopter Return') },
      { name: 'Luxury Everest Trek', slug: toSlug('Luxury Everest Trek') },
      { name: 'Everest Short Trek', slug: toSlug('Everest Short Trek') },
      { name: 'Everest Base Camp Gokyo Lake Trek via Chola Pass', slug: toSlug('Everest Base Camp Gokyo Lake Trek via Chola Pass') },
      { name: 'Jiri to Everest Base Camp trek', slug: toSlug('Jiri to Everest Base Camp trek') },
      { name: 'Everest Three Passes Trek', slug: toSlug('Everest Three Passes Trek') },
      { name: 'Ama Dablam Base Camp Trek', slug: toSlug('Ama Dablam Base Camp Trek') },
      { name: 'Gokyo Lake Trek', slug: toSlug('Gokyo Lake Trek') },
    ],
  },
  {
    category: 'Dolpo Region Trek',
    treks: [
      { name: 'Upper Dolpo Trek', slug: toSlug('Upper Dolpo Trek') },
      { name: 'Lower Dolpo Trek', slug: toSlug('Lower Dolpo Trek') },
      { name: 'Shey Phoksundo Lake Trek', slug: toSlug('Shey Phoksundo Lake Trek') },
    ],
  },
  {
    category: 'Annapurna Region Trek',
    treks: [
      { name: 'Annapurna North Base Camp Trek', slug: toSlug('Annapurna North Base Camp Trek') },
      { name: 'Three Passes Annapurna Trek', slug: toSlug('Three Passes Annapurna Trek') },
      { name: 'Seven Passes Annapurna Trek', slug: toSlug('Seven Passes Annapurna Trek') },
      { name: 'Sikles Trek', slug: toSlug('Sikles Trek') },
      { name: 'Ghorepani & Annapurna Base Camp Trek', slug: toSlug('Ghorepani & Annapurna Base Camp Trek') },
      { name: 'Ghorepani Poon Hill Trek', slug: toSlug('Ghorepani Poon Hill Trek') },
      { name: 'Nar Phu Valley Trek', slug: toSlug('Nar Phu Valley Trek') },
      { name: 'Tilicho Lake with Annapurna Circuit Trek', slug: toSlug('Tilicho Lake with Annapurna Circuit Trek') },
      { name: 'Khopra Danda Trek', slug: toSlug('Khopra Danda Trek') },
      { name: 'Annapurna Base Camp Trek', slug: toSlug('Annapurna Base Camp Trek') },
      { name: 'Annapurna Circuit Trek', slug: toSlug('Annapurna Circuit Trek') },
      { name: 'Mardi Himal Trek', slug: toSlug('Mardi Himal Trek') },
      { name: 'Muldai View Point Trek', slug: toSlug('Muldai View Point Trek') },
      { name: 'Mohare Danda Trek', slug: toSlug('Mohare Danda Trek') },
      { name: 'Nar Phu Valley with Annapurna Circuit Trek', slug: toSlug('Nar Phu Valley with Annapurna Circuit Trek') },
    ],
  },
  {
    category: 'Mustang Region Trek',
    treks: [
      { name: 'Upper Mustang Trek', slug: toSlug('Upper Mustang Trek') },
      { name: 'Teri la pass Trek', slug: toSlug('Teri la pass Trek') },
    ],
  },
  {
    category: 'Langtang Region Trekking',
    treks: [
      { name: 'Langtang Valley Trek', slug: toSlug('Langtang Valley Trek') },
    ],
  },
  {
    category: 'Panch Pokhari Trek',
    treks: [
      { name: 'Tamang Heritage Trek', slug: toSlug('Tamang Heritage Trek') },
      { name: 'Ganja La Pass Trek', slug: toSlug('Ganja La Pass Trek') },
      { name: 'Tamang Heritage and Langtang Valley trek', slug: toSlug('Tamang Heritage and Langtang Valley trek') },
    ],
  },
  {
    category: 'Short Easy Trekking in Nepal',
    treks: [
      { name: 'Annapurna Royal Trek', slug: toSlug('Annapurna Royal Trek') },
      { name: 'Chisapani Nagarkot Trek', slug: toSlug('Chisapani Nagarkot Trek') },
      { name: 'Dhampus Australian Camp Trekking', slug: toSlug('Dhampus Australian Camp Trekking') },
      { name: 'Panchase Trekking', slug: toSlug('Panchase Trekking') },
    ],
  },
  {
    category: 'Manaslu Region Trek',
    treks: [
      { name: 'Manaslu Circuit Trek', slug: toSlug('Manaslu Circuit Trek') },
      { name: 'Tsum Valley with Manaslu Circuit Trek', slug: toSlug('Tsum Valley with Manaslu Circuit Trek') },
      { name: 'Tsum Valley Trek', slug: toSlug('Tsum Valley Trek') },
    ],
  },
  {
    category: 'Other Trekking Destination',
    treks: [
      { name: 'Rara lake trek', slug: toSlug('Rara lake trek') },
      { name: 'Arun Valley Trek', slug: toSlug('Arun Valley Trek') },
      { name: 'Dhaulagiri Circuit Trek', slug: toSlug('Dhaulagiri Circuit Trek') },
      { name: 'Dhaulagiri Base Camp Trek', slug: toSlug('Dhaulagiri Base Camp Trek') },
      { name: 'Makalu Base Camp Trek', slug: toSlug('Makalu Base Camp Trek') },
      { name: 'Kanchenjunga Base Camp Trek', slug: toSlug('Kanchenjunga Base Camp Trek') },
      { name: 'Pikey Peak Trek', slug: toSlug('Pikey Peak Trek') },
      { name: 'Ganesh Himal Base Camp with Rublivalley Trek', slug: toSlug('Ganesh Himal Base Camp with Rublivalley Trek') },
    ],
  },
]

