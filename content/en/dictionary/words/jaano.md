---
slugurl: जाणो
transliteration: jaano

grammar: 
  word: जाणो
  noun: 
    term: जा
    ending: o
    gender: m

  verb:
    term: जा
    gender: a
    trans: jaa
    ending: aa
    type: intransitive

# synonyms: 
#   - जाणो-परो

# antonyms:
#   - आणो
#   - वापिस-आणो

related:
  - लाणो
  - लेई-जाणो

translation: 
  - context: to go
    hi: जाना
    mr: जाणे
  - context: to die
    hi: जाना
    mr: जाणे

---

## Verb

### Meaning

<word-meanings>

1. to go 🚶🏻‍♂️
    
    <word-eg>
    <template #mwr>कटे <b>जाई रो है</b>?</template>
    <template #mwrlatn>Kate jaayi ro hai?</template>
    <template #en>Where are you going?</template>
    </word-eg>

    <word-eg>
    <template #mwr>थारे कधी <b>जाणो</b> है?</template>
    <template #mwrlatn>Thaare kadhi jaano hai?</template>
    <template #en>When are you supposed to go?</template>
    </word-eg>

    <word-antonyms :ants="['आणो']"></word-antonyms>

2. to die 💀

    <word-eg>
    <template #mwr>एक दन तो सब ने ईस <b>जाणो</b> है।</template>
    <template #mwrlatn>Ek dan toh sab ne is jaano hai.</template>
    <template #en>One day, everyone has to go.</template>
    </word-eg>

    <word-synonyms :syns="['मरणो']"></word-synonyms>

</word-meanings>

## Translation

<translation :translation="translation" ></translation> 

### Conjugation

<verb-conj :grammar="grammar" ></verb-conj> 

