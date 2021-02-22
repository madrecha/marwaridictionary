# How to add Marwari words?

This directory contains all the Marwari words.

## Steps to add words
1. Create markdown (md) file with the filename in Transliterated version of Marwari word.
    - e.g., to create the word `लुगाई`, your filename should be `lugaai.md`.
2. Inside the file, initially add following in the Frontmatter:
    - `title`: Marwari word in Devanagri script
    - `transliteration`: Marwari word in English script
    - `slugurl`: same as `title`, but add `-` if title contains multiple words, usually if the title is a phrase. 
        - e.g, if title is `लेई जाणो`, then slugurl should be `लेई-जाणो`
3. After the front matter, add the content.
    1. Figure of Speech (e.g, Noun, Verb, Adjective). This should be preceded by two `##`, i.e. it should be Heading2.
    2. Then, `### Meaning`.
    3. Then add all the meanings of that word, one by one. 
       - Within each meaning, there can be `Examples`, Synonyms, Antonyms, etc.
    4. Usage (if any)
    5. Then, Conjugation for the verb and Declension for the noun.

## Grammar
- It should be an Object in Frontmatter of the file.
- It can have as keys the Figures of Speech, i.e. `adjective`, `noun`, `verb`, `pronoun`, `preposition`, `conjunction`, `interjection`

### adjective
- `adjective` is an Object.
- Currently, it can have as keys:
    1. `gender`: Its values can be `m` or `f`, denoting masculine or feminine, respectively
    2. `number`: Its values can be `s` or `p, denoting singular or plural, respectively

### noun
- `noun` is an Object.
- Currently, it can have as keys:
    1. `gender`: Its values can be `m` or `f`, denoting masculine or feminine, respectively
    2. `gender_f`: Feminine version of the word, provided the current word is masculine.
    3. `gender_f_trans`: Transliteration of the Feminine version of the word
    4. `gender_m`: Masculine version of the word, provided the current word is feminine.
    5. `gender_m_trans`: Transliteration of the Masculine version of the word
    6. `number`: Its values can be `s` or `p, denoting singular or plural, respectively
    7. `ending`: Values can be `a`, `aa`, `ae`, `u`

### verb
- `verb` is an Object.
- Currently, it can have as keys:
    1. `term`: It is used for Conjugation in `verb-conj` component. So, usually it is devoid of **णो** seen mostly in all the Marwari verbs. (see below example)
    2. `trans`: Transliteration of the term.
    3. `ending`: Values can be `a`, `aa`, `ae`, `u`, based what ending the `term` has. (see below example)
    4. `type`: Values can be `transitive` or `intransitive`
    5. `causative`: It is an Object. Its keys can be:
        1. `self`: values can be `1`, `2`, or `3`, based on which form the current verb is.
        2. `verb1`: first verb in causative form
        3. `verb1_trans`: transliteration
        4. `verb2`: second verb in causative form
        5. `verb2_trans`: transliteration
        6. `verb3`: third verb in causative form
        7. `verb3_trans`: transliteration

#### Some examples:
1. For **भागणो** (to run), `term` is `भाग`, `trans` is `bhaag`, `ending` is `a`
2. For **जिमाणो** (to feed), `term` is `जिमा`, `trans` is `jimaa`, `ending` is `aa`
3. For **हुणो** (to sleep), `term` is `हु`, `trans` is `hu`, `ending` is `u`

#### Causative examples:
1. For **भागणो** (to run), 
    ```
    causative:
      self: 1, 
      verb1: 'भागणो' 
      verb1_trans: 'bhaagno'
      verb2: 'भगाणो'
      verb2_trans: 'bhagaano'
      verb3: 'भगवाणो'
      verb3_trans: 'bhagwaano'
    ```
2. For **भगाणो** (to cause to run):
    ```
    causative:
      self: 1, 
      verb1: 'भागणो' 
      verb1_trans: 'bhaagno'
      verb2: 'भगाणो'
      verb2_trans: 'bhagaano'
      verb3: 'भगवाणो'
      verb3_trans: 'bhagwaano'
    ``` 
    - Thus, for all 3 related causative verbs, `verb1`, `verb2`, `verb3` will be the same. Only **`self`** will change depending on which verb is being edited.

### pronoun
- `verb` is an Object.
- Currently, it can have as keys:
    1. `person`: Values can be `1`, `2`, `3`
    2. `number`: Its values can be `s` or `p, denoting singular or plural, respectively

### Important
- For Figures of Speech (FOS), even if you do not specify the sub-keys, it's alright (of course conjugation will not work then), but do not forget to specify the FOS as an Object and not as a String

```
This will work

grammar: 
  noun:

This will not work

grammar: 
  noun
```
## Examples
Write the examples in the Frontmatter instead of directly in the Content. This will help to generate Maintenance categories later in the website to know which all words have examples.

A word can have multiple meanings. For each meaning, there can again be multiple examples. So, `examples` is an Array of Objects.

For each Item (i.e. for each example), there can be:
  - `eg` - The actual example Marwari language
  - `en` - Its English translation. (Note: translation, and not transliteration)
  - `hi` - Its Hindi translation.
  - `mr` - Its Marathi translation.

(Only `eg` is required. Rest translations are optional.)

This `examples` object can then be used as prop in `<eg></eg>` component in the Content.


```
---
examples: 
  - eg: रिजल्ट देखते इन वो खुशी रा मारे फदकवा लागी ग्यो ।
    en: As soon as he saw the result, he started jumping excitedly.
    hi: रिजल्ट देखते ही वो खुुशी के मारे फुदकने लग गया।
    mr: रिजल्ट बघताच तो हर्षाने उड्या मारू लागला.
  - eg: वणीस मीनिंग रो दूसरो इग्ज़ैम्पल ।
    en: Second example of the same meaning
    hi: उसी इग्ज़ैम्पल का दूसरा मीनिंग।
    mr: त्याच अर्थाचा दुसरा उदाहरण.

examples_verb:
    - eg: कणी और मीनिंग रो कई तो एक इग्ज़ैम्पल, वणीस वर्ड वास्ते। 
      en: Some example for a totally different meaning of the same word

examples3:
    - eg: मूँ एक इग्ज़ैम्पल हूँ।
      en: I am an example.
---

## Noun
### Meaning
1. some meaning of the word as a noun
    <eg :eg="examples"></eg>

## Verb
### Meaning
1. some meaning
    <eg :eg="examples_verb"></eg>
2. some other meaning of the word as a verb itself
    <eg :eg="examples3"></eg>


```


## Helpful-content-matter

### Only Verb

```
---
title: फदकणो
transliteration: fadakno
slugurl: फदकणो

grammar: 
  verb:
    term: फदक
    trans: fadak
    ending: a
    type: intransitive
    causative: 
      self: 1
      verb1: फदकणो
      verb2: फदकाणो
      verb3: फदकवाणो

categories:
  - informal

examples: 
  - eg: रिजल्ट देखते इन वो खुशी रा मारे फदकवा लागी ग्यो ।
    en: As soon as he saw the result, he started jumping excitedly.
    hi: रिजल्ट देखते ही वो खुुशी के मारे फुदकने लग गया।
    mr: रिजल्ट बघताच तो हर्षाने उड्या मारू लागला.

examples2:
  - eg: मारवाड़ी इग्ज़ैम्पल
    en: English meaning of Marwari example
    hi: Hindi meaning of Marwari example
---

## Verb
### Meaning
1. To jump excitedly
    <eg :eg="examples"></eg>
2. To be enthusiastic
    <eg :eg="examples2"></eg>

### Usage 
To denote the activity of jumping or dancing with excitement

### Conjugation
<verb-conj :grammar="grammar"></verb-conj>

```

### Verb and Noun

```
---
title: पाणो
transliteration: paano
slugurl: पाणो

grammar: 
  noun:
    gender: m
    number: s
  verb: 
    term: पा
    trans: paa
    ending: aa

---

## Noun
### Meaning
1. instrument

### Declension

## Verb
### Meaning
1. to achieve
2. to cause someone to drink

### Conjugation
<verb-conj :grammar="grammar"></verb-conj>

```