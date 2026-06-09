const recipes = [
  {
    id: "jollof-rice",
    continent: "Africa",
    name: "Smoky Jollof Rice",
    difficulty: "Medium",
    prep: "20 min",
    cook: "45 min",
    serves: "6",
    image: "assets/jollof.jpg",
    summary: "A bold West African tomato rice with warm spice, peppers, and a gentle smoky finish.",
    ingredients: ["2 cups long-grain rice", "1 onion, diced", "1 red bell pepper", "2 cups tomato passata", "2 tbsp tomato paste", "1 tsp thyme", "1 tsp curry powder", "3 cups stock", "2 tbsp oil"],
    steps: ["Blend pepper, onion, passata, and tomato paste into a smooth sauce.", "Fry the sauce in oil until deep red and fragrant.", "Stir in rice, spices, and stock.", "Cover and cook on low until the rice is tender.", "Rest for 10 minutes, then fluff and serve."]
  },
  {
    id: "fufu-light-soup",
    continent: "Africa",
    name: "Fufu with Light Soup",
    difficulty: "Medium",
    prep: "20 min",
    cook: "50 min",
    serves: "4",
    image: "assets/fufu.jpg",
    summary: "A comforting West African meal of smooth fufu served with peppery tomato light soup and tender chicken.",
    ingredients: ["Prepared fufu", "Chicken pieces", "Tomatoes", "Scotch bonnet or chilli", "Onion", "Garlic", "Ginger", "Stock", "Salt"],
    steps: ["Blend tomatoes, chilli, onion, garlic, and ginger.", "Simmer the blended base with stock until fragrant.", "Add chicken and cook until tender.", "Season the soup to taste.", "Serve hot with fufu on the side."]
  },
  {
    id: "waakye",
    continent: "Africa",
    name: "Ghanaian Waakye",
    difficulty: "Medium",
    prep: "25 min",
    cook: "1 hr",
    serves: "5",
    image: "assets/waakye.jpg",
    summary: "A Ghanaian rice and beans plate served with spaghetti, fish, egg, plantain, salad, and spicy sauce.",
    ingredients: ["2 cups rice", "1 cup black-eyed peas or beans", "Waakye leaves or baking soda", "Spaghetti", "Boiled eggs", "Fried fish", "Plantain", "Shito or pepper sauce"],
    steps: ["Cook beans until almost tender.", "Add rice and waakye leaves or a little baking soda.", "Cook until the rice and beans are tender.", "Prepare the sides while the rice cooks.", "Serve with fish, egg, plantain, spaghetti, and sauce."]
  },
  {
    id: "thai-green-curry",
    continent: "Asia",
    name: "Thai Green Curry",
    difficulty: "Easy",
    prep: "15 min",
    cook: "25 min",
    serves: "4",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=1200&q=80",
    summary: "A fragrant coconut curry with herbs, vegetables, and a balanced chilli lift.",
    ingredients: ["2 tbsp green curry paste", "400ml coconut milk", "400g tofu or chicken", "2 cups vegetables", "1 tbsp fish or soy sauce", "1 tsp sugar", "Thai basil", "Lime"],
    steps: ["Fry curry paste for one minute.", "Add coconut milk and bring to a simmer.", "Add protein and vegetables.", "Season with sauce, sugar, and lime.", "Finish with basil."]
  },
  {
    id: "sushi-bowls",
    continent: "Asia",
    name: "Sushi Rice Bowls",
    difficulty: "Easy",
    prep: "25 min",
    cook: "20 min",
    serves: "4",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=1200&q=80",
    summary: "All the clean flavour of sushi in an easy bowl with seasoned rice and crisp toppings.",
    ingredients: ["2 cups sushi rice", "3 tbsp rice vinegar", "1 tbsp sugar", "Cucumber", "Avocado", "Nori", "Salmon or tofu", "Soy sauce"],
    steps: ["Cook rice and fold through vinegar and sugar.", "Slice toppings into small pieces.", "Divide rice into bowls.", "Add protein, vegetables, and nori.", "Serve with soy sauce."]
  },
  {
    id: "bibimbap",
    continent: "Asia",
    name: "Rainbow Bibimbap",
    difficulty: "Medium",
    prep: "30 min",
    cook: "25 min",
    serves: "4",
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=1200&q=80",
    summary: "A Korean rice bowl with seasoned vegetables, protein, and gochujang sauce.",
    ingredients: ["4 cups cooked rice", "Spinach", "Carrots", "Mushrooms", "Bean sprouts", "Eggs", "Gochujang", "Sesame oil"],
    steps: ["Cook each vegetable separately with light seasoning.", "Fry eggs sunny-side up.", "Place rice in warm bowls.", "Arrange vegetables and egg on top.", "Serve with gochujang and sesame oil."]
  },
  {
    id: "spaghetti-carbonara",
    continent: "Europe",
    name: "Spaghetti Carbonara",
    difficulty: "Easy",
    prep: "15 min",
    cook: "20 min",
    serves: "4",
    image: "assets/spaghetti-carbonara.jpg",
    summary: "A creamy Roman pasta with spaghetti, crisp bacon or pancetta, cheese, egg, and black pepper.",
    ingredients: ["400g spaghetti", "150g pancetta or bacon", "3 eggs", "1 cup grated Parmesan or pecorino", "Black pepper", "Salt"],
    steps: ["Cook spaghetti in salted water until al dente.", "Crisp the pancetta or bacon in a pan.", "Whisk eggs with grated cheese and black pepper.", "Toss hot pasta with the pancetta off the heat.", "Add the egg mixture and pasta water to make a glossy sauce."]
  },
  {
    id: "margherita-pizza",
    continent: "Europe",
    name: "Margherita Pizza",
    difficulty: "Medium",
    prep: "25 min",
    cook: "12 min",
    serves: "2",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
    summary: "A crisp Italian classic with tomato, mozzarella, basil, and olive oil.",
    ingredients: ["1 pizza dough", "1/2 cup tomato sauce", "125g mozzarella", "Fresh basil", "Olive oil", "Semolina or flour"],
    steps: ["Heat oven as hot as possible.", "Stretch dough on a floured surface.", "Top with sauce and mozzarella.", "Bake until blistered and crisp.", "Finish with basil and olive oil."]
  },
  {
    id: "paella",
    continent: "Europe",
    name: "Saffron Paella",
    difficulty: "Hard",
    prep: "25 min",
    cook: "45 min",
    serves: "6",
    image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=1200&q=80",
    summary: "A Spanish rice pan with saffron, vegetables, and golden socarrat.",
    ingredients: ["2 cups paella rice", "Pinch saffron", "1 onion", "1 pepper", "1 cup peas", "5 cups stock", "Seafood or beans", "Lemon"],
    steps: ["Soak saffron in warm stock.", "Cook onion and pepper.", "Add rice and stir briefly.", "Pour in stock and toppings.", "Simmer without stirring until rice is tender."]
  },
  {
    id: "tacos",
    continent: "North America",
    name: "Street Corn Tacos",
    difficulty: "Easy",
    prep: "18 min",
    cook: "15 min",
    serves: "4",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1200&q=80",
    summary: "Warm tortillas filled with charred corn, crema, lime, chilli, and cheese.",
    ingredients: ["8 tortillas", "3 cups corn", "1/3 cup crema", "1 lime", "Chilli powder", "Cotija or feta", "Coriander", "Avocado"],
    steps: ["Char corn in a hot pan.", "Mix crema with lime and chilli.", "Warm tortillas.", "Fill with corn and avocado.", "Top with crema, cheese, and coriander."]
  },
  {
    id: "gumbo",
    continent: "North America",
    name: "Louisiana Gumbo",
    difficulty: "Hard",
    prep: "30 min",
    cook: "1 hr 30 min",
    serves: "6",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1200&q=80",
    summary: "A dark roux stew with vegetables, rice, and deep Creole flavour.",
    ingredients: ["1/2 cup oil", "1/2 cup flour", "1 onion", "2 celery sticks", "1 pepper", "Stock", "Chicken or okra", "Cajun seasoning", "Rice"],
    steps: ["Cook oil and flour into a dark roux.", "Add vegetables and stir until softened.", "Pour in stock and seasoning.", "Simmer with chicken or okra.", "Serve over rice."]
  },
  {
    id: "macaroni-and-cheese",
    continent: "North America",
    name: "Macaroni and Cheese",
    difficulty: "Easy",
    prep: "10 min",
    cook: "25 min",
    serves: "4",
    image: "assets/macaroni-and-cheese.jpg",
    summary: "A creamy North American comfort dish with tender macaroni folded through a rich cheese sauce.",
    ingredients: ["350g macaroni", "2 tbsp butter", "2 tbsp flour", "2 cups milk", "2 cups cheddar", "Salt", "Black pepper", "Parsley"],
    steps: ["Cook macaroni until just tender.", "Make a roux with butter and flour.", "Whisk in milk and simmer until thickened.", "Stir in cheese until smooth.", "Fold in macaroni and finish with pepper and parsley."]
  },
  {
    id: "ceviche",
    continent: "South America",
    name: "Peruvian Ceviche",
    difficulty: "Medium",
    prep: "25 min",
    cook: "0 min",
    serves: "4",
    image: "https://images.unsplash.com/photo-1611599537845-1c7aca0091c0?auto=format&fit=crop&w=1200&q=80",
    summary: "Bright citrus-marinated fish with onion, chilli, coriander, and sweet potato.",
    ingredients: ["500g very fresh white fish", "1 cup lime juice", "1 red onion", "1 chilli", "Coriander", "Salt", "Cooked sweet potato", "Corn"],
    steps: ["Dice fish and keep chilled.", "Combine lime, onion, chilli, and salt.", "Marinate fish briefly until opaque.", "Add coriander.", "Serve immediately with sweet potato and corn."]
  },
  {
    id: "arepas",
    continent: "South America",
    name: "Cheese Arepas",
    difficulty: "Easy",
    prep: "15 min",
    cook: "18 min",
    serves: "4",
    image: "assets/arepas.jpg",
    summary: "Golden corn cakes split and filled with cheese, beans, or avocado.",
    ingredients: ["2 cups masarepa", "2.5 cups warm water", "1 tsp salt", "1 cup grated cheese", "Oil", "Avocado or beans"],
    steps: ["Mix masarepa, water, and salt into a soft dough.", "Rest for five minutes.", "Shape into thick discs.", "Pan-cook until golden.", "Split and fill with cheese."]
  },
  {
    id: "feijoada",
    continent: "South America",
    name: "Brazilian Feijoada",
    difficulty: "Hard",
    prep: "25 min",
    cook: "2 hr",
    serves: "6",
    image: "assets/feijoada.jpg",
    summary: "A generous black bean stew served with rice, greens, and orange slices.",
    ingredients: ["2 cups black beans", "Smoked sausage or mushrooms", "1 onion", "3 garlic cloves", "Bay leaves", "Rice", "Greens", "Orange"],
    steps: ["Soak beans if needed.", "Cook onion, garlic, and sausage or mushrooms.", "Add beans, bay, and water.", "Simmer until rich and tender.", "Serve with rice, greens, and orange."]
  },
  {
    id: "barramundi",
    continent: "Australia/Oceania",
    name: "Lemon Myrtle Barramundi",
    difficulty: "Medium",
    prep: "15 min",
    cook: "14 min",
    serves: "4",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=80",
    summary: "Delicate fish with citrusy lemon myrtle, greens, and a quick pan sauce.",
    ingredients: ["4 barramundi fillets", "1 tsp lemon myrtle", "1 lemon", "2 tbsp butter", "Greens", "Salt", "Pepper"],
    steps: ["Season fish with lemon myrtle, salt, and pepper.", "Sear skin-side down until crisp.", "Turn and finish gently.", "Make a lemon butter pan sauce.", "Serve with greens."]
  },
  {
    id: "poke-bowl",
    continent: "Australia/Oceania",
    name: "Island Poke Bowl",
    difficulty: "Easy",
    prep: "25 min",
    cook: "20 min",
    serves: "4",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
    summary: "A fresh Pacific-style bowl with rice, marinated fish or tofu, fruit, and crunch.",
    ingredients: ["4 cups cooked rice", "400g tuna or tofu", "Soy sauce", "Sesame oil", "Mango", "Cucumber", "Edamame", "Sesame seeds"],
    steps: ["Marinate fish or tofu in soy and sesame.", "Prepare fruit and vegetables.", "Spoon rice into bowls.", "Add toppings in sections.", "Finish with sesame seeds."]
  },
  {
    id: "australian-lamingtons",
    continent: "Australia/Oceania",
    name: "Australian Lamingtons",
    difficulty: "Easy",
    prep: "30 min",
    cook: "25 min",
    serves: "12",
    image: "assets/australian-lamingtons.webp",
    summary: "Soft sponge cake squares dipped in chocolate icing and rolled in coconut.",
    ingredients: ["Sponge cake squares", "2 cups icing sugar", "1/3 cup cocoa powder", "Butter", "Milk", "Desiccated coconut"],
    steps: ["Cut cooled sponge cake into squares.", "Mix icing sugar, cocoa, butter, and milk into a smooth coating.", "Dip each square in chocolate icing.", "Roll in coconut until covered.", "Let the lamingtons set before serving."]
  },
  {
    id: "polar-cod",
    continent: "Antarctica-Inspired",
    name: "Polar Herb Cod",
    difficulty: "Easy",
    prep: "12 min",
    cook: "16 min",
    serves: "4",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    summary: "A clean, cold-climate-inspired fish bake with herbs, lemon, and potatoes.",
    ingredients: ["4 cod fillets", "500g baby potatoes", "Lemon", "Parsley", "2 tbsp olive oil", "Salt", "Pepper"],
    steps: ["Boil potatoes until just tender.", "Place fish and potatoes in a baking dish.", "Season with lemon, herbs, oil, salt, and pepper.", "Bake until fish flakes.", "Serve hot with extra lemon."]
  },
  {
    id: "research-station-stew",
    continent: "Antarctica-Inspired",
    name: "Research Station Stew",
    difficulty: "Medium",
    prep: "18 min",
    cook: "55 min",
    serves: "6",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80",
    summary: "A hearty pantry-friendly stew inspired by warming meals in remote stations.",
    ingredients: ["1 onion", "2 carrots", "2 potatoes", "1 cup lentils", "1 can tomatoes", "4 cups stock", "Dried herbs", "Frozen peas"],
    steps: ["Cook onion and carrots until softened.", "Add potatoes, lentils, tomatoes, stock, and herbs.", "Simmer until lentils are tender.", "Stir in peas.", "Season and serve with bread."]
  },
  {
    id: "berry-snow-parfait",
    continent: "Antarctica-Inspired",
    name: "Berry Snow Parfait",
    difficulty: "Easy",
    prep: "15 min",
    cook: "0 min",
    serves: "4",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=80",
    summary: "A bright frozen dessert with yogurt, berries, and crisp oat crumble.",
    ingredients: ["2 cups Greek yogurt", "2 cups frozen berries", "2 tbsp honey", "1 cup oat crumble", "Mint"],
    steps: ["Sweeten yogurt with honey.", "Crush some berries into a quick sauce.", "Layer yogurt, berries, and crumble.", "Freeze briefly for a frosty texture.", "Garnish with mint."]
  }
];

const continents = ["Africa", "Asia", "Europe", "North America", "South America", "Australia/Oceania", "Antarctica-Inspired"];
const state = {
  user: JSON.parse(localStorage.getItem("ckUser") || "null"),
  favourites: JSON.parse(localStorage.getItem("ckFavourites") || "[]"),
  newsletter: JSON.parse(localStorage.getItem("ckNewsletter") || "[]"),
  drafts: JSON.parse(localStorage.getItem("ckDrafts") || "[]")
};

const app = document.querySelector("#app");
const nav = document.querySelector(".nav");
const menuButton = document.querySelector(".menu-button");
const toast = document.querySelector(".toast");
const modalRoot = document.querySelector(".modal-root");
let toastTimer;

function saveState() {
  localStorage.setItem("ckUser", JSON.stringify(state.user));
  localStorage.setItem("ckFavourites", JSON.stringify(state.favourites));
  localStorage.setItem("ckNewsletter", JSON.stringify(state.newsletter));
  localStorage.setItem("ckDrafts", JSON.stringify(state.drafts));
}

function imageFor(continent) {
  const found = recipes.find((recipe) => recipe.continent === continent);
  return found ? found.image : recipes[0].image;
}

function byId(id) {
  return recipes.find((recipe) => recipe.id === id);
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}

function showQuickView(id) {
  const recipe = byId(id);
  if (!recipe) return;
  modalRoot.innerHTML = `
    <article class="modal" role="dialog" aria-modal="true" aria-labelledby="quick-title">
      <div class="modal-grid">
        <div class="modal-image">
          <img src="${recipe.image}" alt="${recipe.name}">
        </div>
        <div class="modal-body">
          <button class="modal-close" type="button" data-close-modal aria-label="Close quick view">X</button>
          <p class="eyebrow">${recipe.continent}</p>
          <h2 id="quick-title">${recipe.name}</h2>
          <p>${recipe.summary}</p>
          <div class="stat-grid">
            <div class="stat"><span>Prep</span><strong>${recipe.prep}</strong></div>
            <div class="stat"><span>Cook</span><strong>${recipe.cook}</strong></div>
            <div class="stat"><span>Level</span><strong>${recipe.difficulty}</strong></div>
            <div class="stat"><span>Serves</span><strong>${recipe.serves}</strong></div>
          </div>
          <div class="chip-row" style="margin-top:18px">
            <a class="button primary" href="#recipe/${recipe.id}" data-close-modal>Open full recipe</a>
            <button class="button secondary" type="button" data-favourite="${recipe.id}">Save favourite</button>
          </div>
        </div>
      </div>
    </article>
  `;
  modalRoot.classList.add("open");
  modalRoot.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeQuickView() {
  modalRoot.classList.remove("open");
  modalRoot.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function recipeCard(recipe) {
  const saved = state.favourites.includes(recipe.id);
  return `
    <article class="recipe-card">
      <div class="photo">
        <img src="${recipe.image}" alt="${recipe.name}" loading="lazy">
        <span class="image-name"><span>Photo</span>${recipe.name}</span>
      </div>
      <div class="card-body">
        <div class="chip-row">
          <span class="tag">${recipe.continent}</span>
          <span class="mini-tag">${recipe.difficulty}</span>
        </div>
        <h3>${recipe.name}</h3>
        <p>${recipe.summary}</p>
        <div class="meta-row">
          <span>${recipe.prep} prep</span>
          <span>${recipe.cook} cook</span>
          <span>Serves ${recipe.serves}</span>
        </div>
        <div class="recipe-tools">
          <a class="button secondary" href="#recipe/${recipe.id}">View recipe</a>
          <button class="pill-button" type="button" data-quick="${recipe.id}">Quick view</button>
          <button class="icon-button ${saved ? "saved" : ""}" type="button" data-favourite="${recipe.id}" aria-label="${saved ? "Remove from" : "Save to"} favourites">${saved ? "Saved" : "Save"}</button>
        </div>
      </div>
    </article>
  `;
}

function hero() {
  const featured = recipes.slice(0, 3);
  return `
    <section class="hero page">
      <div>
        <p class="eyebrow">Global recipes, beautifully organised</p>
        <h1>Cook your way across every continent.</h1>
        <p class="hero-copy">Explore 21 curated dishes across Africa, Asia, Europe, the Americas, Australia/Oceania, and Antarctica-inspired cooking. Search by continent, food name, or difficulty, then save favourites as you plan your next meal.</p>
        <div class="hero-actions">
          <a class="button primary" href="#recipes">Explore recipes</a>
          <a class="button secondary" href="#create-account">Create account</a>
        </div>
        <div class="metric-row" aria-label="Site highlights">
          <div class="metric"><strong>21</strong><span>named recipes</span></div>
          <div class="metric"><strong>7</strong><span>continents</span></div>
          <div class="metric"><strong>3</strong><span>dishes each</span></div>
        </div>
      </div>
      <div class="hero-gallery" aria-label="Featured food photography">
        <a class="hero-card" href="#recipe/${featured[0].id}">
          <img src="${featured[0].image}" alt="${featured[0].name}">
          <span class="hero-label"><span>${featured[0].continent}</span>${featured[0].name}</span>
        </a>
        <a class="hero-card large" href="#recipe/${featured[1].id}">
          <img src="${featured[1].image}" alt="${featured[1].name}">
          <span class="hero-label"><span>${featured[1].continent}</span>${featured[1].name}</span>
        </a>
      </div>
    </section>
  `;
}

function homePage() {
  return `
    ${hero()}
    <section class="section">
      <div class="section-title">
        <div>
          <p class="eyebrow">Featured recipes</p>
          <h2>Big flavour for this week's table.</h2>
        </div>
        <a class="button secondary" href="#recipes">View all</a>
      </div>
      <div class="grid featured-grid">
        ${recipes.slice(3, 6).map((recipe, index) => `
          <article class="feature-card ${index === 0 ? "large" : ""}">
            <img src="${recipe.image}" alt="${recipe.name}" loading="lazy">
            <div class="card-body">
              <div class="chip-row">
                <span class="tag">${recipe.continent}</span>
                <span class="mini-tag">${recipe.name}</span>
              </div>
              <h3>${recipe.name}</h3>
              <p>${recipe.summary}</p>
              <a class="button secondary" href="#recipe/${recipe.id}">Cook this</a>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
    ${continentSection()}
    <section class="section">
      <div class="newsletter-band">
        <div>
          <p class="eyebrow">Newsletter</p>
          <h2>New routes for hungry cooks.</h2>
          <p>Subscribe for fresh recipe drops, seasonal menus, and smart cooking notes from World Kitchen.</p>
        </div>
        ${newsletterForm("home-newsletter")}
      </div>
    </section>
  `;
}

function continentSection() {
  return `
    <section class="section">
      <div class="section-title">
        <div>
          <p class="eyebrow">Continents</p>
          <h2>Choose a place, then choose a plate.</h2>
        </div>
      </div>
      <div class="grid continent-grid">
        ${continents.map((continent) => `
          <a class="continent-card" href="#continent/${encodeURIComponent(continent)}">
            <img src="${imageFor(continent)}" alt="${continent} dishes" loading="lazy">
            <div class="card-body">
              <h3>${continent}</h3>
              <p>${recipes.filter((recipe) => recipe.continent === continent).length} recipes</p>
            </div>
          </a>
        `).join("")}
      </div>
    </section>
  `;
}

function filterControls(selectedContinent = "All") {
  return `
    <section class="filter-section">
      <form class="filter-bar" id="filters">
        <label class="field">
          <span>Search</span>
          <input id="search" type="search" placeholder="Food name or continent" autocomplete="off">
        </label>
        <label class="field">
          <span>Continent</span>
          <select id="continent-filter">
            <option ${selectedContinent === "All" ? "selected" : ""}>All</option>
            ${continents.map((continent) => `<option ${selectedContinent === continent ? "selected" : ""}>${continent}</option>`).join("")}
          </select>
        </label>
        <label class="field">
          <span>Difficulty</span>
          <select id="difficulty-filter">
            <option>All</option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </label>
      </form>
    </section>
  `;
}

function recipesPage(selectedContinent = "All") {
  return `
    <section class="page-hero page">
      <p class="eyebrow">Recipes</p>
      <h1>${selectedContinent === "All" ? "All recipes" : selectedContinent}</h1>
      <p class="hero-copy">Use the filters to find recipes by continent, dish name, or difficulty. Each card includes timing, serving size, and a detailed cooking page.</p>
    </section>
    ${filterControls(selectedContinent)}
    <section class="section">
      <div class="grid recipe-grid" id="recipe-results"></div>
    </section>
  `;
}

function renderRecipeResults() {
  const results = document.querySelector("#recipe-results");
  if (!results) return;
  const search = document.querySelector("#search").value.trim().toLowerCase();
  const continent = document.querySelector("#continent-filter").value;
  const difficulty = document.querySelector("#difficulty-filter").value;
  const filtered = recipes.filter((recipe) => {
    const matchesSearch = !search || `${recipe.name} ${recipe.continent} ${recipe.difficulty}`.toLowerCase().includes(search);
    const matchesContinent = continent === "All" || recipe.continent === continent;
    const matchesDifficulty = difficulty === "All" || recipe.difficulty === difficulty;
    return matchesSearch && matchesContinent && matchesDifficulty;
  });
  results.innerHTML = filtered.length ? filtered.map(recipeCard).join("") : `<p class="empty">No recipes match those filters yet.</p>`;
}

function detailPage(id) {
  const recipe = byId(id) || recipes[0];
  const saved = state.favourites.includes(recipe.id);
  return `
    <section class="page-hero page">
      <p class="eyebrow">${recipe.continent}</p>
      <h1>${recipe.name}</h1>
      <p class="hero-copy">${recipe.summary}</p>
    </section>
    <section class="detail-layout">
      <div class="detail-image">
        <img src="${recipe.image}" alt="${recipe.name}">
      </div>
      <div class="detail-panel">
        <div class="stat-grid">
          <div class="stat"><span>Prep</span><strong>${recipe.prep}</strong></div>
          <div class="stat"><span>Cook</span><strong>${recipe.cook}</strong></div>
          <div class="stat"><span>Difficulty</span><strong>${recipe.difficulty}</strong></div>
          <div class="stat"><span>Serves</span><strong>${recipe.serves}</strong></div>
        </div>
        <div class="cook-toolbar">
          <button class="button ${saved ? "dark" : "primary"}" type="button" data-favourite="${recipe.id}">${saved ? "Saved to favourites" : "Save favourite"}</button>
          <button class="button secondary" type="button" data-shopping-list>Show ingredient list</button>
          <button class="button secondary" type="button" data-reset-steps>Reset steps</button>
        </div>
        <div class="shopping-card hidden" data-shopping-card>
          <h3>Ingredient list</h3>
          <p>Use this while shopping or cooking from your phone.</p>
          <ul>${recipe.ingredients.map((item) => `<li>${item}</li>`).join("")}</ul>
        </div>
        <div class="columns">
          <div>
            <h2>Ingredients</h2>
            <ul>${recipe.ingredients.map((item) => `<li>${item}</li>`).join("")}</ul>
          </div>
          <div>
            <h2>Cooking Steps</h2>
            <ol class="check-list">${recipe.steps.map((step, index) => `<li><input type="checkbox" id="step-${index}"><span>${step}</span></li>`).join("")}</ol>
          </div>
        </div>
      </div>
    </section>
  `;
}

function accountPage(mode = "create") {
  const isCreate = mode === "create";
  return `
    <section class="form-page page">
      <div>
        <p class="eyebrow">${isCreate ? "Create account" : "Login"}</p>
        <h1>${isCreate ? "Save your next favourite meal." : "Welcome back."}</h1>
        <p class="hero-copy">This demo keeps account details securely in your browser storage. A production build would connect these forms to an encrypted backend and email service.</p>
      </div>
      <div class="form-panel">
        <div class="tabs">
          <a class="tab ${isCreate ? "active" : ""}" href="#create-account">Create Account</a>
          <a class="tab ${!isCreate ? "active" : ""}" href="#login">Login</a>
        </div>
        <form class="form" id="${isCreate ? "create-form" : "login-form"}">
          ${isCreate ? `
            <label class="field"><span>Name</span><input name="name" required autocomplete="name" minlength="2"></label>
          ` : ""}
          <label class="field"><span>Email</span><input name="email" type="email" required autocomplete="email"></label>
          <label class="field"><span>Password</span><input name="password" type="password" required autocomplete="${isCreate ? "new-password" : "current-password"}" minlength="8"></label>
          <button class="button primary" type="submit">${isCreate ? "Create account" : "Login"}</button>
          <p class="notice" role="status" aria-live="polite"></p>
        </form>
      </div>
    </section>
    ${profileSection()}
  `;
}

function profileSection() {
  const user = state.user;
  const favourites = recipes.filter((recipe) => state.favourites.includes(recipe.id));
  return `
    <section class="section">
      <div class="profile-card">
        <p class="eyebrow">Account</p>
        <h2>${user ? `Profile for ${user.name}` : "No active profile yet"}</h2>
        <form class="form two-col" id="profile-form">
          <label class="field"><span>Display name</span><input name="name" value="${user ? user.name : ""}" ${user ? "" : "disabled"}></label>
          <label class="field"><span>Email</span><input name="email" type="email" value="${user ? user.email : ""}" ${user ? "" : "disabled"}></label>
          <button class="button dark" type="submit" ${user ? "" : "disabled"}>Update profile</button>
          <p class="notice" role="status" aria-live="polite"></p>
        </form>
      </div>
      <div class="section-title" style="margin-top:36px">
        <div>
          <p class="eyebrow">Favourites</p>
          <h2>Saved recipes</h2>
        </div>
      </div>
      <div class="grid recipe-grid">${favourites.length ? favourites.map(recipeCard).join("") : `<p class="empty">Save recipes from any recipe card and they will appear here.</p>`}</div>
    </section>
  `;
}

function newsletterForm(id = "newsletter-form") {
  return `
    <form class="form" id="${id}">
      <label class="field"><span>Name</span><input name="name" required autocomplete="name"></label>
      <label class="field"><span>Email</span><input name="email" type="email" required autocomplete="email"></label>
      <label class="field"><span>Interests</span><select name="interest"><option>All continents</option>${continents.map((continent) => `<option>${continent}</option>`).join("")}</select></label>
      <button class="button primary" type="submit">Subscribe</button>
      <p class="notice" role="status" aria-live="polite"></p>
    </form>
  `;
}

function newsletterPage() {
  return `
    <section class="form-page page">
      <div>
        <p class="eyebrow">Newsletter</p>
        <h1>Get fresh recipes when they land.</h1>
        <p class="hero-copy">Subscribe for new dishes, cooking notes, seasonal collections, and continent-focused menu ideas.</p>
      </div>
      <div class="form-panel">${newsletterForm()}</div>
    </section>
  `;
}

function adminPage() {
  return `
    <section class="form-page page">
      <div>
        <p class="eyebrow">Admin</p>
        <h1>Post new recipes later.</h1>
        <p class="hero-copy">Use this admin-style workspace to draft future recipes. Drafts are saved locally and can be wired to a real backend when you are ready.</p>
      </div>
      <div class="admin-card">
        <form class="form" id="admin-form">
          <label class="field"><span>Recipe name</span><input name="name" required></label>
          <label class="field"><span>Continent</span><select name="continent">${continents.map((continent) => `<option>${continent}</option>`).join("")}</select></label>
          <label class="field"><span>Difficulty</span><select name="difficulty"><option>Easy</option><option>Medium</option><option>Hard</option></select></label>
          <label class="field"><span>Short description</span><textarea name="summary" rows="4" required></textarea></label>
          <button class="button primary" type="submit">Save draft</button>
          <p class="notice" role="status" aria-live="polite"></p>
        </form>
        <div class="admin-list">
          ${state.drafts.length ? state.drafts.map((draft) => `<article><strong>${draft.name}</strong><p>${draft.continent} - ${draft.difficulty}</p></article>`).join("") : `<p class="empty">No recipe drafts yet.</p>`}
        </div>
      </div>
    </section>
  `;
}

function aboutPage() {
  return `
    <section class="section page">
      <div class="about-panel">
        <div class="about-image">
          <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80" alt="Cook preparing food in a kitchen">
        </div>
        <div>
          <p class="eyebrow">About</p>
          <h1>Recipes with roots, context, and clear steps.</h1>
          <p class="hero-copy">World Kitchen is built for curious home cooks who want a confident path into global flavours. Every page is designed to be readable at the counter, searchable on mobile, and easy to return to when dinner is moving fast.</p>
          <a class="button primary" href="#recipes">Browse recipes</a>
        </div>
      </div>
    </section>
  `;
}

function contactPage() {
  return `
    <section class="form-page page">
      <div>
        <p class="eyebrow">Contact</p>
        <h1>Send a note to the kitchen.</h1>
        <p class="hero-copy">Questions, recipe ideas, corrections, and collaboration notes are welcome.</p>
        <div class="contact-grid" style="margin-top:24px">
          <article class="contact-card"><h3>Email</h3><p>hello@continentalkitchen.example</p></article>
          <article class="contact-card"><h3>Press</h3><p>press@continentalkitchen.example</p></article>
          <article class="contact-card"><h3>Partnerships</h3><p>partners@continentalkitchen.example</p></article>
        </div>
      </div>
      <div class="form-panel">
        <form class="form" id="contact-form">
          <label class="field"><span>Name</span><input name="name" required></label>
          <label class="field"><span>Email</span><input name="email" type="email" required></label>
          <label class="field"><span>Message</span><textarea name="message" rows="6" required></textarea></label>
          <button class="button primary" type="submit">Send message</button>
          <p class="notice" role="status" aria-live="polite"></p>
        </form>
      </div>
    </section>
  `;
}

function render() {
  const hash = location.hash.replace(/^#/, "") || "home";
  const [route, param] = hash.split("/");
  document.body.classList.remove("nav-open");
  menuButton.setAttribute("aria-expanded", "false");

  if (route === "home") app.innerHTML = homePage();
  else if (route === "continents") app.innerHTML = `<section class="page-hero page"><p class="eyebrow">Continents</p><h1>Explore by continent.</h1><p class="hero-copy">Each destination includes three dishes with ingredients, steps, timing, difficulty, and serving size.</p></section>${continentSection()}`;
  else if (route === "continent") app.innerHTML = recipesPage(decodeURIComponent(param || "All"));
  else if (route === "recipes") app.innerHTML = recipesPage();
  else if (route === "recipe") app.innerHTML = detailPage(param);
  else if (route === "create-account") app.innerHTML = accountPage("create");
  else if (route === "login") app.innerHTML = accountPage("login");
  else if (route === "newsletter") app.innerHTML = newsletterPage();
  else if (route === "admin") app.innerHTML = adminPage();
  else if (route === "about") app.innerHTML = aboutPage();
  else if (route === "contact") app.innerHTML = contactPage();
  else app.innerHTML = homePage();

  updateActiveNav(route);
  wirePage();
  app.focus({ preventScroll: true });
}

function updateActiveNav(route) {
  nav.querySelectorAll("a").forEach((link) => {
    const linkRoute = link.getAttribute("href").replace("#", "").split("/")[0];
    link.classList.toggle("active", linkRoute === route);
  });
}

function wirePage() {
  document.querySelectorAll("[data-favourite]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.favourite;
      state.favourites = state.favourites.includes(id) ? state.favourites.filter((item) => item !== id) : state.favourites.concat(id);
      saveState();
      showToast(state.favourites.includes(id) ? "Saved to favourites." : "Removed from favourites.");
      render();
    });
  });

  document.querySelectorAll("[data-quick]").forEach((button) => {
    button.addEventListener("click", () => showQuickView(button.dataset.quick));
  });

  document.querySelectorAll("[data-shopping-list]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = document.querySelector("[data-shopping-card]");
      const hidden = card.classList.toggle("hidden");
      button.textContent = hidden ? "Show ingredient list" : "Hide ingredient list";
    });
  });

  document.querySelectorAll("[data-reset-steps]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".check-list input").forEach((input) => {
        input.checked = false;
      });
      showToast("Cooking steps reset.");
    });
  });

  const filters = document.querySelector("#filters");
  if (filters) {
    filters.addEventListener("input", renderRecipeResults);
    renderRecipeResults();
  }

  document.querySelectorAll("#newsletter-form, #home-newsletter").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(form));
      state.newsletter.push(Object.assign({}, data, { createdAt: new Date().toISOString() }));
      saveState();
      form.reset();
      form.querySelector(".notice").textContent = "Subscribed. You are on the update list.";
      showToast("Newsletter subscription saved.");
    });
  });

  const createForm = document.querySelector("#create-form");
  if (createForm) {
    createForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(createForm));
      state.user = { name: data.name, email: data.email };
      saveState();
      createForm.querySelector(".notice").textContent = "Account created. Your profile is active.";
      showToast("Account created.");
      setTimeout(render, 500);
    });
  }

  const loginForm = document.querySelector("#login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(loginForm));
      state.user = state.user || { name: data.email.split("@")[0], email: data.email };
      saveState();
      loginForm.querySelector(".notice").textContent = "Logged in for this browser session.";
      showToast("Logged in.");
      setTimeout(render, 500);
    });
  }

  const profileForm = document.querySelector("#profile-form");
  if (profileForm) {
    profileForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!state.user) return;
      const data = Object.fromEntries(new FormData(profileForm));
      state.user = { name: data.name, email: data.email };
      saveState();
      profileForm.querySelector(".notice").textContent = "Profile updated.";
      showToast("Profile updated.");
    });
  }

  const adminForm = document.querySelector("#admin-form");
  if (adminForm) {
    adminForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(adminForm));
      state.drafts.unshift(Object.assign({}, data, { createdAt: new Date().toISOString() }));
      saveState();
      showToast("Recipe draft saved.");
      render();
    });
  }

  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      contactForm.reset();
      contactForm.querySelector(".notice").textContent = "Message prepared. Connect a mail service to send it.";
      showToast("Message prepared.");
    });
  }
}

modalRoot.addEventListener("click", (event) => {
  const favouriteButton = event.target.closest("[data-favourite]");
  if (favouriteButton) {
    const id = favouriteButton.dataset.favourite;
    state.favourites = state.favourites.includes(id) ? state.favourites.filter((item) => item !== id) : state.favourites.concat(id);
    saveState();
    showToast(state.favourites.includes(id) ? "Saved to favourites." : "Removed from favourites.");
    closeQuickView();
    render();
    return;
  }

  if (event.target === modalRoot || event.target.matches("[data-close-modal]")) {
    closeQuickView();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeQuickView();
});

menuButton.addEventListener("click", () => {
  const open = !document.body.classList.contains("nav-open");
  document.body.classList.toggle("nav-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
});

window.addEventListener("hashchange", render);
render();
