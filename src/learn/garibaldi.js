const MessageEmbed = require("discord.js").MessageEmbed;

const execute = (bot, msg, args) => {
  const embed = new MessageEmbed()
    .setColor("#ff00bc")
    
    .setTitle("QUEM É O MAIS GAY DO SERVER?")
    .setURL("https://imgur.com/IAyKswP")
    .setDescription("É O GARIBALDIIIIIIIIIIII")
    .addFields([
      {
        name: "Você é o top nº do server",
        value: 1,
        inline: true,
      },
      {
        name: "ESSE É FRANGO BOY",
        value: "Hmmmm",
        inline: true,
      },
    ])
    .setFooter(
      "Cu do Garibaldi 2020. Todos os direitos reservados",)

  msg.channel.send({ embed });
    };

module.exports = {
  name: "garibaldi",
  help: "Garibaldi",
  execute,
};