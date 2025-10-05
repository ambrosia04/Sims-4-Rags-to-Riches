document.addEventListener('DOMContentLoaded', function() {
    const packs = {
        expansions: [
            { name: "Get to Work", options: [{ name: "Retail Business", type: "skill" }, { name: "Baking", type: "skill" }, { name: "Photography", type: "skill" }, { name: "Scientist", type: "job" }, { name: "Doctor", type: "job" }, { name: "Detective", type: "job" }] },
            { name: "Get Together", options: [{ name: "DJ", type: "skill" }, { name: "Dancing", type: "skill" }, { name: "Club Activities", type: "skill" }] },
            { name: "City Living", options: [{ name: "Festivals", type: "skill" }, { name: "Singing", type: "skill" }, { name: "Social Media", type: "job" }, { name: "Critic", type: "job" }, { name: "Politician", type: "job" }] },
            { name: "Cats & Dogs", options: [{ name: "Veterinarian", type: "job" }, { name: "Pet Training", type: "skill" }, { name: "Cat Hunting", type: "skill"}, { name: "Dog Hunting", type: "skill"}] },
            { name: "Seasons", options: [{ name: "Gardener", type: "job" }, { name: "Flower Arranging", type: "skill" }, { name: "Scout", type: "job" }, { name: "Decor Box Rummage", type: "skill" }] },
            { name: "Get Famous", options: [{ name: "Actor", type: "job" }, { name: "Media Production", type: "skill" }, { name: "Streaming", type: "skill" }] },
            { name: "Island Living", options: [{ name: "Conservationist", type: "job" }, { name: "Diving", type: "skill" }, { name: "Odd Jobs", type: "skill" }] },
            { name: "Discover University", options: [{ name: "Education", type: "job" }, { name: "Engineering", type: "job" }, { name: "Law", type: "job" }, { name: "Soccer Player", type: "job" }, { name: "E-sports Competitor", type: "job" }] },
            { name: "Eco Lifestyle", options: [{ name: "Civil Designer", type: "job" }, { name: "Freelance Crafter", type: "skill" }, { name: "Fabrication", type: "skill" }, { name: "Candle Making", type: "skill" }, { name: "Dumpster Diving", type: "skill" }] },
            { name: "Snowy Escape", options: [{ name: "Salaryperson", type: "job" }, { name: "Rock Climbing", type: "skill" }, { name: "Skiing", type: "skill" }, { name: "Snowboarding", type: "skill" }] },
            { name: "Cottage Living", options: [{ name: "Farming", type: "skill" }, { name: "Canning", type: "skill" }, { name: "Animal Care", type: "skill" }, { name: "Village Errands", type: "skill" }] },
            { name: "High School Years", options: [{ name: "Simfluencer", type: "job" }, { name: "Video Game Streamer", type: "job" }, { name: "After-school activities", type: "skill" }] },
            { name: "Growing Together", options: [{ name: "Science Fairs", type: "skill" }, { name: "Sleepovers", type: "skill" }] },
            { name: "Horse Ranch", options: [{ name: "Horse Breeding", type: "skill" }, { name: "Nectar Making", type: "skill" }] },
            { name: "For Rent", options: [{ name: "Property Owner", type: "skill" }] },
            { name: "Lovestruck", options: [{ name: "Wedding Planner", type: "job" }, { name: "Relationship Guru", type: "skill" }] },
            { name: "Life & Death", options: [{ name: "Undertaker", type: "job" }, { name: "Ghost Hunter", type: "skill" }] },
            { name: "Businesses & Hobbies", options: [{ name: "Running a business", type: "skill" }] },
            { name: "Enchanted by Nature", options: [{ name: "Fairy Activities", type: "skill" }] },
            { name: "Adventure Awaits", options: [{ name: "Archaeology", type: "skill" }, { name: "Exploring", type: "skill" }] }
        ],
        gamePacks: [
            { name: "Outdoor Retreat", options: [{ name: "Herbalism", type: "skill" }] },
            { name: "Spa Day", options: [{ name: "Wellness", type: "skill" }, { name: "Yoga Instructor", type: "skill" }] },
            { name: "Dine Out", options: [{ name: "Restaurant Owner", type: "skill" }] },
            { name: "Vampires", options: [{ name: "Vampire Lore", type: "skill" }] },
            { name: "Parenthood", options: [{ name: "Character Value Rewards", type: "skill" }] },
            { name: "Jungle Adventure", options: [{ name: "Archaeology", type: "skill" }, { name: "Selling Artifacts", type: "skill" }] },
            { name: "StrangerVille", options: [{ name: "Military", type: "job" }] },
            { name: "Realm of Magic", options: [{ name: "Potion Making", type: "skill" }, { name: "Spellcasting", type: "skill" }] },
            { name: "Journey to Batuu", options: [{ name: "Batuu Missions", type: "skill" }] },
            { name: "Dream Home Decorator", options: [{ name: "Interior Decorator", type: "job" }] },
            { name: "My Wedding Stories", options: [{ name: "Wedding Photography", type: "skill" }] },
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
            { name: "Nifty Knitting Stuff", options: [{ name: "Knitting", type: "skill" }, { name: "Selling on Plopsy", type: "skill" }] },
            { name: "Paranormal Stuff", options: [{ name: "Paranormal Investigator", type: "job" }] },
            { name: "Home Chef Hustle Stuff", options: [{ name: "Food Stand", type: "skill" }] },
            { name: "Crystal Creations Stuff", options: [{ name: "Jewelry Making", type: "skill" }] }
        ],
        kits: [{ name: "Bust the Dust Kit", options: [{ name: "Cleaning for money", type: "skill" }] }],
        freePacks: [{ name: "Grim's Ghoulish Guitar Pack", options: [{ name: "Playing Guitar", type: "skill" }] }]
    };

    const baseGameOptions = [
        { name: "Fishing", type: "skill" }, { name: "Cooking", type: "skill" }, { name: "Frog Breeding", type: "skill" }, 
        { name: "Gardening", type: "skill" }, { name: "Foraging", type: "skill" }, { name: "Collecting", type: "skill" }, 
        { name: "Writing", type: "skill" }, { name: "Painting", type: "skill" }, { name: "Programming", type: "skill" }, 
        { name: "Woodworking", type: "skill" }, { name: "Comedy", type: "skill" }, { name: "Mischief", type: "skill" }, 
        { name: "Stealing (Kleptomaniac trait)", type: "skill" },
        { name: "Astronaut", type: "job" }, { name: "Athlete", type: "job" }, { name: "Business", type: "job" }, 
        { name: "Criminal", type: "job" }, { name: "Culinary", type: "job" }, { name: "Entertainer", type: "job" }, 
        { name: "Painter", type: "job" }, { name: "Secret Agent", type: "job" }, { name: "Style Influencer", type: "job" }, 
        { name: "Tech Guru", type: "job" }, { name: "Writer", type: "job" }
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

    generateBtn.addEventListener('click', () => {
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
            li.textContent = 'No methods available. Check the "Add Base Game Methods" box or select some packs!';
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

    // --- NEW: Check/Uncheck All Logic ---
    document.querySelectorAll('.check-all-btn').forEach(button => {
        button.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevents the section from collapsing
            const packGrid = this.closest('.pack-section').querySelector('.pack-grid');
            packGrid.querySelectorAll('.pack').forEach(pack => pack.classList.add('selected'));
        });
    });

    document.querySelectorAll('.uncheck-all-btn').forEach(button => {
        button.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevents the section from collapsing
            const packGrid = this.closest('.pack-section').querySelector('.pack-grid');
            packGrid.querySelectorAll('.pack').forEach(pack => pack.classList.remove('selected'));
        });
    });
});