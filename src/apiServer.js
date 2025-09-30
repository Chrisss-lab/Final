import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { GoogleSpreadsheet } from "google-spreadsheet";
import path from "path";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Update with your new spreadsheet ID
const SPREADSHEET_ID = "NEW_SPREADSHEET_ID"; 
const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

// Use new Google key location
const keyPath = path.resolve("./google-keys/new-key.json"); 

app.get("/api/recipes", async (req, res) => {
  await doc.useServiceAccountAuth(require(keyPath));
  await doc.loadInfo();
  const sheet = doc.sheetsByTitle["Recipes"];
  const rows = await sheet.getRows();
  res.json(rows.map(r => ({ Name: r.Name, price: r.Price })));
});

app.get("/api/packages", async (req, res) => {
  await doc.useServiceAccountAuth(require(keyPath));
  await doc.loadInfo();
  const sheet = doc.sheetsByTitle["Packages"];
  const rows = await sheet.getRows();
  res.json(rows.map(r => ({ Type: r.Type, Size: r.Size, Discount: r.Discount })));
});

app.get("/api/coupons", async (req, res) => {
  await doc.useServiceAccountAuth(require(keyPath));
  await doc.loadInfo();
  const sheet = doc.sheetsByTitle["Coupons"];
  const rows = await sheet.getRows();
  res.json(rows.map(r => ({ name: r.Code, percent: r.Percent })));
});

app.post("/api/order", async (req, res) => {
  try {
    await doc.useServiceAccountAuth(require(keyPath));
    await doc.loadInfo();
    const sheet = doc.sheetsByTitle["Orders"];
    await sheet.addRow(req.body);
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

app.listen(5000, () => console.log("Backend running on http://localhost:5000"));
