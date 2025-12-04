// North American Animal Database for TrackID by Arterburn Outdoors
// Comprehensive database organized by category

export const animals = {
  
  // ==================== BIG GAME - DEER ====================
  
  "white-tailed deer": {
    name: "White-tailed Deer",
    scientificName: "Odocoileus virginianus",
    category: "Big Game",
    description: "The most common large mammal in North America. Known for the white underside of their tail which they raise as an alarm signal.",
    habitat: "Forests, fields, meadows, and suburban areas throughout most of North America east of the Rocky Mountains.",
    range: "Found from southern Canada through the United States to Central America. Most abundant in the Midwest and Eastern US.",
    diet: "Herbivore - browses on leaves, twigs, fruits, nuts, grass, corn, alfalfa, and other vegetation.",
    trackDescription: "Heart-shaped hoofprints, typically 2-3 inches long. Two pointed toes with dewclaws visible in soft substrate. Walking stride of 14-18 inches.",
    behavior: "Crepuscular (most active at dawn and dusk). Bucks shed antlers annually. Does typically birth 1-3 fawns in spring.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/White-tailed_deer.jpg/640px-White-tailed_deer.jpg"
  },

  "mule deer": {
    name: "Mule Deer",
    scientificName: "Odocoileus hemionus",
    category: "Big Game",
    description: "Named for their large, mule-like ears. Distinguished from white-tailed deer by their black-tipped tail and bifurcated antlers.",
    habitat: "Western North America in desert, shrubland, and mountainous terrain up to 10,000 feet elevation.",
    range: "Western North America from Alaska to Mexico, primarily west of the Missouri River.",
    diet: "Herbivore - primarily browses shrubs, but also eats grasses, forbs, and agricultural crops.",
    trackDescription: "Similar to white-tailed deer but slightly larger, 2.5-3.5 inches. Heart-shaped with pointed tips.",
    behavior: "Known for their distinctive bounding gait called 'stotting' where all four feet hit the ground simultaneously.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Mule_Deer_at_Bryce_Canyon.jpg/640px-Mule_Deer_at_Bryce_Canyon.jpg"
  },

  "black-tailed deer": {
    name: "Black-tailed Deer",
    scientificName: "Odocoileus hemionus columbianus",
    category: "Big Game",
    description: "A subspecies of mule deer found along the Pacific coast. Named for their distinctive black or dark brown tail.",
    habitat: "Coastal rainforests, coniferous forests, and brushy areas of the Pacific Northwest.",
    range: "Pacific coast from northern California through Oregon, Washington, and into British Columbia and Alaska.",
    diet: "Herbivore - browse on shrubs, forbs, lichens, and fungi. Fond of blackberry, salal, and huckleberry.",
    trackDescription: "Heart-shaped hoofprints 2-3 inches long, similar to mule deer but slightly smaller on average.",
    behavior: "More secretive than mule deer. Prefer dense cover. Active primarily at dawn, dusk, and night.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Black-tailed_deer.jpg/640px-Black-tailed_deer.jpg"
  },

  // ==================== BIG GAME - BEAR ====================

  "black bear": {
    name: "Black Bear",
    scientificName: "Ursus americanus",
    category: "Big Game",
    description: "The most common bear in North America. Despite the name, they can be brown, cinnamon, or blonde in color.",
    habitat: "Forests, swamps, and mountainous regions. Highly adaptable and increasingly found in suburban areas.",
    range: "Throughout Canada, many US states, and into Mexico. Most common in Pacific Northwest, Rocky Mountains, Appalachians, and Great Lakes region.",
    diet: "Omnivore - berries, nuts, insects, fish, carrion, and human food/garbage when available.",
    trackDescription: "Front prints 4-5 inches, hind prints 6-7 inches long and human-like. Five toes with curved claws. Hind print shows full heel.",
    behavior: "Excellent climbers. Hibernate in winter. Generally shy but can become habituated to humans.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/01_Schwarzb%C3%A4r.jpg/640px-01_Schwarzb%C3%A4r.jpg"
  },

  "grizzly bear": {
    name: "Grizzly Bear",
    scientificName: "Ursus arctos horribilis",
    category: "Big Game",
    description: "A subspecies of brown bear known for the distinctive hump of muscle over their shoulders and grizzled fur tips.",
    habitat: "Mountain forests, alpine meadows, river valleys, and coastal areas with salmon runs.",
    range: "Alaska, western Canada, and limited areas of Montana, Wyoming, Idaho, and Washington.",
    diet: "Omnivore - salmon, berries, roots, rodents, carrion, and occasionally large mammals like elk calves.",
    trackDescription: "Front prints 5-6 inches wide with long straight claws (2-4 inches). Hind prints 10-12 inches long. Claws extend well beyond toe pads.",
    behavior: "More aggressive than black bears. Shoulder hump distinguishes them. Can run 35 mph despite size.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/GrizzlyBearJeanBeauworking.jpg/640px-GrizzlyBearJeanBeauworking.jpg"
  },

  "brown bear": {
    name: "Brown Bear",
    scientificName: "Ursus arctos",
    category: "Big Game",
    description: "Large coastal bears, particularly abundant in Alaska. Larger than interior grizzlies due to abundant salmon.",
    habitat: "Coastal areas, river systems with salmon runs, tundra, and mountain regions.",
    range: "Coastal Alaska, Kodiak Island, and parts of western Canada.",
    diet: "Omnivore - heavily reliant on salmon during runs, also berries, sedges, clams, and carrion.",
    trackDescription: "Very large prints - front 6-8 inches wide, hind 12-16 inches long. Long claws 2-4 inches visible in tracks.",
    behavior: "Can weigh over 1,000 pounds in coastal areas. Congregate at salmon streams. Hibernate 5-7 months.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Kamchatka_Brown_Bear_near_Dvuhyurtochnoe_on_2015-07-23.jpg/640px-Kamchatka_Brown_Bear_near_Dvuhyurtochnoe_on_2015-07-23.jpg"
  },

  "polar bear": {
    name: "Polar Bear",
    scientificName: "Ursus maritimus",
    category: "Big Game",
    description: "The largest land carnivore. Adapted to arctic life with white fur, large paws for swimming, and thick blubber.",
    habitat: "Arctic sea ice, coastal areas, and tundra regions.",
    range: "Arctic regions of Alaska, Canada, Greenland, Norway, and Russia.",
    diet: "Carnivore - primarily ringed seals and bearded seals. Also walrus, beluga whales, and carrion.",
    trackDescription: "Very large round prints 9-12 inches. Five toes with short curved claws. Fur between pads may blur tracks. Often show drag marks from large feet.",
    behavior: "Excellent swimmers covering 60+ miles. Don't truly hibernate but pregnant females den. Solitary except mothers with cubs.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Polar_Bear_-_Alaska_%28cropped%29.jpg/640px-Polar_Bear_-_Alaska_%28cropped%29.jpg"
  },

  // ==================== BIG GAME - MOOSE ====================

  "moose": {
    name: "Moose",
    scientificName: "Alces alces",
    category: "Big Game",
    description: "The largest member of the deer family. Bulls can weigh up to 1,500 pounds and have palmate antlers spanning 6 feet.",
    habitat: "Boreal and mixed deciduous forests, often near lakes, ponds, and wetlands.",
    range: "Alaska, Canada, northern Rocky Mountains, Upper Midwest, and New England.",
    diet: "Herbivore - aquatic plants, willows, birch, aspen. Consumes up to 70 pounds of food daily in summer.",
    trackDescription: "Very large heart-shaped prints, 5-7 inches long. Dewclaws often visible. Deep impressions due to their weight.",
    behavior: "Generally solitary. Excellent swimmers. Can be aggressive, especially cows with calves or bulls in rut.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Moose_superior.jpg/640px-Moose_superior.jpg"
  },

  "shiras moose": {
    name: "Shiras Moose",
    scientificName: "Alces alces shirasi",
    category: "Big Game",
    description: "The smallest North American moose subspecies, also called Yellowstone moose. Named after George Shiras III.",
    habitat: "Mountain forests, willow flats, and riparian areas of the Rocky Mountains.",
    range: "Rocky Mountain region including Wyoming, Montana, Idaho, Utah, Colorado, and parts of Washington and Oregon.",
    diet: "Herbivore - willows, aquatic plants, aspen, and various shrubs.",
    trackDescription: "Heart-shaped prints 4.5-6 inches long. Slightly smaller than other moose subspecies. Dewclaws often visible.",
    behavior: "More tolerant of human presence than other subspecies. Found at higher elevations in summer.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Shiras_Moose_Eating.jpg/640px-Shiras_Moose_Eating.jpg"
  },

  "alaska moose": {
    name: "Alaska Moose",
    scientificName: "Alces alces gigas",
    category: "Big Game",
    description: "The largest moose subspecies and largest member of the deer family. Bulls can exceed 1,600 pounds.",
    habitat: "Boreal forests, tundra edges, and riparian areas throughout Alaska.",
    range: "Alaska and adjacent Yukon Territory.",
    diet: "Herbivore - willows, birch, aspen, aquatic plants. Can eat 50-60 pounds daily.",
    trackDescription: "Very large heart-shaped prints 6-7+ inches long. Deep impressions. Dewclaws commonly register.",
    behavior: "Solitary except during rut. Bulls have massive palmate antlers up to 6 feet across.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Moose_in_Denali_National_Park.jpg/640px-Moose_in_Denali_National_Park.jpg"
  },

  "canadian moose": {
    name: "Canadian Moose",
    scientificName: "Alces alces andersoni",
    category: "Big Game",
    description: "Also called the Western moose. Medium-sized subspecies found across much of Canada.",
    habitat: "Boreal forests, mixed woodlands, and areas near lakes and wetlands.",
    range: "British Columbia east to Ontario, and south into Minnesota, Michigan, and North Dakota.",
    diet: "Herbivore - willows, birch, aquatic vegetation, and various browse species.",
    trackDescription: "Heart-shaped prints 5-6.5 inches long. Dewclaws often visible in soft ground.",
    behavior: "Semi-aquatic, spending much time in water during summer. Solitary except during breeding season.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Moose_at_Cape_Breton_Highlands_National_Park.jpg/640px-Moose_at_Cape_Breton_Highlands_National_Park.jpg"
  },

  "eastern moose": {
    name: "Eastern Moose",
    scientificName: "Alces alces americana",
    category: "Big Game",
    description: "Also called the Taiga moose. Found in eastern Canada and northeastern United States.",
    habitat: "Mixed and boreal forests, wetlands, and lake shores.",
    range: "Eastern Canada from Quebec to Newfoundland, and northeastern US including Maine, New Hampshire, Vermont.",
    diet: "Herbivore - aquatic plants, willows, birch, balsam fir, and maple.",
    trackDescription: "Heart-shaped prints 5-6 inches long. Similar to other moose subspecies.",
    behavior: "Population recovering after historic declines. Threatened by winter tick infestations due to climate change.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Moose_in_Gros_Morne_National_Park.jpg/640px-Moose_in_Gros_Morne_National_Park.jpg"
  },

  // ==================== BIG GAME - ELK ====================

  "elk": {
    name: "Elk (Wapiti)",
    scientificName: "Cervus canadensis",
    category: "Big Game",
    description: "One of the largest land mammals in North America. Bulls are known for their impressive antlers and distinctive bugling calls during rut.",
    habitat: "Mountain meadows, forests, and grasslands. Prefer edge habitats between forests and open areas.",
    range: "Rocky Mountain region, Pacific Northwest, and scattered populations in the East. Large herds in Yellowstone and Rocky Mountain National Parks.",
    diet: "Herbivore - grasses, forbs, bark, and shrubs depending on season.",
    trackDescription: "Large rounded hoofprints, 3.5-4.5 inches long. More rounded than deer tracks with blunter tips.",
    behavior: "Highly social, living in herds. Bulls bugle during fall mating season. Can run up to 40 mph.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Rocky_Mountain_Bull_Elk.jpg/640px-Rocky_Mountain_Bull_Elk.jpg"
  },

  // ==================== BIG GAME - SHEEP ====================

  "rocky mountain bighorn sheep": {
    name: "Rocky Mountain Bighorn Sheep",
    scientificName: "Ovis canadensis canadensis",
    category: "Big Game",
    description: "Iconic mountain sheep known for males' massive curling horns. Rams engage in dramatic head-butting battles.",
    habitat: "Alpine meadows, rocky cliffs, and mountain slopes. Prefer open areas near escape terrain.",
    range: "Rocky Mountains from Canada through Colorado and into New Mexico.",
    diet: "Herbivore - grasses, sedges, and forbs in summer; browse on shrubs in winter.",
    trackDescription: "Blocky hoofprints 3-3.5 inches long with slightly concave outer edges. Straighter than deer tracks.",
    behavior: "Social animals in gender-segregated groups. Rams fight during rut by charging and clashing horns.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Big_Horn_Sheep_in_Yellowstone.jpg/640px-Big_Horn_Sheep_in_Yellowstone.jpg"
  },

  "stone sheep": {
    name: "Stone Sheep",
    scientificName: "Ovis dalli stonei",
    category: "Big Game",
    description: "A subspecies of thinhorn sheep with variable coloring from nearly black to gray. Named after Andrew Stone.",
    habitat: "Subarctic mountain ranges, alpine tundra, and rocky slopes.",
    range: "Northern British Columbia and southern Yukon Territory.",
    diet: "Herbivore - grasses, sedges, lichens, and willow browse.",
    trackDescription: "Blocky hoofprints 2.5-3 inches long. Similar to other wild sheep.",
    behavior: "Live in rugged terrain for predator avoidance. Rams develop amber-colored curling horns.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Stone%27s_Sheep.jpg/640px-Stone%27s_Sheep.jpg"
  },

  "dall sheep": {
    name: "Dall Sheep",
    scientificName: "Ovis dalli dalli",
    category: "Big Game",
    description: "Pure white wild sheep of Alaska and northern Canada. Both sexes have horns, but rams' are much larger and curl.",
    habitat: "Subarctic alpine ridges, meadows, and steep rocky areas.",
    range: "Alaska, Yukon, Northwest Territories, and northern British Columbia.",
    diet: "Herbivore - grasses, sedges, moss, lichens, and willow.",
    trackDescription: "Blocky hoofprints 2.5-3 inches long. Outer edges relatively straight.",
    behavior: "Use cliffs to escape predators. Rams clash horns during fall rut. Can live 12-16 years.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Dall_Sheep_prior_to_full_curl_%28Ovis_dalli%29.jpg/640px-Dall_Sheep_prior_to_full_curl_%28Ovis_dalli%29.jpg"
  },

  "desert bighorn sheep": {
    name: "Desert Bighorn Sheep",
    scientificName: "Ovis canadensis nelsoni",
    category: "Big Game",
    description: "Adapted to hot, dry desert mountain ranges. Smaller and lighter colored than Rocky Mountain bighorns.",
    habitat: "Desert mountain ranges, rocky outcrops, and canyon country.",
    range: "Mojave and Sonoran deserts of California, Nevada, Arizona, Utah, and Mexico.",
    diet: "Herbivore - desert grasses, cacti, agave, and browse. Can go several days without water.",
    trackDescription: "Blocky hoofprints 2.5-3 inches long. May appear in sandy or rocky desert terrain.",
    behavior: "Active in cooler morning and evening hours. Extremely sure-footed on steep terrain.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Desert_Bighorn_Sheep_%28Ovis_canadensis_nelsoni%29.jpg/640px-Desert_Bighorn_Sheep_%28Ovis_canadensis_nelsoni%29.jpg"
  },

  // ==================== BIG GAME - OTHER ====================

  "caribou": {
    name: "Caribou (Reindeer)",
    scientificName: "Rangifer tarandus",
    category: "Big Game",
    description: "The only deer species where both sexes grow antlers. Known for long seasonal migrations.",
    habitat: "Arctic tundra, boreal forests, and mountain ranges.",
    range: "Alaska, Canada, and formerly northern contiguous US. Various herds and subspecies.",
    diet: "Herbivore - lichens (especially reindeer moss), grasses, sedges, and willow.",
    trackDescription: "Large crescent-shaped prints 4-5 inches. Very wide and rounded with large dewclaws that often register. Adapted for snow travel.",
    behavior: "Highly migratory, some herds travel 3,000+ miles annually. Live in large herds.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/20070818-0001-strolling_reindeer.jpg/640px-20070818-0001-strolling_reindeer.jpg"
  },

  "pronghorn": {
    name: "Pronghorn (Antelope)",
    scientificName: "Antilocapra americana",
    category: "Big Game",
    description: "The fastest land animal in North America, capable of 60 mph. Not a true antelope but the sole surviving member of its family.",
    habitat: "Open prairies, grasslands, sagebrush flats, and desert shrublands.",
    range: "Western North America from southern Canada through Mexico.",
    diet: "Herbivore - forbs, sagebrush, and various shrubs. Rarely eats grass.",
    trackDescription: "Distinctive two-toed prints 2.5-3.25 inches. No dewclaws. Wider at front than deer tracks. Pointed tips curve slightly outward.",
    behavior: "Rely on speed rather than hiding. Excellent eyesight. Migrate seasonally in some areas.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Antilocapra_americana.jpg/640px-Antilocapra_americana.jpg"
  },

  "rocky mountain goat": {
    name: "Rocky Mountain Goat",
    scientificName: "Oreamnos americanus",
    category: "Big Game",
    description: "Sure-footed climber of steep cliffs and alpine terrain. Has shaggy white coat and black dagger-like horns.",
    habitat: "Alpine and subalpine zones, steep rocky cliffs, and mountain peaks above timberline.",
    range: "Rocky Mountains from Alaska through Idaho and Montana. Introduced in some areas.",
    diet: "Herbivore - grasses, sedges, ferns, mosses, lichens, and shrubs.",
    trackDescription: "Square-ish prints 2.5-3.5 inches with slightly splayed toes. Rubbery pads help grip rock.",
    behavior: "Incredible climbers on near-vertical terrain. Seek mineral licks. Generally not aggressive but can be dangerous.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Mountain_Goat_USFWS.jpg/640px-Mountain_Goat_USFWS.jpg"
  },

  "bison": {
    name: "American Bison (Buffalo)",
    scientificName: "Bison bison",
    category: "Big Game",
    description: "The largest land mammal in North America. Once numbered 30-60 million, now recovering from near extinction.",
    habitat: "Prairies, grasslands, and open woodlands.",
    range: "Historically across central North America. Now in managed herds in parks and ranches.",
    diet: "Herbivore - primarily grasses and sedges. Grazes up to 11 hours daily.",
    trackDescription: "Very large round hoofprints 4.5-6 inches. Similar to cattle but more circular. Deep impressions due to weight (up to 2,000 lbs).",
    behavior: "Live in herds. Can run 35 mph. Wallow in dust to deter insects. Unpredictable and dangerous.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/American_bison_k5680-1.jpg/640px-American_bison_k5680-1.jpg"
  },

  "javelina": {
    name: "Javelina (Collared Peccary)",
    scientificName: "Pecari tajacu",
    category: "Big Game",
    description: "Pig-like animal native to the Americas. Not a true pig. Lives in herds called squadrons.",
    habitat: "Desert scrub, oak woodlands, and brushy areas of the Southwest.",
    range: "Arizona, New Mexico, Texas, and southward through Mexico and Central America.",
    diet: "Omnivore - prickly pear cactus, roots, fruits, grubs, and small animals.",
    trackDescription: "Two-toed hoofprints 1.5 inches. Smaller and more rounded than deer. Often in groups.",
    behavior: "Social herds of 6-12. Poor eyesight but excellent hearing and smell. Can be aggressive if cornered.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Collared_peccary02_-_melbourne_zoo.jpg/640px-Collared_peccary02_-_melbourne_zoo.jpg"
  },

  "wild turkey": {
    name: "Wild Turkey",
    scientificName: "Meleagris gallopavo",
    category: "Big Game",
    description: "Large ground-dwelling bird and ancestor of domestic turkey. Males display impressive tail fans.",
    habitat: "Hardwood and mixed forests with clearings, also farmland edges.",
    range: "Throughout most of the United States and parts of Mexico. Reintroduced successfully after near extinction.",
    diet: "Omnivore - acorns, nuts, seeds, berries, insects, and small reptiles.",
    trackDescription: "Three large forward toes 4-5 inches long with a small rear toe. Claws visible. Walking stride 6-12 inches.",
    behavior: "Social birds in flocks. Males gobble and strut during mating season. Can fly short distances at 55 mph.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Gall-dansen.jpg/640px-Gall-dansen.jpg"
  },

  "musk ox": {
    name: "Musk Ox",
    scientificName: "Ovibos moschatus",
    category: "Big Game",
    description: "Ancient arctic mammal with long shaggy coat. Both sexes have curved horns that meet in a 'boss' on the forehead.",
    habitat: "Arctic tundra, preferring river valleys and areas with willows.",
    range: "Arctic Canada, Greenland, and Alaska (reintroduced). Also northern Russia.",
    diet: "Herbivore - grasses, sedges, willows, and arctic flowers.",
    trackDescription: "Large round hoofprints 4-5 inches. Two toes similar to cattle. May show drag marks from long guard hairs.",
    behavior: "Form defensive circles with calves in center when threatened. Dense underwool (qiviut) is highly prized.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Ovibos_moschatus_qtl3.jpg/640px-Ovibos_moschatus_qtl3.jpg"
  },

  // ==================== SMALL GAME ====================

  "cottontail rabbit": {
    name: "Eastern Cottontail",
    scientificName: "Sylvilagus floridanus",
    category: "Small Game",
    description: "Most common rabbit in North America. Named for white cotton-ball tail.",
    habitat: "Brushy areas, field edges, gardens, and suburban areas with cover.",
    range: "Eastern and central North America from Canada to Central America.",
    diet: "Herbivore - grasses, clover, garden plants in summer; bark and twigs in winter.",
    trackDescription: "Hind prints 3-4 inches, elongated. Front prints 1 inch, round. Typical Y or triangle hopping pattern with larger hind prints ahead of front.",
    behavior: "Most active at dawn and dusk. Freezes when threatened. Does not burrow (uses forms).",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Eastern_Cottontail.jpg/640px-Eastern_Cottontail.jpg"
  },

  "jackrabbit": {
    name: "Black-tailed Jackrabbit",
    scientificName: "Lepus californicus",
    category: "Small Game",
    description: "Actually a hare, not a rabbit. Has extremely long ears and powerful hind legs for speed.",
    habitat: "Open deserts, prairies, grasslands, and agricultural areas.",
    range: "Western and central North America from Washington to Mexico.",
    diet: "Herbivore - grasses, forbs, cacti, sagebrush, and agricultural crops.",
    trackDescription: "Very long hind prints 4-5 inches. Front prints about 2 inches. Bounding stride can exceed 10 feet when running.",
    behavior: "Can reach speeds of 40 mph. Uses zigzag running pattern to escape predators. Does not burrow.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Jackrabbit.jpg/640px-Jackrabbit.jpg"
  },

  "snowshoe hare": {
    name: "Snowshoe Hare",
    scientificName: "Lepus americanus",
    category: "Small Game",
    description: "Named for large hind feet that act like snowshoes. Turns white in winter, brown in summer.",
    habitat: "Boreal forests and northern woodlands with dense understory.",
    range: "Alaska, Canada, northern United States including Rocky Mountains and Appalachians.",
    diet: "Herbivore - grasses, forbs, and leaves in summer; bark, twigs, and buds in winter.",
    trackDescription: "Very large hind prints 4-5 inches with widely spread toes. Front prints 1.5-2 inches. Hind prints land ahead of front in hopping.",
    behavior: "Primarily nocturnal and crepuscular. Population cycles dramatically every 10 years. Key prey for lynx.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Snowshoe_Hare%2C_Shirleys_Bay.jpg/640px-Snowshoe_Hare%2C_Shirleys_Bay.jpg"
  },

  "gray squirrel": {
    name: "Eastern Gray Squirrel",
    scientificName: "Sciurus carolinensis",
    category: "Small Game",
    description: "Most common tree squirrel in eastern North America. Expert at finding and caching nuts.",
    habitat: "Hardwood and mixed forests, parks, and suburban areas with mature trees.",
    range: "Eastern United States and southeastern Canada. Introduced to West Coast.",
    diet: "Primarily nuts and seeds, but also fungi, berries, insects, and bird eggs.",
    trackDescription: "Front prints 1 inch with 4 toes, hind 2 inches with 5 toes. Bounding pattern with larger hind prints landing ahead of and outside front prints.",
    behavior: "Diurnal and active year-round. Buries thousands of nuts (forgets many, planting trees). Very agile.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Sciurus_carolinensis_in_Prospect_Park.jpg/640px-Sciurus_carolinensis_in_Prospect_Park.jpg"
  },

  "fox squirrel": {
    name: "Fox Squirrel",
    scientificName: "Sciurus niger",
    category: "Small Game",
    description: "Largest tree squirrel in North America. Variable coloring from gray to rust-orange to black.",
    habitat: "Open woodlands, forest edges, and urban areas with large trees.",
    range: "Eastern and central United States. Introduced to some western areas.",
    diet: "Nuts, acorns, seeds, fruits, and occasionally insects and bird eggs.",
    trackDescription: "Front prints 1-1.5 inches with 4 toes, hind 2-2.5 inches with 5 toes. Larger than gray squirrel tracks.",
    behavior: "More terrestrial than gray squirrels. Spends more time foraging on ground. Active year-round.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Fox_squirrel.jpg/640px-Fox_squirrel.jpg"
  },

  "woodchuck": {
    name: "Woodchuck (Groundhog)",
    scientificName: "Marmota monax",
    category: "Small Game",
    description: "Large ground squirrel famous for Groundhog Day. Creates extensive burrow systems.",
    habitat: "Open woodlands, meadows, fields, and suburban areas. Prefers edge habitats.",
    range: "Eastern and central North America from Canada to Alabama.",
    diet: "Herbivore - grasses, clover, alfalfa, and garden vegetables. Eats heavily before hibernation.",
    trackDescription: "Front prints 2 inches with 4 toes, hind 2.5 inches with 5 toes. Well-defined toes with visible claws.",
    behavior: "True hibernator. Excavates burrows with multiple chambers and entrances. Primarily diurnal.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Marmota_monax_UL_04.jpg/640px-Marmota_monax_UL_04.jpg"
  },

  "yellow-bellied marmot": {
    name: "Yellow-bellied Marmot (Rockchuck)",
    scientificName: "Marmota flaviventris",
    category: "Small Game",
    description: "Western relative of the groundhog. Lives in rocky areas and is often seen sunning on boulders.",
    habitat: "Rocky slopes, talus fields, alpine meadows, and mountain terrain.",
    range: "Western North America from British Columbia to New Mexico.",
    diet: "Herbivore - grasses, forbs, flowers, and seeds.",
    trackDescription: "Front prints 1.5-2 inches with 4 toes, hind 2-2.5 inches with 5 toes. Similar to groundhog.",
    behavior: "Colonial, living in groups. Hibernates 7-8 months. Emits loud whistle when alarmed.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Marmota_flaviventris_in_Grand_Teton_NP.jpg/640px-Marmota_flaviventris_in_Grand_Teton_NP.jpg"
  },

  "ground squirrel": {
    name: "California Ground Squirrel",
    scientificName: "Otospermophilus beecheyi",
    category: "Small Game",
    description: "Common ground squirrel of the West. Lives in colonial burrow systems.",
    habitat: "Grasslands, open woodlands, rocky areas, and agricultural land.",
    range: "Western United States from Washington to Baja California.",
    diet: "Omnivore - seeds, nuts, fruits, insects, eggs, and some small vertebrates.",
    trackDescription: "Front prints 1 inch with 4 toes, hind 1.5 inches with 5 toes. Smaller than tree squirrels.",
    behavior: "Diurnal and social. Stand upright to watch for predators. May estivate in hot weather and hibernate in cold.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/California_ground_squirrel_at_Point_Lobos.jpg/640px-California_ground_squirrel_at_Point_Lobos.jpg"
  },

  "porcupine": {
    name: "North American Porcupine",
    scientificName: "Erethizon dorsatum",
    category: "Small Game",
    description: "Second largest rodent in North America. Covered with 30,000 sharp quills for defense.",
    habitat: "Forests, both coniferous and deciduous. Often found in trees.",
    range: "Throughout Canada, western and northeastern United States.",
    diet: "Herbivore - bark, twigs, leaves, and pine needles. Craves salt.",
    trackDescription: "Pigeon-toed prints with pebbly texture from pads. Front prints 2.5 inches with 4 toes, hind 3.5 inches with 5 toes. Tail drag common.",
    behavior: "Slow-moving and primarily nocturnal. Excellent climbers. Cannot throw quills but lashes tail when threatened.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Porcupine-BioDome.jpg/640px-Porcupine-BioDome.jpg"
  },

  "prairie dog": {
    name: "Black-tailed Prairie Dog",
    scientificName: "Cynomys ludovicianus",
    category: "Small Game",
    description: "Highly social burrowing rodent that lives in large colonies called 'towns.' Important keystone species.",
    habitat: "Short and mixed-grass prairies with well-drained soil.",
    range: "Great Plains from Canada to Mexico.",
    diet: "Herbivore - primarily grasses and forbs.",
    trackDescription: "Front prints 0.75 inch with 4 toes and long claws, hind 1 inch with 5 toes. Tracks often near burrow mounds.",
    behavior: "Highly social with complex communication including different alarm calls. Diurnal. Colony 'towns' can cover hundreds of acres.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Prairie_Dog.jpg/640px-Prairie_Dog.jpg"
  },

  // ==================== PREDATORS ====================

  "coyote": {
    name: "Coyote",
    scientificName: "Canis latrans",
    category: "Predator",
    description: "A highly adaptable canine known for its distinctive howl. Has thrived despite human expansion.",
    habitat: "Prairies, deserts, forests, mountains, and increasingly urban areas.",
    range: "Throughout North America from Alaska to Panama. Range has expanded significantly in past century.",
    diet: "Omnivore - small mammals, birds, insects, fruits, carrion, and human garbage.",
    trackDescription: "Oval prints 2-2.5 inches with four toes and visible claw marks. More elongated than dog tracks. Neat, straight trail.",
    behavior: "Can be solitary, paired, or in small family groups. Highly intelligent and adaptable. Vocalizations include howls, yips, and barks.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/2009-Coyote-Yosemite.jpg/640px-2009-Coyote-Yosemite.jpg"
  },

  "bobcat": {
    name: "Bobcat",
    scientificName: "Lynx rufus",
    category: "Predator",
    description: "A medium-sized wild cat named for its short, bobbed tail. Has distinctive ear tufts and spotted coat.",
    habitat: "Forests, swamps, deserts, and suburban edges. Most adaptable wild cat in North America.",
    range: "Throughout the continental United States, southern Canada, and Mexico.",
    diet: "Carnivore - rabbits, rodents, birds, and occasionally deer. Opportunistic hunter.",
    trackDescription: "Round prints 1.5-2.5 inches with four toes and NO claw marks. Asymmetrical with leading toe. M-shaped heel pad.",
    behavior: "Solitary, territorial, and secretive. Excellent stalkers. More commonly seen than mountain lions.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Bobcat2.jpg/640px-Bobcat2.jpg"
  },

  "lynx": {
    name: "Canada Lynx",
    scientificName: "Lynx canadensis",
    category: "Predator",
    description: "Medium-sized wild cat with distinctive long ear tufts, ruffed face, and huge snowshoe-like paws.",
    habitat: "Boreal forests with dense undergrowth and snowshoe hare populations.",
    range: "Alaska, Canada, and northern tier of contiguous US including Maine, Minnesota, Montana.",
    diet: "Carnivore - primarily snowshoe hares (up to 90% of diet). Also birds, rodents, and small deer.",
    trackDescription: "Round prints 3-4 inches, appearing very large due to fur around paws. Four toes, no claw marks. Tracks often look blurry in snow.",
    behavior: "Solitary and elusive. Population cycles with snowshoe hare numbers. Excellent climber but hunts on ground.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Lynx_canadensis_-_Kroschel_Wildlife_Center.jpg/640px-Lynx_canadensis_-_Kroschel_Wildlife_Center.jpg"
  },

  "mountain lion": {
    name: "Mountain Lion",
    scientificName: "Puma concolor",
    category: "Predator",
    description: "Also called cougar, puma, or panther. The largest wild cat in North America. Solitary and elusive.",
    habitat: "Mountains, forests, deserts, and swamps. Highly adaptable to various terrains.",
    range: "Western North America from Canada to South America. Small population in Florida (Florida panther).",
    diet: "Carnivore - primarily deer, but also elk, bighorn sheep, and smaller mammals.",
    trackDescription: "Round prints 3-4 inches, four toes with NO claw marks (retractable claws). Three-lobed heel pad. Front prints larger than rear.",
    behavior: "Solitary and territorial. Stalk and ambush hunters. Primarily crepuscular and nocturnal.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Mountain_Lion_in_Glacier_National_Park.jpg/640px-Mountain_Lion_in_Glacier_National_Park.jpg"
  },

  "gray wolf": {
    name: "Gray Wolf",
    scientificName: "Canis lupus",
    category: "Predator",
    description: "The largest wild canine. Highly social pack animals that are apex predators in their ecosystems.",
    habitat: "Forests, tundra, mountains, and grasslands in remote wilderness areas.",
    range: "Alaska, Canada, northern Rocky Mountains, Upper Midwest. Recovering in some former ranges.",
    diet: "Carnivore - primarily large ungulates like elk, deer, moose, and caribou. Hunts in coordinated packs.",
    trackDescription: "Large oval prints 4-5 inches with four toes and claw marks. Larger than coyote. X pattern visible between toes and heel pad.",
    behavior: "Live in packs of 5-10 with alpha pair. Territory can span 100+ square miles. Highly social with complex communication.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Eurasian_wolf_2.jpg/640px-Eurasian_wolf_2.jpg"
  },

  "red fox": {
    name: "Red Fox",
    scientificName: "Vulpes vulpes",
    category: "Predator",
    description: "The most widespread wild canine in the world. Known for intelligence and adaptability.",
    habitat: "Forests, grasslands, mountains, deserts, and suburban/urban areas.",
    range: "Throughout North America except for the far north and parts of the Southwest.",
    diet: "Omnivore - rodents, rabbits, birds, insects, fruits, berries, and garbage in urban areas.",
    trackDescription: "Oval prints 1.75-2.5 inches with four toes and claw marks. Very neat, almost in a straight line. Fur may blur print edges in winter.",
    behavior: "Solitary hunters. Cache excess food. Primarily nocturnal and crepuscular. Known for playful behavior.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Fox_%28Vulpes_vulpes%29_-British_Wildlife_Centre-8.jpg/640px-Red_Fox_%28Vulpes_vulpes%29_-British_Wildlife_Centre-8.jpg"
  },

  "gray fox": {
    name: "Gray Fox",
    scientificName: "Urocyon cinereoargenteus",
    category: "Predator",
    description: "The only canine that can climb trees. Has a grizzled gray coat with rusty-red on sides and legs.",
    habitat: "Deciduous and mixed forests, brushy areas, and rocky terrain.",
    range: "Eastern United States, Southwest, and into Central America.",
    diet: "Omnivore - small mammals, birds, insects, and significant amounts of fruit and vegetation.",
    trackDescription: "Smaller oval prints 1.5-1.75 inches. Four toes with semi-retractable claws that may not show. Rounder than red fox.",
    behavior: "Climbs trees to escape predators or hunt prey. More secretive than red fox. Primarily nocturnal.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Urocyon_cinereoargenteus_Gray_Fox.jpg/640px-Urocyon_cinereoargenteus_Gray_Fox.jpg"
  },

  "kit fox": {
    name: "Kit Fox",
    scientificName: "Vulpes macrotis",
    category: "Predator",
    description: "Smallest wild canine in North America. Has oversized ears for heat dissipation and acute hearing.",
    habitat: "Arid deserts, scrublands, and grasslands with sandy or loose soil.",
    range: "Southwestern United States and northern Mexico.",
    diet: "Carnivore - primarily kangaroo rats, rabbits, insects, and reptiles.",
    trackDescription: "Very small oval prints 1-1.5 inches with four toes. Claws may not show due to fur on paws. Delicate appearance.",
    behavior: "Nocturnal to avoid heat. Digs or uses existing burrows. Monogamous pairs. Very fast for their size.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Vulpes_macrotis_mutica.jpg/640px-Vulpes_macrotis_mutica.jpg"
  },

  // ==================== FUR-BEARERS ====================

  "mink": {
    name: "American Mink",
    scientificName: "Neogale vison",
    category: "Fur-bearer",
    description: "Semi-aquatic weasel with luxurious dark brown fur. Agile hunter on land and in water.",
    habitat: "Near water - streams, rivers, lakes, and marshes with dense vegetation.",
    range: "Throughout most of North America except the Southwest deserts and extreme north.",
    diet: "Carnivore - fish, crayfish, frogs, muskrats, birds, eggs, and small mammals.",
    trackDescription: "Five toes with claws on all prints. Prints 1-2 inches, often showing only 4 toes. Bound pattern with paired prints typical.",
    behavior: "Solitary and territorial. Mostly nocturnal. Excellent swimmers. Kill prey with bite to neck.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Mink-face.jpg/640px-Mink-face.jpg"
  },

  "river otter": {
    name: "North American River Otter",
    scientificName: "Lontra canadensis",
    category: "Fur-bearer",
    description: "Playful, semi-aquatic mammal known for sliding on snow and mud banks.",
    habitat: "Rivers, lakes, ponds, marshes, and coastal areas with good water quality and fish.",
    range: "Throughout Canada and United States where suitable habitat exists. Recovering in many former ranges.",
    diet: "Carnivore - primarily fish, but also crayfish, frogs, mussels, and occasional birds or small mammals.",
    trackDescription: "Five toes with webbing (may not show) and claws. Front prints 2-3 inches, hind 3-4 inches. Toes often splayed. Tail drag and slide marks common.",
    behavior: "Highly social and playful. Excellent swimmers diving to 60 feet. Communicate with chirps, whistles, and growls.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/North_American_river_otter_%28Lontra_canadensis%29.jpg/640px-North_American_river_otter_%28Lontra_canadensis%29.jpg"
  },

  "muskrat": {
    name: "Muskrat",
    scientificName: "Ondatra zibethicus",
    category: "Fur-bearer",
    description: "Semi-aquatic rodent that builds lodges similar to beavers but smaller. Named for musky odor.",
    habitat: "Marshes, ponds, lakes, and slow-moving streams with cattails and other vegetation.",
    range: "Throughout most of North America except extreme north and south.",
    diet: "Primarily herbivore - cattails, rushes, water lilies. Occasionally eats mussels, crayfish, and fish.",
    trackDescription: "Five toes on all feet but inner toe tiny. Hind prints 2-3 inches with partial webbing. Skinny tail drag often visible.",
    behavior: "Builds dome-shaped lodges of vegetation. Active year-round including under ice. Primarily crepuscular.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Muskrat_in_a_pond.jpg/640px-Muskrat_in_a_pond.jpg"
  },

  "beaver": {
    name: "North American Beaver",
    scientificName: "Castor canadensis",
    category: "Fur-bearer",
    description: "North America's largest rodent. Master engineers that dramatically reshape landscapes with dams.",
    habitat: "Rivers, streams, ponds, lakes, and wetlands with trees nearby.",
    range: "Throughout North America except for extreme north and desert Southwest.",
    diet: "Herbivore - bark, twigs, leaves of trees (especially aspen, willow, birch), and aquatic plants.",
    trackDescription: "Hind prints 5-6 inches with webbing between toes. Front prints 2.5-3 inches with five toes. Tail drag often obscures tracks.",
    behavior: "Build dams and lodges. Primarily nocturnal. Mate for life. Can hold breath for 15 minutes.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/American_Beaver.jpg/640px-American_Beaver.jpg"
  },

  "american marten": {
    name: "American Marten (Pine Marten)",
    scientificName: "Martes americana",
    category: "Fur-bearer",
    description: "House-cat sized member of weasel family with soft, valuable fur. Agile tree climber.",
    habitat: "Mature coniferous and mixed forests with abundant deadfall.",
    range: "Alaska, Canada, northern US including New England, Great Lakes, and Rocky Mountains.",
    diet: "Carnivore - primarily squirrels and voles, also birds, eggs, insects, and fruit.",
    trackDescription: "Five toes with semi-retractable claws. Prints 1.5-2 inches, often paired. May not show all toes clearly.",
    behavior: "Solitary and territorial. Active day and night. Excellent climber but mainly hunts on ground.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/American_Marten.jpg/640px-American_Marten.jpg"
  },

  "weasel": {
    name: "Long-tailed Weasel",
    scientificName: "Neogale frenata",
    category: "Fur-bearer",
    description: "Slender, agile predator that turns white in winter in northern regions. Fierce hunter despite small size.",
    habitat: "Diverse - forests, grasslands, farmland, and suburban areas with prey and cover.",
    range: "Throughout most of North America from Canada to South America.",
    diet: "Carnivore - mice, voles, rabbits, chipmunks, birds, and eggs. Kills prey larger than itself.",
    trackDescription: "Five toes but usually only 4 visible. Tiny prints under 1 inch. Bound pattern with pairs of prints 8-24 inches apart.",
    behavior: "Bold and curious despite size. Very high metabolism requires eating 40% of body weight daily.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Mustela_frenata_-_Long-tailed_Weasel.jpg/640px-Mustela_frenata_-_Long-tailed_Weasel.jpg"
  },

  "fisher": {
    name: "Fisher",
    scientificName: "Pekania pennanti",
    category: "Fur-bearer",
    description: "Large member of weasel family despite name, doesn't typically eat fish. One of few predators of porcupine.",
    habitat: "Dense coniferous and mixed forests with continuous canopy.",
    range: "Canada, New England, Great Lakes, Pacific Northwest, and northern Rockies.",
    diet: "Carnivore - snowshoe hares, porcupines, squirrels, birds, and carrion.",
    trackDescription: "Five toes with semi-retractable claws. Prints 2-3 inches, larger than marten. Often show clear heel pad.",
    behavior: "Solitary and secretive. Active day and night. Excellent climber. Attacks porcupines by biting face.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Pekania_pennanti_1.jpg/640px-Pekania_pennanti_1.jpg"
  },

  "black-footed ferret": {
    name: "Black-footed Ferret",
    scientificName: "Mustela nigripes",
    category: "Fur-bearer",
    description: "One of North America's most endangered mammals. Depends entirely on prairie dogs for food and shelter.",
    habitat: "Prairie dog colonies in short and mixed-grass prairies.",
    range: "Historically Great Plains. Now only in reintroduced populations in Wyoming, South Dakota, Montana, and Arizona.",
    diet: "Carnivore - almost exclusively prairie dogs. One ferret needs 100+ prairie dogs per year.",
    trackDescription: "Five toes with claws. Small prints about 1 inch. Similar to other small mustelids.",
    behavior: "Nocturnal. Lives in prairie dog burrows. Nearly extinct by 1987, now slowly recovering through captive breeding.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Black-footed_Ferret_2.jpg/640px-Black-footed_Ferret_2.jpg"
  },

  "badger": {
    name: "American Badger",
    scientificName: "Taxidea taxus",
    category: "Fur-bearer",
    description: "Powerful digger with distinctive white stripe down face. Builds extensive burrow systems.",
    habitat: "Open grasslands, prairies, farmland, and desert areas with soft soil for digging.",
    range: "Central and western North America from Canada to Mexico.",
    diet: "Carnivore - ground squirrels, prairie dogs, gophers, and other burrowing rodents.",
    trackDescription: "Five toes with very long front claws (1-2 inches). Front prints 2-2.5 inches wide with pigeon-toed stance. Hind prints smaller.",
    behavior: "Solitary and primarily nocturnal. Extremely powerful digger. Can dig faster than a human with a shovel.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Taxidea_taxus_%28Point_Reyes%2C_2007%29.jpg/640px-Taxidea_taxus_%28Point_Reyes%2C_2007%29.jpg"
  },

  "wolverine": {
    name: "Wolverine",
    scientificName: "Gulo gulo",
    category: "Fur-bearer",
    description: "Largest terrestrial member of weasel family. Incredibly strong for size with fearless reputation.",
    habitat: "Remote boreal forests, alpine tundra, and arctic regions.",
    range: "Alaska, Canada, and small numbers in northern Rockies (Montana, Idaho, Wyoming).",
    diet: "Omnivore - carrion, small to medium mammals, birds, eggs, berries. Can drive bears from kills.",
    trackDescription: "Five toes with semi-retractable claws. Large prints 4-5 inches. Wide, somewhat plantigrade. May show clear heel pad.",
    behavior: "Solitary with huge territories (up to 500 sq miles). Active year-round. Incredibly strong - can carry prey its own weight for miles.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Wolverine_on_rock.jpg/640px-Wolverine_on_rock.jpg"
  },

  "opossum": {
    name: "Virginia Opossum",
    scientificName: "Didelphis virginiana",
    category: "Fur-bearer",
    description: "North America's only marsupial. Known for 'playing possum' when threatened.",
    habitat: "Forests, farmland, and urban areas. Prefer areas near water.",
    range: "Eastern and central North America, expanding westward. From Costa Rica to southern Canada.",
    diet: "Omnivore - insects, carrion, fruits, eggs, garbage. Eat many ticks (up to 5,000 per season).",
    trackDescription: "Distinctive star-shaped hind prints 2 inches with opposable thumb at right angle. Front prints 1.5-2 inches with spread toes. Tail drag often visible.",
    behavior: "Nocturnal and generally solitary. Excellent climbers with prehensile tail. Immune to most snake venoms.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Opossum_2.jpg/640px-Opossum_2.jpg"
  },

  "raccoon": {
    name: "Raccoon",
    scientificName: "Procyon lotor",
    category: "Fur-bearer",
    description: "Highly intelligent and adaptable mammal known for its distinctive black mask and ringed tail.",
    habitat: "Forests near water, marshes, and increasingly urban and suburban areas.",
    range: "Throughout most of North America from southern Canada through Central America.",
    diet: "Omnivore - crayfish, fish, frogs, eggs, fruits, nuts, insects, and human garbage.",
    trackDescription: "Hand-like prints with five long toes. Front prints 2-3 inches, hind prints 3-4 inches resembling small human handprints. Often found in pairs.",
    behavior: "Nocturnal. Excellent climbers and swimmers. Known for 'washing' food (actually feeling with sensitive paws). Very dexterous.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Procyon_lotor_%28Common_raccoon%29.jpg/640px-Procyon_lotor_%28Common_raccoon%29.jpg"
  },

  "striped skunk": {
    name: "Striped Skunk",
    scientificName: "Mephitis mephitis",
    category: "Fur-bearer",
    description: "Known for their bold black and white coloring and potent defensive spray.",
    habitat: "Forests, grasslands, farmland, and suburban areas. Often den under buildings.",
    range: "Throughout most of North America from Canada to Mexico.",
    diet: "Omnivore - insects, grubs, small mammals, eggs, fruits, and garbage.",
    trackDescription: "Five toes on all feet with long front claws for digging. Prints 1-2 inches. Front claws may extend 1 inch beyond toe pads.",
    behavior: "Nocturnal and generally docile unless threatened. Spray can reach 15 feet and be smelled for a mile. Warn before spraying.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Striped_Skunk.jpg/640px-Striped_Skunk.jpg"
  },

  "armadillo": {
    name: "Nine-banded Armadillo",
    scientificName: "Dasypus novemcinctus",
    category: "Fur-bearer",
    description: "Only armadillo species in the US. Has armored shell and always gives birth to identical quadruplets.",
    habitat: "Forests, scrublands, and grasslands with loose soil for digging.",
    range: "South-central and southeastern United States. Range expanding northward.",
    diet: "Primarily insects, especially ants and beetles. Also grubs, worms, and some plant matter.",
    trackDescription: "Four toes on front with prominent claws, five on rear. Prints 1.5-2 inches. Often drag marks from shell and tail.",
    behavior: "Primarily nocturnal. Can walk underwater across stream bottoms. Poor eyesight but good sense of smell.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Nine-banded_Armadillo.jpg/640px-Nine-banded_Armadillo.jpg"
  },

  // ==================== DOMESTIC ====================

  "horse": {
    name: "Horse",
    scientificName: "Equus caballus",
    category: "Domestic",
    description: "Domesticated equine used for riding, draft work, and recreation. Also exists as feral mustangs.",
    habitat: "Farms, ranches, and feral herds in open rangelands.",
    range: "Throughout North America. Feral populations in Western US.",
    diet: "Herbivore - grasses, hay, and grains.",
    trackDescription: "Single large round or oval hoofprint 4-6 inches. Horseshoe marks if shod. Smooth outer edge if unshod.",
    behavior: "Social herd animals. Feral mustangs live in bands led by a dominant stallion.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Nokota_Horses_cropped.jpg/640px-Nokota_Horses_cropped.jpg"
  },

  "donkey": {
    name: "Donkey (Burro)",
    scientificName: "Equus asinus",
    category: "Domestic",
    description: "Domesticated member of horse family. Feral populations called burros exist in the Southwest.",
    habitat: "Farms, ranches, and feral burros in desert and mountain terrain.",
    range: "Throughout North America. Feral burros in Southwest deserts.",
    diet: "Herbivore - grasses, shrubs, and browse. Can survive on poorer forage than horses.",
    trackDescription: "Single hoofprint 3-4.5 inches, smaller and more oval than horse. Slightly more upright walls.",
    behavior: "Sure-footed and hardy. Used as guard animals for livestock. Feral burros are protected on public lands.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Donkey_in_Clovelly%2C_North_Devon%2C_England.jpg/640px-Donkey_in_Clovelly%2C_North_Devon%2C_England.jpg"
  },

  "cattle": {
    name: "Cattle (Cow)",
    scientificName: "Bos taurus",
    category: "Domestic",
    description: "Domesticated bovine raised for meat, milk, and leather. Various breeds exist.",
    habitat: "Farms, ranches, and open range.",
    range: "Throughout North America.",
    diet: "Herbivore - primarily grasses, hay, and supplemental feed.",
    trackDescription: "Split hoof 3-4.5 inches. Two rounded toe impressions. More rounded and symmetrical than deer or elk.",
    behavior: "Social herd animals. Feral cattle exist in some remote areas. Various behaviors by breed.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Cow_female_black_white.jpg/640px-Cow_female_black_white.jpg"
  },

  "domestic pig": {
    name: "Domestic Pig",
    scientificName: "Sus scrofa domesticus",
    category: "Domestic",
    description: "Domesticated swine. Can become feral and interbreed with wild boar creating destructive feral populations.",
    habitat: "Farms. Feral pigs in forests, swamps, and agricultural areas.",
    range: "Throughout North America. Feral populations expanding in South and spreading.",
    diet: "Omnivore - grains, vegetables, and will eat almost anything when feral.",
    trackDescription: "Split hoof 2-3 inches. Rounded tips unlike deer. Dewclaws may show. Similar to wild boar but often smaller.",
    behavior: "Intelligent and social. Feral pigs are destructive and reproduce rapidly.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Sow_with_piglet.jpg/640px-Sow_with_piglet.jpg"
  },

  "domestic goat": {
    name: "Domestic Goat",
    scientificName: "Capra aegagrus hircus",
    category: "Domestic",
    description: "Domesticated for milk, meat, and fiber. Hardy and adaptable browsers.",
    habitat: "Farms and ranches. Feral populations on some islands and rangelands.",
    range: "Throughout North America.",
    diet: "Herbivore - browsers preferring shrubs, weeds, and brush over grass.",
    trackDescription: "Split hoof 2-2.5 inches. Slightly more pointed than sheep. May show outside edge of hooves.",
    behavior: "Curious and agile climbers. Social herd animals. Can be escape artists.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hausziege_04.jpg/640px-Hausziege_04.jpg"
  },

  "domestic sheep": {
    name: "Domestic Sheep",
    scientificName: "Ovis aries",
    category: "Domestic",
    description: "Domesticated for wool, meat, and milk. Require shearing and are more dependent on herding than goats.",
    habitat: "Farms and ranches, especially in arid rangelands.",
    range: "Throughout North America.",
    diet: "Herbivore - primarily grazers preferring grasses and forbs.",
    trackDescription: "Split hoof 2-2.5 inches. Blunter and more rounded than goat. Outer edges more rounded.",
    behavior: "Strong flocking instinct. Follow a leader. Vulnerable to predators without guardian animals.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flock_of_sheep.jpg/640px-Flock_of_sheep.jpg"
  },

  "dog": {
    name: "Domestic Dog",
    scientificName: "Canis lupus familiaris",
    category: "Domestic",
    description: "Domesticated descendant of wolves. Tracks commonly confused with wild canids.",
    habitat: "Urban, suburban, and rural areas wherever humans live.",
    range: "Worldwide with humans.",
    diet: "Omnivore - commercial pet food, but also scavenges when stray.",
    trackDescription: "Oval prints vary by breed from 1.5-4 inches. Four toes with claws. More splayed and less neat than wild canids. Variable stride.",
    behavior: "Tracks often appear in erratic patterns unlike wild canids. May be with human footprints.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Cute_dog.jpg/640px-Cute_dog.jpg"
  },

  "cat": {
    name: "Domestic Cat",
    scientificName: "Felis catus",
    category: "Domestic",
    description: "Domesticated small feline. Feral populations impact wildlife significantly.",
    habitat: "Urban, suburban, and rural areas. Feral colonies form where food available.",
    range: "Worldwide with humans.",
    diet: "Carnivore - commercial pet food, but excellent hunters of birds, rodents, and reptiles.",
    trackDescription: "Round prints 1-1.5 inches. Four toes, NO claw marks (retractable). Very similar to but smaller than bobcat.",
    behavior: "Tracks often near human habitation. Feral cats may range far from buildings.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/640px-Cat03.jpg"
  },

  // ==================== RODENTS ====================

  "deer mouse": {
    name: "Deer Mouse",
    scientificName: "Peromyscus maniculatus",
    category: "Rodent",
    description: "Most abundant native mouse in North America. Named for deer-like coloring.",
    habitat: "Almost everywhere - forests, grasslands, deserts, mountains, and buildings.",
    range: "Throughout North America except Southeast and extreme Arctic.",
    diet: "Omnivore - seeds, nuts, fruits, insects, and fungi.",
    trackDescription: "Tiny prints under 0.5 inch. Four toes on front, five on rear. Tail drag often visible. Bounding pattern.",
    behavior: "Nocturnal and excellent climber. Can carry hantavirus. Very prolific breeder.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Deer_mouse_Peromyscus.jpg/640px-Deer_mouse_Peromyscus.jpg"
  },

  "norway rat": {
    name: "Norway Rat (Brown Rat)",
    scientificName: "Rattus norvegicus",
    category: "Rodent",
    description: "Introduced species now found worldwide. Larger than native rats. Major pest and disease carrier.",
    habitat: "Urban and rural areas near human habitation, sewers, dumps.",
    range: "Throughout North America in human-altered environments.",
    diet: "Omnivore - grains, garbage, meat, eggs, and almost anything edible.",
    trackDescription: "Front prints 0.5-0.75 inch with 4 toes, hind 0.75-1 inch with 5 toes. Tail drag often visible. Larger than mouse tracks.",
    behavior: "Nocturnal and colonial. Excellent swimmers. Cautious of new objects (neophobic).",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Rattus_norvegicus_-_Brown_rat_02.jpg/640px-Rattus_norvegicus_-_Brown_rat_02.jpg"
  },

  "pocket gopher": {
    name: "Pocket Gopher",
    scientificName: "Thomomys spp.",
    category: "Rodent",
    description: "Burrowing rodent with fur-lined cheek pouches. Creates extensive tunnel systems. Rarely seen above ground.",
    habitat: "Prairies, meadows, forests, and gardens with soft, workable soil.",
    range: "Western and central North America.",
    diet: "Herbivore - roots, tubers, bulbs, and surface vegetation pulled into tunnels.",
    trackDescription: "Front prints 0.5 inch with 4 toes and long claws, hind 0.75 inch with 5 toes. Rarely seen - usually just mound evidence.",
    behavior: "Solitary and aggressive. Active year-round. Push soil to surface creating fan-shaped mounds.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Pocket-Gopher_Ano-Nuevo-SP.jpg/640px-Pocket-Gopher_Ano-Nuevo-SP.jpg"
  },

  "mole": {
    name: "Eastern Mole",
    scientificName: "Scalopus aquaticus",
    category: "Rodent",
    description: "Subterranean insectivore with powerful digging forelimbs. Creates surface tunnels and molehills.",
    habitat: "Lawns, gardens, meadows, and woodlands with moist, loose soil.",
    range: "Eastern North America from Canada to Florida and Texas.",
    diet: "Carnivore/insectivore - earthworms, grubs, insects, and larvae.",
    trackDescription: "Very rarely seen above ground. If visible: large front feet turned outward, 5 toes, about 1 inch. Hind feet smaller.",
    behavior: "Nearly blind. Creates extensive tunnel systems. Can dig 15 feet per hour. Solitary except when breeding.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Close-up_of_mole.jpg/640px-Close-up_of_mole.jpg"
  },

  "shrew": {
    name: "Short-tailed Shrew",
    scientificName: "Blarina brevicauda",
    category: "Rodent",
    description: "Tiny venomous mammal with extremely high metabolism. One of few venomous mammals in North America.",
    habitat: "Forests, grasslands, and wetlands with abundant leaf litter.",
    range: "Eastern North America.",
    diet: "Carnivore/insectivore - insects, earthworms, snails, salamanders, and small mice.",
    trackDescription: "Extremely tiny prints under 0.25 inch with 5 toes on all feet. Tail drag may be visible. Often in runways.",
    behavior: "Must eat every few hours or die. Active day and night. Venomous saliva helps subdue prey.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Blarina_brevicauda.jpg/640px-Blarina_brevicauda.jpg"
  },

  "nutria": {
    name: "Nutria (Coypu)",
    scientificName: "Myocastor coypus",
    category: "Rodent",
    description: "Large semi-aquatic rodent introduced from South America. Destructive invasive species.",
    habitat: "Marshes, swamps, ponds, and streams with abundant aquatic vegetation.",
    range: "Gulf Coast states, Pacific Northwest, and scattered other locations.",
    diet: "Herbivore - primarily aquatic plants, roots, and tubers. Damages wetlands and crops.",
    trackDescription: "Hind prints 4-5 inches with 4 webbed toes (5th toe not webbed). Front prints about 2 inches with 5 toes, no webbing. Tail drag often visible.",
    behavior: "Semi-aquatic and primarily nocturnal. Can eat 25% of body weight daily. Breeds prolifically.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Nutria-orange_teeth_2.jpg/640px-Nutria-orange_teeth_2.jpg"
  },

  "chipmunk": {
    name: "Eastern Chipmunk",
    scientificName: "Tamias striatus",
    category: "Rodent",
    description: "Small striped squirrel with cheek pouches for carrying food. Energetic and vocal.",
    habitat: "Deciduous forests, woodland edges, and suburban areas with cover.",
    range: "Eastern North America from Canada to the Gulf Coast.",
    diet: "Omnivore - nuts, seeds, berries, fungi, insects, and occasionally bird eggs.",
    trackDescription: "Tiny prints with front 0.5 inch (4 toes) and hind 0.75 inch (5 toes). Bound pattern similar to squirrel but much smaller.",
    behavior: "Digs extensive burrows with food storage chambers. Hibernates but wakes to eat cached food.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Chipmunk-on-rock.jpg/640px-Chipmunk-on-rock.jpg"
  },

  // ==================== OTHER BIRDS ====================

  "great blue heron": {
    name: "Great Blue Heron",
    scientificName: "Ardea herodias",
    category: "Bird",
    description: "Largest heron in North America. Patient stalking hunter in shallow waters.",
    habitat: "Wetlands, shorelines, rivers, ponds, and flooded fields. Nests colonially in trees.",
    range: "Throughout North America from Alaska to Mexico and Caribbean.",
    diet: "Carnivore - fish, frogs, snakes, small mammals, and large insects.",
    trackDescription: "Large tracks 6-7 inches with three long forward toes and small hind toe. Toes very slender.",
    behavior: "Patient, statue-like hunting stance. Strikes prey with lightning speed. Wingspan up to 6 feet.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Great_Blue_Heron_%28Ardea_herodias%29_RWD3.jpg/640px-Great_Blue_Heron_%28Ardea_herodias%29_RWD3.jpg"
  },

  "canada goose": {
    name: "Canada Goose",
    scientificName: "Branta canadensis",
    category: "Bird",
    description: "Iconic waterfowl with distinctive black head and white chinstrap. Highly successful and widespread.",
    habitat: "Lakes, ponds, rivers, marshes, parks, golf courses, and urban areas.",
    range: "Throughout North America. Many populations now non-migratory in urban areas.",
    diet: "Herbivore - grasses, grains, berries, and aquatic vegetation.",
    trackDescription: "Webbed prints 3-4 inches with three forward toes connected by webbing. Waddle pattern with inward-pointing toes.",
    behavior: "Mate for life. Highly territorial during nesting. V-formation flying for efficiency.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Canada_goose_on_Seedskadee_National_Wildlife_Refuge_%2827826185489%29.jpg/640px-Canada_goose_on_Seedskadee_National_Wildlife_Refuge_%2827826185489%29.jpg"
  },

  // ==================== WILD BOAR ====================

  "wild boar": {
    name: "Wild Boar (Feral Hog)",
    scientificName: "Sus scrofa",
    category: "Big Game",
    description: "Invasive species causing billions in damage. Mix of domestic pigs and Eurasian boar.",
    habitat: "Forests, swamps, grasslands, and agricultural areas.",
    range: "Southeastern US, Texas, California, and spreading. All 50 states report sightings.",
    diet: "Omnivore - roots, acorns, crops, eggs, small animals, carrion. Extremely destructive rooters.",
    trackDescription: "Split hoof 2-3 inches with rounded tips. Dewclaws often visible. More blunt and rounded than deer.",
    behavior: "Nocturnal when pressured. Intelligent and wary. Highly destructive. Extremely prolific.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Sus_scrofa_scrofa.jpg/640px-Sus_scrofa_scrofa.jpg"
  }
};

// Helper to get all animals as array
export const getAnimalList = () => Object.values(animals);

// Helper to search animals by name or category
export const searchAnimals = (query) => {
  const q = query.toLowerCase();
  return Object.values(animals).filter(animal => 
    animal.name.toLowerCase().includes(q) || 
    animal.category.toLowerCase().includes(q) ||
    animal.scientificName.toLowerCase().includes(q)
  );
};

// Get animal by key
export const getAnimal = (key) => animals[key.toLowerCase()];

// Get animals by category
export const getAnimalsByCategory = (category) => {
  return Object.values(animals).filter(animal => 
    animal.category.toLowerCase() === category.toLowerCase()
  );
};

// Get all categories
export const getCategories = () => {
  const categories = new Set(Object.values(animals).map(a => a.category));
  return Array.from(categories).sort();
};
