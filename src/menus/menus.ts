export const menus = {
  burgers: [
    {
      name: "Bacon Cheeseburger",
      price: 6.0,
      ingredients:
        "Salade, Tomate, Oignon, Steack haché, Cheddar, Bacon, Sauce Maison",
      img: "https://th.bing.com/th/id/R.881df7be6ad606753dc3be6b81ab5ec9?rik=yIeh%2fBXQx77d8g&riu=http%3a%2f%2fbbqrules.de%2fwp-content%2fuploads%2f2018%2f08%2fNebraska.jpg&ehk=32Hx89oDOYFhoKqpbuaRCJuKwbV7BvVZCkqFQuNa8qc%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      name: "India Burger",
      price: 6.5,
      ingredients: "Salade, Tomate, Oignon, Poulet curry",
      img: "https://th.bing.com/th/id/R.881df7be6ad606753dc3be6b81ab5ec9?rik=yIeh%2fBXQx77d8g&riu=http%3a%2f%2fbbqrules.de%2fwp-content%2fuploads%2f2018%2f08%2fNebraska.jpg&ehk=32Hx89oDOYFhoKqpbuaRCJuKwbV7BvVZCkqFQuNa8qc%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      name: "Provençal Burger",
      price: 6.5,
      ingredients:
        "Salade, Oignon, Steack haché, Cheddar, Aubergine, Courgette, Poivron, Tomate séchée, Grana Padana, Huile d'olive, Ail, Basilic",
      img: "https://th.bing.com/th/id/R.881df7be6ad606753dc3be6b81ab5ec9?rik=yIeh%2fBXQx77d8g&riu=http%3a%2f%2fbbqrules.de%2fwp-content%2fuploads%2f2018%2f08%2fNebraska.jpg&ehk=32Hx89oDOYFhoKqpbuaRCJuKwbV7BvVZCkqFQuNa8qc%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      name: "Hamburger",
      price: 4.5,
      ingredients: "Salade, Tomate, Oignon, Steack haché, Sauce Maison",
      img: "https://th.bing.com/th/id/R.881df7be6ad606753dc3be6b81ab5ec9?rik=yIeh%2fBXQx77d8g&riu=http%3a%2f%2fbbqrules.de%2fwp-content%2fuploads%2f2018%2f08%2fNebraska.jpg&ehk=32Hx89oDOYFhoKqpbuaRCJuKwbV7BvVZCkqFQuNa8qc%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      name: "Cheese Burger",
      price: 5.0,
      ingredients: "Salade, Tomate, Oignon, Steack haché, Cheddar Sauce Maison",
      img: "https://th.bing.com/th/id/R.881df7be6ad606753dc3be6b81ab5ec9?rik=yIeh%2fBXQx77d8g&riu=http%3a%2f%2fbbqrules.de%2fwp-content%2fuploads%2f2018%2f08%2fNebraska.jpg&ehk=32Hx89oDOYFhoKqpbuaRCJuKwbV7BvVZCkqFQuNa8qc%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      name: "Vegi Burger",
      price: 6.0,
      ingredients:
        "Salade, Oignon, Aubergine, Courgette, Poivron, Tomate séchée, Huile d'olive, Ail, Basilic",
      img: "https://th.bing.com/th/id/R.881df7be6ad606753dc3be6b81ab5ec9?rik=yIeh%2fBXQx77d8g&riu=http%3a%2f%2fbbqrules.de%2fwp-content%2fuploads%2f2018%2f08%2fNebraska.jpg&ehk=32Hx89oDOYFhoKqpbuaRCJuKwbV7BvVZCkqFQuNa8qc%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      name: "Plain Burger",
      price: 3.5,
      ingredients: "Steack haché",
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
