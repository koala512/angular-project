import { Injectable } from '@angular/core';
import { Product }   from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

    products:Product[] = [
      new Product(
        1,
        "Kurosaki Ichigo – First Bankai",
        "Représentant Ichigo lors de son mythique affrontement contre Kuchiki Byakuya, notre seconde réalisation sur la licence Bleach (échelle 1/6) met en scène Ichigo au summum de son shikai juste avant d’atteindre le bankaï.",
        "https://oniri-creations.com/wp-content/uploads/2022/02/ichigo-statue-oniri-creations.jpg",
        450,
        new Date('2018-12-20'),
        0,
        false
      ),
      new Product(
        2,
        "Mugiwara No Luffy – Quarter Scale Collectible",
        "Pour notre tout premier projet sur la très attendue licence qu’est One Piece, nous avons l’immense fierté de vous présenter Monkey D. Luffy, ici représenté à l’échelle ¼, et ce pour la première fois en Europe. Le Capitaine de l’équipage du Chapeau de Paille reprend ici sa pose charismatique tirée du poster du long-métrage Stampede.",
        "https://oniri-creations.com/wp-content/uploads/2021/11/luffy-QSC-statue-oniri-creations.jpg",
        833,
        new Date('2019-12-20'),
        0,
        false
      ),
      new Product(
        3,
        "The Flash Statue",
        "Pour notre deuxième statue de la gamme DC Comics Jim Lee, nous sommes fiers de vous présenter Flash.Lancé à toute vitesse, Barry Allen est présenté avec l’assurance qui le caractérise tant.",
        "https://oniri-creations.com/wp-content/uploads/2021/05/Flash-statue-oniri-creations.jpg",
        415,
        new Date('2020-12-20'),
        0,
        false
      ),
      new Product(
        4,
        "EVA-00 – Metallic Variant Exclusive",
        "Pour notre seconde statue de la gamme Evangelion, nous sommes fiers de vous présenter l’Unité-00, le premier Evangelion fonctionnel.Piloté par la First Children, Rei Ayanami, l’Unité-00 est présentée ici dans sa version bleue utilisant la lance de Longinus lors de son affrontement contre l’ange Arael.",
        "https://oniri-creations.com/wp-content/uploads/2021/03/Eva-00-metallic-statue-oniri-creations-copie.jpg",
        665,
        new Date('2021-12-20'),
        0,
        false
      ),
      new Product(
        5,
        "UFO Robot Grendizer Premium Statue",
        "Nous avons l’immense fierté de vous présenter notre première statue issue de la licence légendaire Grendizer, plus connue en France sous le nom de « Goldorak ».Issu du tout premier épisode de la série, notre statue représente Grendizer lors de son combat contre le Golgoth 01 « Giru Giru ».  Sans doute notre projet le plus ambitieux à ce jour, la formidable machine de combat nous a demandé près d’un millier d’heures de sculpture et de peinture.",
        "https://oniri-creations.com/wp-content/uploads/2020/12/Goldorak-statue-oniri-creations.jpg",
        999,
        new Date('2022-10-20'),
        0,
        false
      ),
      new Product(
        6,
        "Zodd – The Immortal",
        "Pour notre quatrième statue issue de la gamme Berserk, nous sommes fiers de vous présenter Zodd l’Immortel sous sa forme humaine. Opposé à la troupe de soldats Kushan, les Daka, Zodd laisse parler sa puissance, tout en gardant son calme et sa confiance si caractéristiques.Personnage emblématique de la licence Berserk, nous avions à coeur de vous proposer cette version, avec une armure encore jamais réalisée en statue.",
        "https://oniri-creations.com/wp-content/uploads/2020/11/Zodd-statue-oniri-creations.jpg",
        500,
        new Date('2022-11-20'),
        0,
        false
      ),
      new Product(
        7,
        "Grimmjow Jaggerjack",
        "Nous sommes très fiers de vous présenter notre première réalisation dédiée à Bleach, Grimmjow Jaggerjack. 6e Espada et méchant emblématique de la série, le voici dans sa pose si caractéristique lors de son deuxième duel face à Ichigo.Toute première statue de notre gamme (échelle 1/6) visant à se recentrer sur l’essence des personnages et des moments-clés, Grimmjow est représenté sous sa forme d’Arrancar.",
        "https://oniri-creations.com/wp-content/uploads/2020/10/Grimmjow-statue-oniri-creations.jpg",
        383,
        new Date('2022-12-20'),
        0,
        false
      ),new Product(
        8,
        "Gon VS Hisoka – Battle at the Heavens Arena",
        "Pour notre première réalisation sur la licence Hunter x Hunter, nous avons choisi de représenter à travers un diorama, le mythique affrontement opposant Gon à Hisoka lors de l’Arc de la Tour Céleste.",
        "https://oniri-creations.com/wp-content/uploads/2020/09/Hunter-statue-oniri-creations.jpg",
        557,
        new Date('2022-13-20'),
        0,
        false
      ),new Product(
        9,
        "Roy Mustang – The flame Alchemist",
        "Après Edward Elric, nous continuons la gamme Fullmetal Alchemist avec le célèbre alchimiste de flammes, Roy Mustang. Personnage central de la série Brotherhood, Roy est un alchimiste d’État puissant doté d’un gant gravé d’un Cercle de transmutation lui permettant de créer du feu d’un simple claquement de doigts. Notre statue s’inspire de son combat face à Envy dans lequel Roy laisse parler sa colère et son incroyable pouvoir. Face à la déferlante de flammes, l’Homunculus ne peut rien contre le Colonel.",
        "https://oniri-creations.com/wp-content/uploads/2020/06/Roy-Mustang-statue-oniri-creations-1.jpg",
        499,
        new Date('2022-14-20'),
        0,
        false
      ),new Product(
        10,
        "Femto – The Wings of Darkness",
        "« Les ailes des Ténèbres… Femto ! »Pour notre troisième statue de la gamme, nous vous présentons Femto, le Roi Démon, incarnant l’apogée de l’arc mythique de l’âge d’Or et du moment culte qu’est l’Eclipse.",
        "https://oniri-creations.com/wp-content/uploads/2020/02/femto-statue-oniri-creations-1-916x1300.jpg",
        382,
        new Date('2022-15-20'),
        0,
        false
      ),
    ];
    getAllProducts():Product[] { 
      return this.products
    }
    onFavoriteProduct(product:Product): void {
      if(product.isFavorite) {
          product.favorite--;
        } else {
          product.favorite++;
        }
        product.isFavorite = !product.isFavorite;
    }
}