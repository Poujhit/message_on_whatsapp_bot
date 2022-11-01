import * as dotenv from 'dotenv';

import { Telegraf } from 'telegraf';

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN as string);

bot.start((ctx) => ctx.reply('Welcome lol'));
