import fs from "fs";
import { krETFs } from "./kr-etfs";
import { krStocks } from "./kr-stocks";
import { krBonds } from "./kr-bonds";
import { krReits } from "./kr-reits";
import { AssetListItem, AssetType } from "./model";
import { enETFs } from "./en-etfs";
import { enStocks } from "./en-stocks";
import { enBonds } from "./en-bonds";
import { enReits } from "./en-reits";

fs.writeFileSync("list/etf.json", JSON.stringify(krETFs));
fs.writeFileSync("list/stock.json", JSON.stringify(krStocks));
fs.writeFileSync("list/bond.json", JSON.stringify(krBonds));
fs.writeFileSync("list/reit.json", JSON.stringify(krReits));

fs.writeFileSync("list/en-etf.json", JSON.stringify(enETFs));
fs.writeFileSync("list/en-stock.json", JSON.stringify(enStocks));
fs.writeFileSync("list/en-bond.json", JSON.stringify(enBonds));
fs.writeFileSync("list/en-reit.json", JSON.stringify(enReits));

// const assets: AssetListItem[] = [
//   ...etfs.map((etf) => ({ ...etf, type: AssetType.ETF })),
//   ...stocks.map((stock) => ({ ...stock, type: AssetType.STOCK })),
//   ...bonds.map((bond) => ({ ...bond, type: AssetType.BOND })),
//   ...reits.map((reit) => ({ ...reit, type: AssetType.REIT })),
// ];
// fs.writeFileSync("list/asset.json", JSON.stringify(assets));
