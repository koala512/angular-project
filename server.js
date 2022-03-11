const express  = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(express.json());
app.use(cors())

const products=[
    {   
    id:1,
    title:"Kurosaki Ichigo – First Bankai",
    description:"Représentant Ichigo lors de son mythique affrontement contre Kuchiki Byakuya, notre seconde réalisation sur la licence Bleach (échelle 1/6) met en scène Ichigo au summum de son shikai juste avant d’atteindre le bankaï.",
    imageUrl:"https://oniri-creations.com/wp-content/uploads/2022/02/ichigo-statue-oniri-creations.jpg",
    price:450,
    date:new Date('2018-12-20'),
    favorite:0,
    isFavorite:false
    },
    {
    id:         2,
    title:      "Mugiwara No Luffy – Quarter Scale Collectible",
    description:"Pour notre tout premier projet sur la très attendue licence qu’est One Piece, nous avons l’immense fierté de vous présenter Monkey D. Luffy, ici représenté à l’échelle ¼, et ce pour la première fois en Europe. Le Capitaine de l’équipage du Chapeau de Paille reprend ici sa pose charismatique tirée du poster du long-métrage Stampede.",
    imageUrl:   "https://oniri-creations.com/wp-content/uploads/2021/11/luffy-QSC-statue-oniri-creations.jpg",
    price:      833,
    date :      new Date('2019-12-20'),
    favorite :  0,
    isFavorite :false
    },
    {   
    id:         3,
    title:      "The Flash Statue",
    description:"Pour notre deuxième statue de la gamme DC Comics Jim Lee, nous sommes fiers de vous présenter Flash.Lancé à toute vitesse, Barry Allen est présenté avec l’assurance qui le caractérise tant.",
    imageUrl:   "https://oniri-creations.com/wp-content/uploads/2021/05/Flash-statue-oniri-creations.jpg",
    price:      415,
    date :      new Date('2020-12-20'),
    favorite :  0,
    isFavorite :false
    },
    {  
    id:         4,
    title:      "EVA-00 – Metallic Variant Exclusive",
    description:"Pour notre seconde statue de la gamme Evangelion, nous sommes fiers de vous présenter l’Unité-00, le premier Evangelion fonctionnel.Piloté par la First Children, Rei Ayanami, l’Unité-00 est présentée ici dans sa version bleue utilisant la lance de Longinus lors de son affrontement contre l’ange Arael.",
    imageUrl:   "https://oniri-creations.com/wp-content/uploads/2021/03/Eva-00-metallic-statue-oniri-creations-copie.jpg",
    price:      665,
    date :      new Date('2021-12-20'),
    favorite :  0,
    isFavorite :false
    },
    {  
    id:         5,
    title:      "UFO Robot Grendizer Premium Statue",
    description:"Nous avons l’immense fierté de vous présenter notre première statue issue de la licence légendaire Grendizer, plus connue en France sous le nom de « Goldorak ».Issu du tout premier épisode de la série, notre statue représente Grendizer lors de son combat contre le Golgoth 01 « Giru Giru ».  Sans doute notre projet le plus ambitieux à ce jour, la formidable machine de combat nous a demandé près d’un millier d’heures de sculpture et de peinture.",
    imageUrl:   "https://oniri-creations.com/wp-content/uploads/2020/12/Goldorak-statue-oniri-creations.jpg",
    price:      999,
    date :      new Date('2022-10-20'),
    favorite :  0,
    isFavorite :false
    },
    {  
    id:         6,
    title:      "Zodd – The Immortal",
    description:"Pour notre quatrième statue issue de la gamme Berserk, nous sommes fiers de vous présenter Zodd l’Immortel sous sa forme humaine. Opposé à la troupe de soldats Kushan, les Daka, Zodd laisse parler sa puissance, tout en gardant son calme et sa confiance si caractéristiques.Personnage emblématique de la licence Berserk, nous avions à coeur de vous proposer cette version, avec une armure encore jamais réalisée en statue.",
    imageUrl:   "https://oniri-creations.com/wp-content/uploads/2020/11/Zodd-statue-oniri-creations.jpg",
    price:      500,
    date :      new Date('2022-11-20'),
    favorite :  0,
    isFavorite :false
    },
    {  
    id:         7,
    title:      "Grimmjow Jaggerjack",
    description:"Nous sommes très fiers de vous présenter notre première réalisation dédiée à Bleach, Grimmjow Jaggerjack. 6e Espada et méchant emblématique de la série, le voici dans sa pose si caractéristique lors de son deuxième duel face à Ichigo.Toute première statue de notre gamme (échelle 1/6) visant à se recentrer sur l’essence des personnages et des moments-clés, Grimmjow est représenté sous sa forme d’Arrancar.",
    imageUrl:   "https://oniri-creations.com/wp-content/uploads/2020/10/Grimmjow-statue-oniri-creations.jpg",
    price:      383,
    date :      new Date('2022-12-20'),
    favorite :  0,
    isFavorite :false
    }, 
    {  
    id:         8,
    title:      "Gon VS Hisoka – Battle at the Heavens Arena",
    description:"Pour notre première réalisation sur la licence Hunter x Hunter, nous avons choisi de représenter à travers un diorama, le mythique affrontement opposant Gon à Hisoka lors de l’Arc de la Tour Céleste.",
    imageUrl:   "https://oniri-creations.com/wp-content/uploads/2020/09/Hunter-statue-oniri-creations.jpg",
    price:      557,
    date :      new Date('2022-12-20'),
    favorite :  0,
    isFavorite :false
    },
   {  
   id:         9,
   title:      "Roy Mustang – The flame Alchemist",
   description:"Après Edward Elric, nous continuons la gamme Fullmetal Alchemist avec le célèbre alchimiste de flammes, Roy Mustang. Personnage central de la série Brotherhood, Roy est un alchimiste d’État puissant doté d’un gant gravé d’un Cercle de transmutation lui permettant de créer du feu d’un simple claquement de doigts. Notre statue s’inspire de son combat face à Envy dans lequel Roy laisse parler sa colère et son incroyable pouvoir. Face à la déferlante de flammes, l’Homunculus ne peut rien contre le Colonel.",
   imageUrl:   "https://oniri-creations.com/wp-content/uploads/2020/06/Roy-Mustang-statue-oniri-creations-1.jpg",
   price:      499,
   date :      new Date('2022-12-20'),
   favorite :  0,
   isFavorite :false
   },
    {  
   id:         10,
   title:      "Femto – The Wings of Darkness",
   description:"« Les ailes des Ténèbres… Femto ! »Pour notre troisième statue de la gamme, nous vous présentons Femto, le Roi Démon, incarnant l’apogée de l’arc mythique de l’âge d’Or et du moment culte qu’est l’Eclipse.",
   imageUrl:   "https://oniri-creations.com/wp-content/uploads/2020/02/femto-statue-oniri-creations-1-916x1300.jpg",
   price:      382,
   date :      new Date('2022-12-20'),
   favorite :  0,
   isFavorite :false
    },
];
app.put('/products/:id/favorite',(req, res) => {
    const id = req.params.id;
    let product = products.find((p) => p.id == id);
    if(product.isFavorite){
        product.favorite--;
    }else{
        product.favorite++;
    }
    product.isFavorite = !product.isFavorite;

    res.set('Access-Control-Allow-Origin','*');
    res.json(product)
  })

app.get('/products', (req, res)=> {
    res.set('Access-Control-Allow-Origin','*');
    res.json(products)
}); 
app.get('/products/:id', (req, res)=> {
    const id = req.params.id;
    res.set('Access-Control-Allow-Origin','*');
    res.json(products.find((p) => p.id == id))
}); 
app.listen(port, () =>{
    console.log(`Application exemple a l'écoute sur sur le port ${port}!`)
});


