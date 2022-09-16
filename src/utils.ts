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
export const a = ["ኣ", "ዓ"];
export const s = ["ሰ",	"ሱ",	"ሲ",	"ሳ",	"ሴ",	"ስ",	"ሶ"];
export const d = ["ሰ",	"ሱ",	"ሲ",	"ሳ",	"ሴ",	"ስ",	"ሶ"];
export const f = ["ፈ",	"ፉ",	"ፊ",	"ፋ",	"ፌ",	"ፍ",	"ፎ"];
export const g = ["ገ",	"ጉ",	"ጊ",	"ጋ",	"ጌ",	"ግ",	"ጎ"];
export const h = ["ሀ",	"ሁ",	"ሂ",	"ሃ",	"ሄ",	"ህ",	"ሆ", "ኀ",	"ኁ",	"ኂ",	"ኃ",	"ኄ",	"ኅ",	"ኆ"];
export const j = ["ጀ",	"ጁ",	"ጂ",	"ጃ",	"ጄ",	"ጅ",	"ጆ"];
export const k = ["ከ",	"ኩ",	"ኪ",	"ካ",	"ኬ",	"ክ",	"ኮ"];
export const l = ["ለ",	"ሉ", "ሊ",	"ላ",	"ሌ",	"ል",	"ሎ"];
export const z = ["ዘ",	"ዙ",	"ዚ",	"ዛ",	"ዜ",	"ዝ",	"ዞ"];
export const x = ["X", "x"];
export const c = ["ቸ",	"ቹ",	"ቺ",	"ቻ",	"ቼ",	"ች",	"ቾ"];
export const v = ["ቨ",	"ቩ",	"ቪ",	"ቫ",	"ቬ",	"ቭ",	"ቮ"];
export const b = ["በ",	"ቡ",	"ቢ",	"ባ",	"ቤ",	"ብ",	"ቦ"];
export const n = ["ነ",	"ኑ",	"ኒ",	"ና",	"ኔ",	"ን",	"ኖ"];
export const m = ["መ",	"ሙ",	"ሚ",	"ማ",	"ሜ",	"ም",	"ሞ"];
export const sz = ["ሠ",	"ሡ",	"ሢ",	"ሣ",	"ሤ",	"ሥ",	"ሦ"];
export const sh = ["ሸ",	"ሹ",	"ሺ",	"ሻ",	"ሼ",	"ሽ",	"ሾ"];
export const qh = ["ቐ",	"ቑ",	"ቒ",	"ቓ",	"ቔ",	"ቕ",	"ቖ"];
export const ch = ["ቸ",	"ቹ",	"ቺ",	"ቻ",	"ቼ",	"ች",	"ቾ"];
export const ny = ["ኘ",	"ኙ",	"ኚ",	"ኛ",	"ኜ",	"ኝ",	"ኞ"];
export const kk = ["ኸ",	"ኹ",	"ኺ",	"ኻ",	"ኼ",	"ኽ",	"ኾ"];
export const zz = ["ዠ",	"ዡ",	"ዢ",	"ዣ",	"ዤ",	"ዥ",	"ዦ"];
export const cch = ["ጨ",	"ጩ",	"ጪ",	"ጫ",	"ጬ",	"ጭ",	"ጮ"];
export const ss = ["ፀ",	"ፁ",	"ፂ",	"ፃ",	"ፄ",	"ፅ",	"ፆ"];
export const one = ["፩"];
export const two = ["፪"];
// ፩	፪	፫	፬	፭	፮	፯	፰	፱

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
      case "A":
        return a;
        break;
      case "S":
        return s;
        break;
      case "D":
        return d;
        break;
      case "F":
        return f;
        break;
      case "G":
        return g;
        break;
      case "H":
        return h;
        break;
      case "J":
        return j;
        break;
      case "K":
        return k;
        break;
      case "L":
        return l;
        break;
      case "Z":
        return z;
        break;
      case "X":
        return x;
        break;
      case "C":
        return c;
        break;
      case "V":
        return v;
        break;
      case "B":
        return b;
        break;
      case "N":
        return n;
        break;
      case "M":
        return m;
        break;
      case "SZ":
        return sz;
        break;
      case "SH":
        return sh;
        break;
      case "QH":
        return qh;
        break;
      case "CH":
        return ch;
        break;
      case "NY":
        return ny;
        break;
      case "KK":
        return kk;
        break;
      case "ZZ":
        return zz;
        break;
      case "CCH":
        return cch;
        break;
      case "SS":
        return ss;
        break;
    }
}