const fs = require('fs')

global.botname = "Cosmic"
global.version = "1.0 Pro"
global.packname = 'Ryuzaki'
global.owner = "6285926523811"
global.footer = "Ryuzaki"
global.idch = "120363402682879346@newsletter"
global.packname = "Ryuzaki"
global.welcome = false
global.autoread = false
global.anticall = false
global.autoviewsw = true
global.lastPromo = global.lastPromo || {}
global.autoRespon = global.autoRespon || false
global.swreact = ['👍', '❤️', '🔥', '😂', '😮', '😹', '👏', '🗿','😎','🤪']; // Tambahkan ini di atas sebelum event

//=========[ Settings Thumb V1 ]===============//
global.thumb = "https://files.catbox.moe/t6he9a.mp4"
//==========================================//
global.mess = {
    done: '*Done Gak Bang?\nDone Dong*', 
    owner: '*Lu Siapa? Owner Gw Aja Bukan Sok Ngatur 😹*',
    private: '*Kelaz Anjg, Ini Cuma Private*',
    group: '*Lahk?\nFitur Ini Khusus Group Cuy*',
    botAdmin: '*Aku Blom Admin Cinta 😡*',
    admin: '*Lu Siapa? Minimal Mandi, eh Admin 🗿*',
    wait: '*`[ ◇ ] : 𝚛𝚎𝚚𝚞𝚞𝚎𝚜𝚝 𝚙𝚛𝚘𝚌𝚎𝚜𝚎𝚍𝚍..`*',
    success: '*Success Cuki*',
    prem: '*Kelaz, Lu Bukan Premium Bre*',
}
//==================================//


let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
