export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://cdn.discordapp.com/attachments/971049189377179718/978758525805289502/k.jpg",
      name: "Stoneclane List",
      description:
        "It is an botlist and serverlist witch uptime system and more!",
      link: "https://stoneclane.xyz",
      language: "Next.js",
      languageIcon: "./assets/techs/nextjs.svg",
    },
    {
      id: 2,
      image: "https://cdn.discordapp.com/attachments/971049189377179718/978758525129994271/g.jpg",
      name: "GiveAways",
      description:
        "you can create with this bot GiveAways giveaways you like",
      link: "https://giveaways-bot.com",
      language: "React",
      languageIcon: "./assets/techs/react.svg",
    },
    {
      id: 3,
      image: "https://cdn.discordapp.com/attachments/971049189377179718/978758524861546506/t.jpg",
      name: "TrestHost",
      description:
        "Take advantage of Minecraft and Discord bots or other services with TrestHost and feel the pride of being active 24/7. ",
      link: "https://tresthost.com",
      language: "React",
      languageIcon: "./assets/techs/react.svg",
    },
    {
      id: 4,
      image: "https://cdn.discordapp.com/attachments/971049189377179718/978758526086316153/p.jpg",
      name: "Praxive",
      description:
        "Another dimension, another life. next generation browser.",
      link: "https://praxive.sdevs.org",
      language: "React",
      languageIcon: "./assets/techs/react.svg",
     },
    {
      id: 5,
      image: "https://cdn.discordapp.com/attachments/971049189377179718/978758526367313970/c.jpg",
      name: "Crusie",
      description:
        "The only one discord bot you ever need! The bot have a powerfull web dashboard and more than 180+ Commands!",
      link: "https://cruise.tk",
      language: "Nodejs",
      languageIcon: "./assets/techs/nodejs.svg",
     },
  ];
  res.status(200).json(data);
};
