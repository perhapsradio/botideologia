const execute = (bot,msg,args) => {
    const queue = bot.queues.get(msg.guild.id);
    if(!queue) {
        return msg.channel.send('Não existe nenhuma música sendo tocada no momento')
    }
    const volume = Number(args.join(" "));
    if(isNaN(volume) || volume < 0 || volume > 10) {
        return msg.channel.send('O volume deve ser um valor de 0 a 10');
    }
    queue.dispatcher.setVolume(volume / 10);
    queue.volume = volume;
    bot.queues.set(msg.guild.id, queue);
};

module.exports = {
    name: "vol",
    help:"Ajusta o volume padrão do bot",
    execute,
};