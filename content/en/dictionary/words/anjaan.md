---
url: 
  title: अणजान
  transliteration: anjaan
  slugurl: अणजान

meanings:
  - meaning: strange, unknown

meanings_noun:
  - meaning: stranger, unknown person

# examples:
#   - eg:
#     en:
#   - eg:
#     en:

# synonyms:
#   - syn:
#     slugurl:

# antonyms:
#   - ant:

related:
  - rel: अणजाण्यो
    rel_trans: anjaanyo

translations:
  - context:
    hi: अनजान
    hi_trans: anjaan
    # mr:
    # mr_trans:

translations_noun:
  - context:
    hi: अनजान
    hi_trans: anjaan

grammar:
  adjective:
    ending: a
    term: अणजान
    trans: anjaan
    gender: m
    gender_f: अणजाणी
    gender_f_trans: anjaani
    number: s
  noun:
    ending: a
    term: अणजान
    trans: anjaan
    gender: m
    gender_f: अणजान
    gender_f_trans: anjaan
    number: s

# categories:
#   -

# topics:
#   -

# abc: abc   
---

## Adjective
### Meaning
<meaning :meanings="meanings" :url="url"></meaning>

### Translation
<translation :translation="translations" :url="url"></translation>

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

### Declension
<noun-decl :grammar="grammar" :url="url"></noun-decl>

### Related
<related :related="related" :url="url"></related>