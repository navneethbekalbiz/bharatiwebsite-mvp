import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'bharathi-sowparnika',
    title: 'Bharathi Sowparnika',
    location: 'Yeyyadi, Mangalore',
    status: 'Completed',
    type: 'Residential',
    priceRange: 'Price on Request',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2000',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2000',
      'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=2000',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=2000',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=2000'
    ],
    description: 'Bharathi Sowparnika in Yeyyadi, Mangalore is a ready-to-move housing society. It offers apartments in varied budget range. These units are a perfect combination of comfort and style, specifically designed to suit your requirements and conveniences. There are 1BHK, 2BHK and 3BHK Apartments available in this project. This housing society is now ready to be called home as families have started moving in.',
    tagline: 'Comfort, Style, & Connectivity',
    specs: { beds: "1 - 3", baths: "1 - 3", sqft: "785 - 1511" },
    coordinates: { lat: 12.8982, lng: 74.8625 },
    overviewPoints: [
      "Spread over an area of 0.69 acres (2.8K sq.m.)",
      "One of the spacious housing societies in the Mangalore region",
      "Ready To Move (Since Sep, 2024)",
      "Approved by Canara Bank and Tata Capital",
      "RERA Registered"
    ],
    configurations: [
      { type: "1 BHK Apartment", size: "785 - 790 sqft", price: "Price on Request" },
      { type: "2 BHK Apartment", size: "940 - 1050 sqft", price: "Price on Request" },
      { type: "3 BHK Apartment", size: "1295 - 1511 sqft", price: "Price on Request" }
    ],
    locationPoints: [
      { name: "A.J. Hospital", distance: "2.8 km" },
      { name: "City Centre Mall", distance: "4.9 km" },
      { name: "Mangalore Junction", distance: "6.2 km" },
      { name: "Manasa Amusement Park", distance: "7.9 km" },
      { name: "Pilikula Golf Club", distance: "7.6 km" },
      { name: "NH66", distance: "1.8 km" },
      { name: "ZUBAIDA COMMERCIAL COMPLEX", distance: "6.2 km" },
      { name: "Mangala Stadium", distance: "4.7 km" }
    ],
    areaOverview: "Yeyyadi is one of the prime locations to own a home in Mangalore. It has a promising social and physical infrastructure and an emerging neighbourhood offering excellent investment potential from a long-term perspective.",
    specifications: [
      {
        category: "General Structure",
        items: [
          "Fully framed R.C.C. structure. Laterite walls for exteriors and concrete blocks for internal walls.",
          "Double coat exterior plastering.",
          "External painting of the building with exterior grade approved paints.",
          "Putty finished emulsion painting for internal walls."
        ]
      },
      {
        category: "Doors & Windows",
        items: [
          "Decorative and elegant melamine polished main entrance door.",
          "Wooden door frames with good quality painted flush door shutters for rooms.",
          "RCC / WPC door frames with good quality fibrotech shutters for toilets.",
          "UPVC windows/Aluminium windows with sliding shutters & M.S Grills."
        ]
      },
      {
        category: "Bathrooms",
        items: [
          "Coloured ceramic tiles (anti-skid) for toilet floors and glazed tile dado",
          "Pressure-checked plumbing and drain lines to ensure total leak-proof toilets.",
          "Wall mounted E.W.C with health faucets for all toilets.",
          "Quality CP fittings in all toilets.",
          "Exhaust fan provision for all toilets"
        ]
      },
      {
        category: "Kitchen & Utility",
        items: [
          "Single bowl stainless steel sink and polished granite counter.",
          "2'0\" glazed tile dado above platform.",
          "Reticulated gas connection with meter",
          "Plumbing & drain connection with power point for washing machine.",
          "Provision for electric chimney and fridge.",
          "Provision for fixing water purifier near to sink."
        ]
      },
      {
        category: "Electrical & Water",
        items: [
          "Overhead water tank and underground sump tank",
          "Water supply with bore well/ open well in addition to the corporation water connection.",
          "Telephone/ T.V. Point/ Intercom facility in Drawing/Dining",
          "AC provision in all bedrooms."
        ]
      }
    ],
    amenitiesList: [
      "Gymnasium",
      "Children's Play Area",
      "Car Parking",
      "Gated Community",
      "Solar Lighting",
      "CCTV Camera Security",
      "Security Cabin",
      "Fire Fighting Systems",
      "Piped Gas"
    ],
    faqs: [
      {
        question: "What are the security features of Bharathi Sowparnika?",
        answer: "Bharathi Sowparnika offers Intercom and Security Cabin to ensure all the residents feel safe and secure."
      },
      {
        question: "Is Bharathi Sowparnika RERA registered?",
        answer: "Yes the project is registered under RERA."
      },
      {
        question: "Does Bharathi Sowparnika has sufficient open space?",
        answer: "Bharathi Sowparnika offers 45.00% open space."
      },
      {
        question: "Who is the top builder dealing in this Bharathi Sowparnika?",
        answer: "Bharathi Builders and Developers is the top builder dealing in this project."
      },
      {
        question: "Are there any reputed medical facility nearby Bharathi Sowparnika?",
        answer: "Some of the reputed medical facility near Bharathi Sowparnika are Kanachur Urban Health Centre, Tejaswini Hospital and City Hospital Research and Diagnostic Center."
      },
      {
        question: "How many housing societies are there in Yeyyadi, Mangalore?",
        answer: "There are 12 housing societies in this locality. Nearly 1 project is ongoing in this area."
      },
      {
        question: "Is Bharathi Sowparnika approved from banks?",
        answer: "Banks such as Canara Bank and Tata Capital have approved the project."
      }
    ]
  },
  {
    id: 'bharathi-greens',
    title: 'Bharathi Greens',
    location: 'Derebail, Mangalore',
    status: 'Completed',
    type: 'Residential',
    priceRange: 'Starts ₹47 Lakhs',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000',
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=2000',
      'https://images.unsplash.com/photo-1484154218962-a1c002085d2f?auto=format&fit=crop&q=80&w=2000',
      'https://images.unsplash.com/photo-1502005229766-52635a771f00?auto=format&fit=crop&q=80&w=2000'
    ],
    description: 'Bharathi Greens in Derebail, Mangalore is a ready-to-move housing society. It offers apartments in varied budget range. These units are a perfect combination of comfort and style, specifically designed to suit your requirements and conveniences. There are 2BHK apartments available in this project. This housing society is now ready to be called home as families have started moving in.',
    tagline: 'Urban Luxury amidst Nature',
    specs: { beds: 2, baths: 2, sqft: 1001 },
    coordinates: { lat: 12.9069, lng: 74.8344 },
    overviewPoints: [
      "1.5 Acres Total Project Area (6.1K sq.m.)",
      "2 Towers, 6 Floors, 113 Units",
      "Ready To Move",
      "PMAY Approved Project"
    ],
    configurations: [
      { type: "2 BHK Apartment", size: "1,001 sqft", price: "Rs. 47 L" }
    ],
    areaOverview: "Derebail is one of the developed localities in Mangalore with an ample inventory of ready residential apartments. It offers excellent road and railway network connectivity.",
    areaHighlights: [
      "Strategic location along NH-66 ensures easy connectivity to the major employment zones",
      "Mangaluru International Airport is less than 9 km away via Bajpe Main Road",
      "Mangalore Central Railway Station is about 8 km from the area via NH-66",
      "Baikampady Industrial Area and Mangalore SEZ within 11 km",
      "Presence of Bharath Mall, Empire Mall, Inland Ornate and City Centre Mall within a 6 km radius",
      "Popular tourist spots like Shree Sharavu Mahaganapathi, Panamburu Beach close by"
    ],
    locationPoints: [
      { name: "Mangaluru Intl Airport", distance: "9 km" },
      { name: "Mangalore Central Rly Stn", distance: "8 km" },
      { name: "Bharath Mall", distance: "< 6 km" },
      { name: "Panamburu Beach", distance: "Nearby" },
      { name: "A.J. Hospital", distance: "Vicinity" }
    ],
    specifications: [
      {
        category: "Flooring",
        items: [
          "Living/ dining/ Master bedroom/ Other bedroom: Premium quality vitrified tiles",
          "Balcony/ Kitchen/ Toilets: Anti-skid ceramic tile",
          "Staircase and corridor: Marble flooring"
        ]
      },
      {
        category: "Doors & Windows",
        items: [
          "Main Door: Attractive melamine polished decorative main entrance door (Wooden)",
          "Internal Doors: Wooden",
          "Windows: Wooden doors/ windows with glazed shutters"
        ]
      },
      {
        category: "Kitchen",
        items: [
          "Polished granite platform with stainless steel sink",
          "Branded hot and cold mixer/ flush value",
          "Anti-skid ceramic tile flooring"
        ]
      },
      {
        category: "Walls & Paint",
        items: [
          "Exterior: Waterproof paint (Asian Apex)",
          "Interior: Putty finished oil bound emulsion paint"
        ]
      },
      {
        category: "Others",
        items: [
          "2 automatic lift of 8 passenger capacity for each block",
          "Sound proof generator for common and apartment lighting",
          "Concrete interlocks paving for car park, drive way and yard",
          "AC point provision in all bedrooms"
        ]
      }
    ],
    amenitiesList: [
      "Swimming Pool",
      "Intercom",
      "Video Door Security",
      "Power Backup (Sound proof generator)",
      "Solar Lighting",
      "Lifts",
      "Car Parking"
    ],
    faqs: [
      {
        question: "What sports amenities are available at Bharathi Greens?",
        answer: "Bharathi Greens has Swimming Pool facilities."
      },
      {
        question: "What are the safety features of Bharathi Greens?",
        answer: "Bharathi Greens has Intercom and Video Door Security to ensure all the residents feel safe and secure."
      },
      {
        question: "Is this a PMAY approved project?",
        answer: "Yes, this is a PMAY approved project."
      },
      {
        question: "Are there are good hospitals in the vicinity of Bharathi Greens?",
        answer: "Yes, there are good hospitals in close vicinity of Bharathi Greens such as Echs Hospital, Exservice Mens Hospital Service .. E C H S and Karnakaka Ayurveda Medical College Hospital."
      },
      {
        question: "How much is price of 2 bhk in Bharathi Greens?",
        answer: "2 BHK units in the project are priced at Rs. 47 L."
      },
      {
        question: "How many units are there in Bharathi Greens?",
        answer: "There are 113 units available in the project."
      }
    ]
  },
  {
    id: 'bharathi-homes',
    title: 'Bharathi Homes',
    location: 'Bejai, Mangalore',
    status: 'Completed',
    type: 'Residential',
    priceRange: 'Price on Request',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=2000',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=2000',
    ],
    description: 'Bharathi Homes in Bejai, Mangalore is a ready to move housing society. This project is a perfect combination of comfort and style, specifically designed to suit your requirements and conveniences. This housing society is now ready to be called home as families have started moving in.',
    tagline: 'Modern Living in Bejai',
    specs: { beds: "2 - 3", baths: "2 - 3", sqft: "Unknown" },
    coordinates: { lat: 12.8845, lng: 74.8465 },
    overviewPoints: [
      "Premium Housing Hub in Mangalore",
      "Ready To Move",
      "Located along NH-66",
      "Excellent Inter-state connectivity via Mangalore Bus Terminal"
    ],
    areaOverview: "Bejai is one of the attractive locations to own a home in Mangalore. It has a promising social and physical infrastructure and an emerging neighbourhood. Bejai is a premium housing hub offering ample 2 BHK and 3 BHK apartments.",
    areaHighlights: [
      "Located along NH-66, providing good connectivity to Panji, Kota and Kozhikode",
      "Bajpe Main Road, Bejai Main Road and MG Road connect to Hampankatta, Giri Nagar",
      "Yeyyadi Industrial Estate (3 km) and Baikampady Industrial Area (11 km) are easily accessible",
      "Mangalore Central Railway Station is around 4 km via Jail Road",
      "Mangalore International Airport is 11 km via Bejai-Kavoor Road",
      "Home to Kapikad Government School, Palm School and Ikon Kids School",
      "Century Plaza, Barath Mall and Bejai Church Complex are famous retail hubs nearby"
    ],
    locationPoints: [
      { name: "Mangalore Bus Terminal", distance: "Next Door" },
      { name: "AJ Hospital", distance: "< 3 km" },
      { name: "Dr TMA Pai Hospital", distance: "< 3 km" },
      { name: "Yeyyadi Ind. Estate", distance: "3 km" },
      { name: "Railway Station", distance: "4 km" }
    ],
    amenitiesList: [
      "Car Parking",
      "24/7 Water Supply",
      "Lift",
      "Security",
      "Power Backup"
    ],
    reviews: {
      average: 4.3,
      count: 20,
      likes: [
        "Good Public Transport",
        "Easy Cab/Auto Availability",
        "Markets at a walkable distance",
        "Good Schools are nearby",
        "Well-maintained Roads"
      ],
      dislikes: [
        "Frequent Traffic Jams",
        "Frequent Parking Issues"
      ],
      userReviews: [
        {
          name: "Arjun",
          role: "Tenant (living since 2Y)",
          rating: 5,
          time: "6mo ago",
          positive: "The people are warm and welcoming, and the food is simply delicious. It is easy to purchase groceries since it is nearby.",
          negative: "The area seemed over crowded. Being close to national highway means there is lots of vehicle noises. Traffic jams are common."
        },
        {
          name: "Owner of Property",
          role: "Owner",
          rating: 3.5,
          time: "4Y ago",
          positive: "It is easy to purchase groceries since it is nearby. There are a lot of restaurants for dine in and take away. There is a shopping mall within a km.",
          negative: "The internal roads have potholes making it difficult to travel. Availability of public transport is less."
        }
      ]
    },
    faqs: [
      {
        question: "Is Bejai safe?",
        answer: "You should know that former and existing residents have rated this locality 4/5 on safety. This means, this is a good area where safety is not a concern."
      },
      {
        question: "Are there any good hospitals in Bharathi Homes neighbourhood?",
        answer: "Yes, there are good hospitals around Bharathi Homes such as Prasad Netralaya, MIO Hospital and Exservice Mens Hospital Service .. E C H S."
      },
      {
        question: "How many residential projects are there in Bejai, Mangalore?",
        answer: "There are 2 under-construction projects in this locality. Around 36 projects are ready in this area."
      },
      {
        question: "Who is the project builder?",
        answer: "The project builder is Bharathi Builders Mangalore."
      },
      {
        question: "How are the reviews for Bharathi Homes location?",
        answer: "Residents have rated this locality 4.3, out of 5. This rating is based on 20 reviews received from property owners, tenants and buyers like you."
      }
    ]
  },
  {
    id: 'bharathi-apartments',
    title: 'Bharathi Apartments',
    location: 'Kodailbail, Mangalore',
    status: 'Completed',
    type: 'Residential',
    priceRange: 'Price on Request',
    image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&q=80&w=2000',
    gallery: [
      'https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&q=80&w=2000',
      'https://images.unsplash.com/photo-1499916078039-922301b0eb9b?auto=format&fit=crop&q=80&w=2000',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=2000'
    ],
    description: 'Bharathi Apartments in Kodailbail, Mangalore is a ready to move housing society. This project is a perfect combination of comfort and style, specifically designed to suit your requirements and conveniences. Families have already started moving in.',
    tagline: 'Urban Connectivity at its Best',
    specs: { beds: "2 - 3", baths: "2 - 3", sqft: "Unknown" },
    coordinates: { lat: 12.8767, lng: 74.8398 },
    overviewPoints: [
      "Located in a Premium Locality",
      "Ready To Move",
      "Dominated by 2BHK and 3BHK configurations",
      "Effective Intracity Connectivity"
    ],
    areaOverview: "Kodailbail is one of the attractive locations to own a home in Mangalore. It has a promising social and physical infrastructure and an emerging neighbourhood. Kodailbail is a premium locality dominated by apartments in the 2 BHK and 3 BHK configuration.",
    areaHighlights: [
      "Mangalore Railway Station on the Southern Railway Zone is a km away",
      "Approximately 12 km from the Mangaluru International Airport via Bejai Kavoor Road",
      "The Yeyyadi Industrial Estate is about 4 km from the locale, while Baikampady is about 14 km away",
      "City Centre, City Plaza, Pio, Bharath, and MAK Mall are within a 3 km distance",
      "Proximity to the railway and industrial area makes Kodailbail a preferred rental hub",
      "Canara, St Aloysius, Besant, and BEM High School are within walking distance",
      "KMC, Yenepoya, Mangalore Health Care, Athena, and Dr MV Shetty Hospital are accessible within 2 km"
    ],
    locationPoints: [
      { name: "Railway Station", distance: "1 km" },
      { name: "City Centre Mall", distance: "< 3 km" },
      { name: "KMC Hospital", distance: "< 2 km" },
      { name: "Mangaluru Intl Airport", distance: "12 km" },
      { name: "Yeyyadi Ind. Estate", distance: "4 km" }
    ],
    amenitiesList: [
      "Intercom",
      "Lifts",
      "Security",
      "Car Parking",
      "Water Storage"
    ],
    reviews: {
      average: 3.9,
      count: 7,
      likes: [
        "Clean & Hygienic",
        "Well-maintained Roads",
        "Good Public Transport",
        "Good Schools are nearby",
        "Easy Cab/Auto Availability"
      ],
      dislikes: [
        "Frequent Traffic Jams"
      ],
      userReviews: [
        {
            name: "Anirudh R P",
            role: "Former Resident (lived for 3Y)",
            rating: 3.4,
            time: "5mo ago",
            positive: "Our area is very close to manglore central railway station. Here strictly do police patrolling. it is clean and hygiene city.",
            negative: "We have face the issue of noise and traffic. Here living cost is very high. Busy streets due to schools and colleges."
        },
        {
            name: "Owner of Property",
            role: "Owner",
            rating: 5.0,
            time: "3Y ago",
            positive: "It's so good that's why it's called as smart City good hospitals , good roads ,so many shops near by.",
            negative: "Dislike is that small road and gullies and very expensive for everything we buy, traffic is more."
        }
      ]
    },
    faqs: [
      {
        question: "Are there any safety related concerns in Kodailbail?",
        answer: "Former and existing residents have rated this locality 4/5 on safety. This means, this is one of the good localities where safety is not a concern."
      },
      {
        question: "Are there any good hospitals close to Bharathi Apartments?",
        answer: "Yes, there are good hospitals close to Bharathi Apartments such as Vishal Children and Maternity Hospital, Spandana Hospital And Institute Of Neuro Sciences and Tara Hospital."
      },
      {
        question: "Are there any housing societies in Kodailbail, Mangalore?",
        answer: "Kodailbail, Mangalore has 18 ready to move housing societies. Around 4 projects are under-construction here."
      },
      {
        question: "Where is Bharathi Apartments located?",
        answer: "Bharathi Apartments is in Kodailbail, a prime real estate destination for property buyers in Mangalore."
      },
      {
        question: "Who is building the project?",
        answer: "Bharathi Builders Mangalore is building the project."
      }
    ]
  },
  {
    id: 'bharathi-west-wind',
    title: 'Bharathi West Wind',
    location: 'Urwa, Mangalore',
    status: 'Completed',
    type: 'Residential',
    priceRange: 'Price on Request',
    image: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&q=80&w=2000',
    gallery: [
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&q=80&w=2000',
      'https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&q=80&w=2000',
      'https://images.unsplash.com/photo-1486304873000-235643847519?auto=format&fit=crop&q=80&w=2000'
    ],
    description: 'Bharathi West Wind in Urwa, Mangalore is a ready to move housing society. This project is a perfect combination of comfort and style, specifically designed to suit your requirements and conveniences.',
    tagline: 'Breezy Living in Urwa',
    specs: { beds: "2 - 3", baths: "2 - 3", sqft: "Unknown" },
    coordinates: { lat: 12.8906, lng: 74.8318 },
    overviewPoints: [
      "Located in Urwa, a prime residential area",
      "Ready To Move",
      "Excellent connectivity via Kulur Ferry Road",
      "Close to Employment Zones"
    ],
    areaOverview: "Urwa is one of the attractive locations to own a home in Mangalore. It has a promising social and physical infrastructure and an emerging neighbourhood. Urwa is known for some of the best housing societies.",
    areaHighlights: [
      "Premium locality offering mainly 2 BHK and 3 BHK residential apartments",
      "Mangalore Central Railway Station is about 4 km from Urwa",
      "Kulur Ferry Road passes through the locale and connects it to Mangalore SEZ",
      "Baikampady Industrial Area is within 10 km and has several pharmaceutical factories",
      "Mangaluru International Airport is nearly 10 km away via Bejai Kavoor Road",
      "Bharath Mall, City Centre Mall and Instabasket cater to the residents",
      "Home to the famous 800-year-old Shri Mariyamma Temple",
      "Presence of educational institutes like Swastika National School and SCS College of Nursing",
      "A.J. Hospital & Research Centre is in the vicinity"
    ],
    locationPoints: [
      { name: "Railway Station", distance: "4 km" },
      { name: "Mangaluru Intl Airport", distance: "10 km" },
      { name: "Baikampady Ind. Area", distance: "10 km" },
      { name: "A.J. Hospital", distance: "Vicinity" },
      { name: "Bharath Mall", distance: "Nearby" }
    ],
    amenitiesList: [
      "Car Parking",
      "Lifts",
      "Power Backup",
      "Security",
      "Water Supply"
    ],
    reviews: {
      average: 4.1,
      count: 23,
      likes: [],
      dislikes: []
    },
    faqs: [
      {
        question: "Are there any safety related concerns in Urwa?",
        answer: "Former and existing residents have rated this locality 4/5 on safety. This means, this is one of the good localities where safety is not a concern."
      },
      {
        question: "Are there any good hospitals in Bharathi West Wind neighbourhood?",
        answer: "Yes, there are good hospitals around Bharathi West Wind such as Exservice Mens Hospital Service .. E C H S, Karnakaka Ayurveda Medical College Hospital and Echs Hospital."
      },
      {
        question: "Are there any housing societies in Urwa, Mangalore?",
        answer: "Urwa, Mangalore has 21 ready to move housing societies. Around 1 project are under-construction here."
      },
      {
        question: "Who is the project builder?",
        answer: "The project builder is Bharathi Builders Mangalore."
      },
      {
        question: "How are the reviews for Bharathi West Wind location?",
        answer: "Residents have rated this locality 4.1, out of 5. This rating is based on 23 reviews received from property owners, tenants and buyers like you."
      }
    ]
  },
  {
    id: 'bharathi-residency',
    title: 'Bharathi Residency',
    location: 'Bejai, Mangalore',
    status: 'Completed',
    type: 'Residential',
    priceRange: 'Price on Request',
    image: 'https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?auto=format&fit=crop&q=80&w=2000',
    gallery: [
      'https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?auto=format&fit=crop&q=80&w=2000',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=2000',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=2000'
    ],
    description: 'Bharathi Residency in Bejai, Mangalore is a ready to move housing society. This project is a perfect combination of comfort and style, specifically designed to suit your requirements and conveniences.',
    tagline: 'Exquisite Living',
    specs: { beds: "2 - 3", baths: "2 - 3", sqft: "Unknown" },
    coordinates: { lat: 12.8850, lng: 74.8470 },
    overviewPoints: [
      "Premium Housing Hub",
      "Ready To Move",
      "Proximity to Industrial Estates",
      "Good Inter-state Connectivity"
    ],
    areaOverview: "Bejai is one of the attractive locations to own a home in Mangalore. It has a promising social and physical infrastructure and an emerging neighbourhood. A premium rental hub, preferred by tenants.",
    areaHighlights: [
      "Located along NH-66, connectivity to Panji, Kota and Kozhikode",
      "Bajpe Main Road, Bejai Main Road and MG Road connect to Hampankatta",
      "Yeyyadi Industrial Estate (3 km) and Baikampady Industrial Area (11 km) are accessible",
      "Mangalore Central Railway Station is around 4 km",
      "Mangalore International Airport is 11 km",
      "Mangalore Bus Terminal is located next to the locality",
      "Century Plaza, Barath Mall and Bejai Church Complex are famous retail hubs"
    ],
    locationPoints: [
      { name: "Mangalore Bus Terminal", distance: "Next Door" },
      { name: "Railway Station", distance: "4 km" },
      { name: "Mangaluru Intl Airport", distance: "11 km" },
      { name: "AJ Hospital", distance: "< 3 km" },
      { name: "City Hospital", distance: "< 3 km" }
    ],
    amenitiesList: [
      "Car Parking",
      "Security",
      "Lifts",
      "Water Supply",
      "Power Backup"
    ],
    reviews: {
      average: 4.3,
      count: 20,
      likes: [
         "Good Public Transport", "Easy Cab/Auto Availability", "Markets at a walkable distance"
      ],
      dislikes: [
         "Frequent Traffic Jams", "Frequent Parking Issues"
      ],
      userReviews: [
         {
             name: "Arjun",
             role: "Tenant",
             rating: 5.0,
             time: "6mo ago",
             positive: "The people are warm and welcoming, and the food is simply delicious. It is easy to purchase groceries.",
             negative: "The area seemed over crowded. Being close to national highway means there is lots of vehicle noises."
         }
      ]
    },
    faqs: [
      {
        question: "Is Bejai safe?",
        answer: "Yes, residents have rated it 4/5 on safety."
      },
      {
        question: "Are there good hospitals in Bharathi Residency neighbourhood?",
        answer: "Yes, Prasad Netralaya, Exservice Mens Hospital Service .. E C H S and Echs Hospital."
      },
      {
        question: "Are there any housing societies in Bejai, Mangalore?",
        answer: "Bejai, Mangalore has 36 ready to move housing societies."
      },
      {
        question: "Who is constructing the project?",
        answer: "Bharathi Builders Mangalore is constructing the project."
      },
      {
        question: "Is Bharathi Residency Bejai good to buy?",
        answer: "This locality has Good Public Transport, Easy Cab/Auto Availability, Markets at a walkable distance. The locality rating is 4.3/ 5."
      }
    ]
  },
  {
    id: 'bharathi-manjeeth-residency',
    title: 'Bharathi Manjeeth Residency',
    location: 'Kotekani, Mangalore',
    status: 'Completed',
    type: 'Residential',
    priceRange: 'Price on Request',
    image: 'https://images.unsplash.com/photo-1584622750111-9f67bfa8c618?auto=format&fit=crop&q=80&w=2000',
    gallery: [
      'https://images.unsplash.com/photo-1584622750111-9f67bfa8c618?auto=format&fit=crop&q=80&w=2000',
      'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&q=80&w=2000',
      'https://images.unsplash.com/photo-1560185127-6a6a67195a93?auto=format&fit=crop&q=80&w=2000'
    ],
    description: 'Bharathi Manjeeth Residency in Kotekani, Mangalore is a ready to move housing society. This project is a perfect combination of comfort and style, specifically designed to suit your requirements and conveniences. With 4 floors and a focus on community living, it fits perfectly into your budget and lifestyle.',
    tagline: 'Exclusive & Spacious',
    specs: { beds: "2 - 3", baths: "2 - 3", sqft: "Unknown" },
    coordinates: { lat: 12.8950, lng: 74.8500 },
    overviewPoints: [
      "Spread over 1.5 Acres (6.1K sq.m.)",
      "4 Floors, 28 Units",
      "Ready To Move (Since Nov, 2018)",
      "Spacious Housing Society"
    ],
    configurations: [
       { type: "2 BHK Apartment", size: "Unknown", price: "Price on Request" },
       { type: "3 BHK Apartment", size: "Unknown", price: "Price on Request" }
    ],
    areaOverview: "Kotekani is one of the attractive locations to own a home in Mangalore. It has a promising social and physical infrastructure and an emerging neighbourhood known for some of the best housing societies.",
    specifications: [
      {
        category: "General",
        items: [
          "Fully framed RCC structure laterite walls for exteriors and concrete blocks for internal walls",
          "Double coat exterior plastering",
          "External painting of the building with exterior grade approved paints",
          "Putty finished acrylic emulsion painting for internal walls",
          "Decorative and elegant melamine polished main entrance door",
          "Wooden door frames with good quality painted flush doors shutters for rooms",
          "RCC door frames with good quality fibrotech shutters for toilets",
          "UPVC windows / French windows with sliding shutters and MS grills",
          "Overhead water tank and underground sump tank with fully automatic pumps",
          "Water supply with bore well / open well in addition to the corporation water connection",
          "3KW power provided for 2BHK and 4KW power provided for 3BHK"
        ]
      },
      {
        category: "Drawing / Dining",
        items: [
           "Telephone / TV point / intercom connection",
           "Pastel colored wash basin for dining"
        ]
      },
      {
        category: "Bathrooms",
        items: [
          "Colored ceramic tiles (antiskid) for toilet floors and glazed tile dado up to full height",
          "Pressure checked plumbing and drainage lines to ensure total leak proof toilets",
          "Wall mounted EWC with health faucets for all toilets",
          "Quality CP fittings in all toilets",
          "Exhaust fan for all toilets"
        ]
      },
      {
        category: "Bedrooms",
        items: [
           "TV point and telephone points in master bedroom",
           "AC provision in the master bedroom"
        ]
      },
      {
        category: "Kitchen / Utility",
        items: [
          "Provision for exhaust fan",
          "Single bowl stainless steel sink with drain board and polished black granite counter",
          "2'0\" glazed tile dado above platform",
          "Provision for electric chimney and fridge",
          "Gas connection with meter",
          "Provision for fixing water purifiers (Aqua guard near the sink)",
          "Plumbing and drainage connection with power point for washing machine"
        ]
      },
      {
        category: "Others",
        items: [
          "Visitor lounge in the ground floor with granite flooring",
          "Antiskid ceramic / granite flooring for common areas",
          "One automatic elevator, with 6 passenger capacity",
          "Generator for common and apartment lighting with sound proof enclosure",
          "Cable TV connection (at extra cost)",
          "Common toilets in the ground floor and terrace floor",
          "Concrete interlock paving for car parking",
          "Superior vitrified floor tiles (24\" x 24\") inside the apartments"
        ]
      }
    ],
    amenitiesList: [
      "Swimming Pool",
      "Gymnasium",
      "Club House",
      "Children's Play Area",
      "Park",
      "Car Parking",
      "Fire Fighting Systems",
      "Piped Gas",
      "Lifts"
    ],
    faqs: [
      {
        question: "Does Bharathi Manjeeth Residency has any sports facility?",
        answer: "Bharathi Manjeeth Residency offers Swimming Pool facilities to its residents."
      },
      {
        question: "Are there any hospitals near Bharathi Manjeeth Residency?",
        answer: "Exservice Mens Hospital Service .. E C H S, Echs Hospital and Karnakaka Ayurveda Medical College Hospital are closest to Bharathi Manjeeth Residency location."
      },
      {
        question: "Are there any housing societies in Kotekani, Mangalore?",
        answer: "Kotekani, Mangalore has 4 ready to move housing societies."
      },
      {
        question: "How many units are there in Bharathi Manjeeth Residency?",
        answer: "The project offers a total of 28 units."
      },
      {
        question: "What all BHKs are available in this society?",
        answer: "Bharathi Manjeeth Residency has 2 BHK, 3 BHK Apartment to offer."
      }
    ]
  }
];

export const BLOGS = [
  {
    id: 1,
    title: "Market Trends 2025: The Rise of Sustainable Luxury in Mangalore",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209860340?auto=format&fit=crop&q=80&w=800",
    date: "Oct 12, 2024"
  },
  {
    id: 2,
    title: "Why Derebail is the Next Investment Hotspot",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
    date: "Nov 05, 2024"
  }
];

export const FAQS = [
  {
    question: "What types of properties do you sell?",
    answer: "We specialize in residential, commercial, and luxury properties in Mangalore, offering a wide range of options from 1BHK to sprawling 3BHK residences."
  },
  {
    question: "How do I know if a property is a good investment?",
    answer: "Our locations like Yeyyadi and Derebail are chosen for their high appreciation potential, proximity to infrastructure like NH66 and the International Airport, and strong rental yields."
  },
  {
    question: "Is Bharathi Sowparnika RERA registered?",
    answer: "Yes, Bharathi Sowparnika is a RERA registered project and approved by major banks including Canara Bank and Tata Capital."
  },
  {
    question: "What amenities are available at Bharathi Greens?",
    answer: "Bharathi Greens features a swimming pool, children's play area, sound-proof generators for power backup, solar lighting, and comprehensive security systems including video door phones."
  },
  {
    question: "Can I tour a property before purchasing?",
    answer: "Absolutely. Both Bharathi Sowparnika and Bharathi Greens are Ready To Move. We encourage you to schedule a site visit to experience the quality firsthand."
  }
];

export const TESTIMONIALS = [
  {
    name: "Sajibur Rahman",
    role: "Resident, Bharathi Sowparnika",
    text: "The build quality is exceptional. The proximity to A.J. Hospital and the airport makes my commute effortless. Truly a great investment.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Elena Foster",
    role: "Architect",
    text: "I appreciate the attention to detail in Bharathi Greens. The open space ratio and ventilation in the 2BHK units are designed perfectly for Mangalore's climate.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Michael Chen",
    role: "Investor",
    text: "Transparency is rare in real estate, but Bharathi Builders delivered exactly what they promised with the Sowparnika project. Ready to move with no hassles.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
  }
];