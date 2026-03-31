import climateImg from "../assets/blog/climate-zones.jpeg";
import soilImg from "../assets/blog/soil-types.jpeg";
import rightsImg from "../assets/blog/fundamental-rights.jpeg";

const blogsData = [
  {
    id: "climate-zones-of-india",
    type: "climate",
    category: "Geography",
    title: "Climate Zones of India – Complete Guide to Indian Climate Classification",
    subtitle: "A Complete Guide to India's Diverse Climatic Regions",
    thumbnail: climateImg,
    readTime: "March 20, 2026",
    tags: ["Geography", "Climate", "India", "UPSC"],

    intro: [
      "India experiences a remarkable variety of climates ranging from tropical in the south to temperate and alpine in the Himalayan north. The elevated northern regions receive sustained snowfall during winters while the southern peninsula enjoys warm weather throughout the year.",
      "This climatic diversity is shaped by India's vast geographical extent, varying topography, and unique positioning between the Himalayas and the Indian Ocean. The Tropic of Cancer passes through the middle of the country, from Mizoram in the east to the Rann of Kutch in the west, dividing India into tropical and subtropical zones."
    ],

    factors: [
      {
        title: "Latitude",
        text: "The Tropic of Cancer divides India into two distinct climatic zones. The southern part belongs to the tropical area while the northern half lies in the subtropical zone, resulting in varied temperature patterns across the country."
      },
      {
        title: "The Himalayas",
        text: "The Himalayan mountain range acts as a formidable barrier against cold Central Asian katabatic winds, keeping the Indian subcontinent considerably warmer than other regions at similar latitudes. They also trap monsoon clouds, causing heavy rainfall on the windward side."
      },
      {
        title: "Monsoon Winds",
        text: "Monsoon winds are the most dominant factor influencing India's climate. The southwest monsoon between June and October brings the majority of India's annual rainfall, making it crucial for agriculture and water resources."
      },
      {
        title: "Altitude",
        text: "Temperature decreases by approximately 6.5°C for every 1000 metres rise in elevation. This creates diverse microclimates in mountainous regions, ranging from tropical conditions at the foothills to tundra-like conditions at higher altitudes."
      },
      {
        title: "The Thar Desert",
        text: "The Thar Desert plays a crucial role in attracting moisture-laden southwest monsoon winds between June and October. The intense heating of the desert creates a low-pressure zone that draws in oceanic winds."
      }
    ],

    climateZones: [
      {
        title: "1. Hot and Dry Climate",
        regions: "Rajasthan, Gujarat, parts of Maharashtra and Karnataka",
        stats: [
          { label: "Temperature", value: "32-45°C (Summer) | 10-25°C (Winter)" },
          { label: "Humidity", value: "20-25%" },
          { label: "Rainfall", value: "Less than 500mm annually" }
        ],
        text: 'This zone experiences extreme diurnal temperature variation with very low humidity levels. The landscape features sparse vegetation and desert conditions. Hot winds locally known as "Loo" are common during summer months. Clear skies result in intense solar radiation throughout the year.'
      },
      {
        title: "2. Warm and Humid Climate",
        regions: "Kerala, Coastal Maharashtra, Goa, West Bengal, Odisha, Andaman & Nicobar Islands",
        stats: [
          { label: "Temperature", value: "25-35°C (Summer) | 20-30°C (Winter)" },
          { label: "Humidity", value: "70-90%" },
          { label: "Rainfall", value: "Above 1200mm annually" }
        ],
        text: "This zone experiences high relative humidity throughout the year with moderate temperature variation. Heavy monsoon rainfall supports lush green vegetation. The coastal location significantly influences the climate, creating comfortable conditions despite the humidity."
      },
      {
        title: "3. Composite Climate",
        regions: "Delhi, Uttar Pradesh, Madhya Pradesh, Bihar, parts of Rajasthan",
        stats: [
          { label: "Temperature", value: "32-43°C (Summer) | 10-25°C (Winter)" },
          { label: "Humidity", value: "20-25% (Dry) | 55-95% (Monsoon)" },
          { label: "Rainfall", value: "500-1000mm annually" }
        ],
        text: "This is the largest climate zone in India by area. It experiences characteristics of multiple climate types throughout the year — hot and dry conditions in summer, warm and humid during monsoon, and cold and dry winters. The dramatic seasonal variation defines life in this region."
      },
      {
        title: "4. Temperate (Moderate) Climate",
        regions: "Bangalore, Pune, parts of Tamil Nadu highlands",
        stats: [
          { label: "Temperature", value: "20-30°C (Summer) | 12-25°C (Winter)" },
          { label: "Humidity", value: "Moderate" },
          { label: "Rainfall", value: "Moderate to high" }
        ],
        text: "This zone experiences relatively mild temperatures throughout the year due to altitude and moderate maritime influence. It is known for pleasant weather and a balanced annual climate."
      },
      {
        title: "5. Cold Climate",
        regions: "Jammu & Kashmir, Himachal Pradesh, Uttarakhand, Ladakh, Sikkim, Arunachal Pradesh highlands",
        stats: [
          { label: "Temperature", value: "Below 20°C in summer | Often below 0°C in winter" },
          { label: "Humidity", value: "Low to moderate" },
          { label: "Rainfall", value: "Variable, with snowfall in many parts" }
        ],
        text: "This zone is characterized by long winters, low temperatures, and snowfall in many regions. The climate varies with altitude, with some valleys remaining cool-temperate while higher altitudes experience alpine and tundra-like conditions."
      }
    ],

    koppenIntro: [
      "Apart from the broad climatic classification used in India, climatologists have also classified India using more scientific systems such as Köppen's Climate Classification and L. Dudley Stamp's Classification.",
      "Köppen identified nine distinct climate types in India based on temperature and precipitation patterns."
    ],

    koppenTypes: [
      { code: "Amw", label: "Monsoon type with short dry season" },
      { code: "As", label: "Tropical savanna with dry summer" },
      { code: "Aw", label: "Tropical savanna with dry winter" },
      { code: "BShw", label: "Semi-arid steppe climate" },
      { code: "BWhw", label: "Hot desert climate" },
      { code: "Cwg", label: "Subtropical climate with dry winter" },
      { code: "Dfc", label: "Cold humid climate" },
      { code: "Et", label: "Tundra climate" },
      { code: "E", label: "Polar or alpine climate" }
    ],

    extraClimateNotes: [
      "L. Dudley Stamp's classification uses the 18°C isotherm of mean monthly temperature for January to divide India into broader climatic zones.",
      "India experiences four broad seasons: Winter, Summer, Rainy (Southwest Monsoon), and Retreating/Post-Monsoon season."
    ],

    takeaways: [
      "India has diverse climate zones shaped by latitude, altitude, monsoon winds, and relief.",
      "Monsoon is the dominant climatic feature of India.",
      "The Tropic of Cancer divides India into tropical and subtropical parts.",
      "The Himalayas and Thar Desert strongly influence rainfall and temperature patterns.",
      "ECBC broadly classifies India into five major climate zones."
    ],

    quizMeta: {
      badge: "📚 Knowledge Check",
      subtitle: "Challenge yourself with questions on India's Climate Zones"
    },

    quiz: [
      {
        question: "How many major climate zones does India have according to the Energy Conservation Building Code (ECBC)?",
        options: ["Three", "Five", "Seven", "Nine"],
        answer: "Five",
        explanation: "India is divided into five major climate zones according to ECBC: Hot & Dry, Warm & Humid, Composite, Temperate, and Cold. This classification helps in designing energy-efficient buildings suitable for each region."
      },
      {
        question: "Which factor is the most dominant in influencing India's climate?",
        options: ["Latitude", "Altitude", "Monsoon Winds", "Ocean Currents"],
        answer: "Monsoon Winds",
        explanation: "Monsoon winds are the most dominant factor influencing India's climate. The southwest monsoon brings most of India's annual rainfall."
      },
      {
        question: "Which climate zone covers the largest geographical area in India?",
        options: ["Composite", "Hot & Dry", "Warm & Humid", "Cold"],
        answer: "Composite",
        explanation: "The Composite climate zone covers the largest area in India and experiences dramatic seasonal variation."
      },
      {
        question: 'What is "Loo" in the context of Indian climate?',
        options: ["A type of monsoon rain", "Cold winter breeze", "Coastal humidity", "Hot dry summer wind"],
        answer: "Hot dry summer wind",
        explanation: '“Loo” refers to hot and dry summer winds that blow especially in northwestern India.'
      },
      {
        question: "Which line divides India into tropical and subtropical zones?",
        options: ["Equator", "Tropic of Cancer", "Tropic of Capricorn", "Prime Meridian"],
        answer: "Tropic of Cancer",
        explanation: "The Tropic of Cancer passes through India and divides the country into tropical and subtropical climatic regions."
      },
      {
        question: "Why are the Himalayas important for India's climate?",
        options: [
          "They block cold winds and trap monsoon clouds",
          "They reduce rainfall everywhere",
          "They increase desert area",
          "They create ocean currents"
        ],
        answer: "They block cold winds and trap monsoon clouds",
        explanation: "The Himalayas act as a barrier to cold Central Asian winds and also help trap monsoon clouds, causing rainfall."
      },
      {
        question: "Which area helps attract moisture-laden monsoon winds because of intense summer heating?",
        options: ["Deccan Plateau", "Thar Desert", "Western Ghats", "Sundarbans"],
        answer: "Thar Desert",
        explanation: "The Thar Desert creates a low-pressure area in summer that helps attract moisture-laden southwest monsoon winds."
      },
      {
        question: "Temperature generally decreases by how much for every 1000 metres rise in altitude?",
        options: ["2°C", "4°C", "6.5°C", "10°C"],
        answer: "6.5°C",
        explanation: "Temperature decreases by about 6.5°C for every 1000 metres rise in elevation."
      },
      {
        question: "Which season in India occurs from June to September?",
        options: ["Winter Season", "Summer Season", "Rainy Season", "Retreating Monsoon"],
        answer: "Rainy Season",
        explanation: "The main rainy season in India occurs from June to September during the southwest monsoon."
      },
      {
        question: "How many distinct climate types did Köppen identify in India?",
        options: ["Five", "Seven", "Eight", "Nine"],
        answer: "Nine",
        explanation: "Köppen identified nine distinct climate types in India based on temperature and precipitation patterns."
      },
      {
        question: "Which climate zone is common in Kerala and Goa?",
        options: ["Hot & Dry", "Warm & Humid", "Composite", "Cold"],
        answer: "Warm & Humid",
        explanation: "Kerala and Goa fall in the Warm and Humid climate zone because of high rainfall and coastal influence."
      },
      {
        question: "Which season is also called the retreating monsoon season?",
        options: ["Winter", "Post-Monsoon", "Summer", "Spring"],
        answer: "Post-Monsoon",
        explanation: "The post-monsoon season is also called the retreating monsoon season."
      },
      {
        question: "Which climate zone is found in Ladakh and high Himalayan regions?",
        options: ["Temperate", "Warm & Humid", "Cold", "Composite"],
        answer: "Cold",
        explanation: "Ladakh and higher Himalayan regions belong to the Cold climate zone."
      },
      {
        question: "Which zone is known for pleasant conditions in cities like Bangalore and Pune?",
        options: ["Temperate", "Hot & Dry", "Composite", "Cold"],
        answer: "Temperate",
        explanation: "Bangalore and Pune are examples of the Temperate or Moderate climate zone."
      },
      {
        question: "Which climate zone has humidity around 70–90%?",
        options: ["Warm & Humid", "Cold", "Composite", "Hot & Dry"],
        answer: "Warm & Humid",
        explanation: "Warm and Humid regions have high relative humidity, often around 70–90%."
      }
    ]
  },

  {
    id: "soil-types-of-india",
    type: "soil",
    category: "Geography",
    title: "Major Soil Types in India – 6 Important Soils with Map & Characteristics",
    subtitle: "A Complete Guide to India's Diverse Soil Classification",
    thumbnail: soilImg,
    readTime: "March 25, 2026",
    tags: ["Soil", "Geography", "Agriculture", "UPSC"],

    intro: [
      "India's diverse geography and climate have resulted in the formation of a wide variety of soils, each playing a crucial role in the agricultural landscape. Soil is the loose upper layer of the Earth's crust composed of mineral particles, organic matter, water, and air that supports plant life.",
      "The Indian Council of Agricultural Research (ICAR) has developed a comprehensive classification system that categorizes Indian soils into major groups based on their physical and chemical properties, as well as their agricultural significance.",
      "The six major types of soil found in India are: Alluvial Soil, Black Soil, Red Soil, Laterite Soil, Forest and Mountain Soil, and Arid/Desert Soil."
    ],

    chartLegend: [
      { name: "Alluvial Soil", percent: "46%", color: "#90EE90" },
      { name: "Black Soil", percent: "18.5%", color: "#2d2d2d" },
      { name: "Red Soil", percent: "18.5%", color: "#e74c3c" },
      { name: "Laterite Soil", percent: "6%", color: "#a0522d" },
      { name: "Forest Soil", percent: "5.5%", color: "#228B22" },
      { name: "Arid Soil", percent: "5.5%", color: "#f4e4ba" }
    ],

    soils: [
      {
        title: "Alluvial Soil",
        subtitle: "Most fertile soil in India",
        coverage: "46% Coverage",
        gradient: "linear-gradient(135deg, #8fd694, #5fbf72)",
        shadow: "rgba(95, 191, 114, 0.25)",
        info: [
          { label: "Colour", value: "Light grey to ash grey" },
          { label: "Texture", value: "Sandy loam to clay" },
          { label: "Rich In", value: "Potash, Phosphoric acid, Lime" },
          { label: "Deficient In", value: "Nitrogen, Phosphorus" }
        ],
        blocks: [
          {
            label: "Regions",
            text: "Indo-Gangetic Plains (Punjab, Haryana, UP, Bihar, West Bengal), Brahmaputra Valley, and coastal deltas of Mahanadi, Godavari, Krishna, and Kaveri rivers."
          },
          {
            label: "Formation",
            text: "Formed by sediments deposited by rivers originating from the Himalayas. These are transported or azonal soils constantly replenished by recurrent floods."
          },
          {
            label: "Types",
            text: "Divided into Khadar (new alluvium on floodplains, extremely fertile) and Bhangar (old alluvium on elevated terraces, contains calcium carbonate nodules called kankar)."
          }
        ],
        crops: ["Rice", "Wheat", "Sugarcane", "Maize", "Pulses", "Oilseeds"]
      },
      {
        title: "Black Soil",
        subtitle: "Also known as Regur or Black Cotton Soil",
        coverage: "18.5% Coverage",
        gradient: "linear-gradient(135deg, #2d2d2d, #555)",
        shadow: "rgba(45, 45, 45, 0.25)",
        info: [
          { label: "Colour", value: "Deep black to dark brown" },
          { label: "Texture", value: "Clayey and fine-grained" },
          { label: "Rich In", value: "Lime, Iron, Magnesia, Alumina" },
          { label: "Deficient In", value: "Nitrogen, Phosphorus, Humus" }
        ],
        blocks: [
          {
            label: "Regions",
            text: "Deccan Plateau region including Maharashtra, Madhya Pradesh, Gujarat, Andhra Pradesh, and parts of Karnataka and Tamil Nadu."
          },
          {
            label: "Formation",
            text: "Derived from weathering of basaltic lava rocks of the Deccan Trap."
          },
          {
            label: "Features",
            text: "Highly moisture retentive and develops deep cracks in summer, allowing aeration."
          }
        ],
        crops: ["Cotton", "Sugarcane", "Soybean", "Groundnut", "Wheat", "Millets"]
      },
      {
        title: "Red Soil",
        subtitle: "Iron-rich and widely distributed",
        coverage: "18.5% Coverage",
        gradient: "linear-gradient(135deg, #e74c3c, #ff7b6b)",
        shadow: "rgba(231, 76, 60, 0.25)",
        info: [
          { label: "Colour", value: "Red to yellow" },
          { label: "Texture", value: "Sandy to loamy" },
          { label: "Rich In", value: "Iron" },
          { label: "Deficient In", value: "Nitrogen, Phosphorus, Humus, Lime" }
        ],
        blocks: [
          {
            label: "Regions",
            text: "Tamil Nadu, Karnataka, Andhra Pradesh, Odisha, Chhattisgarh, Jharkhand, and parts of Maharashtra and Madhya Pradesh."
          },
          {
            label: "Formation",
            text: "Developed on crystalline igneous and metamorphic rocks under low rainfall conditions."
          },
          {
            label: "Features",
            text: "Its red colour is due to iron oxide. It becomes yellow when hydrated."
          }
        ],
        crops: ["Millets", "Groundnut", "Pulses", "Tobacco", "Potato"]
      },
      {
        title: "Laterite Soil",
        subtitle: "Leached soil of high rainfall regions",
        coverage: "6% Coverage",
        gradient: "linear-gradient(135deg, #a0522d, #c97a4a)",
        shadow: "rgba(160, 82, 45, 0.25)",
        info: [
          { label: "Colour", value: "Red to brown" },
          { label: "Texture", value: "Loamy to clayey" },
          { label: "Rich In", value: "Iron oxide, Aluminium" },
          { label: "Deficient In", value: "Nitrogen, Potash, Humus" }
        ],
        blocks: [
          {
            label: "Regions",
            text: "Western Ghats, Eastern Ghats, parts of Karnataka, Kerala, Tamil Nadu, Madhya Pradesh, Assam and hilly regions."
          },
          {
            label: "Formation",
            text: "Formed in areas of high temperature and heavy rainfall with intense leaching."
          },
          {
            label: "Features",
            text: "Hardens when exposed to air and is less fertile unless treated with manures and fertilizers."
          }
        ],
        crops: ["Tea", "Coffee", "Rubber", "Cashew", "Coconut"]
      },
      {
        title: "Forest and Mountain Soil",
        subtitle: "Found in hilly and mountainous areas",
        coverage: "5.5% Coverage",
        gradient: "linear-gradient(135deg, #228b22, #4caf50)",
        shadow: "rgba(34, 139, 34, 0.25)",
        info: [
          { label: "Colour", value: "Dark brown to black" },
          { label: "Texture", value: "Loamy and silty" },
          { label: "Rich In", value: "Humus, organic matter" },
          { label: "Deficient In", value: "Varies with altitude" }
        ],
        blocks: [
          {
            label: "Regions",
            text: "Himalayan region, Western Ghats, and other forested mountainous tracts."
          },
          {
            label: "Formation",
            text: "Formed under forest cover with accumulation of organic matter."
          },
          {
            label: "Features",
            text: "Texture and fertility vary with altitude, slope, and vegetation cover."
          }
        ],
        crops: ["Tea", "Coffee", "Spices", "Tropical fruits", "Temperate fruits"]
      },
      {
        title: "Arid / Desert Soil",
        subtitle: "Dry soil of desert regions",
        coverage: "5.5% Coverage",
        gradient: "linear-gradient(135deg, #e8d39d, #f4e4ba)",
        shadow: "rgba(232, 211, 157, 0.25)",
        info: [
          { label: "Colour", value: "Light brown to reddish-brown" },
          { label: "Texture", value: "Porous, sandy, saline" },
          { label: "Rich In", value: "Phosphate, Calcium" },
          { label: "Deficient In", value: "Nitrogen, Humus, Moisture" }
        ],
        blocks: [
          {
            label: "Regions",
            text: "Western Rajasthan (Thar Desert), parts of Gujarat, southern Punjab, Haryana, and rain-shadow areas of Karnataka and Telangana."
          },
          {
            label: "Formation",
            text: "Formed in arid and semi-arid regions with very low rainfall. Due to high evaporation and lack of moisture, soil is not well-developed and contains high salt content."
          },
          {
            label: "Special Feature",
            text: "Contains kankar (calcium carbonate) layer in lower horizons which restricts water infiltration. When irrigated, these soils become productive. Also known as Usara soils."
          }
        ],
        crops: ["Bajra", "Jowar", "Barley", "Pulses", "Guar", "Mustard", "Wheat*", "Cotton*"]
      }
    ],

    comparisonTable: [
      ["Alluvial", "Most fertile, river-deposited", "Indo-Gangetic Plains", "Rice, Wheat"],
      ["Black", "Self-ploughing, moisture retention", "Deccan Plateau", "Cotton"],
      ["Red & Yellow", "Iron-rich, acidic", "Eastern & Southern India", "Millets, Groundnut"],
      ["Laterite", "Hardens like brick, leached", "Western Ghats, Kerala", "Cashew, Tea, Coffee"],
      ["Forest/Mountain", "Humus-rich, shallow", "Himalayan regions", "Tea, Temperate fruits"],
      ["Arid/Desert", "Sandy, saline, kankar layer", "Rajasthan (Thar Desert)", "Bajra, Jowar"]
    ],

    takeaways: [
      "Alluvial soil is the most widespread and fertile, covering about 46% of India's land area and supporting most of the population.",
      "Black soil (Regur) is ideal for cotton cultivation due to its excellent moisture retention capacity.",
      'Laterite soil gets its name from Latin "later" meaning brick, as it hardens on exposure to air.',
      "Forest and mountain soils vary with altitude and are rich in humus in many regions.",
      "Arid soils are sandy, saline, and require irrigation to become productive.",
      "Indian agriculture depends strongly on the type and distribution of soils across the country."
    ],

    quizMeta: {
      badge: "🌱 Knowledge Check",
      subtitle: "Challenge yourself with questions on India's Soil Types"
    },

    quiz: [
      {
        question: "Which soil type covers the largest area in India?",
        options: ["Alluvial Soil", "Black Soil", "Red Soil", "Laterite Soil"],
        answer: "Alluvial Soil",
        explanation: "Alluvial soil is the most widespread soil type in India, covering approximately 46% of the total land area."
      },
      {
        question: "Black soil is also known as:",
        options: ["Khadar", "Bhangar", "Regur", "Usara"],
        answer: "Regur",
        explanation: "Black soil is also known as Regur soil or Black Cotton Soil."
      },
      {
        question: "Which soil is best suited for cotton cultivation?",
        options: ["Alluvial Soil", "Black Soil", "Red Soil", "Arid Soil"],
        answer: "Black Soil",
        explanation: "Black soil is ideal for cotton cultivation due to its high moisture retention."
      },
      {
        question: "The red colour of red soil is due to:",
        options: ["Humus", "Nitrogen", "Iron oxide", "Lime"],
        answer: "Iron oxide",
        explanation: "Red soil gets its red colour due to the presence of iron oxide."
      },
      {
        question: "Laterite soil forms mainly in regions of:",
        options: ["Low rainfall", "Heavy rainfall and high temperature", "Glacial climate", "River deposition"],
        answer: "Heavy rainfall and high temperature",
        explanation: "Laterite soil forms in regions of high temperature and heavy rainfall with intense leaching."
      },
      {
        question: "Which soil is divided into Khadar and Bhangar?",
        options: ["Black Soil", "Alluvial Soil", "Laterite Soil", "Forest Soil"],
        answer: "Alluvial Soil",
        explanation: "Alluvial soil is divided into Khadar (new alluvium) and Bhangar (old alluvium)."
      },
      {
        question: "Which soil develops deep cracks in summer and is called self-ploughing soil?",
        options: ["Red Soil", "Black Soil", "Arid Soil", "Laterite Soil"],
        answer: "Black Soil",
        explanation: "Black soil develops deep cracks in summer and is known for its self-ploughing character."
      },
      {
        question: "Which soil is rich in humus and found in hilly areas?",
        options: ["Forest and Mountain Soil", "Alluvial Soil", "Arid Soil", "Black Soil"],
        answer: "Forest and Mountain Soil",
        explanation: "Forest and mountain soils are rich in humus and found in hilly and mountainous regions."
      },
      {
        question: "Which soil becomes yellow when hydrated?",
        options: ["Laterite Soil", "Black Soil", "Red Soil", "Arid Soil"],
        answer: "Red Soil",
        explanation: "Red soil becomes yellow when hydrated due to changes in iron compounds."
      },
      {
        question: 'Laterite soil gets its name from the Latin word "Later" meaning:',
        options: ["Stone", "Brick", "Red", "Clay"],
        answer: "Brick",
        explanation: 'Laterite comes from the Latin word "Later", meaning brick, because the soil hardens like brick on exposure.'
      },
      {
        question: "Which soil is often saline and contains kankar in lower layers?",
        options: ["Alluvial Soil", "Arid Soil", "Red Soil", "Forest Soil"],
        answer: "Arid Soil",
        explanation: "Arid soil is often saline and contains kankar or calcium carbonate in lower horizons."
      },
      {
        question: "Which soil is mainly derived from basaltic lava rocks of the Deccan Trap?",
        options: ["Red Soil", "Laterite Soil", "Black Soil", "Alluvial Soil"],
        answer: "Black Soil",
        explanation: "Black soil is formed from weathering of basaltic lava rocks of the Deccan Trap region."
      },
      {
        question: "Which soil is suitable for tea, coffee, and rubber?",
        options: ["Laterite Soil", "Red Soil", "Arid Soil", "Black Soil"],
        answer: "Laterite Soil",
        explanation: "Laterite soil, when treated properly, supports crops like tea, coffee, rubber, and cashew."
      },
      {
        question: "Which soil is the most agriculturally important in the northern plains?",
        options: ["Black Soil", "Alluvial Soil", "Forest Soil", "Arid Soil"],
        answer: "Alluvial Soil",
        explanation: "Alluvial soil is the most agriculturally important soil in the northern plains."
      },
      {
        question: "Which soil type is widely found in Tamil Nadu, Karnataka, and Andhra Pradesh?",
        options: ["Red Soil", "Alluvial Soil", "Arid Soil", "Forest Soil"],
        answer: "Red Soil",
        explanation: "Red soil is widely distributed in southern and eastern plateau regions including Tamil Nadu, Karnataka, and Andhra Pradesh."
      }
    ]
  },

  {
    id: "fundamental-rights-of-india",
    type: "fr",
    category: "Polity",
    title: "Fundamental Rights of India | Indian Constitution",
    subtitle: "Part III (Articles 12-35) of the Indian Constitution — The Magna Carta of India",
    thumbnail: rightsImg,
    readTime: "March 28, 2026",
    tags: ["Polity", "Constitution", "Rights", "UPSC"],

    intro: [
      "Fundamental Rights are the basic human rights enshrined in Part III (Articles 12-35) of the Indian Constitution. These rights guarantee civil liberties to all citizens, enabling them to live in peace and harmony. They are called fundamental because they are essential for the all-round development of individuals — material, intellectual, moral, and spiritual.",
      "Inspired by the Bill of Rights of the American Constitution, these rights are legally enforceable and act as a check on the power of the State. Dr. B.R. Ambedkar referred to them as the 'Conscience of the Constitution'."
    ],

    keyFact:
      "Originally, the Constitution had 7 Fundamental Rights. The 44th Amendment (1978) removed the Right to Property from the list, making it a legal right under Article 300-A.",

    rightsCards: [
      { name: "Right to Equality", articles: "Articles 14-18" },
      { name: "Right to Freedom", articles: "Articles 19-22" },
      { name: "Right against Exploitation", articles: "Articles 23-24" },
      { name: "Right to Freedom of Religion", articles: "Articles 25-28" },
      { name: "Cultural & Educational Rights", articles: "Articles 29-30" },
      { name: "Right to Constitutional Remedies", articles: "Article 32" }
    ],

    overviewTable: [
      ["1", "Right to Equality", "Articles 14-18"],
      ["2", "Right to Freedom", "Articles 19-22"],
      ["3", "Right against Exploitation", "Articles 23-24"],
      ["4", "Right to Freedom of Religion", "Articles 25-28"],
      ["5", "Cultural and Educational Rights", "Articles 29-30"],
      ["6", "Right to Constitutional Remedies", "Article 32"]
    ],

    articleBlocks: [
      {
        title: 'Article 12: Definition of "State"',
        text: 'For the purpose of Fundamental Rights, "State" includes Union Government and Parliament of India, State Governments and Legislatures, local authorities such as municipalities and panchayats, and other authorities such as LIC, ONGC, and SAIL.'
      },
      {
        title: "Article 13: Laws Inconsistent with Fundamental Rights",
        text: "All pre-constitutional and post-constitutional laws inconsistent with Fundamental Rights are void to the extent of inconsistency. This article establishes the doctrine of Judicial Review."
      },
      {
        title: "Right to Equality (Articles 14-18)",
        text: "This right guarantees equality before law, prohibits discrimination on grounds of religion, race, caste, sex or place of birth, ensures equality of opportunity in public employment, abolishes untouchability, and abolishes titles."
      },
      {
        title: "Right to Freedom (Articles 19-22)",
        text: "This right guarantees six freedoms, including speech and expression, assembly, association, movement, residence, and profession, along with safeguards in respect of conviction and protection of life and personal liberty."
      },
      {
        title: "Right against Exploitation (Articles 23-24)",
        text: "It prohibits traffic in human beings, begar, forced labour, and employment of children below 14 years in factories, mines, or hazardous occupations."
      },
      {
        title: "Right to Freedom of Religion (Articles 25-28)",
        text: "These articles make India a secular state and guarantee freedom of conscience, and the right to profess, practice, and propagate religion, subject to public order, morality, and health."
      },
      {
        title: "Cultural and Educational Rights (Articles 29-30)",
        text: "These protect the interests of minorities by allowing them to conserve their language, script, and culture and establish and administer educational institutions."
      },
      {
        title: "Right to Constitutional Remedies (Article 32)",
        text: "This right empowers citizens to move the Supreme Court directly for enforcement of Fundamental Rights and is the basis for issuing constitutional writs."
      }
    ],

    quote: {
      text: 'Article 32 is the "Heart and Soul" of the Constitution because it gives citizens the right to move the Supreme Court directly for enforcement of Fundamental Rights.',
      author: "— Dr. B.R. Ambedkar"
    },

    writs: [
      {
        name: "Habeas Corpus",
        meaning: "Produce the body",
        desc: "Issued to release a person who has been unlawfully detained."
      },
      {
        name: "Mandamus",
        meaning: "We command",
        desc: "Issued to command a public authority to perform its duty."
      },
      {
        name: "Prohibition",
        meaning: "To forbid",
        desc: "Issued by a higher court to prevent a lower court from exceeding its jurisdiction."
      },
      {
        name: "Certiorari",
        meaning: "To be certified",
        desc: "Issued to quash the order of a lower court or tribunal when it acts without jurisdiction."
      },
      {
        name: "Quo Warranto",
        meaning: "By what authority",
        desc: "Issued to question the legality of a person holding a public office."
      }
    ],

    takeaways: [
      "Fundamental Rights are in Part III of the Constitution.",
      "There are currently six Fundamental Rights.",
      "Article 32 is called the Heart and Soul of the Constitution.",
      "Judicial Review is rooted in Article 13.",
      "Writs are the constitutional tools used to enforce rights.",
      "Fundamental Rights protect liberty, equality, and dignity."
    ],

    note:
      "Fundamental Rights are not absolute. The State can impose reasonable restrictions in the interest of sovereignty, integrity, public order, morality, and security.",

    quizMeta: {
      badge: "⚖️ Knowledge Check",
      subtitle: "Challenge yourself with questions on Fundamental Rights"
    },

    quiz: [
      {
        question: "Fundamental Rights are contained in which Part of the Indian Constitution?",
        options: ["Part II", "Part IV", "Part III", "Part V"],
        answer: "Part III",
        explanation: "Fundamental Rights are enshrined in Part III (Articles 12-35) of the Indian Constitution. They are also called the Magna Carta of India."
      },
      {
        question: "How many Fundamental Rights are currently in the Indian Constitution?",
        options: ["Seven", "Six", "Eight", "Five"],
        answer: "Six",
        explanation: "There are currently six Fundamental Rights. Originally there were seven, but the 44th Amendment (1978) removed the Right to Property from the list of Fundamental Rights."
      },
      {
        question: 'Which article is called the "Heart and Soul" of the Constitution by Dr. B.R. Ambedkar?',
        options: ["Article 14", "Article 19", "Article 21", "Article 32"],
        answer: "Article 32",
        explanation: "Article 32 was called the Heart and Soul of the Constitution by Dr. Ambedkar. It gives citizens the right to approach the Supreme Court for enforcement of Fundamental Rights."
      },
      {
        question: "Which amendment removed the Right to Property from Fundamental Rights?",
        options: ["44th Amendment", "42nd Amendment", "86th Amendment", "73rd Amendment"],
        answer: "44th Amendment",
        explanation: "The 44th Constitutional Amendment (1978) removed the Right to Property from the list of Fundamental Rights. It is now a legal right under Article 300-A."
      },
      {
        question: "Which article guarantees equality before law and equal protection of laws?",
        options: ["Article 14", "Article 15", "Article 16", "Article 17"],
        answer: "Article 14",
        explanation: "Article 14 guarantees equality before the law and equal protection of the laws."
      },
      {
        question: "Which Fundamental Right abolishes untouchability?",
        options: ["Article 15", "Article 16", "Article 17", "Article 18"],
        answer: "Article 17",
        explanation: "Article 17 abolishes untouchability and forbids its practice in any form."
      },
      {
        question: "Which right includes freedom of speech and expression?",
        options: ["Right to Equality", "Right to Freedom", "Right against Exploitation", "Right to Religion"],
        answer: "Right to Freedom",
        explanation: "The Right to Freedom under Article 19 includes freedom of speech and expression along with other freedoms."
      },
      {
        question: "Which article prohibits traffic in human beings and forced labour?",
        options: ["Article 21", "Article 22", "Article 23", "Article 24"],
        answer: "Article 23",
        explanation: "Article 23 prohibits traffic in human beings, begar, and forced labour."
      },
      {
        question: "Which article prohibits employment of children in hazardous occupations?",
        options: ["Article 21A", "Article 23", "Article 24", "Article 25"],
        answer: "Article 24",
        explanation: "Article 24 prohibits the employment of children below 14 years in factories, mines, and hazardous occupations."
      },
      {
        question: "Which article protects the freedom of conscience and free profession, practice, and propagation of religion?",
        options: ["Article 25", "Article 26", "Article 27", "Article 28"],
        answer: "Article 25",
        explanation: "Article 25 guarantees freedom of conscience and the right to profess, practice, and propagate religion."
      },
      {
        question: "Which two articles can never be suspended even during a National Emergency?",
        options: ["Articles 20 and 21", "Articles 14 and 19", "Articles 25 and 26", "Articles 32 and 226"],
        answer: "Articles 20 and 21",
        explanation: "Articles 20 and 21 can never be suspended even during a National Emergency under Article 352."
      },
      {
        question: 'The concept of "Rule of Law" in Article 14 is derived from:',
        options: ["American Constitution", "French Constitution", "German Constitution", "British jurisprudence (A.V. Dicey)"],
        answer: "British jurisprudence (A.V. Dicey)",
        explanation: 'The concept of "Rule of Law" was propounded by British jurist A.V. Dicey. It implies absence of arbitrary power and equality before the law for all persons.'
      },
      {
        question: "Which case introduced the concept of creamy layer in reservation policy?",
        options: ["Kesavananda Bharati", "Maneka Gandhi", "Indra Sawhney", "Golaknath"],
        answer: "Indra Sawhney",
        explanation: "The Indra Sawhney case (1992) upheld OBC reservation and introduced the creamy layer principle."
      },
      {
        question: 'Which writ means "by what authority"?',
        options: ["Quo Warranto", "Mandamus", "Prohibition", "Certiorari"],
        answer: "Quo Warranto",
        explanation: 'Quo Warranto means "by what authority." It is issued to inquire into the legality of a person’s claim to hold a public office.'
      },
      {
        question: "Which writ is used to release a person from unlawful detention?",
        options: ["Habeas Corpus", "Mandamus", "Certiorari", "Prohibition"],
        answer: "Habeas Corpus",
        explanation: "Habeas Corpus is issued to produce a detained person before the court and release them if the detention is unlawful."
      }
    ]
  }
];

export default blogsData;