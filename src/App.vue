<script setup lang="ts">
import { ref } from 'vue'
import { mapCharToLetters, mapNumber } from './utils';

  const numberKeys = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // const numberKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const firstRow = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const secondRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const thirdRow = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];
  const fourthRow = ['SZ','SH', 'QH', 'CH', 'NY', 'KK', 'ZZ', 'CCH', 'SS'];

  const input = ref("");

  const showTranslateOptions = ref(false);

  const toggleShowTranslate = () => showTranslateOptions.value = !showTranslateOptions.value;

  const selectedCharacter = ref("");

  const append = (letter: string) => {
    input.value = input.value.concat(letter);
    if (showTranslateOptions.value === true) {
      toggleShowTranslate();
    }
  }

  const getLetters = () => {
    const options = mapCharToLetters(selectedCharacter.value);
    return options;
  }

  const setSelected = (letter: unknown) => {
    if (typeof letter === "number") {
      const number = mapNumber(letter) as string;
      append(number);
    }
    if (typeof letter === "string") {
      selectedCharacter.value = letter;
      toggleShowTranslate();
    }
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
    selectedCharacter.value = "";
    showOverlay.value = false;
  }

  const showOverlay = ref(false);
  const opacity = ref(0.8);
  const persistent = ref(false);
  const persistentNoAnimation = ref(false);

</script>

<template>
  <w-app block>
    <main>
      <h1 class="heading">fidel-app</h1>
      <br />
      <div>
        <div class="input-area">
          <h3 class="thin-text">{{ input }}</h3>
        </div>
        <div v-show="showTranslateOptions">
          <div class="letter-options">
            <w-button v-for="char of getLetters()" :key="char" class="box xs1" @click="append(char)">{{ char }}</w-button>
          </div>
        </div>
        <div v-show="!showTranslateOptions" class="pad-options-area"></div>
        <div class="delete-keys">
          <w-button @click="showOverlay = true">Clear</w-button>
          <w-button @click="backspace" >Backspace</w-button>
          <w-button @click="newLine" >⏎</w-button>
        </div>
        <div class="centre-align">
          <w-button v-for="number of numberKeys" :key="number" class="box xs1" @click="setSelected(number)">{{ number }}</w-button>
        </div>
        <div class="centre-align">
          <w-button v-for="letter of firstRow" :key="letter" class="xs1 align-center" @click="setSelected(letter)">{{ letter }}</w-button>
          </div>
        <div class="centre-align">
          <w-button v-for="letter of secondRow" :key="letter" class="xs1 align-center centre-align" @click="setSelected(letter)">{{ letter }}</w-button>
        </div>
        <div class="centre-align">
            <w-button v-for="letter of thirdRow" :key="letter" class="xs1 centre-align" @click="setSelected(letter)">{{ letter }}</w-button>
        </div>
        <div class="centre-align">
          <w-button v-for="letter of fourthRow" :key="letter" class="xs1 centre-align" @click="setSelected(letter)">{{ letter }}</w-button>
        </div>
        <div class="centre-align">
          <w-button @click="addSpace" class="space-bar"></w-button>
        </div>
        <w-overlay
        v-model="showOverlay"
        :persistent="persistent"
        :persistent-no-animation="persistentNoAnimation"
        :opacity="opacity">
          <w-button bg-color="primary" xl dark @click="clear">
            Clear
          </w-button>
          <w-button bg-color="primary" xl dark @click="showOverlay = false">
            Cancel
          </w-button>
        </w-overlay>
      </div>
    </main>
  </w-app>
</template>

<style scoped>

.heading {
    margin-top: 5%;
  }
.thin-text {
  font-weight: 200;
}
.centre-align {
  text-align: center;
}
.letter-options {
  text-align: center;
}
.delete-keys {
  text-align: right;
}
.space-bar {
  padding: 20px 20%;
}
button {
  border: 2px solid black;
  /* border-radius: 12px; */
  padding: 10px;
  margin: 2.5px;
}
.pad-options-area {
  padding: 16px;
}
.input-area {
  white-space: pre-wrap;
  margin-bottom: 5px;

  padding: 0 50px 0 10px;
  border: 2px solid #656464;
  border-radius: 10px;
}

.input-area h3 {
  display: flex;
  align-items: center;
  gap: 2px;
}

@keyframes cursor-blink {
  0% {
    opacity: 0;
  }
}

.input-area h3::after {
  content: "";
  width: 5px;
  height: 32px;
  background: #ec7fff;
  display: inline-block;
  animation: cursor-blink 1.5s steps(2) infinite;
}
.w-overlay {backdrop-filter: blur(10px);}
</style>
