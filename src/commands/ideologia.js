const execute = (bot,msg,args) => {
    return msg.channel.send('Qualquer desrespeito com o próximo, em que este tenha se sentido ofendido não será tolerado')
    };

module.exports = {
    name: "ideologia",
    help:"Mantenha o respeito aí amigão",
    execute,
}