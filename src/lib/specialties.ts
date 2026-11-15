import marina from "@/assets/specialty-marina.jpg";
import fishing from "@/assets/specialty-fishing.jpg";
import foodtruck from "@/assets/specialty-foodtruck.jpg";
import restaurant from "@/assets/specialty-restaurant.jpg";
import contractor from "@/assets/specialty-contractor.jpg";

export type Specialty = {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  features: [string, string][];
  inclusions: string[];
  whoTitle: string;
  who: [string, string][];
  demoCategories: string[];
  demoTitles?: string[];
  cta: string;
};

export const specialties = {
  marina: {
    eyebrow: "Specialty — Marina websites Lake Cumberland",
    title: "Marina Website Design for Lake Cumberland, Kentucky",
    intro: "Houseboat renters, slip holders, and weekend boaters search from the parking lot or the lake house. They need fuel hours, amenities, rates, and a phone number that works — not a slow brochure site.",
    image: marina,
    imageAlt: "Pontoon boats and a houseboat tied in covered slips at a Lake Cumberland marina at sunset",
    features: [
      ["Slip, rental & booking inquiries", "Trip types, seasonal rates, availability inquiries, and a phone number one tap away — so boaters reach you without hunting."],
      ["Amenities, fuel & pump-out up front", "Dock rules, fuel hours, pump-out, restrooms, restaurants, and lodging where boaters actually look — even on spotty lake signal."],
      ["Photo galleries of the real place", "Your docks, slips, houseboat rows, and real guests — a site that looks like Lake Cumberland, not a template from somewhere else."],
      ["Peak-season realities", "Holiday hours, busy-weekend notes, and “call ahead for slips” messaging from Memorial Day through Labor Day."],
    ],
    inclusions: ["Home page with hours, fuel, and tap-to-call", "Slip & rental pages with rates or inquiry forms", "Amenities, dock store & restaurant info", "Photo gallery of your docks and fleet", "Directions & ramp info for boaters", "Local SEO for your dock's real name"],
    whoTitle: "Docks and marinas around the lake",
    who: [["Burnside & Lee's Ford", "Pulaski County marinas and resort docks."], ["State Dock & Jamestown", "Houseboat hubs and Russell County rentals."], ["Conley Bottom & Wayne County", "Monticello-side docks and launches."], ["Grider Hill & the south shore", "Albany and Clinton County access."]],
    demoCategories: [],
    demoTitles: ["Landing Point Bait & Tackle", "Anchorline Guide Service"],
    cta: "Get a marina site quote →",
  },
  fishing: {
    eyebrow: "Specialty — Fishing guide websites Lake Cumberland",
    title: "Fishing Guide Websites for Lake Cumberland Captains",
    intro: "Anglers searching for a striper trip out of Jamestown or a bass day near Creelsboro want three things fast: proof you catch fish, clear trip options, and an easy way to book.",
    image: fishing,
    imageAlt: "Fishing guide casting from a bass boat at sunrise beneath Lake Cumberland bluffs",
    features: [
      ["Species-based trip pages", "Striper hunts, bass days, crappie, multi-species — clear pages so anglers know what they're booking and what to bring."],
      ["Booking inquiries that get filled", "Simple date and party-size forms, deposit notes if you use them, and tap-to-call for last-minute openings."],
      ["Trophy photos & real water days", "Your fish, your clients, your boat — not stock photos of someone else's striper on another reservoir."],
      ["Captain bios that build trust", "Years on the water, safety notes, and who you are — written in plain Kentucky, not corporate copy."],
    ],
    inclusions: ["Home page with trip highlights and tap-to-call", "Half-day / full-day / species trip pages", "Booking or inquiry form", "Trophy photo gallery", "Captain bio & safety info", "Season and launch-ramp notes"],
    whoTitle: "Where Lake Cumberland guides launch",
    who: [["Jamestown & State Dock", "Striper country and out-of-town anglers."], ["Creelsboro", "Bass and multi-species days on the upper lake."], ["Conley Bottom", "Wayne County launches near Monticello."], ["Burnside approaches", "Pulaski County ramps and river-end fishing."]],
    demoCategories: [],
    demoTitles: ["Anchorline Guide Service", "Landing Point Bait & Tackle"],
    cta: "Get a guide site quote →",
  },
  foodtruck: {
    eyebrow: "Specialty — Food truck websites Kentucky",
    title: "Food Truck Websites for Lake Cumberland & Kentucky",
    intro: "The difference that matters most: your customers can always find you today. Location, today's hours, and festival stops update in seconds from your phone.",
    image: foodtruck,
    imageAlt: "Food truck serving customers in a gravel lot beside a Lake Cumberland marina at sunset",
    features: [
      ["“Where We Are Today”", "Daily spots, festival grounds, last-minute marina lots — post it before you roll out or while you're setting up."],
      ["Menus that read on a phone", "Full menu with photos, prices, and dietary notes. Mark items sold out from the truck."],
      ["Catering & event requests", "Lake house parties, church dinners, and festivals get a simple request path instead of a buried email."],
      ["Built for life on the road", "Dead-simple mobile updates — no laptop, no waiting on a developer."],
    ],
    inclusions: ["Current location + weekly schedule", "Full menu with photos", "Catering / event booking form", "Tap-to-call and directions", "Photo gallery", "Google Business Profile setup"],
    whoTitle: "Built for how trucks move around the lake",
    who: [["Marina & ramp days", "Burnside, Lee's Ford, State Dock, Conley Bottom lots."], ["Town lunch & festivals", "Monticello, Jamestown, Russell Springs, Albany, Somerset."], ["Peak-season weekends", "Update sold-outs and specials from the truck."], ["Broader Kentucky routes", "Fairs, markets, and multi-town weeks."]],
    demoCategories: ["Food Truck"],
    cta: "Get a food truck site quote →",
  },
  restaurant: {
    eyebrow: "Specialty — Restaurant websites Monticello KY",
    title: "Restaurant Websites for Monticello & Lake Cumberland",
    intro: "Locals already know your door. Weekend boaters and lake house guests often don't. They search from a phone for a menu they can read, hours that make sense, and whether you can seat a group.",
    image: restaurant,
    imageAlt: "Plate of fried catfish, greens, and cornbread at a lake-view restaurant near Monticello, Kentucky",
    features: [
      ["Menus people can read on a phone", "Not a blurry PDF — clear sections, prices, and specials you can update without calling a developer."],
      ["Catering and group paths", "Lake house crowds, church dinners, post-ramp tables — a simple form or phone path for large orders."],
      ["Hours, location & tap-to-call up front", "Weekend guests decide fast, especially after a day on the water."],
      ["Photos of your food and room", "Your plates and dining room — honest pictures build more trust than studio shots."],
    ],
    inclusions: ["Home page with hours, location, and tap-to-call", "Digital menu by section", "Specials you can update", "Catering / group request form", "Photo gallery", "Reservations link or form"],
    whoTitle: "Built for lake and town traffic",
    who: [["Monticello & Wayne County", "Weeknight regulars and Saturday lake crowds."], ["Somerset & Burnside", "Pulaski County diners and US 27 travelers."], ["Jamestown & Russell Springs", "State Dock visitors and lake house renters."], ["Albany & Nancy", "South-shore and Lee's Ford weekenders."]],
    demoCategories: ["Restaurant"],
    cta: "Get a restaurant site quote →",
  },
  contractor: {
    eyebrow: "Specialty — Contractor websites",
    title: "Contractor Websites for the Lake Cumberland Area",
    intro: "When a pipe bursts or a storm takes shingles, people search on a phone and call the first company that looks real. Websites for plumbers, roofers, HVAC, builders, lawn and tree crews, and other trades.",
    image: contractor,
    imageAlt: "Contractor truck at a Lake Cumberland lake house while a roofer works from a ladder",
    features: [
      ["Get the phone ringing", "Tap-to-call header and an emergency banner if you take after-hours calls."],
      ["Service pages for the jobs you want", "A page for each kind of work you want more of — so you show up for it in search."],
      ["Quote request forms", "Photos, address, and a short description so you can price the job before you drive out."],
      ["Proof of real work", "Before-and-after photos and reviews from neighbors in Wayne, Pulaski, Russell and McCreary counties."],
    ],
    inclusions: ["Tap-to-call header & emergency banner", "Service pages per trade", "Free-quote request form", "Project photo gallery", "Service area page", "Google reviews & Business Profile"],
    whoTitle: "Trades we build for",
    who: [["Plumbers & HVAC", "Emergency calls and seasonal service."], ["Roofers & builders", "Storm work, new builds, and lake house projects."], ["Lawn, tree & pressure washing", "Recurring work around lake houses and town."], ["Fence, dock & other trades", "Quote-ready sites for any local trade."]],
    demoCategories: [],
    demoTitles: ["Bluegrass Fence Co.", "Ridge Pasture Care", "Coastal Haven Cleaning"],
    cta: "Get a contractor site quote →",
  },
} satisfies Record<string, Specialty>;
