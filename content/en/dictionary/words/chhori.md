---
url:
  title: छोरी
  transliteration: chhori
  alt_trans:
    - chori
  slugurl: छोरी

meanings: 
  - meaning: girl
  - meaning: daugter

# examples:
#   - eg:
#     eg_trans: 
#     en:
#     hi:
#   - eg:
#     en:

synonyms:
  - syn: लड़की
    syn_trans: ladki
  - syn: छोकरी
    syn_trans: chhokri

antonyms:
  - ant: छोरो
    ant_trans: chhoro
  - ant: लड़को
    ant_trans: ladko

# related:
#   - rel:
#     slugurl
#     rel_trans: 

# similar:
#   - sim: 
#     slugurl:
#     sim_trans:

translations:
  - context:
    hi: लड़की
    hi_trans: ladki
    mr: मुलगी, पोरगी
    mr_trans: mulgi, porgi


grammar:
  noun:
    ending: ii
    term: छोर
    trans: chhor
    gender: f
    gender_m: छोरो
    gender_m_trans: chhoro
    number: s

topics:
  - person


---

## Noun
<!-- <fos :grammar="grammar" :url="url"></fos> -->

### Meaning
<meaning :meanings="meanings" :url="url"></meaning>

<!-- ### Examples
<eg :eg="examples" :url="url"></eg> -->

### Synonyms
<syn :syn="synonyms" :url="url"></syn>

### Antonyms
<ant :ant="antonyms" :url="url"></ant>

### Translation
<translation :translation="translations" :url="url"></translation>

### Declension
<noun-decl :grammar="grammar" :url="url"></noun-decl>

<!-- ### Related
<related :related="related" :url="url"></related> -->

<!-- ### Similar
<similar :similar="similar" :url="url"></similar> -->