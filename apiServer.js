import express from "express"; 
import { google } from "googleapis"; 
import cors from "cors"; 
 
const app = express(); 
app.use(cors()); 
app.use(express.json()); 
 
const SPREADSHEET_ID = "YOUR_SPREADSHEET_ID"; 
const auth = new google.auth.GoogleAuth({ 
    credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY), 
    scopes: ["https://www.googleapis.com/auth/spreadsheets"] 
}); 
const sheets = google.sheets({ version: "v4", auth }); 
 
app.listen(PORT, () = running on port `)); 
