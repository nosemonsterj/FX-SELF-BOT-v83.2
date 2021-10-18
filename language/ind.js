
const a = '```'

exports.wait = () => {
	return`*[❗] Espera Un Momento...*`
}

exports.succes = () => {
	return`*✅ Éxito ✅*`
}

exports.lvlon = () => {
	return`*「 MODO 」 Nivelación Activada ✅*`
}

exports.lvloff = () => {
	return`*「 MODO 」 Nivelación Desactivada ✅*`
}

exports.lvlnul = () => {
	return`*No tienes nivel.*`
}

exports.lvlnoon = () => {
	return`*¡Activa El Modo De Nivelación Primero!!!*`
}

 
	exports.noregis = (pushname, sender, prefix) => { 
	return`*「 REGISTRO 」*\n\n*Hola para usar el bot, escribe .verify*`
}

exports.rediregis = () => {
	return`*「❗」 TU YA ESTABAS REGISTRADO 😑*`
}

exports.stikga = () => {
	return`*「 ❌ HA FALLADO ❌ 」*\n\n*Inténtalo De Nuevo!!*`
}

exports.pttr = () => {
	return`*「❕PTT❕」\n\nEjemplo: #ppt piedra, papel o tijera\n\nEjemplo : #ppt piedra*`
}


exports.linkga = () => {
	return`*❌Enlace O URL No Válido❌*`
}

exports.groupo = () => {
	return`*「❕ SOLO EN GRUPO❕」*\n\n*Este comando solo se puede usar si el bot está en un grupo!*`
}

exports.ownerb = () => {
	return`*「❕CREADOR❕」*\n\n*Solamente Felixcrack Puede Usar Este Comando 😁*`
}

exports.ownerg = () => {
	return`*「❕PROPIETARIO DEL GRUPO❕」*\n\n*¡Solo el creador del grupo puede usar este comando!!*`
}

exports.admin = () => {
	return`*「❕ADIMIN❕」*\n\n*¡Este comando es solo para administradores del grupo!`
}

exports.badmin = () => {
	return`*「❕ADMIN BOT❕」*\n\n*¡El bot debe ser admin para poder usar este comando!*`
}

exports.nsfwoff = () => {
	return`*「❕NSFW DESACTIVADO❕」*\n\n *Primero Active El Modo NSFW!!*`
}

exports.bug = () => {
	return`*「❕BUG❕」*\n\n*Tu bug|report fue enviado a mi creador!!  Los informes falsos no serán respondidos*`
}

exports.wrongf = () => {
	return`*「❌ERROR❌」*\n\n*¡El formato es incorrecto o el texto está en blanco!*`
}

exports.clears = () => {
	return`*「 CHAT LIMPIÓ✅」*`
}

exports.pc = () => {
	return`*「 REGISTRO 」*\n\nPara saber si se ha registrado, consulte el mensaje que le envié \n\nNOTA:\n*Si no ha recibido el mensaje. Significa que no has sido registrado en el bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「❗REGISTRADO❗」*\n\n❕TUS DATOS❕ \n\n┏━⊱Nombre\n┗⊱${namaUser}\n┏━⊱Numero\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱Edad\n┗⊱${umurUser}\n┏━⊱Hora\n┗⊱${time}\n\n┏━❉ *ID* ❉━\n┣⊱${serialUser}\n┗⊱NOTA : *Tengo Hambre*\n\n┏━⊱#menu\n┗⊱Para ver los comandos`
}

exports.cmdnf = (prefix, command) => {
	return`Hola 🤖 el *#${command}* no esta registrado, escribe : #menu para ver la lista de comandos`
}

exports.owneresce = (pushname) => {
	return`*Perdon ${pushname} No Eres El Dueño Del Bot*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Disculpa ${pushname} Tu Nivel No Es Suficiente*\n\n*┏⊱Tu Nivel : ${getLevelingLevel(sender)}*\n*┣⊱Tipo De Comando: ${command}*\n*┗⊱Requerimento De Nível : ${aha}*\n\n_NOTA : CONVERSE EN EL CHAT PARA OBTENER XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Disculpa ${pushname} Tu nivel no es suficiente*\n\n*┏⊱Tu Nivel : ${getLevelingLevel(sender)}*\n*┣⊱Tipo De Comando : ${command}*\n*┗⊱Requerimento De Nível : ${ahb}*\n\n_NOTA : HABLA EN EL CHAT PARA OBTENER XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Disculpa ${pushname} Tu nivel no es suficiente*\n\n*┏⊱Tu Nivel : ${getLevelingLevel(sender)}*\n*┣⊱Tipo De Comando : ${command}*\n*┗⊱Requerimento De Nível : ${ahc}*\n\n_NOTA : HABLA EN EL CHAT PARA OBTENER XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Disculpa ${pushname} Tu nivel no es suficiente*\n\n*┏⊱Tu Nivel : ${getLevelingLevel(sender)}*\n*┣⊱Tipo De Comando : ${command}*\n*┗⊱Requerimento De Nível : ${ahd}*\n\n_NOTA : HABLA EN EL CHAT PARA OBTENER XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Disculpa ${pushname} Tu nivel no es suficiente*\n\n*┏⊱Tu Nivel : ${getLevelingLevel(sender)}*\n*┣⊱Tipo De Comando : ${command}*\n*┗⊱Requerimento De Nível : ${ahe}*\n\n_NOTA : HABLA EN EL CHAT PARA OBTENER XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Disculpa ${pushname} tu nivel no es suficiente*\n\n*┏⊱Tu Nivel : ${getLevelingLevel(sender)}*\n*┣⊱Tipo De Comando : ${command}*\n*┗⊱Requerimento De Nível : ${ahf}*\n\n_NOTA : HABLA EN EL CHAT PARA OBTENER XP_`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
	
*「 🥳 NUEVO NIVEL 🥳 」*
┏⊱ *Nombre* : ${pushname}
┣⊱ *Número* : wa.me/${sender.split("@")[0]}
┣⊱ *XP* : ${getLevelingXp(sender)}
┣⊱ *Límite* : +3
┣⊱ *Rango*: ${role}
┗⊱ *Nível* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Disculpa ${pushname} Tu Límite Se Ha Agotado*\n*Para obtener más límite, compra o sube de nivel*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 𝗧𝗨 𝗟𝗜𝗠𝗜𝗧𝗘 」*
*Tu límite restante es : ${limitCounts}*

NOTA : Para Tener Más Límites, Puedes Subir De Nivel O Comprar`
}

exports.satukos = () => {
	return`*Ejemplo de uso : 1 Para Habilitar, 0 Para Deshabilitar.`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ 「 DINERO 」⊰━┓*\n┣⊱ *Nombre* : ${pushname}\n┣⊱ *Número* : ${sender.split("@")[0]}\n┣⊱ *Dinero* : ${uangkau}\n┗━━━━━━━━━━`
}

exports.premadd = (pnom) => {
	return`*「 PREMIUM 」*

*Número* : ${pnom}
*Caduca en : 30 Dias\n*Gracias por comprar premium.*`
}

exports.dellprem = (hnom) => {
	return`*「 PREMIUM 」*

*Número* : ${hnom}
*Caduca en* : AHORA\n*Gracias por comprar la versión premium, para después comprar de nuevo.*`
}

exports.premon = (pushname) => {
	return`Disculpa 😰 ${pushname} No Eres Un Usuário Premium`
}

