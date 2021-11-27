export const menus = {
  burgers: [
    {
      name: "India burger",
      price: 6.5,
      ingredients: "Salade, Tomate, Oignon, Poulet curry",
      img: "https://th.bing.com/th/id/R.881df7be6ad606753dc3be6b81ab5ec9?rik=yIeh%2fBXQx77d8g&riu=http%3a%2f%2fbbqrules.de%2fwp-content%2fuploads%2f2018%2f08%2fNebraska.jpg&ehk=32Hx89oDOYFhoKqpbuaRCJuKwbV7BvVZCkqFQuNa8qc%3d&risl=&pid=ImgRaw&r=0",
    },
  ],
};

export interface MenuChoiceProps {
  name: string;
  price: number;
  ingredients?: string;
  img?: string;
}
