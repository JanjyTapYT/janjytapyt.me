export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://cdn.discordapp.com/attachments/952628698807414785/963490952188690463/New_Stoneclane_List_Logo_Faded.png",
      name: "Stoneclane List",
      description:
        "It is an botlist and serverlist witch uptime system and more!",
      link: "https://stoneclane.xyz",
      language: "Next.js",
      languageIcon: "./assets/techs/nextjs.svg",
    },
    {
      id: 2,
      image: "https://cdn.discordapp.com/attachments/964255324687200328/964255364151377991/9a1428be2f9a23c4a798e8e82cf75e5b.png",
      name: "Soundpro",
      description:
        "It is an public ultra quality music bot",
      link: "https://dsc.gg/soundpro",
      language: "Node.js",
      languageIcon: "./assets/techs/nodejs.svg",
    },
    {
      id: 3,
      image: "https://cdn.discordapp.com/attachments/849221365151170581/951525925189722212/giveaways_logo.png",
      name: "GiveAways",
      description:
        "you can create with this bot GiveAways giveaways you like",
      link: "https://giveaways-bot.com",
      language: "React",
      languageIcon: "./assets/techs/react.svg",
    },
  ];
  res.status(200).json(data);
};
