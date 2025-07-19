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


// report.js (Ejemplo visual - no funcional)

// Este archivo representa la estructura del modelo de reportes.
// El contenido ha sido protegido. Contacta para acceso completo.

const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  guildId: String,
  reportId: String,
  reportedUserId: String,
  reason: String,
  evidence: String,
  reporterId: String,
  nombreReportador: String,
  tipo: String
});

module.exports = mongoose.model('Report', reportSchema);


// utils/hasCommandPermission.js (Ejemplo visual)

// Esta función simula la verificación de permisos para un comando.
// La lógica completa ha sido protegida.

module.exports = async function hasCommandPermission(member) {
  // Aquí iría la lógica real para verificar permisos de roles.
  // Esta función está protegida en la versión completa.
  return true; // Permiso simulado
};
