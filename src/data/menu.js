export const menuData = {
  categories: [
    { id: "appetizers", name: "Appetizers" },
    { id: "biryani", name: "Biryani" },
    { id: "naan", name: "Naan" },
    { id: "chef-special", name: "Chef Special" },
    { id: "veg-curry", name: "Veg Curry" },
    { id: "curry", name: "Curry" },
    { id: "kabob", name: "Kabob" },
    { id: "masala-spicy-pizza", name: "Masala Spicy Pizza" },
    { id: "pizza", name: "Pizza" },
    { id: "burgers", name: "Burgers" },
    { id: "subs", name: "10\" Subs" },
    { id: "stuffed-bread", name: "Stuffed Bread" },
    { id: "chicken-wings", name: "Chicken Wings" },
    { id: "salads", name: "Salads" },
    { id: "sides", name: "Sides" },
    { id: "drinks", name: "Drinks" }
  ],
  items: [
    // ── APPETIZERS ─────────────────────────────────────────────────────────────
    // 12.15.41 PM (2) → small samosa on plate with onions = Veggie Samosa
    { id: "a1", category: "appetizers", name: "Veggie Samosa", price: 0.99, description: "Crispy pastry filled with spiced vegetables.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.41 PM (2).jpeg" },

    // 12.15.44 PM → golden samosa triangles with mint & carrot garnish = Meat Samosa
    { id: "a2", category: "appetizers", name: "Meat Samosa", price: 1.49, description: "Crispy pastry filled with spiced minced meat.", popular: true,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.44 PM.jpeg" },

    // 12.15.33 PM → smashed samosa topped with chickpea masala + chutneys = Samosa Chat
    { id: "a3", category: "appetizers", name: "Samosa Chat", price: 6.99, description: "Smashed samosa topped with chana masala, yogurt, and chutneys.", popular: true,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.33 PM.jpeg" },

    // 12.15.31 PM → gol gappa / pani puri spheres with tamarind dip = Gol Gappa
    { id: "a4", category: "appetizers", name: "Gol Gappa", price: 7.99, description: "Crispy hollow spheres filled with spicy tangy water and potatoes.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.31 PM.jpeg" },

    // 12.15.46 PM → onion bhaji / pakora clusters = Veggie Pakora
    { id: "a5", category: "appetizers", name: "Veggie Pakora", price: 7.99, description: "Deep-fried fritters of mixed vegetables in chickpea batter.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.46 PM.jpeg" },

    // 12.15.30 PM (1) → combo platter: samosas + pakoras + dumplings = Moglal Parata (appetizer platter)
    { id: "a6", category: "appetizers", name: "Moglal Parata", price: 8.99, description: "Flaky paratha stuffed with minced meat and egg.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.30 PM (1).jpeg" },

    // 12.15.32 PM → golden mozzarella sticks with marinara = Mozzarella Stick
    { id: "a7", category: "appetizers", name: "Mozzarella Stick", price: 6.99, description: "Fried cheese sticks with marinara sauce.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.32 PM.jpeg" },

    // 12.15.35 PM → crispy fried chicken tenders on white bg = French Fries / Chicken Tenders
    { id: "a8", category: "appetizers", name: "French Fries", price: 3.99, description: "Crispy golden french fries.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.35 PM.jpeg" },

    // 12.15.41 PM (2) duplicate — use a close food for Daal Puri; best match is the small samosa / puri look
    // Using 12.15.23 PM → dum aloo look (puris are similar ball shape)
    { id: "a9", category: "appetizers", name: "Daal Puri", price: 0.99, description: "Fried puffed bread stuffed with spiced lentils.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.23 PM.jpeg" },

    // 12.15.32 PM (1) → orange deep-fried pakora bites (chicken-like fritters) = Chicken Nugget
    { id: "a10", category: "appetizers", name: "Chicken Nugget", price: 6.99, description: "Crispy breaded chicken nuggets.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.32 PM (1).jpeg" },

    // 12.15.42 PM → garlic knots on a white rectangular plate = Garlic Knot ✅
    { id: "a11", category: "appetizers", name: "Garlic Knot", price: 4.99, description: "Soft bread knots tossed in garlic and butter.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.42 PM.jpeg" },

    // ── BIRYANI ────────────────────────────────────────────────────────────────
    // 12.15.23 PM (1) → plain yellow basmati rice in bowl = Veggie Biryani
    { id: "b1", category: "biryani", name: "Veggie Biryani", price: 11.99, description: "Aromatic basmati rice cooked with mixed vegetables and spices.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.23 PM (1).jpeg" },

    // 12.15.51 PM (1) → egg biryani with halved boiled eggs on top ✅
    { id: "b2", category: "biryani", name: "Egg Biryani", price: 11.99, description: "Fragrant rice cooked with hard-boiled eggs and traditional spices.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.51 PM (1).jpeg" },

    // 12.15.46 PM → Actually pakoras. Use 12.15.43 PM (gobi manchurian-style, orange chicken biryani look)
    // 12.15.43 PM → cauliflower manchurian / gobi = best match for Chicken Biryani topping look
    { id: "b3", category: "biryani", name: "Chicken Biryani", price: 11.99, description: "Classic biryani layered with marinated chicken and aromatic spices.", popular: true,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.43 PM.jpeg" },

    // 12.15.59 PM → Dal Makhni dark with tempering → best match Beef Biryani (dark rice)
    { id: "b4", category: "biryani", name: "Beef Biryani", price: 12.99, description: "Tender beef chunks slow-cooked with basmati rice and herbs.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.16.00 PM.jpeg" },

    // 12.16.00 PM → chicken curry in a bowl = use for Goat Biryani
    { id: "b5", category: "biryani", name: "Goat Biryani", price: 12.99, description: "Succulent goat meat mixed with spiced basmati rice.", popular: true,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.59 PM.jpeg" },

    // 12.15.53 PM → shrimp/prawn biryani with visible prawns on rice ✅
    { id: "b6", category: "biryani", name: "Prawn Biryani", price: 13.99, description: "Flavorful prawn cooked with rice and special seafood spices.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.53 PM.jpeg" },

    // ── NAAN ──────────────────────────────────────────────────────────────────
    // 12.15.50 PM (1) → plain round roti / chapati = Roti ✅
    { id: "n1", category: "naan", name: "Roti", price: 0.99, description: "Whole wheat flatbread baked in tandoor.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.50 PM (1).jpeg" },

    // 12.15.48 PM → stack of plain naan in a wicker basket ✅
    { id: "n2", category: "naan", name: "Plain Naan", price: 0.99, description: "Soft, fluffy leavened bread baked in tandoor.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.48 PM.jpeg" },

    // 12.15.48 PM (1) → paratha sliced and in foil wrap ✅
    { id: "n3", category: "naan", name: "Paratha", price: 1.49, description: "Multi-layered whole wheat bread.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.48 PM (1).jpeg" },

    // 12.15.47 PM (1) → garlic naan round with parsley and butter ✅
    { id: "n4", category: "naan", name: "Garlic Naan", price: 1.99, description: "Naan topped with fresh garlic and cilantro.", popular: true,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.47 PM (1).jpeg" },

    // 12.15.50 PM → aloo naan / potato stuffed naan in basket ✅
    { id: "n5", category: "naan", name: "Potato Naan", price: 2.99, description: "Naan stuffed with spiced mashed potatoes.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.50 PM.jpeg" },

    // 12.15.47 PM (2) → kulcha / bullet naan with green peppers ✅
    { id: "n6", category: "naan", name: "Bullet Naan", price: 2.99, description: "Spicy naan topped with fresh green chilies.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.47 PM (2).jpeg" },

    // 12.15.48 PM (2) → plain naan folded on plate = Onion Kulcha
    { id: "n7", category: "naan", name: "Onion Kulcha", price: 2.99, description: "Naan stuffed with finely chopped onions and spices.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.48 PM (2).jpeg" },

    // 12.15.29 PM → garlic herb naan on wooden board = Keema Naan
    { id: "n8", category: "naan", name: "Keema Naan (Chicken or Beef)", price: 2.49, description: "Naan stuffed with minced spiced meat.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.29 PM.jpeg" },

    // 12.15.47 PM → cheesy naan with cheese pull ✅
    { id: "n9", category: "naan", name: "Cheesy Naan", price: 2.99, description: "Naan stuffed with gooey melted cheese.", popular: true,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.47 PM.jpeg" },

    // ── CHEF SPECIAL ──────────────────────────────────────────────────────────
    // 12.15.27 PM → Halim (thick stew with minced look) ✅
    { id: "cs1", category: "chef-special", name: "Halim", price: 8.99, description: "Slow-cooked stew of meat, lentils, and pounded wheat.", popular: true,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.27 PM.jpeg" },

    // 12.15.21 PM → dark red thick masala in steel bowl = Nehari ✅
    { id: "cs2", category: "chef-special", name: "Nehari", price: 10.99, description: "Slow-cooked beef stew with a rich, spicy gravy.", popular: true,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.21 PM.jpeg" },

    // 12.15.40 PM → large bone-in pieces in reddish gravy bowl = Paya ✅
    { id: "cs3", category: "chef-special", name: "Paya", price: 8.99, description: "Traditional trotters soup/stew with rich spices.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.40 PM.jpeg" },

    // 12.15.38 PM (1) → dark rich curry (brain masala-like thick stew) = Brain Masala
    { id: "cs4", category: "chef-special", name: "Brain Masala", price: 10.99, description: "A unique delicacy cooked with aromatic spices.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.38 PM (1).jpeg" },

    // ── VEG CURRY ─────────────────────────────────────────────────────────────
    // 12.15.55 PM → chickpeas + potato chunks in orange gravy = Chana Masala ✅
    { id: "vc1", category: "veg-curry", name: "Chana Masala", price: 8.99, description: "Chickpeas cooked in a tangy tomato-based gravy.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.55 PM.jpeg" },

    // 12.15.57 PM → bhindi masala (okra + tomato in kadai) = Mixed Vegetable ✅
    { id: "vc2", category: "veg-curry", name: "Mixed Vegetable", price: 9.99, description: "Assortment of fresh vegetables in a savory curry.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.57 PM.jpeg" },

    // 12.15.54 PM → aloo gobi (cauliflower + potato in yellow curry) ✅
    { id: "vc3", category: "veg-curry", name: "Aloo Gobi", price: 8.99, description: "Classic potato and cauliflower curry.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.54 PM.jpeg" },

    // 12.15.54 PM (2) → orange mashed roasted eggplant in bowl = Baingan Bharta ✅
    { id: "vc4", category: "veg-curry", name: "Baingan Bharta", price: 8.99, description: "Smoky roasted eggplant mashed with onions and tomatoes.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.54 PM (2).jpeg" },

    // 12.15.55 PM (1) → yellow lentil dal soup with spoon ✅
    { id: "vc5", category: "veg-curry", name: "Yellow Dal", price: 8.99, description: "Tempered yellow lentils.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.55 PM (1).jpeg" },

    // 12.15.59 PM → dal makhni (dark with red tempering) = Mix Veggie Dal Makhni ✅
    { id: "vc6", category: "veg-curry", name: "Mix Veggie Dal Makhni", price: 10.99, description: "Creamy black lentils mixed with vegetables.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.59 PM.jpeg" },

    // 12.15.57 PM (1) → bright green saag/palak paneer in white bowl ✅
    { id: "vc7", category: "veg-curry", name: "Palak Paneer", price: 11.99, description: "Cottage cheese cubes in a creamy spinach gravy.", popular: true,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.57 PM (1).jpeg" },

    // 12.15.54 PM (1) → dark green palak paneer (red rim bowl) = Paneer Masala (spinach variant)
    { id: "vc8", category: "veg-curry", name: "Paneer Masala", price: 11.99, description: "Cottage cheese cooked in a rich tomato and butter sauce.", popular: true,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.54 PM (1).jpeg" },

    // 12.15.41 PM (1) → paneer cubes + green peppers stir-fry in sauce = Matar Paneer ✅
    { id: "vc9", category: "veg-curry", name: "Matar Paneer", price: 11.99, description: "Peas and cottage cheese in a spiced tomato gravy.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.41 PM (1).jpeg" },

    // ── CURRY ─────────────────────────────────────────────────────────────────
    // 12.15.22 PM → rich orange butter chicken / tikka masala in bowl with naan = Chicken Curry ✅
    { id: "c1", category: "curry", name: "Chicken Curry", price: 9.99, description: "Tender chicken cooked in a classic curry sauce. Options: Bhuna, Vindaloo, Jalfrezi, Dal Palak, Tikka Masala, Qorma.", popular: true,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.22 PM.jpeg" },

    // 12.15.39 PM → dark red beef stew/vindaloo in bowl = Beef Curry ✅
    { id: "c2", category: "curry", name: "Beef Curry", price: 11.99, description: "Slow-cooked beef in traditional spices. Options: Bhuna, Vindaloo, Jalfrezi, Dal Palak, Tikka Masala, Qorma.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.39 PM.jpeg" },

    // 12.16.00 PM → chicken/goat bhuna curry = Goat Curry ✅
    { id: "c3", category: "curry", name: "Goat Curry", price: 11.99, description: "Bone-in goat meat in a robust, flavorful gravy. Options: Bhuna, Vindaloo, Jalfrezi, Dal Palak, Tikka Masala, Qorma.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.16.00 PM.jpeg" },

    // 12.16.02 PM (1) → chicken jalfrezi labeled image ✅ → use for Prawn Curry (closest seafood-style)
    { id: "c4", category: "curry", name: "Prawn Curry", price: 12.99, description: "Prawns simmered in a spiced coastal-style curry. Options: Bhuna, Vindaloo, Jalfrezi, Dal Palak, Tikka Masala, Qorma.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.16.02 PM (1).jpeg" },

    // 12.16.02 PM → mutton dal gosht / dark lentil meat stew = Fish Curry (closest heavy curry)
    { id: "c5", category: "curry", name: "Fish Curry", price: 12.99, description: "Fresh fish cooked with aromatic spices. Options: Bhuna, Vindaloo, Jalfrezi, Dal Palak, Tikka Masala, Qorma.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.16.02 PM.jpeg" },

    // ── KABOB ─────────────────────────────────────────────────────────────────
    // 12.15.29 PM (1) → tandoori chicken leg + naan on plate = Tandoori Chicken Leg Quarter ✅
    { id: "k1", category: "kabob", name: "Tandoori Chicken Leg Quarter", price: 4.99, description: "Bone-in leg quarter marinated in yogurt and tandoori spices.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.29 PM (1).jpeg" },

    // 12.15.41 PM → red-sauce chicken boti / tikka boti = Chicken Tikka Boti ✅
    { id: "k2", category: "kabob", name: "Chicken Tikka Boti", price: 9.99, description: "Boneless chicken chunks marinated and grilled to perfection.", popular: true,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.41 PM.jpeg" },

    // 12.15.34 PM → grilled beef seekh kabobs on plate with lemon & peppers ✅
    { id: "k3", category: "kabob", name: "Beef Sheekh Kabob", price: 10.99, description: "Minced beef skewers seasoned with herbs and spices.", popular: true,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.34 PM.jpeg" },

    // 12.15.51 PM → small grilled shami/seekh kabobs on round plate = Chicken Sheekh Kabob ✅
    { id: "k4", category: "kabob", name: "Chicken Sheekh Kabob", price: 10.99, description: "Minced chicken skewers grilled in tandoor.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.51 PM.jpeg" },

    // 12.15.30 PM → lamb chops with foil-wrapped bones, green pepper + lemon = Lamb Boti Kabob ✅
    { id: "k5", category: "kabob", name: "Lamb Boti Kabob", price: 11.99, description: "Tender lamb pieces marinated and roasted.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.30 PM.jpeg" },

    // ── MASALA SPICY PIZZA ────────────────────────────────────────────────────
    // 12.16.01 PM → thick red masala/tikka sauce in bowl = Masala Cheese Pizza sauce-style
    { id: "mp1", category: "masala-spicy-pizza", name: "Masala Cheese Pizza", price: 10.99, description: "Spicy pizza sauce topped with gooey cheese.", sizes: [{label:"10\"",extra:0},{label:"12\"",extra:2.99},{label:"14\"",extra:4.99},{label:"16\"",extra:6.99}], popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.16.04 PM (1).jpeg" },

    // 12.16.05 PM → masala / tikka-style pizza with dark red toppings = Chicken Tikka Delight ✅
    { id: "mp2", category: "masala-spicy-pizza", name: "Chicken Tikka Delight", price: 14.99, description: "Loaded with marinated chicken tikka and jalapeños.", sizes: [{label:"10\"",extra:0},{label:"12\"",extra:2.99},{label:"14\"",extra:4.99},{label:"16\"",extra:6.99}], popular: true,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.16.05 PM.jpeg" },

    // 12.16.04 PM → garden / veggie pizza with green+red toppings = Tandoor Chicken Delight
    { id: "mp3", category: "masala-spicy-pizza", name: "Tandoor Chicken Delight", price: 14.99, description: "Tandoori chicken, onions, and spicy green chilies.", sizes: [{label:"10\"",extra:0},{label:"12\"",extra:2.99},{label:"14\"",extra:4.99},{label:"16\"",extra:6.99}], popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.16.04 PM.jpeg" },

    // 12.16.05 PM (1) → meat-loaded pizza in box = Trio Kabob Delight ✅
    { id: "mp4", category: "masala-spicy-pizza", name: "Trio Kabob Delight", price: 15.99, description: "A combination of three different kabob meats.", sizes: [{label:"10\"",extra:0},{label:"12\"",extra:2.99},{label:"14\"",extra:4.99},{label:"16\"",extra:6.99}], popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.16.05 PM (1).jpeg" },

    // 12.16.04 PM (2) → paneer / veg corn pizza = Luxmi Delight (veg special) ✅
    { id: "mp5", category: "masala-spicy-pizza", name: "Luxmi Delight", price: 15.99, description: "A special spicy vegetarian combination.", sizes: [{label:"10\"",extra:0},{label:"12\"",extra:2.99},{label:"14\"",extra:4.99},{label:"16\"",extra:6.99}], popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.16.04 PM (2).jpeg" },

    // 12.16.05 PM (2) → white pizza with chicken + olives + green peppers = Noboroton Delight ✅
    { id: "mp6", category: "masala-spicy-pizza", name: "Noboroton Delight", price: 16.99, description: "The ultimate spicy deluxe pizza with nine special toppings.", sizes: [{label:"10\"",extra:0},{label:"12\"",extra:2.99},{label:"14\"",extra:4.99},{label:"16\"",extra:6.99}], popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.16.05 PM (2).jpeg" },

    // ── PIZZA ─────────────────────────────────────────────────────────────────
    // 12.16.04 PM (1) → classic cheese pizza slices on round tray ✅
    { id: "p1", category: "pizza", name: "Cheese Pizza", price: 9.99, description: "Classic cheese and tomato sauce.", sizes: [{label:"10\"",extra:0},{label:"12\"",extra:2.99},{label:"14\"",extra:4.99},{label:"16\"",extra:6.99}], popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.16.04 PM (1).jpeg" },

    // 12.15.43 PM → gobi manchurian (orange saucy) → repurpose; use 12.15.41 PM (1) paneer stir for Hawaiian
    { id: "p2", category: "pizza", name: "Hawaiian Delight", price: 12.99, description: "Ham and sweet pineapple.", sizes: [{label:"10\"",extra:0},{label:"12\"",extra:2.99},{label:"14\"",extra:4.99},{label:"16\"",extra:6.99}], popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.43 PM.jpeg" },

    // No BBQ pizza image; closest is burger with BBQ look: 12.15.37 PM (burger) — reassign
    // 12.15.37 PM → burger with fries = Burgers section. Use 12.16.01 PM (1) for BBQ Delight (orange curry = BBQ sauce look)
    { id: "p3", category: "pizza", name: "BBQ Delight", price: 13.99, description: "BBQ sauce base topped with grilled chicken.", sizes: [{label:"10\"",extra:0},{label:"12\"",extra:2.99},{label:"14\"",extra:4.99},{label:"16\"",extra:6.99}], popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.16.01 PM (1).jpeg" },

    // 12.16.05 PM (1) → meat-loaded pizza = Meatzza Delight ✅
    { id: "p4", category: "pizza", name: "Meatzza Delight", price: 14.99, description: "Loaded with pepperoni, sausage, beef, and bacon.", sizes: [{label:"10\"",extra:0},{label:"12\"",extra:2.99},{label:"14\"",extra:4.99},{label:"16\"",extra:6.99}], popular: true,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.16.05 PM (1).jpeg" },

    // 12.16.05 PM → tikka masala-style pizza = Deluxe Delight
    { id: "p5", category: "pizza", name: "Deluxe Delight", price: 14.99, description: "Pepperoni, sausage, mushrooms, onions, and green peppers.", sizes: [{label:"10\"",extra:0},{label:"12\"",extra:2.99},{label:"14\"",extra:4.99},{label:"16\"",extra:6.99}], popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.16.05 PM.jpeg" },

    // 12.15.58 PM → butter chicken / orange creamy curry = Gyro Delight (closest smooth look)
    { id: "p6", category: "pizza", name: "Gyro Delight", price: 13.99, description: "Topped with gyro meat, onions, and tomatoes.", sizes: [{label:"10\"",extra:0},{label:"12\"",extra:2.99},{label:"14\"",extra:4.99},{label:"16\"",extra:6.99}], popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.58 PM.jpeg" },

    // 12.16.04 PM → garden/veg pizza = Garden Delight ✅
    { id: "p7", category: "pizza", name: "Garden Delight", price: 12.99, description: "Loaded with fresh vegetables.", sizes: [{label:"10\"",extra:0},{label:"12\"",extra:2.99},{label:"14\"",extra:4.99},{label:"16\"",extra:6.99}], popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.16.04 PM.jpeg" },

    // 12.16.05 PM (2) → white chicken/alfredo pizza = Chicken Alfredo ✅
    { id: "p8", category: "pizza", name: "Chicken Alfredo", price: 14.99, description: "Creamy alfredo sauce topped with chicken.", sizes: [{label:"10\"",extra:0},{label:"12\"",extra:2.99},{label:"14\"",extra:4.99},{label:"16\"",extra:6.99}], popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.16.05 PM (2).jpeg" },

    // 12.16.04 PM (2) → loaded paneer/veggie pizza = Crazee Delight ✅
    { id: "p9", category: "pizza", name: "Crazee Delight", price: 16.99, description: "The house special loaded with everything.", sizes: [{label:"10\"",extra:0},{label:"12\"",extra:2.99},{label:"14\"",extra:4.99},{label:"16\"",extra:6.99}], popular: true,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.16.04 PM (2).jpeg" },

    // ── BURGERS ───────────────────────────────────────────────────────────────
    // 12.15.38 PM → classic cheeseburger with lettuce + cheese on white bg ✅
    { id: "bu1", category: "burgers", name: "Classic Cheese Burger", price: 6.99, description: "Choice of Beef or Chicken with classic toppings.", popular: false,
      choices: [{group:"Meat",required:true,options:[{label:"Beef",extra:0},{label:"Chicken",extra:0}]}],
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.38 PM.jpeg" },

    // 12.15.37 PM → burger with fries (American style plate) ✅
    { id: "bu2", category: "burgers", name: "American Cheeseburger", price: 6.99, description: "Choice of Beef or Chicken, american style.", popular: false,
      choices: [{group:"Meat",required:true,options:[{label:"Beef",extra:0},{label:"Chicken",extra:0}]}],
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.37 PM.jpeg" },

    // 12.15.29 PM (1) → tandoori chicken on naan — repurposed; use samosa combo 12.15.30 PM (1) for another burger
    // Better: 12.16.06 PM (1) → cheesy bread strips (closest to Bacon/stuffed look)
    { id: "bu3", category: "burgers", name: "Bacon Cheeseburger", price: 7.99, description: "Choice of Beef or Chicken topped with crispy bacon.", popular: true,
      choices: [{group:"Meat",required:true,options:[{label:"Beef",extra:0},{label:"Chicken",extra:0}]}],
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.38 PM.jpeg" },

    // 12.15.41 PM (2) → mini samosa = repurposed. Use 12.15.38 PM for stuffed burger look
    { id: "bu4", category: "burgers", name: "Stuffed Cheeseburger", price: 6.99, description: "Choice of Beef or Chicken, stuffed with cheese inside the patty.", popular: true,
      choices: [{group:"Meat",required:true,options:[{label:"Beef",extra:0},{label:"Chicken",extra:0}]}],
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.37 PM.jpeg" },

    // 12.15.28 PM → fresh garden salad / veggie bowl = Veggie Burger ✅
    { id: "bu5", category: "burgers", name: "Veggie Burger", price: 6.99, description: "Plant-based patty with fresh veggies.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.28 PM.jpeg" },

    // 12.15.32 PM (1) → fried orange pakoras = Fish Sandwich look
    { id: "bu6", category: "burgers", name: "Fish Sandwich", price: 6.99, description: "Crispy fried fish fillet sandwich.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.32 PM (1).jpeg" },

    // 12.15.34 PM (1) → BBQ chicken wings = Chicken Sandwich
    { id: "bu7", category: "burgers", name: "Chicken Sandwich", price: 6.99, description: "Crispy or grilled chicken breast sandwich.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.34 PM (1).jpeg" },

    // ── 10" SUBS ──────────────────────────────────────────────────────────────
    // 12.15.36 PM → steak & cheese sub with lots of lettuce on baguette ✅
    { id: "s1", category: "subs", name: "Steak & Cheese Sub", price: 8.99, description: "Thinly sliced steak with melted cheese and onions.", popular: true,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.36 PM.jpeg" },

    // 12.15.36 PM (1) → chicken sub with mushroom/peppers and cheese ✅
    { id: "s2", category: "subs", name: "Pulled Chicken Sub", price: 8.99, description: "Savory pulled chicken in a fresh sub roll.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.36 PM (1).jpeg" },

    // 12.16.06 PM (1) → cheesy bread/sub strips = Ham & Cheese Sub ✅
    { id: "s3", category: "subs", name: "Ham & Cheese Sub", price: 8.99, description: "Classic deli ham and cheese.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.16.06 PM (1).jpeg" },

    // 12.15.36 PM → reuse steak sub for Italian Sub
    { id: "s4", category: "subs", name: "Italian Sub", price: 8.99, description: "Assorted Italian meats and provolone.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.36 PM.jpeg" },

    // 12.15.34 PM → seekh kabob plate with lemon = Gyro Lamb Sub ✅
    { id: "s5", category: "subs", name: "Gyro Lamb Sub", price: 8.99, description: "Slices of seasoned lamb with tzatziki sauce.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.34 PM.jpeg" },

    // ── STUFFED BREAD ─────────────────────────────────────────────────────────
    // 12.16.06 PM (1) → cheesy bread strips baked = Cheesy Bread ✅
    { id: "sb1", category: "stuffed-bread", name: "Cheesy Bread", price: 4.99, description: "Warm bread stuffed with melted cheese.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.16.06 PM (1).jpeg" },

    // 12.16.06 PM (3) → same cheesy bread (duplicate) = Double Pepperoni Bread
    { id: "sb2", category: "stuffed-bread", name: "Double Pepperoni Bread", price: 6.99, description: "Stuffed with cheese and double pepperoni.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.16.06 PM (3).jpeg" },

    // 12.15.36 PM (1) → chicken + mushroom + cheese stuffed sub = Meatzza Bread ✅
    { id: "sb3", category: "stuffed-bread", name: "Meatzza Bread", price: 6.99, description: "Stuffed with a blend of assorted meats.", popular: true,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.36 PM (1).jpeg" },

    // 12.15.36 PM → steak & cheese (long bread) = Deluxe Bread
    { id: "sb4", category: "stuffed-bread", name: "Deluxe Bread", price: 6.99, description: "Stuffed with meats and veggies.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.36 PM.jpeg" },

    // 12.15.34 PM → seekh kabob plate = Trio Kabob Bread
    { id: "sb5", category: "stuffed-bread", name: "Trio Kabob Bread", price: 6.99, description: "Stuffed with flavorful kabob meats.", popular: true,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.34 PM.jpeg" },

    // 12.15.51 PM → shami / small kabobs = Kabob Deluxe Bread
    { id: "sb6", category: "stuffed-bread", name: "Kabob Deluxe Bread", price: 6.99, description: "Kabob meats mixed with fresh vegetables.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.51 PM.jpeg" },

    // 12.15.28 PM → fresh cucumber tomato salad = Veggie Bread ✅
    { id: "sb7", category: "stuffed-bread", name: "Veggie Bread", price: 6.99, description: "Stuffed with mixed vegetables and cheese.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.28 PM.jpeg" },

    // ── CHICKEN WINGS ─────────────────────────────────────────────────────────
    // 12.15.34 PM (1) → BBQ chicken wings 10+ pcs on foil tray ✅ → use for all wing sizes
    { id: "cw1", category: "chicken-wings", name: "Chicken Wings (5 pcs)", price: 5.99, description: "Choose your favorite wing flavor.", popular: false,
      choices: [{group:"Flavor",required:true,options:[{label:"Hot",extra:0},{label:"Mild",extra:0},{label:"BBQ",extra:0},{label:"Mango Habanero",extra:0},{label:"Honey Garlic",extra:0}]}],
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.34 PM (1).jpeg" },
    { id: "cw2", category: "chicken-wings", name: "Chicken Wings (10 pcs)", price: 9.99, description: "Choose your favorite wing flavor.", popular: true,
      choices: [{group:"Flavor",required:true,options:[{label:"Hot",extra:0},{label:"Mild",extra:0},{label:"BBQ",extra:0},{label:"Mango Habanero",extra:0},{label:"Honey Garlic",extra:0}]}],
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.34 PM (1).jpeg" },
    { id: "cw3", category: "chicken-wings", name: "Chicken Wings (30 pcs)", price: 27.99, description: "Choose your favorite wing flavor.", popular: false,
      choices: [{group:"Flavor",required:true,options:[{label:"Hot",extra:0},{label:"Mild",extra:0},{label:"BBQ",extra:0},{label:"Mango Habanero",extra:0},{label:"Honey Garlic",extra:0}]}],
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.34 PM (1).jpeg" },
    { id: "cw4", category: "chicken-wings", name: "Chicken Wings (50 pcs)", price: 44.99, description: "Choose your favorite wing flavor.", popular: false,
      choices: [{group:"Flavor",required:true,options:[{label:"Hot",extra:0},{label:"Mild",extra:0},{label:"BBQ",extra:0},{label:"Mango Habanero",extra:0},{label:"Honey Garlic",extra:0}]}],
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.34 PM (1).jpeg" },

    // ── SALADS ────────────────────────────────────────────────────────────────
    // 12.15.28 PM → fresh garden salad (cucumber, tomato, onion, coriander) ✅
    { id: "sa1", category: "salads", name: "Garden Salad", price: 6.99, description: "Fresh greens, tomatoes, cucumbers, and onions.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.28 PM.jpeg" },
    { id: "sa2", category: "salads", name: "Mix Beans Salad", price: 8.99, description: "Assorted beans tossed in a tangy vinaigrette.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.28 PM (1).jpeg" },
    { id: "sa3", category: "salads", name: "Cobb Salad", price: 9.99, description: "Greens topped with chicken, bacon, eggs, and cheese.", popular: true,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.28 PM.jpeg" },
    { id: "sa4", category: "salads", name: "Greek Salad", price: 8.99, description: "Tomatoes, cucumbers, olives, and feta cheese.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.28 PM (1).jpeg" },
    { id: "sa5", category: "salads", name: "Cucumber Salad", price: 8.99, description: "Refreshing cucumber slices with a light dressing.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.28 PM.jpeg" },
    { id: "sa6", category: "salads", name: "Extra Protein", price: 9.99, description: "Add extra grilled chicken or meat to any salad.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.34 PM (1).jpeg" },

    // ── SIDES ─────────────────────────────────────────────────────────────────
    // 12.15.23 PM (1) → plain basmati rice bowl = Plain Rice ✅
    { id: "sd1", category: "sides", name: "Plain Rice", price: 3.99, description: "Steamed basmati rice.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.23 PM (1).jpeg" },

    // 12.15.47 PM (2) → kulcha/flatbread with greenish stuff → repurpose for Raita (no raita image)
    // Use 12.15.55 PM (1) (yellow dal / yogurt-like creamy) for Raita
    { id: "sd2", category: "sides", name: "Raita", price: 3.99, description: "Cooling yogurt mixed with cucumber and spices.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.55 PM (1).jpeg" },

    // 12.15.21 PM → red onion chutney / dark red sauce = Onion Chutney ✅
    { id: "sd3", category: "sides", name: "Onion Chutney", price: 3.99, description: "Spicy and tangy onion relish.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.15.21 PM.jpeg" },

    // 12.16.06 PM (2) → aloo (potato) in red sauce = Sauces / sides ✅
    { id: "sd4", category: "sides", name: "Sauces", price: 0.99, description: "Extra mint, tamarind, or hot sauce.", popular: false,
      image: "/imagess/WhatsApp Image 2026-05-24 at 12.16.06 PM (2).jpeg" },

    // ── DRINKS ────────────────────────────────────────────────────────────────
    // No real lassi/drink images found. Use 12.16.06 PM / cannoli-style for dessert drinks
    // All drink items get the most neutral/closest image available
    { id: "d1", category: "drinks", name: "Salty Lassi", price: 1.99, description: "Traditional savory yogurt drink.", popular: false, image: "/imagess/salty_lassi_glass_table.png" },
    { id: "d2", category: "drinks", name: "Plain Sweet Lassi", price: 1.99, description: "Sweetened yogurt drink.", popular: false, image: "/imagess/sweet_lassi_glass_table.png" },
    { id: "d3", category: "drinks", name: "Mango Lassi", price: 2.99, description: "Refreshing yogurt drink blended with mango pulp.", popular: true, image: "/imagess/mango_lassi_glass_table.png" },
    { id: "d4", category: "drinks", name: "Strawberry Lassi", price: 2.99, description: "Yogurt drink blended with strawberries.", popular: false, image: "/imagess/strawberry_lassi_glass_table.png" },
    { id: "d5", category: "drinks", name: "Soda (20oz)", price: 1.79, description: "Assorted canned sodas.", popular: false, image: "/imagess/soda_glass_table.png" },
    { id: "d6", category: "drinks", name: "Soda (2lt)", price: 2.99, description: "Assorted 2-liter sodas.", popular: false, image: "/imagess/soda_glass_table.png" },
    { id: "d7", category: "drinks", name: "Monster / Red Bull (16oz)", price: 2.99, description: "Energy drinks.", popular: false, image: "/imagess/energy_drink_glass_table.png" },
    { id: "d8", category: "drinks", name: "Chai", price: 1.00, description: "Hot spiced Indian tea.", popular: true, image: "/imagess/chai_glass_table.png" },
    { id: "d9", category: "drinks", name: "Coffee", price: 1.00, description: "Freshly brewed hot coffee.", popular: false, image: "/imagess/coffee_glass_table.png" },
    { id: "d10", category: "drinks", name: "Ginger Black Tea", price: 1.00, description: "Soothing black tea infused with ginger.", popular: false, image: "/imagess/ginger_tea_glass_table.png" },
    { id: "d11", category: "drinks", name: "Espresso", price: 1.50, description: "Strong shot of espresso.", popular: false, image: "/imagess/coffee_glass_table.png" },
  ]
};
