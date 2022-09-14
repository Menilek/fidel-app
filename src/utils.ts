export const q = ["ቀ",	"ቁ", "ቂ",	"ቃ",	"ቄ",	"ቅ",	"ቆ"];
export const w = ["ወ",	"ዉ",	"ዊ",	"ዋ",	"ዌ",	"ው",	"ዎ"];
export const e = ["ኤ", "ዔ"];
export const r = ["ረ",	"ሩ",	"ሪ",	"ራ",	"ሬ",	"ር",	"ሮ"];
export const t = ["ተ",	"ቱ",	"ቲ",	"ታ",	"ቴ",	"ት",	"ቶ"];
export const y = ["የ",	"ዩ",	"ዪ",	"ያ",	"ዬ",	"ይ",	"ዮ"];
export const u = ["ኡ", "ዑ"];
export const i = ["ኢ", "ዒ"];
export const o = ["ኦ", "ዖ"];
export const p = ["ጰ",	"ጱ",	"ጲ",	"ጳ",	"ጴ",	"ጵ",	"ጶ"];

export const l = ["ለ",	"ሉ", "ሊ",	"ላ",	"ሌ",	"ል",	"ሎ"];

export const mapCharToLetters = (char: string) => {
    switch(char) {
      case "Q":
        return q;
        break;
      case "W":
        return w;
        break;
      case "E":
        return e;
        break;
      case "R":
        return r;
        break;
      case "T":
        return t;
        break;
      case "Y":
        return y;
        break;
      case "U":
        return u;
        break;
      case "I":
        return i;
        break;
      case "O":
        return o;
        break;
      case "P":
        return p;
        break;
      case "L":
        return l;
        break;
    }
  }