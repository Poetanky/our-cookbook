import { useState, useEffect } from "react";

const CATEGORIES = ["All", "Breakfast", "Lunch", "Dinner"];
const PROTEINS = ["Chicken", "Beef", "Fish", "Shrimp", "Turkey", "Other"];

const initialRecipes = [
  {
    id: 1,
    name: "Egg & Turkey Sausage Muffin Cups",
    category: "Breakfast",
    protein: "Turkey",
    cookTime: "15 min",
    proteinGrams: "28g",
    ingredients: ["Eggs (1 dozen)", "Turkey sausage", "Fresh spinach", "Shredded cheddar"],
    instructions: [
      "Preheat oven to 375°F. Grease a 12-cup muffin tin well.",
      "Brown and crumble turkey sausage in a skillet over medium heat. Drain and set aside.",
      "Whisk all 12 eggs in a large bowl with salt and pepper.",
      "Divide sausage and spinach evenly between muffin cups.",
      "Pour egg mixture over the top, filling each cup about ¾ full.",
      "Top each cup with a pinch of shredded cheddar.",
      "Bake 15–18 min until eggs are set and tops are lightly golden.",
      "Let cool 5 min before removing. Store in an airtight container in the fridge up to 5 days.",
      "To reheat: microwave 60–90 seconds.",
    ],
    notes: "Make a dozen Sunday, microwave 2–3 each morning. Great meal prep.",
    favorite: false,
  },
  {
    id: 2,
    name: "Smoked Salmon & Cream Cheese Wrap",
    category: "Breakfast",
    protein: "Fish",
    cookTime: "5 min",
    proteinGrams: "26g",
    ingredients: ["Sliced smoked salmon", "Cream cheese", "High-fiber tortillas", "Cucumber", "Red onion", "Capers", "Lemon"],
    instructions: [
      "Lay tortilla flat and spread a generous layer of cream cheese across the surface.",
      "Layer smoked salmon evenly over the cream cheese.",
      "Add thin slices of cucumber and red onion.",
      "Scatter capers over the top and squeeze fresh lemon juice.",
      "Roll tight, slice in half on a diagonal, and serve immediately.",
    ],
    notes: "No cook. Heart healthy and genuinely filling.",
    favorite: false,
  },
  {
    id: 3,
    name: "Chicken & White Bean Jar Salad",
    category: "Lunch",
    protein: "Chicken",
    cookTime: "20 min prep",
    proteinGrams: "42g",
    ingredients: ["Chicken thighs or breasts", "White beans canned x2", "Arugula", "Cherry tomatoes", "Red onion", "Lemon vinaigrette"],
    instructions: [
      "Season chicken with salt, pepper, and olive oil. Cook in a skillet over medium-high heat 6–7 min per side until cooked through. Let rest, then slice or shred.",
      "Make lemon vinaigrette: whisk together 3 tbsp olive oil, juice of 1 lemon, 1 tsp Dijon, salt and pepper.",
      "Drain and rinse white beans.",
      "Layer jars in this order: vinaigrette on the bottom, then beans, then cherry tomatoes, then red onion, then chicken, then arugula on top.",
      "Seal and refrigerate up to 5 days. Flip and shake to dress when ready to eat.",
    ],
    notes: "Layer in mason jars Sunday. Flip and eat all week.",
    favorite: false,
  },
  {
    id: 4,
    name: "Chicken Stir Fry",
    category: "Dinner",
    protein: "Chicken",
    cookTime: "25 min",
    proteinGrams: "40g",
    ingredients: ["Chicken thighs or breasts", "Bell peppers", "Snap peas", "Bok choy", "Fresh ginger", "Garlic", "Soy sauce", "Sesame oil", "Jasmine rice"],
    instructions: [
      "Cook jasmine rice according to package directions.",
      "Slice chicken thin against the grain. Season lightly with salt and pepper.",
      "Mix sauce: 3 tbsp soy sauce, 1 tbsp sesame oil, 1 tsp fresh grated ginger, 2 cloves minced garlic.",
      "Heat a wok or large skillet over high heat until very hot. Add a splash of oil.",
      "Cook chicken in a single layer 3–4 min without moving, then stir and cook another 2 min. Remove and set aside.",
      "Add bell peppers and snap peas to the same pan. Stir fry 3 min on high heat.",
      "Add bok choy and cook another 2 min.",
      "Return chicken to the pan, pour sauce over everything, and toss to coat. Cook 1 min more.",
      "Serve immediately over jasmine rice.",
    ],
    notes: "Quick weeknight staple. Boneless thighs for best flavor.",
    favorite: false,
  },
  {
    id: 5,
    name: "Tuscan Cream Chicken",
    category: "Dinner",
    protein: "Chicken",
    cookTime: "35 min",
    proteinGrams: "44g",
    ingredients: ["Chicken thighs or breasts", "Sun-dried tomatoes", "Fresh spinach", "Heavy cream", "Parmesan", "Chicken broth", "Garlic", "Italian seasoning", "Pasta or egg noodles"],
    instructions: [
      "Cook pasta or egg noodles according to package directions. Drain and set aside.",
      "Season chicken with salt, pepper, and Italian seasoning.",
      "Heat olive oil in a large skillet over medium-high heat. Sear chicken 4–5 min per side until golden. Remove and set aside.",
      "In the same pan, sauté 3 cloves minced garlic 30 seconds until fragrant.",
      "Add sun-dried tomatoes and cook 1 min.",
      "Pour in ½ cup chicken broth and scrape up any browned bits from the pan.",
      "Add 1 cup heavy cream and bring to a gentle simmer.",
      "Stir in ½ cup grated parmesan until melted and sauce thickens slightly.",
      "Add fresh spinach and stir until wilted.",
      "Return chicken to the pan and simmer 5 min until cooked through.",
      "Serve over pasta or egg noodles.",
    ],
    notes: "Pan-sear the chicken first for a good crust before adding the cream sauce.",
    favorite: false,
  },
  {
    id: 6,
    name: "Beef & Broccoli",
    category: "Dinner",
    protein: "Beef",
    cookTime: "25 min",
    proteinGrams: "40g",
    ingredients: ["Flank steak or sirloin", "Broccoli", "Oyster sauce", "Soy sauce", "Garlic", "Fresh ginger", "Jasmine rice"],
    instructions: [
      "Cook jasmine rice according to package directions.",
      "Slice steak as thin as possible against the grain. Pat dry with paper towels.",
      "Mix sauce: 3 tbsp oyster sauce, 2 tbsp soy sauce, 1 tsp fresh grated ginger, 2 cloves minced garlic, ½ cup water, 1 tsp cornstarch.",
      "Cut broccoli into small florets. Blanch in boiling water 2 min, then drain.",
      "Heat a wok or skillet over very high heat. Add oil and sear beef in a single layer 1–2 min per side. Work in batches if needed. Remove and set aside.",
      "Pour sauce into the same pan and cook 2 min until it thickens slightly.",
      "Add broccoli and beef back in. Toss everything to coat.",
      "Serve immediately over jasmine rice.",
    ],
    notes: "Slice steak thin against the grain. High heat, fast cook.",
    favorite: false,
  },
  {
    id: 7,
    name: "Smash Burgers",
    category: "Dinner",
    protein: "Beef",
    cookTime: "20 min",
    proteinGrams: "38g",
    ingredients: ["90% lean ground beef", "American or cheddar slices", "Brioche or potato buns", "Lettuce", "Tomato", "Red onion", "Pickles", "Ketchup, mayo, mustard"],
    instructions: [
      "Divide ground beef into 2 oz balls — two per burger.",
      "Heat a cast iron skillet or flat griddle over high heat until smoking.",
      "Place a beef ball on the hot surface and immediately smash flat with a spatula. Hold pressure for 10 seconds.",
      "Season with salt and pepper. Cook 2 min until edges are crispy and browned.",
      "Flip, add a cheese slice, and cook 1 more min.",
      "Toast buns cut-side down in the same pan 30 seconds.",
      "Stack two patties per bun with your toppings and sauces.",
    ],
    notes: "Two thin patties per burger. Cast iron or flat griddle at high heat.",
    favorite: false,
  },
  {
    id: 8,
    name: "Sheet Pan Salmon",
    category: "Dinner",
    protein: "Fish",
    cookTime: "25 min",
    proteinGrams: "45g",
    ingredients: ["Salmon filets", "Asparagus", "Baby potatoes", "Lemons", "Garlic", "Olive oil", "Butter"],
    instructions: [
      "Preheat oven to 400°F.",
      "Halve baby potatoes and toss with olive oil, salt, and pepper. Spread on a sheet pan and roast 10 min.",
      "Push potatoes to the edges. Add asparagus and salmon filets to the center of the pan.",
      "Drizzle everything with olive oil. Top salmon with a pat of butter, minced garlic, and lemon slices.",
      "Season everything with salt and pepper.",
      "Roast 18–20 min until salmon flakes easily and potatoes are tender.",
      "Squeeze fresh lemon over everything before serving.",
    ],
    notes: "400°F for 18–20 min. Everything on one pan, zero cleanup.",
    favorite: false,
  },
  {
    id: 9,
    name: "Shrimp Tacos",
    category: "Dinner",
    protein: "Shrimp",
    cookTime: "20 min",
    proteinGrams: "35g",
    ingredients: ["Large shrimp peeled and deveined", "Corn tortillas", "Shredded cabbage", "Avocados", "Limes", "Cumin", "Chili powder", "Black beans canned"],
    instructions: [
      "Pat shrimp dry. Toss with cumin, chili powder, salt, pepper, and a drizzle of olive oil.",
      "Heat a skillet over medium-high heat. Cook shrimp 2–3 min per side until pink and slightly charred. Don't overcrowd the pan.",
      "Warm corn tortillas in a dry pan or directly over a gas burner 20–30 seconds per side.",
      "Drain and rinse black beans. Warm in a small saucepan with a pinch of cumin and salt.",
      "Slice avocado and squeeze lime juice over it to prevent browning.",
      "Assemble tacos: beans first, then shrimp, then cabbage, then avocado. Finish with a squeeze of fresh lime.",
    ],
    notes: "Lime-cumin marinade, pan sear 3 min each side. Don't overcook the shrimp.",
    favorite: false,
  },
  {
    id: 10,
    name: "Savory Breakfast Burritos",
    category: "Breakfast",
    protein: "Turkey",
    cookTime: "30 min",
    proteinGrams: "32g",
    ingredients: [
      "Eggs (8 large)",
      "Turkey breakfast sausage (½ lb)",
      "Black beans canned (1 can, drained)",
      "Bell peppers (2, diced)",
      "Yellow onion (1, diced)",
      "Shredded cheddar or Monterey Jack",
      "Large flour tortillas (6–8)",
      "Olive oil",
      "Cumin, garlic powder, salt & pepper",
      "Salsa or hot sauce for serving",
    ],
    instructions: [
      "Brown turkey sausage in a large skillet over medium-high heat, breaking it up as it cooks. Set aside.",
      "In the same pan, sauté diced onion and bell peppers in a little olive oil until soft, about 5 min.",
      "Add black beans, cumin, garlic powder, salt and pepper. Stir and cook 2 min.",
      "Whisk eggs, pour into the pan, and scramble everything together over medium-low heat until just set.",
      "Warm tortillas one at a time in a dry pan or microwave 20 seconds.",
      "Fill each tortilla with the egg mixture and a handful of cheese. Fold sides in, then roll tight.",
      "Wrap individually in foil. Refrigerate up to 5 days or freeze up to 1 month.",
      "To reheat: microwave 90 seconds from fridge, 2–3 min from frozen.",
    ],
    notes: "Brown the sausage first so the veggies pick up the flavor from the same pan. Don't overfill or they won't wrap tight.",
    favorite: false,
  },
];

const categoryColors = {
  Breakfast: { bg: "#fbbf2415", border: "#fbbf2440", text: "#fbbf24" },
  Lunch: { bg: "#34d39915", border: "#34d39940", text: "#34d399" },
  Dinner: { bg: "#f9731615", border: "#f9731640", text: "#f97316" },
};

const proteinEmoji = {
  Chicken: "🍗", Beef: "🥩", Fish: "🐟", Shrimp: "🍤", Turkey: "🦃", Other: "🍽️",
};

function RecipeCard({ recipe, onClick, onToggleFavorite }) {
  const cat = categoryColors[recipe.category];
  return (
    <div
      onClick={() => onClick(recipe)}
      style={{
        background: "#161616",
        border: "1px solid #242424",
        borderRadius: 12,
        padding: "18px 20px",
        cursor: "pointer",
        transition: "border-color 0.2s, transform 0.15s",
        position: "relative",
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = "#333"; e.currentTarget.style.transform = "translateY(-1px)"; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = "#242424"; e.currentTarget.style.transform = "translateY(0)"; }}
    >
      <button
        onClick={e => { e.stopPropagation(); onToggleFavorite(recipe.id); }}
        style={{
          position: "absolute", top: 14, right: 14,
          background: "none", border: "none", cursor: "pointer",
          fontSize: 16, opacity: recipe.favorite ? 1 : 0.25,
          transition: "opacity 0.2s",
        }}
      >❤️</button>

      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
        <span style={{ fontSize: 20 }}>{proteinEmoji[recipe.protein]}</span>
        <span style={{
          fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase",
          padding: "2px 8px", borderRadius: 20,
          background: cat.bg, border: `1px solid ${cat.border}`, color: cat.text,
        }}>{recipe.category}</span>
      </div>

      <div style={{ fontSize: 16, color: "#f0ece4", marginBottom: 6, paddingRight: 24, lineHeight: 1.3 }}>
        {recipe.name}
      </div>

      <div style={{ display: "flex", gap: 12, fontSize: 12, color: "#666" }}>
        <span style={{ color: "#f97316", fontStyle: "italic" }}>{recipe.proteinGrams} protein</span>
        <span>·</span>
        <span>{recipe.cookTime}</span>
      </div>
    </div>
  );
}

function RecipeModal({ recipe, onClose, onToggleFavorite }) {
  if (!recipe) return null;
  const cat = categoryColors[recipe.category];

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)",
        display: "flex", alignItems: "center", justifyContent: "center",
        zIndex: 100, padding: 20,
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: "#1a1a1a", border: "1px solid #2a2a2a",
          borderRadius: 16, padding: 28, maxWidth: 480, width: "100%",
          maxHeight: "85vh", overflowY: "auto",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
          <span style={{
            fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase",
            padding: "2px 8px", borderRadius: 20,
            background: cat.bg, border: `1px solid ${cat.border}`, color: cat.text,
          }}>{recipe.category}</span>
          <button onClick={onClose} style={{ background: "none", border: "none", color: "#666", cursor: "pointer", fontSize: 20 }}>×</button>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
          <span style={{ fontSize: 28 }}>{proteinEmoji[recipe.protein]}</span>
          <h2 style={{ margin: 0, fontSize: 22, color: "#f0ece4", fontWeight: 400, lineHeight: 1.2 }}>{recipe.name}</h2>
        </div>

        <div style={{ display: "flex", gap: 16, margin: "12px 0 20px", fontSize: 13 }}>
          <span style={{ color: "#f97316", fontStyle: "italic" }}>{recipe.proteinGrams} protein</span>
          <span style={{ color: "#555" }}>·</span>
          <span style={{ color: "#666" }}>{recipe.cookTime}</span>
          <button
            onClick={() => onToggleFavorite(recipe.id)}
            style={{ marginLeft: "auto", background: "none", border: "none", cursor: "pointer", fontSize: 16, opacity: recipe.favorite ? 1 : 0.3 }}
          >❤️ {recipe.favorite ? "Favorited" : "Favorite"}</button>
        </div>

        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "#555", marginBottom: 10 }}>Ingredients</div>
          {recipe.ingredients.map((ing, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 0", borderBottom: "1px solid #222", fontSize: 14, color: "#ccc" }}>
              <span style={{ color: "#f97316", fontSize: 10 }}>◆</span>
              {ing}
            </div>
          ))}
        </div>

        {recipe.notes && (
          <div style={{ background: "#111", border: "1px solid #222", borderRadius: 8, padding: "12px 14px" }}>
            <div style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "#555", marginBottom: 6 }}>Notes</div>
            <div style={{ fontSize: 13, color: "#888", fontStyle: "italic", lineHeight: 1.6 }}>{recipe.notes}</div>
          </div>
        )}
      </div>
    </div>
  );
}

function AddRecipeModal({ onClose, onAdd }) {
  const [form, setForm] = useState({
    name: "", category: "Dinner", protein: "Chicken",
    cookTime: "", proteinGrams: "", ingredients: "", notes: "",
  });

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleAdd = () => {
    if (!form.name.trim()) return;
    onAdd({
      ...form,
      proteinGrams: form.proteinGrams ? form.proteinGrams + (form.proteinGrams.includes("g") ? "" : "g") : "—",
      ingredients: form.ingredients.split("\n").map(s => s.trim()).filter(Boolean),
      favorite: false,
    });
    onClose();
  };

  const inputStyle = {
    width: "100%", background: "#111", border: "1px solid #2a2a2a",
    borderRadius: 8, padding: "10px 12px", color: "#f0ece4",
    fontSize: 14, fontFamily: "Georgia, serif", boxSizing: "border-box",
    outline: "none",
  };

  const labelStyle = {
    fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase",
    color: "#555", display: "block", marginBottom: 6,
  };

  return (
    <div
      onClick={onClose}
      style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: 20 }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{ background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: 16, padding: 28, maxWidth: 480, width: "100%", maxHeight: "90vh", overflowY: "auto" }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <h2 style={{ margin: 0, fontSize: 20, color: "#f0ece4", fontWeight: 400 }}>Add New Recipe</h2>
          <button onClick={onClose} style={{ background: "none", border: "none", color: "#666", cursor: "pointer", fontSize: 20 }}>×</button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div>
            <label style={labelStyle}>Recipe Name *</label>
            <input style={inputStyle} value={form.name} onChange={e => set("name", e.target.value)} placeholder="e.g. Garlic Butter Shrimp" />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div>
              <label style={labelStyle}>Category</label>
              <select style={inputStyle} value={form.category} onChange={e => set("category", e.target.value)}>
                {["Breakfast", "Lunch", "Dinner"].map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label style={labelStyle}>Protein</label>
              <select style={inputStyle} value={form.protein} onChange={e => set("protein", e.target.value)}>
                {PROTEINS.map(p => <option key={p}>{p}</option>)}
              </select>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div>
              <label style={labelStyle}>Cook Time</label>
              <input style={inputStyle} value={form.cookTime} onChange={e => set("cookTime", e.target.value)} placeholder="e.g. 25 min" />
            </div>
            <div>
              <label style={labelStyle}>Protein (grams)</label>
              <input style={inputStyle} value={form.proteinGrams} onChange={e => set("proteinGrams", e.target.value)} placeholder="e.g. 40" />
            </div>
          </div>

          <div>
            <label style={labelStyle}>Ingredients (one per line)</label>
            <textarea
              style={{ ...inputStyle, height: 100, resize: "vertical" }}
              value={form.ingredients}
              onChange={e => set("ingredients", e.target.value)}
              placeholder={"2 chicken breasts\n1 cup jasmine rice\n..."}
            />
          </div>

          <div>
            <label style={labelStyle}>Notes / Tips</label>
            <textarea
              style={{ ...inputStyle, height: 72, resize: "vertical" }}
              value={form.notes}
              onChange={e => set("notes", e.target.value)}
              placeholder="Any tips, substitutions, or reminders..."
            />
          </div>

          <button
            onClick={handleAdd}
            style={{
              background: "#f97316", border: "none", borderRadius: 8,
              padding: "12px 20px", color: "#fff", fontSize: 14,
              fontFamily: "Georgia, serif", cursor: "pointer", marginTop: 4,
              letterSpacing: "0.05em",
            }}
          >
            Add to Cookbook
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Cookbook() {
  const [recipes, setRecipes] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showAdd, setShowAdd] = useState(false);
  const [search, setSearch] = useState("");
  const [favOnly, setFavOnly] = useState(false);

  useEffect(() => {
  (async () => {
    try {
      const result = await window.storage.get("cookbook-recipes");
      if (result?.value) {
        setRecipes(JSON.parse(result.value));
      } else {
        setRecipes(initialRecipes);
      }
    } catch {
      setRecipes(initialRecipes);
    }
    setLoaded(true);
  })();
}, []);

  useEffect(() => {
    if (!loaded) return;
    (async () => {
      try {
        await window.storage.set("cookbook-recipes", JSON.stringify(recipes));
      } catch (e) {
        console.error("Save failed", e);
      }
    })();
  }, [recipes, loaded]);

  const toggleFavorite = (id) => {
    setRecipes(rs => rs.map(r => r.id === id ? { ...r, favorite: !r.favorite } : r));
    if (selectedRecipe?.id === id) setSelectedRecipe(r => ({ ...r, favorite: !r.favorite }));
  };

  const addRecipe = (data) => {
    const newRecipe = { ...data, id: Date.now() };
    setRecipes(rs => [...rs, newRecipe]);
  };

  const filtered = recipes.filter(r => {
    const matchCat = activeCategory === "All" || r.category === activeCategory;
    const matchSearch = r.name.toLowerCase().includes(search.toLowerCase());
    const matchFav = !favOnly || r.favorite;
    return matchCat && matchSearch && matchFav;
  });

  if (!loaded) return <div style={{ background: "#0f0f0f", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", color: "#555", fontFamily: "Georgia, serif" }}>Loading cookbook…</div>;

  return (
    <div style={{ minHeight: "100vh", background: "#0f0f0f", fontFamily: "Georgia, serif", color: "#f0ece4", paddingBottom: 60 }}>
      {/* Header */}
      <div style={{ background: "#111", borderBottom: "1px solid #1e1e1e", padding: "36px 24px 28px", textAlign: "center" }}>
        <div style={{ fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase", color: "#f97316", marginBottom: 10 }}>
          Decker & Rachael
        </div>
        <h1 style={{ margin: "0 0 6px", fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
          Our Cookbook
        </h1>
        <p style={{ margin: 0, color: "#555", fontSize: 13, fontStyle: "italic" }}>
          {recipes.length} recipes · {recipes.filter(r => r.favorite).length} favorites
        </p>
      </div>

      {/* Controls */}
      <div style={{ maxWidth: 640, margin: "24px auto 0", padding: "0 20px", display: "flex", flexDirection: "column", gap: 14 }}>
        {/* Search */}
        <input
          style={{
            background: "#161616", border: "1px solid #242424", borderRadius: 8,
            padding: "10px 14px", color: "#f0ece4", fontSize: 14,
            fontFamily: "Georgia, serif", outline: "none", width: "100%", boxSizing: "border-box",
          }}
          placeholder="Search recipes..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        {/* Filters row */}
        <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                background: activeCategory === cat ? "#f97316" : "#161616",
                border: `1px solid ${activeCategory === cat ? "#f97316" : "#242424"}`,
                borderRadius: 20, padding: "5px 14px", color: activeCategory === cat ? "#fff" : "#888",
                cursor: "pointer", fontSize: 12, fontFamily: "Georgia, serif",
                transition: "all 0.2s",
              }}
            >
              {cat}
            </button>
          ))}
          <button
            onClick={() => setFavOnly(f => !f)}
            style={{
              marginLeft: "auto", background: favOnly ? "#f9731620" : "none",
              border: `1px solid ${favOnly ? "#f97316" : "#242424"}`,
              borderRadius: 20, padding: "5px 14px",
              color: favOnly ? "#f97316" : "#666",
              cursor: "pointer", fontSize: 12, fontFamily: "Georgia, serif",
            }}
          >
            ❤️ Favorites
          </button>
        </div>
      </div>

      {/* Grid */}
      <div style={{
        maxWidth: 640, margin: "20px auto 0", padding: "0 20px",
        display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12,
      }}>
        {filtered.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} onClick={setSelectedRecipe} onToggleFavorite={toggleFavorite} />
        ))}
        {filtered.length === 0 && (
          <div style={{ gridColumn: "1/-1", textAlign: "center", padding: "40px 0", color: "#444", fontStyle: "italic" }}>
            No recipes found. Add one!
          </div>
        )}
      </div>

      {/* Add button */}
      <button
        onClick={() => setShowAdd(true)}
        style={{
          position: "fixed", bottom: 28, right: 28,
          background: "#f97316", border: "none", borderRadius: "50%",
          width: 52, height: 52, fontSize: 24, color: "#fff",
          cursor: "pointer", boxShadow: "0 4px 20px rgba(249,115,22,0.4)",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "transform 0.2s",
        }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
      >
        +
      </button>

      {selectedRecipe && (
        <RecipeModal
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
          onToggleFavorite={toggleFavorite}
        />
      )}
      {showAdd && (
        <AddRecipeModal onClose={() => setShowAdd(false)} onAdd={addRecipe} />
      )}
    </div>
  );
}
