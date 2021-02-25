---
url: 
  title: हमजणो
  transliteration: hamajno
  slugurl: हमजणो

meanings_adjective:
  - meaning: understanding
  - meaning: practical
 
meanings_noun:
  - meaning: understanding person
  - meaning: practical person

meanings_verb:
  - meaning: to understand
  - meaning: to comprehend
  - meaning: to realise something

# examples:
#   - eg:
#     eg_trans: 
#     en:
#   - eg:
#     en:

synonyms_verb:
  - syn: ठा पड़णो
    slugurl: ठा-पड़णो
    syn_trans: tha padno

# antonyms:
#   - ant:
#     ant_trans: 

# related:
#   - rel:
#     rel_trans: 

similar:
  - sim: हजम करणो
    sim_trans: hajam karno
    slugurl: हजम-करणो

translations_adjective:
  - context:
    hi: समझदार
    hi_trans: samajhdaar
    mr:
    mr_trans:

translations_noun:
  - context:
    hi: समझदार
    hi_trans: samajhdaar
    mr:
    mr_trans:

translations_verb:
  - context:
    hi: समझना
    hi_trans: samajhna
    mr:
    mr_trans:

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
    trans: hamaj
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

# categories:
#   -

# topics:
#   -

# abc: abc   
---

## Adjective
### Meaning
<meaning :meanings="meanings_adjective" :url="url"></meaning>

### Translation
<translation :translation="translations_adjective" :url="url"></translation>

## Noun
### Meaning
<meaning :meanings="meanings_noun" :url="url"></meaning>

<!-- ### Examples
<eg :eg="examples" :url="url"></eg> -->

<!-- ### Synonyms
<syn :syn="synonyms" :url="url"></syn> -->

<!-- ### Antonyms
<ant :ant="antonyms" :url="url"></ant> -->

### Translation
<translation :translation="translations_noun" :url="url"></translation>

<!-- ### Declension
<noun-decl :grammar="grammar" :url="url"></noun-decl> -->

<!-- ### Related
<related :related="related" :url="url"></related> -->

<!-- ### Similar
<similar :similar="similar" :url="url"></similar> -->

## Verb
### Meaning
<meaning :meanings="meanings_verb" :url="url"></meaning>

<!-- ### Examples
<eg :eg="examples_verb" :url="url"></eg> -->

### Synonyms
<syn :syn="synonyms_verb" :url="url"></syn>

<!-- ### Antonyms
<ant :ant="antonyms" :url="url"></ant> -->

### Translation
<translation :translation="translations_verb" :url="url"></translation>

### Conjugation
<verb-conj :grammar="grammar" :url="url"></verb-conj>