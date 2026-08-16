// SoFlo Stays - Core JavaScript Logic and Hotel Database
// 1. Configuration constants for Affiliate and AdSense integrations
// Update these IDs with your active accounts to enable monetization
const MONETIZATION_CONFIG = {
    googleAdSensePublisherId: "ca-pub-XXXXXXXXXXXXXXXX", // Insert your Google AdSense Publisher ID here
    googleAdSenseSlotId: "1234567890",              // Insert your Ad Unit Slot ID here
    affiliates: {
        bookingId: "aff-booking-placeholder",         // Your Booking.com affiliate reference ID
        hotelsId: "aff-hotels-placeholder",           // Your Hotels.com affiliate ID
        tripadvisorId: "aff-tripadvisor-placeholder", // Your TripAdvisor affiliate ID
        vrboId: "aff-vrbo-placeholder"                // Your VRBO affiliate ID
    }
};

// 2. Hotel Database
const HOTEL_DATA = [
    {
        "id": "naples-grand",
        "name": "Naples Grande Beach Resort",
        "location": "Naples",
        "address": "475 Seagate Dr, Naples, FL 34103",
        "priceRange": "$$$",
        "priceLevel": 3,
        "stars": 4.5,
        "tripadvisorScore": 4.5,
        "tags": [
            "Beachfront",
            "Luxury",
            "Spa",
            "Family-friendly",
            "Pet-friendly"
        ],
        "perk": "A scenic open-air tram ride through a protected mangrove estuary to the beach.",
        "description": "A luxury resort featuring three pools, a waterslide, golf course, and a quiet beach accessed via a scenic mangrove ride.",
        "longDescription": `Naples Grande Beach Resort is one of Southwest Florida’s most versatile coastal escapes, offering a blend of luxury, recreation, and natural beauty. Set on 23 acres of lush tropical landscape, the resort features an 18‑hole championship golf course, 15 Har‑Tru tennis courts, three sparkling pools, and a full‑service spa known for its restorative treatments. Families love the dedicated kid‑friendly pool with its 100‑foot waterslide, while couples gravitate toward the adults‑only pool for a quieter retreat.

One of the resort’s signature experiences is its scenic boardwalk tram ride through a protected mangrove estuary, leading guests to a wide stretch of white‑sand beach with calm Gulf waters. Rooms and suites are spacious and modern, each offering private balconies with sweeping views of the Gulf of Mexico or the resort’s tropical grounds. Dining options range from casual coastal fare to refined evening meals, giving guests plenty of flexibility throughout their stay.

Why We Recommend It: Naples Grande is ideal for travelers who want a resort that truly “has it all” — beach access, recreation, spa relaxation, and family‑friendly amenities. It’s a standout choice for both romantic getaways and active vacations.`,
        "checkInCheckOut": {
            "Check-In Time": "4:00 PM",
            "Check-Out Time": "11:00 AM"
        },
        "image": "naples_grande.jpg",
        "imageAlt": "Mangrove boardwalk beach access and pools at Naples Grande Beach Resort",
        "imageTitle": "Naples Grande Beach Resort Pool Area",
        "imageDescription": "Mangrove boardwalk beach access and pools at Naples Grande Beach Resort",
        "offersSpa": true,
        "offersBeachAccess": true,
        "phone": "(239) 597-3232",
        "bookingUrls": {
            "booking": "https://www.booking.com/hotel/us/naples-grande.html?aid=356980&label=gog235jc-10CAso7AFCDW5hcGxlcy1ncmFuZGVIM1gDaI4CiAEBmAEzuAEXyAEM2AED6AEB-AEBiAIBqAIBuALUudjTBsACAdICJDNmNjUyMGU0LTA2YTEtNDYyYy04YTI2LWEwYjUzYTE4M2IzMNgCAeACAQ&sid=15b3ca973786aedfe8940e60f0b48b87&dest_id=20023293&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1786125531&srpvid=04197e6b7b6f01cc&type=total&ucfs=1&",
            "hotels": "https://www.hotels.com",
            "expedia": "https://www.expedia.com",
            "agoda": "https://www.agoda.com",
            "website": "https://www.naplesgrande.com/"
        },
        "mapsUrl": "https://maps.google.com/?q=Naples+Grande+Beach+Resort+475+Seagate+Dr+Naples+FL+34103",
        "nearbyDining": [
            {
                "name": "Bistro 821",
                "id": "bistro-821",
                "description": "An established, upscale bistro on Naples' famous 5th Avenue South, serving a delicious fusion of Mediterranean-influenced pastas, fresh seafood, and premium steaks in an elegant, vibrant setting."
            },
            {
                "name": "Caffe Milano",
                "id": "caffe-milano",
                "description": "A modern Italian restaurant on 5th Avenue South in Naples, serving rustic yet refined pizzas, fresh handmade pastas, and classic seafood entrees in an open-air, stylish space."
            },
            {
                "name": "Mister O1 Extraordinary Pizza",
                "id": "mister-o1",
                "description": "An extraordinary pizzeria famous for its iconic star-shaped pizzas with creamy ricotta stuffed inside the folded points. Originating in Miami Beach and expanding to Pembroke Pines, it serves crisp, thin crusts in a chic modern setting."
            }
        ],
        "thingsToDo": [
            {
                "name": "Clam Pass Park Boardwalk",
                "description": "Take a scenic 3/4-mile boardwalk tram ride through coastal mangroves to a beautiful beach complete with a beachside cafe."
            },
            {
                "name": "Waterside Shops",
                "description": "Stroll this high-end open-air mall featuring luxury boutiques, dining, and scenic water features."
            },
            {
                "name": "Naples Sightseeing Boat Tour",
                "description": "Enjoy a scenic cruise through Naples Bay and Port Royal, spotting dolphins and multi-million dollar coastal mansions.",
                "bookingUrl": "https://www.viator.com/tours/Naples/Naples-Sightseeing-Tour/d22381-32251P1?pid=P00314010&mcid=42383&medium=link",
                "bookingButtonText": "Naples Sightseeing Boat Tour 2026 - BOOK NOW"
            }
        ]
    },
    {
        "id": "disneys-vero-beach",
        "name": "Disney's Vero Beach Resort",
        "location": "Vero Beach",
        "address": "9250 Island Grove Terrace, Vero Beach, FL 32963",
        "priceRange": "$$$",
        "priceLevel": 3,
        "stars": 4,
        "tripadvisorScore": 4.5,
        "tags": [
            "Beachfront",
            "Family-friendly",
            "Luxury",
            "Spa"
        ],
        "perk": "Mickey Mouse-shaped pool with a pirate ship waterslide and sea turtle nesting programs.",
        "description": "A charming old-Florida style beachfront resort combining Disney service with beachside relaxation.",
        "longDescription": `Disney’s Vero Beach Resort brings the charm and storytelling of Disney to Florida’s quiet Treasure Coast, offering a family‑friendly beachfront escape with a nostalgic coastal‑hamlet design. The resort blends classic Disney hospitality with natural beauty, featuring spacious rooms and villas, a Mickey‑shaped pool with a waterslide, campfire sing‑alongs, and seasonal sea turtle conservation programs that educate guests about local wildlife.

The property sits directly on a pristine stretch of Atlantic shoreline, offering easy beach access and plenty of space for families to relax. Kids enjoy the themed activities and character touches, while adults appreciate the peaceful setting, ocean views, and well‑maintained amenities. Dining options include casual coastal fare and family‑friendly menus, all delivered with Disney’s signature attention to detail.

Why We Recommend It: This resort is perfect for families seeking a quieter, more nature‑focused Disney experience without the crowds of Orlando. It’s one of Florida’s most charming and wholesome beachfront stays.`,
        "checkInCheckOut": {
            "Check-In Time": "4:00 PM",
            "Check-Out Time": "11:00 AM"
        },
        "image": "disney_vero_beach_1.jpg",
        "images": [
            "disney_vero_beach_1.jpg",
            "disney_vero_beach_2.jpg",
            "disney_vero_beach_3.jpg"
        ],
        "imageAlt": "Disney's Vero Beach Resort coastal facade nestled in lush greenery along the beach",
        "imageTitle": "Disney's Vero Beach Resort Beachfront Facade",
        "imageDescription": "Disney's Vero Beach Resort coastal facade nestled in lush greenery along the beach",
        "offersSpa": true,
        "offersBeachAccess": true,
        "phone": "(772) 234-2000",
        "bookingUrls": {
            "booking": "https://verobeach.disney.go.com/",
            "hotels": "https://www.hotels.com",
            "expedia": "https://www.expedia.com",
            "agoda": "https://www.agoda.com",
            "website": "https://disneyvacationclub.disney.go.com/destinations/resorts/vero-beach/"
        },
        "mapsUrl": "https://maps.google.com/?q=Disney's+Vero+Beach+Resort+9250+Island+Grove+Terrace+Vero+Beach+FL+32963",
        "nearbyDining": [
            {
                "name": "Wind & Waves Grill",
                "id": "wind-and-waves-grill",
                "description": "A casual, family-friendly coastal tavern located at Disney's Vero Beach Resort, serving up American favorites and fresh seafood in a relaxed beachside setting."
            },
            {
                "name": "Citrus Grillhouse",
                "id": "citrus-grillhouse",
                "description": "An oceanfront bistro offering spectacular seaside views and a menu centered on fresh local seafood, grilled meats, and citrus-infused flavors in an upscale yet relaxed setting."
            },
            {
                "name": "El Sid Taqueria",
                "id": "el-sid-taqueria",
                "description": "A vibrant, casual beachfront taco joint in Vero Beach, serving up fresh tacos, chips, and refreshing soft-serve ice cream just steps from the ocean."
            }
        ],
        "thingsToDo": [
            {
                "name": "Ocean Drive Beachside District",
                "description": "Stroll Vero Beach's charming boutique shopping, beachside dining, and boardwalk avenues located just across the barrier island."
            },
            {
                "name": "Environmental Learning Center",
                "description": "Explore a gorgeous 64-acre nature campus on Wabash Island featuring pontoon eco-tours and canoe trails."
            },
            {
                "name": "Vero Beach: Guided Clear Kayak Tours",
                "description": "Paddle through beautiful waterways in a clear kayak to spot local marine life and enjoy scenic views.",
                "bookingUrl": "https://gyg.me/qJVO8ton",
                "bookingButtonText": "Vero Beach: Guided Clear Kayak Tours - 2026 (Verified Reviews)"
            }
        ]
    },
    {
        "id": "inn-on-fifth",
        "name": "Inn on Fifth",
        "location": "Naples",
        "address": "699 5th Ave S, Naples, FL 34102",
        "priceRange": "$$$",
        "priceLevel": 3,
        "stars": 4.5,
        "tripadvisorScore": 4.7,
        "tags": [
            "Boutique",
            "Luxury",
            "Spa",
            "Rooftop Pool",
            "Pet-friendly"
        ],
        "perk": "Direct access to downtown Naples' boutiques, theaters, and fine dining, with a private Club level.",
        "description": "A chic, upscale boutique hotel located directly on Fifth Avenue South in downtown Naples, offering a heated rooftop pool.",
        "longDescription": `Inn on Fifth is an award‑winning boutique hotel located directly on Naples’ iconic 5th Avenue South, offering a sophisticated blend of modern luxury and walkable convenience. The hotel features stylish contemporary rooms, a full‑service spa, a heated rooftop pool, and the exclusive Club Level Suites housed in a private building across the street. Guests enjoy immediate access to Naples’ best chef‑driven restaurants, art galleries, boutiques, and nightlife — all just steps from the hotel’s front door.

The atmosphere is refined yet approachable, making it a favorite for couples, business travelers, and visitors seeking a polished downtown experience. The rooftop pool provides a serene escape above the city, while the Club Level offers elevated amenities including private check‑in, gourmet snacks, and personalized service. The beach is a short walk or bike ride away, adding to the hotel’s appeal for travelers who want both city energy and coastal relaxation.

Why We Recommend It: Inn on Fifth is ideal for travelers who want to stay in the heart of Naples’ vibrant downtown while enjoying boutique luxury and walkable access to everything.`,
        "checkInCheckOut": {
            "Check-In Time": "3:00 PM",
            "Check-Out Time": "12:00 PM"
        },
        "image": "inn_on_fifth_1.jpg",
        "images": [
            "inn_on_fifth_1.jpg",
            "inn_on_fifth_2.jpg",
            "inn_on_fifth_3.jpg"
        ],
        "imageAlt": "Illuminated nighttime exterior and entrance of the Inn on Fifth",
        "imageTitle": "Inn on Fifth Facade at Night",
        "imageDescription": "Stunning illuminated entrance and facade of Inn on Fifth at night",
        "offersSpa": true,
        "offersBeachAccess": false,
        "phone": "(239) 403-8777",
        "bookingUrls": {
            "booking": "https://www.booking.com/hotel/us/the-inn-on-fifth.html?aid=356980&label=gog235jc-10CAso7AFCEHRoZS1pbm4tb24tZmlmdGhIM1gDaI4CiAEBmAEzuAEXyAEM2AED6AEB-AEBiAIBqAIBuAL9utjTBsACAdICJGFjNTViNmY0LTQ4ZjctNGU1Ny04NTk1LWJmMDBjMTIwZmExONgCAeACAQ&sid=15b3ca973786aedfe8940e60f0b48b87&dest_id=20023293&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1786125700&srpvid=d8cd7ebfa4690063&type=total&ucfs=1&",
            "hotels": "https://www.hotels.com",
            "expedia": "https://www.expedia.com",
            "agoda": "https://www.agoda.com",
            "website": "https://www.innonfifth.com/"
        },
        "mapsUrl": "https://maps.google.com/?q=Inn+on+Fifth+699+5th+Ave+S+Naples+FL+34102",
        "nearbyDining": [
            {
                "name": "Bistro 821",
                "id": "bistro-821",
                "description": "An established, upscale bistro on Naples' famous 5th Avenue South, serving a delicious fusion of Mediterranean-influenced pastas, fresh seafood, and premium steaks in an elegant, vibrant setting."
            },
            {
                "name": "Caffe Milano",
                "id": "caffe-milano",
                "description": "A modern Italian restaurant on 5th Avenue South in Naples, serving rustic yet refined pizzas, fresh handmade pastas, and classic seafood entrees in an open-air, stylish space."
            },
            {
                "name": "Mister O1 Extraordinary Pizza",
                "id": "mister-o1",
                "description": "An extraordinary pizzeria famous for its iconic star-shaped pizzas with creamy ricotta stuffed inside the folded points. Originating in Miami Beach and expanding to Pembroke Pines, it serves crisp, thin crusts in a chic modern setting."
            }
        ],
        "thingsToDo": [
            {
                "name": "Historic Fifth Avenue Shopping",
                "description": "Step right onto the boulevard to explore high-end local boutiques, visual art galleries, and lively street-side cafes."
            },
            {
                "name": "Naples Pier & Beach",
                "description": "Walk down to the historic 1,000-foot boardwalk pier for breathtaking sunset vistas and dolphin viewing."
            },
            {
                "name": "Gulf of Mexico Sunset Cruise from Naples",
                "description": "Sail from Naples on a scenic sunset catamaran tour out across the Gulf of Mexico, watching for wild dolphins.",
                "bookingUrl": "https://www.viator.com/tours/Naples/Naples-Sunset-Cruise/d22381-32251P2?pid=P00314010&mcid=42383&medium=link",
                "bookingButtonText": "Gulf of Mexico Sunset Cruise from Naples 2026 - BOOK NOW"
            }
        ]
    },
    {
        "id": "la-playa-beach-resort",
        "name": "LaPlaya Beach & Golf Resort",
        "location": "Naples",
        "address": "9891 Gulf Shore Dr, Naples, FL 34108",
        "priceRange": "$$$$",
        "priceLevel": 4,
        "stars": 4.5,
        "tripadvisorScore": 4,
        "tags": [
            "Beachfront",
            "Luxury",
            "Spa",
            "Family-friendly",
            "Boutique"
        ],
        "perk": "Bespoke beachfront fire pits, ocean-side pool landscape, and private championship golf club.",
        "description": "An exquisite luxury resort located on a quiet Vanderbilt Beach peninsula, offering fine dining directly on the sand.",
        "longDescription": `LaPlaya Beach & Golf Resort is a luxury coastal haven nestled between Vanderbilt Bay and the Gulf of Mexico. The resort features custom‑designed guestrooms, a private golf course, cascading oceanfront pools, and tiki‑style beach service that enhances the tropical atmosphere. Guests can dine directly on the sand at the award‑winning BALEEN restaurant, known for its romantic beachfront setting and elevated coastal cuisine.

The resort’s SpaTerre offers specialized tropical wellness treatments, while the beachfront location provides stunning sunset views and easy access to Naples’ calm Gulf waters. The atmosphere is serene, upscale, and perfect for both couples and families seeking a refined beach getaway.

Why We Recommend It: LaPlaya is perfect for travelers who want a luxurious beachfront stay with exceptional dining, beautiful views, and a peaceful atmosphere.`,
        "checkInCheckOut": {
            "Check-In Time": "4:00 PM",
            "Check-Out Time": "12:00 PM"
        },
        "image": "photo_coming_soon.jpg",
        "imageAlt": "Beachfront pool cascade and dining at LaPlaya Beach & Golf Resort",
        "offersSpa": true,
        "offersBeachAccess": true,
        "phone": "(239) 597-3123",
        "bookingUrls": {
            "booking": "https://www.booking.com/hotel/us/la-playa-beach-and-golf-resort.html?aid=356980&label=gog235jc-10CAso7AFCHmxhLXBsYXlhLWJlYWNoLWFuZC1nb2xmLXJlc29ydEgzWANojgKIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4ApG72NMGwAIB0gIkZjg5ZDc2NjAtYTUxNi00ZjljLTliM2QtYTUxM2RjYWQxOTc52AIB4AIB&sid=15b3ca973786aedfe8940e60f0b48b87&dest_id=20023293&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1786125719&srpvid=ed217ec939640057&type=total&ucfs=1&",
            "hotels": "https://www.hotels.com",
            "expedia": "https://www.expedia.com",
            "agoda": "https://www.agoda.com",
            "website": "https://www.laplayaresort.com/"
        },
        "mapsUrl": "https://maps.google.com/?q=LaPlaya+Beach+Golf+Resort+9891+Gulf+Shore+Dr+Naples+FL+34108",
        "nearbyDining": [
            {
                "name": "Bistro 821",
                "id": "bistro-821",
                "description": "An established, upscale bistro on Naples' famous 5th Avenue South, serving a delicious fusion of Mediterranean-influenced pastas, fresh seafood, and premium steaks in an elegant, vibrant setting."
            },
            {
                "name": "Caffe Milano",
                "id": "caffe-milano",
                "description": "A modern Italian restaurant on 5th Avenue South in Naples, serving rustic yet refined pizzas, fresh handmade pastas, and classic seafood entrees in an open-air, stylish space."
            },
            {
                "name": "Mister O1 Extraordinary Pizza",
                "id": "mister-o1",
                "description": "An extraordinary pizzeria famous for its iconic star-shaped pizzas with creamy ricotta stuffed inside the folded points. Originating in Miami Beach and expanding to Pembroke Pines, it serves crisp, thin crusts in a chic modern setting."
            }
        ],
        "thingsToDo": [
            {
                "name": "Delnor-Wiggins Pass State Park",
                "description": "Visit this scenic undeveloped barrier island park for exceptional shelling, coastal swimming, and paddleboarding."
            },
            {
                "name": "Mercato Lifestyle Center",
                "description": "Spend an evening at this vibrant open-air district filled with restaurants, movie theaters, and outdoor music."
            },
            {
                "name": "Dolphin, Manatee and Sea Turtle Adventure Tour of Bonita Springs",
                "description": "Embark on a guided eco-tour through the shallow coastal mangroves of Bonita Springs to spot native marine life.",
                "bookingUrl": "https://www.viator.com/tours/Naples/Dolphin-Manatee-and-Sea-Turtle-Adventure-Tour/d22381-39750P20?pid=P00314010&mcid=42383&medium=link",
                "bookingButtonText": "Dolphin, Manatee and Sea Turtle Adventure Tour of Bonita Springs 2026 - Naples - BOOK NOW"
            }
        ]
    },
    {
        "id": "jw-marriott-brickell",
        "name": "JW Marriott Miami",
        "location": "Brickell",
        "address": "1109 Brickell Ave, Miami, FL 33131",
        "priceRange": "$$$$",
        "priceLevel": 4,
        "stars": 4.5,
        "tripadvisorScore": 4.5,
        "tags": [
            "Luxury",
            "Spa",
            "Family-friendly",
            "Rooftop Pool"
        ],
        "perk": "Excellent central location on Brickell Avenue, featuring a stylish pool terrace and top-tier business center.",
        "description": "A sophisticated urban hotel located on Brickell Avenue, providing business and leisure travelers with premium rooms and dining.",
        "longDescription": `JW Marriott Miami offers a refined urban retreat in the center of Brickell, Miami’s bustling financial district. The hotel blends modern luxury with business‑friendly amenities, featuring contemporary guestrooms, a full‑service spa, a sleek outdoor pool deck, and excellent access to Brickell City Centre’s shopping and dining. The atmosphere is polished and cosmopolitan, attracting both executives and leisure travelers seeking a stylish base in the city.

Guests appreciate the hotel’s spacious rooms, upscale finishes, and attentive service. The pool area offers a relaxing escape from the city’s energy, while the on‑site dining options provide convenient meals throughout the day. Its location makes it easy to explore Brickell’s nightlife, waterfront parks, and cultural attractions, all within walking distance.

Why We Recommend It: JW Marriott Miami is perfect for travelers who want a luxurious, centrally located hotel with easy access to Brickell’s restaurants, shops, and business hubs.`,
        "checkInCheckOut": {
            "Check-In Time": "4:00 PM",
            "Check-Out Time": "11:00 AM"
        },
        "image": "jw_marriott_brickell_1.jpg",
        "images": [
            "jw_marriott_brickell_1.jpg",
            "jw_marriott_brickell_2.jpg",
            "jw_marriott_brickell_3.jpg"
        ],
        "imageAlt": "Sleek pool deck and city skyline views at JW Marriott Miami",
        "imageTitle": "JW Marriott Miami Rooftop Pool Deck",
        "imageDescription": "Sleek pool deck and city skyline views at JW Marriott Miami",
        "offersSpa": true,
        "offersBeachAccess": false,
        "phone": "(305) 329-3500",
        "bookingUrls": {
            "booking": "https://www.booking.com/hotel/us/jw-marriott-miami.html?aid=356980&label=gog235jc-10CAso7AFCEWp3LW1hcnJpb3R0LW1pYW1pSDNYA2iOAogBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAagCAbgCrbvY0wbAAgHSAiQ4YTllNDQxNS01NmMzLTQ0ZDUtYWFlZS02Yzc4YWUwZDVmZWTYAgHgAgE&sid=15b3ca973786aedfe8940e60f0b48b87&dest_id=20023181&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1786125747&srpvid=190c7ed7926f01ed&type=total&ucfs=1&",
            "hotels": "https://www.hotels.com",
            "expedia": "https://www.expedia.com",
            "agoda": "https://www.agoda.com",
            "website": "https://www.marriott.com/en-us/hotels/miajw-jw-marriott-miami/overview/"
        },
        "mapsUrl": "https://maps.google.com/?q=JW+Marriott+Miami+1109+Brickell+Ave+Miami+FL+33131",
        "nearbyDining": [
            {
                "name": "Tacology",
                "id": "tacology-brickell",
                "description": "A vibrant, stylish rooftop Mexican restaurant at Brickell City Centre. Delivers creative tacos, fresh ceviches, and premium margaritas in an upbeat, contemporary environment."
            },
            {
                "name": "Cantina La Veinte",
                "id": "cantina-la-veinte",
                "description": "An ultra-chic, two-story Mexican cantina in Brickell overlooking the water, featuring a gorgeous dining room, high-end traditional Mexican specialties, and a lively bar scene."
            },
            {
                "name": "Mister O1 Extraordinary Pizza",
                "id": "mister-o1",
                "description": "An extraordinary pizzeria famous for its iconic star-shaped pizzas with creamy ricotta stuffed inside the folded points. Originating in Miami Beach and expanding to Pembroke Pines, it serves crisp, thin crusts in a chic modern setting."
            }
        ],
        "thingsToDo": [
            {
                "name": "Brickell City Centre",
                "description": "Walk to this high-end retail hub featuring three levels of open-air shopping, covered by a climate-controlling steel ribbon canopy."
            },
            {
                "name": "Mary Brickell Village",
                "description": "Walk just a couple of blocks to enjoy outdoor dining, vibrant pub life, boutiques, and a cozy open-air lifestyle courtyard."
            },
            {
                "name": "Private Boat Ride in Miami with Experienced Captain and Champagne",
                "description": "Embark on a private boat cruise of Miami departing from the marina in historic Coconut Grove.",
                "bookingUrl": "https://www.viator.com/tours/Miami/Miami-Boat-Rental/d662-288880P1?pid=P00314010&mcid=42383&medium=link",
                "bookingButtonText": "Miami Private Boat Cruise 2026 - BOOK NOW"
            }
        ]
    },
    {
        "id": "four-seasons-brickell",
        "name": "Four Seasons Hotel Miami",
        "location": "Brickell",
        "address": "1435 Brickell Ave, Miami, FL 33131",
        "priceRange": "$$$$",
        "priceLevel": 4,
        "stars": 5,
        "tripadvisorScore": 4.6,
        "tags": [
            "Luxury",
            "Spa",
            "Rooftop Pool",
            "Family-friendly",
            "Pet-friendly"
        ],
        "perk": "A spectacular two-acre rooftop pool deck surrounded by towering palms and sleek cabanas.",
        "description": "An ultra-luxury high-rise oasis in Brickell, boasting premium art collections, massive health clubs, and high-end dining.",
        "longDescription": `Four Seasons Hotel Miami rises 70 stories above the Brickell skyline, offering one of the most serene and luxurious urban escapes in South Florida. The hotel blends elite service with resort‑style amenities, including a two‑acre palm‑lined pool terrace featuring cabanas, hammock sanctuaries, and a quiet, tropical atmosphere that feels worlds away from the city below. Guests also enjoy access to the massive Equinox fitness club and spa located within the property, providing state‑of‑the‑art wellness facilities and premium treatments.

Inside, the hotel showcases millions of dollars in museum‑quality Latin American art, creating an elegant and culturally rich environment throughout its public spaces. Rooms and suites are modern, spacious, and designed with understated luxury, offering sweeping views of Biscayne Bay or the city skyline. Its Brickell location places guests steps from world‑class dining, shopping, and nightlife, while still offering a peaceful retreat from the energy of Miami’s financial district.

Why We Recommend It: Four Seasons Miami is ideal for travelers seeking a refined, tranquil sanctuary with exceptional service and resort‑level amenities in the heart of Brickell.`,
        "checkInCheckOut": {
            "Check-In Time": "3:00 PM",
            "Check-Out Time": "12:00 PM"
        },
        "image": "four_seasons_miami_1.jpg",
        "images": [
            "four_seasons_miami_1.jpg",
            "four_seasons_miami_2.jpg",
            "four_seasons_miami_3.jpg"
        ],
        "imageAlt": "Two-acre tropical rooftop pool oasis at Four Seasons Hotel Miami",
        "offersSpa": true,
        "offersBeachAccess": false,
        "phone": "(305) 358-3535",
        "bookingUrls": {
            "booking": "https://www.booking.com/hotel/us/four-seasons-miami.html?aid=356980&label=gog235jc-10CAso7AFCEmZvdXItc2Vhc29ucy1taWFtaUgzWANojgKIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AtG72NMGwAIB0gIkZDUzN2VhMTgtYWE2Yi00NjZkLWJmNzMtNTU3M2M0OTQzMjNm2AIB4AIB&sid=15b3ca973786aedfe8940e60f0b48b87&dest_id=20023181&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1786125783&srpvid=d7577ee9a26300b1&type=total&ucfs=1&",
            "hotels": "https://www.hotels.com",
            "expedia": "https://www.expedia.com",
            "agoda": "https://www.agoda.com",
            "website": "https://www.fourseasons.com/miami/"
        },
        "mapsUrl": "https://maps.google.com/?q=Four+Seasons+Hotel+Miami+1435+Brickell+Ave+Miami+FL+33131",
        "nearbyDining": [
            {
                "name": "Tacology",
                "id": "tacology-brickell",
                "description": "A vibrant, stylish rooftop Mexican restaurant at Brickell City Centre. Delivers creative tacos, fresh ceviches, and premium margaritas in an upbeat, contemporary environment."
            },
            {
                "name": "Cantina La Veinte",
                "id": "cantina-la-veinte",
                "description": "An ultra-chic, two-story Mexican cantina in Brickell overlooking the water, featuring a gorgeous dining room, high-end traditional Mexican specialties, and a lively bar scene."
            },
            {
                "name": "Mister O1 Extraordinary Pizza",
                "id": "mister-o1",
                "description": "An extraordinary pizzeria famous for its iconic star-shaped pizzas with creamy ricotta stuffed inside the folded points. Originating in Miami Beach and expanding to Pembroke Pines, it serves crisp, thin crusts in a chic modern setting."
            }
        ],
        "thingsToDo": [
            {
                "name": "Perez Art Museum Miami (PAMM)",
                "description": "Take a short cab ride north to Museum Park to tour this breathtaking waterfront modern art museum."
            },
            {
                "name": "Brickell City Centre",
                "description": "Walk to this high-end retail hub featuring three levels of open-air shopping, covered by a climate-controlling steel ribbon canopy."
            },
            {
                "name": "Private Luxury Yacht | + 2 free Jet Skis | + Sea Pool",
                "description": "Experience the ultimate Miami lifestyle with a private luxury yacht charter, including jet skis and an inflatable sea pool.",
                "bookingUrl": "https://www.viator.com/tours/Miami/Private-Yacht-Charters-and-Boat-Rentals/d662-5606753P1?pid=P00314010&mcid=42383&medium=link",
                "bookingButtonText": "Miami Private Yacht Rental With Optional Jet Skis 2026 - BOOK NOW"
            }
        ]
    },
    {
        "id": "fontainebleau-miami",
        "name": "Fontainebleau Miami Beach",
        "location": "Miami Beach",
        "address": "4441 Collins Ave, Miami Beach, FL 33140",
        "priceRange": "$$$",
        "priceLevel": 3,
        "stars": 5,
        "tripadvisorScore": 4.5,
        "tags": [
            "Beachfront",
            "Luxury",
            "Spa",
            "Family-friendly",
            "Rooftop Pool",
            "Pet-friendly",
            "Historic"
        ],
        "perk": "Massive lagoon-style pools, legendary beachfront location, and iconic nightlife (LIV).",
        "description": "A legendary mid-century architectural masterpiece on Millionaire's Row, combining historic glamour with modern luxury.",
        "longDescription": `Fontainebleau Miami Beach is a legendary oceanfront resort that blends mid‑century glamour with modern luxury. Designed by Morris Lapidus in 1954, the property spans 20 acres along Millionaire’s Row and features iconic architecture, sweeping ocean views, and world‑class amenities. Guests can enjoy the 40,000‑square‑foot Lapis Spa, spectacular multi‑level lagoon pools, direct beach access, and Miami’s most famous nightlife venue — LIV.

The resort offers 12 on‑site restaurants ranging from fine dining to casual coastal fare, along with stylish rooms and suites overlooking the Atlantic. Fontainebleau’s atmosphere is energetic and upscale, attracting travelers who want a lively Miami Beach experience with everything at their fingertips.

Why We Recommend It: Fontainebleau is perfect for travelers seeking a glamorous, full‑service Miami Beach resort with luxury amenities, nightlife, and iconic design.`,
        "checkInCheckOut": {
            "Check-In Time": "4:00 PM",
            "Check-Out Time": "11:00 AM"
        },
        "image": "fontainebleau_miami_1.jpg",
        "images": [
            "fontainebleau_miami_1.jpg",
            "fontainebleau_miami_2.jpg"
        ],
        "imageAlt": "Sprawling poolside paradise at Fontainebleau Miami Beach",
        "offersSpa": true,
        "offersBeachAccess": true,
        "phone": "(305) 538-2000",
        "bookingUrls": {
            "booking": "https://www.booking.com/hotel/us/fontainebleau-resort.html?aid=356980&label=gog235jc-10CAso7AFCFGZvbnRhaW5lYmxlYXUtcmVzb3J0SDNYA2iOAogBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAagCAbgC6bvY0wbAAgHSAiRiZGVhZTg2OC1kYjBkLTRmMGItOTk1Yy1mNTZmYjZhNTJkNDfYAgHgAgE&sid=15b3ca973786aedfe8940e60f0b48b87&dest_id=20023182&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1786125806&srpvid=706e7ef5af7a0143&type=total&ucfs=1&",
            "hotels": "https://www.hotels.com",
            "expedia": "https://www.expedia.com",
            "agoda": "https://www.agoda.com",
            "website": "https://www.fontainebleau.com/"
        },
        "mapsUrl": "https://maps.google.com/?q=Fontainebleau+Miami+Beach+4441+Collins+Ave+Miami+Beach+FL+33140",
        "nearbyDining": [
            {
                "name": "Mister O1 Extraordinary Pizza",
                "id": "mister-o1",
                "description": "An extraordinary pizzeria famous for its iconic star-shaped pizzas with creamy ricotta stuffed inside the folded points. Originating in Miami Beach and expanding to Pembroke Pines, it serves crisp, thin crusts in a chic modern setting."
            },
            {
                "name": "Joe & The Juice",
                "id": "joe-and-the-juice-aventura",
                "description": "A trendy Danish juice bar and coffee shop located inside Aventura Mall, popular for its fresh-pressed custom juices, signature flatbread sandwiches, and energetic club-like soundtrack."
            }
        ],
        "thingsToDo": [
            {
                "name": "Miami Beach Boardwalk",
                "description": "Step onto the scenic oceanfront path that runs directly behind the resort, stretching for miles along the Atlantic coast."
            },
            {
                "name": "Lincoln Road Pedestrian Mall",
                "description": "Take a short drive to South Beach's famous outdoor walking street lined with boutiques, cafes, and street-side galleries."
            },
            {
                "name": "Private Miami Boat Charter: Sightseeing, Sunset & Sandbar",
                "description": "Enjoy a customizable private boat rental with an experienced captain, cruising around Miami's beautiful bays and islands.",
                "bookingUrl": "https://www.viator.com/tours/Miami/Private-Tour-Miami-Boat-Rental/d662-328105P2?pid=P00314010&mcid=42383&medium=link",
                "bookingButtonText": "Miami Private Boat Charter and Customizable Private Tour 2026 - BOOK NOW"
            }
        ]
    },
    {
        "id": "costa-de-este",
        "name": "Costa d'Este Beach Resort & Spa",
        "location": "Vero Beach",
        "address": "3244 Ocean Dr, Vero Beach, FL 32963",
        "priceRange": "$$$",
        "priceLevel": 3,
        "stars": 4,
        "tripadvisorScore": 4.5,
        "tags": [
            "Beachfront",
            "Boutique",
            "Spa",
            "Luxury",
            "Family-friendly",
            "Pet-friendly"
        ],
        "perk": "Owned by singer Gloria Estefan, featuring chic Art Deco vibes, beachfront pools, and Cuban-inspired dining.",
        "description": "A stylish beachfront boutique hotel in Vero Beach, owned by Gloria and Emilio Estefan, offering modern chic oceanfront luxury.",
        "longDescription": `Costa d’Este Beach Resort & Spa brings sleek Miami‑style Art Deco design to Vero Beach’s quiet coastline. Owned by Gloria and Emilio Estefan, the resort offers a boutique beachfront experience with an infinity pool, a full‑service spa, and Cuban‑fusion dining at The Wave Kitchen & Bar. The atmosphere is modern, stylish, and intimate, making it a favorite for couples and travelers seeking a trendy coastal escape.

Rooms feature contemporary décor, rainfall showers, and private balconies with ocean or pool views. The beachfront location provides easy access to calm Atlantic waters, while the resort’s smaller size ensures a more personalized and peaceful stay compared to larger beach hotels.

Why We Recommend It: Costa d’Este is ideal for travelers who want a chic, boutique beachfront stay with modern design and exceptional dining.`,
        "checkInCheckOut": {
            "Check-In Time": "4:00 PM",
            "Check-Out Time": "11:00 AM"
        },
        "image": "costa_deste_1.jpg",
        "images": [
            "costa_deste_1.jpg",
            "costa_deste_2.jpg"
        ],
        "imageAlt": "Chic modern beachfront pool deck at Costa d'Este Beach Resort & Spa",
        "imageTitle": "Costa d'Este Beach Resort & Spa Exterior",
        "imageDescription": "Chic modern beachfront pool deck at Costa d'Este Beach Resort & Spa",
        "offersSpa": true,
        "offersBeachAccess": true,
        "phone": "(772) 562-9919",
        "bookingUrls": {
            "booking": "https://www.booking.com/hotel/us/costa-d-este-beach-resort.html?aid=356980&label=gog235jc-10CAso7AFCGWNvc3RhLWQtZXN0ZS1iZWFjaC1yZXNvcnRIM1gDaI4CiAEBmAEzuAEXyAEM2AED6AEB-AEBiAIBqAIBuAKhvNjTBsACAdICJGRjNTM2YWNkLTI4MzctNDY4Mi1iM2U4LTIxODc1M2Y5ZTIzYdgCAeACAQ&sid=15b3ca973786aedfe8940e60f0b48b87&dest_id=20024388&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1786125862&srpvid=21417f1127e70088&type=total&ucfs=1&",
            "hotels": "https://www.hotels.com",
            "expedia": "https://www.expedia.com",
            "agoda": "https://www.agoda.com",
            "website": "https://www.costadeeste.com/"
        },
        "mapsUrl": "https://maps.google.com/?q=Costa+d'Este+Beach+Resort+3244+Ocean+Dr+Vero+Beach+FL+32963",
        "nearbyDining": [
            {
                "name": "Cabana Bar",
                "id": "cabana-bar",
                "description": "An upscale oceanfront pool bar and grill at the Costa d'Este Beach Resort, offering refreshing tropical cocktails, fresh ceviches, and casual beachside fare under the palm trees."
            },
            {
                "name": "Citrus Grillhouse",
                "id": "citrus-grillhouse",
                "description": "An oceanfront bistro offering spectacular seaside views and a menu centered on fresh local seafood, grilled meats, and citrus-infused flavors in an upscale yet relaxed setting."
            },
            {
                "name": "El Sid Taqueria",
                "id": "el-sid-taqueria",
                "description": "A vibrant, casual beachfront taco joint in Vero Beach, serving up fresh tacos, chips, and refreshing soft-serve ice cream just steps from the ocean."
            }
        ],
        "thingsToDo": [
            {
                "name": "McKee Botanical Garden",
                "description": "Walk through 18 acres of peaceful tropical hammocks, water lily ponds, and historic Gilded Age structures."
            },
            {
                "name": "Riverside Theatre",
                "description": "Catch a professional live theater show, musical, or comedy act at this acclaimed regional performing arts facility."
            },
            {
                "name": "Kickin’ Kayaks Morning Wildlife Tour",
                "description": "Experience the local wildlife up close on a guided morning kayak tour through the beautiful waterways of Vero Beach.",
                "bookingUrl": "https://www.viator.com/tours/Vero-Beach/Morning-Kayak-Tour/d50900-5639510P3?pid=P00314010&mcid=42383&medium=link",
                "bookingButtonText": "Kickin’ Kayaks Morning Wildlife Tour 2026 - Vero Beach - BOOK NOW"
            }
        ]
    },
    {
        "id": "biltmore",
        "name": "Biltmore Hotel Miami Coral Gables",
        "location": "Coral Gables",
        "address": "1200 Anastasia Ave, Coral Gables, FL 33134",
        "priceRange": "$$$$",
        "priceLevel": 4,
        "stars": 5,
        "tripadvisorScore": 4.5,
        "tags": [
            "Historic",
            "Luxury",
            "Spa",
            "Family-friendly",
            "Pet-friendly"
        ],
        "perk": "One of the largest hotel swimming pools in the country, a championship golf course, and historic 1920s architecture.",
        "description": "A historic 1926 Mediterranean-style palace in Coral Gables, featuring a world-famous pool, golf, spa, and formal gardens.",
        "longDescription": `The Biltmore Hotel is one of Florida’s most iconic historic landmarks, built in 1926 and modeled after the Giralda Tower in Seville. This grand estate features Mediterranean architecture, hand‑painted ceilings, marble columns, and palm‑lined courtyards that transport guests to a bygone era of glamour. The resort includes a colossal 23,000‑square‑foot swimming pool, a championship Donald Ross‑designed golf course, a world‑class spa, and several upscale dining venues — including the famed Sunday brunch.

Rooms and suites blend classic elegance with modern comfort, offering views of the golf course, gardens, or historic architecture. The Biltmore’s atmosphere is serene and romantic, making it a favorite for weddings, anniversaries, and luxury getaways. Its Coral Gables location provides easy access to Miracle Mile, the Venetian Pool, and the neighborhood’s charming Mediterranean streets.

Why We Recommend It: The Biltmore is ideal for travelers seeking historic grandeur, refined luxury, and one of the most architecturally stunning hotels in Florida.`,
        "checkInCheckOut": {
            "Check-In Time": "4:00 PM",
            "Check-Out Time": "12:00 PM"
        },
        "image": "biltmore_4.jpg",
        "images": [
            "biltmore_4.jpg",
            "biltmore_2.jpg",
            "biltmore_3.jpg"
        ],
        "imageAlt": "Majestic Giralda tower and historic swimming pool at Biltmore Hotel Miami Coral Gables",
        "imageTitle": "Biltmore Hotel Miami Coral Gables Giralda Tower",
        "imageDescription": "Majestic Giralda tower and historic swimming pool at Biltmore Hotel Miami Coral Gables",
        "offersSpa": true,
        "offersBeachAccess": false,
        "phone": "(305) 445-1926",
        "bookingUrls": {
            "booking": "https://www.booking.com/hotel/us/biltmore.html?aid=356980&label=gog235jc-10CAso7AFCCGJpbHRtb3JlSDNYA2iOAogBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAagCAbgCvLzY0wbAAgHSAiQ3NjgzMjdiNi03MTZhLTRhMmMtOTQ5ZS0yNWIxMjJiMDU0NTfYAgHgAgE&sid=15b3ca973786aedfe8940e60f0b48b87&dest_id=20023181&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1786125889&srpvid=557a7f1eb2c800f1&type=total&ucfs=1&",
            "hotels": "https://www.hotels.com",
            "expedia": "https://www.expedia.com",
            "agoda": "https://www.agoda.com",
            "website": "https://www.biltmorehotel.com/"
        },
        "mapsUrl": "https://maps.google.com/?q=The+Biltmore+Hotel+1200+Anastasia+Ave+Coral+Gables+FL+33134",
        "nearbyDining": [
            {
                "name": "Hillstone",
                "id": "hillstone-coral-gables",
                "description": "An exceptionally polished, upscale dining institution on Miracle Mile in Coral Gables, renowned for its impeccable service, sushi platters, and USDA Prime steaks."
            },
            {
                "name": "Johnmartin's Restaurant & Bar",
                "id": "johnmartins-irish-pub",
                "description": "A newly renovated, beloved Irish pub on Miracle Mile, offering draft beers, single malt whiskeys, and a menu blending traditional Irish fare with contemporary American pub dishes."
            },
            {
                "name": "The Bar",
                "id": "the-bar-coral-gables",
                "description": "A legendary, historic pub and neighborhood staple in Coral Gables on Giralda Avenue, serving classic bar favorites, ice-cold beers, and late-night vibes since 1946."
            }
        ],
        "thingsToDo": [
            {
                "name": "Coral Gables Venetian Pool",
                "description": "Swim in this historic 1923 spring-fed quarry pool, carved out of coral rock and complete with waterfalls and caves."
            },
            {
                "name": "Fairchild Tropical Botanic Garden",
                "description": "Stroll through an 83-acre tropical wonderland of rare palms, cycads, native orchards, and a butterfly conservatory."
            },
            {
                "name": "Miami Helicopter Tour: Breathtaking Miami Skyline & Ocean Views",
                "description": "Fly high over Miami's skyscrapers, beaches, and key landmarks on a thrilling guided helicopter tour.",
                "bookingUrl": "https://www.viator.com/tours/Miami/Taste-of-Miami-Helicopter-Tour/d662-231628P7?pid=P00314010&mcid=42383&medium=link",
                "bookingButtonText": "Private Helicopter Tour of Miami 2026 - BOOK NOW"
            }
        ]
    },
    {
        "id": "ritz-naples",
        "name": "The Ritz-Carlton, Naples",
        "location": "Naples",
        "address": "280 Vanderbilt Beach Rd, Naples, FL 34108",
        "priceRange": "$$$$",
        "priceLevel": 4,
        "stars": 5,
        "tripadvisorScore": 4.7,
        "tags": [
            "Beachfront",
            "Luxury",
            "Spa",
            "Family-friendly"
        ],
        "perk": "Brand new luxury club lounge, oceanfront dining at Gumbo Limbo, and massive newly updated spa.",
        "description": "An exquisite beachfront resort on Vanderbilt Beach, offering legendary five-star luxury, fine dining, and beautiful pool decks.",
        "longDescription": `The Ritz‑Carlton, Naples is the pinnacle of beachfront luxury on Florida’s Gulf Coast, recently reopened after a grand renovation that elevated every aspect of the resort. Guests enjoy access to the largest Ritz‑Carlton Club Lounge in North America, a sprawling 51,000‑square‑foot spa, and multiple pools overlooking the Gulf’s calm, turquoise waters. Oceanfront dining at Gumbo Limbo offers fresh coastal cuisine beneath swaying palms, creating a quintessential Naples experience.

The resort’s children’s programs, beachfront activities, and polished service make it a favorite for both families and couples. Rooms and suites are beautifully redesigned with modern coastal elegance, offering stunning sunset views and premium amenities. With direct access to white‑sand beaches and world‑class dining, the Ritz‑Carlton Naples delivers a legendary luxury escape.

Why We Recommend It: This resort is ideal for travelers seeking top‑tier beachfront luxury, exceptional service, and one of the most prestigious stays in Southwest Florida.`,
        "checkInCheckOut": {
            "Check-In Time": "4:00 PM",
            "Check-Out Time": "11:00 AM"
        },
        "image": "ritz_naples.jpg",
        "imageAlt": "Luxury pool steps from Vanderbilt Beach at The Ritz-Carlton, Naples",
        "imageTitle": "The Ritz-Carlton, Naples Beachfront Pool Deck",
        "imageDescription": "Luxury pool steps from Vanderbilt Beach at The Ritz-Carlton, Naples",
        "offersSpa": true,
        "offersBeachAccess": true,
        "phone": "(239) 598-3300",
        "bookingUrls": {
            "booking": "https://www.booking.com/hotel/us/ritz-carlton-naples.html?aid=356980&label=gog235jc-10CAso7AFCE3JpdHotY2FybHRvbi1uYXBsZXNIM1gDaI4CiAEBmAEzuAEXyAEM2AED6AEB-AEBiAIBqAIBuAKjwNjTBsACAdICJDQxZjllN2M3LTU0NTUtNDRhZi04Y2U3LWYxOTQyMzczMzg1ZdgCAeACAQ&sid=15b3ca973786aedfe8940e60f0b48b87&dest_id=20023293&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1786126376&srpvid=e982801223ef00d1&type=total&ucfs=1&",
            "hotels": "https://www.hotels.com",
            "expedia": "https://www.expedia.com",
            "agoda": "https://www.agoda.com",
            "website": "https://www.ritzcarlton.com/en/hotels/naples/naples-tiburon/"
        },
        "mapsUrl": "https://maps.google.com/?q=The+Ritz-Carlton+Naples+280+Vanderbilt+Beach+Rd+Naples+FL+34108",
        "nearbyDining": [
            {
                "name": "Bistro 821",
                "id": "bistro-821",
                "description": "An established, upscale bistro on Naples' famous 5th Avenue South, serving a delicious fusion of Mediterranean-influenced pastas, fresh seafood, and premium steaks in an elegant, vibrant setting."
            },
            {
                "name": "Caffe Milano",
                "id": "caffe-milano",
                "description": "A modern Italian restaurant on 5th Avenue South in Naples, serving rustic yet refined pizzas, fresh handmade pastas, and classic seafood entrees in an open-air, stylish space."
            },
            {
                "name": "Mister O1 Extraordinary Pizza",
                "id": "mister-o1",
                "description": "An extraordinary pizzeria famous for its iconic star-shaped pizzas with creamy ricotta stuffed inside the folded points. Originating in Miami Beach and expanding to Pembroke Pines, it serves crisp, thin crusts in a chic modern setting."
            }
        ],
        "thingsToDo": [
            {
                "name": "Sunset at Vanderbilt Beach",
                "description": "Step right out onto the resort's white sand beach to experience Southwest Florida's famous crimson sunsets."
            },
            {
                "name": "Artis-Naples",
                "description": "Catch a world-class symphony concert, touring Broadway production, or museum exhibit at Naples' cultural center."
            },
            {
                "name": "Sunset and Glow Clear Kayak Tour in North Naples",
                "description": "Paddle through beautiful coastal waterways in a clear, illuminated kayak at sunset and after dark.",
                "bookingUrl": "https://www.viator.com/tours/Naples/Sunset-and-Glow-Clear-Kayak-Tour/d22381-277731P2?pid=P00314010&mcid=42383&medium=link",
                "bookingButtonText": "North Naples Sunset and Glow Clear Kayak Tour 2026 - BOOK NOW"
            }
        ]
    },
    {
        "id": "courtyard-by-marriott",
        "name": "Courtyard by Marriott Oceanside Fort Lauderdale Beach",
        "location": "Fort Lauderdale",
        "address": "440 Seabreeze Blvd, Fort Lauderdale, FL 33316",
        "priceRange": "$$",
        "priceLevel": 2,
        "stars": 3.5,
        "tripadvisorScore": 4,
        "tags": [
            "Beachfront",
            "Family-friendly",
            "Rooftop Pool"
        ],
        "perk": "Excellent location across from Las Olas Beach, with a great outdoor pool deck overlooking the ocean.",
        "description": "An affordable, modern beachfront hotel in Fort Lauderdale, offering clean rooms, a swimming pool, and direct beach access.",
        "longDescription": `Courtyard by Marriott Oceanside Fort Lauderdale Beach offers high‑value beachfront lodging in one of Broward County’s most walkable coastal districts. Located on Seabreeze Boulevard, the hotel places guests directly across from Fort Lauderdale Beach and within a short stroll of Las Olas Boulevard’s dining, shopping, and nightlife. Its elevated pool deck overlooks the Atlantic, providing a scenic place to relax without resort‑level pricing.

Rooms are clean, modern, and designed with functional comfort in mind, making the hotel a great fit for families, couples, and budget‑conscious travelers. Guests can enjoy an on‑site café, quick beach access, and a location that makes exploring Fort Lauderdale effortless.

Why We Recommend It: This hotel is ideal for travelers seeking an affordable, convenient beachfront stay with modern amenities and excellent walkability.`,
        "checkInCheckOut": {
            "Check-In Time": "4:00 PM",
            "Check-Out Time": "11:00 AM"
        },
        "image": "photo_coming_soon.jpg",
        "imageAlt": "Elevated oceanfront pool deck at Courtyard by Marriott Oceanside Fort Lauderdale Beach",
        "offersSpa": false,
        "offersBeachAccess": true,
        "phone": "(954) 524-8733",
        "bookingUrls": {
            "booking": "https://www.booking.com/hotel/us/courtyard-fort-lauderdale-beach.html?aid=356980&label=gog235jc-10CAso7AFCH2NvdXJ0eWFyZC1mb3J0LWxhdWRlcmRhbGUtYmVhY2hIM1gDaI4CiAEBmAEzuAEXyAEM2AED6AEB-AEBiAIBqAIBuALVwNjTBsACAdICJDJlOTdiYWZjLTVkNjctNDdlNS1hOGZmLTEyODRlNmVlMmU5N9gCAeACAQ&sid=15b3ca973786aedfe8940e60f0b48b87&dest_id=20022339&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1786126426&srpvid=af82802bd6760077&type=total&ucfs=1&",
            "hotels": "https://www.hotels.com",
            "expedia": "https://www.expedia.com",
            "agoda": "https://www.agoda.com",
            "website": "https://www.marriott.com/en-us/hotels/fllwc-courtyard-fort-lauderdale-weston/overview/"
        },
        "mapsUrl": "https://maps.google.com/?q=Courtyard+by+Marriott+Fort+Lauderdale+Beach+440+Seabreeze+Blvd+Fort+Lauderdale+FL+33316",
        "nearbyDining": [
            {
                "name": "Mister O1 Extraordinary Pizza",
                "id": "mister-o1",
                "description": "An extraordinary pizzeria famous for its iconic star-shaped pizzas with creamy ricotta stuffed inside the folded points. Originating in Miami Beach and expanding to Pembroke Pines, it serves crisp, thin crusts in a chic modern setting."
            },
            {
                "name": "Ethos Greek Bistro",
                "id": "ethos-greek-bistro",
                "description": "A trendy, light-filled bistro blending authentic Greek culinary traditions with a vibrant, modern atmosphere. Their outdoor patio features a lovely setting with plants, umbrellas, and fans to beat the heat, plus beautiful lights at night."
            },
            {
                "name": "Little Hen",
                "id": "little-hen-weston",
                "description": "An incredibly beautiful, flower-draped English-style breakfast and brunch boutique eatery. Serves creative egg dishes, fluffy pancakes, and luxury afternoon tea service."
            }
        ],
        "thingsToDo": [
            {
                "name": "Las Olas Boulevard Shopping",
                "description": "Take a pleasant stroll down Fort Lauderdale's signature fashion boulevard, packed with galleries, boutiques, and open cafes."
            },
            {
                "name": "Jungle Queen Riverboat Cruise",
                "description": "Board the famous historic riverboat nearby for a narrated sightseeing tour through Fort Lauderdale's waterways."
            },
            {
                "name": "#1 VENICE OF AMERICA TOUR - Cold A/C 115' LARGEST IN LAUDERDALE!",
                "description": "Experience the best of Fort Lauderdale's waterways on the largest cruise boat in the city.",
                "bookingUrl": "https://www.viator.com/tours/Fort-Lauderdale/Venice-of-America-Fort-Lauderdale-Cruise/d660-57834P1?pid=P00314010&mcid=42383&medium=link",
                "bookingButtonText": "#1 VENICE OF AMERICA TOUR - Cold A/C 115' LARGEST IN LAUDERDALE! 2026 - Fort Lauderdale - BOOK NOW"
            }
        ]
    },
    {
        "id": "ac-hotel-sunrise",
        "name": "AC Hotel Fort Lauderdale Sawgrass Mills/Sunrise",
        "location": "Sunrise",
        "address": "1870 Sawgrass Mills Circle, Sunrise, FL 33323",
        "priceRange": "$$",
        "priceLevel": 2,
        "stars": 4,
        "tripadvisorScore": 4.5,
        "tags": [
            "Boutique",
            "Rooftop Pool",
            "Family-friendly",
            "Pet-friendly"
        ],
        "perk": "Located steps from Sawgrass Mills Mall, featuring a stylish rooftop bar and European-inspired design.",
        "description": "A sleek, European-style boutique hotel next to Sawgrass Mills, offering a gorgeous rooftop lounge.",
        "longDescription": `AC Hotel Fort Lauderdale Sawgrass Mills/Sunrise brings modern European styling and a chic, minimalist vibe to Sunrise. Located directly beside the massive Sawgrass Mills outlet mall, the hotel is a perfect high‑value option for shoppers, business travelers, and visitors seeking a sleek alternative to beachfront resorts.

The property features the AC Lounge rooftop terrace, stylish guestrooms with contemporary design, and a European‑inspired breakfast offering fresh pastries, cured meats, and espresso. Its location provides quick access to the BB&T Center, corporate offices, and the region’s largest shopping destination.

Why We Recommend It: This hotel is ideal for travelers seeking a modern, affordable, design‑forward stay with unbeatable proximity to Sawgrass Mills.`,
        "checkInCheckOut": {
            "Check-In Time": "4:00 PM",
            "Check-Out Time": "11:00 AM"
        },
        "image": "ac_hotel_sunrise_1.jpg",
        "images": [
            "ac_hotel_sunrise_1.jpg",
            "ac_hotel_sunrise_2.jpg"
        ],
        "imageAlt": "Modern white exterior building and palm tree at AC Hotel Fort Lauderdale Sawgrass Mills/Sunrise",
        "imageTitle": "AC Hotel Fort Lauderdale Sawgrass Mills/Sunrise Facade",
        "imageDescription": "The sleek and contemporary exterior architecture of the AC Hotel next to Sawgrass Mills in Sunrise, Florida",
        "offersSpa": false,
        "offersBeachAccess": false,
        "phone": "(954) 846-0400",
        "bookingUrls": {
            "booking": "https://www.booking.com/hotel/us/ac-by-marriott-fort-lauderdale-sawgrass-mills-sunrise.html?aid=356980&label=gog235jc-10CAso7AFCNWFjLWJ5LW1hcnJpb3R0LWZvcnQtbGF1ZGVyZGFsZS1zYXdncmFzcy1taWxscy1zdW5yaXNlSDNYA2iOAogBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAagCAbgC8sDY0wbAAgHSAiQ3NGM4OWVlNy1kYzA4LTQxNDgtYjllOC03YmZkM2VhYTdkNTDYAgHgAgE&sid=15b3ca973786aedfe8940e60f0b48b87&dest_id=20024205&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1786126455&srpvid=47ef8039f517003c&type=total&ucfs=1&",
            "hotels": "https://www.hotels.com",
            "expedia": "https://www.expedia.com",
            "agoda": "https://www.agoda.com",
            "website": "https://www.marriott.com/en-us/hotels/fllas-ac-hotel-fort-lauderdale-sawgrass-mills-sunrise/overview/"
        },
        "mapsUrl": "https://maps.google.com/?q=AC+Hotel+Fort+Lauderdale+Sawgrass+Mills+Sunrise+1870+Sawgrass+Mills+Circle+Sunrise+FL+33323",
        "nearbyDining": [
            {
                "name": "Villagio",
                "id": "villagio-sunrise",
                "description": "A bustling, upscale Italian restaurant at the Colonnade Outlets at Sawgrass Mills, serving traditional wood-fired pizzas, hearty pasta dishes, and fresh seafood under patio awnings."
            },
            {
                "name": "Paul Bakery (Paul Maison de Qualite)",
                "id": "paul-bakery-sunrise",
                "description": "An authentic French bakery and cafe at Sawgrass Mills, offering freshly baked artisanal breads, puff pastries, tarts, and savory sandwiches with classic Parisian flair."
            },
            {
                "name": "Sushigami",
                "id": "sushigami-sunrise",
                "description": "An exciting, interactive conveyor belt sushi dining experience at Sawgrass Mills Mall, where fresh sushi plates glide right by your table for instant enjoyment."
            }
        ],
        "thingsToDo": [
            {
                "name": "Sawgrass Mills Mall",
                "description": "Walk right next door to shop at the largest outlet mall in the US, featuring over 350 designer outlets and retailers."
            },
            {
                "name": "Markham Park Trails & Nature",
                "description": "Drive minutes away to access massive county park grounds with mountain bike trails, kayaking, and camping."
            },
            {
                "name": "The Escape Game Sunrise: 60-Minute Adventures at Sawgrass Mills",
                "description": "Team up to find clues and solve puzzles in highly immersive escape rooms located right inside Sawgrass Mills.",
                "bookingUrl": "https://www.viator.com/tours/Fort-Lauderdale/The-Escape-Game-in-Sawgrass-Mills-60-Minute-Adventures/d660-454008P1?pid=P00314010&mcid=42383&medium=link",
                "bookingButtonText": "The Escape Game Sunrise: 60-Minute Adventures at Sawgrass Mills (with Reviews)"
            }
        ]
    },
    {
        "id": "intercontinental-miami",
        "name": "InterContinental Miami by IHG",
        "location": "Brickell",
        "address": "100 Chopin Plaza, Miami, FL 33131",
        "priceRange": "$$$",
        "priceLevel": 3,
        "stars": 4.5,
        "tripadvisorScore": 4.5,
        "tags": [
            "Luxury",
            "Family-friendly",
            "Pet-friendly",
            "Spa",
            "Rooftop Pool"
        ],
        "perk": "Stunning digital arts exterior canvas, massive rooftop pool overlooking Biscayne Bay, and premium bayside location.",
        "description": "A soaring luxury hotel in downtown Miami near Brickell, boasting bayside views and an expansive rooftop terrace.",
        "longDescription": `InterContinental Miami is a waterfront high‑rise landmark overlooking Biscayne Bay, known for its striking 19‑story digital canvas that lights up the Miami skyline. The hotel offers luxurious rooms, an extensive spa, and a vibrant rooftop pool deck with views of the cruise ship port. Its location near Bayfront Park and Brickell makes it ideal for exploring downtown Miami’s cultural attractions, restaurants, and nightlife.

Rooms are modern and spacious, with floor‑to‑ceiling windows that showcase the city or bay. The hotel’s dining options range from upscale Latin cuisine to casual bites, and the lobby’s art installations add a contemporary touch to the overall experience.

Why We Recommend It: InterContinental Miami is ideal for travelers seeking a stylish waterfront stay with easy access to downtown attractions and stunning skyline views.`,
        "checkInCheckOut": {
            "Check-In Time": "3:00 PM",
            "Check-Out Time": "12:00 PM"
        },
        "image": "photo_coming_soon.jpg",
        "imageAlt": "Iconic downtown bayside tower and rooftop deck at InterContinental Miami by IHG",
        "offersSpa": true,
        "offersBeachAccess": false,
        "phone": "(305) 577-1000",
        "bookingUrls": {
            "booking": "https://www.booking.com/hotel/us/inter-continental-miami.html?aid=356980&label=gog235jc-10CAso7AFCF2ludGVyLWNvbnRpbmVudGFsLW1pYW1pSDNYA2iOAogBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAagCAbgCi8HY0wbAAgHSAiRjMzU1ZDk5Ny00YmVmLTQ1ZWQtOGJiZS04YTlhZjkwZWM1ZmTYAgHgAgE&sid=15b3ca973786aedfe8940e60f0b48b87&dest_id=20023181&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1786126481&srpvid=80628046883f0066&type=total&ucfs=1&",
            "hotels": "https://www.hotels.com",
            "expedia": "https://www.expedia.com",
            "agoda": "https://www.agoda.com",
            "website": "https://www.icmiamihotel.com/"
        },
        "mapsUrl": "https://maps.google.com/?q=InterContinental+Miami+100+Chopin+Plaza+Miami+FL+33131",
        "nearbyDining": [
            {
                "name": "Cantina La Veinte",
                "id": "cantina-la-veinte",
                "description": "An ultra-chic, two-story Mexican cantina in Brickell overlooking the water, featuring a gorgeous dining room, high-end traditional Mexican specialties, and a lively bar scene."
            },
            {
                "name": "Tacology",
                "id": "tacology-brickell",
                "description": "A vibrant, stylish rooftop Mexican restaurant at Brickell City Centre. Delivers creative tacos, fresh ceviches, and premium margaritas in an upbeat, contemporary environment."
            },
            {
                "name": "Mister O1 Extraordinary Pizza",
                "id": "mister-o1",
                "description": "An extraordinary pizzeria famous for its iconic star-shaped pizzas with creamy ricotta stuffed inside the folded points. Originating in Miami Beach and expanding to Pembroke Pines, it serves crisp, thin crusts in a chic modern setting."
            }
        ],
        "thingsToDo": [
            {
                "name": "Bayside Marketplace & Cruises",
                "description": "Stroll next door to enjoy waterfront shopping, dining, and board a scenic catamaran tour of Biscayne Bay."
            },
            {
                "name": "Skyviews Miami Observation Wheel",
                "description": "Take a ride on the massive 176-foot Ferris wheel located on the marina for sweeping city skyline views."
            },
            {
                "name": "Miami City Tour: 5 Sites, 4 Stops, One Epic Experience",
                "description": "Discover Miami's top neighborhoods like Wynwood, Little Havana, and South Beach on a comprehensive guided city tour.",
                "bookingUrl": "https://gyg.me/itBU66Eq",
                "bookingButtonText": "Miami City Tour: 5 Sites, 4 Stops, One Epic Experience - 2026 (Verified Reviews)"
            }
        ]
    },
    {
        "id": "pelican-grand-beach-resort",
        "name": "Pelican Grand Beach Resort",
        "location": "Fort Lauderdale",
        "address": "2000 N Ocean Blvd, Fort Lauderdale, FL 33305",
        "priceRange": "$$",
        "priceLevel": 2,
        "stars": 4,
        "tripadvisorScore": 4.5,
        "tags": [
            "Beachfront",
            "Family-friendly",
            "Spa",
            "Pet-friendly",
            "Boutique",
            "Luxury"
        ],
        "perk": "Fort Lauderdale's only lazy river tubing pool and an oceanfront dining veranda.",
        "description": "A lovely oceanfront family resort in Fort Lauderdale, featuring a lazy river, spacious balconies, and a beachfront pool.",
        "longDescription": `Pelican Grand Beach Resort offers a nostalgic, classic beachfront experience on Fort Lauderdale’s northern shoreline. The resort stands out with the city’s only lazy river pool, a zero‑entry oceanfront swimming pool, and cozy rocking chairs lining its wide oceanfront veranda. The atmosphere is relaxed and timeless, evoking old‑Florida charm with modern comforts.

Guests enjoy spacious rooms with ocean views, direct beach access, and dining at Ocean2000, which offers spectacular Atlantic vistas. The resort is especially popular with families thanks to its kid‑friendly amenities and calm beachfront location.

Why We Recommend It: Pelican Grand is perfect for travelers seeking a charming, family‑friendly beachfront stay with unique amenities and classic coastal ambiance.`,
        "checkInCheckOut": {
            "Check-In Time": "4:00 PM",
            "Check-Out Time": "11:00 AM"
        },
        "image": "photo_coming_soon.jpg",
        "imageAlt": "Zero-entry pool and beachfront lazy river at Pelican Grand Beach Resort",
        "offersSpa": true,
        "offersBeachAccess": true,
        "phone": "(954) 568-9431",
        "bookingUrls": {
            "booking": "https://www.booking.com/hotel/us/pelican-grand-beach-resort.html?aid=356980&label=gog235jc-10CAso7AFCGnBlbGljYW4tZ3JhbmQtYmVhY2gtcmVzb3J0SDNYA2iOAogBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAagCAbgCh8PY0wbAAgHSAiQ1OGMwNGRlYS1kMDQzLTRkMTYtODIzZS02ODU0ODY1YjUzNzDYAgHgAgE&sid=15b3ca973786aedfe8940e60f0b48b87&dest_id=20022339&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1786126732&srpvid=2bf180c45fe801f6&type=total&ucfs=1&",
            "hotels": "https://www.hotels.com",
            "expedia": "https://www.expedia.com",
            "agoda": "https://www.agoda.com",
            "website": "https://www.pelicanbeach.com/"
        },
        "mapsUrl": "https://maps.google.com/?q=Pelican+Grand+Beach+Resort+2000+N+Ocean+Blvd+Fort+Lauderdale+FL+33305",
        "nearbyDining": [
            {
                "name": "Mister O1 Extraordinary Pizza",
                "id": "mister-o1",
                "description": "An extraordinary pizzeria famous for its iconic star-shaped pizzas with creamy ricotta stuffed inside the folded points. Originating in Miami Beach and expanding to Pembroke Pines, it serves crisp, thin crusts in a chic modern setting."
            },
            {
                "name": "Ethos Greek Bistro",
                "id": "ethos-greek-bistro",
                "description": "A trendy, light-filled bistro blending authentic Greek culinary traditions with a vibrant, modern atmosphere. Their outdoor patio features a lovely setting with plants, umbrellas, and fans to beat the heat, plus beautiful lights at night."
            },
            {
                "name": "Little Hen",
                "id": "little-hen-weston",
                "description": "An incredibly beautiful, flower-draped English-style breakfast and brunch boutique eatery. Serves creative egg dishes, fluffy pancakes, and luxury afternoon tea service."
            }
        ],
        "thingsToDo": [
            {
                "name": "Hugh Taylor Birch State Park",
                "description": "Cross the street to explore this coastal green space. Rent bikes, paddleboards, or enjoy a picnic along the Intracoastal Waterway."
            },
            {
                "name": "Bonnet House Museum & Gardens",
                "description": "Tour this historic 1920s artist estate and its beautifully preserved coastal hammock habitat."
            },
            {
                "name": "Fort Lauderdale: Millionaire's Row Cruise with Drinks",
                "description": "Glide past spectacular mansions and yachts along Millionaire's Row on a guided cruise with drinks included.",
                "bookingUrl": "https://www.getyourguide.com/fort-lauderdale-l1392/fort-lauderdale-millionaire-s-row-cruise-with-drinks-t624460/?ranking_uuid=0f5612d9-9500-4a21-88b6-56646c7ff814&q=Fort+Lauderdale&date_from=2026-09-14&date_to=2026-09-14",
                "bookingButtonText": "Fort Lauderdale: Millionaire's Row Cruise with Drinks - 2026 (Verified Reviews)"
            }
        ]
    },
    {
        "id": "ac-hotel-naples-5th-avenue",
        "name": "AC Hotel Naples 5th Avenue",
        "location": "Naples",
        "address": "485 5th Ave S, Naples, FL 34102",
        "priceRange": "$$",
        "priceLevel": 2,
        "stars": 4,
        "tripadvisorScore": 4.6,
        "tags": [
            "Boutique",
            "Rooftop Pool",
            "Family-friendly",
            "Pet-friendly"
        ],
        "perk": "Brand new boutique design, walking distance to Naples beach, and a stunning rooftop lounge (Limon).",
        "description": "A sleek, newly opened boutique hotel on Naples' famous Fifth Avenue South, boasting a rooftop kitchen.",
        "longDescription": `AC Hotel Naples 5th Avenue brings sleek European‑style boutique elegance to Naples’ historic downtown. The newly opened property features minimalist guestrooms with clean lines, modern finishes, and a calming aesthetic. Guests can enjoy Limon, the hotel’s gorgeous rooftop bar and kitchen offering Mediterranean‑inspired dishes and sunset views over the city.

The hotel also includes an outdoor courtyard pool, a stylish lobby lounge, and easy walkability to Naples’ best restaurants, galleries, and shops. Its location places guests just minutes from the beach and premier Gulf Coast attractions, making it a convenient and chic home base for exploring the city.

Why We Recommend It: AC Hotel Naples 5th Ave is perfect for travelers seeking a modern, design‑forward boutique stay in the heart of downtown Naples.`,
        "checkInCheckOut": {
            "Check-In Time": "4:00 PM",
            "Check-Out Time": "11:00 AM"
        },
        "image": "photo_coming_soon.jpg",
        "imageAlt": "Limon rooftop bar and outdoor courtyard pool at AC Hotel Naples 5th Avenue",
        "offersSpa": false,
        "offersBeachAccess": false,
        "phone": "(239) 316-4850",
        "bookingUrls": {
            "booking": "https://www.booking.com/hotel/us/ac-by-marriott-naples-5th-avenue.html?aid=356980&label=gog235jc-10CAso7AFCIGFjLWJ5LW1hcnJpb3R0LW5hcGxlcy01dGgtYXZlbnVlSDNYA2iOAogBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAagCAbgCm8PY0wbAAgHSAiRkMGE3ZDRkZi1iMWQ5LTQ4MzctOTAxZi0wOGNmZjNlMDBhYzfYAgHgAgE&sid=15b3ca973786aedfe8940e60f0b48b87&dest_id=20023293&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1786126752&srpvid=947b80cec857016a&type=total&ucfs=1&",
            "hotels": "https://www.hotels.com",
            "expedia": "https://www.expedia.com",
            "agoda": "https://www.agoda.com",
            "website": "https://www.marriott.com/en-us/hotels/apfac-ac-hotel-naples-5th-avenue/overview/"
        },
        "mapsUrl": "https://maps.google.com/?q=AC+Hotel+Naples+5th+Avenue+485+5th+Ave+S+Naples+FL+34102",
        "nearbyDining": [
            {
                "name": "Bistro 821",
                "id": "bistro-821",
                "description": "An established, upscale bistro on Naples' famous 5th Avenue South, serving a delicious fusion of Mediterranean-influenced pastas, fresh seafood, and premium steaks in an elegant, vibrant setting."
            },
            {
                "name": "Caffe Milano",
                "id": "caffe-milano",
                "description": "A modern Italian restaurant on 5th Avenue South in Naples, serving rustic yet refined pizzas, fresh handmade pastas, and classic seafood entrees in an open-air, stylish space."
            },
            {
                "name": "Mister O1 Extraordinary Pizza",
                "id": "mister-o1",
                "description": "An extraordinary pizzeria famous for its iconic star-shaped pizzas with creamy ricotta stuffed inside the folded points. Originating in Miami Beach and expanding to Pembroke Pines, it serves crisp, thin crusts in a chic modern setting."
            }
        ],
        "thingsToDo": [
            {
                "name": "Third Street South Dining & Shopping",
                "description": "Stroll through Naples' historic boutique street, hosting lovely flower-filled courtyards, cafes, and weekly farmers markets."
            },
            {
                "name": "Naples Depot Museum",
                "description": "Explore the rail and transport history of Southwest Florida within a beautifully restored 1927 train station."
            },
            {
                "name": "Guided Tour of Naples on a Vintage Trolley (Hop on - Hop off)",
                "description": "Explore Naples' historic districts, beaches, and shopping hubs on a fully narrated vintage trolley tour with 15 stops.",
                "bookingUrl": "https://www.viator.com/tours/Naples/Guided-Tour-of-Naples-on-a-Vintage-Trolley-Hop-on-Hop-off/d22381-445330P1?pid=P00314010&mcid=42383&medium=link",
                "bookingButtonText": "Naples Guided Hop On and Hop Off Tour on A Vintage Trolley 2026 - BOOK NOW"
            }
        ]
    },
    {
        "id": "aloft-miami-brickell",
        "name": "Aloft by Marriott Miami - Brickell",
        "location": "Brickell",
        "address": "1001 SW 2nd Ave, Miami, FL 33130",
        "priceRange": "$$",
        "priceLevel": 2,
        "stars": 3.5,
        "tripadvisorScore": 4,
        "tags": [
            "Pet-friendly",
            "Boutique",
            "Family-friendly"
        ],
        "perk": "Trendy high-tech aloft design, walk-up W XYZ bar, and convenient Metrorail access.",
        "description": "A high-energy, pet-friendly urban hotel in Brickell, offering loft-style rooms and budget-friendly city pricing.",
        "longDescription": `Aloft Miami Brickell offers a modern, budget‑friendly lifestyle stay in the heart of Miami’s Brickell neighborhood. The hotel features loft‑inspired ceilings, colorful contemporary décor, and tech‑forward amenities that appeal to younger travelers and business guests. The W XYZ bar provides a lively social atmosphere, while the outdoor splash pool offers a refreshing break from the city’s energy.

Its central location places guests steps from Brickell’s skyscrapers, fine dining, nightlife, and public transit options. Rooms are functional, stylish, and designed with a youthful, urban aesthetic.

Why We Recommend It: Aloft Miami Brickell is ideal for travelers seeking a fun, affordable, pet‑friendly hotel with modern amenities in a prime city location.`,
        "checkInCheckOut": {
            "Check-In Time": "3:00 PM",
            "Check-Out Time": "12:00 PM"
        },
        "image": "aloft_miami_brickell_1.jpg",
        "imageAlt": "Trendy lobby bar and pool at Aloft Miami Brickell",
        "offersSpa": false,
        "offersBeachAccess": false,
        "phone": "(305) 854-6300",
        "bookingUrls": {
            "booking": "https://www.booking.com/hotel/us/aloft-miami-brickell.html?aid=356980&label=gog235jc-10CAso7AFCFGFsb2Z0LW1pYW1pLWJyaWNrZWxsSDNYA2iOAogBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAagCAbgCs8PY0wbAAgHSAiRhMmNlNTAzZi05YTQzLTRmNTYtOWRmMy1jM2Y2ODVjNjVlNDnYAgHgAgE&sid=15b3ca973786aedfe8940e60f0b48b87&dest_id=20023181&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1786126776&srpvid=f08180da1655019c&type=total&ucfs=1&",
            "hotels": "https://www.hotels.com",
            "expedia": "https://www.expedia.com",
            "agoda": "https://www.agoda.com",
            "website": "https://www.marriott.com/en-us/hotels/miaal-aloft-miami-brickell/overview/"
        },
        "mapsUrl": "https://maps.google.com/?q=Aloft+Miami+Brickell+1001+SW+2nd+Ave+Miami+FL+33130",
        "nearbyDining": [
            {
                "name": "Tacology",
                "id": "tacology-brickell",
                "description": "A vibrant, stylish rooftop Mexican restaurant at Brickell City Centre. Delivers creative tacos, fresh ceviches, and premium margaritas in an upbeat, contemporary environment."
            },
            {
                "name": "Cantina La Veinte",
                "id": "cantina-la-veinte",
                "description": "An ultra-chic, two-story Mexican cantina in Brickell overlooking the water, featuring a gorgeous dining room, high-end traditional Mexican specialties, and a lively bar scene."
            },
            {
                "name": "Mister O1 Extraordinary Pizza",
                "id": "mister-o1",
                "description": "An extraordinary pizzeria famous for its iconic star-shaped pizzas with creamy ricotta stuffed inside the folded points. Originating in Miami Beach and expanding to Pembroke Pines, it serves crisp, thin crusts in a chic modern setting."
            }
        ],
        "thingsToDo": [
            {
                "name": "Brickell City Centre",
                "description": "Walk just a block to this spectacular open-air design destination featuring multi-level retail, dining, and entertainment spaces."
            },
            {
                "name": "Vizcaya Museum & Gardens",
                "description": "Take a short drive south to visit the majestic 1916 waterfront villa of James Deering, featuring Italianate gardens."
            },
            {
                "name": "The Escape Game at Brickell City Centre in Miami",
                "description": "Challenge yourself with immersive, premium 60-minute escape room adventures located in the heart of Brickell.",
                "bookingUrl": "https://www.viator.com/tours/Miami/The-Escape-Game-in-Miami-60-Minute-Adventures/d662-472529P1?pid=P00314010&mcid=42383&medium=link",
                "bookingButtonText": "Miami: Small-Group Escape Room Games at Brickell City Center 2026 - BOOK NOW"
            }
        ]
    },
    {
        "id": "the-betsy-hotel-south-beach",
        "name": "The Betsy Hotel",
        "location": "Miami Beach",
        "address": "1440 Ocean Dr, Miami Beach, FL 33139",
        "priceRange": "$$$",
        "priceLevel": 3,
        "stars": 4.5,
        "tripadvisorScore": 4.8,
        "tags": [
            "Boutique",
            "Historic",
            "Beachfront",
            "Rooftop Pool",
            "Pet-friendly",
            "Luxury",
            "Family-friendly",
            "Spa"
        ],
        "perk": "A quiet, literary-focused arts oasis with a stunning rooftop pool deck overlooking Ocean Drive.",
        "description": "A refined boutique gem on northern Ocean Drive, celebrating art, music, and literature, featuring a rooftop pool bridge.",
        "longDescription": `The Betsy Hotel South Beach is a distinguished historic boutique hotel located on the quieter northern end of Ocean Drive, offering a refined alternative to the typical party‑centric South Beach experience. Known as a champion of the arts, The Betsy features nightly live jazz, rotating art exhibitions, and poetry books in every room — creating a cultural atmosphere unlike any other hotel in Miami Beach.

Architecturally, the hotel is a standout. Its iconic glass‑walled orb bridge connects two historic buildings, while the rooftop pool offers panoramic 360‑degree views of the ocean and city. The breezy colonial‑style front porch provides a charming place to relax, dine, or enjoy a cocktail while watching the world go by. Rooms are elegant, pet‑friendly, and designed with timeless coastal sophistication.

Why We Recommend It: The Betsy is perfect for travelers seeking a quiet, artistic, boutique stay with elevated service and a sophisticated South Beach vibe.`,
        "checkInCheckOut": {
            "Check-In Time": "4:00 PM",
            "Check-Out Time": "11:00 AM"
        },
        "image": "the_betsy_1.jpg",
        "imageAlt": "Colonial facades and art-centered rooftop decks at The Betsy Hotel South Beach",
        "offersSpa": true,
        "offersBeachAccess": true,
        "phone": "(305) 531-6100",
        "bookingUrls": {
            "booking": "https://www.booking.com/hotel/us/the-betsy.html?aid=356980&label=gog235jc-10CAso7AFCCXRoZS1iZXRzeUgzWANojgKIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AsbD2NMGwAIB0gIkMjBjMzExMWYtOGZkOS00NmI2LWE0MzEtZTkxZGRhMzQzYzY12AIB4AIB&sid=15b3ca973786aedfe8940e60f0b48b87&dest_id=20023182&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1786126796&srpvid=c7cf80e3453b00ea&type=total&ucfs=1&",
            "hotels": "https://www.hotels.com",
            "expedia": "https://www.expedia.com",
            "agoda": "https://www.agoda.com",
            "website": "https://www.thebetsyhotel.com/"
        },
        "mapsUrl": "https://maps.google.com/?q=The+Betsy+South+Beach+1440+Ocean+Dr+Miami+Beach+FL+33139",
        "nearbyDining": [
            {
                "name": "Mister O1 Extraordinary Pizza",
                "id": "mister-o1",
                "description": "An extraordinary pizzeria famous for its iconic star-shaped pizzas with creamy ricotta stuffed inside the folded points. Originating in Miami Beach and expanding to Pembroke Pines, it serves crisp, thin crusts in a chic modern setting."
            },
            {
                "name": "Joe & The Juice",
                "id": "joe-and-the-juice-aventura",
                "description": "A trendy Danish juice bar and coffee shop located inside Aventura Mall, popular for its fresh-pressed custom juices, signature flatbread sandwiches, and energetic club-like soundtrack."
            }
        ],
        "thingsToDo": [
            {
                "name": "Art Deco Architectural Walking Tour",
                "description": "Explore South Beach's famous historic district with a walk among preserved 1930s neon-clad buildings."
            },
            {
                "name": "Lummus Park Oceanfront",
                "description": "Walk right outside to enjoy Lummus Park's grassy beachfront, public volleyball nets, and bike paths."
            },
            {
                "name": "Miami Beach: Parasailing Boat Tour in South Beach",
                "description": "Fly high over South Beach on a thrilling parasailing adventure, taking in sweeping views of the shoreline.",
                "bookingUrl": "https://gyg.me/BpbsaCSX",
                "bookingButtonText": "Miami Beach: Parasailing Boat Tour in South Beach - 2026 (Verified Reviews)"
            }
        ]
    },
    {
        "id": "the-breakers-palm-beach",
        "name": "The Breakers Palm Beach",
        "location": "Palm Beach",
        "address": "1 S County Rd, Palm Beach, FL 33480",
        "priceRange": "$$$$",
        "priceLevel": 4,
        "stars": 5,
        "tripadvisorScore": 4.7,
        "tags": [
            "Beachfront",
            "Luxury",
            "Historic",
            "Spa",
            "Family-friendly",
            "Pet-friendly"
        ],
        "perk": "A historic Italian Renaissance oceanfront palazzo with four pools and two golf courses.",
        "description": "An iconic Italian Renaissance beachfront landmark founded by Henry Flagler in 1896, representing the pinnacle of historic luxury.",
        "longDescription": `The Breakers Palm Beach is one of America’s most iconic luxury hotels, founded by railroad tycoon Henry Flagler in 1896. Modeled after the Villa Medici in Rome, the resort features dramatic hand‑painted ceilings, majestic arches, and meticulously landscaped formal gardens. Spanning 140 oceanfront acres, The Breakers offers four heated pools, 10 restaurants, a luxury spa, world‑class tennis facilities, and two championship golf courses.

The resort’s service is legendary, delivering old‑world high‑society luxury with modern comfort. Rooms and suites blend classic elegance with contemporary amenities, offering views of the ocean or the resort’s lush grounds. The Breakers’ beachfront location provides immediate access to Palm Beach’s pristine shoreline, while its dining options range from upscale seafood to casual oceanfront bites.

Why We Recommend It: The Breakers is ideal for travelers seeking timeless grandeur, impeccable service, and one of the most historic and luxurious stays in the United States.`,
        "checkInCheckOut": {
            "Check-In Time": "4:00 PM",
            "Check-Out Time": "12:00 PM"
        },
        "image": "photo_coming_soon.jpg",
        "imageAlt": "Majestic historic palazzo architecture at The Breakers Palm Beach",
        "offersSpa": true,
        "offersBeachAccess": true,
        "phone": "(561) 655-6611",
        "bookingUrls": {
            "booking": "https://www.booking.com/hotel/us/the-breakers-palm-beach.html?aid=356980&label=gog235jc-10CAso7AFCF3RoZS1icmVha2Vycy1wYWxtLWJlYWNoSDNYA2iOAogBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAagCAbgC58bY0wbAAgHSAiQ1MWVmNjg2NS05Mjc5LTQ2OTEtYThjZi1jNmZiOGQ5MGExY2HYAgHgAgE&sid=15b3ca973786aedfe8940e60f0b48b87&dest_id=20023524&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1786127211&srpvid=3ce381b43dbf0294&type=total&ucfs=1&",
            "hotels": "https://www.hotels.com",
            "expedia": "https://www.expedia.com",
            "agoda": "https://www.agoda.com",
            "website": "https://www.thebreakers.com/"
        },
        "mapsUrl": "https://maps.google.com/?q=The+Breakers+1+S+County+Rd+Palm+Beach+FL+33480",
        "nearbyDining": [
            {
                "name": "Cooper's Hawk Winery & Restaurant",
                "id": "coopers-hawk-pines",
                "description": "An upscale-casual American winery and restaurant at the Shops at Pembroke Gardens, offering modern dining, a full-service bar, and an interactive wine-tasting room."
            },
            {
                "name": "Tap 42 Craft Kitchen & Bar",
                "id": "tap42-aventura",
                "description": "A popular, high-energy gastropub located on the upper level of the upscale Aventura Mall, offering creative American dishes, craft beers, and weekend bottomless brunches."
            },
            {
                "name": "Mister O1 Extraordinary Pizza",
                "id": "mister-o1",
                "description": "An extraordinary pizzeria famous for its iconic star-shaped pizzas with creamy ricotta stuffed inside the folded points. Originating in Miami Beach and expanding to Pembroke Pines, it serves crisp, thin crusts in a chic modern setting."
            }
        ],
        "thingsToDo": [
            {
                "name": "Henry Morrison Flagler Museum",
                "description": "Tour Flagler's spectacular 73-room Gilded Age palace, Whitehall, built in 1902 and located just minutes away."
            },
            {
                "name": "Worth Avenue Shopping Vias",
                "description": "Explore the legendary, highly upscale avenue filled with elite fashion boutiques and beautiful Spanish-style courtyards."
            },
            {
                "name": "Sightseeing Hakuna Matata Catamaran Cruise in Palm Beach",
                "description": "Board the catamaran passenger ferry Hakuna Matata for a scenic sightseeing cruise around Palm Beach.",
                "bookingUrl": "https://www.viator.com/tours/West-Palm-Beach/Sightseeing-Catamaran-Cruise/d24204-218537P2?pid=P00314010&mcid=42383&medium=link",
                "bookingButtonText": "Palm Beach Catamaran Hakuna Matata Cruise 2026 - West Palm Beach - BOOK NOW"
            }
        ]
    },
    {
        "id": "st-regis",
        "name": "The St. Regis Bal Harbour Resort",
        "location": "Miami Beach",
        "address": "9703 Collins Ave, Bal Harbour, FL 33154",
        "priceRange": "$$$$",
        "priceLevel": 4,
        "stars": 5,
        "tripadvisorScore": 4.7,
        "tags": [
            "Beachfront",
            "Luxury",
            "Spa",
            "Family-friendly",
            "Pet-friendly"
        ],
        "perk": "Legendary St. Regis butler service, Champagne sabering rituals, and prime Bal Harbour shopping access.",
        "description": "An elite oceanfront resort in Bal Harbour, offering five-star dining, butler service, and multiple pools.",
        "longDescription": `The St. Regis Bal Harbour Resort is a premier beachfront sanctuary located in Miami’s exclusive Bal Harbour enclave. Known for its refined luxury and personalized service, the resort features oceanfront villas, two heated pools, and the opulent St. Regis Spa. Guests enjoy daily champagne sabering, signature butler services, and immediate access to the world‑famous Bal Harbour Shops.

Dining at Atlantikos offers elevated Greek coastal cuisine, while the resort’s beachfront location provides stunning views and a serene atmosphere away from South Beach’s crowds. Rooms and suites are spacious, elegant, and designed with modern coastal sophistication.

Why We Recommend It: St. Regis Bal Harbour is perfect for travelers seeking ultra‑luxury beachfront accommodations with world‑class service and a peaceful, upscale environment.`,
        "checkInCheckOut": {
            "Check-In Time": "4:00 PM",
            "Check-Out Time": "11:00 AM"
        },
        "image": "photo_coming_soon.jpg",
        "imageAlt": "Stunning pools and luxury towers at St Regis Bal Harbour",
        "offersSpa": true,
        "offersBeachAccess": true,
        "phone": "(305) 993-3300",
        "bookingUrls": {
            "booking": "https://www.booking.com/hotel/us/st-regis-bal-harbour-resort.html?aid=356980&label=gog235jc-10CAso7AFCG3N0LXJlZ2lzLWJhbC1oYXJib3VyLXJlc29ydEgzWANojgKIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AoPH2NMGwAIB0gIkZDMwYTY3OTEtYTUzOC00YzRiLTllODUtYzA1NTg2NzhmYWFl2AIB4AIB&sid=15b3ca973786aedfe8940e60f0b48b87&dest_id=20023182&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1786127240&srpvid=ce3f81c2b9ca0206&type=total&ucfs=1&",
            "hotels": "https://www.hotels.com",
            "expedia": "https://www.expedia.com",
            "agoda": "https://www.agoda.com",
            "website": "https://www.marriott.com/en-us/hotels/miabh-the-st-regis-bal-harbour-resort/overview/"
        },
        "mapsUrl": "https://maps.google.com/?q=The+St.+Regis+Bal+Harbour+Resort+9703+Collins+Ave+Bal+Harbour+FL+33154",
        "nearbyDining": [
            {
                "name": "Hillstone",
                "id": "hillstone-coral-gables",
                "description": "An exceptionally polished, upscale dining institution on Miracle Mile in Coral Gables, renowned for its impeccable service, sushi platters, and USDA Prime steaks."
            },
            {
                "name": "Mister O1 Extraordinary Pizza",
                "id": "mister-o1",
                "description": "An extraordinary pizzeria famous for its iconic star-shaped pizzas with creamy ricotta stuffed inside the folded points. Originating in Miami Beach and expanding to Pembroke Pines, it serves crisp, thin crusts in a chic modern setting."
            },
            {
                "name": "Joe & The Juice",
                "id": "joe-and-the-juice-aventura",
                "description": "A trendy Danish juice bar and coffee shop located inside Aventura Mall, popular for its fresh-pressed custom juices, signature flatbread sandwiches, and energetic club-like soundtrack."
            }
        ],
        "thingsToDo": [
            {
                "name": "Bal Harbour Shops",
                "description": "Walk right across the street to browse luxury designers in a famous open-air botanical garden setting."
            },
            {
                "name": "Haulover Inlet & Park",
                "description": "Fly kites on Haulover Beach or book a deep-sea fishing charter at the Haulover Park Marina, just north of the resort."
            },
            {
                "name": "Miami: Sandbar, Billionare's & Raccoon Island Private Tour",
                "description": "Embark on a private boat excursion to swim at the Haulover Sandbar, see Raccoon Island, and cruise past Indian Creek celebrity mansions.",
                "bookingUrl": "https://gyg.me/sIV7fnYj",
                "bookingButtonText": "Miami: Sandbar, Billionare's & Raccoon Island Private Tour - BOOK NOW"
            }
        ]
    },
    {
        "id": "1-hotel-south-beach",
        "name": "1 Hotel South Beach",
        "location": "Miami Beach",
        "address": "2377 Collins Ave, Miami Beach, FL 33139",
        "priceRange": "$$$$",
        "priceLevel": 4,
        "stars": 5,
        "tripadvisorScore": 4.6,
        "tags": [
            "Beachfront",
            "Luxury",
            "Spa",
            "Rooftop Pool",
            "Pet-friendly",
            "Family-friendly"
        ],
        "perk": "A spectacular adults-only rooftop infinity pool and reclaimed driftwood eco-design system.",
        "description": "An eco-luxury beachfront sanctuary featuring reclaimed wood interiors, 4 pools, and a breathtaking rooftop deck.",
        "longDescription": `1 Hotel South Beach is one of Miami’s most innovative luxury resorts, dedicated to sustainability, wellness, and eco‑conscious design. The property features reclaimed Florida wood, organic materials, and lush greenery throughout, creating a serene, nature‑inspired sanctuary along 600 feet of pristine beachfront. Its four swimming pools include an 18‑story adults‑only rooftop pool with breathtaking panoramic views of the Atlantic.

Wellness is at the heart of the resort, anchored by the Bamford Wellness Spa and a robust lineup of fitness classes, holistic treatments, and mindful programming. Rooms are spacious and calming, designed with natural textures and earth‑tone palettes. Dining options emphasize fresh, local ingredients and coastal flavors.

Why We Recommend It: 1 Hotel South Beach is perfect for travelers seeking a luxurious, eco‑friendly beachfront retreat with world‑class wellness amenities and stunning design.`,
        "checkInCheckOut": {
            "Check-In Time": "4:00 PM",
            "Check-Out Time": "11:00 AM"
        },
        "image": "one_hotel_south_beach_1.jpg",
        "imageAlt": "Sustainable eco-design pool and deck at 1 Hotel South Beach",
        "offersSpa": true,
        "offersBeachAccess": true,
        "phone": "(305) 604-1000",
        "bookingUrls": {
            "booking": "https://www.booking.com/hotel/us/1-south-beach.html?aid=356980&label=gog235jc-10CAso7AFCDTEtc291dGgtYmVhY2hIM1gDaI4CiAEBmAEzuAEXyAEM2AED6AEB-AEBiAIBqAIBuAKjx9jTBsACAdICJGM3YWY5Y2ZiLWY3YWMtNGNhNy1hNjQ3LTU3NWM3MDc1NDFkZNgCAeACAQ&sid=15b3ca973786aedfe8940e60f0b48b87&dest_id=20023182&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1786127272&srpvid=3f0281d2b17f0295&type=total&ucfs=1&",
            "hotels": "https://www.hotels.com",
            "expedia": "https://www.expedia.com",
            "agoda": "https://www.agoda.com",
            "website": "https://www.1hotels.com/south-beach"
        },
        "mapsUrl": "https://maps.google.com/?q=1+Hotel+South+Beach+2377+Collins+Ave+Miami+Beach+FL+33139",
        "nearbyDining": [
            {
                "name": "Mister O1 Extraordinary Pizza",
                "id": "mister-o1",
                "description": "An extraordinary pizzeria famous for its iconic star-shaped pizzas with creamy ricotta stuffed inside the folded points. Originating in Miami Beach and expanding to Pembroke Pines, it serves crisp, thin crusts in a chic modern setting."
            },
            {
                "name": "Joe & The Juice",
                "id": "joe-and-the-juice-aventura",
                "description": "A trendy Danish juice bar and coffee shop located inside Aventura Mall, popular for its fresh-pressed custom juices, signature flatbread sandwiches, and energetic club-like soundtrack."
            }
        ],
        "thingsToDo": [
            {
                "name": "South Pointe Park sunsets",
                "description": "Take a scenic walk down to the southern tip of the island to enjoy park vistas and see colossal cruise ships exit the harbor."
            },
            {
                "name": "Private Luxury Yacht | + 2 free Jet Skis | + Sea Pool",
                "description": "Experience the ultimate Miami lifestyle with a private luxury yacht charter, including jet skis and an inflatable sea pool.",
                "bookingUrl": "https://www.viator.com/tours/Miami/Private-Yacht-Charters-and-Boat-Rentals/d662-5606753P1?pid=P00314010&mcid=42383&medium=link",
                "bookingButtonText": "Miami Private Yacht Rental With Optional Jet Skis 2026 - BOOK NOW"
            },
            {
                "name": "Lincoln Road Pedestrian Mall",
                "description": "Walk a few blocks south to shop, dine, and people-watch along South Beach's famous mile-long open-air pedestrian promenade."
            }
        ]
    },
    {
        "id": "the-miami-beach-edition",
        "name": "The Miami Beach Edition",
        "location": "Miami Beach",
        "address": "2901 Collins Ave, Miami Beach, FL 33140",
        "priceRange": "$$$$",
        "priceLevel": 4,
        "stars": 5,
        "tripadvisorScore": 4.5,
        "tags": [
            "Beachfront",
            "Luxury",
            "Boutique",
            "Historic",
            "Family-friendly",
            "Pet-friendly",
            "Spa"
        ],
        "perk": "Basement nightclub with an indoor ice skating rink and dynamic neon bowling alley.",
        "description": "A trendy, ultra-luxury lifestyle resort by Ian Schrager, showcasing beachfront pools and Michelin-starred dining.",
        "longDescription": `The Miami Beach Edition is a luxury lifestyle resort that blends historic mid‑century Miami architecture with modern sophistication. Designed by Ian Schrager, the property features custom interiors, two oceanfront pools, direct beach access, and dining concepts curated by world‑renowned chef Jean‑Georges Vongerichten. The atmosphere is chic, contemporary, and infused with Miami’s signature glamour.

One of the resort’s most unique features is Basement, an entertainment hub that includes a nightclub, a neon‑lit bowling alley, and even an indoor ice‑skating rink — offering playful, unexpected experiences for guests. Rooms and suites are elegant and modern, with soft neutral tones and luxurious finishes.

Why We Recommend It: The Miami Beach Edition is ideal for travelers seeking a stylish, high‑energy beachfront resort with exceptional dining, unique entertainment, and sophisticated design.`,
        "checkInCheckOut": {
            "Check-In Time": "4:00 PM",
            "Check-Out Time": "11:00 AM"
        },
        "image": "the_miami_beach_edition_1.jpg",
        "imageAlt": "Beachfront pool and tropical lawns at The Miami Beach Edition",
        "offersSpa": true,
        "offersBeachAccess": true,
        "phone": "(305) 534-5555",
        "bookingUrls": {
            "booking": "https://www.booking.com/hotel/us/twoninezeroone-collinsave.html?aid=356980&label=gog235jc-10CAso7AFCGXR3b25pbmV6ZXJvb25lLWNvbGxpbnNhdmVIM1gDaI4CiAEBmAEzuAEXyAEM2AED6AEB-AEBiAIBqAIBuAK0x9jTBsACAdICJDViNDY2YjAzLTZlZmEtNDk1ZC1iNDg5LTE1N2Y2ZTBiMmI0YdgCAeACAQ&sid=15b3ca973786aedfe8940e60f0b48b87&dest_id=20023182&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1786127287&srpvid=1f8e81da3251029f&type=total&ucfs=1&",
            "hotels": "https://www.hotels.com",
            "expedia": "https://www.expedia.com",
            "agoda": "https://www.agoda.com",
            "website": "https://www.editionhotels.com/miami-beach/"
        },
        "mapsUrl": "https://maps.google.com/?q=The+Miami+Beach+EDITION+2901+Collins+Ave+Miami+Beach+FL+33140",
        "nearbyDining": [
            {
                "name": "Mister O1 Extraordinary Pizza",
                "id": "mister-o1",
                "description": "An extraordinary pizzeria famous for its iconic star-shaped pizzas with creamy ricotta stuffed inside the folded points. Originating in Miami Beach and expanding to Pembroke Pines, it serves crisp, thin crusts in a chic modern setting."
            },
            {
                "name": "Joe & The Juice",
                "id": "joe-and-the-juice-aventura",
                "description": "A trendy Danish juice bar and coffee shop located inside Aventura Mall, popular for its fresh-pressed custom juices, signature flatbread sandwiches, and energetic club-like soundtrack."
            }
        ],
        "thingsToDo": [
            {
                "name": "New World SoundScape Wallcasts",
                "description": "Attend an outdoor evening wallcast concert on the massive projection wall at SoundScape Park."
            },
            {
                "name": "Speedboat Sightseeing Adventure of Miami",
                "description": "Feel the thrill of a high-speed speedboat cruise past Star Island, South Beach, and Fisher Island.",
                "bookingUrl": "https://www.viator.com/tours/Miami/Speedboat-Sightseeing-Tour-in-Miami/d662-35834P1?pid=P00314010&mcid=42383&medium=link",
                "bookingButtonText": "Miami Speedboat Tour With Star Island, South Beach Views 2026 - BOOK NOW"
            },
            {
                "name": "Miami Beach Boardwalk",
                "description": "Walk right out to this beautiful oceanfront boardwalk spanning miles of scenic shoreline, perfect for morning jogs or sunset walks."
            }
        ]
    },
    {
        "id": "naples-four-seasons",
        "name": "Naples Beach Club, A Four Seasons Resort",
        "location": "Naples",
        "address": "851 Gulf Shore Blvd N, Naples, FL 34102",
        "priceRange": "$$$$",
        "priceLevel": 4,
        "stars": 5,
        "tripadvisorScore": 5,
        "tags": [
            "Beachfront",
            "Luxury",
            "Spa",
            "Family-friendly",
            "Pet-friendly"
        ],
        "perk": "Naples Beach Club's legendary grounds, redesigned golf course, and elite beach services.",
        "description": "The highly anticipated Four Seasons beachside sanctuary in Naples, offering golf, luxury cabanas, and Gulf views.",
        "longDescription": `Naples Four Seasons — located at the historic Naples Beach Club — is the city’s premier upcoming ultra‑luxury destination. The resort spans expansive beachside acreage and blends Naples’ relaxed coastal charm with Four Seasons’ world‑renowned five‑star standards. Guests can expect heated pools, custom cabanas, beachfront dining, and a beautifully designed golf course.

Although still emerging as Naples’ newest luxury icon, the property promises elevated service, modern coastal architecture, and a serene beachfront setting that will redefine high‑end hospitality in Southwest Florida.

Why We Recommend It: Naples Four Seasons is ideal for travelers seeking the newest ultra‑luxury beachfront experience in Naples, combining world‑class service with Gulf views.`,
        "checkInCheckOut": {
            "Check-In Time": "4:00 PM",
            "Check-Out Time": "12:00 PM"
        },
        "image": "photo_coming_soon.jpg",
        "imageAlt": "Priscilla pool and luxury cabanas at Naples Four Seasons",
        "offersSpa": true,
        "offersBeachAccess": true,
        "phone": "(239) 261-2222",
        "bookingUrls": {
            "booking": "https://www.booking.com/hotel/us/naples-beach-club-a-four-seasons-resort.html?aid=356980&label=gog235jc-10CAso7AFCJ25hcGxlcy1iZWFjaC1jbHViLWEtZm91ci1zZWFzb25zLXJlc29ydEgzWANojgKIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4AsnH2NMGwAIB0gIkYzI3YWEwZGYtZjU1ZC00Nzg3LThjOGYtY2M3M2NhM2Q4NzYw2AIB4AIB&sid=15b3ca973786aedfe8940e60f0b48b87&dest_id=20023293&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1786127310&srpvid=5aba81e56afe011f&type=total&ucfs=1&",
            "hotels": "https://www.hotels.com",
            "expedia": "https://www.expedia.com",
            "agoda": "https://www.agoda.com",
            "website": "https://www.fourseasons.com/naples/"
        },
        "mapsUrl": "https://maps.google.com/?q=Naples+Beach+Club+801+Gulf+Shore+Blvd+N+Naples+FL+34102",
        "nearbyDining": [
            {
                "name": "Bistro 821",
                "id": "bistro-821",
                "description": "An established, upscale bistro on Naples' famous 5th Avenue South, serving a delicious fusion of Mediterranean-influenced pastas, fresh seafood, and premium steaks in an elegant, vibrant setting."
            },
            {
                "name": "Caffe Milano",
                "id": "caffe-milano",
                "description": "A modern Italian restaurant on 5th Avenue South in Naples, serving rustic yet refined pizzas, fresh handmade pastas, and classic seafood entrees in an open-air, stylish space."
            },
            {
                "name": "Mister O1 Extraordinary Pizza",
                "id": "mister-o1",
                "description": "An extraordinary pizzeria famous for its iconic star-shaped pizzas with creamy ricotta stuffed inside the folded points. Originating in Miami Beach and expanding to Pembroke Pines, it serves crisp, thin crusts in a chic modern setting."
            }
        ],
        "thingsToDo": [
            {
                "name": "Conservancy of Southwest Florida",
                "description": "Tour the local nature center and take electric boat rides through coastal mangrove creeks."
            },
            {
                "name": "Fifth Avenue South",
                "description": "Stroll or drive down to Naples' premier downtown boulevard featuring premium shopping, visual arts, and chef-driven dining."
            },
            {
                "name": "Naples: Sunset Boat Cruise with Charcuterie and Wine",
                "description": "Set sail on a sunset cruise along Naples' coast, enjoying a selection of wine and premium charcuterie while looking for dolphins.",
                "bookingUrl": "https://gyg.me/3SOc33kR",
                "bookingButtonText": "Naples: Sunset Boat Cruise with Charcuterie and Wine - 2026 (Verified Reviews)"
            }
        ]
    },
    {
        "id": "the-ritz-naples",
        "name": "The Ritz-Carlton Naples, Tiburon",
        "location": "Naples",
        "address": "2600 Tiburon Dr, Naples, FL 34109",
        "priceRange": "$$$",
        "priceLevel": 3,
        "stars": 5,
        "tripadvisorScore": 4.6,
        "tags": [
            "Luxury",
            "Spa",
            "Family-friendly",
            "Pet-friendly"
        ],
        "perk": "The Reservoir water park with three slides and lazy river, and two championship Greg Norman golf courses.",
        "description": "A luxury golf resort featuring The Reservoir water park, Greg Norman golf courses, and award-winning dining.",
        "longDescription": `The Ritz‑Carlton Naples, Tiburón is a Mediterranean‑style luxury sanctuary surrounded by lush natural scenery and world‑class golf facilities. The resort features two championship 18‑hole golf courses designed by Greg Norman, a premier golf academy, and a full‑service spa offering restorative treatments. Its elegant architecture, warm earth tones, and manicured grounds create a peaceful, upscale environment.

Families especially love The Reservoir, the resort’s custom‑designed water park featuring a lazy river, splash pad, and three thrilling water slides. Guests can also enjoy multiple dining options, spacious rooms with modern coastal décor, and easy access to Naples’ beaches and attractions.

Why We Recommend It: Ritz‑Carlton Naples, Tiburón is perfect for families, golfers, and luxury travelers seeking a refined resort with exceptional recreational amenities and signature Ritz‑Carlton service.`,
        "checkInCheckOut": {
            "Check-In Time": "4:00 PM",
            "Check-Out Time": "11:00 AM"
        },
        "image": "ritz_naples_tiburon.jpg",
        "imageAlt": "Sleek waterpark and golf fairways at The Ritz-Carlton Naples, Tiburon",
        "imageTitle": "The Ritz-Carlton Naples, Tiburon Pool & Waterpark",
        "imageDescription": "Sleek waterpark and golf fairways at The Ritz-Carlton Naples, Tiburon",
        "offersSpa": true,
        "offersBeachAccess": false,
        "phone": "(239) 593-2000",
        "bookingUrls": {
            "booking": "https://www.booking.com/hotel/us/ritz-carlton-golf-resort-naples.html?aid=356980&label=gog235jc-10CAso7AFCH3JpdHotY2FybHRvbi1nb2xmLXJlc29ydC1uYXBsZXNIM1gDaI4CiAEBmAEzuAEXyAEM2AED6AEB-AEBiAIBqAIBuALex9jTBsACAdICJDdiOTVjNWU2LTkxMzQtNDFmMy1iZmVmLTZiMTFlMTY1ZjkyMNgCAeACAQ&sid=15b3ca973786aedfe8940e60f0b48b87&dest_id=20023293&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1786127331&srpvid=941b81ef87dc0082&type=total&ucfs=1&",
            "hotels": "https://www.hotels.com",
            "expedia": "https://www.expedia.com",
            "agoda": "https://www.agoda.com",
            "website": "https://www.ritzcarlton.com/en/hotels/naples/naples-beach/"
        },
        "mapsUrl": "https://maps.google.com/?q=The+Ritz-Carlton+Naples+Tiburon+2600+Tiburon+Dr+Naples+FL+34109",
        "nearbyDining": [
            {
                "name": "Bistro 821",
                "id": "bistro-821",
                "description": "An established, upscale bistro on Naples' famous 5th Avenue South, serving a delicious fusion of Mediterranean-influenced pastas, fresh seafood, and premium steaks in an elegant, vibrant setting."
            },
            {
                "name": "Caffe Milano",
                "id": "caffe-milano",
                "description": "A modern Italian restaurant on 5th Avenue South in Naples, serving rustic yet refined pizzas, fresh handmade pastas, and classic seafood entrees in an open-air, stylish space."
            },
            {
                "name": "Mister O1 Extraordinary Pizza",
                "id": "mister-o1",
                "description": "An extraordinary pizzeria famous for its iconic star-shaped pizzas with creamy ricotta stuffed inside the folded points. Originating in Miami Beach and expanding to Pembroke Pines, it serves crisp, thin crusts in a chic modern setting."
            }
        ],
        "thingsToDo": [
            {
                "name": "Tiburon Golf Championship Tee Time",
                "description": "Book a round on the championship Gold or Black courses, designed by Greg Norman."
            },
            {
                "name": "The Reservoir Waterpark",
                "description": "Experience the resort's exclusive luxury waterpark featuring a lazy river, waterslides, and dedicated family pools."
            },
            {
                "name": "Sunset and Glow Clear Kayak Tour in North Naples",
                "description": "Paddle through beautiful coastal waterways in a clear, illuminated kayak at sunset and after dark.",
                "bookingUrl": "https://www.viator.com/tours/Naples/Sunset-and-Glow-Clear-Kayak-Tour/d22381-277731P2?pid=P00314010&mcid=42383&medium=link",
                "bookingButtonText": "North Naples Sunset and Glow Clear Kayak Tour 2026 - BOOK NOW"
            }
        ]
    },
    {
        "id": "jw-marriott-turnberry",
        "name": "JW Marriott Miami Turnberry Resort & Spa",
        "location": "Aventura",
        "address": "19999 W Country Club Dr, Aventura, FL 33180",
        "priceRange": "$$$",
        "priceLevel": 3,
        "stars": 4.5,
        "tripadvisorScore": 4.5,
        "tags": [
            "Luxury",
            "Spa",
            "Family-friendly",
            "Pet-friendly"
        ],
        "perk": "Tidal Cove Waterpark, featuring a FlowRider surf simulator, seven waterslides, and a lazy river.",
        "description": "A spectacular luxury golf and wellness resort in Aventura, featuring a massive water park and championship golf.",
        "longDescription": `JW Marriott Miami Turnberry Resort & Spa is a tropical luxury haven in Aventura, known for its championship golf courses and the state‑of‑the‑art Tidal Cove Waterpark. The resort offers fun and relaxation for all ages, featuring a 36‑hole golf facility, a sprawling wellness spa, and award‑winning dining at Bourbon Steak by Michael Mina.

Rooms and suites are spacious and elegant, while the resort’s lush landscaping and lagoon‑style pools create a peaceful, upscale environment. Its location near Aventura Mall and major highways makes it convenient for both leisure and business travelers.

Why We Recommend It: JW Marriott Turnberry is perfect for families, couples, and golf enthusiasts seeking a luxury resort with exceptional amenities and one of Florida’s best waterparks.`,
        "checkInCheckOut": {
            "Check-In Time": "4:00 PM",
            "Check-Out Time": "11:00 AM"
        },
        "image": "photo_coming_soon.jpg",
        "imageAlt": "Thrilling waterslides and pools at Tidal Cove at JW Marriott Miami Turnberry Resort & Spa",
        "offersSpa": true,
        "offersBeachAccess": false,
        "phone": "(305) 932-6200",
        "bookingUrls": {
            "booking": "https://www.booking.com/hotel/us/fairmont-turnberry-isle.html?aid=356980&label=gog235jc-10CAso7AFCF2ZhaXJtb250LXR1cm5iZXJyeS1pc2xlSDNYA2iOAogBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAagCAbgC8MfY0wbAAgHSAiRmYjMwNmMzNS00M2MyLTRmMWYtYTU3Ny1iNWU4NzA5ZGJiYjDYAgHgAgE&sid=15b3ca973786aedfe8940e60f0b48b87&dest_id=20021407&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1786127347&srpvid=773d81f8768d0162&type=total&ucfs=1&",
            "hotels": "https://www.hotels.com",
            "expedia": "https://www.expedia.com",
            "agoda": "https://www.agoda.com",
            "website": "https://www.marriott.com/en-us/hotels/miajt-jw-marriott-miami-turnberry-resort-and-spa/overview/"
        },
        "mapsUrl": "https://maps.google.com/?q=JW+Marriott+Miami+Turnberry+19999+W+Country+Club+Dr+Aventura+FL+33180",
        "nearbyDining": [
            {
                "name": "Tap 42 Craft Kitchen & Bar",
                "id": "tap42-aventura",
                "description": "A popular, high-energy gastropub located on the upper level of the upscale Aventura Mall, offering creative American dishes, craft beers, and weekend bottomless brunches."
            },
            {
                "name": "Il Pastaio di Eataly",
                "id": "il-pastaio-di-eataly",
                "description": "A premium house-made fresh pasta kitchen by Eataly inside Aventura Mall, offering guests a front-row seat to watch chefs handcraft and cook authentic Italian pasta recipes."
            },
            {
                "name": "Mister O1 Extraordinary Pizza",
                "id": "mister-o1",
                "description": "An extraordinary pizzeria famous for its iconic star-shaped pizzas with creamy ricotta stuffed inside the folded points. Originating in Miami Beach and expanding to Pembroke Pines, it serves crisp, thin crusts in a chic modern setting."
            }
        ],
        "thingsToDo": [
            {
                "name": "Aventura Mall Slide Tower",
                "description": "Shop at South Florida's premier shopping complex, housing the 93-foot landmark Aventura Slide Tower and extensive dining venues."
            },
            {
                "name": "Don Soffer Fitness Trail",
                "description": "Take a scenic jog or power-walk along the 3.2-mile paved exercise trail surrounding the resort's golf fairways."
            },
            {
                "name": "Sunset or Night time helicopter tour in Miami",
                "description": "Experience a private sunset or nighttime helicopter tour over Miami's iconic skyline and coastline.",
                "bookingUrl": "https://www.viator.com/tours/Fort-Lauderdale/Private-Sunset-Night-time-helicopter-tour-in-Miami/d660-466236P2?pid=P00314010&mcid=42383&medium=link",
                "bookingButtonText": "Sunset or Night time helicopter tour in Miami 2026 - Fort Lauderdale - BOOK NOW"
            }
        ]
    },
    {
        "id": "jw-marriott-marco-island",
        "name": "JW Marriott Marco Island Beach Resort",
        "location": "Marco Island",
        "address": "400 S Collier Blvd, Marco Island, FL 34145",
        "priceRange": "$$$$",
        "priceLevel": 4,
        "stars": 4.5,
        "tripadvisorScore": 4.5,
        "tags": [
            "Beachfront",
            "Luxury",
            "Spa",
            "Family-friendly",
            "Rooftop Pool"
        ],
        "perk": "Private white-sand beach, adults-only Paradise by Sirene tower, and Balinese-inspired luxury spa.",
        "description": "A world-class Balinese-inspired beachfront resort on Marco Island, offering multiple pools, golf, and a luxury spa.",
        "longDescription": `JW Marriott Marco Island Beach Resort blends Balinese‑inspired luxury with the natural beauty of Marco Island’s white‑sand beaches, creating one of the most distinctive Gulf Coast escapes. The resort features three sparkling pools, two championship golf courses, a full‑service spa, and a wide range of beachfront dining options set beneath swaying palm trees. Its design incorporates warm wood tones, tropical accents, and open‑air spaces that evoke a serene island atmosphere.

One of the resort’s most exclusive offerings is Paradise by Sirene, an adults‑only tower with private check‑in, elevated amenities, and access to a secluded pool area. Guests can enjoy sea excursions, sunset cruises, and easy access to Marco Island’s calm Gulf waters. Rooms and suites are modern, spacious, and designed with coastal elegance, many offering panoramic ocean views.

Why We Recommend It: JW Marriott Marco Island is ideal for travelers seeking a luxurious beachfront resort with a tropical, Balinese‑inspired vibe and exceptional amenities for both adults and families.`,
        "checkInCheckOut": {
            "Check-In Time": "4:00 PM",
            "Check-Out Time": "11:00 AM"
        },
        "image": "photo_coming_soon.jpg",
        "imageAlt": "Balinese tropical pool and sandy beach at JW Marriott Marco Island Beach Resort",
        "offersSpa": true,
        "offersBeachAccess": true,
        "phone": "(239) 394-2511",
        "bookingUrls": {
            "booking": "https://www.booking.com/hotel/us/marco-island-marriott-beach-resort-golf-club.html?aid=356980&label=gog235jc-10CAso7AFCLG1hcmNvLWlzbGFuZC1tYXJyaW90dC1iZWFjaC1yZXNvcnQtZ29sZi1jbHViSDNYA2iOAogBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAagCAbgCgMjY0wbAAgHSAiRkYmZlODhmOS00MzExLTQyMmItODhkNi0wMmQ0MzAyMGY4NGPYAgHgAgE&sid=15b3ca973786aedfe8940e60f0b48b87&dest_id=900040416&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1786127365&srpvid=c65082006a330229&type=total&ucfs=1&",
            "hotels": "https://www.hotels.com",
            "expedia": "https://www.expedia.com",
            "agoda": "https://www.agoda.com",
            "website": "https://www.marriott.com/en-us/hotels/mrkfl-jw-marriott-marco-island-beach-resort/overview/"
        },
        "mapsUrl": "https://maps.google.com/?q=JW+Marriott+Marco+Island+400+S+Collier+Blvd+Marco+Island+FL+34145",
        "nearbyDining": [
            {
                "name": "Bistro 821",
                "id": "bistro-821",
                "description": "An established, upscale bistro on Naples' famous 5th Avenue South, serving a delicious fusion of Mediterranean-influenced pastas, fresh seafood, and premium steaks in an elegant, vibrant setting."
            },
            {
                "name": "Caffe Milano",
                "id": "caffe-milano",
                "description": "A modern Italian restaurant on 5th Avenue South in Naples, serving rustic yet refined pizzas, fresh handmade pastas, and classic seafood entrees in an open-air, stylish space."
            },
            {
                "name": "Mister O1 Extraordinary Pizza",
                "id": "mister-o1",
                "description": "An extraordinary pizzeria famous for its iconic star-shaped pizzas with creamy ricotta stuffed inside the folded points. Originating in Miami Beach and expanding to Pembroke Pines, it serves crisp, thin crusts in a chic modern setting."
            }
        ],
        "thingsToDo": [
            {
                "name": "Tigertail Beach Exploration",
                "description": "Visit Tigertail Beach for superb shelling, kayak rentals, tidal lagoon birdwatching, and pristine tidal sandspits."
            },
            {
                "name": "Key West Express Catamaran",
                "description": "Board the high-speed catamaran passenger ferry at the marina for a memorable day trip out across the Gulf to Key West."
            },
            {
                "name": "Easy Ride Pedal Kayak Tour Marco Island & Naples (Pedal or Paddle)",
                "description": "Explore the beautiful mangrove tunnels and spot local wildlife on a guided pedal or paddle kayak tour.",
                "bookingUrl": "https://www.viator.com/tours/Naples/Mangrove-Eco-Tour-Half-Day/d22381-263397P1?pid=P00314010&mcid=42383&medium=link",
                "bookingButtonText": "Florida Mangroves Paddleboard or Kayak Tour From Naples 2026 - BOOK NOW"
            }
        ]
    }
];

// Reorder HOTEL_DATA array to match the requested order on the main page
const HOTEL_ORDER = [
    "naples-grand",
    "disneys-vero-beach",
    "inn-on-fifth",
    "jw-marriott-brickell",
    "biltmore",
    "fontainebleau-miami",
    "costa-de-este",
    "la-playa-beach-resort",
    "intercontinental-miami",
    "pelican-grand-beach-resort",
    "four-seasons-brickell",
    "the-betsy-hotel-south-beach",
    "ritz-naples",
    "ac-hotel-naples-5th-avenue",
    "the-breakers-palm-beach",
    "ac-hotel-sunrise",
    "st-regis",
    "aloft-miami-brickell",
    "naples-four-seasons",
    "jw-marriott-turnberry",
    "jw-marriott-marco-island",
    "the-ritz-naples",
    "courtyard-by-marriott",
    "1-hotel-south-beach",
    "the-miami-beach-edition"
];
HOTEL_DATA.sort((a, b) => HOTEL_ORDER.indexOf(a.id) - HOTEL_ORDER.indexOf(b.id));

const BEST_OF_CATEGORIES = [
    {
        id: "best-beachfront-resorts",
        name: "Best Beachfront Resorts In South Florida",
        tag: "beachfront",
        description: "Direct beach access, pristine coastal views, and dedicated beachfront guest services. Experience true oceanfront living.",
        icon: "🌊",
        introParagraphs: [
            "There's nothing quite like walking out of your hotel lobby directly onto the warm sands of South Florida. A true beachfront stay provides instant escape, soothing ocean sounds, and quick access to coastal swimming. However, many beach resorts claim beachfront status when they are actually across a busy street or block views with parking garages. We believe beachfront should mean direct sand access and ocean sights right from the resort lawns.",
            "To select these top beachfront resorts, we evaluated them on pool-to-beach transitions, beach chair inclusions, and the quality of coastal dining. From the Balinese-inspired beachfront at JW Marriott Marco Island to the classic oceanfront veranda at Pelican Grand Beach Resort, these spots deliver unmatched Atlantic and Gulf coast luxury.",
            "These resorts are ideal for travelers seeking direct sand access, ocean views, and elevated coastal amenities. Whether you're planning a romantic escape or a family beach vacation, these properties offer the best of South Florida’s shoreline. For nearby dining recommendations during your stay, explore <a href=\"https://www.soflobites.com/\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: var(--accent-primary); text-decoration: none; font-weight: 600;\">SoFlo Bites</a>, our curated guide to South Florida’s best local restaurants."
        ],
        experiences: [
            {
                title: "Miami Beach: Parasailing Boat Tour in South Beach",
                location: "Miami Beach",
                description: "Fly high over South Beach on a thrilling parasailing adventure.",
                link: "https://gyg.me/BpbsaCSX"
            },
            {
                title: "Jet ski Tour in Miami with Boat Ride",
                location: "Miami",
                description: "Experience a high-speed jet ski tour of Miami's waterways combined with a scenic boat ride.",
                link: "https://www.viator.com/tours/Miami/Speed-and-Sun-Ultimate-Jetski-in-Miami/d662-118441P7?pid=P00314010&mcid=42383&medium=link"
            },
            {
                title: "Dolphin and Shelling Cruise for up to 12 people",
                location: "Naples",
                description: "Search for dolphins and collect pristine shells in the Ten Thousand Islands.",
                link: "https://www.viator.com/tours/Naples/Ten-Thousand-Islands-Adventure-Boat-Tour/d22381-64741P1?pid=P00314010&mcid=42383&medium=link"
            },
            {
                title: "Marco Island Wildlife Sightseeing and Shelling Tour",
                location: "Marco Island",
                description: "Cruise through the mangrove forests of Marco Island to see wildlife and historic dome homes.",
                link: "https://www.viator.com/tours/Naples/Cape-Romano-Shelling-and-Sightseeing-Tour/d22381-30481P3?pid=P00314010&mcid=42383&medium=link"
            },
            {
                title: "Key West Schooner Sunset Sail with Bar & Hors d'oeuvres",
                location: "Key West",
                description: "Sail aboard a stunning classic schooner to experience Key West's world-famous sunset.",
                link: "https://www.viator.com/tours/Key-West/Key-West-Sunset-Sail-Aboard-Schooner-America-20/d661-5395SUNSET?pid=P00314010&mcid=42383&medium=link"
            }
        ]
    },
    {
        id: "best-boutique-escapes",
        name: "Best Boutique Escapes In South Florida",
        tag: "boutique",
        description: "Intimate settings, curated character, historic architecture, and unique hospitality. Escape typical corporate towers.",
        icon: "🔑",
        introParagraphs: [
            "While large high-rise resorts offer abundant amenities, they can sometimes feel impersonal and crowded. Boutique stays offer curated character, historic details, and intimate, personal service. They celebrate local culture, art, and architecture, offering a deeper connection to the neighborhood.",
            "Our favorite boutique hotels in South Florida represent historic preservation at its best. From the literary arts salon at The Betsy South Beach to the sleek Art Deco coastal design at Costa d’Este Beach Resort & Spa, these gems prioritize guest comfort, unique vibes, and classic Floridian character.",
            "These boutique escapes are perfect for travelers who appreciate thoughtful design, artistic environments, and personalized hospitality. Whether you're seeking a quiet retreat or a culturally rich stay, these hotels deliver memorable experiences. For curated dining options near each boutique property, explore <a href=\"https://www.soflobites.com/\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: var(--accent-primary); text-decoration: none; font-weight: 600;\">SoFlo Bites</a>, our sister site dedicated to South Florida’s best local restaurants."
        ],
        experiences: [
            {
                title: "Miami: Wynwood Walls Street Art and Food Walking Tour",
                location: "Miami",
                description: "Explore the vibrant murals of Wynwood and sample diverse culinary favorites on a guided walking tour.",
                link: "https://gyg.me/SQm4zcAP"
            },
            {
                title: "Little Havana Food and Walking Tour in Miami",
                location: "Miami",
                description: "Discover authentic Cuban cuisine, history, and culture in Miami's historic heart.",
                link: "https://www.viator.com/tours/Miami/Little-Havana-Food-and-Walking-Tour-in-Miami/d662-5304HAVANA?pid=P00314010&mcid=42383&medium=link"
            },
            {
                title: "Award-winning Art Deco & History Walking Tour in Miami Beach",
                location: "Miami Beach",
                description: "Tour the world-famous Art Deco Historic District and learn the history of Versace Mansion.",
                link: "https://www.viator.com/tours/Miami/Historic-Miami-Beach-and-Versace-Murder-Tour/d662-250325P1?pid=P00314010&mcid=42383&medium=link"
            },
            {
                title: "4 Hour Private Ecotour and Snorkeling Boat Tour",
                location: "Islamorada",
                description: "Charter a private boat for an eco-tour and snorkeling adventure around the Florida Keys.",
                link: "https://www.viator.com/tours/Islamorada/Private-4-hour-Ecotour-and-Snorkeling-Boat-Tour/d23474-118084P3?pid=P00314010&mcid=42383&medium=link"
            },
            {
                title: "Manatees and Mangrove Tunnels Small Group Kayak Tour",
                location: "Naples",
                description: "Paddle through quiet mangrove forest tunnels and watch for wild Florida manatees.",
                link: "https://www.viator.com/tours/Naples/Mangrove-Tunnels-and-Manatees-Tour/d22381-54503P1?pid=P00314010&mcid=42383&medium=link"
            }
        ]
    },
    {
        id: "best-luxury-resorts",
        name: "Best Luxury & Wellness Resorts In South Florida",
        tag: "luxury",
        description: "Award-winning spa facilities, five-star guest services, premier dining, and absolute pampering. Indulge in premium relaxation.",
        icon: "✨",
        introParagraphs: [
            "Sometimes, a getaway calls for absolute indulgence. A true luxury stay goes beyond high-end sheets; it's about anticipation of needs, historic grandeur, and elite wellness spas. Whether you want to play championship golf courses or spend your afternoon inside a thermal therapeutic suite, these properties represent the pinnacle of South Florida luxury.",
            "We reviewed properties based on design quality, guest-to-staff ratios, on-site dining standards, and spa facility depth. Legacy properties like The Breakers Palm Beach and five-star sanctuaries like The Ritz-Carlton Naples, Tiburón represent the absolute best of coastal luxury.",
            "These resorts are ideal for travelers seeking restorative spa days, elevated dining, and refined coastal living. Whether you’re planning a romantic escape or a wellness-focused retreat, these properties offer unmatched comfort and sophistication. For nearby dining recommendations, visit <a href=\"https://www.soflobites.com/\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: var(--accent-primary); text-decoration: none; font-weight: 600;\">SoFlo Bites</a> to explore curated restaurant guides across South Florida."
        ],
        experiences: [
            {
                title: "Private Miami Boat Charter: Sightseeing, Sunset & Sandbar",
                location: "Miami",
                description: "Enjoy a romantic private yacht tour with sunset views and sandbar stops.",
                link: "https://www.viator.com/tours/Miami/Private-Tour-Miami-Boat-Rental/d662-328105P2?pid=P00314010&mcid=42383&medium=link"
            },
            {
                title: "Miami Beach: South Beach Private Airplane Tour with Drinks",
                location: "Miami Beach",
                description: "Soar over South Beach with champagne on an intimate scenic flight.",
                link: "https://gyg.me/kNNnLAxp"
            },
            {
                title: "Miami: Miami Private Helicopter Tour",
                location: "Miami",
                description: "Take a thrilling private helicopter flight over Miami's iconic skyline and coastline.",
                link: "https://gyg.me/70gNB2VH"
            },
            {
                title: "Sightseeing and Sunset Catamaran Sailing Excursion",
                location: "Naples",
                description: "A peaceful sailing cruise along the Naples coast to watch the sunset.",
                link: "https://www.viator.com/tours/Naples/Sunset-and-Sightseeing-Day-Sail/d22381-188339P2?pid=P00314010&mcid=42383&medium=link"
            },
            {
                title: "Key West Sunset Sail with Open Bar, Live Music and Hors D'oeuvres",
                location: "Key West",
                description: "Enjoy a luxury catamaran sunset sail with live music, tropical drinks, and appetizers.",
                link: "https://www.viator.com/tours/Key-West/Key-West-Sunset-Champagne-and-Appetizers-Cruise/d661-3800CAPSUNSAIL?pid=P00314010&mcid=42383&medium=link"
            }
        ]
    }
];

// 4. Application State Management
const STATE = {
    selectedLocations: [], // Empty means show all
    selectedPrice: "all",
    selectedTags: [],      // Filter by amenities
    searchQuery: "",
    savedScrollPosition: 0,
    shouldRestoreScroll: false
};

// 5. Utility functions
function normalizeTag(tag) {
    return tag.toLowerCase().trim();
}

function updateMeta(title, description) {
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute("content", description);
    }
}

// 6. Router & Navigation logic
function handleRoute() {
    const hash = window.location.hash;
    const homeView = document.getElementById("home-view");
    const detailView = document.getElementById("hotel-detail-view");
    const aboutView = document.getElementById("about-view");
    const privacyTermsView = document.getElementById("privacy-terms-view");
    const bestOfView = document.getElementById("best-of-view");
    const bestOfListDetailView = document.getElementById("best-of-list-detail-view");
    
    const bottomAdBanner = document.getElementById("bottom-ad-banner");
    
    // Save scroll position when moving away from home
    if (homeView && homeView.style.display !== "none" && hash !== "" && hash !== "#" && hash !== "#hotel-grid" && hash !== "#suggest-section") {
        STATE.savedScrollPosition = window.scrollY;
    }
    
    // Hide all views by default
    const views = [homeView, detailView, aboutView, privacyTermsView, bestOfView, bestOfListDetailView];
    views.forEach(v => { if (v) v.style.display = "none"; });
    if (bottomAdBanner) bottomAdBanner.style.display = "block";
    
    // Route matching
    if (hash === "#about") {
        if (aboutView) aboutView.style.display = "block";
        if (bottomAdBanner) bottomAdBanner.style.display = "none";
        highlightNav("#about");
        updateMeta("About Us | SoFlo Stays", "Learn about SoFlo Stays, our hotel curation process, review criteria, and our local travel writing team.");
        window.scrollTo(0, 0);
        return;
    }
    
    if (hash === "#privacy-terms") {
        if (privacyTermsView) privacyTermsView.style.display = "block";
        highlightNav("#privacy-terms");
        updateMeta("Privacy Policy & Terms | SoFlo Stays", "Read SoFlo Stays's privacy policy, cookie policy, Google AdSense regulations, and affiliate disclosure terms.");
        window.scrollTo(0, 0);
        return;
    }
    
    if (hash === "#best-of") {
        if (bestOfView) bestOfView.style.display = "block";
        highlightNav("#best-of");
        renderBestOfCategories();
        updateMeta("Curated Best Stays | SoFlo Stays", "Browse our hand-picked compilations of South Florida's best beachfront resorts, historic boutique stays, and luxury escapes.");
        window.scrollTo(0, 0);
        return;
    }
    
    if (hash.startsWith("#best-of/")) {
        const catId = hash.replace("#best-of/", "");
        const cat = BEST_OF_CATEGORIES.find(c => c.id === catId);
        if (cat) {
            if (bestOfListDetailView) {
                renderBestOfListDetailView(catId);
                bestOfListDetailView.style.display = "block";
            }
            highlightNav("#best-of");
            updateMeta(`${cat.name} | SoFlo Stays`, cat.description);
            window.scrollTo(0, 0);
            return;
        }
    }
    
    if (hash.startsWith("#hotel/")) {
        const id = hash.replace("#hotel/", "");
        const hotel = HOTEL_DATA.find(h => h.id === id);
        if (hotel) {
            if (detailView) {
                detailView.innerHTML = renderDetailedPageMarkup(hotel);
                detailView.style.display = "block";
            }
            // Trigger AdSense inside detail view if script loaded
            try { (adsbygoogle = window.adsbygoogle || []).push({}); } catch(e) {}
            highlightNav("#hotel-grid");
            updateMeta(`${hotel.name} - ${hotel.location} | SoFlo Stays`, hotel.description);
            window.scrollTo(0, 0);
            return;
        }
    }
    
    // Default Route: Home / Listing directory
    if (homeView) homeView.style.display = "block";
    
    if (hash === "" || hash === "#") {
        highlightNav("#");
    } else if (hash === "#hotel-grid") {
        highlightNav("#hotel-grid");
    } else if (hash === "#suggest-section") {
        highlightNav("#suggest-section");
    }
    
    updateMeta(
        "SoFlo Stays | Premium Hotel & Travel Guide to South Florida", 
        "Explore South Florida's finest hotels, beachfront resorts, and boutique hideaways. Filter by location, vibe, and pricing, with direct affiliate booking and nearby dining guides."
    );
    
    // Restore scroll position or scroll to elements
    if (STATE.shouldRestoreScroll) {
        window.scrollTo(0, STATE.savedScrollPosition);
        STATE.shouldRestoreScroll = false;
    } else {
        if (hash === "#hotel-grid") {
            const gridEl = document.getElementById("hotel-grid");
            if (gridEl) gridEl.scrollIntoView({ behavior: "smooth" });
        } else if (hash === "#suggest-section") {
            const suggestEl = document.getElementById("suggest-section");
            if (suggestEl) suggestEl.scrollIntoView({ behavior: "smooth" });
        } else if (hash === "" || hash === "#") {
            window.scrollTo(0, 0);
        }
    }
}

function highlightNav(currentId) {
    const links = document.querySelectorAll(".nav-link");
    links.forEach(li => {
        li.classList.remove("active");
        const a = li.querySelector("a");
        if (a) {
            const href = a.getAttribute("href");
            if (currentId === "#" && href === "#") {
                li.classList.add("active");
            } else if (currentId !== "#" && href === currentId) {
                li.classList.add("active");
            }
        }
    });
}

function goBackToDirectory(event) {
    if (event) event.preventDefault();
    STATE.shouldRestoreScroll = true;
    window.location.hash = "#hotel-grid";
}

// 7. Filtering & Rendering Logic
function filterAndRender() {
    const grid = document.getElementById("hotel-grid");
    if (!grid) return;
    
    const filtered = HOTEL_DATA.filter(hotel => {
        // Search check (name, location, description, tags, perk)
        const query = STATE.searchQuery.toLowerCase().trim();
        const matchesSearch = query === "" || 
            hotel.name.toLowerCase().includes(query) ||
            hotel.location.toLowerCase().includes(query) ||
            hotel.description.toLowerCase().includes(query) ||
            hotel.perk.toLowerCase().includes(query) ||
            hotel.tags.some(t => normalizeTag(t).includes(query));
            
        // Location check
        const matchesLoc = STATE.selectedLocations.length === 0 || 
            STATE.selectedLocations.includes(hotel.location.toLowerCase());
            
        // Price check
        const matchesPrice = STATE.selectedPrice === "all" || 
            hotel.priceRange === STATE.selectedPrice;
            
        // Amenities tags check (matches all selected tags - AND condition)
        const matchesTags = STATE.selectedTags.length === 0 || 
            STATE.selectedTags.every(t => 
                hotel.tags.some(ht => normalizeTag(ht) === normalizeTag(t))
            );
            
        return matchesSearch && matchesLoc && matchesPrice && matchesTags;
    });
    
    // Display matches count
    const statsNum = document.getElementById("stats-number");
    if (statsNum) statsNum.innerText = filtered.length;
    
    // Render active badges
    renderActiveFilterBadges();
    
    if (filtered.length === 0) {
        grid.style.display = "block"; // Full width for empty state
        grid.innerHTML = `
            <div class="empty-state" style="text-align: center; padding: 4rem 2rem; color: var(--text-secondary); background: white; border: 1px solid var(--border-color); border-radius: var(--border-radius-md);">
                <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
                <h3 style="font-family: var(--font-heading); font-size: 1.25rem; margin-bottom: 0.5rem; font-weight: 700;">No Stays Match Your Filters</h3>
                <p style="font-size: 0.9rem; color: var(--text-muted);">Try clearing some active filters or broadening your search queries.</p>
            </div>
        `;
        return;
    }
    
    grid.style.display = "grid";
    grid.innerHTML = "";
    
    filtered.forEach((hotel, idx) => {
        // Inject inline AdSense card at index 3 (4th item)
        if (idx === 3) {
            const adCard = document.createElement("div");
            adCard.className = "adsense-card";
            adCard.innerHTML = `
                <div class="adsense-placeholder-inner">
                    <h4 class="adsense-title">Google AdSense Partner</h4>
                    <p class="adsense-desc">Ad unit slot configured for responsive travel banners.</p>
                    <ins class="adsbygoogle"
                         style="display:block"
                         data-ad-client="${MONETIZATION_CONFIG.googleAdSensePublisherId}"
                         data-ad-slot="${MONETIZATION_CONFIG.googleAdSenseSlotId}"
                         data-ad-format="auto"
                         data-full-width-responsive="true"></ins>
                </div>
            `;
            grid.appendChild(adCard);
            // Push adsense code
            try { (adsbygoogle = window.adsbygoogle || []).push({}); } catch(e) {}
        }
        
        const card = document.createElement("article");
        card.className = "hotel-card";
        card.setAttribute("id", `hotel-${hotel.id}`);
        card.innerHTML = renderHotelCardMarkup(hotel);
        grid.appendChild(card);
    });
}

function renderHotelCardMarkup(hotel) {
    const tagsHtml = hotel.tags.map(t => `<span class="card-tag">${t}</span>`).join("");
    const hasSlider = hotel.images && hotel.images.length > 1;
    
    return `
        <div class="card-img-container">
            <img src="${hotel.image}" alt="${hotel.imageAlt || hotel.name}" class="card-img" id="card-img-${hotel.id}" loading="lazy">
            ${hasSlider ? `
                <button class="card-slider-arrow card-slider-left" onclick="event.stopPropagation(); changeCardImage('${hotel.id}', -1)" aria-label="Previous Image">&larr;</button>
                <button class="card-slider-arrow card-slider-right" onclick="event.stopPropagation(); changeCardImage('${hotel.id}', 1)" aria-label="Next Image">&rarr;</button>
                <div class="card-slider-dots">
                    ${hotel.images.map((_, idx) => `
                        <span class="card-slider-dot ${hotel.images.indexOf(hotel.image) === idx || (hotel.images.indexOf(hotel.image) === -1 && idx === 0) ? 'active' : ''}" id="dot-${hotel.id}-${idx}"></span>
                    `).join("")}
                </div>
            ` : ''}
            <span class="card-location-badge">${hotel.location}</span>
            <span class="card-price-badge" title="Price Category: ${hotel.priceRange}">${hotel.priceRange}</span>
        </div>
        <div class="card-body">
            <h3 class="card-title">${hotel.name}</h3>
            <div class="card-tags">${tagsHtml}</div>
            <p class="card-description">${hotel.description}</p>
            
            <div class="perk-box">
                <div class="perk-label">🌴 Special Perk</div>
                <div class="perk-text">${hotel.perk}</div>
            </div>
            
            <div class="card-actions">
                <button class="btn-secondary" onclick="openDetailsPage('${hotel.id}')" style="width: 100%;">
                    Details &amp; Perks
                </button>
                <button class="btn-primary" onclick="event.stopPropagation(); window.open('${hotel.bookingUrls.booking}', '_blank')" style="width: 100%;">
                    Book Stay
                </button>
            </div>
        </div>
    `;
}

function openDetailsPage(id) {
    window.location.hash = `#hotel/${id}`;
}

// 8. Detailed Hotel View Renderer
function renderDetailedPageMarkup(hotel) {
    // Dynamic hotel features checkboxes
    const featuresHtml = hotel.tags.map(t => `
        <span class="feature-indicator active">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            ${t}
        </span>
    `).join("");

    // Dynamic hours/Checkin details
    const checkinHtml = Object.entries(hotel.checkInCheckOut).map(([label, val]) => `
        <div class="detail-hours-day">${label}</div>
        <div class="detail-hours-time">${val}</div>
    `).join("");

    // Dynamic image slider / gallery markup
    let imageBoxHtml = "";
    if (hotel.images && hotel.images.length > 1) {
        // Set up global slider variables for the current view
        window.sliderImages = hotel.images;
        window.currentBottomSliderIndex = 1;

        if (hotel.images.length === 2) {
            imageBoxHtml = `
                <div class="detail-image-stack">
                    <div class="detail-image-box">
                        <img src="${hotel.images[0]}" alt="${hotel.imageAlt || hotel.name}" class="detail-main-img">
                        <span class="detail-location-badge">${hotel.location}</span>
                        <span class="detail-price-badge" title="Price Range: ${hotel.priceRange}">${hotel.priceRange}</span>
                    </div>
                    <div class="detail-image-box">
                        <img src="${hotel.images[1]}" alt="${hotel.imageAlt || hotel.name}" class="detail-main-img">
                    </div>
                </div>
            `;
        } else {
            imageBoxHtml = `
                <div class="detail-image-stack">
                    <div class="detail-image-box">
                        <img src="${hotel.images[0]}" alt="${hotel.imageAlt || hotel.name}" class="detail-main-img">
                        <span class="detail-location-badge">${hotel.location}</span>
                        <span class="detail-price-badge" title="Price Range: ${hotel.priceRange}">${hotel.priceRange}</span>
                    </div>
                    <div class="detail-image-box bottom-stack-slider">
                        <img src="${hotel.images[1]}" alt="${hotel.imageAlt || hotel.name}" class="detail-main-img" id="bottom-slider-img">
                        <button class="slider-arrow prev" onclick="changeBottomImage(-1)">&#10094;</button>
                        <button class="slider-arrow next" onclick="changeBottomImage(1)">&#10095;</button>
                        <div class="slider-dots" id="bottom-slider-dots-container">
                            ${hotel.images.slice(1).map((img, idx) => `<span class="slider-dot bottom-slider-dot ${idx === 0 ? 'active' : ''}" onclick="setBottomImage(${idx + 1})"></span>`).join("")}
                        </div>
                    </div>
                </div>
            `;
        }
    } else {
        imageBoxHtml = `
            <div class="detail-image-box">
                <img src="${hotel.image}" alt="${hotel.imageAlt || hotel.name}" class="detail-main-img">
                <span class="detail-location-badge">${hotel.location}</span>
                <span class="detail-price-badge" title="Price Range: ${hotel.priceRange}">${hotel.priceRange}</span>
            </div>
        `;
    }

    // Cross-linking sister dining spots html
    const diningHtml = hotel.nearbyDining.map((rest, i) => {
        if (!rest.id) {
            return `
                <div class="detail-dish-card" style="margin-bottom: 1rem;">
                    <div class="detail-dish-number">0${i + 1}</div>
                    <div class="detail-dish-content">
                        <h4 class="detail-dish-name" style="font-size: 1.05rem; font-weight: 700; color: var(--accent-primary);">
                            ${rest.name}
                        </h4>
                        <p class="detail-dish-desc">${rest.description}</p>
                    </div>
                </div>
            `;
        }
        return `
            <div class="detail-dish-card" style="margin-bottom: 1rem;">
                <div class="detail-dish-number">0${i + 1}</div>
                <div class="detail-dish-content">
                    <h4 class="detail-dish-name" style="font-size: 1.05rem;">
                        <a href="https://www.soflobites.com/#restaurant/${rest.id}" target="_blank" rel="noopener noreferrer" style="color: var(--accent-primary); text-decoration: none; font-weight: 700; display: inline-flex; align-items: center; gap: 0.35rem;">
                            ${rest.name}
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        </a>
                    </h4>
                    <p class="detail-dish-desc">${rest.description}</p>
                </div>
            </div>
        `;
    }).join("");

    // Dynamic things to do nearby html
        const activitiesHtml = hotel.thingsToDo.map((act, i) => {
        const buttonHtml = act.bookingUrl ? `
            <div style="margin-top: 0.75rem;">
                <a href="${act.bookingUrl}" target="_blank" rel="noopener noreferrer" class="detail-book-btn">
                    BOOK NOW
                </a>
            </div>
        ` : '';
        return `
        <div class="detail-dish-card" style="margin-bottom: 1rem;">
            <div class="detail-dish-number" style="background: var(--accent-gradient); color: white; border-radius: 50%; width: 2.2rem; height: 2.2rem; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; opacity: 1; flex-shrink: 0;">🌴</div>
            <div class="detail-dish-content">
                <h4 class="detail-dish-name" style="font-size: 1.05rem; font-weight: 700; color: var(--accent-primary);">
                    ${act.name}
                </h4>
                <p class="detail-dish-desc">${act.description}</p>
                ${buttonHtml}
            </div>
        </div>
        `;
    }).join("");

    // Setup filter tags back-routing links
    const relatedButtonsHtml = hotel.tags.map(t => {
        const norm = normalizeTag(t);
        return `
            <button class="detail-related-btn" onclick="filterByTagAndGoHome('${norm}')">
                See more ${t} spots
            </button>
        `;
    }).join("");

    return `
        <div class="detail-page-wrapper">
            <!-- Back Navigation -->
            <div class="detail-back-nav">
                <a href="#" class="back-link" onclick="goBackToDirectory(event)">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                    Back to Explore Stays
                </a>
            </div>
            
            <!-- Header Section -->
            <div class="detail-header-block">
                ${imageBoxHtml}
                <div class="detail-title-info">
                    <h1 class="detail-title">${hotel.name}</h1>
                    <div class="detail-tags-list">
                        ${hotel.tags.map(t => `<span class="detail-tag">${t}</span>`).join("")}
                    </div>
                    
                    <p class="detail-long-desc">${hotel.longDescription}</p>
                    
                    <button class="mobile-book-anchor-btn" onclick="document.getElementById('booking-actions-box').scrollIntoView({ behavior: 'smooth' })">
                        Book Room
                    </button>
                    
                    <div class="detail-features-row">
                        ${featuresHtml}
                    </div>
                </div>
            </div>
            
            <!-- Details Columns Grid -->
            <div class="detail-grid">
                <!-- Left: Highlights, Dining & Things To Do -->
                <div class="detail-left-column">
                    <h3 class="detail-section-title">Exclusive Hotel Highlights &amp; Amenities</h3>
                    <div style="background-color: #ffffff; border: 1px solid var(--border-color); border-radius: var(--border-radius-md); padding: 1.5rem; margin-bottom: 2rem; box-shadow: var(--shadow-soft);">
                        <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-secondary); margin-bottom: 1rem; font-weight: 500;">
                            Guests at this property also benefit from:
                        </p>
                        <ul class="about-process-list" style="margin: 0;">
                            <li><strong>Signature Amenity:</strong> ${hotel.perk}</li>
                            <li><strong>Local Setting:</strong> Prime location in ${hotel.location} along South Florida's coastal hub.</li>
                            <li><strong>Wellness &amp; Dining:</strong> Onsite dining and spa services available to guests (${hotel.offersSpa ? 'Spa available' : 'Day services nearby'}).</li>
                        </ul>
                    </div>

                    <h3 class="detail-section-title">🌴 Fun Things to Do Nearby</h3>
                    <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1.25rem; line-height: 1.5;">
                        Make the most of your stay! Explore these top-rated activities and local sights located just minutes from the property:
                    </p>
                    <div class="detail-dishes-list" style="margin-bottom: 2rem;">
                        ${activitiesHtml}
                    </div>

                    <h3 class="detail-section-title">🍽️ Recommended Local Dining Nearby</h3>
                    <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1.25rem; line-height: 1.5;">
                        We believe a great stay requires incredible food. We've coordinated with our sister guide, <a href="https://www.soflobites.com/" target="_blank" rel="noopener noreferrer" style="color: var(--accent-primary); text-decoration: none; font-weight: 600;">SoFlo Bites</a>, to recommend the best local dining spots in this immediate area:
                    </p>
                    <div class="detail-dishes-list">
                        ${diningHtml}
                    </div>
                </div>
                
                <!-- Right Side: Booking, Contacts & Hours -->
                <div class="detail-right-column">
                    <!-- Actions Booking Box -->
                    <div class="detail-actions-box" id="booking-actions-box">
                        <h3 class="detail-box-title">Secure Your Reservation</h3>
                        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1rem; line-height: 1.4;">
                            Click below to check availability and secure your room on our partner site:
                        </p>
                        <div class="detail-action-buttons">
                            <a href="${hotel.bookingUrls.booking}" target="_blank" rel="noopener noreferrer" class="detail-action-btn active-btn">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                Book Room
                            </a>
                        </div>
                    </div>
                    
                    <!-- Contact Box -->
                    <div class="detail-contact-box">
                        <h3 class="detail-box-title">Location &amp; Contact</h3>
                        <div class="detail-contact-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            <span>${hotel.address}</span>
                        </div>
                        <div class="detail-contact-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            <span>Phone: <a href="tel:${hotel.phone.replace(/[-\s()]+/g, '')}" class="detail-phone-link">${hotel.phone}</a></span>
                        </div>
                        
                        <div class="detail-map-btn-wrapper">
                            <a href="${hotel.mapsUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary detail-map-btn">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 6v14l7-4 7 4 7-4V2l-7 4-7-4L1 6z"></path><line x1="8" y1="2" x2="8" y2="18"></line><line x1="15" y1="6" x2="15" y2="22"></line></svg>
                                Get Directions (Google Maps)
                            </a>
                        </div>
                    </div>
                    
                    <!-- Times Box -->
                    <div class="detail-hours-box">
                        <h3 class="detail-box-title">Stay Policies</h3>
                        <div class="detail-hours-grid">
                            ${checkinHtml}
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Related Amenities Exploration -->
            <div class="detail-related-section">
                <h3 class="detail-related-title">Explore Similar Hotel Styles</h3>
                <div class="detail-related-buttons">
                    ${relatedButtonsHtml}
                </div>
            </div>
        </div>
    `;
}

// Image Gallery Slider Functions (for detail views with multiple images)
window.changeSliderImage = function(dir) {
    if (!window.sliderImages || window.sliderImages.length <= 1) return;
    let newIndex = window.currentSliderIndex + dir;
    if (newIndex < 0) newIndex = window.sliderImages.length - 1;
    if (newIndex >= window.sliderImages.length) newIndex = 0;
    window.setSliderImage(newIndex);
};

window.setSliderImage = function(index) {
    if (!window.sliderImages || index < 0 || index >= window.sliderImages.length) return;
    window.currentSliderIndex = index;
    const imgEl = document.getElementById("slider-img");
    if (imgEl) {
        imgEl.src = window.sliderImages[index];
    }
    // Update dots active class
    const dots = document.querySelectorAll(".slider-dot");
    dots.forEach((dot, idx) => {
        if (idx === index) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
};

// Bottom Stack Image Slider Functions (for stacked detail views with > 2 images)
window.changeBottomImage = function(dir) {
    if (!window.sliderImages || window.sliderImages.length <= 2) return;
    let newIndex = window.currentBottomSliderIndex + dir;
    if (newIndex < 1) newIndex = window.sliderImages.length - 1;
    if (newIndex >= window.sliderImages.length) newIndex = 1;
    window.setBottomImage(newIndex);
};

window.setBottomImage = function(index) {
    if (!window.sliderImages || index < 1 || index >= window.sliderImages.length) return;
    window.currentBottomSliderIndex = index;
    const imgEl = document.getElementById("bottom-slider-img");
    if (imgEl) {
        imgEl.src = window.sliderImages[index];
    }
    // Update dots active class
    const dots = document.querySelectorAll(".bottom-slider-dot");
    dots.forEach((dot, idx) => {
        if (idx === (index - 1)) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
};

// 9. Best Of View Renderers
function renderBestOfCategories() {
    const container = document.getElementById("best-of-categories-list");
    if (!container) return;
    
    container.innerHTML = BEST_OF_CATEGORIES.map(cat => {
        return `
            <div class="best-of-category-card" onclick="window.location.hash = '#best-of/${cat.id}'" style="cursor: pointer;">
                <div class="best-of-card-header">
                    <div class="best-of-header-left">
                        <span class="best-of-cat-icon">${cat.icon}</span>
                        <div>
                            <h2 class="best-of-cat-name">${cat.name}</h2>
                            <p class="best-of-cat-desc">${cat.description}</p>
                        </div>
                    </div>
                    <span class="best-of-arrow">Explore &rarr;</span>
                </div>
            </div>
        `;
    }).join("");
}

function renderBestOfListDetailView(categoryId) {
    const view = document.getElementById("best-of-list-detail-view");
    if (!view) return;
    
    const cat = BEST_OF_CATEGORIES.find(c => c.id === categoryId);
    if (!cat) {
        view.innerHTML = `<div class="empty-state">Category list not found.</div>`;
        return;
    }
    
    // Find matching hotels
    const matchingHotels = HOTEL_DATA.filter(hotel => 
        hotel.tags.some(t => normalizeTag(t) === normalizeTag(cat.tag))
    );
    
    const hotelsListHtml = matchingHotels.map(hotel => {
        const tagsHtml = hotel.tags.map(t => `<span class="card-tag">${t}</span>`).join("");
        
        return `
            <div class="best-of-item-row">
                <div class="best-of-item-img-container">
                    <img src="${hotel.image}" alt="${hotel.name}" class="best-of-item-img">
                </div>
                <div class="best-of-item-body">
                    <span class="best-of-item-location">${hotel.location}</span>
                    <div class="best-of-item-title-row">
                        <h3 class="best-of-item-title">${hotel.name}</h3>
                    </div>
                    <div class="card-tags" style="margin-bottom: 0.75rem;">${tagsHtml}</div>
                    <p class="best-of-item-desc">${hotel.longDescription}</p>
                    
                    <div class="best-of-item-actions">
                        <button class="btn-secondary" onclick="openDetailsPage('${hotel.id}')">
                            View Full Details
                        </button>
                        <button class="btn-primary" onclick="event.stopPropagation(); window.open('${hotel.bookingUrls.booking}', '_blank')">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join("");
    
    view.innerHTML = `
        <!-- Back Navigation -->
        <div class="best-of-back-nav" style="margin-bottom: 2rem;">
            <a href="#best-of" class="back-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                Back to Best Stays Curations
            </a>
        </div>
        
        <!-- Header -->
        <div class="best-of-detail-header">
            <h1 class="best-of-detail-title">${cat.name}</h1>
            <div class="best-of-detail-description" style="margin-bottom: 2rem;">
                ${cat.introParagraphs.map((p, idx) => {
                    let html = '';
                    if (idx === 1) {
                        html += `<h3 class="best-of-intro-subheader" style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin-top: 1.5rem; margin-bottom: 0.75rem;">Our Selection Process</h3>`;
                    }
                    html += `<p class="best-of-detail-desc" style="margin-bottom: 1rem;">${p}</p>`;
                    return html;
                }).join("")}
            </div>
        </div>
        
        <!-- Matching Stays Grid/List -->
        <div class="best-of-items-list" style="margin-bottom: 2.5rem;">
            ${hotelsListHtml}
        </div>

        <!-- Experiences Section -->
        ${cat.experiences && cat.experiences.length > 0 ? `
            <div class="best-of-experiences-section" style="margin-top: 2.5rem; border-top: 1px solid var(--border-color); padding-top: 2.5rem; margin-bottom: 2.5rem;">
                <div class="best-of-header" style="margin-bottom: 2rem; text-align: left; display: flex; align-items: flex-start; gap: 1.25rem;">
                    <div style="font-size: 2.2rem; line-height: 1; padding: 0.6rem; background: rgba(13, 148, 136, 0.08); border-radius: var(--border-radius-md); color: #0d9488; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(13, 148, 136, 0.18);">
                        🧭
                    </div>
                    <div style="flex: 1;">
                        <span class="best-of-tagline" style="color: #0d9488; font-size: 1.05rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px;">Complete Your Outing</span>
                        <h2 class="best-of-section-title" style="font-family: var(--font-heading); font-size: 2.4rem; font-weight: 800; color: var(--text-primary); margin-top: 0.25rem; margin-bottom: 0.5rem; letter-spacing: -0.5px;">Great Experiences in South Florida</h2>
                        <p style="color: var(--text-secondary); font-size: 1.1rem; margin: 0; line-height: 1.4;">Pair your stay with one of these highly rated local activities and tours.</p>
                    </div>
                </div>
                <div class="experiences-list" style="display: flex; flex-direction: column; gap: 1.25rem;">
                    ${cat.experiences.map(exp => `
                        <a href="${exp.link}" target="_blank" rel="noopener noreferrer" class="experience-card horizontal">
                            <div class="experience-content" style="flex: 1; display: flex; flex-direction: column; gap: 0.5rem; text-align: left;">
                                <div style="display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
                                    <div class="experience-badge" style="display: inline-block; background: rgba(13, 148, 136, 0.1); color: #0d9488; font-size: 0.75rem; font-weight: 700; padding: 0.25rem 0.6rem; border-radius: 50px; text-transform: uppercase; letter-spacing: 0.5px;">
                                        ${exp.location}
                                    </div>
                                    <h3 class="experience-title" style="font-family: var(--font-heading); font-size: 1.2rem; font-weight: 750; color: var(--text-primary); margin: 0; line-height: 1.3;">${exp.title}</h3>
                                </div>
                                <p class="experience-desc" style="color: var(--text-secondary); font-size: 0.95rem; margin: 0; line-height: 1.4;">${exp.description || ''}</p>
                            </div>
                            <div class="experience-footer">
                                <span>Book Now</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </div>
                        </a>
                    `).join("")}
                </div>
            </div>
        ` : ""}
    `;
}

// 10. Dynamic Booking Channels Affiliate Option Selector Modal
function openOptionSelector(id, action) {
    const hotel = HOTEL_DATA.find(h => h.id === id);
    if (!hotel) return;
    
    const options = hotel.bookingUrls || {};
    const title = `Book Your Stay at ${hotel.name}`;
    
    // Create overlay structure
    const overlay = document.createElement("div");
    overlay.className = "options-modal-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    
    let buttonsHtml = "";
    
    for (const [key, value] of Object.entries(options)) {
        let labelText = key;
        let iconHtml = "🔗";
        const normalizedKey = key.toLowerCase();
        
        if (normalizedKey === "booking") {
            labelText = "Book on Booking.com";
            iconHtml = "💙";
        } else if (normalizedKey === "hotels") {
            labelText = "Book on Hotels.com";
            iconHtml = "🏨";
        } else if (normalizedKey === "tripadvisor") {
            labelText = "Check Rates on TripAdvisor";
            iconHtml = "🟢";
        } else if (normalizedKey === "vrbo") {
            labelText = "Rent on VRBO";
            iconHtml = "🏡";
        }
        
        buttonsHtml += `
            <a href="${value}?aid=${MONETIZATION_CONFIG.affiliates.bookingId}" target="_blank" rel="noopener noreferrer" class="option-btn-link" onclick="closeOptionsModal()">
                <span class="option-btn-icon">${iconHtml}</span>
                <span class="option-btn-label">${labelText}</span>
            </a>
        `;
    }
    
    overlay.innerHTML = `
        <div class="options-modal-card">
            <button class="options-modal-close" onclick="closeOptionsModal()" aria-label="Close booking dialog">✖</button>
            <h3 class="options-modal-title">${title}</h3>
            <p class="options-modal-subtitle">We partner with premier reservation networks to find the lowest pricing. Select an option below to compare booking rates:</p>
            <div class="options-modal-buttons">
                ${buttonsHtml}
            </div>
        </div>
    `;
    
    document.body.appendChild(overlay);
    
    // Trigger animations
    setTimeout(() => {
        overlay.classList.add("active");
    }, 10);
}

function closeOptionsModal() {
    const overlay = document.querySelector(".options-modal-overlay");
    if (overlay) {
        overlay.classList.remove("active");
        setTimeout(() => {
            overlay.remove();
        }, 300);
    }
}

function changeCardImage(hotelId, direction) {
    const hotel = HOTEL_DATA.find(h => h.id === hotelId);
    if (!hotel || !hotel.images || hotel.images.length <= 1) return;
    
    if (!window.cardActiveIndices) {
        window.cardActiveIndices = {};
    }
    
    if (window.cardActiveIndices[hotelId] === undefined) {
        const idx = hotel.images.indexOf(hotel.image);
        window.cardActiveIndices[hotelId] = idx !== -1 ? idx : 0;
    }
    
    let nextIdx = window.cardActiveIndices[hotelId] + direction;
    if (nextIdx < 0) {
        nextIdx = hotel.images.length - 1;
    } else if (nextIdx >= hotel.images.length) {
        nextIdx = 0;
    }
    
    window.cardActiveIndices[hotelId] = nextIdx;
    
    const imgEl = document.getElementById(`card-img-${hotelId}`);
    if (imgEl) {
        imgEl.src = hotel.images[nextIdx];
        hotel.image = hotel.images[nextIdx];
    }
    
    hotel.images.forEach((_, idx) => {
        const dotEl = document.getElementById(`dot-${hotelId}-${idx}`);
        if (dotEl) {
            if (idx === nextIdx) {
                dotEl.classList.add('active');
            } else {
                dotEl.classList.remove('active');
            }
        }
    });
}

// Binds to window for HTML onclick actions
window.openOptionSelector = openOptionSelector;
window.closeOptionsModal = closeOptionsModal;
window.openDetailsPage = openDetailsPage;
window.goBackToDirectory = goBackToDirectory;
window.changeCardImage = changeCardImage;

// 11. Interactive Filter Handlers
function filterByTagAndGoHome(tag) {
    STATE.selectedTags = [normalizeTag(tag)];
    STATE.selectedLocations = [];
    STATE.selectedPrice = "all";
    STATE.searchQuery = "";
    
    // Update active UI elements
    updateFilterUI();
    
    window.location.hash = "#hotel-grid";
    filterAndRender();
}
window.filterByTagAndGoHome = filterByTagAndGoHome;

function updateFilterUI() {
    // Reset location buttons
    const locBtns = document.querySelectorAll('[data-location]');
    locBtns.forEach(btn => {
        const val = btn.getAttribute("data-location").toLowerCase();
        if (val === "all" && STATE.selectedLocations.length === 0) {
            btn.classList.add("active");
        } else if (STATE.selectedLocations.includes(val)) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    // Reset tags buttons
    const tagBtns = document.querySelectorAll('[data-tag]');
    tagBtns.forEach(btn => {
        const val = normalizeTag(btn.getAttribute("data-tag"));
        if (STATE.selectedTags.includes(val)) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    // Reset price buttons
    const priceBtns = document.querySelectorAll('[data-price]');
    priceBtns.forEach(btn => {
        const val = btn.getAttribute("data-price").toLowerCase();
        if (val === STATE.selectedPrice) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    // Reset search inputs
    const searchInp = document.getElementById("search-input");
    if (searchInp) searchInp.value = STATE.searchQuery;
}

function renderActiveFilterBadges() {
    const container = document.getElementById("active-filters-badges");
    const label = document.getElementById("active-filters-label");
    if (!container) return;
    
    container.innerHTML = "";
    let hasFilters = false;
    
    // 1. Locations
    STATE.selectedLocations.forEach(loc => {
        hasFilters = true;
        const badge = document.createElement("span");
        badge.className = "active-filter-badge";
        badge.innerHTML = `
            📍 ${loc.toUpperCase()}
            <button onclick="removeLocationFilter('${loc}')" aria-label="Remove filter">✖</button>
        `;
        container.appendChild(badge);
    });
    
    // 2. Tags/Amenities
    STATE.selectedTags.forEach(tag => {
        hasFilters = true;
        const badge = document.createElement("span");
        badge.className = "active-filter-badge";
        badge.innerHTML = `
            ✨ ${tag}
            <button onclick="removeTagFilter('${tag}')" aria-label="Remove filter">✖</button>
        `;
        container.appendChild(badge);
    });
    
    // 3. Price
    if (STATE.selectedPrice !== "all") {
        hasFilters = true;
        const badge = document.createElement("span");
        badge.className = "active-filter-badge";
        badge.innerHTML = `
            💰 Price: ${STATE.selectedPrice}
            <button onclick="removePriceFilter()" aria-label="Remove filter">✖</button>
        `;
        container.appendChild(badge);
    }
    
    // 4. Search Query
    if (STATE.searchQuery !== "") {
        hasFilters = true;
        const badge = document.createElement("span");
        badge.className = "active-filter-badge";
        badge.innerHTML = `
            🔍 "${STATE.searchQuery}"
            <button onclick="removeSearchFilter()" aria-label="Remove filter">✖</button>
        `;
        container.appendChild(badge);
    }
    
    if (label) label.style.display = hasFilters ? "inline" : "none";
}

// Filter removal bindings
function removeLocationFilter(loc) {
    STATE.selectedLocations = STATE.selectedLocations.filter(l => l !== loc);
    updateFilterUI();
    filterAndRender();
}
window.removeLocationFilter = removeLocationFilter;

function removeTagFilter(tag) {
    STATE.selectedTags = STATE.selectedTags.filter(t => t !== normalizeTag(tag));
    updateFilterUI();
    filterAndRender();
}
window.removeTagFilter = removeTagFilter;

function removePriceFilter() {
    STATE.selectedPrice = "all";
    updateFilterUI();
    filterAndRender();
}
window.removePriceFilter = removePriceFilter;

function removeSearchFilter() {
    STATE.searchQuery = "";
    const searchInp = document.getElementById("search-input");
    if (searchInp) searchInp.value = "";
    updateFilterUI();
    filterAndRender();
}
window.removeSearchFilter = removeSearchFilter;

function setupFilterEvents() {
    // 1. Search Box Input
    const searchInp = document.getElementById("search-input");
    if (searchInp) {
        searchInp.addEventListener("input", (e) => {
            STATE.searchQuery = e.target.value;
            filterAndRender();
        });
    }
    
    // 2. Location filter buttons
    const locBtns = document.querySelectorAll('[data-location]');
    locBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const locVal = btn.getAttribute("data-location").toLowerCase();
            if (locVal === "all") {
                STATE.selectedLocations = [];
            } else {
                const index = STATE.selectedLocations.indexOf(locVal);
                if (index > -1) {
                    STATE.selectedLocations.splice(index, 1);
                } else {
                    STATE.selectedLocations.push(locVal);
                }
            }
            updateFilterUI();
            filterAndRender();
        });
    });
    
    // 3. Tag filter buttons
    const tagBtns = document.querySelectorAll('[data-tag]');
    tagBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const tagVal = normalizeTag(btn.getAttribute("data-tag"));
            const index = STATE.selectedTags.indexOf(tagVal);
            if (index > -1) {
                STATE.selectedTags.splice(index, 1);
            } else {
                STATE.selectedTags.push(tagVal);
            }
            updateFilterUI();
            filterAndRender();
        });
    });
    
    // 4. Price filter buttons
    const priceBtns = document.querySelectorAll('[data-price]');
    priceBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const priceVal = btn.getAttribute("data-price").toLowerCase();
            STATE.selectedPrice = priceVal;
            updateFilterUI();
            filterAndRender();
        });
    });
    
    // 5. Reset All Button
    const resetBtn = document.getElementById("reset-filters");
    if (resetBtn) {
        resetBtn.addEventListener("click", () => {
            STATE.selectedLocations = [];
            STATE.selectedPrice = "all";
            STATE.selectedTags = [];
            STATE.searchQuery = "";
            updateFilterUI();
            filterAndRender();
        });
    }
}

// 11. Local SEO - Auto-generate and Inject Schema.org JSON-LD structured metadata
function injectSchemaMarkup() {
    // Delete any existing dynamic scripts to prevent duplication
    const oldScript = document.getElementById("structured-data-jsonld");
    if (oldScript) oldScript.remove();
    
    // Map each hotel entry to a valid Schema.org Hotel entry
    const itemListElement = HOTEL_DATA.map((hotel, index) => {
        let imageValue;
        if (hotel.images && hotel.images.length > 1) {
            imageValue = hotel.images.map((img, imgIdx) => {
                return {
                    "@type": "ImageObject",
                    "url": `https://soflostays.com/${img}`,
                    "name": imgIdx === 0 ? (hotel.imageTitle || `${hotel.name} View`) : `${hotel.name} Gallery Image ${imgIdx + 1}`,
                    "description": imgIdx === 0 ? (hotel.imageDescription || hotel.imageAlt || `Beautiful view of ${hotel.name}`) : `Gallery image ${imgIdx + 1} for ${hotel.name}`
                };
            });
        } else {
            imageValue = {
                "@type": "ImageObject",
                "url": `https://soflostays.com/${hotel.image}`,
                "name": hotel.imageTitle || `${hotel.name} View`,
                "description": hotel.imageDescription || hotel.imageAlt || `Beautiful view of ${hotel.name}`
            };
        }

        return {
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "Hotel",
                "@id": `https://soflostays.com/#hotel/${hotel.id}`,
                "name": hotel.name,
                "image": imageValue,
                "priceRange": hotel.priceRange,
                "telephone": hotel.phone || "",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": hotel.address.split(',')[0].trim(),
                    "addressLocality": hotel.location,
                    "addressRegion": "FL",
                    "postalCode": hotel.address.match(/\b\d{5}\b/)?.[0] || "",
                    "addressCountry": "US"
                },
                "description": hotel.description,
                "starRating": {
                    "@type": "Rating",
                    "ratingValue": hotel.stars
                }
            }
        };
    });

    // Create container list graph schema
    const schemaGraph = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "ItemList",
                "@id": "https://soflostays.com/#hotellist",
                "name": "Top Local Hotels in South Florida",
                "description": "Curated list of premium, beachfront, boutique, and family-friendly hotels and resorts in South Florida.",
                "numberOfItems": HOTEL_DATA.length,
                "itemListElement": itemListElement
            },
            {
                "@type": "WebSite",
                "@id": "https://soflostays.com/#website",
                "url": "https://soflostays.com/",
                "name": "SoFlo Stays",
                "description": "South Florida's premium hotel and travel guide sharing excellent beachfront resorts and boutique hideaways."
            }
        ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "structured-data-jsonld";
    script.text = JSON.stringify(schemaGraph);
    document.head.appendChild(script);
}

// 12. Application Initialization
document.addEventListener("DOMContentLoaded", () => {
    // Run filtering and render initial listing
    filterAndRender();
    
    // Bind click filters events
    setupFilterEvents();
    
    // Inject Schema.org dynamic markup
    injectSchemaMarkup();
    
    // Routing listeners
    window.addEventListener("hashchange", handleRoute);
    handleRoute();

    // Form toggle for general comments or hotel suggestions
    const feedbackTypeSelect = document.getElementById("feedback-type");
    if (feedbackTypeSelect) {
        feedbackTypeSelect.addEventListener("change", (e) => {
            const val = e.target.value;
            const hotelFields = document.getElementById("hotel-only-fields");
            const photoField = document.getElementById("photo-field");
            const suggestHotel = document.getElementById("suggest-hotel");
            const suggestCity = document.getElementById("suggest-city");
            const suggestReason = document.getElementById("suggest-reason");
            const suggestReasonLabel = document.getElementById("label-suggest-reason");
            const submitBtn = document.getElementById("suggest-submit-btn");

            if (val === "comment") {
                if (hotelFields) hotelFields.style.display = "none";
                if (photoField) photoField.style.display = "none";
                if (suggestHotel) suggestHotel.required = false;
                if (suggestCity) suggestCity.required = false;
                if (suggestReasonLabel) suggestReasonLabel.innerText = "Your Comment / Feedback *";
                if (suggestReason) {
                    suggestReason.placeholder = "Share your thoughts, suggestions, or comments about the site...";
                }
                if (submitBtn) submitBtn.innerText = "Submit Feedback";
            } else {
                if (hotelFields) hotelFields.style.display = "block";
                if (photoField) photoField.style.display = "block";
                if (suggestHotel) suggestHotel.required = true;
                if (suggestCity) suggestCity.required = true;
                if (suggestReasonLabel) suggestReasonLabel.innerText = "Your Review / Why do you love it?";
                if (suggestReason) {
                    suggestReason.placeholder = "Tell us about the vibes, views, or special touches that make this stay stand out...";
                }
                if (submitBtn) submitBtn.innerText = "Submit Recommendation";
            }
        });
    }

    // Top navigation Share Feedback button listener
    const navSuggestBtn = document.getElementById("suggest-cta-btn");
    if (navSuggestBtn) {
        navSuggestBtn.addEventListener("click", (e) => {
            e.preventDefault();
            if (feedbackTypeSelect) {
                feedbackTypeSelect.value = "comment";
                feedbackTypeSelect.dispatchEvent(new Event("change"));
            }
            if (window.location.hash === "#suggest-section") {
                const suggestSection = document.getElementById("suggest-section");
                if (suggestSection) {
                    suggestSection.scrollIntoView({ behavior: "smooth" });
                }
            } else {
                window.location.hash = "#suggest-section";
            }
        });
    }

    // Hero Suggest a Hotel button listener
    const heroSuggestBtn = document.getElementById("hero-submit-btn");
    if (heroSuggestBtn) {
        heroSuggestBtn.addEventListener("click", (e) => {
            e.preventDefault();
            if (feedbackTypeSelect) {
                feedbackTypeSelect.value = "suggest";
                feedbackTypeSelect.dispatchEvent(new Event("change"));
            }
            if (window.location.hash === "#suggest-section") {
                const suggestSection = document.getElementById("suggest-section");
                if (suggestSection) {
                    suggestSection.scrollIntoView({ behavior: "smooth" });
                }
            } else {
                window.location.hash = "#suggest-section";
            }
        });
    }

    // Back to Top button listener
    const backToTopBtn = document.getElementById("back-to-top-btn");
    if (backToTopBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add("visible");
            } else {
                backToTopBtn.classList.remove("visible");
            }
        });
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});
