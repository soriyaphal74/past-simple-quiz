// THE QUIZ QUESTIONS — every question on the site comes from here.
// To add a question, copy one { ... } block and change it.
//   sentence: use ___ where the answer goes
//   verb:     the base verb, shown in (brackets)
//   options:  the choices; the FIRST one is the right answer (the site mixes them up)
//   why / whyKm: a short explanation, shown after the student answers
export const questions = [
  {
    sentence: 'Yesterday I ___ to school by bike.',
    verb: 'go',
    options: ['went', 'goed', 'go', 'going'],
    why: 'go → went. "Go" is an irregular verb.',
    whyKm: 'go → went។ "go" ជាកិរិយាសព្ទមិនទៀងទាត់។',
  },
  {
    sentence: 'We ___ football after class.',
    verb: 'play',
    options: ['played', 'plaied', 'play', 'plays'],
    why: 'play + ed → played. A regular verb: just add -ed.',
    whyKm: 'play + ed → played។ កិរិយាសព្ទទៀងទាត់៖ គ្រាន់តែបន្ថែម -ed។',
  },
  {
    sentence: 'She ___ rice and fish for dinner.',
    verb: 'eat',
    options: ['ate', 'eated', 'eats', 'eaten'],
    why: 'eat → ate. An irregular verb.',
    whyKm: 'eat → ate។ កិរិយាសព្ទមិនទៀងទាត់។',
  },
  {
    sentence: 'My brother ___ English last night.',
    verb: 'study',
    options: ['studied', 'studyed', 'studies', 'study'],
    why: 'study → studied. Consonant + y: change y to i, then add -ed.',
    whyKm: 'study → studied។ ព្យញ្ជនៈ + y៖ ប្តូរ y ទៅ i រួចបន្ថែម -ed។',
  },
  {
    sentence: 'The bus ___ in front of the market.',
    verb: 'stop',
    options: ['stopped', 'stoped', 'stops', 'stopping'],
    why: 'stop → stopped. Short verb ending in one vowel + one consonant: double the last letter.',
    whyKm: 'stop → stopped។ កិរិយាសព្ទខ្លីដែលបញ្ចប់ដោយស្រៈមួយ + ព្យញ្ជនៈមួយ៖ សរសេរអក្សរចុងក្រោយពីរដង។',
  },
  {
    sentence: 'I ___ a new phone last week.',
    verb: 'buy',
    options: ['bought', 'buyed', 'buy', 'brought'],
    why: 'buy → bought. Be careful: "brought" comes from "bring".',
    whyKm: 'buy → bought។ ប្រយ័ត្ន៖ "brought" មកពី "bring"។',
  },
  {
    sentence: 'They ___ happy at the party.',
    verb: 'be',
    options: ['were', 'was', 'are', 'be'],
    why: 'be → was / were. Use "were" with you, we, they.',
    whyKm: 'be → was / were។ ប្រើ "were" ជាមួយ you, we, they។',
  },
  {
    sentence: 'He ___ tired after work.',
    verb: 'be',
    options: ['was', 'were', 'is', 'been'],
    why: 'be → was / were. Use "was" with I, he, she, it.',
    whyKm: 'be → was / were។ ប្រើ "was" ជាមួយ I, he, she, it។',
  },
  {
    sentence: "I didn't ___ TV yesterday.",
    verb: 'watch',
    options: ['watch', 'watched', 'watches', 'watching'],
    why: 'After "didn\'t", use the base verb: didn\'t watch.',
    whyKm: 'បន្ទាប់ពី "didn\'t" ប្រើកិរិយាសព្ទដើម៖ didn\'t watch។',
  },
  {
    sentence: 'Did you ___ your homework?',
    verb: 'do',
    options: ['do', 'did', 'done', 'does'],
    why: 'In questions with "Did", use the base verb: Did you do…?',
    whyKm: 'ក្នុងសំណួរដែលមាន "Did" ប្រើកិរិយាសព្ទដើម៖ Did you do…?',
  },
  {
    sentence: 'We ___ the temples at Angkor Wat last year.',
    verb: 'visit',
    options: ['visited', 'visitted', 'visit', 'visits'],
    why: 'visit + ed → visited. A regular verb.',
    whyKm: 'visit + ed → visited។ កិរិយាសព្ទទៀងទាត់។',
  },
  {
    sentence: 'My mother ___ me a letter.',
    verb: 'write',
    options: ['wrote', 'writed', 'written', 'writes'],
    why: 'write → wrote. An irregular verb.',
    whyKm: 'write → wrote។ កិរិយាសព្ទមិនទៀងទាត់។',
  },
  {
    sentence: 'I ___ my friend at the shop.',
    verb: 'see',
    options: ['saw', 'seed', 'seen', 'sees'],
    why: 'see → saw. An irregular verb.',
    whyKm: 'see → saw។ កិរិយាសព្ទមិនទៀងទាត់។',
  },
  {
    sentence: 'The teacher ___ us a funny story.',
    verb: 'tell',
    options: ['told', 'telled', 'tells', 'tell'],
    why: 'tell → told. An irregular verb.',
    whyKm: 'tell → told។ កិរិយាសព្ទមិនទៀងទាត់។',
  },
  {
    sentence: 'She ___ to music on the bus.',
    verb: 'listen',
    options: ['listened', 'listend', 'listen', 'listens'],
    why: 'listen + ed → listened. A regular verb.',
    whyKm: 'listen + ed → listened។ កិរិយាសព្ទទៀងទាត់។',
  },
];

// How many questions one quiz round has (picked at random from the list above).
export const questionsPerRound = 10;

// The three rules shown at the top of the page.
export const rules = [
  {
    icon: '➕',
    title: 'Regular verbs: add -ed',
    titleKm: 'កិរិយាសព្ទទៀងទាត់៖ បន្ថែម -ed',
    examples: 'play → played · walk → walked · like → liked',
  },
  {
    icon: '⭐',
    title: 'Irregular verbs: learn them',
    titleKm: 'កិរិយាសព្ទមិនទៀងទាត់៖ ត្រូវរៀនចាំ',
    examples: 'go → went · eat → ate · see → saw · buy → bought',
  },
  {
    icon: '❓',
    title: "With did / didn't: base verb",
    titleKm: "ជាមួយ did / didn't៖ កិរិយាសព្ទដើម",
    examples: "Did you go? · I didn't go.",
  },
];
