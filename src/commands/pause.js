const execute = (bot,msg,args) => {
    const queue = bot.queues.get(msg.guild.id);
    if(!queue) {
        return msg.channel.send('Não existe nenhuma música sendo reproduzida')
    }
    queue.dispatcher.pause();
        return msg.channel.send('Música pausada')
};

module.exports = {
    name: "pause",
    help:"Pause a reprodrução da música atual",
    execute,
};