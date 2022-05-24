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
    {
      id: 4,
      image: "https://cdn.discordapp.com/attachments/971049189377179718/971848852002963546/5.png",
      name: "TrestHost",
      description:
        "Minecraft Server Hosting",
      link: "https://tresthost.com",
      language: "React",
      languageIcon: "./assets/techs/react.svg",
    },
    {
      id: 5,
      image: "https://media.discordapp.net/attachments/971049189377179718/975836381207228456/logo.png",
      name: "Praxive",
      description:
        "Another dimension, another life. next generation browser.",
      link: "https://praxive.sdevs.org",
      language: "React",
      languageIcon: "./assets/techs/react.svg",
     },
    {
      id: 6,
      image: "https://cdn.discordapp.com/attachments/971049189377179718/978755640191254628/Cruise_bot_Logo.png",
      name: "Cruise",
      description:
        "The only one discord bot you ever need! The bot have a powerfull web dashboard and more than 250+ Commands!",
      link: "https://cruise.tk",
      language: "Nodejs",
      languageIcon: "./assets/techs/nodejs.svg",
     },
  ];
  res.status(200).json(data);
};
