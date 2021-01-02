

const execute = (bot,msg,args) => {
    const queue = bot.queues.get(msg.guild.id);
    if(!queue) {
        return msg.channel.send('Não existe nenhuma música sendo tocada')
        }         
    queue.songs = [];
    bot.queues.set(msg.guild.id, queue);
    queue.dispatcher.end();
        return msg.channel.send('Stopped')
        
    };

module.exports = {
    name: "stop",
    help:"Para a reprodução da música",
    execute,
};