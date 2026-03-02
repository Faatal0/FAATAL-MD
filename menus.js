const readMore = String.fromCharCode(8206).repeat(4001)

// =============================
// 🕒 HORA ATUAL
// =============================
function pegarHora() {
return new Date().toLocaleTimeString("pt-BR", {
timeZone: "America/Sao_Paulo"
})
}

exports.menu = (prefix, pushname, nomeBot, NickDono, vip) => {

const hora = pegarHora()

const statusVip = vip ? "SIM " : "NÃO "

return `

Olá ${pushname}!
${hora}
${nomeBot}
${NickDono}
${statusVip}

${readMore}

${prefix}menudono
${prefix}menuadm
${prefix}menudown
${prefix}menuvip
${prefix}menubn
${prefix}menufigu

${prefix}ping
${prefix}nick (faatal)
${prefix}revelar (marcar visu única)
${prefix}gerarlink  (marcar/img)
${prefix}fotoperfil
${prefix}gemini (frase)
${prefix}printsite (link)
${prefix}afk (motivo)
${prefix}infoff (ID)
${prefix}dataconta (ID)
${prefix}imgai
${prefix}edits
${prefix}editjj
${prefix}editnt
${prefix}editff

`
}

exports.menufigu = (prefix) => {
return `
 FIGURINHAS

 ${prefix}s
 ${prefix}sticker
 ${prefix}take
 ${prefix}rename
 ${prefix}toimg
${prefix}figuperfil
${prefix}togif

 ${prefix}brat
${prefix}bratvid
${prefix}atp
 ${prefix}attp

 ${prefix}figbts
 ${prefix}fig18
${prefix}figaleatori
 ${prefix}figemoji
${prefix}figraiva
${prefix}figcoreana
${prefix}figdesenho
${prefix}figmeme
 ${prefix}figroblox
 ${prefix}figanime


`;
}

exports.menubn = (prefix) => {
return `╭━━━〔 🎮 MENU BRINCADEIRAS 〕━━━╮

╭─❖ 🎲 DIVERSÃO
┃ ${prefix}casal
┃ ${prefix}gado (@)
┃ ${prefix}rankputa
┃ ${prefix}rankgay
┃ ${prefix}rankgado
┃ ${prefix}rankcorno
┃ ${prefix}comer (@)
┃ ${prefix}espancar (@)
┃ ${prefix}matar (@)

╰───────────────`;
};

exports.menudown = (prefix) => {
return `menu donwload 

${prefix}play/p
${prefix}tiktok (link)
${prefix}ytmp3 (link)
${prefix}ytmp4 (link)
${prefix}Pinterest (nome)
${prefix}insta (link)
${prefix}tiktok2 (nome)
${prefix}ttkmusic (nome)

╰━━━━━━━━━━━━━━━━━━━━━━╯
> Baixe mídias de forma rápida e automática.`;
};

exports.menudono = (prefix) => {
return `menudono

┃ ${prefix}fotobot
┃ ${prefix}criargp
┃ ${prefix}listavip
${prefix}addvip (@)
${prefix}rmvip (@)
┃ ${prefix}faatal on / off
${prefix}boton / off
┃ ${prefix}setprefix
${prefix}nomedono
${prefix}nomebot
${prefix}aluguelglobal
${prefix}addaluguel
${prefix}rmaluguel
${prefix}bcgp (aviso global)
${prefix}blockia
${prefix}desblockia
${prefix}blockcmd
${prefix}unblockcmd
${prefix}listblockcmd
${prefix}reiniciar
┃ ${prefix}setprefixgp

╰━━━━━━━━━━━━━━━━━━━━━━╯
> Acesso exclusivo ao proprietário do sistema.`;
};

exports.menuadm = (prefix) => {
return ` menu adm


┃ ${prefix}transmitir 
┃ ${prefix}tm
┃ ${prefix}infogp
┃ ${prefix}regras
┃ ${prefix}linkgp
┃ ${prefix}fechar
┃ ${prefix}marcar
┃ ${prefix}tmadms aviso para adms
┃ ${prefix}adms mostra adms
┃ ${prefix}ban
┃ ${prefix}mutar
┃ ${prefix}desmutar
┃ ${prefix}add
┃ ${prefix}alg 1/0
┃ ${prefix}promover
┃ ${prefix}rebaixar
┃ ${prefix}adverter 
┃ ${prefix}rmadv
┃ ${prefix}banirfigu
┃ ${prefix}desbanfigu
${prefix}antiaudio on/off
${prefix}antivideo on/off
${prefix}antimg on/off
${prefix}antifigu on/off
${prefix}antipalavrao on/off
${prefix}antibot on/off
${prefix}antilink on/off
${prefix}antilinkgp on/off
${prefix}antispam on/off

╰───────────────

╰━━━━━━━━━━━━━━━━━━━━━━╯
> Comandos exclusivos para administradores do grupo.`;
};

exports.menuvip = (prefix) => {
return `menuvip
┃
┃ ${prefix}plaq
${prefix}plaq1
${prefix}plaq2
${prefix}plaq3
${prefix}plaq4
${prefix}plaq5
${prefix}plaq6
${prefix}plaq7
${prefix}plaq8
${prefix}plaq9
${prefix}porn
${prefix}porn2
┃ ${prefix}cpf
${prefix}nome
${prefix}nome2
${prefix}placa
${prefix}rg
${prefix}telefone
${prefix}cep
${prefix}ddd
${prefix}score
${prefix}serasa
${prefix}bin
${prefix}cnpj
┃ ${prefix}gerarcpf
`
}