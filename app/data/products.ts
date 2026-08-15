import type { ProductDTO } from "~/models/product";

export const products : ProductDTO[] = [

    {
        id: 1,
        name: "Computador Gamer",
        description: "Computador gamer de alto desempenho.",
        price: 4500.99,
        imgUrl: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5",
        categories: [
            {
                id: 1,
                name: "Computadores"
            },
            {
                id: 2,
                name: "Eletrônicos"
            }
        ]
    },

    {
        id: 2,
        name: "Smart TV",
        description: "Smart TV 4K com excelente qualidade de imagem.",
        price: 2500.99,
        imgUrl: "https://images.unsplash.com/photo-1593784991095-a205069470b6",
        categories: [
            {
                id: 2,
                name: "Eletrônicos"
            },
            {
                id: 3,
                name: "Eletrodomésticos"
            }
        ]
    },

    {
        id: 3,
        name: "Notebook",
        description: "Notebook para estudos e trabalho.",
        price: 3200.50,
        imgUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
        categories: [
            {
                id: 1,
                name: "Computadores"
            },
            {
                id: 2,
                name: "Eletrônicos"
            }
        ]
    }
    
]