import * as dotenv from 'dotenv';

import { Context, Telegraf } from 'telegraf';
import { Update } from 'typegram';

dotenv.config();

const bot: Telegraf<Context<Update>> = new Telegraf(
  process.env.BOT_TOKEN as string
);

bot.start((ctx) => {
  console.log('here');
  ctx.reply(
    'Welcome to this cool bot. Send a number to this bot and this bot will send you the whatsapp link to open that number in whatsapp. Currently works with indian numbers only'
  );
});

bot.on('text', async (ctx) => {
  const letters = /^[A-Za-z]+$/;
  if (ctx.message.text.match(letters)) {
    console.log('HERE ON TEXT');
    // Using context shortcut
    await ctx.reply(`ENTER ONLY PHONE NUMBERS.....😕`);
  } else {
    console.log('HERE ON NUMBER');
    // Using context shortcut
    await ctx.reply(`https://wa.me/91${ctx.message.text}`);
  }
});

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
