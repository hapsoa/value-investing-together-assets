import fs from "fs";
import { etfs } from "./etfs";
import { stocks } from "./stocks";
import { bonds } from "./bonds";
import { reits } from "./reits";

fs.writeFileSync("list/etf.json", JSON.stringify(etfs));
fs.writeFileSync("list/stock.json", JSON.stringify(stocks));
fs.writeFileSync("list/bond.json", JSON.stringify(bonds));
fs.writeFileSync("list/reit.json", JSON.stringify(reits));

// const assets: AssetListItem[] = [...etfs, ...stocks];
// fs.writeFileSync("list/asset.json", JSON.stringify(assets));
