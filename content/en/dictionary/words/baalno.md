---
slugurl: बाळणो
transliteration: baalno

meanings:

  - meaning: air

meanings_verb:

  - meaning: to cause to burn
  - meaning: to cause jealousy

# examples:

#   - eg:

#     en:

#   - eg:

#     en:

synonyms: 

  - syn: जळाणो

# antonyms:

#   - ant:

related:

  - rel: बाळ

    rel_trans: baal

translations:

  - context: air

    hi: हवा
    hi_trans: hawa

translations_verb:

  - context: burn

    hi: जलाना
    hi_trans: jalaana

  - context: jealousy

    hi: जलाना
    hi_trans: jalaana

grammar:
  noun:

    ending: o
    term: बाळण
    trans: baaln
    gender: m
    number: s

  verb:

    term: बाळ
    trans: baal
    ending: a
    causative:
      self: 2
      verb1: बळणो
      verb1_trans: balno
      verb2: बाळणो
      verb2_trans: baalno
      verb3: बाळाणो
      verb3_trans: balaano
    type:

      - transitive

# categories:

#   -

topics:

  - fire

# abc: abc   

---

## Noun

### Meaning

<meaning :meanings="meanings" ></meaning>

<!-- ### Examples
<eg :eg="examples" ></eg> -->

### Synonyms

<syn :syn="synonyms" ></syn>

<!-- ### Antonyms
<ant :ant="antonyms" ></ant> -->

### Translation

<translation :translation="translations" ></translation>

### Declension

<noun-decl :grammar="grammar" ></noun-decl>

### Related

<related :related="related" ></related>

## Verb

### Meaning

<meaning :meanings="meanings_verb" ></meaning>

### Translation

<translation :translation="translations_verb" ></translation>

### Conjugation

<verb-conj :grammar="grammar" ></verb-conj>
