import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]
    
if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(imagen1, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '𝙋𝙍𝙊𝙔𝙀𝘾𝙏𝙊 𝙓 🕷️', body: '𝙋𝙍𝙊𝙔𝙀𝘾𝙏𝙊 🕷️', sourceUrl: md, thumbnail: imagen2}}})}
    
return !0 }
export default handler
