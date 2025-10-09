document.addEventListener('DOMContentLoaded', function() {
    const packs = {
        expansions: [
            { name: "Get to Work", options: [{ name: "Retail Owner", type: "skill" }, { name: "Baking", type: "skill" }, { name: "Freelance Photographer", type: "skill" }, { name: "Scientist", type: "job" }, { name: "Doctor", type: "job" }, { name: "Detective", type: "job" }] },
            { name: "Get Together", options: [{ name: "DJ", type: "skill" }, { name: "Club Activities", type: "skill" }] },
            { name: "City Living", options: [{ name: "Festival Fanatic", type: "skill" }, { name: "Singing", type: "skill" }, { name: "Playing instruments for tips", type: "skill" }, { name: "Flea Market Flipper", type: "skill" }, { name: "Social Media", type: "job" }, { name: "Critic", type: "job" }, { name: "Politician", type: "job" }] },
            { name: "Cats & Dogs", options: [{ name: "Veterinarian", type: "job" }, { name: "Cat Breeder (2 litters max)", type: "skill" }, { name: "Dog Breeder (2 litters max)", type: "skill" }, { name: "Animal Trainer (Cat Hunting)", type: "skill"}, { name: "Animal Trainer (Dog Hunting)", type: "skill"}] },
            { name: "Seasons", options: [{ name: "Gardener", type: "job" }, { name: "Flower Arranger", type: "skill" }, { name: "Scout", type: "job" }, { name: "Decor Box Rummage", type: "skill" }, { name: "Bee Keeper", type: "skill" }] },
            { name: "Get Famous", options: [{ name: "Actor", type: "job" }, { name: "Video Producer", type: "skill" }, { name: "Music Producer", type: "skill" }, { name: "Influencer", type: "skill" }, { name: "Autograph Appraiser", type: "skill" }] },
            { name: "Island Living", options: [{ name: "Conservationist", type: "job" }, { name: "Diving", type: "skill" }, { name: "Odd Jobs", type: "skill" }, { name: "Beachcomber", type: "skill" }, { name: "Diver", type: "job" }, { name: "Fisherman", type: "job" }, { name: "Lifeguard", type: "job" }] },
            { name: "Discover University", options: [{ name: "Bot-Bot Creator", type: "skill" }, { name: "Education", type: "job" }, { name: "Engineering", type: "job" }, { name: "Law", type: "job" }, { name: "Soccer Player", type: "job" }, { name: "E-sports Competitor", type: "job" }] },
            { name: "Eco Lifestyle", options: [{ name: "Civil Designer", type: "job" }, { name: "Freelance Candle Maker", type: "skill" }, { name: "Freelance Decorator (Fabricator)", type: "skill" }, { name: "Freelance Drink Maker (Juice Fizzing)", type: "skill" }, { name: "Dumpster Diver", type: "skill" }] },
            { name: "Snowy Escape", options: [{ name: "Salaryperson", type: "job" }, { name: "Rock Climbing", type: "skill" }, { name: "Skiing", type: "skill" }, { name: "Snowboarding", type: "skill" }] },
            { name: "Cottage Living", options: [{ name: "Farmer", type: "skill" }, { name: "Canning", type: "skill" }, { name: "Animal Care", type: "skill" }, { name: "Village Errands", type: "skill" }, { name: "Wild Animal Friend", type: "skill" }] },
            { name: "High School Years", options: [{ name: "Simfluencer", type: "job" }, { name: "Video Game Streamer", type: "job" }, { name: "After-school activities", type: "skill" }, { name: "Fashion Designer (Trendi)", type: "skill" }] },
            { name: "Growing Together", options: [{ name: "Science Fairs", type: "skill" }, { name: "Sleepovers", type: "skill" }] },
            { name: "Horse Ranch", options: [{ name: "Equestrian (Competitions)", type: "skill" }, { name: "Nectar connoisseur", type: "skill" }, { name: "Mini-farmer (Goats/Sheep)", type: "skill" }, { name: "Community Job hopper", type: "skill" }] },
            { name: "For Rent", options: [{ name: "Landlord", type: "skill" }, { name: "Seller of Secrets (Eavesdropping)", type: "skill" }, { name: "Burglar (Breaking & Entering)", type: "skill" }, { name: "Handyperson", type: "job" }] },
            { name: "Lovestruck", options: [{ name: "Wedding Planner", type: "job" }, { name: "Relationship Guru", type: "skill" }] },
            { name: "Life & Death", options: [{ name: "Tarot Reader", type: "skill" }, { name: "Spooky Explorer", type: "skill" }, { name: "Ghost Host", type: "skill" }, { name: "Undertaker", type: "job" }, { name: "Reaper", type: "job" }] },
            { name: "Businesses & Hobbies", options: [{ name: "Tattoo Artist", type: "skill" }, { name: "Ceramics Artist/Potter", type: "skill" }, { name: "Sweet Shop/Confectioner", type: "skill" }, { name: "Master of Heists", type: "skill" }, { name: "Small Business Owner (Service/Activity)", type: "skill" }, { name: "Small Business Owner (Hospitality)", type: "skill" }, { name: "Small Business Owner (Mini Mall)", type: "skill" }] },
            { name: "Enchanted by Nature", options: [{ name: "Forager", type: "skill" }, { name: "Apothecary", type: "skill" }, { name: "Natural Artist (Nature Press/Gnomes)", type: "skill" }, { name: "Naturopath", type: "job" }] },
            { name: "Adventure Awaits", options: [{ name: "Archer", type: "skill" }, { name: "Entomologist", type: "skill" }, { name: "Papercrafter", type: "skill" }, { name: "Getaway Host", type: "skill" }, { name: "Getaway Contestant", type: "skill" }, { name: "Travel Blogger/Vlogger", type: "skill" }] }
        ],
        gamePacks: [
            { name: "Outdoor Retreat", options: [{ name: "Remedy Brewer (Herbalism)", type: "skill" }] },
            { name: "Spa Day", options: [{ name: "Yoga/Meditation Instructor", type: "skill" }, { name: "Massage Therapist", type: "skill" }, { name: "Nail Technician", type: "skill" }] },
            { name: "Dine Out", options: [{ name: "Restaurateur", type: "skill" }] },
            { name: "Vampires", options: [{ name: "Vampire Lore", type: "skill" }] },
            { name: "Parenthood", options: [{ name: "Character Value Rewards", type: "skill" }] },
            { name: "Jungle Adventure", options: [{ name: "Treasure Hunter (Temples)", type: "skill" }, { name: "Archaeologist (Excavation)", type: "skill" }] },
            { name: "StrangerVille", options: [{ name: "Military", type: "job" }, { name: "Seller of Secrets (Spy Tool)", type: "skill" }] },
            { name: "Realm of Magic", options: [{ name: "Potion Making", type: "skill" }, { name: "Spellcasting", type: "skill" }] },
            { name: "Journey to Batuu", options: [{ name: "Batuu Missions", type: "skill" }] },
            { name: "Dream Home Decorator", options: [{ name: "Interior Decorator", type: "job" }] },
            { name: "My Wedding Stories", options: [{ name: "Wedding Cake Designer", type: "skill" }, { name: "Wedding Photography", type: "skill" }] },
            { name: "Werewolves", options: [{ name: "Scavenging", type: "skill" }, { name: "Wolf Pack Activities", type: "skill" }] }
        ],
        stuffPacks: [
            { name: "Cool Kitchen Stuff", options: [{ name: "Ice Cream Making", type: "skill" }] },
            { name: "Spooky Stuff", options: [{ name: "Pumpkin Carving", type: "skill" }] },
            { name: "Romantic Garden Stuff", options: [{ name: "Wishing Well", type: "skill" }] },
            { name: "Kids Room Stuff", options: [{ name: "Voidcritter Battles", type: "skill" }] },
            { name: "Bowling Night Stuff", options: [{ name: "Bowling", type: "skill" }] },
            { name: "Fitness Stuff", options: [{ name: "Rock Climbing (wall)", type: "skill" }] },
            { name: "Moschino Stuff", options: [{ name: "Freelance Fashion Photographer", type: "job" }] },
            { name: "Nifty Knitting Stuff", options: [{ name: "The Knitter", type: "skill" }, { name: "Selling on Plopsy", type: "skill" }] },
            { name: "Paranormal Stuff", options: [{ name: "Paranormal Investigator", type: "job" }] },
            { name: "Home Chef Hustle Stuff", options: [{ name: "Cabbage Merchant (Food Stand)", type: "skill" }] },
            { name: "Crystal Creations Stuff", options: [{ name: "Jewelry Maker", type: "skill" }, { name: "Crystal Farmer", type: "skill" }] }
        ],
        kits: [{ name: "Bust the Dust Kit", options: [{ name: "Cleaning for money", type: "skill" }, { name: "Sell Dust Bunny Gifts", type: "skill" }] }],
        freePacks: [{ name: "Grim's Ghoulish Guitar Pack", options: [{ name: "Freelance Musician", type: "skill" }] }]
    };

    const baseGameOptions = [
        { name: "Freelance Painter", type: "skill" }, { name: "Freelance Author", type: "skill" }, { name: "Freelance Musician", type: "skill" }, 
        { name: "Gardener", type: "skill" }, { name: "Fishersim", type: "skill" }, { name: "Collector", type: "skill" }, 
        { name: "Carpenter", type: "skill" }, { name: "Freelance Comedian", type: "skill" }, { name: "Freelance Programmer", type: "skill" }, 
        { name: "Space Explorer", type: "skill" }, { name: "Professional Gamer", type: "skill" }, { name: "Cybercriminal (Hacking)", type: "skill" },
        { name: "Professional Host(ess)", type: "skill" }, { name: "Freelance Photographer", type: "skill" }, { name: "Cooking", type: "skill" }, 
        { name: "Frog Breeding", type: "skill" }, { name: "Making Cupcakes", type: "skill" }, { name: "Going on Dates", type: "skill" },
        { name: "Marry for Money", type: "skill" }, { name: "Asking for loans", type: "skill" }, { name: "Mixing Drinks", type: "skill" },
        { name: "Burglar (Kleptomaniac Trait)", type: "skill" }, { name: "Paid Mentoring", type: "skill" }, { name: "Trash Can (NanoCan)", type: "skill" },
        { name: "Astronaut", type: "job" }, { name: "Athlete", type: "job" }, { name: "Business", type: "job" }, 
        { name: "Criminal", type: "job" }, { name: "Culinary", type: "job" }, { name: "Entertainer", type: "job" }, 
        { name: "Painter", type: "job" }, { name: "Secret Agent", type: "job" }, { name: "Style Influencer", type: "job" }, 
        { name: "Tech Guru", type: "job" }, { name: "Writer", type: "job" }, { name: "Barista", type: "job" }, { name: "Babysitter", type: "job" },
        { name: "Fast Food Employee", type: "job" }, { name: "Manual Laborer", type: "job" }, { name: "Retail Employee", type: "job" }
    ];

    baseGameOptions.forEach(opt => opt.category = 'base');
    Object.keys(packs).forEach(categoryKey => {
        let categoryName;
        if (categoryKey === 'expansions') categoryName = 'expansion';
        else if (categoryKey === 'gamePacks') categoryName = 'game';
        else if (categoryKey === 'stuffPacks') categoryName = 'stuff';
        else if (categoryKey === 'kits') categoryName = 'kit';
        else if (categoryKey === 'freePacks') categoryName = 'free';

        if (categoryName) {
            packs[categoryKey].forEach(pack => {
                if (pack.options) {
                    pack.options.forEach(option => {
                        option.category = categoryName;
                    });
                }
            });
        }
    });

    const containers = {
        expansions: document.getElementById('expansion-packs'),
        gamePacks: document.getElementById('game-packs'),
        stuffPacks: document.getElementById('stuff-packs'),
        kits: document.getElementById('kits'),
        freePacks: document.getElementById('free-packs'),
    };
    
    const allDefinedDisplayPacks = [];
    Object.values(packs).forEach(packArray => allDefinedDisplayPacks.push(...packArray));
    
    const emptyPacks = [
         { name: "Luxury Party Stuff" }, { name: "Perfect Patio Stuff" }, { name: "Movie Hangout Stuff" },
        { name: "Backyard Stuff" }, { name: "Vintage Glamour Stuff" }, { name: "Toddler Stuff" },
        { name: "Laundry Day Stuff" }, { name: "My First Pet Stuff" }, { name: "Tiny Living Stuff" }
    ];
    emptyPacks.forEach(emptyPack => {
        if (!allDefinedDisplayPacks.some(p => p.name === emptyPack.name)) {
            allDefinedDisplayPacks.push(emptyPack);
        }
    });

    allDefinedDisplayPacks.forEach(pack => {
        let container;
        if (packs.expansions.some(p => p.name === pack.name)) container = containers.expansions;
        else if (packs.gamePacks.some(p => p.name === pack.name)) container = containers.gamePacks;
        else if (packs.stuffPacks.some(p => p.name === pack.name)) container = containers.stuffPacks;
        else if (packs.kits.some(p => p.name === pack.name)) container = containers.kits;
        else if (packs.freePacks.some(p => p.name === pack.name)) container = containers.freePacks;
        if (container) {
            container.appendChild(createPackElement(pack));
        }
    });

    function formatPackNameForImage(name) {
        return name.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '');
    }

    function createPackElement(pack) {
        const packElement = document.createElement('div');
        packElement.classList.add('pack');
        packElement.dataset.packName = pack.name;
        const img = document.createElement('img');
        const imageName = formatPackNameForImage(pack.name);
        img.src = `images/${imageName}.png`;
        img.alt = pack.name;
        img.onerror = function() {
            this.style.display = 'none';
            const fallbackText = document.createElement('div');
            fallbackText.textContent = pack.name;
            fallbackText.style.cssText = 'display: flex; align-items: center; justify-content: center; height: 100%; text-align: center; padding: 5px; font-size: 14px;';
            packElement.insertBefore(fallbackText, this);
        };
        const nameElement = document.createElement('div');
        nameElement.classList.add('pack-name');
        nameElement.textContent = pack.name;
        packElement.appendChild(img);
        packElement.appendChild(nameElement);
        packElement.addEventListener('click', () => {
            packElement.classList.toggle('selected');
        });
        return packElement;
    }

    const generateBtn = document.getElementById('generate-btn');
    const challengeList = document.getElementById('challenge-list');
    const baseGameCheckbox = document.getElementById('base-game-checkbox');
    const noJobsCheckbox = document.getElementById('no-jobs-checkbox');
    const noGardeningPaintingCheckbox = document.getElementById('no-gardening-painting-checkbox');
    const onlyAdultCheckbox = document.getElementById('only-adult-checkbox');
    const householdOutput = document.getElementById('household-output');
    const householdResult = document.getElementById('household-result');

    generateBtn.addEventListener('click', () => {
        const householdTypes = ['👤 Adult', '👤 Teenager', '👥 Teenager with toddler', '👥 Teenager with infant'];
        if (onlyAdultCheckbox.checked) {
            householdOutput.style.display = 'none';
        } else {
            householdOutput.style.display = 'block';
            const randomIndex = Math.floor(Math.random() * householdTypes.length);
            householdResult.textContent = householdTypes[randomIndex];
        }

        let availableOptions = [];
        if (baseGameCheckbox.checked) {
            availableOptions = [...baseGameOptions];
        }

        const selectedPacks = document.querySelectorAll('.pack.selected');
        const allPacksFromData = [ ...packs.expansions, ...packs.gamePacks, ...packs.stuffPacks, ...packs.kits, ...packs.freePacks ];
        
        selectedPacks.forEach(selectedPackElement => {
            const packName = selectedPackElement.dataset.packName;
            const foundPack = allPacksFromData.find(p => p.name === packName);
            if (foundPack && foundPack.options) {
                availableOptions = availableOptions.concat(foundPack.options);
            }
        });

        if (noJobsCheckbox.checked) {
            availableOptions = availableOptions.filter(opt => opt.type !== 'job');
        }
        if (noGardeningPaintingCheckbox.checked) {
            availableOptions = availableOptions.filter(opt => 
                opt.name !== 'Gardener' && opt.name !== 'Gardening' && 
                opt.name !== 'Freelance Painter' && opt.name !== 'Painter'
            );
        }

        const availableJobs = availableOptions.filter(opt => opt.type === 'job');
        const availableSkills = availableOptions.filter(opt => opt.type === 'skill');

        challengeList.innerHTML = '';
        const selectedNumOption = document.querySelector('.num-option.active');
        const desiredCount = parseInt(selectedNumOption.textContent, 10);
        
        let selectedOptions = [];
        const pickAJob = Math.random() > 0.3;
        let jobPicked = false;

        if (pickAJob && availableJobs.length > 0 && desiredCount > 0) {
            const randomJobIndex = Math.floor(Math.random() * availableJobs.length);
            selectedOptions.push(availableJobs[randomJobIndex]);
            jobPicked = true;
        }

        const skillsToPick = jobPicked ? desiredCount - 1 : desiredCount;
        if (skillsToPick > 0 && availableSkills.length > 0) {
            const uniqueSkills = availableSkills.filter((skill, index, self) => 
                index === self.findIndex((s) => s.name === skill.name)
            );
            const shuffledSkills = uniqueSkills.sort(() => 0.5 - Math.random());
            const skillsToAdd = shuffledSkills.slice(0, skillsToPick);
            selectedOptions = selectedOptions.concat(skillsToAdd);
        }
        
        if (selectedOptions.length > 0) {
            selectedOptions.sort(() => 0.5 - Math.random());
            selectedOptions.forEach(option => {
                const li = document.createElement('li');
                li.classList.add(`category-${option.category}`);
                li.textContent = option.type === 'job' ? `${option.name} (Job)` : option.name;
                challengeList.appendChild(li);
            });
        } else {
            const li = document.createElement('li');
            li.textContent = 'No methods available. Check your filters or select some packs!';
            challengeList.appendChild(li);
        }
    });
    
    const collapsibles = document.querySelectorAll('.collapsible-header');
    collapsibles.forEach(header => {
        header.addEventListener('click', function() {
            this.classList.toggle('active');
            const arrow = this.querySelector('.arrow');
            const content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.style.padding = "0 10px";
                if (arrow) arrow.textContent = '▶';
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.padding = "10px";
                if (arrow) arrow.textContent = '▼';
            }
        });
    });

    const numOptions = document.querySelectorAll('.num-option');
    numOptions.forEach(option => {
        option.addEventListener('click', function() {
            numOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
        });
    });

    document.querySelectorAll('.check-all-btn').forEach(button => {
        button.addEventListener('click', function(event) {
            event.stopPropagation();
            const packGrid = this.closest('.pack-section').querySelector('.pack-grid');
            packGrid.querySelectorAll('.pack').forEach(pack => pack.classList.add('selected'));
        });
    });

    document.querySelectorAll('.uncheck-all-btn').forEach(button => {
        button.addEventListener('click', function(event) {
            event.stopPropagation();
            const packGrid = this.closest('.pack-section').querySelector('.pack-grid');
            packGrid.querySelectorAll('.pack').forEach(pack => pack.classList.remove('selected'));
        });
    });
});