---
slugurl: हमजणो
transliteration: hamajno

similar:
  - हजमणो

translations_adjective:
  - context:
    hi: समझदार
    hi_trans: samajhdaar

translations_noun:
  - context:
    hi: समझदार
    hi_trans: samajhdaar

translations_verb:
  - context:
    hi: समझना
    hi_trans: samajhna

grammar:
  adjective:
    ending: o
    term: हमजण
    trans: hamajn
    gender: m
    gender_f: हमजणी
    gender_f_trans: hamajni
    number: s

  verb:
    term: हमज
    trans: hamj
    ending: a
    causative:
      self: 1
      verb1: हमजणो
      verb1_trans: hamajno
      verb2: हमजाणो
      verb2_trans: hamjaano
      verb3: हमजवाणो
      verb3_trans: hamajvano
    type:
      - transitive

---

## Adjective

### Meaning

<word-meanings>

1. understanding
2. practical

</word-meanings>

### Translation

<translation :translation="translations_adjective" ></translation>

## Noun

### Meaning

<word-meanings>

1. understanding person
2. practical person

</word-meanings>

### Translation

<translation :translation="translations_noun" ></translation>

## Verb

### Meaning

<word-meanings>

1. to understand
2. to comprehend
3. to realise something

</word-meanings>

### Synonyms

<word-synonyms :syns="['ठा-पड़णो']"></word-synonyms>

### Translation

<translation :translation="translations_verb" ></translation>

### Conjugation

<verb-conj :grammar="grammar" ></verb-conj>
