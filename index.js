const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.TOKEN_BOT)

bot.start((ctx) => {
    ctx.reply('Bienvenido')
})

bot.launch()