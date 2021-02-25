---
url: 
  title: बाळणो
  transliteration: baalno
  slugurl: बाळणो

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
<meaning :meanings="meanings" :url="url"></meaning>

<!-- ### Examples
<eg :eg="examples" :url="url"></eg> -->

### Synonyms
<syn :syn="synonyms" :url="url"></syn>

<!-- ### Antonyms
<ant :ant="antonyms" :url="url"></ant> -->

### Translation
<translation :translation="translations" :url="url"></translation>

### Declension
<noun-decl :grammar="grammar" :url="url"></noun-decl>

### Related
<related :related="related" :url="url"></related>

## Verb
### Meaning
<meaning :meanings="meanings_verb" :url="url"></meaning>

### Translation
<translation :translation="translations_verb" :url="url"></translation>

### Conjugation
<verb-conj :grammar="grammar" :url="url"></verb-conj>