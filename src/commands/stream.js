const execute = (bot,msg,args) => {
    return msg.channel.send('Você pode ver os streamers do nosso servidor e canais no canal **_#divulgação_** e também divulgar a sua, mandando o link no chat. Também pode divulgar vídeos, como links do Youtube e mais. Sem spam, por gentileza, a comunidade agradece')
    };

module.exports = {
    name: "stream",
    help:"A respeito de lives, vídeos e sua divulgação",
    execute,
}