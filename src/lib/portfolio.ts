import monticello from "@/assets/monticello-eats.asset.json";
import ridgeRun from "@/assets/ridge-run.asset.json";
import anchorline from "@/assets/anchorline.asset.json";
import ignite from "@/assets/ignite-fitness.asset.json";
import landing from "@/assets/landing-point.asset.json";

export type Demo = { title: string; category: string; description: string; image: string; url: string };

export const demos: Demo[] = [
  { title: "Monticello Eats & Finds", category: "Local Project · Live", description: "Free Lake Cumberland food guide with menus, hours, and directions for Monticello restaurants, food trucks, and hometown spots. Built and maintained locally.", image: monticello.url, url: "https://monticelloeatsandfinds.com/" },
  { title: "Anchorline Guide Service", category: "Fishing Guide", description: "Lake Cumberland fishing guide site with species-based trip booking, captain bios, and trophy striper hunts.", image: anchorline.url, url: "https://anchorline-template.lovable.app/" },
  { title: "Landing Point Bait & Tackle", category: "Bait & Tackle Shop", description: "Wayne County bait shop site with live bait availability, tackle catalog, fishing reports, and call-ahead holds for Lake Cumberland anglers.", image: landing.url, url: "https://cumberland-landing-demo.lovable.app/" },
  { title: "Ignite Fitness Company", category: "Fitness", description: "Local gym website with class schedules, memberships, and a clear path to join — built for Monticello and Lake Cumberland towns.", image: ignite.url, url: "https://ignite-fitness-co.lovable.app/" },
  { title: "Ridge Run Smokehouse", category: "Restaurant", description: "Kentucky pit BBQ website for Lake Cumberland with menu, catering, and a warm local supper-house feel. Portfolio example built in Monticello.", image: ridgeRun.url, url: "https://ridge-run-smokehouse.lovable.app/" },
  {
    "title": "Fiesta Taqueria",
    "category": "Food Truck",
    "description": "Mexican food truck website built for Wayne County and Lake Cumberland — daily location updates, full menu, catering notes, and mobile-friendly ordering. Portfolio example forged in Monticello.",
    "image": "https://nikppnqnwtwgwzfktzuu.supabase.co/storage/v1/object/public/demos/demo-images/1783378503719-0emyep3y-Fiesta_Taqueria.png",
    "url": "https://fiesta-taqueria.lovable.app/"
  },
  {
    "title": "Cumberland Smash",
    "category": "Food Truck",
    "description": "Smashburger food truck website for Lake Cumberland — today’s location, weekend lake-road stops, clean menu, and easy mobile updates. Built as a Monticello portfolio example.",
    "image": "https://nikppnqnwtwgwzfktzuu.supabase.co/storage/v1/object/public/demos/demo-images/1783382024281-8cfa6wa2-wcs.png",
    "url": "https://cumberland-smash.vercel.app/"
  },
  {
    "title": "Cluckin Chaos",
    "category": "Food Truck",
    "description": "Crispy chicken food truck demo with live location, bold menu layout, and festival-ready design for Lake Cumberland and Southern Kentucky operators.",
    "image": "https://nikppnqnwtwgwzfktzuu.supabase.co/storage/v1/object/public/demos/demo-images/1783381358053-3melshe3-CC.png",
    "url": "https://cluckin-chaos.vercel.app/"
  },
  {
    "title": "Sea Island Soul",
    "category": "Food Truck",
    "description": "Gullah Geechee Lowcountry food truck example featuring location, menu, and heritage story for Beaufort and SC coastal routes. Shows the same flat-rate, full-ownership approach used on Lake Cumberland builds.",
    "image": "https://nikppnqnwtwgwzfktzuu.supabase.co/storage/v1/object/public/demos/demo-images/1783382324196-suc5wq7v-SiS.png",
    "url": "https://sea-island-soul.lovable.app/"
  },
  {
    "title": "Bluegrass Fence Co.",
    "category": "Other",
    "description": "Family-owned fence builder site serving Somerset, Lake Cumberland, and Central Kentucky — services, project portfolio, and free-quote path. Clean and quote-ready.",
    "image": "https://nikppnqnwtwgwzfktzuu.supabase.co/storage/v1/object/public/demos/demo-images/1783379123538-7ly7lmab-Bluegrass_Fence_Co.png",
    "url": "https://bluegrass-fence-co.lovable.app/"
  },
  {
    "title": "Bluegrass Market & Mercantile",
    "category": "Specialty Retail",
    "description": "Warm, authentic Central Kentucky marketplace website featuring antiques, handmade goods, vintage finds, and local heritage. Showcases 15+ vendor booths under one roof — the perfect gathering spot for treasure hunters and makers across the Bluegrass and Lake Cumberland area.",
    "image": "https://nikppnqnwtwgwzfktzuu.supabase.co/storage/v1/object/public/demos/demo-images/1784129010256-g47tbe4y-1.png",
    "url": "https://bg-market.lovable.app/"
  },
  {
    "title": "La Hacienda Cumberland",
    "category": "Restaurant",
    "description": "Premium family-owned Mexican restaurant website in Somerset, KY. Features authentic storytelling, stunning food photography, lakeside reservation system, and seamless Kentucky + Mexican fusion design — handcrafted by Bluegrass Digital Forge for Lake Cumberland diners.",
    "image": "https://nikppnqnwtwgwzfktzuu.supabase.co/storage/v1/object/public/demos/demo-images/1783377899201-ghil41e4-La_Hacienda.png",
    "url": "https://hacienda-cumberland.lovable.app/"
  },
  {
    "title": "Sunny Hollow Donut Dash",
    "category": "Donut Shop",
    "description": "Small-town donut shop for Monticello and Wayne County morning / lake-road traffic with daily menu and simple pre-orders.",
    "image": "https://nikppnqnwtwgwzfktzuu.supabase.co/storage/v1/object/public/demos/demo-images/1783378221184-xkxyd5i9-Sunny_Hollow.png",
    "url": "https://sunny-hollow-donut-dash-demo.lovable.app/"
  },
  {
    "title": "Bourbon Ridge Artisan Studio",
    "category": "Specialty Retail",
    "description": "Creative maker hub website for Central Kentucky artisans and small-batch crafters. Studio rentals, mini-storefronts, workshops, and handmade goods — built to help local makers sell and connect around Lake Cumberland and the Bluegrass region.",
    "image": "https://nikppnqnwtwgwzfktzuu.supabase.co/storage/v1/object/public/demos/demo-images/1784519680339-7pzocfoo-1.png",
    "url": "https://bourbon-ridge.lovable.app/"
  },
  {
    "title": "Palmetto Boil",
    "category": "Food Truck",
    "description": "Specialty boiled peanuts food truck website celebrating a true Lowcountry tradition. Fresh green peanuts slow-simmered for six hours and served hot in a paper bag. Clean design with process storytelling, summer festival schedule across Charleston, Myrtle Beach & Beaufort, plus quick catering quote flow — built for high-volume mobile food businesses.",
    "image": "https://nikppnqnwtwgwzfktzuu.supabase.co/storage/v1/object/public/demos/demo-images/1783381009600-mjlv3r4e-pb.png",
    "url": "https://palmetto-boil.lovable.app/"
  },
  {
    "title": "The Wheelie Taco",
    "category": "Food Truck",
    "description": "Vibrant Korean-Mexican fusion food truck website with bold design, signature bulgogi tacos, kimchi fries, real-time location updates, catering requests, and mouth-watering menu photography. High-energy demo built for mobile food businesses on the move around Lake Cumberland and the region.",
    "image": "https://nikppnqnwtwgwzfktzuu.supabase.co/storage/v1/object/public/demos/demo-images/1783377737030-xfnlnjnu-Wheelie_Taco.png",
    "url": "https://wheelie-taco.lovable.app/"
  },
  {
    "title": "Fern & Hollow",
    "category": "Other",
    "description": "A quiet, appointment-only studio site for fine-line black-ink work in Mount Vernon. Botanicals, bone studies, script, and fauna — custom drawings, one chair, no walk-ins. Built to feel like the room: dark, precise, and local to Rockcastle County.",
    "image": "https://nikppnqnwtwgwzfktzuu.supabase.co/storage/v1/object/public/demos/demo-images/1788552184571-9r537dwa-1.png",
    "url": "https://scarlet-beacon-sand-otter.vercel.app/"
  },
  {
    "title": "Harbor Light Books & Coffee",
    "category": "Specialty Retail",
    "description": "Warm, elegant website for an independent bookstore and coffee shop. Features curated collections, author spotlights, event calendar, and a cozy literary atmosphere — premium design built for local book lovers and visitors across Lake Cumberland and Southern Kentucky.",
    "image": "https://nikppnqnwtwgwzfktzuu.supabase.co/storage/v1/object/public/demos/demo-images/1783304157592-d4fxs4u8-hl.png",
    "url": "https://harbor-light-books-demo.lovable.app/"
  },
  {
    "title": "Hickory Forge Steakhouse",
    "category": "Restaurant",
    "description": "Warm steakhouse website for Lake Cumberland restaurants with digital menu, reservations, and inviting local atmosphere. Handcrafted by the Monticello KY website designer.",
    "image": "https://nikppnqnwtwgwzfktzuu.supabase.co/storage/v1/object/public/demos/demo-images/1783377645534-rxmlcm9m-Hickory_Forge.png",
    "url": "https://hickory-forge-steakhouse.lovable.app/"
  },
  {
    "title": "Willow Creek Mercantile",
    "category": "Specialty Retail",
    "description": "Charming, rustic website for a country mercantile and general store in Southern Kentucky. Showcases handmade goods, local products, home décor, and true small-town charm — warm, inviting design perfect for retail shops serving Wayne County and Lake Cumberland communities.",
    "image": "https://nikppnqnwtwgwzfktzuu.supabase.co/storage/v1/object/public/demos/demo-images/1783382237146-lnc5gatm-wc.png",
    "url": "https://willow-creek-mercantile-demo.vercel.app/"
  },
  {
    "title": "Cumberland Law",
    "category": "Other",
    "description": "Professional website for a Somerset, KY law firm. Features clear practice areas, local storytelling, client testimonials, and strong consultation calls-to-action. Built with Kentucky authenticity and trust for residents across the Lake Cumberland region.",
    "image": "https://nikppnqnwtwgwzfktzuu.supabase.co/storage/v1/object/public/demos/demo-images/1783304241215-hceb3uv5-cl.png",
    "url": "https://cumberland-law-demo.lovable.app/"
  },
  {
    "title": "Ridge and Pasture",
    "category": "Land & Pasture Services",
    "description": "Family-owned Wayne County land services website for brush hogging, fence building, pasture renovation, and land clearing. Simple free-quote requests and honest local service — built for farms and properties around Lake Cumberland.",
    "image": "https://nikppnqnwtwgwzfktzuu.supabase.co/storage/v1/object/public/demos/demo-images/1783378752302-azd5x3te-Ridge_and_Pasture.png",
    "url": "https://ridge-pasture-care.lovable.app/"
  },
  {
    "title": "Han River BBQ",
    "category": "Food Truck",
    "description": "Authentic Korean BBQ website with sizzling table grills, hand-cut bulgogi and kalbi, fresh banchan, and easy group reservations. Lakeside-ready design that blends Seoul flavors with Kentucky hospitality for diners around Lake Cumberland.",
    "image": "https://nikppnqnwtwgwzfktzuu.supabase.co/storage/v1/object/public/demos/demo-images/1783381255074-1tow824g-hr.png",
    "url": "https://han-river-sizzle.lovable.app/"
  },
  {
    "title": "Tabby Ruins Mercantile",
    "category": "Specialty Retail",
    "description": "Premium e-commerce demo for a historic mercantile in Beaufort, SC. Showcases Lowcountry-rooted goods — sweetgrass crafts, local pantry staples, and hand-curated treasures — with warm heritage storytelling and clean, mobile-first shopping. Perfect example of authentic regional branding.",
    "image": "https://nikppnqnwtwgwzfktzuu.supabase.co/storage/v1/object/public/demos/demo-images/1783783840275-srchba6v-1.png",
    "url": "https://tabby-roots-commerce.lovable.app/"
  },
  {
    "title": "Lowcountry Seafood Co.",
    "category": "Food Truck",
    "description": "Marsh-to-market Lowcountry seafood truck website featuring fresh shrimp po’boys, oyster roasts, and weekly schedule plus event catering. Briny, authentic design built to drive hungry crowds across Charleston, Beaufort, and the South Carolina coast.",
    "image": "https://nikppnqnwtwgwzfktzuu.supabase.co/storage/v1/object/public/demos/demo-images/1783381964306-qfw51atb-lsc.png",
    "url": "https://marsh-to-market.lovable.app/"
  },
  {
    "title": "Lakeside Harmony Massage Therapy",
    "category": "Fitness",
    "description": "Therapeutic massage site for Jamestown and Lake Cumberland with services, booking path, and calm local wellness feel.",
    "image": "https://nikppnqnwtwgwzfktzuu.supabase.co/storage/v1/object/public/demos/demo-images/1783382160239-b7tkyqjc-LH.png",
    "url": "https://lakeside-harmony-massage.vercel.app/"
  },
  {
    "title": "Palmetto Plates",
    "category": "Food Truck",
    "description": "Warm, festival-ready Lowcountry food truck website featuring shrimp & grits, pulled pork, real-time catering quotes, and a full seasonal lineup from Myrtle Beach to Beaufort. Authentic Charleston-area soul on the move.",
    "image": "https://nikppnqnwtwgwzfktzuu.supabase.co/storage/v1/object/public/demos/demo-images/1783382407618-m9q0t0vf-pw.png",
    "url": "https://palmetto-wheels.lovable.app/"
  },
  {
    "title": "Grand Strand Haven",
    "category": "Other",
    "description": "Polished, mobile-first vacation rental management platform for Myrtle Beach oceanfront condos. Features direct booking tools, stunning coastal imagery, owner portals, and warm Lowcountry hospitality that makes both guests and property owners feel right at home.",
    "image": "https://nikppnqnwtwgwzfktzuu.supabase.co/storage/v1/object/public/demos/demo-images/1783388514334-2q0j4mf2-2.png",
    "url": "https://grand-strand-haven.lovable.app/"
  },
  {
    "title": "Marshside Oyster Co.",
    "category": "Restaurant",
    "description": "Warm, authentic website for a family-run oyster bar, raw bar, and seafood market in Beaufort, South Carolina. Captures true Lowcountry soul with dock-to-table freshness, local watermen stories, and inviting visuals of salt air, live oaks, and tidal marshes.",
    "image": "https://nikppnqnwtwgwzfktzuu.supabase.co/storage/v1/object/public/demos/demo-images/1783387191094-2uz0oizx-1.png",
    "url": "https://marshside-digital-docks.lovable.app/"
  },
  {
    "title": "Coastal Haven Cleaning",
    "category": "Other",
    "description": "Premium, trustworthy house cleaning service website for Myrtle Beach vacation rentals and oceanfront properties. Effortless online booking, sparkling before/after visuals, and genuine Lowcountry care that emphasizes reliability for Grand Strand coastal homes.",
    "image": "https://nikppnqnwtwgwzfktzuu.supabase.co/storage/v1/object/public/demos/demo-images/1783389794776-i36wl6c5-chc.png",
    "url": "https://grand-strand-sparkle-forge.lovable.app/"
  },
  {
    "title": "Blade Haven",
    "category": "Specialty Retail",
    "description": "Collector knife and instrument shop for Russell Springs and Lake Cumberland — Case blades, guitars, and a small-town shop story. Portfolio example built in Monticello KY.",
    "image": "https://nikppnqnwtwgwzfktzuu.supabase.co/storage/v1/object/public/demos/demo-images/1788065766393-sjeef4gd-bh.webp",
    "url": "https://bladehaven-demo.lovable.app/"
  },
  {
    "title": "Cedar Cove Taproom",
    "category": "Restaurant",
    "description": "Lakeside taproom website for Lake Cumberland — digital menu, weekly specials, events, and a patio-after-the-ramp feel. Portfolio example built in Monticello KY.",
    "image": "https://nikppnqnwtwgwzfktzuu.supabase.co/storage/v1/object/public/demos/demo-images/1788068537949-v6gd3r8v-cct.webp",
    "url": "https://lakeside-taproom-site.lovable.app/"
  },
  {
    "title": "The Piano Dock",
    "category": "Restaurant",
    "description": "Lakeside piano bar website for Lake Cumberland — dueling pianos, stage nights, private events, and a dock-side show feel. Portfolio example built in Monticello KY.",
    "image": "https://nikppnqnwtwgwzfktzuu.supabase.co/storage/v1/object/public/demos/demo-images/1788068974522-6ycgzzhi-tpd.webp",
    "url": "https://the-piano-dock.lovable.app/"
  },
  {
    "title": "PharmPrep KY",
    "category": "Other",
    "description": "A pharmacy technician bench kit from Bluegrass Digital Forge (Lake Cumberland, Kentucky). Specialty days' supply with the work shown, a searchable drug list, pill imprint search, a federal storage sheet, and the Kentucky registration path beside the national CPhT route. Quiz and flashcards stay in the back. Not a monthly question bank.",
    "image": "https://nikppnqnwtwgwzfktzuu.supabase.co/storage/v1/object/public/demos/demo-images/1791214401505-73l5tkaq-3.png",
    "url": "https://pharmatech-ace.lovable.app/"
  }
];
