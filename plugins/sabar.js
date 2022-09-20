let fs = require('fs')
let handler = async (m) => {
let helloaine = fs.readFileSync('./mp3/sabar.opus')
conn.sendFile(m.chat, helloaine, '', '', m, true)
}

handler.customPrefix = /^(anjir saya di culik|limit ku habis|xp ku habis|exp ku habis|pengen beli tapi gak ada money)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = true
handler.private = false

module.exports = handler