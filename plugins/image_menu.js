let fs = require('fs')
let handler = async (m) => {
let helloaine = fs.readFileSync('./image/azz.jpg')
conn.sendFile(m.chat, helloaine, '', '', m, true)
}

handler.customPrefix = /^(menu|.menu)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = true
handler.private = false

module.exports = handler