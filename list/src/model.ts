export enum AssetType {
  ETF = "etf",
  STOCK = "stock",
  BOND = "bond",
  REIT = "reit",
}

export interface AssetListItem {
  id: string;
  // url: string;
  // type: AssetType;
  name: string;
  desc: string;
  logo?: string;
}
