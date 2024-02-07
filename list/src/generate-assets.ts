import fs from "fs";
import { etfs } from "./etfs";
import { stocks } from "./stocks";
import { bonds } from "./bonds";
import { reits } from "./reits";
import { AssetListItem, AssetType } from "./model";

fs.writeFileSync("list/etf.json", JSON.stringify(etfs));
fs.writeFileSync("list/stock.json", JSON.stringify(stocks));
fs.writeFileSync("list/bond.json", JSON.stringify(bonds));
fs.writeFileSync("list/reit.json", JSON.stringify(reits));

// const assets: AssetListItem[] = [
//   ...etfs.map((etf) => ({ ...etf, type: AssetType.ETF })),
//   ...stocks.map((stock) => ({ ...stock, type: AssetType.STOCK })),
//   ...bonds.map((bond) => ({ ...bond, type: AssetType.BOND })),
//   ...reits.map((reit) => ({ ...reit, type: AssetType.REIT })),
// ];
// fs.writeFileSync("list/asset.json", JSON.stringify(assets));
