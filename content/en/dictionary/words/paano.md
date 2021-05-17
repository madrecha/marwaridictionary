---
slugurl: पाणो
transliteration: paano

grammar: 
  noun:

    ending: o
    term: पाण
    trans: paan
    gender: m
    number: s

  verb: 

    term: पा
    trans: paa
    ending: aa

meanings:

  - meaning: instrument

examples: 

  - eg: पाणो ला, म्हारे यो नल ठीक करणो है।

    en: Bring the instrument, I have to repair this tap.

meanings_verb: 

  - meaning: to achieve

    examples: 

      - eg: मूँ म्हारो गोल पाईन ईस रेऊँ।

        en: I will definitely achieve my goal

  - meaning: to cause someone to drink; to offer to drink

    examples: 

      - eg: थाक्यातका ने पाणी पाणो पुण्य रो काम है।

        en: It is a merit to offer water to a tired person.

---

## Noun

### Meaning

<!-- <meaning :meanings="meanings" ></meaning> -->

1. instrument

   <w-eg>
   <template #mwr> <b>पाणो</b> ला, म्हारे यो नल ठीक करणो है।</template>
   <template #en>Bring the <b>instrument</b>, I have to repair this tap.</template>
   </w-eg>

### Declension

<noun-decl :grammar="grammar" ></noun-decl>

## Verb

### Meaning

<word-meanings>

1. to **achieve** 

   <w-eg>
   <template #mwr> मूँ म्हारो गोल <b>पाईन</b> ईस रेऊँ।</template>
   <template #en>I will definitely <b>achieve</b> my goal.</template>
   </w-eg> 

2. to cause someone to **drink**; to offer to drink

   <word-eg> 
   <template #mwr>थाक्यातका ने पाणी पाणो पुण्य रो काम है।</template>
   <template #en>It is a merit to offer water to a tired person.</template>
   </word-eg>

   <word-ants :antonyms="['कुत्री', 'फदकणो']"></word-ants>

   <word-syns :syns="['कुत्री', 'फदकणो']"></word-syns>

</word-meanings>

<!-- <meaning :meanings="meanings_verb" ></meaning> -->

### Synonyms

<w-syns :syns="['कुत्री', 'फदकणो']" :color=false></w-syns>

### Conjugation

<verb-conj :grammar="grammar" ></verb-conj>
