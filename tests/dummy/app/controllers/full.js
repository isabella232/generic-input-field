const full = [
  {"id":1,"value":"IAB1","category_id":null,"description":"Arts \u0026 Entertainment"},
  {"id":2,"value":"IAB1-1","category_id":1,"description":"Books \u0026 Literature"},
  {"id":3,"value":"IAB1-2","category_id":1,"description":"Celebrity Fan/Gossip"},
  {"id":4,"value":"IAB1-3","category_id":1,"description":"Fine Art"},
  {"id":5,"value":"IAB1-4","category_id":1,"description":"Humor"},
  {"id":6,"value":"IAB1-5","category_id":1,"description":"Movies"},
  {"id":7,"value":"IAB1-6","category_id":1,"description":"Music"},
  {"id":8,"value":"IAB1-7","category_id":1,"description":"Television"},
  {"id":9,"value":"IAB2","category_id":null,"description":"Automotive"},
  {"id":10,"value":"IAB2-1","category_id":9,"description":"Auto Parts"},
  {"id":11,"value":"IAB2-2","category_id":9,"description":"Auto Repair"},
  {"id":12,"value":"IAB2-3","category_id":9,"description":"Buying/Selling Cars"},
  {"id":13,"value":"IAB2-4","category_id":9,"description":"Car Culture"},
  {"id":14,"value":"IAB2-5","category_id":9,"description":"Certified Pre-Owned"},
  {"id":15,"value":"IAB2-6","category_id":9,"description":"Convertible"},
  {"id":16,"value":"IAB2-7","category_id":9,"description":"Coupe"},
  {"id":17,"value":"IAB2-8","category_id":9,"description":"Crossover"},
  {"id":18,"value":"IAB2-9","category_id":9,"description":"Diesel"},
  {"id":19,"value":"IAB2-10","category_id":9,"description":"Electric Vehicle"},
  {"id":20,"value":"IAB2-11","category_id":9,"description":"Hatchback"},
  {"id":21,"value":"IAB2-12","category_id":9,"description":"Hybrid"},
  {"id":22,"value":"IAB2-13","category_id":9,"description":"Luxury"},
  {"id":23,"value":"IAB2-14","category_id":9,"description":"MiniVan"},
  {"id":24,"value":"IAB2-15","category_id":9,"description":"Motorcycles"},
  {"id":25,"value":"IAB2-16","category_id":9,"description":"Off-Road Vehicles"},
  {"id":26,"value":"IAB2-17","category_id":9,"description":"Performance Vehicles"},
  {"id":27,"value":"IAB2-18","category_id":9,"description":"Pickup"},
  {"id":28,"value":"IAB2-19","category_id":9,"description":"Road-Side Assistance"},
  {"id":29,"value":"IAB2-20","category_id":9,"description":"Sedan"},
  {"id":30,"value":"IAB2-21","category_id":9,"description":"Trucks \u0026 Accessories"},
  {"id":31,"value":"IAB2-22","category_id":9,"description":"Vintage Cars"},
  {"id":32,"value":"IAB2-23","category_id":9,"description":"Wagon"},
  {"id":33,"value":"IAB3","category_id":null,"description":"Business"},
  {"id":34,"value":"IAB3-1","category_id":33,"description":"Advertising"},
  {"id":35,"value":"IAB3-2","category_id":33,"description":"Agriculture"},
  {"id":36,"value":"IAB3-3","category_id":33,"description":"Biotech/Biomedical"},
  {"id":37,"value":"IAB3-4","category_id":33,"description":"Business Software"},
  {"id":38,"value":"IAB3-5","category_id":33,"description":"Construction"},
  {"id":39,"value":"IAB3-6","category_id":33,"description":"Forestry"},
  {"id":40,"value":"IAB3-7","category_id":33,"description":"Government"},
  {"id":41,"value":"IAB3-8","category_id":33,"description":"Green Solutions"},
  {"id":42,"value":"IAB3-9","category_id":33,"description":"Human Resources"},
  {"id":43,"value":"IAB3-10","category_id":33,"description":"Logistics"},
  {"id":44,"value":"IAB3-11","category_id":33,"description":"Marketing"},
  {"id":45,"value":"IAB3-12","category_id":33,"description":"Metals"},
  {"id":46,"value":"IAB4","category_id":null,"description":"Careers"},
  {"id":47,"value":"IAB4-1","category_id":46,"description":"Career Planning"},
  {"id":48,"value":"IAB4-2","category_id":46,"description":"College"},
  {"id":49,"value":"IAB4-3","category_id":46,"description":"Financial Aid"},
  {"id":50,"value":"IAB4-4","category_id":46,"description":"Job Fairs"},
  {"id":51,"value":"IAB4-5","category_id":46,"description":"Job Search"},
  {"id":52,"value":"IAB4-6","category_id":46,"description":"Resume Writing/Advice"},
  {"id":53,"value":"IAB4-7","category_id":46,"description":"Nursing"},
  {"id":54,"value":"IAB4-8","category_id":46,"description":"Scholarships"},
  {"id":55,"value":"IAB4-9","category_id":46,"description":"Telecommuting"},
  {"id":56,"value":"IAB4-10","category_id":46,"description":"U.S. Military"},
  {"id":57,"value":"IAB4-11","category_id":46,"description":"Career Advice"},
  {"id":58,"value":"IAB5","category_id":null,"description":"Education"},
  {"id":59,"value":"IAB5-1","category_id":58,"description":"7-12 Education"},
  {"id":60,"value":"IAB5-2","category_id":58,"description":"Adult Education"},
  {"id":61,"value":"IAB5-3","category_id":58,"description":"Art History"},
  {"id":62,"value":"IAB5-4","category_id":58,"description":"Colledge Administration"},
  {"id":63,"value":"IAB5-5","category_id":58,"description":"College Life"},
  {"id":64,"value":"IAB5-6","category_id":58,"description":"Distance Learning"},
  {"id":65,"value":"IAB5-7","category_id":58,"description":"English as a 2nd Language"},
  {"id":66,"value":"IAB5-8","category_id":58,"description":"Language Learning"},
  {"id":67,"value":"IAB5-9","category_id":58,"description":"Graduate School"},
  {"id":68,"value":"IAB5-10","category_id":58,"description":"Homeschooling"},
  {"id":69,"value":"IAB5-11","category_id":58,"description":"Homework/Study Tips"},
  {"id":70,"value":"IAB5-12","category_id":58,"description":"K-6 Educators"},
  {"id":71,"value":"IAB5-13","category_id":58,"description":"Private School"},
  {"id":72,"value":"IAB5-14","category_id":58,"description":"Special Education"},
  {"id":73,"value":"IAB5-15","category_id":58,"description":"Studying Business"},
  {"id":74,"value":"IAB6","category_id":null,"description":"Family \u0026 Parenting"},
  {"id":75,"value":"IAB6-1","category_id":74,"description":"Adoption"},
  {"id":76,"value":"IAB6-2","category_id":74,"description":"Babies \u0026 Toddlers"},
  {"id":77,"value":"IAB6-3","category_id":74,"description":"Daycare/Pre School"},
  {"id":78,"value":"IAB6-4","category_id":74,"description":"Family Internet"},
  {"id":79,"value":"IAB6-5","category_id":74,"description":"Parenting - K-6 Kids"},
  {"id":80,"value":"IAB6-6","category_id":74,"description":"Parenting teens"},
  {"id":81,"value":"IAB6-7","category_id":74,"description":"Pregnancy"},
  {"id":82,"value":"IAB6-8","category_id":74,"description":"Special Needs Kids"},
  {"id":83,"value":"IAB6-9","category_id":74,"description":"Eldercare"},
  {"id":84,"value":"IAB7","category_id":null,"description":"Health \u0026 Fitness"},
  {"id":85,"value":"IAB7-1","category_id":84,"description":"Exercise"},
  {"id":86,"value":"IAB7-2","category_id":84,"description":"A.D.D. "},
  {"id":87,"value":"IAB7-3","category_id":84,"description":"AIDS/HIV"},
  {"id":88,"value":"IAB7-4","category_id":84,"description":"Allergies"},
  {"id":89,"value":"IAB7-5","category_id":84,"description":"Alternative Medicine"},
  {"id":90,"value":"IAB7-6","category_id":84,"description":"Arthritis"},
  {"id":91,"value":"IAB7-7","category_id":84,"description":"Asthma"},
  {"id":92,"value":"IAB7-8","category_id":84,"description":"Autism/PDD"},
  {"id":93,"value":"IAB7-9","category_id":84,"description":"Bipolar Disorder"},
  {"id":94,"value":"IAB7-10","category_id":84,"description":"Brain Tumor"},
  {"id":95,"value":"IAB7-11","category_id":84,"description":"Cancer"},
  {"id":96,"value":"IAB7-12","category_id":84,"description":"Cholesterol"},
  {"id":97,"value":"IAB7-13","category_id":84,"description":"Chronic Fatigue Syndrome"},
  {"id":98,"value":"IAB7-14","category_id":84,"description":"Chronic Pain"},
  {"id":99,"value":"IAB7-15","category_id":84,"description":"Cold \u0026 Flu"},
  {"id":100,"value":"IAB7-16","category_id":84,"description":"Deafness"},
  {"id":101,"value":"IAB7-17","category_id":84,"description":"Dental Care"},
  {"id":102,"value":"IAB7-18","category_id":84,"description":"Depression"},
  {"id":103,"value":"IAB7-19","category_id":84,"description":"Dermatology"},
  {"id":104,"value":"IAB7-20","category_id":84,"description":"Diabetes"},
  {"id":105,"value":"IAB7-21","category_id":84,"description":"Epilepsy"},
  {"id":106,"value":"IAB7-22","category_id":84,"description":"GERD/Acid Reflux"},
  {"id":107,"value":"IAB7-23","category_id":84,"description":"Headaches/Migraines"},
  {"id":108,"value":"IAB7-24","category_id":84,"description":"Heart Disease"},
  {"id":109,"value":"IAB7-25","category_id":84,"description":"Herbs for Health"},
  {"id":110,"value":"IAB7-26","category_id":84,"description":"Holistic Healing"},
  {"id":111,"value":"IAB7-27","category_id":84,"description":"IBS/Crohn's Disease"},
  {"id":112,"value":"IAB7-28","category_id":84,"description":"Incest/Abuse Support"},
  {"id":113,"value":"IAB7-29","category_id":84,"description":"Incontinence"},
  {"id":114,"value":"IAB7-30","category_id":84,"description":"Infertility"},
  {"id":115,"value":"IAB7-31","category_id":84,"description":"Men's Health"},
  {"id":116,"value":"IAB7-32","category_id":84,"description":"Nutrition"},
  {"id":117,"value":"IAB7-33","category_id":84,"description":"Orthopedics"},
  {"id":118,"value":"IAB7-34","category_id":84,"description":"Panic/Anxiety Disorders"},
  {"id":119,"value":"IAB7-35","category_id":84,"description":"Pediatrics"},
  {"id":120,"value":"IAB7-36","category_id":84,"description":"Physical Therapy"},
  {"id":121,"value":"IAB7-37","category_id":84,"description":"Psychology/Psychiatry"},
  {"id":122,"value":"IAB7-38","category_id":84,"description":"Senor Health"},
  {"id":123,"value":"IAB7-39","category_id":84,"description":"Sexuality"},
  {"id":124,"value":"IAB7-40","category_id":84,"description":"Sleep Disorders"},
  {"id":125,"value":"IAB7-41","category_id":84,"description":"Smoking Cessation"},
  {"id":126,"value":"IAB7-42","category_id":84,"description":"Substance Abuse"},
  {"id":127,"value":"IAB7-43","category_id":84,"description":"Thyroid Disease"},
  {"id":128,"value":"IAB7-44","category_id":84,"description":"Weight Loss"},
  {"id":129,"value":"IAB7-45","category_id":84,"description":"Women's Health"},
  {"id":130,"value":"IAB8","category_id":null,"description":"Food \u0026 Drink"},
  {"id":131,"value":"IAB8-1","category_id":130,"description":"American Cuisine"},
  {"id":132,"value":"IAB8-2","category_id":130,"description":"Barbecues \u0026 Grilling"},
  {"id":133,"value":"IAB8-3","category_id":130,"description":"Cajun/Creole"},
  {"id":134,"value":"IAB8-4","category_id":130,"description":"Chinese Cuisine"},
  {"id":135,"value":"IAB8-5","category_id":130,"description":"Cocktails/Beer"},
  {"id":136,"value":"IAB8-6","category_id":130,"description":"Coffee/Tea"},
  {"id":137,"value":"IAB8-7","category_id":130,"description":"Cuisine-Specific"},
  {"id":138,"value":"IAB8-8","category_id":130,"description":"Desserts \u0026 Baking"},
  {"id":139,"value":"IAB8-9","category_id":130,"description":"Dining Out"},
  {"id":140,"value":"IAB8-10","category_id":130,"description":"Food Allergies"},
  {"id":141,"value":"IAB8-11","category_id":130,"description":"French Cuisine"},
  {"id":142,"value":"IAB8-12","category_id":130,"description":"Health/Lowfat Cooking"},
  {"id":143,"value":"IAB8-13","category_id":130,"description":"Italian Cuisine"},
  {"id":144,"value":"IAB8-14","category_id":130,"description":"Japanese Cuisine"},
  {"id":145,"value":"IAB8-15","category_id":130,"description":"Mexican Cuisine"},
  {"id":146,"value":"IAB8-16","category_id":130,"description":"Vegan"},
  {"id":147,"value":"IAB8-17","category_id":130,"description":"Vegetarian"},
  {"id":148,"value":"IAB8-18","category_id":130,"description":"Wine"},
  {"id":149,"value":"IAB9","category_id":null,"description":"Hobbies \u0026 Interests"},
  {"id":150,"value":"IAB9-1","category_id":149,"description":"Art/Technology"},
  {"id":151,"value":"IAB9-2","category_id":149,"description":"Arts \u0026 Crafts"},
  {"id":152,"value":"IAB9-3","category_id":149,"description":"Beadwork"},
  {"id":153,"value":"IAB9-4","category_id":149,"description":"Birdwatching"},
  {"id":154,"value":"IAB9-5","category_id":149,"description":"Board Games/Puzzles"},
  {"id":155,"value":"IAB9-6","category_id":149,"description":"Candle \u0026 Soap Making"},
  {"id":156,"value":"IAB9-7","category_id":149,"description":"Card Games"},
  {"id":157,"value":"IAB9-8","category_id":149,"description":"Chess"},
  {"id":158,"value":"IAB9-9","category_id":149,"description":"Cigars"},
  {"id":159,"value":"IAB9-10","category_id":149,"description":"Collecting"},
  {"id":160,"value":"IAB9-11","category_id":149,"description":"Comic Books"},
  {"id":161,"value":"IAB9-12","category_id":149,"description":"Drawing/Sketching"},
  {"id":162,"value":"IAB9-13","category_id":149,"description":"Freelance Writing"},
  {"id":163,"value":"IAB9-14","category_id":149,"description":"Genealogy"},
  {"id":164,"value":"IAB9-15","category_id":149,"description":"Getting Published"},
  {"id":165,"value":"IAB9-16","category_id":149,"description":"Guitar"},
  {"id":166,"value":"IAB9-17","category_id":149,"description":"Home Recording"},
  {"id":167,"value":"IAB9-18","category_id":149,"description":"Investors \u0026 Patents"},
  {"id":168,"value":"IAB9-19","category_id":149,"description":"Jewelry Making"},
  {"id":169,"value":"IAB9-20","category_id":149,"description":"Magic \u0026 Illusion"},
  {"id":170,"value":"IAB9-21","category_id":149,"description":"Needlework"},
  {"id":171,"value":"IAB9-22","category_id":149,"description":"Painting"},
  {"id":172,"value":"IAB9-23","category_id":149,"description":"Photography"},
  {"id":173,"value":"IAB9-24","category_id":149,"description":"Radio"},
  {"id":174,"value":"IAB9-25","category_id":149,"description":"Roleplaying Games"},
  {"id":175,"value":"IAB9-26","category_id":149,"description":"Sci-Fi \u0026 Fantasy"},
  {"id":176,"value":"IAB9-27","category_id":149,"description":"Scrapbooking"},
  {"id":177,"value":"IAB9-28","category_id":149,"description":"Screenwriting"},
  {"id":178,"value":"IAB9-29","category_id":149,"description":"Stamps \u0026 Coins"},
  {"id":179,"value":"IAB9-30","category_id":149,"description":"Video \u0026 Computer Games"},
  {"id":180,"value":"IAB9-31","category_id":149,"description":"Woodworking"},
  {"id":181,"value":"IAB10","category_id":null,"description":"Home \u0026 Garden"},
  {"id":182,"value":"IAB10-1","category_id":181,"description":"Appliances"},
  {"id":183,"value":"IAB10-2","category_id":181,"description":"Entertaining"},
  {"id":184,"value":"IAB10-3","category_id":181,"description":"Environmental Safety"},
  {"id":185,"value":"IAB10-4","category_id":181,"description":"Gardening"},
  {"id":186,"value":"IAB10-5","category_id":181,"description":"Home Repair"},
  {"id":187,"value":"IAB10-6","category_id":181,"description":"Home Theater"},
  {"id":188,"value":"IAB10-7","category_id":181,"description":"Interior Decorating"},
  {"id":189,"value":"IAB10-8","category_id":181,"description":"Landscaping"},
  {"id":190,"value":"IAB10-9","category_id":181,"description":"Remodeling \u0026 Construction"},
  {"id":191,"value":"IAB11","category_id":null,"description":"Law, Gov't \u0026 Politics"},
  {"id":192,"value":"IAB11-1","category_id":191,"description":"Immigration"},
  {"id":193,"value":"IAB11-2","category_id":191,"description":"Legal Issues"},
  {"id":194,"value":"IAB11-3","category_id":191,"description":"U.S. Government Resources"},
  {"id":195,"value":"IAB11-4","category_id":191,"description":"Politics"},
  {"id":196,"value":"IAB11-5","category_id":191,"description":"Commentary"},
  {"id":197,"value":"IAB12","category_id":null,"description":"News"},
  {"id":198,"value":"IAB12-1","category_id":197,"description":"International News"},
  {"id":199,"value":"IAB12-2","category_id":197,"description":"National News"},
  {"id":200,"value":"IAB12-3","category_id":197,"description":"Local News"},
  {"id":201,"value":"IAB13","category_id":null,"description":"Personal Finance"},
  {"id":202,"value":"IAB13-1","category_id":201,"description":"Beginning Investing"},
  {"id":203,"value":"IAB13-2","category_id":201,"description":"Credit/Debt \u0026 Loans"},
  {"id":204,"value":"IAB13-3","category_id":201,"description":"Financial News"},
  {"id":205,"value":"IAB13-4","category_id":201,"description":"Financial Planning"},
  {"id":206,"value":"IAB13-5","category_id":201,"description":"Hedge Fund"},
  {"id":207,"value":"IAB13-6","category_id":201,"description":"Insurance"},
  {"id":208,"value":"IAB13-7","category_id":201,"description":"Investing"},
  {"id":209,"value":"IAB13-8","category_id":201,"description":"Mutual Funds"},
  {"id":210,"value":"IAB13-9","category_id":201,"description":"Options"},
  {"id":211,"value":"IAB13-10","category_id":201,"description":"Retirement Planning"},
  {"id":212,"value":"IAB13-11","category_id":201,"description":"Stocks"},
  {"id":213,"value":"IAB13-12","category_id":201,"description":"Tax Planning"},
  {"id":214,"value":"IAB14","category_id":null,"description":"Society"},
  {"id":215,"value":"IAB14-1","category_id":214,"description":"Dating"},
  {"id":216,"value":"IAB14-2","category_id":214,"description":"Divorce Support"},
  {"id":217,"value":"IAB14-3","category_id":214,"description":"Gay Life"},
  {"id":218,"value":"IAB14-4","category_id":214,"description":"Marriage"},
  {"id":219,"value":"IAB14-5","category_id":214,"description":"Senior Living"},
  {"id":220,"value":"IAB14-6","category_id":214,"description":"Teens"},
  {"id":221,"value":"IAB14-7","category_id":214,"description":"Weddings"},
  {"id":222,"value":"IAB14-8","category_id":214,"description":"Ethnic Specific"},
  {"id":223,"value":"IAB15","category_id":null,"description":"Science"},
  {"id":224,"value":"IAB15-1","category_id":223,"description":"Astrology"},
  {"id":225,"value":"IAB15-2","category_id":223,"description":"Biology"},
  {"id":226,"value":"IAB15-3","category_id":223,"description":"Chemistry"},
  {"id":227,"value":"IAB15-4","category_id":223,"description":"Geology"},
  {"id":228,"value":"IAB15-5","category_id":223,"description":"Paranormal Phenomena"},
  {"id":229,"value":"IAB15-6","category_id":223,"description":"Physics"},
  {"id":230,"value":"IAB15-7","category_id":223,"description":"Space/Astronomy"},
  {"id":231,"value":"IAB15-8","category_id":223,"description":"Geography"},
  {"id":232,"value":"IAB15-9","category_id":223,"description":"Botany"},
  {"id":233,"value":"IAB15-10","category_id":223,"description":"Weather"},
  {"id":234,"value":"IAB16","category_id":null,"description":"Pets"},
  {"id":235,"value":"IAB16-1","category_id":234,"description":"Aquariums"},
  {"id":236,"value":"IAB16-2","category_id":234,"description":"Birds"},
  {"id":237,"value":"IAB16-3","category_id":234,"description":"Cats"},
  {"id":238,"value":"IAB16-4","category_id":234,"description":"Dogs"},
  {"id":239,"value":"IAB16-5","category_id":234,"description":"Large Animals"},
  {"id":240,"value":"IAB16-6","category_id":234,"description":"Reptiles"},
  {"id":241,"value":"IAB16-7","category_id":234,"description":"Veterinary Medicine"},
  {"id":242,"value":"IAB17","category_id":null,"description":"Sports"},
  {"id":243,"value":"IAB17-1","category_id":242,"description":"Auto Racing"},
  {"id":244,"value":"IAB17-2","category_id":242,"description":"Baseball"},
  {"id":245,"value":"IAB17-3","category_id":242,"description":"Bicycling"},
  {"id":246,"value":"IAB17-4","category_id":242,"description":"Bodybuilding"},
  {"id":247,"value":"IAB17-5","category_id":242,"description":"Boxing"},
  {"id":248,"value":"IAB17-6","category_id":242,"description":"Canoeing/Kayaking"},
  {"id":249,"value":"IAB17-7","category_id":242,"description":"Cheerleading"},
  {"id":250,"value":"IAB17-8","category_id":242,"description":"Climbing"},
  {"id":251,"value":"IAB17-9","category_id":242,"description":"Cricket"},
  {"id":252,"value":"IAB17-10","category_id":242,"description":"Figure Skating"},
  {"id":253,"value":"IAB17-11","category_id":242,"description":"Fly Fishing"},
  {"id":254,"value":"IAB17-12","category_id":242,"description":"Football"},
  {"id":255,"value":"IAB17-13","category_id":242,"description":"Freshwater Fishing"},
  {"id":256,"value":"IAB17-14","category_id":242,"description":"Game \u0026 Fish"},
  {"id":257,"value":"IAB17-15","category_id":242,"description":"Golf"},
  {"id":258,"value":"IAB17-16","category_id":242,"description":"Horse Racing"},
  {"id":259,"value":"IAB17-17","category_id":242,"description":"Horses"},
  {"id":260,"value":"IAB17-18","category_id":242,"description":"Hunting/Shooting"},
  {"id":261,"value":"IAB17-19","category_id":242,"description":"Inline Skating"},
  {"id":262,"value":"IAB17-20","category_id":242,"description":"Martial Arts"},
  {"id":263,"value":"IAB17-21","category_id":242,"description":"Mountain Biking"},
  {"id":264,"value":"IAB17-22","category_id":242,"description":"NASCAR Racing"},
  {"id":265,"value":"IAB17-23","category_id":242,"description":"Olympics"},
  {"id":266,"value":"IAB17-24","category_id":242,"description":"Paintball"},
  {"id":267,"value":"IAB17-25","category_id":242,"description":"Power \u0026 Motorcycles"},
  {"id":268,"value":"IAB17-26","category_id":242,"description":"Pro Basketball"},
  {"id":269,"value":"IAB17-27","category_id":242,"description":"Pro Ice Hockey"},
  {"id":270,"value":"IAB17-28","category_id":242,"description":"Rodeo"},
  {"id":271,"value":"IAB17-29","category_id":242,"description":"Rugby"},
  {"id":272,"value":"IAB17-30","category_id":242,"description":"Running/Jogging"},
  {"id":273,"value":"IAB17-31","category_id":242,"description":"Sailing"},
  {"id":274,"value":"IAB17-32","category_id":242,"description":"Saltwater Fishing"},
  {"id":275,"value":"IAB17-33","category_id":242,"description":"Scuba Diving"},
  {"id":276,"value":"IAB17-34","category_id":242,"description":"Skateboarding"},
  {"id":277,"value":"IAB17-35","category_id":242,"description":"Skiing"},
  {"id":278,"value":"IAB17-36","category_id":242,"description":"Snowboarding"},
  {"id":279,"value":"IAB17-37","category_id":242,"description":"Surfing/Bodyboarding"},
  {"id":280,"value":"IAB17-38","category_id":242,"description":"Swimming"},
  {"id":281,"value":"IAB17-39","category_id":242,"description":"Table Tennis/Ping-Pong"},
  {"id":282,"value":"IAB17-40","category_id":242,"description":"Tennis"},
  {"id":283,"value":"IAB17-41","category_id":242,"description":"Volleyball"},
  {"id":284,"value":"IAB17-42","category_id":242,"description":"Walking"},
  {"id":285,"value":"IAB17-43","category_id":242,"description":"Waterski/Wakeboard"},
  {"id":286,"value":"IAB17-44","category_id":242,"description":"World Soccer"},
  {"id":287,"value":"IAB18","category_id":null,"description":"Style \u0026 Fashion"},
  {"id":288,"value":"IAB18-1","category_id":287,"description":"Beauty"},
  {"id":289,"value":"IAB18-2","category_id":287,"description":"Body Art"},
  {"id":290,"value":"IAB18-3","category_id":287,"description":"Fashion"},
  {"id":291,"value":"IAB18-4","category_id":287,"description":"Jewelry"},
  {"id":292,"value":"IAB18-5","category_id":287,"description":"Clothing"},
  {"id":293,"value":"IAB18-6","category_id":287,"description":"Accessories"},
  {"id":294,"value":"IAB19","category_id":null,"description":"Technology \u0026 Computing"},
  {"id":295,"value":"IAB19-1","category_id":294,"description":"3-D Graphics"},
  {"id":296,"value":"IAB19-2","category_id":294,"description":"Animation"},
  {"id":297,"value":"IAB19-3","category_id":294,"description":"Antivirus Software"},
  {"id":298,"value":"IAB19-4","category_id":294,"description":"C/C++ "},
  {"id":299,"value":"IAB19-5","category_id":294,"description":"Cameras \u0026 Camcorders"},
  {"id":300,"value":"IAB19-6","category_id":294,"description":"Cell Phones"},
  {"id":301,"value":"IAB19-7","category_id":294,"description":"Computer Certification"},
  {"id":302,"value":"IAB19-8","category_id":294,"description":"Computer Networking"},
  {"id":303,"value":"IAB19-9","category_id":294,"description":"Computer Peripherals"},
  {"id":304,"value":"IAB19-10","category_id":294,"description":"Computer Reviews"},
  {"id":305,"value":"IAB19-11","category_id":294,"description":"Data Centers"},
  {"id":306,"value":"IAB19-12","category_id":294,"description":"Databases"},
  {"id":307,"value":"IAB19-13","category_id":294,"description":"Desktop Publishing"},
  {"id":308,"value":"IAB19-14","category_id":294,"description":"Desktop Video"},
  {"id":309,"value":"IAB19-15","category_id":294,"description":"Email"},
  {"id":310,"value":"IAB19-16","category_id":294,"description":"Graphics Software"},
  {"id":311,"value":"IAB19-17","category_id":294,"description":"Home Video/DVD"},
  {"id":312,"value":"IAB19-18","category_id":294,"description":"Internet Technology"},
  {"id":313,"value":"IAB19-19","category_id":294,"description":"Java"},
  {"id":314,"value":"IAB19-20","category_id":294,"description":"JavaScript"},
  {"id":315,"value":"IAB19-21","category_id":294,"description":"Mac Support"},
  {"id":316,"value":"IAB19-22","category_id":294,"description":"MP3/MIDI"},
  {"id":317,"value":"IAB19-23","category_id":294,"description":"Net Conferencing"},
  {"id":318,"value":"IAB19-24","category_id":294,"description":"Net for Beginners"},
  {"id":319,"value":"IAB19-25","category_id":294,"description":"Network Security"},
  {"id":320,"value":"IAB19-26","category_id":294,"description":"Palmtops/PDAs"},
  {"id":321,"value":"IAB19-27","category_id":294,"description":"PC Support"},
  {"id":322,"value":"IAB19-28","category_id":294,"description":"Portable"},
  {"id":323,"value":"IAB19-29","category_id":294,"description":"Entertainment"},
  {"id":324,"value":"IAB19-30","category_id":294,"description":"Shareware/Freeware"},
  {"id":325,"value":"IAB19-31","category_id":294,"description":"Unix"},
  {"id":326,"value":"IAB19-32","category_id":294,"description":"Visual Basic"},
  {"id":327,"value":"IAB19-33","category_id":294,"description":"Web Clip Art"},
  {"id":328,"value":"IAB19-34","category_id":294,"description":"Web Design/HTML"},
  {"id":329,"value":"IAB19-35","category_id":294,"description":"Web Search"},
  {"id":330,"value":"IAB19-36","category_id":294,"description":"Windows"},
  {"id":331,"value":"IAB20","category_id":null,"description":"Travel"},
  {"id":332,"value":"IAB20-1","category_id":331,"description":"Adventure Travel"},
  {"id":333,"value":"IAB20-2","category_id":331,"description":"Africa"},
  {"id":334,"value":"IAB20-3","category_id":331,"description":"Air Travel"},
  {"id":335,"value":"IAB20-4","category_id":331,"description":"Australia \u0026 New Zealand"},
  {"id":336,"value":"IAB20-5","category_id":331,"description":"Bed \u0026 Breakfasts"},
  {"id":337,"value":"IAB20-6","category_id":331,"description":"Budget Travel"},
  {"id":338,"value":"IAB20-7","category_id":331,"description":"Business Travel"},
  {"id":339,"value":"IAB20-8","category_id":331,"description":"By US Locale"},
  {"id":340,"value":"IAB20-9","category_id":331,"description":"Camping"},
  {"id":341,"value":"IAB20-10","category_id":331,"description":"Canada"},
  {"id":342,"value":"IAB20-11","category_id":331,"description":"Caribbean"},
  {"id":343,"value":"IAB20-12","category_id":331,"description":"Cruises"},
  {"id":344,"value":"IAB20-13","category_id":331,"description":"Eastern Europe"},
  {"id":345,"value":"IAB20-14","category_id":331,"description":"Europe"},
  {"id":346,"value":"IAB20-15","category_id":331,"description":"France"},
  {"id":347,"value":"IAB20-16","category_id":331,"description":"Greece"},
  {"id":348,"value":"IAB20-17","category_id":331,"description":"Honeymoons/Getaways"},
  {"id":349,"value":"IAB20-18","category_id":331,"description":"Hotels"},
  {"id":350,"value":"IAB20-19","category_id":331,"description":"Italy"},
  {"id":351,"value":"IAB20-20","category_id":331,"description":"Japan"},
  {"id":352,"value":"IAB20-21","category_id":331,"description":"Mexico \u0026 Central America"},
  {"id":353,"value":"IAB20-22","category_id":331,"description":"National Parks"},
  {"id":354,"value":"IAB20-23","category_id":331,"description":"South America"},
  {"id":355,"value":"IAB20-24","category_id":331,"description":"Spas"},
  {"id":356,"value":"IAB20-25","category_id":331,"description":"Theme Parks"},
  {"id":357,"value":"IAB20-26","category_id":331,"description":"Traveling with Kids"},
  {"id":358,"value":"IAB20-27","category_id":331,"description":"United Kingdom"},
  {"id":359,"value":"IAB21","category_id":null,"description":"Real Estate"},
  {"id":360,"value":"IAB21-1","category_id":359,"description":"Apartments"},
  {"id":361,"value":"IAB21-2","category_id":359,"description":"Architects"},
  {"id":362,"value":"IAB21-3","category_id":359,"description":"Buying/Selling Homes"},
  {"id":363,"value":"IAB22","category_id":null,"description":"Shopping"},
  {"id":364,"value":"IAB22-1","category_id":363,"description":"Contests \u0026 Freebies"},
  {"id":365,"value":"IAB22-2","category_id":363,"description":"Couponing"},
  {"id":366,"value":"IAB22-3","category_id":363,"description":"Comparison"},
  {"id":367,"value":"IAB22-4","category_id":363,"description":"Engines"},
  {"id":368,"value":"IAB23","category_id":null,"description":"Religion \u0026 Spirituality"},
  {"id":369,"value":"IAB23-1","category_id":368,"description":"Alternative Religions"},
  {"id":370,"value":"IAB23-2","category_id":368,"description":"Atheism/Agnosticism"},
  {"id":371,"value":"IAB23-3","category_id":368,"description":"Buddhism"},
  {"id":372,"value":"IAB23-4","category_id":368,"description":"Catholicism"},
  {"id":373,"value":"IAB23-5","category_id":368,"description":"Christianity"},
  {"id":374,"value":"IAB23-6","category_id":368,"description":"Hinduism"},
  {"id":375,"value":"IAB23-7","category_id":368,"description":"Islam"},
  {"id":376,"value":"IAB23-8","category_id":368,"description":"Judaism"},
  {"id":377,"value":"IAB23-9","category_id":368,"description":"Latter-Day Saints"},
  {"id":378,"value":"IAB23-10","category_id":368,"description":"Pagan/Wiccan"},
  {"id":379,"value":"IAB24","category_id":null,"description":"Uncategorized"},
  {"id":380,"value":"IAB25","category_id":null,"description":"Non-Standard Content"},
  {"id":381,"value":"IAB25-1","category_id":380,"description":"Unmoderated UGC"},
  {"id":382,"value":"IAB25-2","category_id":380,"description":"Extreme Graphic/Explicit Violence"},
  {"id":383,"value":"IAB25-3","category_id":380,"description":"Pornography"},
  {"id":384,"value":"IAB25-4","category_id":380,"description":"Profane Content"},
  {"id":385,"value":"IAB25-5","category_id":380,"description":"Hate Content"},
  {"id":386,"value":"IAB25-6","category_id":380,"description":"Under Construction"},
  {"id":387,"value":"IAB25-7","category_id":380,"description":"Incentivized"},
  {"id":388,"value":"IAB26","category_id":null,"description":"Illegal Content"},
  {"id":389,"value":"IAB26-1","category_id":388,"description":"Illegal Content"},
  {"id":390,"value":"IAB26-2","category_id":388,"description":"Warez"},
  {"id":391,"value":"IAB26-3","category_id":388,"description":"Spyware/Malware"},
  {"id":392,"value":"IAB26-4","category_id":388,"description":"Copyright Infringement"}
]
