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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254743884383";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_58_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTYzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0LFxuICAgICAgICAyNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjI2LFxuICAgICAgICA1MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQzLFxuICAgICAgICA3NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjA3LFxuICAgICAgICA3MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg1LFxuICAgICAgICA3MixcbiAgICAgICAgMjM3LFxuICAgICAgICA0MixcbiAgICAgICAgNTAsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTUyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM2LFxuICAgICAgICA0NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ4LFxuICAgICAgICA3LFxuICAgICAgICA2OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDksXG4gICAgICAgIDY2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY1LFxuICAgICAgICA4NixcbiAgICAgICAgMTg4LFxuICAgICAgICAzMyxcbiAgICAgICAgNTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAzNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDU3LFxuICAgICAgICA2NyxcbiAgICAgICAgOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICA5NixcbiAgICAgICAgNDYsXG4gICAgICAgIDUzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTUzLFxuICAgICAgICA4MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzksXG4gICAgICAgIDUyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTAsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTk0LFxuICAgICAgICA0MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDQ0LFxuICAgICAgICA2OSxcbiAgICAgICAgODQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTkwLFxuICAgICAgICA2NSxcbiAgICAgICAgODUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTIxLFxuICAgICAgICA1OCxcbiAgICAgICAgMjE2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODMsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzksXG4gICAgICAgIDk4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDc3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM0LFxuICAgICAgICA2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODEsXG4gICAgICAgIDI0NixcbiAgICAgICAgODIsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTM5LFxuICBcImFkdlNlY3JldEtleVwiOiBcImNiaTZFVUpCWmVkNEVYcm1Mb1hwU1dTRENWVlhtdVNzczlwT2NhY2ZLNk09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzQzODg0MzgzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBQ0IxMEU3MEFENkQwNDYxMDZFRjMwRjE2OTVGN0FGQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE1NTIzMDdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3NDM4ODQzODNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjgyNEYyNEVBRjcwODkxRDgyRjdGOTYzRDY0MkNCNTJGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTU1MjMwOFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJtY3U5bzBnNFFidVpxTUpVUllqMDF3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjc3YzhiNTQ1LWYwZjMtNDY3Zi05YzY1LTgwZmRmYzZjYzBjMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjAsXG4gICAgICAyMDcsXG4gICAgICAyNDIsXG4gICAgICA4NyxcbiAgICAgIDc2LFxuICAgICAgOTEsXG4gICAgICAyMjMsXG4gICAgICAxMyxcbiAgICAgIDI0OCxcbiAgICAgIDE4OSxcbiAgICAgIDcwLFxuICAgICAgMjQ5LFxuICAgICAgNixcbiAgICAgIDI0MCxcbiAgICAgIDIwLFxuICAgICAgMTk0LFxuICAgICAgMTM5LFxuICAgICAgMTgwLFxuICAgICAgMjcsXG4gICAgICAzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODIsXG4gICAgICAyNTUsXG4gICAgICA5OCxcbiAgICAgIDg1LFxuICAgICAgMjQ0LFxuICAgICAgMzMsXG4gICAgICAxMDQsXG4gICAgICA2NixcbiAgICAgIDM4LFxuICAgICAgMTg0LFxuICAgICAgMjA2LFxuICAgICAgMjcsXG4gICAgICA2NyxcbiAgICAgIDE4OSxcbiAgICAgIDIwNixcbiAgICAgIDU5LFxuICAgICAgMjI0LFxuICAgICAgMTAzLFxuICAgICAgMTM0LFxuICAgICAgMTM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlAxTlhWOE1HXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NDM4ODQzODM6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjE2NTM1NTQwOTgxODczOjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXFhanEwQkVLdWI4N1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJMU2llemZUSUJocFNaNHN6VzBPc0d4QkJIbjVlS2ZzTVRKT2tpbEp4Ym5FPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInJMTkgrc0gxVkZaQkNDUUdZSUMzR1NZVEY5R1FoZUFXSjlJUDFjSjlCMTdaaWlNUHZySHgwdnlMRmgxNHpHcWFNd0Iya2JBU25ISnh6V0RwVXdaT0JRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkpxeUVDdkIyRmFUZXpiS05xSDdpYll0amZjSUpRV1BGS2ZyWEgwSS83MGxFZlpja1VjTll3ZDlmb2I1eTNQaE4xZms5MUZjb0YwWi9BYnhscDRPb2dRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc0Mzg4NDM4Mzo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNTUyMzAyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRTN3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFM3cuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJNNnlJZWVOSnRVYXFKVDdKWmU3T2QweXIwNzlDSy9XTWpuRjdFakQwV3g0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM2MzA0MDAxMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNTUyMzA3OTg4XCJ9Igp9"  // PUT your SESSION_ID 


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


  errorChat : process.env.ERROR_CHAT || "*",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
