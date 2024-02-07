import fs from "fs";

enum AssetType {
  ETF = "etf",
  STOCK = "stock",
  BOND = "bond",
  REIT = "reit",
}

export const assets: {
  id: string;
  // url: string;
  type: AssetType;
  name: string;
  desc: string;
  logo?: string;
}[] = [
  {
    id: "voo",
    type: AssetType.ETF,
    logo: "vanguard.png",
    name: "VOO",
    desc: "미국 S&P500",
  },
  {
    id: "qqq",
    type: AssetType.ETF,
    logo: "invesco.svg",
    name: "QQQ",
    desc: "미국 NASDAQ100",
  },
  {
    id: "xlk",
    type: AssetType.ETF,
    logo: "statestreet.png",
    name: "XLK",
    desc: "미국 기술주",
  },
  {
    id: "dgro",
    type: AssetType.ETF,
    logo: "ishares.png",
    name: "DGRO",
    desc: "미국 배당성장주",
  },
  {
    id: "schd",
    type: AssetType.ETF,
    logo: "charlesschwab.svg",
    name: "SCHD",
    desc: "미국 배당성장주",
  },
  {
    id: "xlv",
    type: AssetType.ETF,
    logo: "statestreet.png",
    name: "XLV",
    desc: "미국 헬스케어 관련주",
  },
  {
    id: "xlf",
    type: AssetType.ETF,
    logo: "statestreet.png",
    name: "XLF",
    desc: "미국 금융주",
  },
  {
    id: "xle",
    type: AssetType.ETF,
    logo: "statestreet.png",
    name: "XLE",
    desc: "미국 에너지 관련주",
  },
  {
    id: "xlc",
    type: AssetType.ETF,
    logo: "statestreet.png",
    name: "XLC",
    desc: "미국 미디어와 통신 관련주",
  },
  {
    id: "xlre",
    type: AssetType.ETF,
    logo: "statestreet.png",
    name: "XLRE",
    desc: "미국 미디어와 통신 관련주",
  },

  {
    id: "aiq",
    type: AssetType.ETF,
    logo: "globalx.png",
    name: "AIQ",
    desc: "인공지능 관련주",
  },
  {
    id: "sol-snp-500esg",
    type: AssetType.ETF,
    logo: "sinhan.png",
    name: "SOL 미국S&P500ESG",
    desc: "ESG 관련주",
  },
  {
    id: "alphabet-class-a",
    type: AssetType.STOCK,
    logo: "alphabet-class-a.svg",
    name: "구글 알파벳 (Google Alphabet)",
    desc: "검색 기업",
  },
];

fs.writeFileSync("list/asset.json", JSON.stringify(assets));
