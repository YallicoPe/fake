const handler = async (m, {conn}) => {
  m.reply(global.Vs15);
};
handler.command = /^(Vs15)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.Vs15 = `
╭━━〔  *VS VS VS* 〕━━⬣
┃ *👤 Organiza :* 
┃ *⏰ Hora :* 15 🇲🇽 | 16 🇨🇴
┃ *👥 Genero :* 
┃ *┈┈┈┈┈┈┈┈*
┃ ღ 
┃ ღ 
┃ ღ 
┃ ღ 
┃
╰━━〔 *VS VS VS*  〕━━⬣
`;
