let handler = async(m, { conn, command }) => {

let text = `*🕷️ EL OWNER @${m.sender.split`@`[0]} HA SOLICITADO SU PRESENCIA , FAVOR DE DIRIGIRSE A SU CHAT LO MAS ANTES POSIBLE*

*𝙎𝙩𝙖𝙛𝙛 𝙋𝙧𝙤𝙮𝙚𝙘𝙩𝙤-𝙈𝘿 🕷️*`
m.reply('*⚠️ ENVIANDO MENSAJE A TODOS LOS OWNERS*')
for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                        let data = (await conn.onWhatsApp(jid))[0] || {}
                        if (data.exists)
                        conn.sendPayment(data.jid, '999999999', text, m)
                        
                           // conn.reply(data.jid, text, m, { mentions: [m.sender] })
                    }

}
handler.tags = ['owner']
handler.command = handler.help =['reunionstaff']
handler.rowner = true

export default handler
