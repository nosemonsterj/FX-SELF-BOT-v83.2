// BY FX-TEAM
//JANGAN DI JUAL OM
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES, 
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spaw n, exec, execSync } = require("child_process")
const fs = require("fs")

const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const tik = require('tiktok-scraper-without-watermark')
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const Fb = require('fb-video-downloader');
const twitterGetUrl = require("twitter-url-direct")
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const encodeUrl = require('encodeurl')
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const hx = require('hxz-api')

const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const {convertSticker} = require("./lib/swm.js")
const { isFiltered, addFilter } = require('./lib/antispam')
const { tiktokDown } = require("./lib/tiktok")
const { mediafireDl} = require('./lib/mediafire.js')
const { downloadig, igstory } = require("./lib/instadl.js")




const jam = moment().tz('America/Mexico_City').format("HH:mm:ss")
const { webp2mp4File} = require('./lib/webp2mp4')
const time = moment().tz('America/Mexico_City').format("HH:mm:ss")
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const { uploadimg } = require('./lib/uploadimg')
const simple = require("./lib/simple.js");
const { y2mateA, y2mateV } = require('./lib/y2mate')


const jadibot = new WAConnection()


//Archivos JSON
const _user = JSON.parse(fs.readFileSync('./database/registered.json'))
const _limit = JSON.parse(fs.readFileSync('./database/limit.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/level.json'))
const event = JSON.parse(fs.readFileSync('./database/event.json'))
const afk = JSON.parse(fs.readFileSync('./database/off.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const image = JSON.parse(fs.readFileSync('./database/img.json'))
const setting = JSON.parse(fs.readFileSync('./database/setting.json'))
const antivo = JSON.parse(fs.readFileSync('./database/antivo.json'))
const autostick = JSON.parse(fs.readFileSync('./database/autostik.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const antilinkmax = JSON.parse(fs.readFileSync('./database/antilinkmax.json'))
const antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
const scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const antifake = JSON.parse(fs.readFileSync('./database/antifake.json'))
 
const nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
const uang = JSON.parse(fs.readFileSync('./database/uang.json'))
const settingan = JSON.parse(fs.readFileSync('./database/set.json'))
const { ind } = require('./language')

public = false


 


offline = false
baterai = {
battery: "" || "Desconectado",
isCharge: "" || false
}
targetpc = '529984646983'
ownerNumber = ["5219984646983@s.whatsapp.net"]
fake = 'SELFBOT WHATSAPP'
numbernye = '0'
waktu = '-'
fakeimg = fs.readFileSync('./stik/fake.jpeg')
dfrply = fs.readFileSync('./stik/fake.jpeg')
alasan = '-'
ky_ttt = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
readGc = true 
readPc = false 


// COMMAND STICKER ADD'
const addCmd = (id, command) => {
const obj = { id: id, chats: command }
scommand.push(obj)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
let position = null
Object.keys(scommand).forEach((i) => {
if (scommand[i].id === id) {
position = i
}
})
if (position !== null) {
return position
}
}

const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}

const checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}
const {
	limitawal,
	memberlimit,
	cr,
	BotPrefix,
	author,
	pack
} = settingan

const {
	getLevelingXp,
	getLevelingLevel,
	getLevelingId,
	addLevelingXp,
	addLevelingLevel,
	addLevelingId
} = require('./lib/level.js')


const reply2 = (teks) => {
            FxBot.sendMessage(from, teks, text, {quoted: mek, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
        }

const {
	getRegisteredRandomId,
	addRegisteredUser,    
	createSerial,
	checkRegisteredUser,
    bannadd,
    checkban
    
} = require('./lib/register.js')

               const addRegisteredUser2 = (userid, sender) => {
            const obj = { id: userid, name: sender }
            user2.push(sender)		
            fs.writeFileSync('./database/json/user2.json', JSON.stringify(_registered))
        } 			           

/*[-> ATM & Limit <-]*/
const {
	addATM,
	addKoinUser,
	checkATMuser,
	bayarLimit,
	confirmATM,
	addwaifu,
	limitAdd
} = require('./lib/limitatm.js')
//=================================================//

	async function starts() {
	const FxBot = new WAConnection()
	FxBot.logger.level = 'warn'
	console.log(banner.string)
	
	FxBot.on('qr', () => {
	console.log(color('[','white'), color('!','red'), color(']','white'), color('Escanea el código QR de arriba'))
	})
	fs.existsSync('./FxBot_Connection.json') && FxBot.loadAuthInfo('./FxBot_Connection.json')
	FxBot.on('connecting', () => {
	start('2', 'Conectando...')
	})
	FxBot.on('open', () => {
	success('2', `Conectado\n\n\nBot WhatsApp Con NodeJS hecho por Felixcrack\n\n\nEscribe .public para iniciar el bot`)
	})
	FxBot.sendMessage(`12607825660@s.whatsapp.net`, `─────「 *CONECTADO* 」─────\n\n▢ Conectado exitosamente con su WhatsApp, para iniciar el bot, escribe .public\n\n▢ Este bot es creado por FxTeam\n\n▢ Canal Oficial de YT : https://youtube.com/c/Felixcrack409\n\n▢ Grupo de soporte por si tienes alguna duda : https://chat.whatsapp.com/LOHYHhBJRjG7ruk67QkExj\n\n▢ Recomendaciones para que el bot no se apagué\n\n▢ Quítale la optimización de la batería al WhatsApp donde tengas al bot\n\n▢ Quítale la optimización de la batería a Termux\n\n▢ Copyright Felixcrack 409 ©\n\n─────「 *FXBOT* 」─────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer Fx-Bot",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./stik/FxBot.jpeg'),sourceUrl:"https://wa.me/529984646983?text=© FxBot Team"}}})
	await FxBot.connect({timeoutMs: 30*1000})
	 
    fs.writeFileSync('./FxBot_Connection.json', JSON.stringify(FxBot.base64EncodedAuthInfo(), null, '\t'))



//-------------𝗟𝗟𝗔𝗠𝗔𝗗𝗔 𝗔𝗨𝗧𝗢 𝗕𝗟𝗢𝗤𝗨𝗘𝗢 -------------
const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))}
FxBot.on('CB:action,,call', async json => {
const callerId = json[2][0][1].from;
console.log('Llamada recibida de '+ callerId)
FxBot.sendMessage(callerId, '▢ Rompiste una de mis reglas *no me llame*\n\n┌───⊷ *BLOQUEADO* ⊶\n├• *Lo siento* serás bloqueado\n└──────────────\n\n▢ Si es un error entra aquí para el desbloqueo\n', MessageType.text)
await sleep(4000)
await FxBot.blockUser(callerId, 'add') // Usuario bloqueado
})


      FxBot.on("group-participants-update", async (anu) => {
    try {
    	if(antifake.includes(anu.jid)) {
const mdata = await FxBot.groupMetadata(anu.jid)
if (anu.action == 'add'){
num = anu.participants[0]
if(!num.split('@')[0].startsWith(00)) {

setTimeout(async function () {
if (num.startsWith('1')) return FxBot.groupRemove(mdata.id, [num])
if (num.startsWith('994')) return FxBot.groupRemove(mdata.id, [num])
if (num.startsWith('48')) return FxBot.groupRemove(mdata.id, [num])
if (num.startsWith('91')) return FxBot.groupRemove(mdata.id, [num])
if (num.startsWith('62')) return FxBot.groupRemove(mdata.id, [num])
if (num.startsWith('60')) return FxBot.groupRemove(mdata.id, [num])
 if (num.startsWith('66')) return FxBot.groupRemove(mdata.id, [num])
 if (num.startsWith('371')) return FxBot.groupRemove(mdata.id, [num])
 if (num.startsWith('380')) return FxBot.groupRemove(mdata.id, [num])
}, )
}
}
}


const thisfrom = await FxBot.groupMetadata(anu.jid)

if (anu.action == 'add'){
bbykev = anu.participants[0]
const fakelord =  { "key" : {"remoteJid": "299277777@g.us","fromMe": false,"participant": '0@s.whatsapp.net'}, message: { "stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/AipZmrw402_detgfViyjnKOg4hTUhpCTjyyJwHFYj8dw.enc", "fileSha256": "gUCkLdDm6fVT7oGr4Wtw1E4IcA1c2BNwX/IsNx2ox6U=", "fileEncSha256": "il2fkvb3+y3tKHfsWJVNnvz7CBdLhZQoCDdjGlbU1CI=", "mediaKey": "5aKnfk61dIoUlhBjvPCFYl3U9Wzq48thKjK/yZlXsrQ=", "mimetype": "image/webp", "height": 64, "width": 64, "directPath": "/v/t62.15575-24/12097272_1193895144391295_8973688483514349023_n.enc?ccb=11-4&oh=5a9d7147627a8355569f1a641b9ebee3&oe=60C65E73", "fileLength": "44978", "mediaKeyTimestamp":"1621218472" }}}
if(bbykev.startsWith('5219984646983')) return FxBot.sendMessage(thisfrom.id, 'Ui Entro El Creador De Este Bot', MessageType.text, {quoted: fakelord, contextInfo: {forwardingScore: 9999, isForwarded: true}})
}


if (!welkom.includes(anu.jid)) return

const mdata = await FxBot.groupMetadata(anu.jid)
      groupMet = await FxBot.groupMetadata(anu.jid)
      groupMembers = groupMet.participants
      groupAdmins = getGroupAdmins(groupMembers)
      num = anu.participants[0]
      
      ini_user = FxBot.contacts[num]
      namaewa = ini_user.notify
      member = mdata.participants.length
      console.log(anu)
      memeg = mdata.participants.length
      let v = FxBot.contacts[num] || { notify: num.replace(/@.+/, "") }
      anu_user = v.vname || v.notify || num.split("@")[0]
       time_wel = moment.tz("America/Mexico_City").format("HH:mm")
        let w = FxBot.contacts[num] || { notify: num.replace(/@.+/, "") }
       
        out = `Adios Pedazo De Aborto 🥺👍🏿 Nunca Te Quisimos 👋🏻`
 try {
        pp_user = await FxBot.getProfilePicture(num)
      } catch (e) {
        pp_user =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
      }
      try {
        pp_grup = await FxBot.getProfilePicture(anu.jid)
      } catch (e) {
        pp_grup =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
      }
        shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${pp_user}`)
        
     
 if (anu.action == 'add') {
  
        buff = await getBuffer(
          `http://hadi-api.herokuapp.com/api/card/welcome?nama=${encodeUrl(namaewa)}&descriminator=${
            groupMembers.length
          }&memcount=${memeg}&gcname=${encodeURI(
            mdata.subject
          )}&pp=${pp_user}&bg=https://i.postimg.cc/rFkw8MpX/IMG-20210807-151325.jpg`
        )
        buttons = [
          { buttonId: `sjJwkLwbWk`, buttonText: { displayText: "¡Bienvenido al grupo!" }, type: 1 },
        ]
        imageMsg = (
          await FxBot.prepareMessageMedia(buff, "imageMessage", {
            thumbnail: buff,
          })
        ).imageMessage
        buttonsMessage = {
          contentText: `🪀 「 Bienvenid@ 」 🪀\n\n¡Hola @${anu_user}!\n\n ¿Como estas?\n\nYo soy FxBot y te doy la bienvenida a : ${mdata.subject}\n\n🪀 Usuarios: ${memeg}\n\n🪀 Administradores: ${groupAdmins.length}\n\n🪀 Reglas Del Grupo: \n\n${mdata.desc}`,
           
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        }
        prep = await FxBot.prepareMessageFromContent(
          mdata.id,
          { buttonsMessage },
          {}
        )
        FxBot.relayWAMessage(prep)
      }
     else if (anu.action == 'remove') {
        
        buff = await getBuffer(
          `http://hadi-api.herokuapp.com/api/card/goodbye?nama=${encodeUrl(namaewa)}&descriminator=${
            groupMembers.length
          }&memcount=${memeg}&gcname=${encodeURI(
            mdata.subject
          )}&pp=${pp_user}&bg=https://i.postimg.cc/rFkw8MpX/IMG-20210807-151325.jpg`
        )
        buttons = [
          { buttonId: `hHHYGFRH`, buttonText: { displayText: "Bye aborto 😳👍🏻" }, type: 1 },
        ]
        imageMsg = (
          await FxBot.prepareMessageMedia(buff, "imageMessage", {
            thumbnail: buff,
          })
        ).imageMessage
        buttonsMessage = {
          contentText: `${out}`,
          footerText: "Bye aborto 🥺👍🏿",
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        }
        prep = await FxBot.prepareMessageFromContent(
          mdata.id,
          { buttonsMessage },
          {}
        )
        FxBot.relayWAMessage(prep)
      
  
  }
  
  
  
  
  
     else if (anu.action == 'promote' && !num.includes(FxBot.user.jid)) {
            img = await getBuffer(`http://hadi-api.herokuapp.com/api/card/promote?nama=${encodeUrl(namaewa)}&member=${member}&pesan=Nuevo Admin Del Grupo&pp=${shortpc.data}&bg=https://i.postimg.cc/rFkw8MpX/IMG-20210807-151325.jpg`)
            teks = `◪ PROMOTE DETECTADO\n\n├─ Número: ${num.replace('@s.whatsapp.net', '')}\n├─ Mensaje: ¡Felicitaciones por ser un administrador de grupo!\n└─ ❏ @${num.split('@')[0]}`
            FxBot.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]}})
         } else if (anu.action == 'demote' && !num.includes(FxBot.user.jid)) {
            img = await getBuffer(`http://hadi-api.herokuapp.com/api/card/demote?nama=${encodeUrl(namaewa)}&member=${member}&pesan=Un Admin Menos&pp=${shortpc.data}&bg=https://i.postimg.cc/rFkw8MpX/IMG-20210807-151325.jpg`)
            teks = `◪ DEMOTE DETECTADO\n\n\n├─ Número: ${num.replace('@s.whatsapp.net', '')}\n├─ Mensaje: Lo siento ya no eres admin 💩\n└─ ❏ @${num.split('@')[0]}`
            FxBot.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]}})
         }
     } catch (e) {
         console.log('Error : %s', color(e, 'red'))
      }
})
  
  const blocked = []
FxBot.on('CB:Blocklist', json => {
      if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
/////***𝙁𝙐𝙉𝙏𝙄𝙊𝙉  𝙂𝙍𝙐𝙋***\\\\\
FxBot.on('group-update', async(chat) => {
var donde = chat.jid
var group = await FxBot.groupMetadata(donde)
if (!chat.desc == '') {
var tag = chat.descOwner.split('@')[0] + '@s.whatsapp.net'
var mensajeDesc = `*🐤 「 Descripción Del Grupo Cambiada 」 🍟*\n\nLa descripción del grupo acaba de ser cambiada por\n\n@${chat.descOwner.split('@')[0]}*\n\n•Nueva descripción:\n\n${chat.desc}`
FxBot.sendMessage(group.id, mensajeDesc, MessageType.text)
}
if (chat.announce == 'false'){
teks = `「 *Grupo Abierto* 」\n\n_El grupo ha sido abierto por el administrador_\n\n_Ahora todos los miembros pueden enviar mensajes._`
FxBot.sendMessage(group.id, teks, MessageType.text)
}
if(chat.announce == 'true'){
teks = `「 *Grupo cerrado* 」\n\n_El administrador ha cerrado el grupo_\n\n_Ahora solo los administradores pueden enviar mensajes_`
FxBot.sendMessage(group.id, teks, MessageType.text)
 }
if(chat.restrict == 'false'){
teks = `「 *Configuración Del Grupo Cambiada 」\n\nSe ha abierto la opción Editar información del grupo para todos los miembros.\n\nAhora todos los miembros pueden editar la información de este grupo.`
FxBot.sendMessage(group.id, teks, MessageType.text)
}
if(chat.restrict == 'true'){
teks = `「 *Configuración Del Grupo Cambiada 」\n\nSe ha cerrado la opción de Editar la información del grupo para los miembros.\n\nAhora solo el administrador del grupo puede editar la información de este grupo`
FxBot.sendMessage(group.id, teks, MessageType.text)
}
})

	    FxBot.on('chat-update', async (mek) => {
	    try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
        if (!mek.message) return
        if (mek.key && mek.key.remoteJid == 'status@broadcast') return
        global.blocked
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        global.prefix        
        const content = JSON.stringify(mek.message)
        const from = mek.key.remoteJid
        const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
        const type = Object.keys(mek.message)[0]        
        var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
        const messagesC = pes.slice(0).trim()
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== undefined) ? (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')).startsWith(prefix) ? getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) : '') : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const isGroup = from.endsWith('@g.us')
		const meNumber = FxBot.user.jid.split("@")[0]
		const botNumber = FxBot.user.jid
		const sender = isGroup ? mek.participant : mek.key.remoteJid
		const senderme = mek.participant
		const senderNumber = sender.split("@")[0]
		button = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
		const isOwner = ownerNumber.includes(sender)
		const totalchat = await FxBot.chats.all()
		const groupMetadata = isGroup ? await FxBot.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
        const isAutoSt = isGroup ? autostick.includes(from) : false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const conts = mek.key.fromMe ? FxBot.user.jid : FxBot.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? FxBot.user.name : conts.notify || conts.vname || conts.name || '-'
        const isWelkom = isGroup ? welkom.includes(from) : false		
         
        const isBanned = ban.includes(sender)
        const itsMe = senderNumber == botNumber
        const isLevelingOn = isGroup ? _leveling.includes(from) : false						
        const isEventon = isGroup ? event.includes(from) : false
        const isAntiFake = isGroup ? antifake.includes(from) : false
        const AntiVirtex = isGroup ? antivirtex.includes(from) : false
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const isAntiLinkMax = isGroup ? antilinkmax.includes(from) : false
        const isNsfw = isGroup ? nsfw.includes(from) : false
        FxBot.on("CB:action,,battery", json => {
        const battery = json[2][0][1].value
	    const persenbat = parseInt(battery)
	    baterai.battery = `${persenbat}%`
	    baterai.isCharge = json[2][0][1].live
	    })
	    const isVerify = _user.includes(sender)
	    const is = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
	    const m = simple.smsg(FxBot, mek);
	    const grupinv = (teks) => {
        	grup = FxBot.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '6288213840883-1616169743@g.us', "inviteCode": 'https://chat.whatsapp.com/Dgt6JhzTvlmEor8Zz23fHx', "groupName": `${NamaBot}`, "footerText": "*_© Dcode Denpa_*", "jpegThumbnail": fakeperfil, "caption": teks}}, {quoted:finv})
            FxBot.relayWAMessage(grup)
        }
		idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
	    }
	    const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
		try {
		pporang = await FxBot.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		const fakeperfil = await getBuffer(pporang)
		
        //MESS
		mess = {
			wait: '「 ❗ 」 En Proceso, Aguarda!',
			success: '「 ❗ 」 Uff Comando Con Exito',
			nsfwoff: '「 ❗ 」La Funcion De Nsfw No Está Activa!',
			wrongFormat: '「 ❗ 」 Wey No Seas Pendejo Escribe Bien El Formato',
			waitmusic: '「 ❗ 」 Espera! Estoy buscando tu musica\nEn cuánto la encuentre la envío!!',
			waitimg: '「 ❗ 」 Espera! Estoy creando tu imagen!',
			nsfwoff: '「 ❗ 」La Funcion De Nsfw No Está Activa!',
			join: '「 ❗ 」La Funcion De Join No Está Activa!',
					musica: '「 ❗ 」Espera un momento, estoy buscando tu canción, recuerda suscribirte a mi canal de YouTube',
			imageoff: '「 ❗ 」No Puedo Enviar Fotos Mientras No Esta Activa La Función!',
			error: {
				stick: '「 ❗ 」F no se pudo convertir:/',
				errostick: '❌Error al crear el sticker❌',
				Iv: '「 ❗ 」Link Invalido Weon'
			},
			only: {
				group: '「 ❗ 」Este Comando Solo Puede Ser Usado En Grupos',
				admin: '「 ❗ 」No Eres Admin 💩',
				Badmin: '「 ❗ 」 Necesito Ser Admin Para Este Comando'
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            FxBot.sendMessage(from, teks, text, {quoted:mek})
        }

        const sendMess = (hehe, teks) => {
            FxBot.sendMessage(hehe, teks, text, {sendEphemeral: true})
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? FxBot.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : FxBot.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        const costum = (pesan, tipe, target, target2) => {
                 FxBot.sendMessage(from, pesan, tipe, {quoted: {key: {fromMe: false, participant: `${target}`, ...(from ? {remoteJid: from}: {})}, message: {conversation: `${target2}` }}})
        }
        /*[-- funcion dinero --]*/
 	           if (isGroupAdmins) {
 	           const checkATM = checkATMuser(sender)	     
	        }
	

        //WAKTU
			var ase = new Date();
                        var horas = ase.getHours();
                         switch(horas){
                case 0:  horas = '¡Buenas Noches! 🌚'
                case 1:  horas = '¡Buenas Noches! 🌚'
                case 2:  horas = '¡Buenas Noches! 🌚'
                case 3:  horas = '¡Buenas Noches! 🌚'
                case 4:  horas = '¡Buenas Noches! 🌚'
                case 5:  horas = '¡Buenos Días!'
                case 6:  horas = '¡Buenos Días!'
                case 7:  horas = '¡Buenos Días!'
                case 8:  horas = '¡Buenos Días!'
                case 9:  horas = '¡Buenos Días!'
                case 10:  horas = '¡Buenos Días!'
                case 11:  horas = '¡Buenas Tardes!'
                case 12:  horas = 'Apariencia'
                case 13:  horas = '¡Buenas Tardes! 🌇'
                case 14:  horas = '¡Buenas Tardes! 🌇'
                case 15:  horas = '¡Buenas Tardes! 🌇'
                case 16:  horas = '¡Buenas Tardes! 🌇'
                case 17:  horas = '¡Buenas Noches! 🌚'
                case 18:  horas = '¡Buenas Noches! 🌚'
                case 19:  horas = '¡Que lindo atardecer! 🌇'
                case 20:  horas = '¡Buenas Noches! 🌚'
                case 21:  horas = '¡Buenas Noches! 🌚'
                case 22:  horas = '¡Buenas Noches! 🌚'
                case 23:  horas = '¡Buenas Noches! 🌚'
            }
		var showGreet = "" + horas;
            const jmn = moment.tz('America/Mexico_City').format('HH:mm:ss')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 Enero 2021').getTime()
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })
        //FAKEH
const fakekontak = (teks) => {
FxBot.sendMessage(from, teks, MessageType.text, {
quoted: {
key: {
fromMe: false,
 participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {})
 },
message: {
 'contactMessage': {
 'displayName': `Hola ${pushname}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ucapanWaktu},;;;\nFN:${ucapanWaktu},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')
}
}
                }
            })
        }


					
        const fakethumb = (teks, yes) => {
            FxBot.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./stik/fake.jpeg'),quoted: mek ,caption:yes})
        }
        const fakestatus = (teks) => {
            FxBot.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": `Hola ${pushname}`,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    },
                    contextInfo: {
                      "forwardingScore": 999, "isForwarded": true
                    }
                }
            })
        }
        const fakegroup = (teks) => {
            FxBot.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid : `17792492278@g.us` } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": `Hola ${pushname}`,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        run = process.uptime() 
            teks = `${kyun(run)}`
const fimg = {
key:
{ fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ?
{ remoteJid: "status@broadcast" } : {}) },
message: { "imageMessage": { "mimetype": "image/jpeg","caption": teks, 'jpegThumbnail': fakeimg}}
}
contextInfo: {
mentionedJid: [sender]}

const txt1 = {
key:
{ fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ?
{ remoteJid: "status@broadcast" } : {}) },
message: { "imageMessage": { "mimetype": "image/jpeg","caption": `© FxBot Team 🍡`, 'jpegThumbnail': fs.readFileSync('./stik/fake.jpeg')}}
}
contextInfo: {
mentionedJid: [sender]}

 const faketoko = (teks) => {
 FxBot.sendMessage(from, teks, text, {
quoted: {
 key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) 
}, message: {
'productMessage': {
'product': {
 'productImage':{
'mimetype': 'image/jpeg',
 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')
},
'title': `Hola ${pushname}`,
'productImageCount': 9999
},
'businessOwnerJid': `0@s.whatsapp.net`
}
}
                }
            })
        }
        const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "5219984646983-1630226575@g.us",
			"inviteCode": `${showGreet} ${pushname}`,
			"groupName": `${showGreet} ${pushname}`, 
            "caption": `${showGreet} ${pushname}`, 
            'jpegThumbnail': dfrply
		}
	}
}
        const fvid = {
key:
{ fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ?
{ remoteJid: "status@broadcast" } : {}) },
message: { "videoMessage": { "caption":"𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇 🍡", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}
}
contextInfo: {
mentionedJid: [sender]}

        const producto = (teks) => {
 FxBot.sendMessage(from, teks, text, {
quoted: {
 key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) 
}, message: {
'productMessage': {
'product': {
 'productImage':{
'mimetype': 'image/jpeg',
 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')
},
'title': `${fake}`,
'productImageCount': 0
},
'businessOwnerJid': `0@s.whatsapp.net`
}
}
                }
            })
        }
        const fspam = {
		key: {
		fromMe: false,
		participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
		"contactMessage": {
		"displayName": `${pushname}\n!No Hagas SPAM Si No Quieres Ser Bloqueado Del Bot¡`,
		"vcard": 'BEGIN:VCARD\n' +
    		'Version:3.0\n' +
    		'TEL;type=CELL;type=VOICE;waid=50254371795:+50254371795\n' +
		'item1.X-ABLabel:Celular' +
    		'END:VCARD'
		}
		}
		}
        const ftroli = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "529984646983@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : 2021,status: 1,surface : 1,message: `${fake}`,orderTitle: 'Fx',thumbnail: fs.readFileSync('./stik/thumb.jpeg'), sellerJid: '0@s.whatsapp.net'}}}
const faketokoforwaded = (teks) => {
	anu = {
	  key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./stik/thumb.jpeg`)
					},
					"title": `Hola ${pushname}, ${ucapanWaktu}`,
					"retailerId": "Self Bot",
					"productImageCount": 1
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
	FxBot.sendMessage(from, teks, text, {
	  quoted: anu,
	  contextInfo:{
	    "forwardingScore": 999, "isForwarded": true
	  }
	})
}
const sendBug = async (target) => {
      await FxBot.relayWAMessage(
        FxBot.prepareMessageFromContent(
          target,
          FxBot.prepareDisappearingMessageSettingContent(0),
          {}
        ),{ waitForAck: true }) 
    }
///Button Text
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
FxBot.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await FxBot.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
FxBot.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
fx10 = vid1
mhan = await FxBot.prepareMessage(from, fx10, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
FxBot.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await FxBot.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
FxBot.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        FxBot.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
           
const sendWebp = async(to, url) => {
           var names = Date.now() / 10000;
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, './sticker' + names + '.png', async function () {
           console.log('selesai');
           let filess = './sticker' + names + '.png'
           let asw = './sticker' + names + '.webp'
           exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
           fs.unlinkSync(filess)
           if (err) return reply(`${err}`)
           exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
           if (error) return reply(`${error}`)
           FxBot.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:mek})
           fs.unlinkSync(asw)
});
});
});
}
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    FxBot.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }
            async function sendFileFromUrl(from, url, caption, mek, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return FxBot.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: mek, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }
            /*[-- funcion barra de nivel --]*/
			var per = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'
			const peri = 50 * (Math.pow(2, getLevelingLevel(sender)) - 1)
			const perl = peri-getLevelingXp(sender) 
			const resl = Math.round(100-((perl/getLevelingXp(sender))*100))
			if (resl <= 10) {
				per = `*[█▒▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 20) {
				per = `*[██▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 30) {
				per = `*[███▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 40) {
				per = `*[████▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 50) {
				per = `*[█████▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 60) {
				per = `*[██████▒▒▒▒] ${resl}%*`
			} else if (resl <= 70) {
				per = `*[███████▒▒▒] ${resl}%*`
			} else if (resl <= 80) {
				per = `*[████████▒▒] ${resl}%*`
			} else if (resl <= 90) {
				per = `*[█████████▒] ${resl}%*`
			} else if (resl <= 100) {
				per = `*[██████████] ${resl}%*`
			} 
				
					
			
			/*[-- funcion ranking --]*/
			const levelRole = getLevelingLevel(sender)
   	       var role = 'Dicipulo'
        if (levelRole <= 2) {
            role = 'Dicipulo'
        } else if (levelRole <= 4) {
            role = 'Dicipulo Dia 1 ⚊¹'
        } else if (levelRole <= 6) {
            role = 'Dicipulo Dia 2 ⚊²'
        } else if (levelRole <= 8) {
            role = 'Dicipulo Dia 3 ⚊³'
        } else if (levelRole <= 10) {
            role = 'Dicipulo Dia 4 ⚊⁴'
        } else if (levelRole <= 12) {
            role = 'Avanzado mes 1 ⚌¹'
        } else if (levelRole <= 14) {
            role = 'Avanzado mes 2 ⚌²'
        } else if (levelRole <= 16) {
            role = 'Avanzado mes 3 ⚌³'
        } else if (levelRole <= 18) {
            role = 'Avanzado mes 4 ⚌⁴'
        } else if (levelRole <= 20) {
            role = 'Avanzado mes 5 ⚌⁵'
        } else if (levelRole <= 22) {
            role = 'Aventurero nv dia 1 ☰¹'
        } else if (levelRole <= 24) {
            role = 'Aventurero nv dia 2 ☰²'
        } else if (levelRole <= 26) {
            role = 'Aventurero nv dia 3 ☰³'
        } else if (levelRole <= 28) {
            role = 'Aventurero nv dia 4 ☰⁴'
        } else if (levelRole <= 30) {
            role = 'Aventurero nv dia 5 ☰⁵'
        } else if (levelRole <= 32) {
            role = 'Aventurero exp año 1 ≣¹'
        } else if (levelRole <= 34) {
            role = 'Aventurero exp año 2 ≣²'
        } else if (levelRole <= 36) {
            role = 'Aventurero exp año 3 ≣³'
        } else if (levelRole <= 38) {
            role = 'Aventurero exp año 4 ≣⁴'
        } else if (levelRole <= 40) {
            role = 'Aventurero exp año 5 ≣⁵'
        } else if (levelRole <= 42) {
            role = 'Aventurero prf año 1 ﹀¹'
        } else if (levelRole <= 44) {
            role = 'Aventurero prf año 2 ﹀²'
        } else if (levelRole <= 46) {
            role = 'Aventurero prf año 3 ﹀³'
        } else if (levelRole <= 48) {
            role = 'Aventurero prf año 4 ﹀⁴'
        } else if (levelRole <= 50) {
            role = 'Aventurero prf año 5 ﹀⁵'
        } else if (levelRole <= 52) {
            role = 'Maestro mes 1 ︾¹'
        } else if (levelRole <= 54) {
            role = 'Maestro mes 2 ︾²'
        } else if (levelRole <= 56) {
            role = 'Maestro mes 3 ︾³'
        } else if (levelRole <= 58) {
            role = 'Maestro mes 4 ︾⁴'
        } else if (levelRole <= 60) {
            role = 'Maestro mes 5 ︾⁵'
        } else if (levelRole <= 62) {
            role = 'Elite mes 1 ♢¹ '
        } else if (levelRole <= 64) {
            role = 'Elite mes 2 ♢²'
        } else if (levelRole <= 66) {
            role = 'Elite mes 3 ♢³'
        } else if (levelRole <= 68) {
            role = 'Elite mes 4 ♢⁴'
        } else if (levelRole <= 70) {
            role = 'Elite mes 5 ♢⁵'
        } else if (levelRole <= 72) {
            role = 'Elite año 1 ♢♢¹'
        } else if (levelRole <= 74) {
            role = 'Elite año 2 ♢♢²'
        } else if (levelRole <= 76) {
            role = 'Elite año 3 ♢♢³'
        } else if (levelRole <= 78) {
            role = 'Elite año 4 ♢♢⁴'
        } else if (levelRole <= 80) {
            role = 'Elite año 5 ♢♢⁵'
        } else if (levelRole <= 82) {
            role = 'Elite de la elite dia 1 ✷¹'
        } else if (levelRole <= 84) {
            role = 'Elite de la elite dia 2 ✷²'
        } else if (levelRole <= 86) {
            role = 'Elite de la elite dia 3 ✷³'
        } else if (levelRole <= 88) {
            role = 'Elite de la elite dia 4 ✷⁴'
        } else if (levelRole <= 90) {
            role = 'Elite de la elite dia 5 ✷⁵'
        } else if (levelRole <= 92) {
            role = 'Escolta dia 1 ✷✷¹'
        } else if (levelRole <= 94) {
            role = 'Escolta dia 2 ✷✷²'
        } else if (levelRole <= 96) {
            role = 'Escolta dia 3 ✷✷³'
        } else if (levelRole <= 98) {
            role = 'Escolta dia 4 ✷✷⁴'
        } else if (levelRole <= 100) {
            role = 'Escolta dia 5 ✷✷⁵'
        } else if (levelRole <= 102) {                   
            role = 'Leyenda I 忍'
        } else if (levelRole <= 154) {
            role = 'Leyenda I 忍'
        } else if (levelRole <= 156) {
            role = 'Leyenda I 忍'
        } else if (levelRole <= 158) {
            role = 'Leyenda I 忍'
        } else if (levelRole <= 160) {
            role = 'Leyenda I 忍'
        } else if (levelRole <= 162) {
            role = 'Leyenda I 忍'
        } else if (levelRole <= 164) {
            role = 'Leyenda I 忍'
        } else if (levelRole <= 166) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 168) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 170) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 172) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 174) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 176) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 178) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 180) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 182) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 184) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 186) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 188) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 190) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 192) {
            role = 'Leyenda I 忍'
        } else if (levelRole <= 194) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 196) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 198) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 200) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 210) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 220) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 230) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 240) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 250) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 260) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 270) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 280) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 290) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 300) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 310) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 320) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 330) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 340) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 350) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 360) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 370) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 380) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 390) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 400) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 410) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 420) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 430) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 440) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 450) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 460) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 470) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 480) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 490) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 500) {
            role = 'Leyenda VI 忍'
        } else if (levelRole <= 666) {
            role = 'Leyenda VII 忍'
        } else if (levelRole <= 700) {
            role = 'Leyenda VIII 忍'
        } else if (levelRole <= 800) {
            role = 'Leyenda IX 忍'
        } else if (levelRole <= 900) {
            role = 'Leyenda X 忍'
        } else if (levelRole <= 1000) {
            role = 'Mythic I 上帝'
        } else if (levelRole <= 2000) {
            role = 'Mythic II 上帝'
        } else if (levelRole <= 3000) {
            role = 'Mythic III 上帝'
        } else if (levelRole <= 4000) {
            role = 'Mythic IV 上帝'
        } else if (levelRole <= 5000) {
            role = 'Mythic V 上帝'
        } else if (levelRole <= 6000) {
            role = 'Mythical Glory 上帝'
        } else if (levelRole <= 7000) {
            role = 'Mythical Glory x1000帝'
        } else if (levelRole <= 8000) {
            role = 'Mythical Glory 1100 上帝'
        } else if (levelRole <= 9000) {
            role = 'Mythical Glory 2000 上帝'
        } else if (levelRole <= 10000) {
            role = 'Despertar 特尔邦贡'
	    } else if (levelRole <= 66666666) {
   	         role = 'Onichan❗'
   	     }
   		 
				
				
	        /*[-- funcion nivel --]*/
            if (isGroup && isVerify && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 500 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                     addKoinUser(sender, 20)     	           	                
                     await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))            
	               
 
                  }
            } catch (err) {
                console.error(err)
            }
        }
         

          /*[-- function check limit --]*/
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return FxBot.sendMessage(from,`Su límite de solicitudes ha expirado`, text,{ quoted: mek})
                            FxBot.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
                        FxBot.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				} 
		
			/*[-- limit end --]*/
            const isLimit = (sender) =>{ 
          	if (isOwner ) {return false;}
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    FxBot.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/limit.json',JSON.stringify(_limit))
           return false
     	  }
     	}
     	   
     	   /*[-- auto out form gc if member under limit --]*/
 	       if (isGroup) {
				try {
					const getmemex = groupMembers.length	
				    if (getmemex <= memberlimit) {
					reply(`lo siento, los miembros del grupo no han cumplido con los requisitos. miembros mínimos deben ser ${memberlimit}`)					
 	                           FxBot.groupLeave(from) 			  
							FxBot.updatePresence(from, Presence.composing)						
				    }
		       } catch (err) { console.error(err)  }
 	       }


////***𝙁𝙐𝙉𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄 𝙑𝙄𝙍𝙐𝙎***\\\\\
    if (budy.length > 1000) {
    if (!isGroup) return
    if (!AntiVirtex) return
    if (isGroupAdmins) return
    reply('                             \n'.repeat(300))
    reply(`「 *ANTI-TRAVA* 」\n\n¡Tu eres travieso! ¿Por qué enviar una trava ✋🏻📰? \nBye kuaker...\n\nAdiós~`)
    console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
    FxBot.groupRemove(from, [sender])
    }


/////***𝙁𝙐𝙉𝙏𝙄𝙊𝙉  𝘼𝙉𝙏𝙄𝙇𝙄𝙉𝙆 𝙂𝙍𝙐𝙋***\\\\\
      if (budy.includes(`chat.whatsapp.com`)){
	   
					if (isGroup && !mek.key.fromMe) {
					if (!isAntiLink) return
					if (isGroupAdmins) return reply('Te salvaste eres admin 🙂')
					if (messagesC.includes("@529984646983")) return reply("Permiso recibido")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Enlace detectado😤 @${sender.split("@")[0]}`)
					FxBot.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)
					}, 0)
				    }
}

if (budy.includes(`http`)){
	   
					if (isGroup && !mek.key.fromMe) {
					if (!isAntiLinkMax) return
					if (isGroupAdmins) return reply('Te salvaste eres admin 🙂')
					if (messagesC.includes("@529984646983")) return reply("Permiso recibido")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Enlace detectado😤  @${sender.split("@")[0]}`)
					FxBot.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)
					}, 0)
				    }
}

    
//=====================//      
         // Tiempo horario
        const hour_now = moment().format('HH')
        var ucapanWaktu = '¡Buenos Dias 🌝👋'
        if (hour_now >= '03' && hour_now <= '10') {
          ucapanWaktu = '¡Buenos Dias 🌝👋'
        } else if (hour_now >= '10' && hour_now <= '14') {
          ucapanWaktu = 'Buenas Tardes 🌆'
        } else if (hour_now >= '14' && hour_now <= '17') {
          ucapanWaktu = 'Buenas Tardes 🌆'
        } else if (hour_now >= '17' && hour_now <= '18') {
          ucapanWaktu = 'Buenas Tardes 🌆'
        } else if (hour_now >= '18' && hour_now <= '23') {
          ucapanWaktu = 'Buenas Noches 🌚'
        } else {
          ucapanWaktu = 'Buenas Noches 🌚'
        }
//========================================================================================================================//

         
        FxBot.chatRead(from)
        
        
        
        
        
        
		colors = ['blue']
		const isImage = type == 'imageMessage'
        const isVideo = type == 'videoMessage'
        const isAudio = type == 'audioMessage'
        const isSticker = type == 'stickerMessage'
        const isContact = type == 'contactMessage'
        const isLocation = type == 'locationMessage'
	    const isTexto = type == 'textMessage'
	
	
		const isQuoted = type == 'extendedTextMessage'
	    const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		if (itsMe){
        if(chats.toLowerCase() == `${prefix}self`){
        public = false
        FxBot.sendMessage(from, `Success`, `STATUS : SELF`)
        }
        if (chats.toLowerCase() == 'status'){
        FxBot.sendMessage(from, `STATUS : ${public ? 'PUBLIC' : 'SELF'}`)
        }
        }
        if (!public){
    if (!mek.key.fromMe) return
  }
 
		if (isAutoSt && isMedia && isImage) {
		if (!mek.key.fromMe) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await FxBot.downloadAndSaveMediaMessage(encmedia)
            ran = '666.webp'
            await ffmpeg(`./${media}`)
           .input(media)
           .on('start', function (cmd) {
           console.log(`Started : ${cmd}`)
           })
          .on('error', function (err) {
          console.log(`Error : ${err}`)
          fs.unlinkSync(media)
          reply('error')
          })
          .on('end', function () {
           console.log('Finish')
           FxBot.sendMessage(from, fs.readFileSync(ran), MessageType.sticker, { thumbnail:ran, contextInfo: { externalAdReply:{title:'𝑭𝒆𝒍𝒊𝒙𝒄𝒓𝒂𝒄𝒌 & 𝑻𝒐𝒎𝒊𝒌𝒐 𝑩𝒐𝒕 𝑶𝒇𝒄',body:'Felix Bot',previewType:"PHOTO",thumbnailUrl:'https://e.top4top.io/p_2067fvqbo0.jpg',sourceUrl:'https://chat.whatsapp.com/LP5ftc6uXSGHaWOCG2VVym'}}, quoted : mek })
           fs.unlinkSync(media)
           fs.unlinkSync(ran)
           })
           .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
           .toFormat('webp')
           .save(ran)
		}}
		if ((isAutoSt && isMedia && mek.message.videoMessage.fileLength < 10000000 || isVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
		if (!itsMe) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const media = await FxBot.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Falló, al convertir ${tipe} a stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            FxBot.sendMessage(from, fs.readFileSync(ran), MessageType.sticker, { thumbnail:ran, contextInfo: { externalAdReply:{title:'𝑭𝒆𝒍𝒊𝒙𝒄𝒓𝒂𝒄𝒌 & 𝑻𝒐𝒎𝒊𝒌𝒐 𝑩𝒐𝒕 𝑶𝒇𝒄',body:'Felix Bot',previewType:"PHOTO",thumbnailUrl:'https://e.top4top.io/p_2067fvqbo0.jpg',sourceUrl:'https://chat.whatsapp.com/LP5ftc6uXSGHaWOCG2VVym'}}, quoted : mek })
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(300,iw)':min'(300,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
		        }}
		// CONSOLE LOG
        if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
    	
        if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      
        if (isCmd && isBanned) {
        return console.log(color('[ USUÁRIO BANEADO ] Ignorando comando', 'blue'), color(moment.tz('America/México').format('HH:mm:ss'), 'yellow'), color(`${command}`),'DE:', color(pushname))}
        
        if (isCmd && isFiltered(from) && !isGroup) { 
        	return FxBot.sendMessage(from, `${pushname}...\n\n*¡Espera 3 segundos para volver a usar comandos¡*`, MessageType.text, {quoted: fspam})
		}
        
        	if (isCmd && isFiltered(from) && isGroup) {
        	return FxBot.sendMessage(from, `${pushname}...\n\n*¡Espera 3 segundos para volver a usar comandos¡*`, MessageType.text, {quoted: fspam})
		}
        
        if (mek.message.stickerMessage) {
            let stickerKey = mek.message.stickerMessage.fileSha256.toString('base64');
            if(stickerKey=="cuERL9nVYB/KgVLZBShunZcmmqeyXdIRpzldZwcEuCg="){
            if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					 
            await FxBot.groupRemove(mek.key.remoteJid, [mek.message.stickerMessage.contextInfo.participant])
        }
        }
        if (mek.message.stickerMessage) {
            let stickerKey = mek.message.stickerMessage.fileSha256.toString('base64');
            if(stickerKey=="G+f4o9Z/5iYsY/gCxFbYcG8K3BeImZYcPK7khx2QLg4="){
       if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					
            await FxBot.groupRemove(mek.key.remoteJid, [mek.message.stickerMessage.contextInfo.participant])
        }
        }
        if (mek.message.stickerMessage) {
            let stickerKey = mek.message.stickerMessage.fileSha256.toString('base64');
            if(stickerKey=="6G3bz+d6I6BAeIUD0MwUpOK7eRJAoBgVIlZi4jcanG8="){
       
      
					if (!isOwner) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					 
            await FxBot.groupRemove(mek.key.remoteJid, [mek.message.stickerMessage.contextInfo.participant])
        }
        }
        
        
               if (mek.message.stickerMessage) {
            let stickerKey = mek.message.stickerMessage.fileSha256.toString('base64');
            if(stickerKey=="4TmdxKLn7XsoCzO+WZdtHh6hvS5yIYSk+zRpxXRknBE="){
            if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					
            await FxBot.groupDemoteAdmin(mek.key.remoteJid, [mek.message.stickerMessage.contextInfo.participant])
        }
        }
        if (mek.message.stickerMessage) {
            let stickerKey = mek.message.stickerMessage.fileSha256.toString('base64');
            if(stickerKey=="fGp78IBD19lMciQbjVy7b990RZqezQRHfI95o2DGiKA="){
            if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					
            await FxBot.groupMakeAdmin(mek.key.remoteJid, [mek.message.stickerMessage.contextInfo.participant])
        }
        }
if (mek.message.stickerMessage) {
            let stickerKey = mek.message.stickerMessage.fileSha256.toString('base64');
            if(stickerKey=="G+f4o9Z/5iYsY/gCxFbYcG8K3BeImZYcPK7khx2QLg4="){
            su = mek.message.stickerMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('hex')
        reply(su)
				}
}
if (mek.message.stickerMessage) {
            let stickerKey = mek.message.stickerMessage.fileSha256.toString('base64');
            if(stickerKey=="KDLrzwkygDVgMz9ImGWbqszpd/6CKvRc84K4CxraFMM="){
            reply('𝐽𝑎𝑐𝑘𝑠𝑖𝑡𝑜 𝑒𝑠 gei')
				}
}

//--𝗔𝗨𝗧𝗢 𝗥𝗘𝗦𝗣𝗨𝗘𝗦𝗧𝗔
        switch(is) {
 

    
}  
			switch(command) {
				case 'ss':
					sendMediaURL(from, `https://api-rull.herokuapp.com/api/ssweb?url=${args[0]}`)
					addFilter(from)
            break
    case 'menu':
    case 'help':
    if (!isVerify) return reply(ind.noregis())
    ptod = "66666666666@s.whatsapp.net"
        stod = `${sender}`
        uwu = '```'
        num = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${senderNumber}`, {method: 'get'})

       stst = await FxBot.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			    const timestampp = speed();
	const latensii = speed() - timestampp
	run = process.uptime() 
    teks = `${kyun(run)}`
    try {
pic = await FxBot.getProfilePicture(sender)
} catch {
pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
gambar = await getBuffer(pic)
mhan = await FxBot.prepareMessage(from, gambar, image, {thumbnail: gambar})
gbutsan = [
  {buttonId: 'CREADOR', buttonText: {displayText: 'CREADOR'}, type: 1},
  {buttonId: 'YOUTUBE', buttonText: {displayText: 'YOUTUBE'}, type: 1},
]
 gbuttonan = {
imageMessage: mhan.message.imageMessage,
    contentText: `
╭──❒ 「 Bot Whatsapp 」 
│ ⬡ Creador : Fᴇʟɪxᴄʀᴀᴄᴋ 409
│ ⬡ Batería : ${baterai.battery}
│ ⬡ Mode : PUBLIC-MODE
│ ⬡ Prefix : 「 MULTI-PREFIX 」
│ ⬡ Fecha : 
│ ⬡ ${jmn} - ${calender}
╰─────❏

╭─❒ 「 Tu Info 」 
│ ⬡ Estado : ${isOwner ? 'Owner' : 'User'}
│ ⬡ Nombre : ${pushname}
│ ⬡ Bio : ${stst}
│ ⬡ Número : @${sender.split('@')[0]}
╰─────❏

╭─❒ 「 Info Número 」 ❒
│ ⬡ Pais : ${num.data.country_code} 
│ ⬡ Tipo : ${num.data.carrier.type} 
│ ⬡ Compañía : ${num.data.carrier.name}
╰─────❏

╭──❒「 DUEÑO 」
├ ${prefix}creditos
├ ${prefix}off
├ ${prefix}on
├ ${prefix}ban
├ ${prefix}bc2
├ ${prefix}unban
├ ${prefix}fitnah
├ ${prefix}setthumb
├ ${prefix}settarget
├ ${prefix}setfakeimg
├ ${prefix}setreply
├ ${prefix}status
├ ${prefix}sider
╰───❏

╭──❒「 MAKER 」
├ ${prefix}sticker
├ ${prefix}swm <author|packname>
├ ${prefix}take <author|packname>
├ ${prefix}fdeface
├ ${prefix}emoji
├ ${prefix}robar
├ ${prefix}crosslogo
├ ${prefix}flowertext
├ ${prefix}silktext
├ ${prefix}glowtext
├ ${prefix}skytext
├ ${prefix}cslogo
├ ${prefix}crismes
├ ${prefix}lithgtext
├ ${prefix}bneon
├ ${prefix}matrix
├ ${prefix}wall
├ ${prefix}dropwater
├ ${prefix}leavest
├ ${prefix}logobp
├ ${prefix}smoketext
├ ${prefix}text3dbox
├ ${prefix}sandw
╰───❏

╭──❒「 CONVERTIDOR 」
├ ${prefix}toimg
├ ${prefix}tomp3
├ ${prefix}tomp4
├ ${prefix}slow
├ ${prefix}fast
├ ${prefix}reverse
├ ${prefix}tourl
├ ${prefix}togif
╰───❏

╭──❒「 UP STORY 」
├ ${prefix}subir_texto
├ ${prefix}subir_imagen
├ ${prefix}subir_video
╰───❏

╭──❒「 ACTIVACIÓN 」
├ ${prefix}leveling
├ ${prefix}welcome
├ ${prefix}antitrava
├ ${prefix}antifake
├ ${prefix}autosticker
├ ${prefix}antilinkmax
├ ${prefix}nsfw
├ ${prefix}antilink
╰───❏

╭──❒「 ESPECIALES 」
├ ${prefix}+adm
├ ${prefix}-adm
├ ${prefix}kick
╰───❏

╭──❒「 GRUPOS 」
├ ${prefix}grupo
├ ${prefix}kick
├ ${prefix}+adm
├ ${prefix}-adm
├ ${prefix}listadmin
├ ${prefix}listonline
├ ${prefix}linkgrupo
├ ${prefix}tagall
╰───❏

╭──❒「 EMOJI 」
├ ${prefix}emoji_samsung
├ ${prefix}emoji_microsoft
├ ${prefix}emoji_whastapp
├ ${prefix}emoji_twitter
├ ${prefix}emoji_facebook
├ ${prefix}emoji_skype
├ ${prefix}emoji_joypixels
├ ${prefix}emoji_openmoji
├ ${prefix}emoji_emojidex
├ ${prefix}emoji3d
├ ${prefix}emoji_lg
├ ${prefix}emoji_htc
╰───❏

╭──❒「 NSFW 」
├ ${prefix}neko
├ ${prefix}holoero
├ ${prefix}oppai
├ ${prefix}cumimage
├ ${prefix}cum
├ ${prefix}keta
├ ${prefix}kiss
├ ${prefix}eron
├ ${prefix}pwankg
├ ${prefix}anal
├ ${prefix}yuri
├ ${prefix}solog
├ ${prefix}goose
├ ${prefix}lewdkemo
├ ${prefix}lewdk
├ ${prefix}lewd
├ ${prefix}hololewed
├ ${prefix}hentai
├ ${prefix}blowjob
├ ${prefix}boobs
├ ${prefix}pat
├ ${prefix}trap
├ ${prefix}les
├ ${prefix}futanari
├ ${prefix}femdom
├ ${prefix}kuni
├ ${prefix}feed
├ ${prefix}tickle
├ ${prefix}eroyuri
├ ${prefix}erokemo
├ ${prefix}erok
├ ${prefix}ero
├ ${prefix}bj
├ ${prefix}feetg
├ ${prefix}oppai
├ ${prefix}pussyimage
├ ${prefix}pussy
├ ${prefix}nekopoi
├ ${prefix}nsfwavatar
├ ${prefix}wallpaperanime
├ ${prefix}waifu
├ ${prefix}loli
╰───❏

╭──❒「 FUN 」
├ ${prefix}dado
├ ${prefix}top5
├ ${prefix}par
├ ${prefix}fitnahpc
├ ${prefix}contac
╰───❏

╭──❒「 TAG 」
├ ${prefix}totag
├ ${prefix}hidetag
├ ${prefix}contag
├ ${prefix}sticktag
├ ${prefix}totag
╰───❏

╭──❒「 DESCARGAS 」
├ ${prefix}ytsearch <query>
├ ${prefix}igstalk <query>
├ ${prefix}play <query>
├ ${prefix}video <query>
├ ${prefix}ytmp3 <link>
├ ${prefix}ytmp4_ <link>
├ ${prefix}ig <link>
├ ${prefix}twitter <link>
├ ${prefix}fb <link>
├ ${prefix}igstory <búsqueda>
├ ${prefix}brainly <query>
├ ${prefix}image <query>
├ ${prefix}anime <random>
╰───❏

╭──❒「 OTROS 」
├ ${prefix}self
├ ${prefix}public
├ ${prefix}runtime
├ ${prefix}ping
├ ${prefix}inspeccionar
├ ${prefix}join
├ ${prefix}get
├ ${prefix}term <code>
├ x <code>
╰───❏`,
    footerText: `Speed    : ${latensii.toFixed(4)} Second\nRuntime : ${teks}\n\n𝑪𝑹𝑬𝑨𝑻𝑶𝑹 𝑩𝑶𝑻 𝑾𝑯𝑨𝑻𝑺𝑨𝑷𝑷\n© By FxBot`,
    buttons: gbutsan,
    headerType: 4
} 
await FxBot.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
        thumbnail: fs.readFileSync('./stik/fake.jpeg'),
        "contextInfo": {
            mentionedJid: [sender]},
            quoted: ftroli})
           	addFilter(from)
            break

case 'isbaileys': 
case 'bail': 
case 'baileys':
reply(`${mek.quoted.isBaileys}`)
addFilter(from)
            break

case 'test3':				
if (body.length > 25) return reply('¡Solo 20 Caracteres!')
if(body.length<11) return FxBot.sendMessage(from, '¿Y el texto?', text, {quoted: mek})
reply(mess.wait)
buffer = await getBuffer(`https://www.minecraftskinstealer.com/achievement/a.php?i=13&h=Achievement+get%21&t=${body.slice(11)}`)
FxBot.sendMessage(from, buffer, image, {quoted:mek})
break
case 'antidelete':
if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(lang.onlyOwner())
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if (antidel === true) return reply('om')
antidel = true
reply('On')
} else if (args[0] === "off") {
if (antidel === false) return
antidel = false
reply('off')
} else {
reply('off')
}
break

    case 'on':
            if (!mek.key.fromMe) return 
            offline = false
            FxBot.sendMessage (from, 'ENCENDIDO', MessageType.text, {quoted: txt1, "forwardingScore": 9999, "isForwarded": true})
            addFilter(from)
            break       
    case 'status':
    if (!isVerify) return reply(ind.noregis())
            fakestatus(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
            addFilter(from)
            addFilter(from)
            break
    case 'off':
    
            if (!mek.key.fromMe) return 
            offline = true
            waktu = Date.now()
            anuu = args.join(' ') ? args.join(' ') : '-'
            alasan = anuu
            FxBot.sendMessage (from, 'APAGADO', MessageType.text, {quoted: txt1, "forwardingScore": 9999, "isForwarded": true})
            addFilter(from)
            addFilter(from)
            break   
    case 'get':
    if (!isVerify) return reply(ind.noregis())
             if (!isVerify) return reply(ind.noregis())
            if(!q) return reply('¿Y el enlace?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            fakestatus(bu)
            })   
            addFilter(from)
            addFilter(from)
            break
    case 'contag':
    if (!isVerify) return reply(ind.noregis())
            if (!isGroupAdmins) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            FxBot.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            addFilter(from)
            addFilter(from)
            break
    case 'sticktag':
    case 'stickertag':
    if (!isVerify) return reply(ind.noregis())
    if (!isGroupAdmins) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await FxBot.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await FxBot.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            FxBot.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`!Responde a un sticker!`)
            }
            addFilter(from)
       
            addFilter(from)
            break
        
        
        
     case 'join':
    
    if (!isVerify) return reply(ind.noregis())
        
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return fakestatus('¡Ingrese el enlace del grupo!')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakegroup ('¡Asegúrese de que el enlace sea correcto!')
            var response = await FxBot.acceptInvite(codeInvite)
            fakestatus('¡El bot se ah unido a su grupo exitosamente!')
            } catch {
            fakegroup('Asegúrese que el enlace sea correcto.')
            }
            addFilter(from)
            break
				 
    case 'fitnah':
    if (!isVerify) return reply(ind.noregis())
    if (!mek.key.fromMe) return 
            if (args.length < 1) return reply(`Ejemplo de uso :\n${prefix}fitnah [@tag|mensaje|respuesta del bot]]\n\nEjemplo : \n${prefix}fitnah @tag|Hola|Hola también`)
            var gh = args.join ('')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            FxBot.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            addFilter(from)
            break

    case 'settarget':
    if (!isVerify) return reply(ind.noregis())
            if(!q) return reply(`${prefix}settarget 628xxxxx`)
            targetpc = args[0]
            fakegroup(`Éxito Cambiando el objetivo de slanderpc : ${targetpc}`)
            addFilter(from)
            break
    case 'fitnahpc':
    if (!isVerify) return reply(ind.noregis())
            if(!q) return reply(`${prefix}fitnahpc teks target|teks lu`)
            jids = `${targetpc}@s.whatsapp.net` // nomer target
            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
            const responye = await FxBot.sendMessage(jids, `${split[1]}`, MessageType.text, options)
            await FxBot.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
            addFilter(from)
            break
    case 'tomp3':
    if (!isVerify) return reply(ind.noregis())
            if (!isQuotedVideo) return fakegroup('Responde un video!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await FxBot.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            FxBot.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek, caption:'𝐹??𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇 🍡'})
            fs.unlinkSync(ran)
            })
            addFilter(from)
            break
    case 'fast':
    if (!isVerify) return reply(ind.noregis())
            if (!isQuotedVideo) return fakegroup('¡Responde a un vídeo!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await FxBot.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            FxBot.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek, caption:'𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇 🍡'})
            fs.unlinkSync(ran)
            })
            addFilter(from)
            break

    case 'slow':
    if (!isVerify) return reply(ind.noregis())
            if (!isQuotedVideo) return fakegroup('¡Responde a un vídeo!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await FxBot.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            FxBot.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek, caption:'𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇 🍡'})
            fs.unlinkSync(ran)
            })
            addFilter(from)
            break
case 'invert_greyscale':
		if (!isVerify) return reply(ind.noregis())
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo :  mek
					reply(mess.wait)
					console.log(color(time, 'magenta'), color(moment.tz('America/Mexico_City').format('HH:mm:ss'), "gold"), color('Descargando sticker...'))
					owgi = await  FxBot.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/invertgreyscale?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply('Error')
					FxBot.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('America/Mexico_City').format('HH:mm:ss'), "gold"), color('Enviando sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply(lang.replyFoto())
					}
				 break 
    case 'reverse':
    if (!isVerify) return reply(ind.noregis())
            if (!isQuotedVideo) return fakegroup('¡Responde a un vídeo!')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await FxBot.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            FxBot.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek, caption:'𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇 🍡'})
            fs.unlinkSync(ran)
            })
            addFilter(from)
            break
    case 'anime':
    if (!isVerify) return reply(ind.noregis())
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            FxBot.sendMessage(from,media,image,{quoted: mek, caption:'𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇 🍡'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            addFilter(from)
            break
    case 'contac':
    if (!isVerify) return reply(ind.noregis())
            pe = args.join(' ') 
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('¡Número de teléfono invalido!');
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            FxBot.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            addFilter(from)
            break    
            
            /// TIC TAC TOE
            
            
            case 'tictactoe':
case 'ttt':
if (!isVerify) return reply(ind.noregis())
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('¡Etiqueta a tu oponentes! ')
if (isTTT) return reply('Hay un juego en este grupo, espere')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('¡Menciona a alguien!')
ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
player1 = sender
player2 = ment[0]
angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
id = from
gilir = player2
ky_ttt.push({player1,player2,id,angka,gilir})
FxBot.sendMessage(from, `*🎳 Juego Tic Tac Toe 🎲*

[@${player2.split('@')[0]}] Te desafío a ser el oponente del Juego🔥
Escribe Y/N para aceptar o rechazar un juego

Escribe ${prefix}delttc , Para reiniciar el juego en el grupo!`, text, {contextInfo: {mentionedJid: [player2]}})
addFilter(from)
            break
case 'delttt':
                case 'delttc':
                if (!isVerify) return reply(ind.noregis())
if (!isGroupAdmins) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
if (!isGroup) return reply(mess.only.group)
if (!isTTT) return reply('¡No hay juegos en este grupo!')
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa 
reply('¡Se ah reiniciado el juego con éxito!')
addFilter(from)
            break
    
    
    
    
    
    
    
    
    
    
case 'takestick':
case 'robar':
if (!isVerify) return reply(ind.noregis())
if (!isQuotedSticker) return reply(`𝘔𝘦𝘯𝘤𝘪𝘰𝘯𝘢 𝘶𝘯 𝘴𝘵𝘪𝘤𝘬𝘦𝘳, 𝘦𝘫𝘦𝘮𝘱𝘭𝘰: ${prefix}takestick nombre|autor*`)
const encmediats = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
var kls = q
var pack = kls.split("|")[0];
var author2 = kls.split("|")[1];
if (!q) return reply('¿Cual es el nombrede autor y del paquete?')
if (!pack) return reply(`¿Cual es el nombrede autor y del paquete?`)
if (!author2) return reply(`¿Cual es el nombrede autor y del paquete?`)
const dlfile = await FxBot.downloadMediaMessage(encmediats)
reply(mess.wait)
const bas64 = `data:image/jpeg;base64,${dlfile.toString('base64')}`
var mantap = await convertSticker(bas64, `${author2}`, `${pack}`)
var imageBuffer = new Buffer.from(mantap, 'base64');
FxBot.sendMessage(from, imageBuffer, sticker, {quoted: mek})
addFilter(from)
addFilter(from)
            break

    
	case 'stikerwm':
	case 'stickerwm':
    case 'swm':
    if (!isVerify) return reply(ind.noregis())
            pe = args.join('')
            var a = '© 𝐹𝑥 𝐵𝑜𝑡 ??𝑒𝑎𝑚 🍡'
            var b = pe.split("|")[1];
            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             media = await FxBot.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            FxBot.sendMessage(from, 'Hay un error, lo siento', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            FxBot.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await FxBot.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            FxBot.sendMessage(from, 'Hay un error, lo siento', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            FxBot.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`ຯ❏͜ᰰ Responde a una imagen con : ${prefix}swm Texto|Texto `)
            }
            addFilter(from)
            break
    case 'upswteks':
    case 'subir_texto':
    if (!isVerify) return reply(ind.noregis())
            if (!q) return fakestatus('Isi teksnya!')
            FxBot.sendMessage('status@broadcast', `${q}`, extendedText)
            fakegroup(`El texto se subió exitosamente ${q}`)
            addFilter(from)
            break
    case 'upswimage':
    case 'subir_imagen':
    if (!isVerify) return reply(ind.noregis())
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await FxBot.downloadMediaMessage(swsw)
            FxBot.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `La imagen se subió exitosamente : ${q}`
            FxBot.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('¡Responde a una imagen!')
            }
            addFilter(from)
            break
    case 'upswvideo':
    case 'subir_video':
    if (!isVerify) return reply(ind.noregis())
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await FxBot.downloadMediaMessage(swsw)
            FxBot.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `El video se subió exitosamente : ${q}`
            FxBot.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('¡Responde a un vídeo!')
            }
            addFilter(from)
            break
    case 'self':
                 if (!mek.key.fromMe) return fakestatus('¡Solo yo puedo usar ese comando!')
			    public = false
			    FxBot.sendMessage(from, `\`\`\`Estado : Uno_Mismo\`\`\``, text,{quoted : txt1})
			    break
			    
			  case 'public':
			if (!mek.key.fromMe) return fakestatus('¡Solo yo puedo usar ese comando!')
			    public = true
			    FxBot.sendMessage(from, `\`\`\`Estado : Publico\`\`\``, text,{quoted : txt1})
			    break
    case 'public':
    
          	if (!mek.key.fromMe) return fakestatus('SELF-BOT')
          	if (banChats === false) return
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	fakestatus(`「 *PUBLIC-MODE* 」`)
          	addFilter(from)
            break
	case 'self':
	
          	if (!mek.key.fromMe) return fakestatus('SELF-BOT')
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	banChats = true
          	fakestatus(`「 *SELF-MODE* 」`)
          	addFilter(from)
            break
 	case 'hidetag':
 if (!isVerify) return reply(ind.noregis())
			if (!isGroupAdmins) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
			var value = args.join(' ')
			var group = await FxBot.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: mek
			}
			FxBot.sendMessage(from, optionshidetag, text)
			addFilter(from)
            break
	 
			
case 'sticker': 
    case 'stickergif': 
    case 'stiker':
    case 'sg':
    case 's':
    if (!isVerify) return reply(ind.noregis())
            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            F = body.slice(6)				  
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await FxBot.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                FxBot.sendMessage(from, fs.readFileSync(ran), MessageType.sticker, { thumbnail:ran, contextInfo: { externalAdReply:{title:'𝑭𝒆𝒍𝒊𝒙𝒄𝒓𝒂𝒄𝒌 & 𝑻𝒐𝒎𝒊𝒌𝒐 𝑩𝒐𝒕 𝑶𝒇𝒄',body:'Felix Bot',previewType:"PHOTO",thumbnailUrl:'https://e.top4top.io/p_2067fvqbo0.jpg',sourceUrl:'https://chat.whatsapp.com/LP5ftc6uXSGHaWOCG2VVym'}}, quoted : mek })
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const media = await FxBot.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Falló, al convertir ${tipe} a stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            FxBot.sendMessage(from, fs.readFileSync(ran), MessageType.sticker, { thumbnail:ran, contextInfo: { externalAdReply:{title:'𝑭𝒆𝒍𝒊𝒙𝒄𝒓𝒂𝒄𝒌 & 𝑻𝒐𝒎𝒊𝒌𝒐 𝑩𝒐𝒕 𝑶𝒇𝒄',body:'Felix Bot',previewType:"PHOTO",thumbnailUrl:'https://e.top4top.io/p_2067fvqbo0.jpg',sourceUrl:'https://chat.whatsapp.com/LP5ftc6uXSGHaWOCG2VVym'}}, quoted : mek })
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(300,iw)':min'(300,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Envia una imagen o un vídeo, en caso de ser video solo debe durar 6 Segundos.`)
            }
            addFilter(from)
            break

case 'dado':
if (!isVerify) return reply(ind.noregis())
			random = Math.floor(Math.random() * 6) + 1
		damdu = fs.readFileSync(`./stik/${random}.webp`)
			FxBot.sendMessage(from, damdu, sticker, {quoted: mek})
			addFilter(from)
            break
case 'ytsearch':
if (!isVerify) return reply(ind.noregis())
			if (args.length < 1) return reply('Que quieres buscar?')
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await FxBot.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE SEARCH* 」'
		    		ytresult += '\n________________________\n\n'
		   			aramas.all.map((video) => {
		        	ytresult += '❏ Título: ' + video.title + '\n'
		            ytresult += '❏ Link: ' + video.url + '\n'
		            ytresult += '❏ Duración: ' + video.timestamp + '\n'
		            ytresult += '❏ Subida: ' + video.ago + '\n________________________\n\n'
		    		});
		    		ytresult += '◩ *SELF-BOT*'
    		await fakethumb(tbuff,ytresult)
			addFilter(from)
            break
	case 'setreply':
	
	case 'setfake':
	if (!isVerify) return reply(ind.noregis())
	if (!mek.key.fromMe) return fakestatus('❏ Este comando solo puede ser usado por mi')
			if (!q) return fakegroup(mess.wrongFormat)
			fake = q
			fakegroup(`Exito al modificar el FakeReply a : ${q}`)
			addFilter(from)
            break
	case 'setfakeimg':
	if (!isVerify) return reply(ind.noregis())
	if (!mek.key.fromMe) return fakestatus('❏ Este comando solo puede ser usado por mi')
        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await FxBot.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/fake.jpeg`, delb)
			fakestatus('Exito al remplazar la imagen')
        	} else {
            reply(`Envia o responde una imagen, con : ${prefix}sethumb`)
          	}
			addFilter(from)
            break	
	case 'setthumb':
	if (!isVerify) return reply(ind.noregis())
	if (!mek.key.fromMe) return fakestatus('❏ Este comando solo puede ser usado por mi')
	        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await FxBot.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/thumb.jpeg`, delb)
			fakestatus('Exito al remplazar la miniatura')
        	} else {
            reply(`Envia o responde una imagen, con : ${prefix}sethumb`)
          	}
			addFilter(from)
            break	
	 
case 'ban':
if (!isVerify) return reply(ind.noregis())
if (!isGroup) return reply(mess.only.group)
if (!mek.key.fromMe) return fakestatus('「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO POR MI')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.push(`${mentioned}`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
susp = `🚫@${mentioned[0].split('@')[0]} ha sido prohibido y ya no podrá usar comandos de bot🚫`
mentions(`${susp}`, mentioned, true)   
addFilter(from)
            break


case 'unban':
if (!isVerify) return reply(ind.noregis())
if (!isGroup) return reply(mess.only.group)
if (!mek.key.fromMe) return fakestatus('「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO POR MI')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${mentioned}`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
susp = `❎@${mentioned[0].split('@')[0]} se ha desbloqueado y puede volver a utilizar los comandos del bot❎`
mentions(`${susp}`, mentioned, true)   
addFilter(from)
            break
	
case 'emoji_samsung':
if (!isVerify) return reply(ind.noregis())
	num = body.slice(6)			 
			if (!q) return fakegroup('¿Y el emoji?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[2].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		addFilter(from)
            break
case 'emoji_microsoft':
if (!isVerify) return reply(ind.noregis())
			if (!q) return fakegroup('¿Y el emoji?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[3].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		addFilter(from)
            break
case 'emoji_whastapp':
if (!isVerify) return reply(ind.noregis())
			if (!q) return fakegroup('¿Y el emoji?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		addFilter(from)
            break
case 'emoji_twitter': 
if (!isVerify) return reply(ind.noregis())
			if (!q) return fakegroup('¿Y el emoji?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[5].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		addFilter(from)
            break

case 'emoji_facebook':
if (!isVerify) return reply(ind.noregis())
			if (!q) return fakegroup('¿Y el emoji?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[6].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		addFilter(from)
            break
            case 'leave':
                    if (!mek.key.fromMe && !isOwner) return reply(lang.onlyOwner())
					setTimeout( () => {
					FxBot.groupLeave (from) 
					
					}, 0)
					break       
case 'emoji_skype':
if (!isVerify) return reply(ind.noregis())
			if (!q) return fakegroup('¿Y el emoji?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[7].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		addFilter(from)
            break
case 'emoji_joypixels':
if (!isVerify) return reply(ind.noregis())
			if (!q) return fakegroup('¿Y el emoji?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[8].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		addFilter(from)
            break
case 'emoji_openmoji':
if (!isVerify) return reply(ind.noregis())
			if (!q) return fakegroup('¿Y el emoji?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[9].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		addFilter(from)
            break
case 'emoji_emojidex':
if (!isVerify) return reply(ind.noregis())
			if (!q) return fakegroup('¿Y el emoji?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[10].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		addFilter(from)
            break
case 'emoji3d':
case 'emoji3D':
if (!isVerify) return reply(ind.noregis())
			if (!q) return fakegroup('¿Y el emoji?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[11].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
   
    		addFilter(from)
            break


case 'loliv':
       case 'lolivid':
       case 'lolivideo':
              reply(mess.wait)
              anu = await fetchText('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/loli.txt')
             .then(async (body) => {
              anu = body.split('\n')
              anu = anu[Math.floor(Math.random() * anu.length)]
              sendMediaURL(from, anu)
})
             .catch(async (err) => {
              console.error(err)
              reply(`${err}`)
})
              break
case 'bc2':
      case 'broadcast2':
             if (!mek.key.fromMe) return 
             if (args.length < 1) return reply('¿Cual es el anuncio?')
             anu = await FxBot.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await FxBot.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             FxBot.sendMessage(_.jid, bc, image, {quoted:freply,caption: `*「 FX BOT ANUNCIO 」*\n\n${body.slice(4)}`})
}
             reply('¡Anuncio dado con éxito!')
             } else {
             for (let _ of anu) {
FxBot.sendMessage(_.jid, 
			{"contentText": `*「 FX BOT ANUNCIO 」*\n\n${body.slice(4)}`,
			"footerText": '© 𝐹𝑥𝐵𝑜𝑡',
			"buttons": [
			{"buttonId": `IFMENU`,
			"buttonText": {"displayText": "🐣 Gracias 🐣"
			},"type": "RESPONSE"}
			], "headerType": 1,
			}, MessageType.buttonsMessage )
}
             reply('¡Anuncio dado con éxito!')
}
             break
case 'tg': 
              
reply('Loading.... ')
 encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
media = await FxBot.downloadAndSaveMediaMessage(encmedia)
tolink = await uptotele(media)
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${tolink}`
sendStickerUrl(from, `${anu1}`)

break


case 'emoji_lg':
if (!isVerify) return reply(ind.noregis())
			if (!q) return fakegroup('¿Y el emoji?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[12].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		addFilter(from)
            break
case 'blocklist':
  if (!isVerify) return reply(ind.noregis())
      teks = ` ≡ *BLOQUEADOS*\nLos siguientes números son una lista de números bloqueados por infringir las reglas y enviar spam al Bot\n\n*Total* : ${blocked.length}\n┌───⊷ *LISTA* ⊶\n`
	    for (let block of blocked) {
	    teks += `├╼ @${block.split('@')[0]}\n`
					}
	    teks += `└──────────────`
	    FxBot.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
	addFilter(from)
					break
case 'emoji_htc':
if (!isVerify) return reply(ind.noregis())
			if (!q) return fakegroup('¿Y el emoji?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[13].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		addFilter(from)
            break
case 'melon':  
                   if (args.length < 1) return reply(`[❗] Ejemplo??\n*${prefix}${command} gatitos*`)
                   reply(mess.wait)
                   F = body.slice(6)				    
                   getBuffer(`https://api.zeks.me/api/unsplash?apikey=FELIXCRACKAPI409&q=${F}`)
                   FxBot.sendMessage(from, anu, image, {caption: `𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇`, quoted: mek })
                   addFilter(from)
            break 
	 
   case 'ocr':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await FxBot.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Menciona A Una Foto')
					}
					break
          case 'igstory': 
            if(!q) return reply('¿Usuario?')
            pape = q
            hx.igstory(pape)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    alpha.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    alpha.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
                }
            }
            });
            break

case 'pinterest':
            if(!q) return reply('¿Que deseas buscar?')
            pinya = q
            anu = await getBuffer(`https://fdz-app.herokuapp.com/api/pinterest?q=${pinya}`)
            alpha.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0), caption: `𝐵𝑦 𝐹𝑥𝐵𝑜𝑡𝑠🍡`, quoted: mek})
            break

case 'pinterest2':
		            if (args.length < 1) return reply('¿Que deseas buscar?')
		            const gimgg = args.join(' ');
		            reply(mess.wait)
		            gis(gimgg, async (error, result) => {
		            n = result
		            images = n[Math.floor(Math.random() * n.length)].url
		            alpha.sendMessage(from,{url:images},image,{quoted:mek})
		            });
		            break
case 'playstore':
            if(!q) return reply('¿Que deseas buscar?')
            let play = await hx.playstore(q)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 *PLAY STORE* 」*\n
- *Nombre* : ${i.name}
- *Enlace* : ${i.link}\n
- *Desarrollador* : ${i.developer}
- *Enlace del desarrollador* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break


    case 'image':
    if (!isVerify) return reply(ind.noregis())
            if (args.length < 1) return reply('¡Ingrese algo para buscar!')
            const gimg = args.join('');
            reply(mess.wait)
            gis(gimg, async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            FxBot.sendMessage(from,{url:images},image,{quoted:mek})
            });
            addFilter(from)
            break 
            
    case 'brainly':
    if (!isVerify) return reply(ind.noregis())
			if (args.length < 1) return reply('Que clase de pregunta es esa?')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '❉───────────────────────❉\n'
			for (let Y of res.data) {
			teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pregunta:* ${Y.pertanyaan}\n\n*➸ Respuesta:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			}
			FxBot.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
            })              
			addFilter(from)
            break
case 'ig':
case 'igdl':
case 'instagram':
if (!isVerify) return reply(ind.noregis())
const c = args.join(' ')
if (!c) return reply('¿Y el link?')
var { igDownloader } = require('./lib/igdown')
   res = await igDownloader(`${c}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from,`${res.result.link}`,`${res.result.desc}`)
                    addFilter(from)
            break
    case 'igstalk':
    if (!isVerify) return reply(ind.noregis())
            if (!q) return fakegroup('¿Nombre de usuario?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Nombre de usuario* : ${args.join('')}\n*Nombre completo* : ${Y.full_name}\n*BIO* : ${Y.biography}\n*Seguidores* : ${Y.followers}\n*Siguiendo* : ${Y.following}\n*Privado* : ${Y.is_private}\n*Verificado* : ${Y.is_verified}\n\n*Enlace* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            addFilter(from)
            break    
    case 'fb':
    if (!isVerify) return reply(ind.noregis())
            if (!q) return reply('¿Y el enlace?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
            reply(mess.wait)
            te = args.join(' ')
            fakestatus(mess.wait)
            Fb.getInfo(`${te}`)
            .then(G => {
            ten = `${G.download.sd}`
            tek = `${G.title}`
            sendMediaURL(from,ten,`*Título* : ${tek}\n\n*Enlace* : ${ten}`)
            })
            addFilter(from)
            break    
	case 'term':
	if (!mek.key.fromMe) return 
			if (!q) return fakegroup(mess.wrongFormat)
			exec(q, (err, stdout) => {
			if (err) return fakegroup(`SELF-BOT:~ ${err}`)
			if (stdout) {
			fakegroup(stdout)
			}
			})
		    addFilter(from)
            break 
    



   
//NSFW MENU 1
case 'loli':
if (!isNsfw) return reply(mess.nsfwoff)
		  anu = await axios.get('https://nekos.life/api/v2/img/neko')
				loliz = await getBuffer(anu.data.url)
				FxBot.sendMessage(from, loliz, image, {quoted: mek})
			addFilter(from)
            break
		case 'waifu':
		if (!isNsfw) return reply(mess.nsfwoff)
			waifud = await axios.get('https://nekos.life/api/v2/img/waifu')
			nyed = await getBuffer(waifud.data.url)
			FxBot.sendMessage(from, nyed, image, { caption: '𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇', quoted: mek })
			.catch(err => {
				return('Repitiendo hay un error...')
			})
			addFilter(from)
            break
case 'wallpaperanime':
	if (!isNsfw) return reply(mess.nsfwoff)
			wanime = await axios.get('https://nekos.life/api/v2/img/wallpaper')
			bufwanime = await getBuffer(wanime.data.url)
			FxBot.sendMessage(from, bufwanime, image, { quoted: mek })
			.catch(err => {
			return('Error 😔..')
			})
			addFilter(from)
            break
case 'nsfwavatar':
if (!isNsfw) return reply(mess.nsfwoff)
			anu = await axios.get('https://nekos.life/api/v2/img/nsfw_avatar')
				nsavatar = await getBuffer(anu.data.url)
				FxBot.sendMessage(from, nsavatar, image, {quoted: mek})
			.catch(err => {
			return('Error 😔..')
			})	
			addFilter(from)
            addFilter(from)
            break
case 'nekopoi':
if (!isNsfw) return reply(mess.nsfwoff)
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/nsfw_neko_gif')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				FxBot.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			addFilter(from)
            break

case 'pussy':
if (!isNsfw) return reply(mess.nsfwoff)
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/pussy')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				FxBot.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			addFilter(from)
            break
case 'pussyimage':
if (!isNsfw) return reply(mess.nsfwoff)
  pusiimg = await axios.get('https://nekos.life/api/v2/img/pussy_jpg')
			bufpusy = await getBuffer(pusiimg.data.url)
				FxBot.sendMessage(from, bufpusy, MessageType.image, {quoted: mek})
			.catch(err => {
			return('Error 😔..')
			})
			addFilter(from)
            break
case 'oppai':
if (!isNsfw) return reply(mess.nsfwoff)
			opai = await axios.get('https://nekos.life/api/v2/img/tits')
			opaiz = await getBuffer(opai.data.url)
			FxBot.sendMessage(from, opaiz, image, { quoted: mek })
			.catch(err => {
			return('El anuncio que cometió el error vuelve a intentarlo..')
			})
			addFilter(from)
            break
case 'feetg':
if (!isNsfw) return reply(mess.nsfwoff)
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/feetg')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				FxBot.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			addFilter(from)
            break
case 'bj':
if (!isNsfw) return reply(mess.nsfwoff)
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/bj')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				FxBot.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			addFilter(from)
            break
case 'ero':
if (!isNsfw) return reply(mess.nsfwoff)
			eroz = await axios.get('https://nekos.life/api/v2/img/ero')
			bufero = await getBuffer(eroz.data.url)
			FxBot.sendMessage(from, bufero, image, { quoted: mek })
			.catch(err => {
			return('El anuncio que cometió el error vuelve a intentarlo..')
			})
			addFilter(from)
            break
case 'erok':
if (!isNsfw) return reply(mess.nsfwoff)
			eroz = await axios.get('https://nekos.life/api/v2/img/erok')
			bufero = await getBuffer(eroz.data.url)
			FxBot.sendMessage(from, bufero, image, { quoted: mek })
			.catch(err => {
			return('El anuncio que cometió el error vuelve a intentarlo..')
			})
			addFilter(from)
            break
case 'erokemo':
if (!isNsfw) return reply(mess.nsfwoff)
			erokz = await axios.get('https://nekos.life/api/v2/img/erokemo')
			erokzs = await getBuffer(erokz.data.url)
			FxBot.sendMessage(from, erokzs, image, { quoted: mek })
			.catch(err => {
			return('Error 😔..')
			})
			addFilter(from)
            break
case 'eroyuri':
if (!isNsfw) return reply(mess.nsfwoff)
			eroyuriz = await axios.get('https://nekos.life/api/v2/img/eroyuri')
			buferoyu = await getBuffer(opai.data.url)
			FxBot.sendMessage(from, buferoyu, image, { quoted: mek })
			.catch(err => {
			return('Error 😔..')
			})
			addFilter(from)
            break
case 'tickle':
if (!isNsfw) return reply(mess.nsfwoff)
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/tickle')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				FxBot.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			addFilter(from)
            break
case 'feed':
if (!isNsfw) return reply(mess.nsfwoff)
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/feed')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				FxBot.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			addFilter(from)
            addFilter(from)
            break
case 'kuni':
if (!isNsfw) return reply(mess.nsfwoff)
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/kuni')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				FxBot.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			addFilter(from)
            break
case 'femdom':
if (!isNsfw) return reply(mess.nsfwoff)
      anu = await axios.get('https://nekos.life/api/v2/img/femdom')
			bupemdom = await getBuffer(anu.data.url)
				FxBot.sendMessage(from, bupemdom, image, {quoted: mek})
			.catch(err => {
			return('Error 😔..')
			})
			addFilter(from)
            break
case 'futanari':
if (!isNsfw) return reply(mess.nsfwoff)
			futan = await axios.get('https://nekos.life/api/v2/img/futanari')
			futanz = await getBuffer(futan.data.url)
			FxBot.sendMessage(from, futanz, image, { quoted: mek })
			addFilter(from)
            break
case 'les':
if (!isNsfw) return reply(mess.nsfwoff)
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/les')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				FxBot.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			addFilter(from)
            break
case 'trap':
if (!isNsfw) return reply(mess.nsfwoff)
			trapx = await axios.get('https://nekos.life/api/v2/img/tits')
			traps = await getBuffer(trapx.data.url)
			FxBot.sendMessage(from, traps, image, { quoted: mek })
			.catch(err => {
			return('Error 😔..')
			})
			addFilter(from)
            break
case 'pat':
if (!isNsfw) return reply(mess.nsfwoff)
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/pat')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				FxBot.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			addFilter(from)
            break
case 'boobs':
if (!isNsfw) return reply(mess.nsfwoff)
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/boobs')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				FxBot.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			addFilter(from)
            break
case 'blowjob':
if (!isNsfw) return reply(mess.nsfwoff)
			blowz = await axios.get('https://nekos.life/api/v2/img/blowjob')
			bufblowz = await getBuffer(blowz.data.url)
			FxBot.sendMessage(from, bufblowz, image, {quoted: mek})
			.catch(err => {
			return('Error 😔..')
			})
			addFilter(from)
            break
	case 'hentai':
	if (!isNsfw) return reply(mess.nsfwoff)
			hentaiz = await axios.get('https://nekos.life/api/v2/img/hentai')
			bufhtz = await getBuffer(hentaiz.data.url)
			FxBot.sendMessage(from, bufhtz, image, {quoted: mek})
			.catch(err => {
			return('Error 😔..')
			})
			addFilter(from)
            break
	case 'hololewed':
	if (!isNsfw) return reply(mess.nsfwoff)
			hololew = await axios.get('https://nekos.life/api/v2/img/hololewd')
			hololewx = await getBuffer(hololew.data.url)
			FxBot.sendMessage(from, hololewx, image, { quoted: mek })
			.catch(err =>{
			  return('Hazte Weón..')
			})
			addFilter(from)
            break
case 'lewd':
if (!isNsfw) return reply(mess.nsfwoff)
			lewdd = await axios.get('https://nekos.life/api/v2/img/lewd')
			buflewd = await getBuffer(lewdd.data.url)
			FxBot.sendMessage(from, buflewd, image, { quoted: mek })
			
			addFilter(from)
            break
	case 'lewdk':
	if (!isNsfw) return reply(mess.nsfwoff)
			lewdkk = await axios.get('https://nekos.life/api/v2/img/lewdk')
			lewdkz = await getBuffer(lewdkz.data.url)
			FxBot.sendMessage(from, lewdkz, image, { quoted: mek })
			.catch(err =>{
			  return('Hazte Weon😑🔪..')
			})
			addFilter(from)
            break

case 'lewdkemo':
			lewdkm = await axios.get('https://nekos.life/api/v2/img/lewdkemo')
			buflewd = await getBuffer(lewdkm.data.url)
			FxBot.sendMessage(from, buflewd, image, { quoted: mek })
			.catch(err => {
			return('Error 😔..')
			})
			addFilter(from)
            break
case 'goose':
if (!isNsfw) return reply(mess.nsfwoff)
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/goose')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				FxBot.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			addFilter(from)
            break
case 'solog':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/solog')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				FxBot.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			addFilter(from)
            break
case 'yuri':
if (!isNsfw) return reply(mess.nsfwoff)
			yuriz = await axios.get('https://nekos.life/api/v2/img/tits')
			bupyuri = await getBuffer(yuriz.data.url)
			FxBot.sendMessage(from, bupyuri, image, { quoted: mek })
			.catch(err => {
			return('Error 😔..')
			})
			addFilter(from)
            break
	case 'anal':
	if (!isNsfw) return reply(mess.nsfwoff)
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/anal')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				FxBot.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			addFilter(from)
            break		
case 'pwankg':
if (!isNsfw) return reply(mess.nsfwoff)
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/pwankg')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				FxBot.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			addFilter(from)
            break
case 'eron':
if (!isNsfw) return reply(mess.nsfwoff)
			eronz = await axios.get('https://nekos.life/api/v2/img/eron')
			buferon = await getBuffer(eronz.data.url)
			FxBot.sendMessage(from, buferon, image, { quoted: mek })
			.catch(err => {
			return('Error 😔..')
			})
			addFilter(from)
            break
case 'kiss':
if (!isNsfw) return reply(mess.nsfwoff)
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/kiss')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				FxBot.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			addFilter(from)
            break
case 'keta':
if (!isNsfw) return reply(mess.nsfwoff)
			ketaz = await axios.get('https://nekos.life/api/v2/img/keta')
			bufketa = await getBuffer(ketaz.data.url)
			FxBot.sendMessage(from, bufketa, image, { quoted: mek })
			.catch(err => {
			return('Error 😔..')
			})
			addFilter(from)
            break
case 'cum':
if (!isNsfw) return reply(mess.nsfwoff)
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/cum')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				FxBot.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			addFilter(from)
            break
case 'cumimage':
if (!isNsfw) return reply(mess.nsfwoff)
			cumjpg = await axios.get('https://nekos.life/api/v2/img/cum_jpg')
			bupjpg = await getBuffer(cumjpg.data.url)
			FxBot.sendMessage(from, bupjpg, image, { quoted: mek })
			.catch(err => {
			return('Error 😔..')
			})
			addFilter(from)
            break
case 'oppai':
if (!isNsfw) return reply(mess.nsfwoff)
			opai = await axios.get('https://nekos.life/api/v2/img/tits')
			opaiz = await getBuffer(opai.data.url)
			FxBot.sendMessage(from, opaiz, image, { quoted: mek })
			.catch(err => {
			return('Error 😔..')
			})
			addFilter(from)
            break
case 'holoero':
if (!isNsfw) return reply(mess.nsfwoff)
		holox = await axios.get('https://nekos.life/api/v2/img/holoero')
			bufholox = await getBuffer(holox.data.url)
			FxBot.sendMessage(from, bufholox, image, { quoted: mek })
			.catch(err => {
			return('Error 😔..')
			})
			addFilter(from)
            break
case 'neko':
if (!isNsfw) return reply(mess.nsfwoff)
			neko = await axios.get('https://nekos.life/api/v2/img/neko')
			nyed = await getBuffer(neko.data.url)
			FxBot.sendMessage(from, nyed, image, { caption: '𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇', quoted: mek })
			.catch(err => {
				return('Repitiendo hay un error...')
			})
			addFilter(from)
            break


case 'adminlist':
case 'admins':
case 'adminslista':
case 'listadmin':
if (!isVerify) return reply(ind.noregis())
 if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
					teks = `▢ Lista Admins Del Grupo *${groupMetadata.subject}*\n▢ Total : ${groupAdmins.length}\n▢ Mensaje:* ${body.slice(12)}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					addFilter(from)
            addFilter(from)
            break
case 'par':
if (!isVerify) return reply(ind.noregis())
                if (!isGroup) return reply(mess.only.group)
                reply(mess.wait)
				anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=dappakntlll`) 
				cowo = await getBuffer(anu.result.male)
				FxBot.sendMessage(from, cowo, image, {quoted: mek})
				cewe = await getBuffer(anu.result.female)
				FxBot.sendMessage(from, cewe, image, {quoted: mek})
				
				addFilter(from)
            addFilter(from)
            break
case 'bneon':
                case 'matrix':
                case 'breakwall':
                case 'dropwater': 
                case 'leavest':
                case 'logobp':
                case 'smoketext':
                if (!isVerify) return reply(ind.noregis())
                txt = args.join(" ")
                reply(mess.wait)                   
                buffer = await getBuffer(`https://api.zeks.xyz/api/${command}?apikey=FELIXCRACKAPI409&text=${txt}`)
                FxBot.sendMessage(from, buffer, image, {quoted: mek, sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}})
                	
                     addFilter(from)
            break
         
                    case 'crosslogo':                
                    case 'flowertext':
                    case 'silktext':                
                    case 'glowtext':
                    case 'skytext':
                    case 'cslogo':
                    case 'lithgtext':
                    case 'text3dbox': 
                    case 'sandw':
                    if (!isVerify) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Ejemplo de uso: ${prefix + command} texto\n\nEjemplo: ${prefix + command} Felixcrack`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    anu = await fetchJson(`https://api.zeks.xyz/api/${command}?apikey=FELIXCRACKAPI409&text=${txt}`, {method: 'get'})
                    tod = await getBuffer(anu.result)
                    FxBot.sendMessage(from, tod, image, {quoted: mek, sendEphemeral: true, contextInfo: { forwardingScore: 5008, isForwarded: true}})
                    
                    addFilter(from)
            break
case 'top5':
if (!isVerify) return reply(ind.noregis())
if (!isGroup) return reply(mess.only.group)
try{

d = []
top1 = body.slice(5)
teks = `️‍Top 5${top1}:\n`
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `️‍❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true, {quoted: mek})
} catch (e) {
console.log(e)
reply('Ocurrió Un Error')
}
addFilter(from)
            break
case 'tagall':
if (!isVerify) return reply(ind.noregis())
				if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
					var tes = mek.participant
					members_id = []
					teks = '\n'
					for (let mem of groupMembers) {
						teks += `├╼ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`*▢ Mensaje:* ${body.slice(8)}\n*▢ Grupo:*  ${groupName}\n*▢ Miembros:* ${groupMembers.length} \n*▢ Total De Admins:* ${groupAdmins.length}\n┌───⊷ *MENCIONES* ⊶`+teks+'└─────✪ FX ┃ ᴮᴼᵀ ✪───────* ', members_id, true)
					addFilter(from)
            break
					
case 'linkgc':
				case 'linkgp':
				case 'linkgrupo':
				case 'linkdogrupo':
				if (!isVerify) return reply(ind.noregis())
					if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				    linkgc = await FxBot.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink del grupo *${groupName}*`
				    FxBot.sendMessage(from, yeh, text, {quoted: txt1})
			        
					addFilter(from)
            break
case 'listonline':
if (!isVerify) return reply(ind.noregis())
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(FxBot.chats.get(ido).presences), FxBot.user.jid]
			    FxBot.sendMessage(from, 'Lista de usuarios en línea:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
			    })
			    
				addFilter(from)
            break
 
    case'twitter':
    if (!isVerify) return reply(ind.noregis())
            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
            if (!q) return fakegroup('¿Y el enlace?')
            ten = args[0]
            var res = await twitterGetUrl(`${ten}`)
            .then(g => {
            ren = `${g.download[2].url}`
            sendMediaURL(from,ren,'𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇 🍡')
            })
            addFilter(from)
            break
    
            case 'runtime':
            if (!isVerify) return reply(ind.noregis())
          FxBot.sendMessage(from, fs.readFileSync(`./stik/menu.webp`), sticker, {quoted: fimg, "forwardingScore": 9999, "isForwarded": true})
          addFilter(from)
            break
case 'kick':
if (!isVerify) return reply(ind.noregis())
          FxBot.sendMessage (from, 'El comando de eliminar miembros ah cambiado, en un momento se enviara un sticker...\n\n¿Como usar?\n\nCon el sticker solo etiqueta el mensaje de la persona a eliminar...', MessageType.text, {quoted: txt1, "forwardingScore": 9999, "isForwarded": true})
          FxBot.sendMessage(from, fs.readFileSync(`./stik/kick.webp`), sticker, {quoted: txt1, "forwardingScore": 9999, "isForwarded": true})
          addFilter(from)
            break



case '-adm':
case 'demote':

if (!isVerify) return reply(ind.noregis())
          FxBot.sendMessage (from, 'El comando de quitar admin a un miembro ah cambiado, en un momento se enviara un sticker...\n\n¿Como usar?\n\nCon el sticker solo etiqueta el mensaje de la persona para quitarle admin...', MessageType.text, {quoted: txt1, "forwardingScore": 9999, "isForwarded": true})
          FxBot.sendMessage(from, fs.readFileSync(`./stik/demote.webp`), sticker, {quoted: txt1, "forwardingScore": 9999, "isForwarded": true})
          addFilter(from)
            break


case '+adm':
case 'promote':
case 'daradm':
if (!isVerify) return reply(ind.noregis())
          FxBot.sendMessage (from, 'El comando de darle admin a un miembro ah cambiado, en un momento se enviara un sticker...\n\n¿Como usar?\n\nCon el sticker solo etiqueta el mensaje de la persona para darle admin...', MessageType.text, {quoted: txt1, "forwardingScore": 9999, "isForwarded": true})
          FxBot.sendMessage(from, fs.readFileSync(`./stik/promote.webp`), sticker, {quoted: txt1, "forwardingScore": 9999, "isForwarded": true})
          addFilter(from)
            break
	case 'speed':
	case 'ping':
	if (!isVerify) return reply(ind.noregis())
			const timestamp = speed();
			const latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
			fakegroup(pingnya)
			})
			addFilter(from)
            break  
    case 'totag':
    if (!isVerify) return reply(ind.noregis())
if (!isGroupAdmins) return reply('❬❗❭ *_Esᴛᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏʟᴏ ᴇsᴛᴀ ᴅɪsᴘᴏɴɪʙʟᴇs ᴘᴀʀᴀ ʟᴏs ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀᴇs..._*')
if (!isGroup)return reply('❬❗❭ *_Lᴏ ʟᴀᴍᴇɴᴛᴏ... ᴇʟ ʙᴏᴛ ɴᴏ ғᴜɴᴄɪᴏɴᴀ ᴇɴ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs......_*')
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await mek.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await mek.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            FxBot.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await mek.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await mek.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            FxBot.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await mek.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await mek.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4',
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            FxBot.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await mek.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await mek.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            FxBot.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          FxBot.sendMessage(from, `Menciona un sticker/imagen/video/audio junto al comando *${prefix}totag*` , MessageType.text, mek)
        }
        addFilter(from)
            break
case 'togif':
if (!isVerify) return reply(ind.noregis())
if (!isQuotedSticker) return reply('Responde un sticker')
reply(mess.wait)
if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const media = await FxBot.downloadAndSaveMediaMessage(encmedia)
const upload = await uploadimg(media, Date.now() + '.webp')
const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
const buff = await getBuffer(rume.data.result)
FxBot.sendMessage(from, buff, video, { mimetype: Mimetype.gif, caption: 'Nih', quoted: mek})
}
addFilter(from)
            break
				case 'toimg':
					if (!isVerify) return reply(ind.noregis())
			if (!isQuotedSticker) return reply('¡Responde a un sticker')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await FxBot.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Bueno, falló, inténtalo de nuevo ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵𝑂𝑇 🍡')
			fs.unlinkSync(ran)
			})
			addFilter(from)
            break 
    case 'tomp4':
case 'tovid':
    case 'tovideo':
    if (!isVerify) return reply(ind.noregis())
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await FxBot.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'𝐹𝑒𝑙𝑖𝑥𝑐𝑟𝑎𝑐𝑘 𝐵??𝑇 🍡')
            })
            }else {
            reply('Responde a un stiker')
            }
            fs.unlinkSync(owgi)
            addFilter(from)
            break
case 'grupo':
if (!isVerify) return reply(ind.noregis())
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
        
        txtt =`Hola ${pushname}\n\nSelecciona si quieres abrir o cerrar el grupo, recuerda que esa función solo es para los admins.\n\nSi no eres adm, no la uses por favor o seras eliminado del grupo...\nDepende del admin, Gracias.`

               gbutsan = [
  {buttonId: 'ABRIR GRUPO', buttonText: {displayText: 'ABRIR GRUPO'}, type: 1},
  {buttonId: 'CERRAR GRUPO', buttonText: {displayText: 'CERRAR GRUPO'}, type: 1},
]

               imageMsg = (await FxBot.prepareMessageMedia(fs.readFileSync(`./stik/thumb.jpeg`), 'imageMessage', {thumbnail: fs.readFileSync(`./stik/thumb.jpeg`)})).imageMessage

               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: '© FxBot Team 🍡\nApoyame suscribiendote', imageMessage: imageMsg,
               buttons: gbutsan,
               headerType: 4
}

               prep = await FxBot.prepareMessageFromContent(from,{buttonsMessage},{quoted: txt1})
               FxBot.relayWAMessage(prep)
               FxBot.sendMessage (from, 'Si no te aparecen los botones...\n\nPrueba con los comandos :\n\n#opengc = Para abrir el grupo.\n\n#closegc = Para cerrar el grupo. ', MessageType.text, {quoted: txt1, "forwardingScore": 9999, "isForwarded": true})
               FxBot.sendMessage (from, 'Un TIP por si no te aparecen los botones.\n\nSi usas WhatsApp MOD, ve a la pestaña de Mods, Despues a Pantalla De Conversación, finalmente en la sección donde dice Fotos, y en la sección que dice Grupo De Chat, desactivamos el que dice Foto Del Participante ( Si es que esta activada )', MessageType.text, {quoted: txt1, "forwardingScore": 9999, "isForwarded": true})
               addFilter(from)
            break
case 'closegc':
case 'closegp':
if (!isVerify) return reply(ind.noregis())
FxBot.updatePresence(from, Presence.composing)
if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
var nomor = mek.participant
const close = {
text: `Grupo cerrado por : @${nomor.split("@s.whatsapp.net")[0]}`,
contextInfo: {
mentionedJid: [nomor]
}
}
FxBot.groupSettingChange (from, GroupSettingChange.messageSend, true)
reply(close)
addFilter(from)
            break
case 'opengc':
case 'opengp':
if (!isVerify) return reply(ind.noregis())
FxBot.updatePresence(from, Presence.composing)
if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
var nomor = mek.participant
const open = {
text: `Grupo abierto por : @${nomor.split("@s.whatsapp.net")[0]}`,
contextInfo: {
mentionedJid: [nomor]
}
}
FxBot.groupSettingChange (from, GroupSettingChange.messageSend, false)
reply(open)
addFilter(from)
            break
    case 'troli':
    
                if (!mek.key.fromMe) return 
                for (let i = 0; i < args[0]; i++) {
                FxBot.sendMessage(from, `Punten !!!`, MessageType.extendedText,{ 
                 quoted: {
                key: {
                participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                },
                message: {
                orderMessage: {
                itemCount: 99999999,
                status: 1
                ,surface: 10,
                orderTitle: 'Bug Troly By MR. KR3M',
                sellerJid: '0@s.whatsapp.net'
                }}}}, 0)}
                addFilter(from)
            break
   case 'buggc' :
   if (!isVerify) return reply(ind.noregis())
                if (!mek.key.fromMe) return 
                for (let i = 0; i < args[0]; i++) {
                await FxBot.toggleDisappearingMessages(from, 0)
                reply(`Buf hecho con éxito`)
                }
                addFilter(from)
            break

      
    case 'tourl':
            case 'imgtourl':
            if (!isVerify) return reply(ind.noregis())
            reply(mess.wait)
            var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            var jnckk = await  FxBot.downloadAndSaveMediaMessage(encmedia)
            var imgbb = require('imgbb-uploader')
            imgbb('3b8594f4cb11895f4084291bc655e510', jnckk)
            .then(data => {
            var caps = `
╭─「 IMGBB TO URL 」
│
├• ID : ${data.id}
├• MimeType : ${data.image.mime}
├• Extension : ${data.image.extension}
│
├• URL : ${data.display_url}
╰─────────────────────`
            ibb = fs.readFileSync(jnckk)
            FxBot.sendMessage(from, ibb, image, { quoted: mek, caption: caps })
            })
            .catch(err => {
            throw err 
            })
            addFilter(from)
            break
case 'simi':
case 'bot':
if (args.length < 1) return reply(`Use ${prefix}simi texto`)
try { 
	X = body.slice(4)
anu = await fetchJson(`https://api.simsimi.net/v2/?text=${X}&lang=es`, {method: 'get'})
if (anu.error) return reply('No puedo leer lo que no existe 🐤 (habla weon)')
FxBot.sendMessage(from, `${anu.success} 🐤`, text, {quoted: mek})
} catch {
reply("Hubo una falla en mi sistema 😣")
}
addFilter(from)
            break

    case 'inspeccionar':
    if (!isVerify) return reply(ind.noregis())
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            if (!q) return reply('Ingresa el enlace del grupo a inspeccionar')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('Asegúrate de el enlace sea correcto')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await FxBot.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*ID* : ${id}
${owner ? `*Creador del grupo* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nombre del grupo* : ${subject}
*Fecha de creación* : ${formatDate(creation * 1000)}
*Miembros* : ${size}
${desc ? `*Descripción* : ${desc}` : '*Desc* : No Hay'}
*ID De la descripción* : ${descId}
${descOwner ? `*Última modificación de la descripción* : @${descOwner.split('@')[0]}` : '*Descripción modificada por* : -'}\n*Fecha* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n`
           for ( let y of participants) {
            par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Si' : 'No'}\n`
            jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
            }
            jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
            jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
            FxBot.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
            } catch {
            reply('El link esta incorrecto.')
            }
            addFilter(from)
            break



case 'restart':
case 'reiniciar':
 if (!mek.key.fromMe) return reply("¡Solo yo puedo usar ese comando!");
reply('_Reiniciando bot...')
exec(`node index`)
setTimeout( () => {
					reply ('_1_') 
					}, 3000) // 1000 = 1s,
					setTimeout( () => {
					reply('_2_') 
					}, 2000) // 1000 = 1s,
					setTimeout( () => {
					reply('_3_') 
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					reply('Bot reiniciado exitosamente.')
					},4000) // 1000 = 1s,
addFilter(from)
            break
case "autojoin":
        
     
     
        if (!mek.key.fromMe) return reply("¡Solo yo puedo usar ese comando!");
        if (args[0] == "Auto_Join_On") {
          if (autojoin == true) return reply('Ya estaba activo 🙄')  
          autojoin = true 
          reply('Auto-Join se ah activado con éxito✔️')
        } else if (args[0] == "Auto_Join_Off") {
          autojoin = false
          reply('Auto-Join se ah desactivado con éxito✔️')
        } else if (!q) {
          sendButMessage(from, `MODO AUTO-JOIN\n\Com esta función, la persona que te envie un enlace de un grupo de WhatsApp, el bot entrara automáticamente a ese grupo\n\nBy FxBot.`, `¡Elige una opción!`, [
            {
              buttonId: `${prefix}Auto_Join_On`,
              buttonText: {
                displayText: `Auto_Join_On`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}Auto_Join_Off`,
              buttonText: {
                displayText: `Auto_Join_Off`,
              },
              type: 1,
            },
          ]);
        }
        addFilter(from)
            break



            


case 'autosticker':   
if (!isVerify) return reply(ind.noregis())
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (args.length < 1) return reply(`≡ _¿Cómo activar el Auto-Sticker?_\n\n┌─⊷ *AUTO-STICKER* ⊶\n├▢ 1 para activar\n├▢ 0 para desactivar\n└─────────────\n\n≡ Ejemplo :\n\n${prefix}autosticker 1`)
if (args[0] === '1') {                             
	if (isAutoSt) return reply('Ya estaba activo 🙄')  
	autostick.push(from)             
	fs.writeFileSync('./database/autostik.json', JSON.stringify(autostick))      
	reply('▢ El Auto-Sticker se ah activado con éxito. ✔️')
	reply('▢ Ahora cada imagen que se envíe sera convertida automáticamente en sticker.')
} else if (args[0] === '0') {           
	var ini = autostick.indexOf(from)
	autostick.splice(ini, 1)                  
	fs.writeFileSync('./database/autostik.json', JSON.stringify(autostick))      
	reply('▢ El Auto-Sticker se ah desactivado con éxito. ✔️')
} else {                                
	reply(`≡ _¿Cómo activar el Auto-Sticker?_\n\n┌─⊷ *AUTO-STICKER* ⊶\n├▢ 1 para activar\n├▢ 0 para desactivar\n└─────────────\n\n≡ Ejemplo :\n\n${prefix}autosticker 1`) 
}                          
addFilter(from)
            break
case 'welcome':

if (!isVerify) return reply(ind.noregis())
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply(`≡ _¿Cómo activar la bienvenida?_\n\n┌─⊷ *BIENVENIDA* ⊶\n├▢ 1 para activar\n├▢ 0 para desactivar\n└─────────────\n\n≡ Ejemplo :\n\n${prefix}welcome 1`) 
					if (Number(args[0]) === 1) {
					if (isWelkom) return reply('Ya estaba activo 🙄')
				    welkom.push(from)
					fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
					reply('▢ La bienvenida se ah activado con éxito. ✔️')
					} else if (Number(args[0]) === 0) {
					welkom.splice(from, 1)
					fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
					reply('▢ La bienvenida se ah desactivado con éxito. ✔️')
					} else {
					reply(`≡ _¿Cómo activar la bienvenida?_\n\n┌─⊷ *BIENVENIDA* ⊶\n├▢ 1 para activar\n├▢ 0 para desactivar\n└─────────────\n\n≡ Ejemplo :\n\n${prefix}welcome 1`) 
					}
                    addFilter(from)
            break
case 'antitrava':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply('El bot necesita ser administrador del grupo!')
if (args.length < 1) return reply(`≡ _¿Cómo activar la Anti-Trava?_\n\n┌─⊷ *ANTI-TRAVA* ⊶\n├▢ 1 para activar\n├▢ 0 para desactivar\n└─────────────\n\n≡ Ejemplo :\n\n${prefix}antitrava 1`) 
if (args[0] === "1") {
if (AntiVirtex) return reply('Ya estaba activo 🙄')
antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
reply('▢ La Anti-Trava se ah activado con éxito. ✔️')
} else if (args[0] === "0") {
if (!AntiVirtex) return reply('Está muerto.')
let off = antivirtex.indexOf(from)
antivirtex.splice(off, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
reply('▢ La Anti-Trava se ah desactivado con éxito✔️')
} else {
reply(`≡ _¿Cómo activar la Anti-Trava?_\n\n┌─⊷ *ANTI-TRAVA* ⊶\n├▢ 1 para activar\n├▢ 0 para desactivar\n└─────────────\n\n≡ Ejemplo :\n\n${prefix}antitrava 1`) 
}
addFilter(from)
            break

case 'nsfw':
					if (!isVerify) return reply(ind.noregis())
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
				if (args.length < 1) return reply(`≡ _¿Cómo activar el NSFW?_\n\n┌─⊷ *NSFW* ⊶\n├▢ 1 para activar\n├▢ 0 para desactivar\n└─────────────\n\n≡ Ejemplo :\n\n${prefix}nsfw 1`) 
				if (Number(args[0]) === 1) {
				if (isNsfw) return reply('Ya estaba activo 🙄')
				nsfw.push(from)
				fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
				reply('▢ La función NSFW se ah activado con éxito✔️')
				} else if (Number(args[0]) === 0) {
				nsfw.splice(from, 1)
				fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
				reply('▢ La función NSFW se ah desactivado con éxito✔️')
				} else {
				reply(`≡ _¿Cómo activar el NSFW?_\n\n┌─⊷ *NSFW* ⊶\n├▢ 1 para activar\n├▢ 0 para desactivar\n└─────────────\n\n≡ Ejemplo :\n\n${prefix}nsfw 1`) 
				}
				addFilter(from)
            break
case 'antifake':
if (!isVerify) return reply(ind.noregis())
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply(`≡ _¿Cómo activar el Anti-Fake?_\n\n┌─⊷ *ANTI-FAKE* ⊶\n├▢ 1 para activar\n├▢ 0 para desactivar\n└─────────────\n\n≡ Ejemplo :\n\n${prefix}antifake 1`) 
					if (Number(args[0]) === 1) {
						if (isAntiFake) return reply('Ya estaba activo 🙄')  
						antifake.push(from)
						fs.writeFileSync('./database/antifake.json', JSON.stringify(antifake))
						reply('▢ El Anti-Fake se ah activado con éxito✔️')
						FxBot.sendMessage (from, '▢ El AntiFake elimina a los siguientes numeros\n\n+1\n+994\n+380\n+62\n+61\n+81\n+371...', MessageType.text, {quoted: txt1, "forwardingScore": 9999, "isForwarded": true})
						
						
						
						
						
					} else if (Number(args[0]) === 0) {
						antifake.splice(from, 1)
						fs.writeFileSync('./database/antifake.json', JSON.stringify(antifake))
						reply('▢ El Anti-Fake se ah desactivado con éxito✔️')
					} else {
						reply(`≡ _¿Cómo activar el Anti-Fake?_\n\n┌─⊷ *ANTI-FAKE* ⊶\n├▢ 1 para activar\n├▢ 0 para desactivar\n└─────────────\n\n≡ Ejemplo :\n\n${prefix}antifake 1`) 
					}
					addFilter(from)
            break


case 'antilink':
if (!isVerify) return reply(ind.noregis())
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (args.length < 1) return reply(`≡ _¿Cómo activar el Anti-Enlace?_\n\n┌─⊷ *ANTI-ENLACE* ⊶\n├▢ 1 para activar\n├▢ 0 para desactivar\n└─────────────\n\n≡ Ejemplo :\n\n${prefix}antilink 1`)
if (args[0] === '1') {                             
						if (isAntiLink) return reply('Ya estaba activo 🙄')  
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('▢ El Anti-Enlace se ah activado con éxito. ✔️')
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('Anti-Enlace desactivado.')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('▢ El Anti-Enlace se ah desactivado con éxito. ✔️')
					} else {
						reply('≡ _¿Cómo activar el Anti-Enlace?_\n\n┌─⊷ *ANTI-ENLACE* ⊶\n├▢ 1 para activar\n├▢ 0 para desactivar\n└─────────────\n\n≡ Ejemplo :\n\n${prefix}antilink 1`)reply(`≡ _¿Cómo activar el Anti-Enlace?_\n\n┌─⊷ *ANTI-ENLACE* ⊶\n├▢ 1 para activar\n├▢ 0 para desactivar\n└─────────────\n\n≡ Ejemplo :\n\n${prefix}antilink 1')
					}
					addFilter(from)
            break


 
case 'antilinkmax':
if (!isVerify) return reply(ind.noregis())
					if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (args.length < 1) return reply(`≡ _¿Cómo activar el Anti-Enlace?_\n\n┌─⊷ *ANTI-ENLACE-MAX* ⊶\n├▢ 1 para activar\n├▢ 0 para desactivar\n└─────────────\n\n≡ Ejemplo :\n\n${prefix}antilinkmax 1`)
if (args[0] === '1') {                             
						if (isAntiLinkMax) return reply('Ya estaba activo 🙄')  
						antilinkmax.push(from)
						fs.writeFileSync('./database/antilinkmax.json', JSON.stringify(antilinkmax))
						reply('▢ El Anti-Enlace-Max se ah activado con éxito. ✔️')
						reply('▢ El Anti-Enlace-Max elimina a cualquier miembro que mande un link.\nMientras tanto, el Anti-Enlace Normal, solo elimina a quien mande links de WhatsApp.')
					} else if (Number(args[0]) === 0) {
						if (!isAntiLinkMax) return reply('▢ El Anti-Enlace-Max se ah desactivado con éxito. ✔️')
						var ini = antilinkmax.indexOf(from)
						antilinkmax.splice(ini, 1)
						fs.writeFileSync('./database/antilinkmax.json', JSON.stringify(antilinkmax))
						reply('▢ El Anti-Enlace-Max se ah desactivado con éxito. ✔️')
					} else {
						reply(`≡ _¿Cómo activar el Anti-Enlace?_\n\n┌─⊷ *ANTI-ENLACE-MAX* ⊶\n├▢ 1 para activar\n├▢ 0 para desactivar\n└─────────────\n\n≡ Ejemplo :\n\n${prefix}antilinkmax 1`)
					}
					addFilter(from)
            break
case '1':
		FxBot.sendMessage(from, { text: "Test1", matchedText: 'https://chat.whatsapp.com/LP5ftc6uXSGHaWOCG2VVym', description: "", title: "¡No hagas clic aquí!!!", jpegThumbnail: fakeperfil }, 'extendedTextMessage', { detectLinks: false, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: finv})
		addFilter(from)
            break

case 'ttg':
              if (!q) return await reply(mess.wrongFormat)
              reply(mess.wait)
              sendWebp(from, `https://api.vhtear.com/textxgif?text=${q}&apikey=FauzanBotz`)
             .then(() => console.log('Success creating GIF!'))
             .catch(async (err) => {
              console.error(err)
              reply('Error!')
})
              break   
                    
case 'creditos':
if (!isVerify) return reply(ind.noregis())
 listMsg = {
 buttonText: '🇨 🇷 🇪 🇩 🇮 🇹 🇴 🇸 ',
 footerText: '*_© FxBot Team 🍡_*',
 description: `Creador, Y Colaboradores De FxBot.`,
 sections: [
                     {
                      "title": `${jmn} - ${calender}`,
 rows: [
                          {
                              "title": "Fᴇʟɪxᴄʀᴀᴄᴋ 409",
                              "description": '\nCreador de FxBot',
                              "rowId": ""
                           },
                           {
                              "title": "Kᴇᴠɪɴ",
                              "description": '\nAyuda en general',
                              "rowId": ""
                           },
                           {
                              "title": "Aɪᴅᴇɴ",
                              "description": '\nHost = VPS',
                              "rowId": ""
                           },
                            {
                              "title": "Tᴏᴍɪᴋᴏ",
                              "description": '',
                              "rowId": ""
                           },
                           {
                              "title": "Cʀɪsᴛʜɪᴀɴ | Dʀᴇᴀᴍs",
										"description": "Ayuda en general",
										               "rowId": ""
										},
										{
												"title": "MʜᴀɴᴋBᴀʀBAʀ | JS",
										"description": "Ejemplo de ayuda en el bot",
										"rowId": ""
                           },
         
                           {
                              "title": "Dʀᴀᴄᴋ",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
FxBot.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted: txt1})
addFilter(from)
            break

case 'creditosbhbbb':
if (!isVerify) return reply(ind.noregis())
       menu = `
╭──❒ 「 CRÉDITOS 」 ❒
│ ⬡ Felixcrack 409 
│ ⬡ Sr Huevos De Acero 
│ ⬡ Aiden 
│ ⬡ 
│ ⬡ 
╰─────❏
`
sendButLocation(from, `${menu}`, "*_© FxBot_*", {jpegThumbnail:fakeimg}, [{buttonId:`${prefix}test1`,buttonText:{displayText:'TEST 1'},type:1},{buttonId:`${prefix}test2`,buttonText:{displayText:'TEST 2'},type:1},{buttonId:`${prefix}test3`,buttonText:{displayText:'TEST 3'},type:1}], {contextInfo: { mentionedJid: [sender]}})
addFilter(from)
            break
//VERIFICACIÓN 
          case 'verify':
			if (isVerify) return reply(' ✳️ *Tu cuenta ya está en mi base de datos* 😐')
					
				_user.push(sender)
fs.writeFileSync('./database/registered.json', JSON.stringify(_user))
try {
ppimg = await FxBot.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
capt = `╭──「 *VERIFICADO* 」
├ *Nombre:* _${pushname}_
├ *Num:* _wa.me/${sender.split("@")[0]}_
├ *Hora:* _${jam}_
├ *Usuarios Verificados:* _${_user.length}_
╰─────「 *${FxBot.user.name}* 」
\nVerificación completa usa *${prefix}Help* para ver el Menu`

daftarimg = await getBuffer(ppimg)
FxBot.sendMessage(from, daftarimg, image, {quoted: mek, caption: capt})
break

case 'test2':
const serialUser = createSerial(20)
try {
					ppimg = await FxBot.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
veri = sender
                if (isGroup) {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    let buff = `╭──「 *VERIFICADO* 」
├ *Nombre:* _${pushname}_
├ *Num:* _wa.me/${sender.split("@")[0]}_
├ *Hora:* _${jam}_
├ *Usuarios Verificados:* _${_user.length}_
╰─────「 *${FxBot.user.name}* 」
\nVerificación completa usa *${prefix}Help* para ver el Menu`

                    await FxBot.sendMessage(from, ppimg, image, {quoted: mek, caption: buff})
                    addATM(sender)
                    addLevelingId(sender)
                    checkLimit(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                   } else {
                    addRegisteredUser(sender, serialUser)
                    await FxBot.sendMessage(from, buff, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    addATM(sender)
                    addLevelingId(sender)
                    checkLimit(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                   }
              				break			
				
case 'banchat':
if (!isGroup) return reply(mess.only.group)
if (!mek.key.fromMe) return 
if (args.length < 1) return reply('「 ❗ 」 1 Para Activar, 0 Para Desactivar')
if (Number(args[0]) === 1) {
if (isBanchat) return reply(`ya en ban`)
bancht.push(from)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`❌ Este chat ah sido baneado⚠️`)
} else if (Number(args[0]) === 0) {
bancht.push(from, 1)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`❌ Este chat ah sido desbaneado⚠️`)
} else {
reply('「 ❗ 」 1 Para Habilitar Y 0 Para Desactivar')
}
break
case 'test':
_user.push(sender)
fs.writeFileSync('./database/registered.json', JSON.stringify(_user))
try {
ppimg = await FxBot.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
menu = `╭──「 *VERIFICADO* 」
├ *Nombre:* _${pushname}_
├ *Num:* _wa.me/${sender.split("@")[0]}_
├ *Hora:* _${jam}_
├ *Usuarios Verificados:* _${_user.length}_
╰─────「 *${FxBot.user.name}* 」
\nVerificación completa usa *${prefix}Help* para ver el Menu`

daftarimg = await getBuffer(ppimg)

sendButLocation(from, menu, "*_© FxBot_*", {jpegThumbnail: ppimg }, [{buttonId:`${prefix}test1`,buttonText:{displayText:'TEST 1'},type:1},{buttonId:`${prefix}test2`,buttonText:{displayText:'TEST 2'},type:1},{buttonId:`${prefix}test3`,buttonText:{displayText:'TEST 3'},type:1}], {contextInfo: { mentionedJid: [sender]}})
addFilter(from)

break
case 'test1':
_user.push(sender)
fs.writeFileSync('./database/registered.json', JSON.stringify(_user))
try {
ppimg = await FxBot.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
menu = `Ola`
daftarimg = await getBuffer(ppimg)
        sendButImage(from, menu, "Sígueme en YT", daftarimg, [
          {
            buttonId: `VERIFY`,
            buttonText: {
              displayText: `VERIFY`,
            },
            type: 1,
          },
        ])

        break
case 'coinflip':
if (!isVerify) return reply(ind.noregis())    	
dineroapostadoo = args.join(" ")
if (dineroapostadoo < 1) return reply('*¿Cuanto deseas apostar?*')
  if(isNaN(dineroapostadoo)) return await reply('¡La cantidad debe ser un número!')
const dap = checkATMuser(sender)
const daps = [`${dap}`]

if (daps < dineroapostadoo) return reply(`¡Lo siento, FxCoins!.`)
confirmATM(sender, dineroapostadoo)
const cgn = ['82','93','5','10','10','30','10','5','10','10','5','10','5','10','10','5','10','5','10','10']
const ccgn = cgn[Math.floor(Math.random() * cgn.length)]

fli = `ᐅ La moneda aterrizo en: *CARA*.
Perdiste ${dineroapostadoo} coins`
if (ccgn < 15) return reply(fli)
fee = 5 * dineroapostadoo
addKoinUser(sender, fee)
flip = `ᐅ La moneda aterrizo en: *CRUZ*.
Ganaste ${fee} coins`
reply(flip)
addFilter(from)
          break
case 'roulette':
	case 'ruleta':
	case 'suerte':
	
	if (!isVerify) return reply(ind.noregis())    	
     const dinn = ['1']    
  const holi = dinn[Math.floor(Math.random() * dinn.length)]
 if (holi < 1) return reply(`★᭄ꦿ𝐑𝐎𝐔𝐋𝐄𝐓𝐓𝐄💸

-🥀Lo siento @${sender.split[0]}\n\nHas perdido, no recibes ningún premio\n\nGracias por jugar.`)
reply(`★᭄ꦿ𝐑𝐔𝐋𝐄𝐓𝐀💸

-🥀Felicidades @${sender.slip[p0]}\n\nHas ganado : ¡ 1000 FxCoins ! 🎉 `)
addKoinUser(sender, 1000)
addFilter(from)
          break
case 'leveling':
			                if (!isVerify) return reply(ind.noregis())
                if (!isGroup) return reply(mess.only.group)
		     if (!isGroupAdmins) return reply(mess.only.admin)			
                if (args.length < 1) return reply('⚠️ 1 Para activar, 0 para desactivar...')
                if (args[0] === '1') {
                if (isLevelingOn) return reply('Ya estaba activo 🙄')  
                 	   _leveling.push(from)
                 	   fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
                  	   reply(ind.lvlon())
              	  } else if (args[0] === '0') {
                  	  _leveling.splice(from, 1)
                 	   fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
                 	    reply(ind.lvloff())
             	   } else {
                 	   reply(ind.satukos())
                	}
				addFilter(from)
          break 
          case 'cartera':
				case 'catera':
				case 'cartea':
				case 'cartra':
				
				if (!isVerify) return reply(ind.noregis())
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong))
				addFilter(from)
          break
case 'attp':
  if (!isVerify) return reply(ind.noregis())
if (args.length < 1) return reply(`Ejemplo de uso: ${prefix}attp Felixcrack`)
attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(body.slice(5))}`)
FxBot.sendMessage(from, attp2, sticker, {quoted: mek})
addFilter(from)
addFilter(from)
            break
case 'level':
				
                if (!isVerify) return reply(ind.noregis())
                if (!isLevelingOn) return reply(ind.lvlnoon())
			     if (!isGroup) return reply(mess.only.group)			     
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `┏━━❉ *LEVEL* ❉━━\n┣⊱ *Nombre* : ${pushname}\n┣⊱ Numero : wa.me/${sender.split("@")[0]}\n┣⊱ User XP :  ${userXp}/${requiredXp}\n┣⊱ User Level : ${userLevel}\n┗━━━━━━━━━━━━`
                costum(resul, text, tescuk, per)
				addFilter(from)
          break 
case 'trabajar':
           if (!isVerify) return reply(ind.noregis())
           FxBot.updatePresence(from, Presence.composing)   
           const trbjj = ['300','500','250','400','150']    		
           const trbjar = trbjj[Math.floor(Math.random() * trbjj.length)]                  			      		
           addKoinUser(sender, trbjar)
           reply(`*Trabajaste y Ganaste *${trbjar}* FxCoins*`)

          break















case 'random':

             		var group3 = await FxBot.groupMetadata(from)
        				var member3 = group3['participants']
        				var mem3 = []
        				member3.map( async adm => {
	        			mem3.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				        let randomv = mem3[Math.floor(Math.random() * mem3.length)]
        				console.log(randomv)
        				FxBot.sendMessage(from, `╔✯〘 Te han seleccionado! 〙✯═ \n\n @${randomv.split('@')[0]}\n\n═✯〘 Para: ${body.slice(8)} 〙✯═`, text, {quoted : mek , contextInfo: {mentionedJid : [randomv], "forwardingScore": 999, "isForwarded": true}})
        				break

case 'video':
if (args.length === 0) return reply(`⬡ Descargar Video\n\n¿Como usar?\n\nEjemplo : ${prefix}video Control NCS`)
            var srch = args.join('')
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url                            
                  try {
                    ytv(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*🤓Titulo*: ${title}\n*⏭️Extensión*:MP3\n*File⚖️Tamaño*:${filesizeF}\n*Link* : ${a.data}\n\n_ESPERE ENVIANDO ARCHIVO, NO SPAMES LA CONCHA DE TU MADRE_`)
		                        const captions = `*PLAY VIDEO*\n\n*🤓Titulo*: ${title}\n*⏭️Extensión*:MP4\n*⚖️Tamaño*:${filesizeF}\n*Link* : ${a.data}\n\n_ESPERE ENVIANDO ARCHIVO, NO SPAMES LA CONCHA DE TU MADRE_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   addFilter(from)
            break
 case 'play':
if (args.length === 0) return reply(`⬡ Descargar Música\n\n¿Como usar?\n\nEjemplo : ${prefix}play Control NCS`)
			 
			
            var srch = args.join('')
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*DESCARGADOR DE MUSICA BY FELIXCRACK*\n\n*🤓Titulo*: ${title}\n*⏭️Extensión*: MP3\n*⚖️Tamaño*: ${filesizeF}\n*📎Link* : ${a.data}\n\n_ESPERE ENVIANDO ARCHIVO, NO SPAMES LA CONCHA DE TU MADRE_`)
		                        const captions = `*DESCARGADOR DE MUSICA BY FELIXCRACK*\n\n*🤓Titulo*: ${title}\n*⏭️Extensión*: MP3\n*⚖️Tamaño*: ${filesizeF}\n*📎Link*: ${a.data}\n\n_ESPERE ENVIANDO ARCHIVO, NO SPAMES LA CONCHA DE TU MADRE_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   addFilter(from)
            break  
                   
                   
                   case 'ytmp4hd':
     case 'ythd':
             
            if (args.length === 0) return reply(`Hola, esta es la forma correcta para su uso \n\nEjemplo*/ytmp4 https://youtube.com...*`)
            let isLinkks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLinkks2) return reply(mess.error.Iv)
            try {
            reply(mess.wait)
            ythd(args[0])
           .then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res
            axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
           .then((a) => {
            if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, 
`┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Datos obtenidos con éxito!*
\`\`\`🐥 Título : ${title}\`\`\`
\`\`\`🐥 Calidad* : 720p\`\`\`
\`\`\`🐥 Tamaño* : ${filesizeF}\`\`\`
\`\`\`🐥 Enlace* : ${a.data}\`\`\`

_Para la duración de más del límite se presenta en forma de enlace_`)

            const captionsYtmp4 = 
`┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*¡Datos obtenidos con éxito!*
\`\`\`🐥 Título : ${title}\`\`\`
\`\`\`🐥 Calidad : 720p\`\`\`
\`\`\`🐥 Tamaño : ${filesizeF}\`\`\`

_Espere a que se envíe el archivo multimedia; puede tardar unos minutos_`

              sendMediaURL(from, thumb, captionsYtmp4)
              sendMediaURL(from, dl_link,`nih kak`).catch(() => reply(mess.error.api))
})		
})
              } catch (err) {
              reply(`eror`)
}
              break



case 'ytdl':
					case 'playyyyyyyyyu':
			  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://FxBot-chan02.github.io`)
              if (!isVerify) return reply(ind.noregis())
if (!q) return reply('¿Y el enlace?')
			 res = await yts(q)
			   let thumbInfo = ` 
*YouTube*
 *🐥 Título :* ${res.all[0].title}
 *🐣 ID Del Video :* ${res.all[0].videoId}
 *🐤 Subido en :* ${res.all[0].ago}
 *🐥 Vistas :* ${res.all[0].views}
 *🐣 Duración :* ${res.all[0].timestamp}
 *🐤 Canal :* ${res.all[0].author.name}
 *🔗 Link Del Canal :* ${res.all[0].author.url}
`
buttons = [{buttonId:`${prefix}ytmp4 ${q}`,buttonText:{displayText:'🎥VIDEO'},type:1},{buttonId:`${prefix}ytmp3 https://www.youtube.com/watch?v=${res.all[0].videoId}`,buttonText:{displayText:'🎵AUDIO'},type:1}]

imageMessage = (await FxBot.prepareMessageMedia({url:res.all[0].image},'imageMessage',{thumbnail:Buffer.alloc(0)})).imageMessage

buttonsMessage = {contentText: thumbInfo,footerText:'¡Selecciona tu tipo de descarga!',imageMessage,buttons,headerType:4}

prep = await FxBot.prepareMessageFromContent(from,{buttonsMessage},{})

FxBot.relayWAMessage(prep)
break

case 'ytmp3':
			if (args.length === 0) return reply(`Ejemplo: *${prefix}video* _El link del video para descargar`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*DESCARGADOR DE AUDIO BY FELIXCRACK*\n\n*🤓Titulo*: ${title}\n*⏭️Extensión*:MP3\n*⚖️Tamaño*:${filesizeF}\n*Link* : ${a.data}\n\n_Para la duración de más del límite se presenta en forma de enlace_`)
						const captions = `*DESCARGADOR DE AUDIO BY FELIXCRACK*\n\n*🤓Titulo*: ${title}\n*⏭️Extensión*:MP3\n*⚖️Tamaño*:${filesizeF}\n\n_ESPERE ENVIANDO ARCHIVO, NO SPAMES LA CONCHA DE TU MADRE_`
				sendMediaURL(from, thumb, captions)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})
				})
				} catch (err) {
				reply(mess.error.api)
				}
				addFilter(from)
            break
case 'hacked':
              if (!isGroup) return reply(mess.only.group)
              reply('𝓑𝔂 𝓕𝔁𝓑𝓸𝓽')
                tessgc = await getBuffer(`https://i.ibb.co/m4Qx3JG/20210319-204838.jpg`)
                   FxBot.updateProfilePicture (from, tessgc)
                   await sleep(1000)
                FxBot.groupUpdateSubject(from, `HACKED BY FXBOT`)
                await sleep(1000)
                FxBot.groupUpdateDescription(from, `_${pushname} HACKED BY FXBOT_`)
                await sleep(1000)
                FxBot.sendMessage(from, 'Hackeado con éxito', text, {quoted: mek})
					addFilter(from)
            break
 		case 'ytmp4':
			if (args.length === 0) return reply(`Enviar  comando *${prefix}ytmp4 [linkYt]*`)
			let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks2) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				ytv(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*DESCARGADOR DE VIDEO BY FELIXCRACK*\n\n*🤓Titulo*: ${title}\n*⏭️Extensión*:MP3\n*File⚖️Tamaño*:${filesizeF}\n*Link* : ${a.data}\n\n_Para la duración de más del límite se presenta en forma de enlace_`)
						const captionsYtmp4 = `*Video Encontrado!*\n\n*🤓Titulo*: ${title}\n*⏭️Extensión*:MP4\n*⚖️Tamaño*:${filesizeF}\n\n_ESPERE ENVIANDO ARCHIVO, NO SPAMES LA CONCHA DE TU MADRE_`
				sendMediaURL(from, thumb, captionsYtmp4)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})		
				})
				} catch (err) {
			    reply(mess.error.api)
				}
				addFilter(from)
            break


case 'sider':
             if(!isGroup) return  
             if (!mek.key.fromMe) return fakestatus('¡Solo yo puedo usar ese comando!')
             try {
             infom = await FxBot.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
             tagg = []
             teks = `*• Leído por :*\n\n`
             for(let i of infom.reads){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('America/Mexico_City').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             teks += `*• Entregado a :*\n\n`
             for(let i of infom.deliveries){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('America/Mexico_City').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             mentions(teks, tagg, true)
             } catch (e) {
             console.log(color(e))
             reply('¡Responde un mensaje del bot!')
}
             addFilter(from)
            break




default:break
            
}
		if (isTTT && isPlayer2){
			
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = `*🎳 Juego Tictactoe 🎲*

Jugador 1 @${tty.player1.split('@')[0]}=❌
Jugador 2 @${tty.player2.split('@')[0]}=⭕

${angka[1]}${angka[2]}${angka[3]}
${angka[4]}${angka[5]}${angka[6]}
${angka[7]}${angka[8]}${angka[9]}

Turno De = @${tty.player1.split('@')[0]}`
  FxBot.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
FxBot.sendMessage(from, `@${tty.player2.split('@')[0]} Se rehusa a jugar:(`,text,{quoted:mek,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Ingrese los números correctamente')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Ya esta usado, usa otra casilla')
if (main[0].gilir.includes(sender)) return reply('¡Espera tu turno!')
s = '❌'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳Resultado del juego Tictactoe 🎲

*El ganador es : *@${tty.player1.split('@')[0]}*\n`
ucapan2 = `*🎳Resultado del juego Tictactoe 🎲*

*El resultado final :*

${ttt}`
FxBot.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Resultado del juego Tictactoe 🎲*

*_Serie de juegos 👌_*`
ucapan2 = `*🎳 Resultado Juego Tictactoe 🎲*

*Resultado final :*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Juego Tictactoe 🎲*

Jugador 2 @${tty.player2.split('@')[0]}=⭕
Jugador 1 @${tty.player1.split('@')[0]}=❌

${ttt}

Turno De = @${tty.player2.split('@')[0]}`
 FxBot.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Ingrese los números correctamente')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Esa casilla ya esta usada, prueba con otra')
if (main[0].gilir.includes(sender)) return reply('¡Espera tu turno!')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 Resultado del juego Tictactoe 🎲*

🎳 El ganador es :*@${tty.player2.split('@')[0]}*\n`
ucapan2 = `*🎳 Juego Tictactoe 🎲*

*Resultado final:*

${ttt}`
FxBot.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Resultado del juego Tictactoe 🎲*

*_Serie de juegos👌*`
ucapan2 = `*🎳 Resultado del juego Tictactoe 🎲*

*Resultado final :*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Jugador 1 @${tty.player1.split('@')[0]}=⭕
Jugador 2 @${tty.player2.split('@')[0]}=❌

${ttt}
 
Turno De = @${tty.player1.split('@')[0]}`
 FxBot.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
 }


if (button == 'VERIFY') {
console.log('NUEVO USER')
if (isVerify) return reply('*¡Tu cuenta ya está en mi base de datos!* 😐')
try {
ppimg = await FxBot.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
verified = `╭──「 *VERIFICADO* 」
├ *Nombre:* _${pushname}_
├ *Num:* _wa.me/${sender.split("@")[0]}_
├ *Hora:* _${jam}_
├ *Usuarios Verificados:* _${_user.length}_
╰─────「 *${FxBot.user.name}* 」
\nVerificación completa usa *${prefix}Help* para ver el Menu`
daftarimg = await getBuffer(ppimg)
FxBot.sendMessage(from, verified, daftarimg, image, {quoted: mek, caption: verified})
}

if (button == 'CREADOR') {
console.log('CREADOR')
let inilist = []
for (let i of ownerNumber) {
const vname = FxBot.contacts[i] != undefined ? FxBot.contacts[i].vname || FxBot.contacts[i].notify : undefined
inilist.push({
"displayName": '© FxBot Team',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${FxBot.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}:${i.split('@')[0]}\nitem9999.X-ABLabel: Creador\nEND:VCARD`
})
}
hehe = await FxBot.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: mek })
FxBot.sendMessage(from,'Este es mi creador, no hagas spam...',text,{quoted: hehe})
}


if (button == 'YOUTUBE') {
console.log('YOUTUBE')
tuh = fs.readFileSync(`./stik/canal.jpg`)
teks = `Felixcrack 409\nLink: https://youtube.com/channel/UCqCaZ_SEhSykF3-PR5os7YA\n SUSCRÍBETE ES GRATIS!! ❤️`
FxBot.sendMessage(from, tuh, image, { quoted: mek, caption: teks, contextInfo: { forwardingScore: 1000, isForwarded: true }}) 
}
if (button == 'ABRIR GRUPO') {
console.log('ABRIR EL GRUPO')
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
FxBot.groupSettingChange (from, GroupSettingChange.messageSend, false)
}

	if (button == 'CERRAR GRUPO') {
console.log('CERRAR GRUPO')
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
FxBot.groupSettingChange (from, GroupSettingChange.messageSend, true)
}
 
if (!mek.key.fromMe) return 
if (budy.startsWith('x')){
try {
return FxBot.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)

}  

if (isGroup && body != undefined) {
console.log(body)
}
}
} catch (e) {
const ee = String(e)
if (ee.includes('convert')){ 
return
}
if (ee.includes('this.isZero')){ 
return
}	
if (ee.includes('contextInfo')){ 
return
}	
if (ee.includes('owgi')){ 
return
}	
if (ee.includes('Cannot read property')){ 
return
}	
if (ee.includes('fileLength')){                           
return
}
if (ee.includes('jid')){                           
return
}
console.log('Error : %s', color(e, 'red'))
FxBot.sendMessage(`12607825660@s.whatsapp.net`, `─────「 *ALERTA-ERROR* 」─────\n\n\`\`\`${e}\`\`\`\n\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer Fx-Bot",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./stik/FxBot.jpeg'),sourceUrl:"https://wa.me/12607825660?text=© FxBot Team"}}})
}
})
}
starts()
