@echo off
cd /d C:\Users\Bruno\jersey-raw-website

:: Create apiServer.js
echo import express from "express"; > apiServer.js
echo import { google } from "googleapis"; >> apiServer.js
echo import cors from "cors"; >> apiServer.js
echo. >> apiServer.js
echo const app = express(); >> apiServer.js
echo app.use(cors()); >> apiServer.js
echo app.use(express.json()); >> apiServer.js
echo. >> apiServer.js
echo const SPREADSHEET_ID = "YOUR_SPREADSHEET_ID"; >> apiServer.js
echo const auth = new google.auth.GoogleAuth({ >> apiServer.js
echo     credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY), >> apiServer.js
echo     scopes: ["https://www.googleapis.com/auth/spreadsheets"] >> apiServer.js
echo }); >> apiServer.js
echo const sheets = google.sheets({ version: "v4", auth }); >> apiServer.js
echo. >> apiServer.js
echo const PORT = process.env.PORT || 5000; >> apiServer.js
echo app.listen(PORT, () => console.log(`Server running on port %PORT%`)); >> apiServer.js

echo Files created successfully!
pause
