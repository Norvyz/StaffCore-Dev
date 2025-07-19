// index.js (Versión demo - estructura visual)

// Este archivo es solo un ejemplo visual de la estructura del bot StaffCore.
// El código real está protegido y no se encuentra en este repositorio.

require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log(`StaffCore listo como ${client.user.tag}`);
});

// Comandos y eventos han sido protegidos
// Para obtener acceso, contáctanos a: norveymarquez01@gmail.com

client.login(process.env.TOKEN);
