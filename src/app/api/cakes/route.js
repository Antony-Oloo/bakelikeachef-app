export async function GET() {
  return Response.json([
    {
      id: 1,
      name: "Chocolate Heaven",
      price: 22.99,
      image: "/cakes/enhanced_001.jpg",
      category: "Birthday",
    },
    {
      id: 2,
      name: "Vanilla Cloud",
      price: 19.49,
      image: "/cakes/enhanced_002.jpg",
      category: "Wedding",
    },
    {
      id: 3,
      name: "Berry Bliss",
      price: 24.99,
      image: "/cakes/enhanced_003.jpg",
      category: "Cupcake",
    },
    // Add more if needed
  ]);
}
