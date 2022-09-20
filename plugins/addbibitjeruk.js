let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text }) => {
  if (!text) throw 'Masukkan jumlahnya tolol'
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag salah satu lah anj'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (isNaN(txt)) throw 'Hanya angka'
  let lvl = parseInt(txt)
  let level = lvl
  if (lvl >= 9999) throw `Anjir lu mau bot overload? `
  else if (lvl < 999) {
  let users = global.db.data.users
  users[who].level += lvl
  
  conn.reply(m.chat, `Selamat @${who.split`@`[0]}. Kamu mendapatkan +${lvl} bibit jeruk!`, m, { mentions: [who] }, {
        contextInfo: {
            mentionedJid: [who]
        }
    }) }
}
handler.help = ['addbibitjeruk @user <amount>']
handler.tags = ['owner']
handler.command = /^addbibitjeruk$/
handler.owner = true
handler.premium = false
handler.police = false

module.exports = handler