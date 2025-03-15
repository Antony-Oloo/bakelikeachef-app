export async function GET() {
    return Response.json([
      {
        id: 1,
        name: "Chocolate Delight",
        price: 15.99,
        image: "https://source.unsplash.com/400x300/?chocolate-cake",
      },
      {
        id: 2,
        name: "Vanilla Dream",
        price: 12.99,
        image: "https://source.unsplash.com/400x300/?vanilla-cake",
      },
      {
        id: 3,
        name: "Strawberry Bliss",
        price: 14.99,
        image: "https://source.unsplash.com/400x300/?strawberry-cake",
      },
    ]);
  }