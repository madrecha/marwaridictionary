---

---

# Plan and Structure


## 1. Locale 🌏

Currently, I have added internationalization:

1. Added @nuxt/i18n module
2. Changed the structure of the `content` directory with locales being the root folders inside it.

## 2. Pages 📚

Currently, there are two root-level pages in the website
1. /dictionary
2. /about

But, in future, there should be following dynamic root-level pages:
1. /dictionary
2. /topic
3. /label
4. /browse
5. /grammar
6. /thesaurus
7. /etymology
8. /pronunciation
9. /rhymes
10. /learn
11. /blog 
12. /whats-new or /updates

And absolutely static root-level pages will be:
1. /about
2. /contact-us
3. /contribute (an external link pointing to the Github repo)

-----

Now, let us see in detail each page.

### 2.1. Dictionary 🧾

[marwari.info](https://marwari.info) is not only a dictionary, but will also contain blog, learning section, etc. 

So, there needs to be a `dictionary` page to demarcate it from the rest of the website and inside which there will be definitions.

#### 2.1.1. Dictionary index page

It should contain list of all dictionaries that will be available on the website. 

Examples:
1. **marwari** (i.e. normal monolingual dictionary which is not yet planned)
2. **marwari-english** (i.e. bilingual dictionary which is currently being made. Also, it is the most easy to make for majority of native speakers)
3. **english-marwari** (i.e. bilingual dictionary, which again can be made easily from Oxford 3000 essential words.)
4. **marwari-hindi**, 
5. **marwari-marathi**, 
6. **marwari-gujarati**, 
7. **marwari-tamil**, etc.

In long-term, there can also be dictionaries for specific dialects like:
1. **mewadi**
2. **gorwari**, etc.

In short, there is a need for index page of Dictionary. ✅

#### 2.1.2. Dictionary type

<details>

<summary>Types of Dictionaries we plan to have 😃</summary>

1. Bilingual dictionary
   
   - Currently, what we are making is not exactly a monolingual dictionary _per se_ because we are writing the meanings of each word in English. So, to be precise, it is a **bilingual dictionary**.
  
   - In future, we plan to add meanings of each word in Hindi, Marathi, Gujarati and even some South Indian language like Tamil. Then, the website will become a **portal of multiple bilingual dictionaries**. 

2. Monolingual dictionary
   
   - Despite each word having its meanings written in multiple languages as aforementioned, it will still be considered as a bilingual dictionary only. 
   
   - Whereas in a normal monolingual dictionary, the meanings are also written in the same language, so had we written the meanings in Marwari too, then we can say it's a normal dictionary.
   
   - **Why should we do this?**
     1. It will be an actual dictionary.
     2. Each Marwari word will have its meaning written in Marwari words.
   
   - **Why should we not do this?**
     1. Such content will serve only one class of persons: Marwari native speakers with already some knowledge of Marwari.

   - **Conclusion**: Yes, maybe in future, we can plan to add such kind of _normal monolingual dictionary_.
  
3. Bilingualized dictionary
   - A bilingualised dictionary is a combination of a learner's monolingual dictionary (same number of entries and meanings for each entry) with a translation of the entry. ([ref](https://www.researchgate.net/publication/313129283_Monolingual_bilingual_and_'bilingualised'_dictionaries_Which_are_more_effective_for_what_and_for_whom))
   - Currently, some words inside the **marwari-english** dictionary has some translations in Hindi and Marathi. But, since it has the meanings written in English, and not Marwari, so _per se_, it is not a Bilingualized dictionary. 
     - Also, on a side note, it is better to no more include such translations in the same dictionary itself, rather create new dictionary for this purpose.
   - Anyway, the bilingual dictionary that we plan to create (and currently, we are creating) is not a simple one-to-one translation of the Marwari word. It has full-fledged details on "usage", "synonyms", "antonyms", etc.
   - So, there is no plan to create a separate Bilingualized dictionary of Marwari. Rather, the bilingual dictionary will suffice and will be more helpful.

</details>


From current URL structure of `/dictionary/word/<word>`, there is a need to change it to
`/dictionary/<dictionary-type>/<word>`

1. A new nesting of `<dictionary-type>` is needed, as in future, we may create more dictionaries. (see above Types of Dictionaries)


**Note**: Even ahead of the actual word, there can be further URL, e.g. `/dictionary/<dictionary-type>/<word>/citations`. But this is not yet planned.

##### 2.1.2.1. Word

Currently, the URL structure of each word post is: `/dictionary/word/<word>`

So, it has:
1. dictionary
2. word
3. `<word>`

- **Currently**, the 2nd level static "word" index page displays the list of all the words added. 
- In **future**, we can better arrange this structure by having the list of all the words inside a new page `/browse`. (see below). 

Each word is dynamically generated based on markdown file. 

To know what should be displayed on each word post, see below Layout heading.


### 2.2. Topic 🏷

`/topic`

It will display list of all topics and sub-topics, along with the list of the words belonging to each topic.

**What is a topic?** A **topic** is related to the meaning of the word, and not word itself. Each word can have multiple topics.

E.g. **गंड़कडो** (dog) 🐶
  - topics: domestic-animal, animal

**Note**: Undoubtedly, `/topic` should be separate page. But, inside how should they be nested is a matter of discussion (WIP). 

#### 2.2.1. Nesting the topics

   - A topic can have multiple sub-topics. E.g., "domestic-animal" will be sub-topic of "animal". So, should domestic-animal's URL be nested inside animal's? 
   - I don't think this is a good idea because what if some topic has multiple parents, and what if some parents are changed!
   - So, it is better to let each topic have its own URL. E.g. `/topic/animal` and `/topic/domestic-animal`.
   - **Note**: Same logic also applies to `/label` (see below)

-----

Currently, `/topic` is a sub-page of the `/dictionary`, i.e. currently the URL is `/dictionary/topic/`, but, it should be moved to its own separate root level, i.e. `/topic`. 

Why?

Topic of the word is related to its meaning, so it is not dependent on the type of dictionary. E.g. a dog 🐶 will be animal irrespective of whether the dictionary is **marwari-english** or **english-marwari**


#### 2.2.2. Words in each topic

Should the above example word **गंड़कडो** 🐶 be displayed in `animal` or `domestic-animal` or both?

- If it to be displayed in **only domestic-animal**, then only that topic needs to be added inside the word.

- But, if it is to be **displayed in both**, then either 
  1. both the topics should be added inside the word file OR
  2. only domestic-animal should be added, and rest will depend on the code to fetch the children topics on a parent topic page, and display the word there too.
  - Currently, I am doing the 1st option. But, of course, the 2nd option is better. So, the medium-term plan lies in writing the code thereof. 

-----

#### 2.2.3. Grammar categories 

Apart from these topics, a word can also have `grammar categories`, i.e. **noun, masculine noun, countable noun, intransitive verb**, etc. 

Such "grammar categories" are different from normal "topics", and should accordingly be nested inside a new root-page `/grammar` (see below).

### 2.3. Label 🏷

A **label** is related to the word itself, unlike **topic** which is related to the meaning of the word. Each word can have multiple labels. 

`/label`

It basically denotes the usage of the word or the type of connotation the word has.

E.g. **गंड़कडो** (dog) 🐶 
  - labels: rural, informal

E.g. **पधारणो** (to arrive; to come) 🚶🏻‍♂️
  - labels: formal

So, `/label` will have such sub-pages:
1. /label/rural
2. /label/formal
3. /label/rare
4. /label/endearing

### 2.4. Browse 👀

`/browse `

**Lists of ALL words** should be displayed here. 

#### 2.4.1. Need for `/browse` page

It seems that `/browse` page will contain only lists of words, albeit arranged systematically.

So, would it not be better to have such lists displayed directly in the index pages of the `dictionary/<dictionary>/definition` sub-page? **No**. 

**Why**?
1. Leaner URL
2. Better SEO
3. Improved user experience 
4. Better to have the list of words arranged dictionary-wise.
5. For users wanting to literally "browse" all the words like a usual dictionary, just to learn new words randomly but alphabetically.

In short, we need a `/browse` page.

#### 2.4.2. Plan for `/browse` page

##### 2.4.2.1. Short-term plan

Intially, all words can be displayed directly on the index page of the browse, as they are few.

##### 2.4.2.2. Medium-term plan

As the list crosses a 1000 words, it will be better to create sub-pages based on alphabets, i.e. अ, आ, क, etc.

##### 2.4.2.3. Long-term plan

By then, we may have multiple dictionaries.
- Based on the type of dictionary the list of words should be moved inside a new page. 
- Each such page should contain the list of all words, arranged inside alphabets-based sub-pages. 

Examples:  
1. /browse/marwari/
2. /browse/marwari-english/
   1. /browse/marwari-english/अ
   2. /browse/marwari-english/आ
   3. /browse/marwari-english/क
3. /browse/english-marwari/
   1. /browse/english-marwari/a
   2. /browse/english-marwari/b
4. /browse/marwari-hindi/


#### 2.4.3. Wordlist

`/browse/wordlist`

It will contain list of all curated wordlists.

Examples:
1. List of essential Marwari words (can be inspired from Oxford 3000 or Oxford 5000 or own like MM-3000)
2. List of Marwari Idioms

### 2.5. Grammar

`/grammar`

This page will display all the grammar-related posts and sub-pages

-----

#### 2.5.1. Grammar Categories

The grammar categories will be organised as per Parts of Speech / Lemma or other logical division.

`/grammar/category`

Each category page will have many sections:
1. An info or about section, i.e. what this category /terminology means
2. A list of children and parents categories
3. A list of all words belonging to such category
4. A list of 10 recent-most or oldest-most words added to such category, if the words array is > 10.

Examples:
1. /grammar/category/lemma
1. /grammar/category/noun
2. /grammar/category/verb
3. /grammar/category/adjective
4. /grammar/category/adverb

Note: Each category will have its own subcategories, but it will not reflected in the URL (similar to the concept as mentioned in Topics)

Examples:
1. /grammar/category/countable-noun
2. /grammar/category/proper-noun
3. /grammar/category/noun-forms (i.e. non-lemma noun forms)

### 2.6. Thesausus

`/thesaurus`

### 2.7. Pronunciation 🔊

`/pronunciation`

### 2.8. Etymology 🅰

`/etymology`

### 2.9. Rhymes 🎵

`/rhymes`

In long-term, we can have a list of rhyming words for each word. 

### 2.10. Learn 📔

`/learn`

Initially, we can link the all the learning resources on this page.

The learning resources can include:
1. Dictionary
2. Grammar
3. Curated blog posts

In long-term, we can even devise a structured learning course. The course can be divided into levels --- Beginner, Intermediate, Proficient.

### 2.11. Blog 🧾

`/blog`

Blog posts will contain random information about the Marwari language itself. It can include tips and tricks, how to avoid common mistakes, etc. in learning, speaking, spelling, and writing the language.

Also, since [marwari.info](https://marwari.info) is not just a dictionary, the blog posts can also contain some new initiatives by other community members or Government of India or Govt of any State or Union Territory to promote the language.

### 2.12. Updates / What's New?

`/updates`

The changes made to the website should be documented on this page. It maybe linked to the Github repo or may display the commits in a list format via Github API.

Also, it can display the new releases/tags via Github API.

Additionally, if some new exciting features are launched, then they can be hand-written for better curated content.

## 3. Layout 🎁

### 3.1. Overall website

#### 3.1.1. Sidebar

1. Word of the day / month widget

### 3.2. Navigation Menu

### 3.3. Home page

### 3.4. Word page payout

#### 3.4.1. Main body

##### 3.4.1.1. H1

Meaning of `<word>` in Marwari.

##### 3.4.1.2. H2

Lemma, i.e. Noun, Verb, etc.

##### 3.4.1.3. H3

Meaning, Synonyms, Examples, Conjugation, Declension

##### 3.4.1.4. Pronunciation

##### 3.4.1.5. Etymology

We need to create a template to add "from" language code, and it will automatically output the word origin in proper format.

#### 3.4.2. Aside

##### 3.4.2.1. Nearby words 

These will form the **Next** and **Previous** words. They will be fetched based on slugurl.

These will be 3 words, with 2 words surrounding the current word.


## 4. Contributions 👨‍👩‍👧‍👦

Contributions are most welcome. 

Also, if you have any idea on the above plan or wish to submit some suggestion, you are most welcome to send them to [Manas Madrecha](mailto:madrechamanas.gmail.com).

To contribute new words or edit the existing ones, you may fork this repository and send a PR. 🙏🏻