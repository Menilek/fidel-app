<script setup lang="ts">
import { ref } from 'vue'

  const firstRow = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const secondRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const thirdRow = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];
  const fourthRow = ['SZ','SH', 'QH', 'CH', 'NY', 'KK', 'ZZ', 'CCH', 'SS'];

  const q = ["ቀ",	"ቁ", "ቂ",	"ቃ",	"ቄ",	"ቅ",	"ቆ"];
  const w = ["ወ",	"ዉ",	"ዊ",	"ዋ",	"ዌ",	"ው",	"ዎ"];
  const e = ["ኤ", "ዔ"];
  const r = ["ረ",	"ሩ",	"ሪ",	"ራ",	"ሬ",	"ር",	"ሮ"];
  const t = ["ተ",	"ቱ",	"ቲ",	"ታ",	"ቴ",	"ት",	"ቶ"];
  const y = ["የ",	"ዩ",	"ዪ",	"ያ",	"ዬ",	"ይ",	"ዮ"];
  const u = ["ኡ", "ዑ"];
  const i = ["ኢ", "ዒ"];
  const o = ["ኦ", "ዖ"];
  const p = ["ጰ",	"ጱ",	"ጲ",	"ጳ",	"ጴ",	"ጵ",	"ጶ"];

  const l = ["ለ",	"ሉ", "ሊ",	"ላ",	"ሌ",	"ል",	"ሎ"];


  const input = ref("");

  const showTranslateOptions = ref(false);

  const toggleShowTranslate = () => showTranslateOptions.value = !showTranslateOptions.value;

  const selectedCharacter = ref("");

  const mapCharToLetters = (char: string) => {
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

  const append = (letter: string) => {
    input.value = input.value.concat(letter);
    toggleShowTranslate();
  }

  const getLetters = () => {
    const options = mapCharToLetters(selectedCharacter.value);
    return options;
  }

  const setSelected = (letter: string) => {
    selectedCharacter.value = letter;
    toggleShowTranslate();
  }

  const backspace = () => {
    input.value = input.value.slice(0, -1);
  }

  const newLine = () => {
    input.value = input.value.concat("\n");
  }

  const addSpace = () => {
    input.value = input.value.concat(" ");
  }

  const clear = () => {
    input.value = "";
  }

  // CAPTURE KEYBOARD INPUT
  // E.G ON PRESSING Q RENDER OPTIONS AND ACCEPT NUMERIC INPUT FOR OPTION OF CHOICE

</script>

<template>
  <h1>fidel-app</h1>
  <br />
  <div>
    <div class="input-area">
      <h1 class="thin-text">{{ input }}</h1>
    </div>
    <div v-show="showTranslateOptions">
      <button v-for="char of getLetters()" :key="char" @click="append(char)">{{ char }}</button>
    </div>
    <div v-show="!showTranslateOptions" class="pad-options-area"></div>
    <div class="backspace-key">
      <button @click="clear">Clear</button>
      <button @click="backspace">Backspace</button>
    </div>
    <div class="centre-align">
      <button v-for="letter of firstRow" :key="letter" @click="setSelected(letter)">{{ letter }}</button>
      <button @click="newLine">⏎</button>
    </div>
    <div class="second-row">
      <button v-for="letter of secondRow" :key="letter" @click="setSelected(letter)">{{ letter }}</button>
    </div>
    <div class="third-row">
      <button v-for="letter of thirdRow" :key="letter" @click="setSelected(letter)">{{ letter }}</button>
    </div>
    <div class="fourth-row">
      <button v-for="letter of fourthRow" :key="letter" @click="setSelected(letter)">{{ letter }}</button>
    </div>
    <div class="centre-align">
      <button @click="addSpace" class="space-bar"></button>
    </div>
  </div>
</template>

<style scoped>
.thin-text {
  font-weight: 200;
}
.centre-align {
  text-align: center;
}
.backspace-key {
  text-align: right;
}
.space-bar {
  padding: 20px 20%;
}
button {
  border: 2px solid black;
  border-radius: 12px;
  padding: 10px;
  margin: 5px;
}
.pad-options-area {
  padding: 27.5px;
}
.input-area {
  white-space: pre-wrap;
  margin-bottom: 5px;

  padding: 0 50px 0 10px;
  border: 2px solid #656464;
  border-radius: 10px;
}

.input-area h1 {
  display: flex;
  align-items: center;
  gap: 2px;
}

@keyframes cursor-blink {
  0% {
    opacity: 0;
  }
}

.input-area h1::after {
  content: "";
  width: 5px;
  height: 32px;
  background: #ec7fff;
  display: inline-block;
  animation: cursor-blink 1.5s steps(2) infinite;
}
</style>
