let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text }) => {
    if (!text) throw 'Masukkan jumlah Uangnya tolol'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag salah satu lah anj'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (isNaN(txt)) throw 'Hanya angka'
    let poin = parseInt(txt)
    let money = poin
    let users = global.db.data.users
    if (users[m.sender].owner == true) {
    if (money < 99999999999) throw 'Minimal 99999999999'
    if (money > 99999999999) {
    users[who].money += poin

    conn.reply(m.chat, `Selamat @${who.split`@`[0]}. Kamu mendapatkan +${poin} Money!`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    }) }}
    else {
    if (money > 99999999999) return m.reply(`Maks 99999999999`) 
    if (money < 99999999999) return m.reply('Minimal 99999999999') 
    if (money < 999999999999) {
    users[who].money += poin

    conn.reply(m.chat, `Selamat @${who.split`@`[0]}. Kamu mendapatkan +${poin} Money!`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    }) }}
   
}

handler.help = ['addmoney @user <amount>']
handler.tags = ['owner']
handler.command = /^addmoney$/
handler.owner = true
handler.premium = false
handler.police = false

module.exports = handler