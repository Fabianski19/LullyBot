require("dotenv").config();
const { Client, IntentsBitField, EmbedBuilder } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (c) => {
  console.log(`✅ ${c.user.tag} is online. ✅`);
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "embed") {
    const embed = new EmbedBuilder()
      .setTitle("Twitch")
      .setURL("https://www.twitch.tv/lullynya")
      .setAuthor({ name: "Lully Nyagarebotty" })
      .setDescription("Hier findest du meinen Twitch Kanal!")
      .setColor("Random")
      .addFields({
        name: "Wie wärs wenn du mir folst? uwu",
        value: "Du kleiner Hurensohn",
        inline: true,
      })
      .setImage('https://yt3.googleusercontent.com/Z9_a7H6v4A7KjJ_Wd6v8VgvsQIiYtU1BZ75xy_4c-ZoVByZivPehyuvz5avzyBr8yeRifS9r0Zg=s900-c-k-c0x00ffffff-no-rj')
      .setTimestamp()
      .setFooter({text: "uwu"});


    interaction.reply({ embeds: [embed] });
  }
});

client.on("messageCreate", (msg) => {
  if (msg.author.bot) return;

  if (msg.content.toLowerCase() === "hallo") {
    msg.reply("Hawwo " + msg.author.username + "!");
  }
});

client.login(process.env.TOKEN);
