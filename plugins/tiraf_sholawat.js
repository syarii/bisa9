let fs = require('fs')
let handler = async (m) => {
let helloaine = fs.readFileSync('./mp3/tiraf.sholawat.opus')
conn.sendFile(m.chat, helloaine, '', '', m, true)
}

handler.customPrefix = /^(astaga|astaghfirullah)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = true
handler.private = false

module.exports = handler