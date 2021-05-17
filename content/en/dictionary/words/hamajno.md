---
slugurl: हमजणो
transliteration: hamajno

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

synonyms_verb:

  - syn: ठा पड़णो

    slugurl: ठा-पड़णो
    syn_trans: tha padno

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

# abc: abc   

---

## Adjective

### Meaning

<meaning :meanings="meanings_adjective" ></meaning>

### Translation

<translation :translation="translations_adjective" ></translation>

## Noun

### Meaning

<meaning :meanings="meanings_noun" ></meaning>

### Translation

<translation :translation="translations_noun" ></translation>

## Verb

### Meaning

<meaning :meanings="meanings_verb" ></meaning>

### Synonyms

<syn :syn="synonyms_verb" ></syn>

### Translation

<translation :translation="translations_verb" ></translation>

### Conjugation

<verb-conj :grammar="grammar" ></verb-conj>
