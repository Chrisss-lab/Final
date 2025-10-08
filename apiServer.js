import express from "express";
import { google } from "googleapis";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// ✅ Load credentials
let credentials;

if (process.env.GOOGLE_SERVICE_ACCOUNT_KEY) {
  // Fix the line breaks in private_key when reading from env variable
  credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY);
  credentials.private_key = credentials.private_key.replace(/\\n/g, "\n");
  console.log("✅ Loaded credentials from environment variable (fixed line breaks).");
} else {
  // Local dev mode
  credentials = JSON.parse(fs.readFileSync("website-credentials.json", "utf8"));
  console.log("✅ Loaded credentials from local website-credentials.json file.");
}

// ✅ Spreadsheet ID from env or fallback
const SPREADSHEET_ID = process.env.SPREADSHEET_ID || "YOUR_LOCAL_SHEET_ID_HERE";

// ✅ Authenticate with Google Sheets
const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

// ✅ Basic connection test
app.get("/", (req, res) => {
  res.send("✅ API Server running successfully!");
});

// ✅ Test Google Sheets access
app.get("/test-sheets", async (req, res) => {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: "Sheet1!A1:B5",
    });

    res.json({
      success: true,
      message: "✅ Successfully connected to Google Sheets!",
      data: response.data.values || [],
    });
  } catch (error) {
    console.error("❌ Google Sheets API Error:", error.message);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
