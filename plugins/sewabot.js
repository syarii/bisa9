let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let pepe = 'https://telegra.ph/file/2e2eb7d093fec08fd00d4.jpg'
  let baper = await fetch(pepe).then(a => a.buffer())

  let aine = '6288227606701@s.whatsapp.net'
  let a = await conn.profilePictureUrl(conn.user.jid, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  let b = await conn.profilePictureUrl(owner[0]+'@s.whatsapp.net', 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  let c = pickRandom([a, b])
  let d = await fetch(c).then(a => a.buffer())
  let prepare = await require('@adiwajshing/baileys').generateWAMessageFromContent(m.key.remoteJid,{listMessage:{
  title: `${await conn.getName(conn.user.jid)}`,
  description: ` *• SEWA BOT & UP TO PREMIUM •*
        
1. Grup / 20 Hari
Rp. 10.000 Dana
Rp. 10.000 Pulsa
Rp. 10.000 gopay

2. Grup / 30 hari
Rp. 15.000 Dana
Rp. 15.000 pulsa
Rp. 15.000 gopay

3. Grup / 40 hari 
Rp. 25.000 Dana
Rp. 25.000 pulsa
Rp. 25.000 gopay

4. Grup permanen
Rp. 55.000 Dana
Rp. 55.000 pulsa
Rp. 55.000 gopay

5. Premium / 20 Hari
Rp. 10.000 Dana
Rp. 10.000 Pulsa
Rp. 10.000 gopay

6. premim / 30 hari
Rp. 15.000 Dana
Rp. 15.000 Pulsa
Rp. 15.000 gopay

7. premium / 40 hari
Rp. 25.000 Dana
Rp. 25.000 Pulsa
Rp. 25.000 gopay

8. premium permanen
Rp. 55.000 Dana
Rp. 55.000 pulsa
Rp. 55.000 gopay

9. Premium + Grup / 30 Hari
Rp. 75.000 Dana
Rp. 75.000 Pulsa
Rp. 75.000 gopay

10. Premium + Grup / permanen 
Rp. 80.000 Dana
Rp. 80.000 Pulsa
Rp. 80.000 gopay

wa.me/${owner[0]}
*Bukan Bot!!!*
*Owner ${conn.user.name}*
`,
  buttonText: 'Harga Sesuai Pasaran',
  listType: 2,
  productListInfo: {
  productSections: [{
  title:'Klik untuk order',
  products:[{productId:'7487741964584083'}]}],
  headerImage: { productId: '7487741964584083',
  jpegThumbnail: baper },
  businessOwnerJid: `6289654360447@s.whatsapp.net`
  },
  footerText:'https://instagram.com/Botzka13',
  }},{})
  conn.relayMessage(prepare.key.remoteJid,prepare.message,{messageId:prepare.key.id})
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)

}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa)$/i

module.exports = handler

function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
    }
