const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="caxtontechnologies291gmail.com"
global.location="Kenya,Africa."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://photos.app.goo.gl/VXa2WUXu91W1hsCG6=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "254798033844" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254758509474";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "254798033844";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254798033844";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_21_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDg3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTksXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQzLFxuICAgICAgICAyLFxuICAgICAgICAyMixcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc4LFxuICAgICAgICAxOCxcbiAgICAgICAgODcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDgsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ2LFxuICAgICAgICAzNyxcbiAgICAgICAgNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjMsXG4gICAgICAgIDYyLFxuICAgICAgICAxMSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM1LFxuICAgICAgICA2MCxcbiAgICAgICAgODEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAzMixcbiAgICAgICAgMTc0LFxuICAgICAgICA4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODUsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAzNixcbiAgICAgICAgMTMsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjksXG4gICAgICAgIDU1LFxuICAgICAgICAxNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDksXG4gICAgICAgIDI2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExLFxuICAgICAgICA4MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDc4LFxuICAgICAgICAzNixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDY2LFxuICAgICAgICA0NSxcbiAgICAgICAgNjksXG4gICAgICAgIDQ2LFxuICAgICAgICA5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDM2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDkwLFxuICAgICAgICA5NixcbiAgICAgICAgMTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDkyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0LFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzcsXG4gICAgICAgIDE5LFxuICAgICAgICAyLFxuICAgICAgICA5NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjUyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDk5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTMwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDY2LFxuICAgICAgICA1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUwLFxuICAgICAgICA1NixcbiAgICAgICAgMTIxLFxuICAgICAgICA0MixcbiAgICAgICAgMjEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTcsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDExLFxuICAgICAgICA1NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDMsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyOSxcbiAgICAgICAgODksXG4gICAgICAgIDQsXG4gICAgICAgIDk3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwianJxbDBueENIZnRHcHhLQUFpdUJVdXkvNnBraVJ3cUp4V3l2aEN6bkNvVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3MjQ1ODI0MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQzNDI1M0U5OUNEOTRDMEExMEIxRTRCRThBQzEyQzc1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTMwMTY4M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDcyNDU4MjQzMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiN0E5QUU1MkQ1NEUxNTFBRUZCQ0ZFNjc4MTY2N0UxOTBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMzAxNjg0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImxCeFFBRHNHVEdPR2taX1hoaWdaOHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzc5NGQ3NmQtMzU5Yi00ZjI4LWFiNDktYzJiYWFlNTk1NTM0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUxLFxuICAgICAgODgsXG4gICAgICAxNzAsXG4gICAgICAxMzIsXG4gICAgICAyMTgsXG4gICAgICAxNjksXG4gICAgICAxMjEsXG4gICAgICAyMTUsXG4gICAgICAyNDYsXG4gICAgICAyMzYsXG4gICAgICAyMDUsXG4gICAgICA0OSxcbiAgICAgIDE5NSxcbiAgICAgIDU1LFxuICAgICAgMjExLFxuICAgICAgNDEsXG4gICAgICA1NSxcbiAgICAgIDMyLFxuICAgICAgMTc0LFxuICAgICAgMTA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNSxcbiAgICAgIDE3MixcbiAgICAgIDE1NCxcbiAgICAgIDUyLFxuICAgICAgMTk3LFxuICAgICAgNTYsXG4gICAgICAxNjcsXG4gICAgICAxOTksXG4gICAgICAxNTIsXG4gICAgICAyMjcsXG4gICAgICAxNjgsXG4gICAgICAyNDUsXG4gICAgICAxNjMsXG4gICAgICAyMzYsXG4gICAgICAxLFxuICAgICAgMjI0LFxuICAgICAgMTYwLFxuICAgICAgMTUzLFxuICAgICAgMjA2LFxuICAgICAgOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5NVo0OEdSNlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzI0NTgyNDMwOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJDbGF1ZGlhXCIsXG4gICAgXCJsaWRcIjogXCI0NzQwODE4NDU4MjIxNDoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ00vNjNQTUdFSzMxNDdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUDhrVVlBdGxyUGhPeEtoOE9BUTcxWUI0WnR0dGN6VDVoQWthTXFjQitXTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIyY1ZacjZXUlQxVTRqMU9TZjAwc1VldytwenB4MXByTjRsNlRhcHJnSm84V1VEcTRIOWpVWUhsbHJQUHFVVTRrUTdYaUhwbE1jTGtYcFI4SUxDV0lBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJtY1hmWm9lNC90KzVSYXFSMGhLN1paM2Z2NjNkZW1nbzRwSVNHbjN2QzYrTzg0OXlreTR4MHRoTVUzeVF1RGZldk8rYk5SUWlnN2dkSEpFNTJFa0FpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MjQ1ODI0MzA6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEzMDE2ODAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHbm5cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdubi5qc29uIjogIntcImtleURhdGFcIjpcIlpZa29LR2V1UDJjem1DRTZGL0NTNGM4Tkc3Wm45VnJUUDlIOVBzZmc1cmc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg1MzMwODIzOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxMzAxNjgyMTAxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "CAXTON",
  packname: process.env.PACK_NAME || "CAXTON DERICK",
  botname : process.env.BOT_NAME  || "CAXTON DERICK",
  ownername:process.env.OWNER_NAME|| "CAXTON DERICK",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
