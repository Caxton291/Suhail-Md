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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254798033844";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_26_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA2NixcbiAgICAgICAgNDksXG4gICAgICAgIDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDUsXG4gICAgICAgIDkxLFxuICAgICAgICAzNSxcbiAgICAgICAgODksXG4gICAgICAgIDExMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDAsXG4gICAgICAgIDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4MixcbiAgICAgICAgNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI4LFxuICAgICAgICA0OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTAxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDk0LFxuICAgICAgICAzNixcbiAgICAgICAgOTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU2LFxuICAgICAgICA2NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDMzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjksXG4gICAgICAgIDM0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAzMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgxLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI1LFxuICAgICAgICA1LFxuICAgICAgICAxMCxcbiAgICAgICAgOTksXG4gICAgICAgIDAsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODgsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDkxLFxuICAgICAgICAxMixcbiAgICAgICAgNTYsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjksXG4gICAgICAgIDk0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTMsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDMsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDksXG4gICAgICAgIDksXG4gICAgICAgIDY1LFxuICAgICAgICA4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU4LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjEyLFxuICAgICAgICA0MixcbiAgICAgICAgMTE4LFxuICAgICAgICA2NyxcbiAgICAgICAgNixcbiAgICAgICAgOTUsXG4gICAgICAgIDk4LFxuICAgICAgICA2MixcbiAgICAgICAgOTEsXG4gICAgICAgIDczLFxuICAgICAgICA5OSxcbiAgICAgICAgMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODIsXG4gICAgICAgIDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA5LFxuICAgICAgICA1NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjcsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTMsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3LFxuICAgICAgICA5NixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDY2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ3NlBGY0Y3V00wWk9TZlgwTEoxK2JkL3hjekt1K3Fmd3JHcHVlcjRCbVAwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJKLXJTVG95bVFIeTJsMU95a1ZFX3d3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ2NTJkZTI0LWY5YWItNDgzNC1iMTcxLTBlYjY4MzkxNDZkZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NyxcbiAgICAgIDM4LFxuICAgICAgMTI1LFxuICAgICAgMTM3LFxuICAgICAgMTczLFxuICAgICAgMTM2LFxuICAgICAgMTMsXG4gICAgICAxNzMsXG4gICAgICA2NyxcbiAgICAgIDI1MCxcbiAgICAgIDE4NyxcbiAgICAgIDE0OSxcbiAgICAgIDE4NCxcbiAgICAgIDYzLFxuICAgICAgMjA4LFxuICAgICAgOTMsXG4gICAgICAyMzAsXG4gICAgICAyMzgsXG4gICAgICA2OSxcbiAgICAgIDEzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3LFxuICAgICAgMjMwLFxuICAgICAgNDEsXG4gICAgICA1LFxuICAgICAgNzksXG4gICAgICAxNTgsXG4gICAgICAyMjIsXG4gICAgICAxNzgsXG4gICAgICAxNTEsXG4gICAgICAxOTAsXG4gICAgICAzNSxcbiAgICAgIDE1MixcbiAgICAgIDE4OSxcbiAgICAgIDE0NCxcbiAgICAgIDE0MSxcbiAgICAgIDE0NCxcbiAgICAgIDE2NCxcbiAgICAgIDE4NyxcbiAgICAgIDE5NSxcbiAgICAgIDEwNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNWEdMNzlTRlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0Nzk4MDMzODQ0OjMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMzkxODcyMTUyOTA0NjU6MzJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWFWMjdBRkVJT00xclFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJBbzhEZU80QzdySzJIeC95OFh0R1pHdnljY2hVZ1NPZlRjSkx5b3RZc0Q0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImtQMTNQQWFTdUJKYiswbXhYelBCNFJ3UGtHTE85UEFCbE9rYlJoTVo0V280bFpNZ1RIK2JGRkp2Vko2c2ZPYW4rVnMyaExVUUdWMkF5bTFGYnFoZEFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjd5dUVPYmRnZmt0V1dqcS9FekM0c1U2VDJPSWZCU0JjZCs0alRqb1ozcjBBYTZRcy9IVFFQdHRyU0Faa0d0d0lwRURXZi92NVNSOXhOaVR1Z2hJMWdBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc5ODAzMzg0NDozMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTA3NTIwNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhYdFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSFh0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiVE9JSlV1OGJvQnh6QVZGbklIb2k4REdZM1JzbHVTVVRmV3NITUxqK2Vzcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDQ0MzM0Mjc3LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "*",
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
