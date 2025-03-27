export async function GET() {
  return Response.json([
    {
      id: 1,
      name: "Elegant Wedding Cake",
      price: 120.00,
      image: "/cakes/wedding-elegant.jpg",
      category: "Wedding Cakes",
      description: "A multi-tier vanilla and raspberry-filled cake perfect for weddings.",
      ingredients: ["Vanilla sponge", "Raspberry filling", "Buttercream", "Fondant"],
      allergyInfo: "Contains dairy, eggs, gluten. May contain traces of nuts.",
    },
    {
      id: 2,
      name: "Classic Birthday Cake",
      price: 65.00,
      image: "/cakes/birthday-classic.jpg",
      category: "Birthday Cakes",
      description: "A classic chocolate birthday cake with custom name and candle.",
      ingredients: ["Chocolate sponge", "Ganache", "Cream", "Decorations"],
      allergyInfo: "Contains dairy, eggs, gluten.",
    },
    {
      id: 3,
      name: "Graduation Cap Cake",
      price: 80.00,
      image: "/cakes/graduation.jpg",
      category: "Graduation Cakes",
      description: "A fun and creative cap-and-diploma themed cake to celebrate grads!",
      ingredients: ["Vanilla sponge", "Fondant", "Edible glitter"],
      allergyInfo: "Contains eggs, dairy, gluten.",
    },
    {
      id: 4,
      name: "Superhero Character Cake",
      price: 90.00,
      image: "/cakes/character-superhero.jpg",
      category: "Character Cakes",
      description: "Superhero-inspired cake with bright comic-style decorations. Kid favorite!",
      ingredients: ["Strawberry sponge", "Cream filling", "Fondant"],
      allergyInfo: "Contains dairy, gluten. May contain eggs.",
    },
    {
      id: 5,
      name: "Pink Cupcake Box (6-pack)",
      price: 30.00,
      image: "/cakes/cupcakes-pink.jpg",
      category: "Cupcakes",
      description: "6 beautifully frosted pink cupcakes, perfect for parties & showers.",
      ingredients: ["Butter", "Eggs", "Flour", "Strawberry cream"],
      allergyInfo: "Contains dairy, eggs, gluten.",
    },
    {
      id: 6,
      name: "Chocolate Popcakes",
      price: 25.00,
      image: "/cakes/popcakes-chocolate.jpg",
      category: "popcakes",
      description: "12 chocolate-dipped cake pops in a gift box. Soft, rich and sweet.",
      ingredients: ["Chocolate", "Flour", "Eggs", "Sugar", "Butter"],
      allergyInfo: "Contains dairy, eggs, gluten.",
    },
    {
      id: 7,
      name: "Rainbow Cakesicles",
      price: 28.00,
      image: "/cakes/cakesicles-rainbow.jpg",
      category: "cakesicles",
      description: "4 rainbow-colored cakesicles dipped in white chocolate with sprinkles.",
      ingredients: ["Vanilla sponge", "White chocolate", "Sprinkles"],
      allergyInfo: "Contains dairy, eggs, gluten.",
    },
    {
      id: 8,
      name: "Vegan Chocolate Cake",
      price: 40.00,
      image: "/cakes/vegan-chocolate.jpg",
      category: "Vegan",
      description: "A delicious eggless, dairy-free chocolate cake topped with cocoa ganache.",
      ingredients: ["Oat flour", "Cocoa", "Coconut milk", "Maple syrup"],
      allergyInfo: "Gluten-free option available. Contains nuts.",
    },
    {
      id: 9,
      name: "Golden Anniversary Cake",
      price: 110.00,
      image: "/cakes/anniversary-golden.jpg",
      category: "Anniversary Cakes",
      description: "Elegant two-tier golden cake with roses and hearts. Perfect for anniversaries.",
      ingredients: ["Vanilla sponge", "Buttercream", "Edible gold"],
      allergyInfo: "Contains dairy, eggs, gluten.",
    },
    {
      id: 10,
      name: "Gender Reveal Surprise Cake",
      price: 75.00,
      image: "/cakes/gender-reveal.jpg",
      category: "Gender Reveal Cakes",
      description: "White cake filled with either pink or blue cream center. A sweet surprise inside!",
      ingredients: ["Vanilla sponge", "Food coloring", "Cream filling"],
      allergyInfo: "Contains dairy, gluten, eggs.",
    }
  ]);
}




// export async function GET() {
//   return Response.json([
//     {
//       id: 1,
//       name: "Chocolate Heaven",
//       price: 22.99,
//       image: "/cakes/enhanced_001.jpg",
//       category: "Birthday",
//     },
//     {
//       id: 2,
//       name: "Vanilla Cloud",
//       price: 19.49,
//       image: "/cakes/enhanced_002.jpg",
//       category: "Wedding",
//     },
//     {
//       id: 3,
//       name: "Berry Bliss",
//       price: 24.99,
//       image: "/cakes/enhanced_003.jpg",
//       category: "Cupcake",
//     },
//     // Add more if needed
//   ]);
// }
