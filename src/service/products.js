const products = [
    {
        id :1,
        name: "MacBook Air",
        stock: 4,
        price: 1000
    },
    {
        id :2,
        name: "Lamp",
        stock: 2,
        price: 10
    },
    {
        id :3,
        name: "Humidifier",
        stock: 4,
        price: 40
    },
    {
        id :4,
        name: "Chef Knife",
        stock: 4,
        price: 80
    },
    {
        id :5,
        name: "Down Jacket",
        stock: 8,
        price: 800
    }
];

export function getProducts(){
    return products
}