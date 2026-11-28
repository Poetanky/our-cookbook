import { useState, useEffect } from "react";

const CATEGORIES = ["All", "Breakfast", "Lunch", "Dinner", "Snack"];
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
  {
    id: 11,
    name: "Bagel Sandwich",
    category: "Breakfast",
    protein: "Other",
    cookTime: "10 min",
    proteinGrams: "24g",
    ingredients: ["Everything bagel", "Egg", "Breakfast sausage patty", "Slice of cheese (cheddar or American)"],
    instructions: [
      "Split and toast the bagel.",
      "Griddle the sausage patty through, 3–4 min per side.",
      "Fry or scramble the egg to fit the bagel.",
      "Lay the cheese over the hot patty for 30 sec to melt.",
      "Stack: bagel, egg, patty + cheese, bagel top.",
    ],
    notes: "Decker's fixed breakfast, every morning.",
    favorite: false,
  },
  {
    id: 12,
    name: "Ninja Creami Protein Ice Cream",
    category: "Snack",
    protein: "Other",
    cookTime: "5 min prep + 24 hr freeze",
    proteinGrams: "17g per half",
    ingredients: ["Banana (1)", "Protein powder (1 scoop)", "Lactose-free milk (1 cup)"],
    instructions: [
      "Blend banana, protein powder and milk until smooth.",
      "Pour into a Creami pint, freeze flat at least 24 hrs.",
      "Run the Protein (or Lite Ice Cream) program; re-spin if crumbly.",
      "Split into two bowls.",
    ],
    notes: "Shared nightly, about half each. Batch a week's worth of pints on Sunday so one is always ready to spin.",
    favorite: false,
  },
  {
    id: 13,
    name: "Chicken Fajita Bowls",
    category: "Dinner",
    protein: "Chicken",
    cookTime: "25 min",
    proteinGrams: "35g",
    ingredients: [
      "Boneless, skinless chicken breast (1½ lb), sliced into strips",
      "Olive oil (2 tbsp, divided)",
      "Chili powder (2 tsp), ground cumin (1 tsp), smoked paprika (1 tsp), garlic powder (½ tsp), onion powder (½ tsp), salt & pepper",
      "Limes (2), juiced, divided",
      "Red bell pepper (1) + green bell pepper (1), sliced",
      "Yellow onion (1), sliced",
      "Rice (1½ cups, cooked)",
      "Black beans (1 can, 15 oz, drained and rinsed)",
      "Avocado (1), sliced",
      "Plain Greek yogurt (¼ cup), to top",
      "Fresh cilantro, chopped, to top",
    ],
    instructions: [
      "Toss chicken strips with 1 tbsp olive oil, fajita seasoning and juice of 1 lime; marinate 15 min.",
      "Heat remaining oil in a large skillet over high heat; sauté peppers and onion 5–6 min until charred-tender, remove.",
      "Cook chicken in the same skillet 6–8 min until browned and cooked through (165°F); return peppers and onion to the pan, toss 1 min.",
      "Warm black beans in a small pot.",
      "Cook rice per package directions.",
      "Build bowls: rice, beans, chicken and peppers, avocado, a dollop of yogurt, cilantro, and a squeeze of the remaining lime.",
    ],
    notes: "Decker: ~9 oz chicken + full rice + full beans + full avocado. Rachael: ~6 oz chicken + half rice, double peppers & onions, light beans, half avocado.",
    favorite: false,
  },
  {
    id: 14,
    name: "Miso-Glazed Salmon with Soba Noodles & Bok Choy",
    category: "Dinner",
    protein: "Fish",
    cookTime: "25 min",
    proteinGrams: "38g",
    ingredients: [
      "Salmon fillets (2, about 7 oz + 5 oz)",
      "White or yellow miso paste (3 tbsp)",
      "Mirin (2 tbsp)",
      "Soy sauce (1 tbsp)",
      "Honey (1 tbsp)",
      "Rice vinegar (1 tsp)",
      "Soba noodles (6 oz, dry)",
      "Baby bok choy (4), halved lengthwise",
      "Sesame oil (1 tbsp)",
      "Garlic (2 cloves, minced)",
      "Sesame seeds & sliced scallion, to top",
    ],
    instructions: [
      "Whisk miso, mirin, soy sauce, honey and rice vinegar for the glaze.",
      "Pat salmon dry; brush with half the glaze. Bake at 425°F for 8–10 min, brushing with remaining glaze halfway, until just cooked through.",
      "Cook soba noodles per package directions; drain and rinse under cool water.",
      "Heat sesame oil in a skillet over medium-high; sauté bok choy with garlic 3–4 min until wilted and tender.",
      "Toss noodles with a drizzle of sesame oil if needed.",
      "Plate salmon over noodles with bok choy, top with sesame seeds and scallion.",
    ],
    notes: "Decker: 7 oz salmon + full soba + bok choy. Rachael: 5 oz salmon + light soba, double bok choy.",
    favorite: false,
  },
  {
    id: 15,
    name: "Jerk Chicken Thighs with Coconut Rice & Peas",
    category: "Dinner",
    protein: "Chicken",
    cookTime: "35 min",
    proteinGrams: "40g",
    ingredients: [
      "Boneless, skinless chicken thighs (1½ lb)",
      "Jerk seasoning (2 tbsp)",
      "Lime juice (1 tbsp) + olive oil (1 tbsp), for marinade",
      "Rice (1 cup) + canned coconut milk (¾ cup) + water (¾ cup)",
      "Pigeon peas or black-eyed peas (1 can, 15 oz, drained)",
      "Green beans (½ lb, trimmed)",
      "Sliced scallion, to top",
    ],
    instructions: [
      "Toss chicken thighs with jerk seasoning, lime juice and olive oil; marinate at least 20 min.",
      "Heat a grill pan or skillet over medium-high; cook chicken 6–7 min per side until charred and cooked through (165°F). Rest, then slice.",
      "Combine rice, coconut milk, water and a pinch of salt in a pot; bring to a boil, reduce heat, cover, simmer 15–18 min until rice is tender.",
      "Stir in the peas, warm through 2–3 min.",
      "Steam or sauté green beans 5–6 min until tender-crisp.",
      "Plate chicken over coconut rice and peas with green beans on the side, top with scallion.",
    ],
    notes: "Decker: ~9 oz chicken + full coconut rice & peas. Rachael: ~6 oz chicken + half rice & peas, extra green beans.",
    favorite: false,
  },
  {
    id: 16,
    name: "Beef & Broccoli Stir-Fry",
    category: "Dinner",
    protein: "Beef",
    cookTime: "25 min",
    proteinGrams: "42g",
    ingredients: [
      "Flank or sirloin steak (1½ lb), thinly sliced against the grain",
      "Cornstarch (1 tbsp) + salt & pepper, for coating",
      "Soy sauce (⅓ cup) + oyster sauce (2 tbsp) + brown sugar (1 tbsp) + sesame oil (1 tsp) + cornstarch (1 tsp) dissolved in water (2 tbsp), for sauce",
      "Neutral oil (2 tbsp, divided)",
      "Broccoli florets (4 cups)",
      "Garlic (3 cloves, minced) + fresh ginger (1 tbsp, minced)",
      "Rice (1½ cups, cooked)",
    ],
    instructions: [
      "Toss beef with cornstarch, salt and pepper.",
      "Whisk soy sauce, oyster sauce, brown sugar, sesame oil and cornstarch slurry for the sauce.",
      "Heat 1 tbsp oil in a wok or large skillet over high heat; sear beef in batches 2–3 min until browned, remove.",
      "Add remaining oil, stir-fry broccoli 4–5 min until crisp-tender; add garlic and ginger, cook 30 sec.",
      "Return beef to the pan, pour in the sauce, toss 1–2 min until glossy and thickened.",
      "Cook rice per package directions. Serve stir-fry over rice.",
    ],
    notes: "Decker: ~9 oz beef over full rice. Rachael: ~6 oz beef over half rice, double broccoli.",
    favorite: false,
  },
  {
    id: 17,
    name: "Shrimp Scampi with Linguine & Zucchini Noodles",
    category: "Dinner",
    protein: "Shrimp",
    cookTime: "25 min",
    proteinGrams: "36g",
    ingredients: [
      "Shrimp (1½ lb), peeled and deveined",
      "Butter (4 tbsp) + olive oil (3 tbsp), divided",
      "Garlic (5 cloves, minced)",
      "Red pepper flakes (½ tsp)",
      "Dry white wine (½ cup, or chicken broth)",
      "Lemon juice (2 tbsp) + zest of 1 lemon",
      "Linguine (8 oz)",
      "Zucchini (2 medium), spiralized into noodles",
      "Fresh parsley, chopped, to top",
      "Grated Parmesan, to top",
    ],
    instructions: [
      "Cook linguine per package directions, reserving ½ cup pasta water; drain.",
      "Pat shrimp dry, season with salt and pepper.",
      "Heat 2 tbsp olive oil + 2 tbsp butter in a large skillet over medium-high; cook shrimp 2–3 min per side until pink, remove.",
      "Add remaining butter and oil, garlic and red pepper flakes to the pan, cook 30 sec; pour in wine, simmer 2 min. Stir in lemon juice and zest.",
      "In a separate pan, sauté zucchini noodles in a little olive oil 2–3 min until just tender — don't overcook.",
      "Return shrimp to the sauce; toss linguine through it, adding splashes of pasta water as needed.",
      "Plate one portion over linguine and the other over zucchini noodles, both topped with shrimp, parsley and Parmesan.",
    ],
    notes: "Decker: ~9 oz shrimp over full linguine. Rachael: ~6 oz shrimp over zucchini noodles in place of pasta, light Parmesan.",
    favorite: false,
  },
  {
    id: 18,
    name: "Turkey Taco Skillet with Black Beans & Corn",
    category: "Dinner",
    protein: "Turkey",
    cookTime: "30 min",
    proteinGrams: "34g",
    ingredients: [
      "Lean ground turkey (1½ lb)",
      "Olive oil (1 tbsp)",
      "Yellow onion (½, diced)",
      "Garlic (2 cloves, minced)",
      "Taco seasoning (2 tbsp)",
      "Black beans (1 can, 15 oz, drained and rinsed)",
      "Corn kernels (1 cup, fresh, frozen or canned)",
      "Diced tomatoes with green chiles (1 can, 10 oz)",
      "Rice (1 cup, cooked)",
      "Shredded cheddar (¼ cup) + chopped cilantro + lime wedges, to top",
    ],
    instructions: [
      "Heat olive oil in a large skillet over medium; sauté onion 4 min until soft. Add garlic, cook 30 sec.",
      "Add ground turkey, break up, cook 6–7 min until browned and cooked through.",
      "Stir in taco seasoning, black beans, corn and diced tomatoes with chiles; simmer 8–10 min until thickened.",
      "Cook rice per package directions.",
      "Serve turkey mixture over rice, top with cheddar, cilantro and lime.",
    ],
    notes: "Decker: ~2 cups turkey mixture over full rice, full cheese. Rachael: ~1¼ cups turkey mixture over light rice, light cheese, extra lime & cilantro.",
    favorite: false,
  },
  {
    id: 19,
    name: "Buffalo Chicken & Rice Bowls with Ranch Drizzle",
    category: "Dinner",
    protein: "Chicken",
    cookTime: "30 min",
    proteinGrams: "40g",
    ingredients: [
      "Boneless, skinless chicken breast (1½ lb), cut into bite-size pieces",
      "Olive oil (1 tbsp)",
      "Buffalo sauce (⅓ cup, divided)",
      "Rice (1½ cups, cooked)",
      "Broccoli florets (4 cups), steamed or roasted",
      "Plain Greek yogurt (½ cup) + dried dill (1 tsp) + garlic powder (½ tsp) + onion powder (½ tsp) + milk (1–2 tbsp), for ranch",
      "Celery (2 stalks, diced), to top",
      "Shredded cheddar (¼ cup, optional), to top",
    ],
    instructions: [
      "Season chicken with salt and pepper. Heat olive oil in a skillet over medium-high; cook chicken 6–8 min until browned and cooked through (165°F).",
      "Toss cooked chicken with half the buffalo sauce; reserve the rest for serving.",
      "Steam or roast broccoli until tender-crisp.",
      "Whisk Greek yogurt, dill, garlic powder, onion powder and milk for the yogurt ranch.",
      "Cook rice per package directions.",
      "Build bowls: rice, chicken, broccoli, a drizzle of yogurt ranch and the remaining buffalo sauce, top with celery and cheddar.",
    ],
    notes: "Decker: ~9 oz chicken + full rice + full ranch + full buffalo. Rachael: ~6 oz chicken + half rice, double broccoli, light ranch.",
    favorite: false,
  },
  {
    id: 20,
    name: "Chicken Tikka Masala with Basmati Rice & Spinach",
    category: "Dinner",
    protein: "Chicken",
    cookTime: "40 min",
    proteinGrams: "38g",
    ingredients: [
      "Boneless, skinless chicken thighs (1½ lb), cut into 1-inch pieces",
      "Plain Greek yogurt (½ cup) + lemon juice (1 tbsp) + garam masala (1 tsp) + ground cumin (½ tsp) + paprika (½ tsp) + turmeric (¼ tsp) + salt, for marinade",
      "Butter or ghee (2 tbsp, divided)",
      "Olive oil (1 tbsp)",
      "Yellow onion (1), diced",
      "Garlic (4 cloves, minced) + fresh ginger (1 tbsp, minced)",
      "Garam masala (1 tbsp) + ground cumin (1 tsp) + smoked paprika (1 tsp) + turmeric (½ tsp) + cayenne (¼ tsp), for sauce",
      "Crushed tomatoes (1 can, 15 oz)",
      "Heavy cream (⅔ cup)",
      "Sugar (1 tsp)",
      "Baby spinach (3 cups)",
      "Rice (1½ cups, cooked)",
      "Fresh cilantro, to top",
    ],
    instructions: [
      "Whisk yogurt, lemon juice and marinade spices; toss with chicken, marinate at least 20 min.",
      "Heat 1 tbsp butter/ghee in a large pot over medium-high; sear chicken in batches 5–6 min until browned (not fully cooked through), remove.",
      "Add olive oil and remaining butter to the pot; sauté onion 5 min until soft. Add garlic and ginger, cook 1 min. Stir in sauce spices, cook 30 sec until fragrant.",
      "Add crushed tomatoes and sugar; simmer 8 min, stirring occasionally.",
      "Stir in cream; return chicken to the pot, simmer 8–10 min until chicken is cooked through (165°F) and sauce has thickened.",
      "Stir in spinach, cook 2 min until wilted.",
      "Cook rice per package directions. Serve chicken and sauce over rice, topped with cilantro.",
    ],
    notes: "Decker: ~9 oz chicken & sauce over full rice (1 cup). Rachael: ~6 oz chicken over half rice, double spinach, lighter ladle of sauce.",
    favorite: false,
    weekOf: "2026-10-26",
  },
  {
    id: 21,
    name: "Lemon-Garlic Baked Tilapia with Rice & Roasted Asparagus",
    category: "Dinner",
    protein: "Fish",
    cookTime: "25 min",
    proteinGrams: "34g",
    ingredients: [
      "Tilapia fillets (4, about 1½ lb total)",
      "Olive oil (3 tbsp, divided)",
      "Garlic (3 cloves, minced)",
      "Lemon juice (2 tbsp) + zest of 1 lemon",
      "Dried oregano (1 tsp) + paprika (½ tsp) + salt & pepper",
      "Asparagus (1 lb), trimmed",
      "Rice (1½ cups, cooked)",
      "Fresh parsley, chopped, to top",
    ],
    instructions: [
      "Preheat oven to 400°F; line a baking sheet.",
      "Whisk 2 tbsp olive oil, garlic, lemon juice, zest, oregano and paprika.",
      "Pat tilapia dry, season with salt and pepper, place on the baking sheet; spoon the lemon-garlic mixture over each fillet.",
      "Toss asparagus with remaining olive oil, salt and pepper; spread on the same sheet around the fish.",
      "Bake 12–15 min until the fish flakes easily and asparagus is tender-crisp.",
      "Cook rice per package directions.",
      "Plate fish over rice with asparagus alongside, top with parsley and a squeeze of lemon.",
    ],
    notes: "Decker: 2 fillets (~12 oz) + full rice + full asparagus. Rachael: 1 fillet (~6 oz) + half rice, double asparagus.",
    favorite: false,
    weekOf: "2026-10-26",
  },
  {
    id: 22,
    name: "Beef Shawarma Bowls with Hummus & Cucumber-Tomato Salad",
    category: "Dinner",
    protein: "Beef",
    cookTime: "30 min",
    proteinGrams: "36g",
    ingredients: [
      "Flank or sirloin steak (1½ lb), thinly sliced",
      "Olive oil (2 tbsp) + lemon juice (1 tbsp) + ground cumin (2 tsp) + paprika (2 tsp) + ground coriander (1 tsp) + cinnamon (½ tsp) + turmeric (½ tsp) + garlic powder (½ tsp) + salt & pepper, for marinade",
      "Rice (1½ cups, cooked)",
      "Hummus (1 cup)",
      "Cucumber (1), diced",
      "Cherry tomatoes (1 cup), halved",
      "Red onion (¼ small), thinly sliced",
      "Olive oil (1 tbsp) + lemon juice (1 tbsp) + salt, for salad dressing",
      "Fresh parsley, chopped, to top",
    ],
    instructions: [
      "Toss steak slices with the marinade; marinate at least 20 min.",
      "Heat a large skillet over high heat; sear steak in batches 2–3 min per batch until browned and just cooked through, remove.",
      "Toss cucumber, tomatoes and red onion with the dressing for the salad.",
      "Cook rice per package directions.",
      "Build bowls: rice, a scoop of hummus, beef and the cucumber-tomato salad, topped with parsley.",
    ],
    notes: "Decker: ~9 oz beef + full rice + full hummus (¼ cup). Rachael: ~6 oz beef over half rice, double salad, light hummus (2 tbsp).",
    favorite: false,
    weekOf: "2026-10-26",
  },
  {
    id: 23,
    name: "Kung Pao Shrimp with Rice & Snap Peas",
    category: "Dinner",
    protein: "Shrimp",
    cookTime: "25 min",
    proteinGrams: "32g",
    ingredients: [
      "Shrimp (1½ lb), peeled and deveined",
      "Cornstarch (1 tbsp) + salt & pepper, for coating",
      "Soy sauce (¼ cup) + rice vinegar (2 tbsp) + hoisin sauce (1 tbsp) + brown sugar (1 tbsp) + sesame oil (1 tsp) + cornstarch (1 tsp) dissolved in water (2 tbsp), for sauce",
      "Neutral oil (2 tbsp, divided)",
      "Garlic (3 cloves, minced) + fresh ginger (1 tbsp, minced)",
      "Red pepper flakes (½ tsp)",
      "Snap peas (2 cups)",
      "Roasted peanuts (¼ cup)",
      "Rice (1½ cups, cooked)",
      "Sliced scallion, to top",
    ],
    instructions: [
      "Toss shrimp with cornstarch, salt and pepper.",
      "Whisk soy sauce, rice vinegar, hoisin, brown sugar, sesame oil and cornstarch slurry for the sauce.",
      "Heat 1 tbsp oil in a wok or large skillet over high heat; cook shrimp 2–3 min until pink, remove.",
      "Add remaining oil, stir-fry snap peas 2–3 min until crisp-tender; add garlic, ginger and red pepper flakes, cook 30 sec.",
      "Return shrimp to the pan, pour in the sauce, toss 1–2 min until glossy and thickened. Stir in peanuts.",
      "Cook rice per package directions. Serve over rice, top with scallion.",
    ],
    notes: "Decker: ~9 oz shrimp over full rice + full peanuts. Rachael: ~6 oz shrimp over half rice, double snap peas, light peanuts (1 tbsp).",
    favorite: false,
    weekOf: "2026-10-26",
  },
  {
    id: 24,
    name: "Turkey Meatball Marinara with Spaghetti & Parmesan",
    category: "Dinner",
    protein: "Turkey",
    cookTime: "35 min",
    proteinGrams: "33g",
    ingredients: [
      "Lean ground turkey (1½ lb)",
      "Breadcrumbs (½ cup) + egg (1) + grated Parmesan (2 tbsp) + garlic (2 cloves, minced) + Italian seasoning (1 tsp) + salt & pepper, for meatball mix",
      "Olive oil (1 tbsp)",
      "Marinara sauce (1 jar, 24 oz)",
      "Spaghetti (8 oz)",
      "Fresh basil, torn, to top",
      "Grated Parmesan, to top",
    ],
    instructions: [
      "Combine ground turkey, breadcrumbs, egg, Parmesan, garlic, Italian seasoning, salt and pepper; form into 16 meatballs (~1½ inch each).",
      "Heat olive oil in a large skillet over medium-high; brown meatballs on all sides, 6–8 min total.",
      "Pour marinara sauce over meatballs, reduce heat, cover and simmer 12–15 min until meatballs are cooked through (165°F).",
      "Cook spaghetti per package directions; drain.",
      "Serve meatballs and sauce over spaghetti, topped with basil and Parmesan.",
    ],
    notes: "Decker: ~5 meatballs + full spaghetti + full sauce. Rachael: ~3 meatballs + light spaghetti, extra sauce & basil.",
    favorite: false,
    weekOf: "2026-10-26",
  },
  {
    id: 25,
    name: "BBQ Chicken & Sweet Potato Bowls with Charred Corn",
    category: "Dinner",
    protein: "Chicken",
    cookTime: "35 min",
    proteinGrams: "38g",
    ingredients: [
      "Boneless, skinless chicken breast (1½ lb)",
      "BBQ sauce (⅓ cup, divided)",
      "Olive oil (1 tbsp) + salt & pepper",
      "Sweet potatoes (2 medium), cut into ½-inch cubes",
      "Olive oil (1 tbsp) + smoked paprika (½ tsp) + salt, for sweet potatoes",
      "Corn kernels (1½ cups, fresh or frozen)",
      "Romaine lettuce or coleslaw mix (2 cups)",
      "Apple cider vinegar (2 tbsp) + honey (1 tsp) + pinch salt, for slaw dressing",
      "Sliced scallion, to top",
    ],
    instructions: [
      "Preheat oven to 425°F. Toss sweet potato cubes with 1 tbsp olive oil, smoked paprika and salt; roast on a sheet pan 20–25 min, flipping once, until tender and caramelized.",
      "Season chicken with salt and pepper; heat 1 tbsp olive oil in a skillet over medium-high, cook chicken 6–7 min per side until cooked through (165°F). Rest 5 min, slice, then toss with half the BBQ sauce.",
      "Heat a dry skillet or grill pan over high heat; char corn kernels 4–5 min, stirring occasionally, until lightly blackened in spots.",
      "Toss romaine with vinegar, honey and a pinch of salt for a quick slaw.",
      "Build bowls: sweet potatoes, chicken, charred corn and slaw, drizzle with remaining BBQ sauce, top with scallion.",
    ],
    notes: "Decker: ~9 oz chicken + full sweet potatoes + full corn. Rachael: ~6 oz chicken + light sweet potatoes (half portion), double slaw, light BBQ sauce.",
    favorite: false,
    weekOf: "2026-10-26",
  },
  {
    id: 26,
    name: "Moroccan Chickpea & Vegetable Stew with Couscous",
    category: "Dinner",
    protein: "Other",
    cookTime: "35 min",
    proteinGrams: "16g",
    ingredients: [
      "Olive oil (2 tbsp)",
      "Yellow onion (1), diced",
      "Carrots (2), diced",
      "Garlic (2 cloves, minced) + fresh ginger (1 tbsp, minced)",
      "Ground cumin (2 tsp) + paprika (1 tsp) + cinnamon (½ tsp) + turmeric (½ tsp) + cayenne (¼ tsp, optional)",
      "Chickpeas (2 cans, 15 oz each), drained and rinsed",
      "Diced tomatoes (1 can, 15 oz)",
      "Vegetable broth (1½ cups)",
      "Baby spinach (2 cups)",
      "Couscous (1 cup, dry)",
      "Plain Greek yogurt (½ cup), to top",
      "Fresh cilantro + lemon wedges, to top",
      "Crumbled feta, optional, to top",
    ],
    instructions: [
      "Heat olive oil in a large pot over medium; sauté onion and carrots 5–6 min until softened.",
      "Add garlic and ginger, cook 1 min; stir in cumin, paprika, cinnamon, turmeric and cayenne, cook 30 sec until fragrant.",
      "Add chickpeas, diced tomatoes and vegetable broth; bring to a simmer, cover partially and cook 15–18 min until slightly thickened.",
      "Stir in spinach, cook 2 min until wilted.",
      "Meanwhile, bring an equal amount of water to a boil, stir in couscous, cover, remove from heat and let stand 5 min, then fluff.",
      "Serve stew over couscous, topped with yogurt, cilantro, a squeeze of lemon and feta if using.",
    ],
    notes: "Decker: full stew (~2 cups) + full couscous + a drizzle of olive oil or crumbled feta. Rachael: lighter stew (~1½ cups) + half couscous, extra spinach stirred in, dollop of yogurt.",
    favorite: false,
    weekOf: "2026-10-26",
  },
  {
    id: 27,
    name: "Pan-Seared Cod with Lemon-Butter, Garlic Mash & Asparagus",
    category: "Dinner",
    protein: "Fish",
    cookTime: "35 min",
    proteinGrams: "32g",
    ingredients: [
      "Cod fillets (4, about 1½ lb total)",
      "Salt & pepper",
      "Flour (2 tbsp), for dusting, optional",
      "Butter (3 tbsp, divided) + butter (2 tbsp, for mash)",
      "Olive oil (1 tbsp, for cod) + olive oil (1 tbsp, for asparagus)",
      "Garlic (3 cloves, minced)",
      "Lemon juice (2 tbsp) + lemon zest (1 tsp)",
      "Fresh parsley (2 tbsp), chopped",
      "Potatoes (1½ lb, Yukon gold or russet), peeled and cubed",
      "Milk or cream (¼ cup), for mash",
      "Asparagus (1 lb), trimmed",
    ],
    instructions: [
      "Boil potatoes in salted water 15–18 min until fork-tender; drain and mash with milk or cream, 2 tbsp butter, salt and pepper.",
      "Pat cod dry, season with salt and pepper, dust lightly with flour.",
      "Heat olive oil and 1 tbsp butter in a skillet over medium-high; sear cod 3–4 min per side until golden and just opaque through. Remove.",
      "Toss asparagus with olive oil, salt and pepper; roast at 425°F 8–10 min, or sauté until tender-crisp.",
      "In the cod skillet, melt remaining butter, add garlic, cook 30 sec, then stir in lemon juice, zest and parsley for the sauce.",
      "Plate cod over mashed potatoes with asparagus, spoon lemon-butter sauce over the top.",
    ],
    notes: "Decker: 2 fillets (~12 oz) + full mash (1 cup) + full asparagus. Rachael: 1 fillet (~6 oz) + half mash, double asparagus.",
    favorite: false,
    weekOf: "2026-11-09",
  },
  {
    id: 28,
    name: "Turkey Burgers with Sweet Potato Fries & Side Salad",
    category: "Dinner",
    protein: "Turkey",
    cookTime: "40 min",
    proteinGrams: "34g",
    ingredients: [
      "Lean ground turkey (1½ lb)",
      "Egg (1)",
      "Breadcrumbs (¼ cup)",
      "Worcestershire sauce (2 tbsp) + garlic powder (1 tsp) + onion powder (1 tsp) + salt & pepper",
      "Sliced cheese (4 slices, cheddar or pepper jack)",
      "Whole wheat burger buns (4, or lettuce leaves for a lighter wrap)",
      "Lettuce, tomato & red onion, for topping",
      "Sweet potatoes (2 medium), cut into fries",
      "Olive oil (2 tbsp) + salt & pepper, for fries",
      "Mixed greens (4 cups) + light vinaigrette, for side salad",
    ],
    instructions: [
      "Preheat oven to 425°F; toss sweet potato fries with olive oil, salt and pepper, spread on a baking sheet, roast 25–30 min, flipping once, until crisp.",
      "Mix ground turkey, egg, breadcrumbs, Worcestershire, garlic powder, onion powder, salt and pepper; form into 4 patties.",
      "Heat a skillet or grill over medium-high; cook patties 5–6 min per side until cooked through (165°F), topping with cheese in the last minute.",
      "Toast buns lightly.",
      "Build burgers with lettuce, tomato and red onion.",
      "Toss mixed greens with vinaigrette for the side salad; serve alongside burgers and fries.",
    ],
    notes: "Decker: 2 patties on full buns + full fries + small side salad. Rachael: 1 patty, lettuce wrap (or half bun), light fries, large side salad.",
    favorite: false,
    weekOf: "2026-11-09",
  },
  {
    id: 29,
    name: "Black Bean & Sweet Potato Enchiladas with Chipotle Cream",
    category: "Dinner",
    protein: "Other",
    cookTime: "50 min",
    proteinGrams: "17g",
    ingredients: [
      "Sweet potatoes (2 medium), peeled and diced",
      "Olive oil (1 tbsp) + salt & pepper",
      "Black beans (1 can, 15 oz), drained and rinsed",
      "Corn kernels (1 cup, frozen or canned)",
      "Ground cumin (1 tsp) + chili powder (1 tsp) + smoked paprika (½ tsp)",
      "Corn or flour tortillas (8)",
      "Red enchilada sauce (2 cups)",
      "Shredded Mexican cheese blend (1½ cups)",
      "Sour cream or plain Greek yogurt (¼ cup) + chopped cilantro + lime wedges, to top",
    ],
    instructions: [
      "Preheat oven to 400°F. Toss diced sweet potato with olive oil, salt and pepper; roast on a sheet pan 20–25 min until tender, stirring once.",
      "In a bowl, combine roasted sweet potato, black beans, corn, cumin, chili powder and smoked paprika.",
      "Spread a thin layer of enchilada sauce in the bottom of a baking dish.",
      "Fill each tortilla with the sweet potato-black bean mixture and a sprinkle of cheese, roll and place seam-side down in the dish.",
      "Pour remaining enchilada sauce over the top, sprinkle with remaining cheese.",
      "Bake at 375°F for 20–25 min until bubbling and the cheese is melted. Top with sour cream or yogurt, cilantro and lime.",
    ],
    notes: "Decker: 3 enchiladas + full cheese topping + full sour cream. Rachael: 2 enchiladas, light cheese, light sour cream, extra lime & cilantro.",
    favorite: false,
    weekOf: "2026-11-09",
  },
  {
    id: 30,
    name: "Blackened Salmon with Mango-Avocado Salsa & Coconut Rice",
    category: "Dinner",
    protein: "Fish",
    cookTime: "35 min",
    proteinGrams: "34g",
    ingredients: [
      "Salmon fillets (4, about 1½ lb total)",
      "Blackening seasoning (2 tbsp, or paprika 1 tbsp + cayenne 1 tsp + garlic powder 1 tsp + onion powder 1 tsp + dried thyme 1 tsp + dried oregano 1 tsp + salt & pepper)",
      "Olive oil (2 tbsp)",
      "White or jasmine rice (1 cup)",
      "Coconut milk (1 cup) + water (¾ cup), for the rice",
      "Mango (1), diced",
      "Avocado (1), diced",
      "Red onion (¼), finely diced",
      "Lime (1), juiced",
      "Fresh cilantro (2 tbsp, chopped)",
      "Baby spinach (4 cups)",
    ],
    instructions: [
      "Pat salmon dry; coat both sides generously with blackening seasoning.",
      "Combine rice, coconut milk and water in a pot; bring to a boil, cover, reduce heat and simmer 15–18 min until tender. Fluff.",
      "Toss mango, avocado, red onion, lime juice and cilantro for the salsa; season with salt.",
      "Heat olive oil in a skillet over medium-high; sear salmon 3–4 min per side until a dark crust forms and the fish is just opaque (125–130°F), remove.",
      "Sauté spinach in the same skillet 2–3 min until wilted.",
      "Plate salmon over coconut rice with spinach, topped with mango-avocado salsa.",
    ],
    notes: "Decker: 2 fillets (~12 oz) + full coconut rice (1 cup) + full salsa. Rachael: 1 fillet (~6 oz) + ½ cup coconut rice, double spinach, extra salsa.",
    favorite: false,
    weekOf: "2026-11-16",
  },
  {
    id: 31,
    name: "Mongolian Beef with Rice & Snap Peas",
    category: "Dinner",
    protein: "Beef",
    cookTime: "30 min",
    proteinGrams: "36g",
    ingredients: [
      "Flank or sirloin steak (1½ lb), thinly sliced against the grain",
      "Cornstarch (⅓ cup, for coating)",
      "Neutral oil (¼ cup, divided)",
      "Garlic (4 cloves, minced) + fresh ginger (1 tbsp, minced)",
      "Soy sauce (½ cup) + brown sugar (½ cup) + water (¼ cup) + sesame oil (1 tsp), for the sauce",
      "Sugar snap peas (1 lb)",
      "Rice (1½ cups, cooked)",
      "Green onions (2, sliced) + sesame seeds, to top",
    ],
    instructions: [
      "Toss sliced beef in cornstarch to coat lightly.",
      "Heat half the oil in a wok or large skillet over high heat; fry beef in batches 2–3 min per batch until crisp and browned, remove.",
      "Lower heat to medium; add remaining oil, garlic and ginger, cook 30 sec.",
      "Add soy sauce, brown sugar and water; simmer 2–3 min until slightly thickened.",
      "Blanch or steam snap peas 2–3 min until bright green and crisp-tender.",
      "Return beef to the sauce and toss to coat, 1 min.",
      "Cook rice per package directions. Serve beef over rice with snap peas, topped with green onions and sesame seeds.",
    ],
    notes: "Decker: ~9 oz beef + full rice (1 cup) + full snap peas. Rachael: ~6 oz beef over ½ cup rice, double snap peas.",
    favorite: false,
    weekOf: "2026-11-16",
  },
  {
    id: 32,
    name: "Garlic Butter Shrimp Fried Rice",
    category: "Dinner",
    protein: "Shrimp",
    cookTime: "25 min",
    proteinGrams: "32g",
    ingredients: [
      "Shrimp (1½ lb), peeled and deveined",
      "Butter (3 tbsp, divided)",
      "Olive oil (1 tbsp)",
      "Garlic (4 cloves, minced)",
      "Cold cooked rice (3 cups, day-old or cooked and cooled)",
      "Eggs (2), beaten",
      "Frozen peas & carrots (1 cup, thawed)",
      "Green onions (3, sliced)",
      "Soy sauce (3 tbsp) + sesame oil (1 tsp)",
      "Salt & pepper",
    ],
    instructions: [
      "Season shrimp with salt and pepper.",
      "Heat olive oil and 1 tbsp butter in a large skillet or wok over medium-high; cook shrimp 2 min per side until just pink, remove.",
      "Add 1 tbsp butter to the skillet; scramble eggs until just set, remove and chop.",
      "Add remaining butter and garlic to the skillet, cook 30 sec; add peas and carrots, cook 2 min.",
      "Add cold rice, breaking up clumps; stir-fry 4–5 min until heated through and lightly crisped.",
      "Stir in soy sauce and sesame oil; fold in shrimp, egg and green onions, toss 1–2 min to combine.",
    ],
    notes: "Decker: ~9 oz shrimp + full fried rice (1½ cups). Rachael: ~6 oz shrimp over ¾ cup fried rice, extra peas & carrots.",
    favorite: false,
    weekOf: "2026-11-16",
  },
  {
    id: 33,
    name: "Beef Tacos with Pico de Gallo, Lime Crema & Mexican Rice",
    category: "Dinner",
    protein: "Beef",
    cookTime: "30 min",
    proteinGrams: "30g",
    ingredients: [
      "Ground beef, 90/10 lean (1½ lb)",
      "Taco seasoning (2 tbsp)",
      "Corn or flour tortillas (10, small)",
      "Pico de gallo (1 cup)",
      "Sour cream (¼ cup) + lime juice (1 tbsp) + lime zest, for the crema",
      "Shredded lettuce (1 cup)",
      "Shredded cheese (½ cup)",
      "Rice (1½ cups, cooked, with a splash of tomato sauce & cumin for Mexican rice, optional)",
      "Lime wedges & cilantro, to top",
    ],
    instructions: [
      "Brown ground beef in a skillet over medium-high, 6–8 min, breaking it up, until no longer pink.",
      "Drain excess fat; stir in taco seasoning and ¼ cup water, simmer 3–4 min until thickened.",
      "Warm tortillas in a dry skillet or microwave.",
      "Whisk sour cream, lime juice and zest for the crema.",
      "Cook rice per package directions, stirring in a splash of tomato sauce and cumin if making it Mexican-style.",
      "Build tacos: tortilla, beef, lettuce, pico de gallo, cheese, lime crema. Serve with rice alongside.",
    ],
    notes: "Decker: 4 tacos + full rice (1 cup) + full cheese. Rachael: 2–3 tacos (lettuce-wrap style works too), light rice (½ cup), double pico & lettuce, light cheese.",
    favorite: false,
    weekOf: "2026-11-16",
  },
  {
    id: 34,
    name: "Honey Mustard Baked Chicken Thighs with Roasted Brussels Sprouts & Garlic Mashed Potatoes",
    category: "Dinner",
    protein: "Chicken",
    cookTime: "40 min",
    proteinGrams: "33g",
    ingredients: [
      "Boneless, skinless chicken thighs (1½ lb)",
      "Honey (¼ cup) + Dijon mustard (3 tbsp) + olive oil (1 tbsp) + garlic (2 cloves, minced) + salt & pepper, for the glaze",
      "Brussels sprouts (1 lb), halved",
      "Olive oil (1 tbsp) + salt & pepper, for the sprouts",
      "Yukon gold potatoes (1½ lb), peeled and cubed",
      "Milk or cream (¼ cup) + butter (3 tbsp) + garlic (2 cloves, minced), for the mash",
    ],
    instructions: [
      "Preheat oven to 425°F.",
      "Whisk honey, Dijon mustard, olive oil, garlic, salt and pepper for the glaze; toss chicken thighs in half of it.",
      "Toss Brussels sprouts with olive oil, salt and pepper; spread on a sheet pan alongside the chicken thighs.",
      "Roast 22–25 min, flipping the chicken and sprouts halfway and brushing the chicken with the remaining glaze in the last 5 min, until chicken reaches 165°F and sprouts are caramelized.",
      "Meanwhile, boil potatoes in salted water 15–18 min until fork-tender; drain.",
      "Mash potatoes with milk, butter and garlic; season with salt and pepper.",
      "Plate chicken thighs with mashed potatoes and roasted Brussels sprouts.",
    ],
    notes: "Decker: ~9 oz chicken + full mash (1 cup) + full Brussels sprouts. Rachael: ~6 oz chicken over ½ cup mash, double Brussels sprouts.",
    favorite: false,
    weekOf: "2026-11-16",
  },
  {
    id: 35,
    name: "Greek Chicken Souvlaki Bowls with Lemon Rice, Tzatziki & Cucumber-Tomato Salad",
    category: "Dinner",
    protein: "Chicken",
    cookTime: "35 min",
    proteinGrams: "34g",
    ingredients: [
      "Chicken breast, boneless skinless (1½ lb), cut into 1-inch cubes",
      "Olive oil (3 tbsp), divided",
      "Lemon juice (2 tbsp) + zest of 1 lemon",
      "Garlic (3 cloves, minced) + dried oregano (1 tbsp) + dried thyme (1 tsp) + salt & pepper, for the marinade",
      "Rice (1½ cups, cooked), with extra lemon zest & chopped parsley stirred in",
      "Plain Greek yogurt (1 cup) + cucumber (½, grated and squeezed dry) + garlic (1 clove, minced) + lemon juice (1 tbsp) + fresh dill (1 tbsp), for the tzatziki",
      "Cherry tomatoes (1 cup, halved) + cucumber (½, diced) + red onion (¼, thinly sliced) + olive oil & red wine vinegar, for the salad",
      "Pita breads (2), warmed",
    ],
    instructions: [
      "Whisk 2 tbsp olive oil, lemon juice, zest, garlic, oregano, thyme, salt and pepper; toss chicken in the marinade and rest 20 min (or overnight).",
      "Heat remaining 1 tbsp olive oil in a large skillet over medium-high; cook chicken in batches 6–8 min, turning occasionally, until charred in spots and cooked through (165°F).",
      "Cook rice per package directions; stir in extra lemon zest and chopped parsley.",
      "Squeeze grated cucumber dry in a towel; combine with yogurt, garlic, lemon juice, dill and a pinch of salt for the tzatziki.",
      "Toss cherry tomatoes, diced cucumber, red onion, olive oil and vinegar for the salad.",
      "Warm the pitas.",
      "Build bowls: rice, chicken, salad and tzatziki; serve pita alongside.",
    ],
    notes: "Decker: ~9 oz chicken + full lemon rice (1 cup) + 1 full pita. Rachael: ~6 oz chicken over ½ cup lemon rice, no pita (or half), double salad, light tzatziki.",
    favorite: false,
    weekOf: "2026-11-23",
  },
  {
    id: 36,
    name: "Korean Beef Bulgogi Bowls with Rice, Sesame Spinach & Kimchi-Cucumber Salad",
    category: "Dinner",
    protein: "Beef",
    cookTime: "30 min",
    proteinGrams: "32g",
    ingredients: [
      "Flank or sirloin steak (1½ lb), thinly sliced against the grain",
      "Soy sauce (⅓ cup) + brown sugar (3 tbsp) + sesame oil (2 tbsp) + garlic (4 cloves, minced) + fresh ginger (1 tbsp, minced) + rice vinegar (1 tbsp), for the marinade",
      "Neutral oil (2 tbsp)",
      "Rice (1½ cups, cooked)",
      "Baby spinach (4 cups) + sesame oil (1 tsp) + pinch salt",
      "Kimchi (½ cup, chopped) + cucumber (½, thinly sliced) + rice vinegar (1 tsp) + sesame seeds (1 tsp), for the quick salad",
      "Green onions (2, sliced) + sesame seeds, to top",
    ],
    instructions: [
      "Whisk soy sauce, brown sugar, sesame oil, garlic, ginger and rice vinegar; marinate sliced beef at least 20 min (or overnight).",
      "Heat neutral oil in a large skillet or wok over high heat; sear beef in batches 2–3 min per batch until browned and just cooked through, remove.",
      "Sauté spinach in the same pan with sesame oil and a pinch of salt, 2 min until wilted.",
      "Toss kimchi, cucumber, rice vinegar and sesame seeds for the quick salad.",
      "Cook rice per package directions.",
      "Serve beef over rice with spinach and kimchi-cucumber salad, topped with green onions and sesame seeds.",
    ],
    notes: "Decker: ~9 oz beef + full rice (1 cup) + full spinach. Rachael: ~6 oz beef over ½ cup rice, double spinach & kimchi salad.",
    favorite: false,
    weekOf: "2026-11-23",
  },
  {
    id: 37,
    name: "Pan-Seared Mahi-Mahi with Cilantro-Lime Rice, Charred Corn & Avocado",
    category: "Dinner",
    protein: "Fish",
    cookTime: "25 min",
    proteinGrams: "28g",
    ingredients: [
      "Mahi-mahi fillets (4, about 1½ lb total)",
      "Olive oil (2 tbsp, divided) + chili powder (1 tsp) + ground cumin (½ tsp) + salt & pepper",
      "Rice (1½ cups, cooked), tossed with lime juice (2 tbsp), lime zest & chopped cilantro (2 tbsp)",
      "Corn kernels (2 cups, fresh, frozen or canned, drained)",
      "Avocado (1), sliced",
      "Lime (1), cut into wedges",
    ],
    instructions: [
      "Pat mahi-mahi dry; season both sides with chili powder, cumin, salt and pepper.",
      "Heat 1 tbsp olive oil in a large skillet over medium-high; sear fillets 3–4 min per side until golden and opaque throughout (137°F), remove.",
      "Heat remaining oil in the same skillet; add corn and cook 5–6 min, stirring occasionally, until lightly charred.",
      "Cook rice per package directions; toss with lime juice, zest and cilantro.",
      "Plate mahi-mahi over cilantro-lime rice with charred corn and sliced avocado; serve with lime wedges.",
    ],
    notes: "Decker: 2 fillets (~12 oz) + full rice (1 cup) + full corn & avocado. Rachael: 1 fillet (~6 oz) + ½ cup rice, double corn, light avocado.",
    favorite: false,
    weekOf: "2026-11-23",
  },
  {
    id: 38,
    name: "Thai Coconut Curry Shrimp with Jasmine Rice & Bell Peppers",
    category: "Dinner",
    protein: "Shrimp",
    cookTime: "30 min",
    proteinGrams: "26g",
    ingredients: [
      "Shrimp, peeled and deveined (1½ lb)",
      "Neutral oil (1 tbsp)",
      "Yellow onion (1), sliced + bell peppers (2), sliced",
      "Garlic (3 cloves, minced) + fresh ginger (1 tbsp, minced) + red curry paste (2 tbsp)",
      "Coconut milk (1 can, 14 oz)",
      "Fish sauce (1 tbsp) + brown sugar (1 tbsp) + lime juice (1 tbsp)",
      "Jasmine rice (1½ cups, cooked)",
      "Fresh basil or cilantro, to top",
    ],
    instructions: [
      "Heat oil in a large skillet or wok over medium-high; sauté onion and bell peppers 4–5 min until just softened.",
      "Add garlic, ginger and curry paste; cook 1 min until fragrant.",
      "Stir in coconut milk, fish sauce and brown sugar; simmer 5 min.",
      "Add shrimp; simmer 4–5 min until just pink and opaque.",
      "Stir in lime juice.",
      "Cook jasmine rice per package directions.",
      "Serve curry over rice, topped with fresh basil or cilantro.",
    ],
    notes: "Decker: ~9 oz shrimp + full rice (1 cup) + full peppers. Rachael: ~6 oz shrimp over ½ cup rice, double peppers.",
    favorite: false,
    weekOf: "2026-11-23",
  },
  {
    id: 39,
    name: "Turkey Piccata with Lemon-Caper Sauce over Pasta & Steamed Green Beans",
    category: "Dinner",
    protein: "Turkey",
    cookTime: "30 min",
    proteinGrams: "31g",
    ingredients: [
      "Turkey breast cutlets, thin-sliced (1½ lb)",
      "Flour (⅓ cup), for dredging",
      "Olive oil (3 tbsp), divided",
      "Chicken or turkey broth (½ cup) + lemon juice (¼ cup) + capers (3 tbsp, drained) + butter (2 tbsp), for the sauce",
      "Spaghetti or linguine (8 oz, half a 1-lb box)",
      "Green beans (1 lb), trimmed",
      "Fresh parsley, chopped, to top",
    ],
    instructions: [
      "Season turkey cutlets with salt and pepper; dredge lightly in flour, shaking off excess.",
      "Heat 2 tbsp olive oil in a large skillet over medium-high; cook cutlets 2–3 min per side until golden and cooked through (165°F), remove.",
      "Add broth, lemon juice and capers to the skillet; simmer 3–4 min, scraping up browned bits, until slightly reduced. Whisk in butter.",
      "Return turkey to the skillet and spoon sauce over; warm 1 min.",
      "Cook pasta per package directions; drain.",
      "Steam or blanch green beans 4–5 min until crisp-tender; toss with remaining 1 tbsp olive oil, salt and pepper.",
      "Serve turkey piccata over pasta with green beans, topped with parsley.",
    ],
    notes: "Decker: 2 cutlets (~9 oz) + full pasta (2 cups cooked) + full green beans. Rachael: 1 cutlet (~5–6 oz) over 1 cup pasta, double green beans.",
    favorite: false,
    weekOf: "2026-11-23",
  },
  {
    id: 40,
    name: "Cuban Mojo Chicken with Black Beans & Rice",
    category: "Dinner",
    protein: "Chicken",
    cookTime: "35 min",
    proteinGrams: "33g",
    ingredients: [
      "Boneless, skinless chicken thighs (1½ lb)",
      "Orange juice (⅓ cup) + lime juice (¼ cup) + garlic (4 cloves, minced) + dried oregano (1 tbsp) + ground cumin (1 tsp) + olive oil (3 tbsp) + salt & pepper, for the mojo marinade",
      "Black beans (1 can, 15 oz), drained and rinsed + onion (½, diced) + garlic (1 clove, minced) + ground cumin (½ tsp), for the beans",
      "Rice (1½ cups, cooked)",
      "Fresh cilantro + lime wedges, to top",
    ],
    instructions: [
      "Whisk orange juice, lime juice, garlic, oregano, cumin, olive oil, salt and pepper for the mojo marinade; marinate chicken thighs at least 30 min (or overnight).",
      "Heat a large skillet over medium-high; cook chicken thighs 6–7 min per side until charred in spots and cooked through (165°F). Rest 5 min, then slice.",
      "In a small saucepan, sauté diced onion and garlic 3–4 min; add black beans, cumin and a splash of water, simmer 8–10 min until heated through.",
      "Cook rice per package directions.",
      "Plate sliced chicken over rice with black beans, topped with cilantro and lime wedges.",
    ],
    notes: "Decker: ~9 oz chicken + full rice (1 cup) + full black beans. Rachael: ~6 oz chicken over ½ cup rice, double black beans, extra lime.",
    favorite: false,
    weekOf: "2026-11-23",
  },
  {
    id: 41,
    name: "Baked Cod with Lemon-Herb Butter, Roasted Potatoes & Green Beans",
    category: "Dinner",
    protein: "Fish",
    cookTime: "35 min",
    proteinGrams: "34g",
    ingredients: [
      "Cod fillets (4, about 1½ lb total)",
      "Butter (3 tbsp), melted + lemon juice (1 tbsp) + lemon zest (1 tsp) + garlic (2 cloves, minced) + fresh parsley (1 tbsp, chopped) + salt & pepper, for lemon-herb butter",
      "Baby potatoes (1½ lb), halved + olive oil (2 tbsp) + salt & pepper",
      "Green beans (1 lb), trimmed + olive oil (1 tbsp) + salt & pepper",
      "Lemon (1), cut into wedges",
    ],
    instructions: [
      "Preheat oven to 425°F. Toss potatoes with 2 tbsp olive oil, salt and pepper; spread on a sheet pan and roast 15 min.",
      "Toss green beans with 1 tbsp olive oil, salt and pepper; add to the sheet pan alongside the potatoes, roast 15 min more, tossing once.",
      "Meanwhile, whisk melted butter, lemon juice, zest, garlic, parsley, salt and pepper for the lemon-herb butter.",
      "Pat cod dry, season with salt and pepper, place on a separate lined baking sheet, and brush with half the lemon-herb butter.",
      "Bake cod at 425°F for 10–12 min until opaque and flakes easily (internal 130–135°F); brush with remaining butter before serving.",
      "Serve cod with the roasted potatoes, green beans and lemon wedges.",
    ],
    notes: "Decker: 2 fillets (~12 oz) + full potatoes (1½ cups) + full green beans. Rachael: 1 fillet (~6 oz) + ¾ cup potatoes, double green beans.",
    favorite: false,
    weekOf: "2026-11-30",
  },
];

const categoryColors = {
  Breakfast: { bg: "#fbbf2415", border: "#fbbf2440", text: "#fbbf24" },
  Lunch: { bg: "#34d39915", border: "#34d39940", text: "#34d399" },
  Dinner: { bg: "#f9731615", border: "#f9731640", text: "#f97316" },
  Snack: { bg: "#c084fc15", border: "#c084fc40", text: "#c084fc" },
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

        {recipe.instructions && recipe.instructions.length > 0 && (
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "#555", marginBottom: 10 }}>Instructions</div>
            <ol style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
              {recipe.instructions.map((step, i) => (
                <li key={i} style={{ fontSize: 14, color: "#ccc", lineHeight: 1.55 }}>{step}</li>
              ))}
            </ol>
          </div>
        )}

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
                {["Breakfast", "Lunch", "Dinner", "Snack"].map(c => <option key={c}>{c}</option>)}
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

  const weekDates = recipes.map(r => r.weekOf).filter(Boolean).sort();
  const latestWeek = weekDates.length ? weekDates[weekDates.length - 1] : null;
  const thisWeekRecipes = latestWeek ? recipes.filter(r => r.weekOf === latestWeek) : [];

  const formatWeekRange = (weekOf) => {
    const start = new Date(weekOf + "T00:00:00");
    const end = new Date(start);
    end.setDate(end.getDate() + 6);
    const opts = { month: "short", day: "numeric" };
    return `${start.toLocaleDateString("en-US", opts)} – ${end.toLocaleDateString("en-US", opts)}`;
  };

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

      {/* This Week */}
      {thisWeekRecipes.length > 0 && (
        <div style={{ maxWidth: 640, margin: "28px auto 0", padding: "0 20px" }}>
          <div style={{
            background: "#161616", border: "1px solid #f9731640", borderRadius: 14,
            padding: "20px 20px 18px",
          }}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
              <h2 style={{ margin: 0, fontSize: 20, fontWeight: 400, color: "#f0ece4" }}>
                This Week's Dinners
              </h2>
              <span style={{ fontSize: 12, color: "#f97316", letterSpacing: "0.05em" }}>
                {formatWeekRange(latestWeek)}
              </span>
            </div>
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 10,
            }}>
              {thisWeekRecipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} onClick={setSelectedRecipe} onToggleFavorite={toggleFavorite} />
              ))}
            </div>
            <p style={{ margin: "14px 0 0", color: "#555", fontSize: 12, fontStyle: "italic", textAlign: "center" }}>
              Pick one of these for tonight, or browse the full cookbook below.
            </p>
          </div>
        </div>
      )}

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
      {thisWeekRecipes.length > 0 && (
        <div style={{ maxWidth: 640, margin: "20px auto 0", padding: "0 20px" }}>
          <h2 style={{ margin: 0, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", color: "#666", fontWeight: 400 }}>
            All Recipes
          </h2>
        </div>
      )}
      <div style={{
        maxWidth: 640, margin: "8px auto 0", padding: "0 20px",
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
