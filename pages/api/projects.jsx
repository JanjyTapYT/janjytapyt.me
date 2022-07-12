export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://cdn.discordapp.com/attachments/952628698807414785/953716331226759238/png_20220316_160308_0000.png",
      name: "Stoneclane List",
      description:
        "It is an botlist and serverlist witch uptime system and more!",
      link: "https://stoneclane.xyz",
      language: "Next.js",
      languageIcon: "./assets/techs/nextjs.svg",
    },
    {
      id: 1,
      image: "https://cdn.discordapp.com/attachments/960208290506215456/962311061426536448/new_icon.gif",
      name: "Tresthost.com (Soon!)",
      description:
        "It is an public and cheap Game Server Hosting Panel! (Soon!)",
      link: "https://tresthost.com",
      language: "Next.js",
      languageIcon: "./assets/techs/nextjs.svg",
    },
    {
      id: 2,
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
