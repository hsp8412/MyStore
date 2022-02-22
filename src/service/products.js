const products = [
  {
    id: 1,
    name: "MacBook Air",
    type: {
      id: 1,
      name: "Electronics",
    },
    stock: 4,
    price: 1000,
  },
  {
    id: 2,
    name: "Lamp",
    type: {
      id: 2,
      name: "Appliances",
    },
    stock: 2,
    price: 10,
  },
  {
    id: 3,
    name: "Humidifier",
    type: {
      id: 2,
      name: "Appliances",
    },
    stock: 4,
    price: 40,
  },
  {
    id: 4,
    name: "Chef Knife",
    type: {
      id: 3,
      name: "Kitchen Utensils",
    },
    stock: 4,
    price: 80,
  },
  {
    id: 5,
    name: "Down Jacket",
    type: {
      id: 4,
      name: "Clothes",
    },
    stock: 8,
    price: 800,
  },
];

export function getProducts() {
  return products;
}
