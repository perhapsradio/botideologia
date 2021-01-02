const execute = (bot,msg,args) => {
    return msg.channel.send('Sou um bot amador criado para atender certas necessidades do servidor')
    };

module.exports = {
    name: "bot",
    help:"A respeito do bot Ideologia",
    execute,
}