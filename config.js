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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254791014324";




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
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_49_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjE5LFxuICAgICAgICA1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDQsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMsXG4gICAgICAgIDExNixcbiAgICAgICAgNzIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM1LFxuICAgICAgICA3NixcbiAgICAgICAgMTc0LFxuICAgICAgICAzMixcbiAgICAgICAgMTc0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjE1LFxuICAgICAgICA5MixcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTUxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTUsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3LFxuICAgICAgICAxNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDksXG4gICAgICAgIDU4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDk5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTEsXG4gICAgICAgIDAsXG4gICAgICAgIDI1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODUsXG4gICAgICAgIDEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTM1LFxuICAgICAgICA1NixcbiAgICAgICAgODUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNCxcbiAgICAgICAgNyxcbiAgICAgICAgODMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDY0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDU1LFxuICAgICAgICA4MixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDc2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDQsXG4gICAgICAgIDg2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTAwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDksXG4gICAgICAgIDY2LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyNCxcbiAgICAgICAgODAsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTksXG4gICAgICAgIDc0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTkwLFxuICAgICAgICA2MyxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkJYTllCM256ODdpdHVwcm1nbGI4bHlMRzNVWVJlbzVHQnBtTXZRV1BYRkE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImxDSm9MRWNxUkotYlY0OFVQV2dpTmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmY0YzViMWItN2E5OS00ZGE2LThjNDgtNjY2M2U3MGFkYzViXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc4LFxuICAgICAgMjMsXG4gICAgICAxNzEsXG4gICAgICA2MyxcbiAgICAgIDQwLFxuICAgICAgMTMwLFxuICAgICAgMTIsXG4gICAgICA4MSxcbiAgICAgIDIwMixcbiAgICAgIDE1LFxuICAgICAgMTU2LFxuICAgICAgNzQsXG4gICAgICAxMzksXG4gICAgICAxODYsXG4gICAgICAxNjUsXG4gICAgICAyMjcsXG4gICAgICAxMTgsXG4gICAgICA5NSxcbiAgICAgIDM1LFxuICAgICAgMTc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNSxcbiAgICAgIDU0LFxuICAgICAgMjQ5LFxuICAgICAgOTIsXG4gICAgICAxMjQsXG4gICAgICAxNzYsXG4gICAgICAxNjgsXG4gICAgICAxMjAsXG4gICAgICAxOTksXG4gICAgICAyMTQsXG4gICAgICAyMzIsXG4gICAgICAyMTUsXG4gICAgICA5OSxcbiAgICAgIDQsXG4gICAgICA0NCxcbiAgICAgIDIzNCxcbiAgICAgIDE2NSxcbiAgICAgIDI0MSxcbiAgICAgIDE5NixcbiAgICAgIDQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkpON0dBQURaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3OTEwMTQzMjQ6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI1NDIxNTEyMTMwMTYyNjoxOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPblFoN0FFRVBqRytiUUdHQWdnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjVVTllJRTQyL2lpNVJTYVNRdlpKdnFFWlVTV3hzcThhc2ZYN1ZFZlRKUWM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYlo2VjYxQUNGNEk0LzhFUEJqc0dKdm5HdTlZUDBVRkRPZlkxbjRpbW5pb3FMR0swZG13c0U2TGxZS09lYXZBM2lXZXBnTUNjbGxqazVuQjhMb2VWRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiK0dTTERmY0RNUjRGUVNYOXVOUUxuSE42dzVkZUdaSnZDcWZ4aXJETDJqVXZLZXlPZjh5SnZyYm0ybUhLbWNXN3A1bzJOVHowYnV5RUlnRU9pdFdqQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzkxMDE0MzI0OjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE2NTYxODYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKSHRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpIdC5qc29uIjogIntcImtleURhdGFcIjpcIkNsUy8rZzBSbnNCdVg5NTFFMzRveXAwQzEwRUpSRzkwdHdJY1h5NmtwWkU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE3NDUzMDE1MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTczMTIyMTc1NlwifSIKfQ=="  // PUT your SESSION_ID 


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
