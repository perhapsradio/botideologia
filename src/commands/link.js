const execute = (bot,msg,args) => {
    return msg.channel.send('Convide pessoas para o nosso servidor, aí está o link: https://discord.gg/nEJea9G2Hv')
    };

module.exports = {
    name: "link",
    help:"Link de convite para o servidor",
    execute,
}