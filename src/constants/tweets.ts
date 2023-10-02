import type { Tweet } from "@/types";

export const tweets: Tweet[] = [
  {
    id: "1706400080184365384",
    user: {
      name: "Dan StarWarsCentralized",
      user: "SCentralized",
      verified: false,
      photo:
        "https://pbs.twimg.com/profile_images/1699518528313823232/lQhmro8t_400x400.jpg",
    },
    tweet: "The Mandalorian Season 2 if it was a book released in 1997",
    photos: ["F65Z0iEXcAAH-Nc"],
    likes: 1047,
    replies: new Array(9).fill(null),
    retweets: 125,
  },
  // {
  //   id: "1705988408198263092",
  //   user: {
  //     name: "Biki Nice",
  //     user: "Biki_Nice",
  //     verified: false,
  //     photo:
  //       "https://pbs.twimg.com/profile_images/1425764885548478464/epXzwP6f_400x400.jpg",
  //   },
  //   tweet: `Grogu on the verge of crying when Din took the decision to adopt him 😭\n\nDin Grogu 🥲`,
  //   photos: ["F6zjab-WAAATaJe"],
  //   likes: 0,
  //   replies: [],
  //   retweets: 0,
  // },
  // {
  //   id: "1702657504352620942",
  //   user: {
  //     name: "Sr. Luiz Otávio",
  //     user: "SrLuizOtavio",
  //     verified: true,
  //     photo:
  //       "https://pbs.twimg.com/profile_images/1691089842552115201/JQyPbICk_400x400.jpg",
  //   },
  //   tweet:
  //     "Explicação pública: a Poliana, minha namorada atual, não usa calças. Se ela usasse, não seria minha namorada, pois eu não me envolveria com mulher imodesta, que daria mal exemplo às minhas filhas. Minha ex-namorada usava calças, 4 anos atrás; obviamente terminamos. Eis a verdade.",
  //   photos: ["F6ENAoAWYAEOMmP"],
  //   likes: 0,
  //   replies: [],
  //   retweets: 0,
  // },
];
