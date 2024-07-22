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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_45_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDU2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTc4LFxuICAgICAgICA1MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDY3LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODksXG4gICAgICAgIDExOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDgzLFxuICAgICAgICAwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQsXG4gICAgICAgIDYsXG4gICAgICAgIDgxLFxuICAgICAgICA3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxLFxuICAgICAgICA3NixcbiAgICAgICAgMzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTA4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwLFxuICAgICAgICAwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDkxLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNixcbiAgICAgICAgMTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDgzLFxuICAgICAgICAxODgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5OCxcbiAgICAgICAgODgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTUwLFxuICAgICAgICA5NixcbiAgICAgICAgMjM5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMyxcbiAgICAgICAgODIsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDc3LFxuICAgICAgICA4MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDkwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTk3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTk1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjIwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDc0LFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NixcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQyLFxuICAgICAgICA4MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODgsXG4gICAgICAgIDE5NixcbiAgICAgICAgODYsXG4gICAgICAgIDczLFxuICAgICAgICA0OSxcbiAgICAgICAgODgsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTksXG4gICAgICAgIDc3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMixcbiAgICAgICAgMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDkxLFxuICAgICAgICAyMixcbiAgICAgICAgNTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTMzLFxuICAgICAgICA2NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNixcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZitiMDB5cElyblpZOThneFB1T3QxYlpJdFNIUWRRQTNVTGJoOEZkeWR6WT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRG9NcXhTS3FRenFXRDVEUmdkX0F5Z1wiLFxuICBcInBob25lSWRcIjogXCJhYjhhZGIzNy05NDI4LTQyMzUtODUxNi1jZDBkYTE5N2Q2NjhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM4LFxuICAgICAgNTcsXG4gICAgICAxLFxuICAgICAgMTA2LFxuICAgICAgMTI1LFxuICAgICAgMTIzLFxuICAgICAgMTQyLFxuICAgICAgMjA3LFxuICAgICAgMTM2LFxuICAgICAgOTgsXG4gICAgICAyNSxcbiAgICAgIDE3NSxcbiAgICAgIDM5LFxuICAgICAgNDcsXG4gICAgICAyMzEsXG4gICAgICA0NCxcbiAgICAgIDE2NyxcbiAgICAgIDI1MixcbiAgICAgIDIzMSxcbiAgICAgIDkwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MyxcbiAgICAgIDgsXG4gICAgICA2NCxcbiAgICAgIDI1MyxcbiAgICAgIDIyLFxuICAgICAgMTEsXG4gICAgICA1OCxcbiAgICAgIDE0LFxuICAgICAgMjQ4LFxuICAgICAgMTU5LFxuICAgICAgMjExLFxuICAgICAgMTA2LFxuICAgICAgMjEyLFxuICAgICAgMTA0LFxuICAgICAgOTEsXG4gICAgICAzNixcbiAgICAgIDI1LFxuICAgICAgMTUwLFxuICAgICAgMTgxLFxuICAgICAgMTg0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjFUSENNVEhOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MTUyNTk0Mjg6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZCP8J2QkvCdkIDwnZCL8J2QjPCdkIjwnZCS8J2Qk1/wnZCT8J2QhPCdkILwnZCHXCIsXG4gICAgXCJsaWRcIjogXCIyNDM0MzQ5MDQzNzEzNDI6MzFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1dHaC9rRUVNL0UrYlFHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJWclFjR0l4bTJYUXBkeTNkVmpNTm83TUxMcEZhUzlYM3RpbDR0bmVjQlVjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjc3MXg4blFldkRQZEN5cXovb1lrS0YwbXpzaWxQd0dCckFEUUJEeXBCU0xVQjkwcnRtMkUrOTRRcU1KN1RoK1lvcnBrbWdHa0RtNUpidkhhck9OYUFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkRnbGU2Q3ppMjlEQUs0Q3VURGRISjJuUGNManVZZWdncUpKTWxxNXNaN1JrOXFYVU9xd2tocEVZR0wyeHZKNE9nWlkvdkFkL0NpMHF4aEJjZnVUcUN3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcxNTI1OTQyODozMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNjU1ODkyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRFdSXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEV1IuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ3MnVBOVVDVkZTWC9BV1NMTmtCUThISFdqR3Vmb2c0bmN5TWNWS3hrMzBrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzMjc2MTI3NzMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
