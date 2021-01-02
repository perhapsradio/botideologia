const execute = (bot,msg,args) => {
    const queue = bot.queues.get(msg.guild.id);
    if(!queue) {
        return msg.channel.send('Não existe nenhuma música pausada')
    }
    queue.dispatcher.resume();
        return msg.channel.send('Música despausada')
};

module.exports = {
    name:"unpause",
    help:"Despausa a música",
    execute,
};