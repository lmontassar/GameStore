import { Injectable } from '@angular/core';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

games: Game[] = [
    {
        id: 1,
        name: "Grand Theft Auto V",
        description: "An action-adventure game that takes place in the fictional state of San Andreas",
        image : "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png",
        price: 29.99,
        type: "Adventure",
        year: 2013,
        key: "X1A4-A4ED-RFGD-FDGD"
    },
    {
        id: 2,
        name: "Call of Duty: Warzone",
        description: "A free-to-play battle royale game where up to 150 players compete to be the last squad standing",
        image: "https://global-img.gamergen.com/call-of-duty-warzone-2-0-nombre-joueurs-lancement_0901012369.jpg",
        price: 0,
        type: "Shooter",
        year: 2020,
        key: "X1A4-A4ED-RFGD-FDGD"
    },
    {
        id: 3,
        name: "The Legend of Zelda: Breath of the Wild",
        description: "An open-world action-adventure game in the Zelda series",
        image : "https://static.printler.com/cache/f/6/d/d/9/e/f6dd9eb8f2d2f6d7bb23b33cac37b011a21865f2.jpg" ,
        price: 59.99,
        type: "Adventure",
        year: 2017,
        key: "X1A4-A4ED-RFGD-FDGD"
    },
    {
        id: 4,
        name: "Red Dead Redemption 2",
        description: "A Western-themed action-adventure game set in an open world environment",
        image: "https://store-images.s-microsoft.com/image/apps.34695.13942869738016799.078aba97-2f28-440f-97b6-b852e1af307a.b278e12f-c22c-4a2a-bb18-dfd26ca6cafc?w=180&h=270&q=60",
        price: 39.99,
        type: "Action",
        year: 2018,
        key: "X1A4-A4ED-RFGD-FDGD"
    },
    {
        id: 5,
        name: "The Witcher 3: Wild Hunt",
        description: "An action role-playing game set in an open world environment",
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png",
        price: 39.99,
        type: "Action",
        year: 2015,
        key: "X1A4-A4ED-RFGD-FDGD"
    },
    {
        id: 6,
        name: "Minecraft",
        description: "A sandbox game where players build and explore blocky worlds",
        image: "https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png",
        price: 26.95,
        type: "Sandbox",
        year: 2011,
        key: "X1A4-A4ED-RFGD-FDGD"
    },
    {
        id: 7,
        name: "FIFA 22",
        description: "A football simulation video game",
        image: "https://www.gametek.tn/628/fifa-22-ps4-tunisie.jpg",
        price: 59.99,
        type: "Sports",
        year: 2021,
        key: "X1A4-A4ED-RFGD-FDGD"
    },
    {
        id: 8,
        name: "Assassin's Creed Valhalla",
        description: "An action role-playing game set in the Viking Age",
        image: "https://image.jeuxvideo.com/medias-sm/158826/1588264397-5261-jaquette-avant.jpg",
        price: 49.99,
        type: "RPG",
        year: 2020,
        key: "X1A4-A4ED-RFGD-FDGD"
    },
    {
        id: 9,
        name: "Cyberpunk 2077",
        description: "A first-person shooter game in the Halo series",
        image: "https://image.jeuxvideo.com/medias-sm/163835/1638354762-4961-jaquette-avant.gif",
        price: 49.99,
        type: "RPG",
        year: 2020,
        key: "X1A4-A4ED-RFGD-FDGD"
    },
    {
        id: 10,
        name: "Halo Infinite",
        description: "A first-person shooter game in the Halo series",
        image: "https://www.escapistmagazine.com/wp-content/uploads/2023/01/halo_infinite_hope_nogun_keyart_horiz_1120-d408b3ea15194141bf68183246babe2e.jpg?fit=1120%2C630",
        price: 59.99,
        type: "Shooter",
        year: 2021,
        key: "X1A4-A4ED-RPOD-FDGD"
    },
    {
        id: 11,
        name: "Horizon Forbidden West",
        description: "An action role-playing game set in a post-apocalyptic world",
        image: "https://media.wired.com/photos/623233505f9392d9abe3e43e/master/pass/Horizon-Forbidden-West-Spoilers-Character-Games-Culture.jpg",
        price: 69.99,
        type: "Action",
        year: 2022,
        key: "X1A4-AGFH-RJ9D-FDGD"
    },
    {
        id: 12,
        name: "God of War",
        description: "An action-adventure game based on Norse mythology",
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202109/2821/SZRc7OMwGgv8lJXIOlYyuBU2.jpg",
        price: 59.99,
        type: "Action",
        year: 2018,
        key: "X124-AFED-AAGD-FDGD"
    },
    {
        id: 13,
        name: "Death Stranding",
        description: "An action game set in an open world, featuring the journey of a courier",
        image: "https://assets1.ignimgs.com/2019/07/21/death-stranding---button-20197-1563692244528.jpg",
        price: 49.99,
        type: "Action",
        year: 2019,
        key: "X1A4-AFGH-RHHH-FDRD"
    },
    {
        id: 14,
        name: "Marvel's Spider-Man: Miles Morales",
        description: "An action-adventure game based on the Marvel Comics superhero Miles Morales",
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/T45iRN1bhiWcJUzST6UFGBvO.png",
        price: 49.99,
        type: "Action",
        year: 2020,
        key: "X1A4-A4ED-RFGD-FDGD"
    },
    {
        id: 15,
        name: "Star Wars Jedi: Fallen Order",
        description: "An action-adventure game set in the Star Wars universe",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Cover_art_of_Star_Wars_Jedi_Fallen_Order.jpg/220px-Cover_art_of_Star_Wars_Jedi_Fallen_Order.jpg",
        price: 39.99,
        type: "Adventure",
        year: 2019,
        key: "X1A4-A4ED-RFGD-FDGD"
    },
    {
        id: 16,
        name: "Bioshock Infinite",
        description: "A first-person shooter game set in the floating city of Columbia",
        image: "https://upload.wikimedia.org/wikipedia/en/a/a3/Official_cover_art_for_Bioshock_Infinite.jpg",
        price: 29.99,
        type: "FirstPerson",
        year: 2013,
        key: "X1A4-A4ED-RFGD-FDGD"
    },
    {
        id: 17,
        name: "Uncharted 4: A Thief's End",
        description: "An action-adventure game following treasure hunter Nathan Drake",
        image: "https://upload.wikimedia.org/wikipedia/en/1/1a/Uncharted_4_box_artwork.jpg",
        price: 19.99,
        type: "Action",
        year: 2016,
        key: "X1A4-A4ED-RFGD-FDGD"
    }
];

  constructor() { }
}
