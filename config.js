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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254715259428";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_32_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDM4LFxuICAgICAgICAxOCxcbiAgICAgICAgNixcbiAgICAgICAgMjExLFxuICAgICAgICAxNDEsXG4gICAgICAgIDYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTI5LFxuICAgICAgICA5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDg1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTEwLFxuICAgICAgICA1NixcbiAgICAgICAgOTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjksXG4gICAgICAgIDgxLFxuICAgICAgICAyNSxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTksXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA0LFxuICAgICAgICA0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDMwLFxuICAgICAgICA4MixcbiAgICAgICAgODgsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgNjYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTksXG4gICAgICAgIDY3LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzQsXG4gICAgICAgIDM5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDMyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDUyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTExLFxuICAgICAgICAxODIsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA3NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDksXG4gICAgICAgIDk0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTEsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgODUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjksXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMixcbiAgICAgICAgMTQyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjEwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDcxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTUwLFxuICAgICAgICA2MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjksXG4gICAgICAgIDgzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTIwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlhPbkNySjcyM21FY1Y5OGRrT2twcFkvQy9tWFpsRDhxVkRCZkRtQUc0RXM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkZ6S2dxY3prVG9hazhkbEtaZG5LUlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjA2NjNmMDYtOTk3Zi00YjFkLThiMDgtYTI3ZDA0MjVlMTZhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMyxcbiAgICAgIDI0LFxuICAgICAgMjUzLFxuICAgICAgMTUxLFxuICAgICAgOCxcbiAgICAgIDIzMyxcbiAgICAgIDExNixcbiAgICAgIDIxMyxcbiAgICAgIDE0MyxcbiAgICAgIDMzLFxuICAgICAgMTE2LFxuICAgICAgMTM3LFxuICAgICAgNjgsXG4gICAgICAyMTEsXG4gICAgICAyNDcsXG4gICAgICAxNTYsXG4gICAgICA0OSxcbiAgICAgIDI1MixcbiAgICAgIDg0LFxuICAgICAgMTc2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyLFxuICAgICAgMjU1LFxuICAgICAgMTQ4LFxuICAgICAgMTA1LFxuICAgICAgMTgxLFxuICAgICAgMjI4LFxuICAgICAgNDUsXG4gICAgICAxODgsXG4gICAgICAyMTQsXG4gICAgICAxMzMsXG4gICAgICAyOCxcbiAgICAgIDIxOCxcbiAgICAgIDYwLFxuICAgICAgOCxcbiAgICAgIDgzLFxuICAgICAgMTAwLFxuICAgICAgNzMsXG4gICAgICA5MSxcbiAgICAgIDUxLFxuICAgICAgMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOEE1TUY0V0ZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcxNTI1OTQyODoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkI/wnZCS8J2QgPCdkIvwnZCM8J2QiPCdkJLwnZCTX/CdkJPwnZCE8J2QgvCdkIdcIixcbiAgICBcImxpZFwiOiBcIjI0MzQzNDkwNDM3MTM0MjoyOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPV0doL2tFRUwzQzQ3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlZyUWNHSXhtMlhRcGR5M2RWak1ObzdNTExwRmFTOVgzdGlsNHRuZWNCVWM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWkJ1N1pDMDZXbGg5QmM0MFB2Q1plZUUwUG0zaDVSOXFtZldnQnpQdGNzSkF4Q1Jyb2pvSjB6VmpLQnN3dE8vN0ZPeGlPZnlucnlBSHJNMm9IaElOQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUm5vSk5OU1NJOWlPenp1ZmF1R2d1eGhVQVF3YXd6VWZhdDB1QWpxMG8yUFJ4ck5rOW9DcDVmZSsxL1A4OU90UUJTTjZ6WStOUTExNy9KUVBxSjdDaWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzE1MjU5NDI4OjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEyOTUxNjlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
