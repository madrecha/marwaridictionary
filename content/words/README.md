# How to add Marwari words?

This directory contains all the Marwari words.

## Steps to add words
1. Create markdown (md) file with the filename in Transliterated version of Marwari word.
    - e.g., to create the word `लुगाई`, your filename should be `lugaai`.
2. Inside the file, initially add following in the Frontmatter:
    - `title`: Marwari word in Devanagri script
    - `transliteration`: Marwari word in English script
    - `slugurl`: same as `title`, but add `-` if title contains multiple words, usually if the title is a phrase. 
        - e.g, if title is `लेई जाणो`, then slugurl should be `लेई-जाणो`
3. After the front matter, add the content.
    - Figure of Speech (e.g, Noun, Verb, Adjective). This should be preceded by two `##`, i.e. it should be Heading2.
    - Then, `### Meaning`.
    - Then add all the meanings of that word.
