//import MessageType from '@adiwajshing/baileys'
let MessageType = (await import(global.baileys)).default
let pajak = 0 
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${ag}𝘿𝙀𝘽𝙀 𝘿𝙀 𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼𝙍 𝘼𝙇 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 *@tag*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw `${ag}𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙇𝘼 𝘾𝘼𝙉𝙏𝙄𝘿𝘼𝘿 𝘿𝙀 𝘿𝙄𝘼𝙈𝘼𝙉𝙏𝙀𝙎`
if (isNaN(txt)) throw `${mg}𝙎𝙄𝙉 𝙎𝙄𝙈𝘽𝙊𝙇𝙊𝙎, 𝙎𝙊𝙇𝙊 𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙉𝙐𝙈𝙀𝙍𝙊𝙎`
let proyectocoins = parseInt(txt)
let money = proyectocoins
let pjk = Math.ceil(proyectocoins * pajak)
money -= pjk
if (money < 1) throw `${mg}𝙀𝙇 𝙉𝙐𝙈𝙀𝙍𝙊 𝙈𝙄𝙉𝙄𝙈𝙊 𝘿𝙀 𝙋𝙍𝙊𝙔𝙀𝘾𝙏𝙊𝘾𝙊𝙄𝙉𝙎 𝙀𝙎 *1*`
let users = global.db.data.users
users[who].money -= proyectocoins
m.reply(`╭━━━[ 𝙋𝙍𝙊𝙔𝙀𝘾𝙏𝙊𝘾𝙊𝙄𝙉𝙎 🕷️ ]━━━⬣\n┃\n┃ღ *PARA :*\n┃ღ *${text}*\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ღ *SE ELIMINÓ*\n┃ღ *${proyectocoins} ProyectoCoin(s)* 🕷️\n┃\n╰━━━━━━━━━━━━━━⬣`)}

handler.help = ['addgb <@user>']
handler.tags = ['proyectocoins']
handler.command = ['eliminarcoins', 'eliminarproyecto', 'eliminarcoins', 'quitarproyectocoins', 'quitarproyecto', 'quitarcoins', 'delproyectocoins', 'delproyecto', 'delcoins'] 
handler.group = true
handler.rowner = true
export default handler 
