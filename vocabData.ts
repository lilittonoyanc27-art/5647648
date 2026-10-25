import { VocabWord } from './types.ts';

export const VOCAB_ITEMS: VocabWord[] = [
  {
    id: 'vocab-recuperar',
    word: 'Recuperar',
    translationHy: 'Վերականգնել / Քննությունը վերահանձնել (հանձնել պարտքը)',
    category: {
      es: 'Verbo transitivo (1.ª conjugación)',
      hy: 'Անցողական բայ (1-ին լծորդություն)',
    },
    definition: {
      es: 'Volver a tomar o adquirir lo que antes se tenía. En el entorno escolar español: examinarse de nuevo para aprobar una asignatura suspendida en una evaluación previa.',
      hy: 'Կրկին վերցնել կամ ձեռք բերել այն, ինչ նախկինում ունեիր։ Իսպանական դպրոցական միջավայրում՝ կրկին քննություն հանձնել՝ նախորդ կիսամյակում կտրված առարկան դրական գնահատականով փակելու համար։',
    },
    usageContext: {
      es: '«Tengo que recuperar Lengua en la convocatoria de junio» / «Voy a recuperar las fuerzas».',
      hy: '«Ես պետք է հունիսյան փուլում հանձնեմ իսպաներենի պարտքը» / «Պատրաստվում եմ վերականգնել ուժերս»։',
    },
    collocations: [
      { es: 'Recuperar una asignatura', hy: 'Հանձնել կտրված առարկան' },
      { es: 'Examen de recuperación', hy: 'Վերահանձնման քննություն' },
      { es: 'Recuperar el tiempo perdido', hy: 'Ետ բերել կորցրած ժամանակը' },
    ],
    examples: [
      {
        es: 'Elena estudió durante todas las vacaciones para recuperar el examen suspendido.',
        hy: 'Ելենան սովորեց ամբողջ արձակուրդների ընթացքում՝ կտրված քննությունը վերահանձնելու համար։',
      },
      {
        es: 'Logré recuperar mi teléfono extraviado en el autobús.',
        hy: 'Կարողացա գտնել և ետ ստանալ ավտոբուսում կորցրած հեռախոսս։',
      },
    ],
    drill: {
      question: {
        es: 'Si un alumno suspende el primer trimestre de Lengua, ¿qué debe hacer en mayo?',
        hy: 'Եթե աշակերտը կտրվում է առաջին եռամսյակի իսպաներենից, ի՞նչ պետք է անի մայիսին։',
      },
      options: [
        { id: 'A', text: { es: 'A. Presentarse al examen de recuperación.', hy: 'A. Ներկայանալ վերահանձնման քննությանը։' } },
        { id: 'B', text: { es: 'B. Cambiar de idioma.', hy: 'B. Փոխել լեզուն։' } },
        { id: 'C', text: { es: 'C. Dejar de ir al colegio.', hy: 'C. Դադարել դպրոց հաճախել։' } },
      ],
      correctAnswer: 'A',
      explanation: {
        es: 'Debe presentarse a la recuperación para aprobar la materia pendiente.',
        hy: 'Պետք է ներկայանա վերահանձնմանը՝ պարտք մնացած առարկան փակելու համար։',
      },
    },
  },
  {
    id: 'vocab-comprender',
    word: 'Comprender',
    translationHy: 'Հասկանալ / Ըմբռնել',
    category: {
      es: 'Verbo transitivo (2.ª conjugación)',
      hy: 'Անցողական բայ (2-րդ լծորդություն)',
    },
    definition: {
      es: 'Entender, alcanzar o penetrar el sentido profundo de las cosas. En lectura: interpretar correctamente el significado de un texto.',
      hy: 'Հասկանալ, ըմբռնել իրերի խորը իմաստը։ Ընթերցանության մեջ՝ տեքստի իմաստը ճիշտ մեկնաբանել։',
    },
    usageContext: {
      es: 'Comprensión lectora / Comprender un problema matemático.',
      hy: 'Ընթերցանության ընկալում (comprensión lectora) / Մաթեմատիկական խնդիրը հասկանալ։',
    },
    collocations: [
      { es: 'Comprensión lectora', hy: 'Տեքստի ըմբռնում / ընկալում' },
      { es: 'Comprender el mensaje', hy: 'Հասկանալ հաղորդագրությունը' },
    ],
    examples: [
      {
        es: 'Es fundamental comprender la diferencia entre metáfora y comparación.',
        hy: 'Կարևոր է հասկանալ փոխաբերության և համեմատության տարբերությունը։',
      },
    ],
    drill: {
      question: {
        es: '¿Cuál es el sustantivo derivado del verbo "comprender"?',
        hy: 'Ո՞րն է «comprender» բայից ածանցված գոյականը։',
      },
      options: [
        { id: 'A', text: { es: 'A. Comprensión', hy: 'A. Comprensión (ըմբռնում, ընկալում)' } },
        { id: 'B', text: { es: 'B. Comprensivo', hy: 'B. Comprensivo (հասկացող - ածական)' } },
        { id: 'C', text: { es: 'C. Comprendido', hy: 'C. Comprendido (հասկացված)' } },
      ],
      correctAnswer: 'A',
      explanation: {
        es: '"Comprensión" es el sustantivo femenino que nombra la capacidad de entender.',
        hy: '«Comprensión»-ը իգական գոյականն է, որն անվանում է հասկանալու ունակությունը։',
      },
    },
  },
  {
    id: 'vocab-haber-hay',
    word: 'Haber / Hay',
    translationHy: 'Կա, կան / Գոյություն ունի',
    category: {
      es: 'Verbo auxiliar e impersonal',
      hy: 'Օժանդակ և անդեմ բայ',
    },
    definition: {
      es: 'En su forma impersonal «HAY» (presente de indicativo), expresa la existencia objetiva de personas o cosas en un lugar. Nunca cambia a plural (*habían niños es incorrecto; se dice había niños).',
      hy: 'Իր անդեմ «HAY» ձևով արտահայտում է մարդկանց կամ իրերի օբյեկտիվ գոյությունը որևէ վայրում։ Երբեք հոգնակի չի դառնում (*habían niños-ը սխալ է, ճիշտ է՝ había niños)։',
    },
    usageContext: {
      es: 'Hay muchos libros en la biblioteca / Hay dudas sobre el examen.',
      hy: 'Գրադարանում շատ գրքեր կան / Քննության վերաբերյալ կասկածներ կան։',
    },
    collocations: [
      { es: 'Hay que + infinitivo (obligación)', hy: 'Պետք է + անորոշ դերբայ (պարտադրանք)' },
      { es: 'No hay de qué', hy: 'Չարժե (շնորհակալության պատասխան)' },
    ],
    examples: [
      {
        es: 'En clase hay veinticinco alumnos hoy.',
        hy: 'Այսօր դասարանում քսանհինգ աշակերտ կա։',
      },
      {
        es: 'Hay que estudiar todos los días para aprobar.',
        hy: 'Պետք է սովորել ամեն օր՝ հանձնելու համար։',
      },
    ],
    drill: {
      question: {
        es: 'Elige la frase gramaticalmente CORRECTA:',
        hy: 'Ընտրիր քերականորեն ՃԻՇՏ նախադասությունը․',
      },
      options: [
        { id: 'A', text: { es: 'A. Había muchos estudiantes en el patio.', hy: 'A. Բակում շատ աշակերտներ կային (եզակի անդեմ ձև)։' } },
        { id: 'B', text: { es: 'B. *Habían muchos estudiantes en el patio.', hy: 'B. *Habían muchos estudiantes (սխալ հոգնակի ձև)։' } },
      ],
      correctAnswer: 'A',
      explanation: {
        es: 'El verbo haber existencial es impersonal: en pretérito imperfecto siempre es singular "había", nunca *habían.',
        hy: 'Գոյություն ցույց տվող haber բայն անդեմ է․ անցյալ անկատարում միշտ եզակի է «había», ոչ երբեք *habían։',
      },
    },
  },
  {
    id: 'vocab-protagonista',
    word: 'Protagonista',
    translationHy: 'Գլխավոր հերոս / Առանցքային կերպար',
    category: {
      es: 'Sustantivo común (masculino o femenino: el/la protagonista)',
      hy: 'Հասարակ գոյական (el/la protagonista)',
    },
    definition: {
      es: 'Personaje principal de una obra literaria, teatral o cinematográfica, alrededor del cual gira la trama y el conflicto central.',
      hy: 'Գրական, թատերական կամ կինոյի գլխավոր կերպարը, որի շուրջ զարգանում է սյուժեն և կենտրոնական բախումը։',
    },
    usageContext: {
      es: 'El protagonista del cuento / Ser el protagonista de tu vida.',
      hy: 'Հեքիաթի գլխավոր հերոսը / Լինել սեփական կյանքի գլխավոր հերոսը։',
    },
    collocations: [
      { es: 'Personaje protagonista', hy: 'Գլխավոր կերպար' },
      { es: 'Antagonista (su rival)', hy: 'Հակառակորդ կերպար (անտագոնիստ)' },
    ],
    examples: [
      {
        es: 'Don Quijote de la Mancha es el protagonista inolvidable de la novela de Cervantes.',
        hy: 'Դոն Կիխոտն է Սերվանտեսի վեպի անմոռանալի գլխավոր հերոսը։',
      },
    ],
    drill: {
      question: {
        es: '¿Cómo se llama el personaje que se opone y combate al protagonista en una historia?',
        hy: 'Ինչպե՞ս է կոչվում այն կերպարը, որը հակադրվում և պայքարում է գլխավոր հերոսի դեմ։',
      },
      options: [
        { id: 'A', text: { es: 'A. Antagonista', hy: 'A. Անտագոնիստ (հակառակորդ)' } },
        { id: 'B', text: { es: 'B. Narrador testigo', hy: 'B. Վկա-պատմող' } },
        { id: 'C', text: { es: 'C. Personaje secundario', hy: 'C. Երկրորդական կերպար' } },
      ],
      correctAnswer: 'A',
      explanation: {
        es: 'El antagonista es quien rivaliza o crea obstáculos al protagonista.',
        hy: 'Անտագոնիստն է նա, ով մրցակցում կամ խոչընդոտներ է ստեղծում գլխավոր հերոսի համար։',
      },
    },
  },
  {
    id: 'vocab-distraer',
    word: 'Distraer',
    translationHy: 'Շեղել (ուշադրությունը) / Զբաղեցնել, զվարճացնել',
    category: {
      es: 'Verbo irregular (se conjuga como traer)',
      hy: 'Անկանոն բայ (խոնարհվում է ինչպես traer-ը)',
    },
    definition: {
      es: 'Apartar la atención de alguien del objeto a que la aplicaba. Préstase atención en no distraerse durante las explicaciones del profesor.',
      hy: 'Ինչ-որ մեկի ուշադրությունը շեղել այն առարկայից, որով զբաղված էր։ Ուշադրություն է դարձվում ուսուցչի բացատրությունների ժամանակ չշեղվելուն։',
    },
    usageContext: {
      es: '«No te distraigas con el móvil mientras estudias» / «Los juegos de mesa distraen a los niños».',
      hy: '«Մի՛ շեղվիր բջջայինով սովորելիս» / «Սեղանի խաղերը զբաղեցնում են երեխաներին»։',
    },
    collocations: [
      { es: 'Distraerse en clase', hy: 'Դասին շեղվել' },
      { es: 'Estar distraído', hy: 'Ցրված / ուշադրությունը շեղված լինել' },
    ],
    examples: [
      {
        es: 'Si miras por la ventana te vas a distraer y no entenderás el ejercicio.',
        hy: 'Եթե պատուհանից նայես, կշեղվես ու վարժությունը չես հասկանա։',
      },
    ],
    drill: {
      question: {
        es: 'Conjuga en presente (tú): «No te ________ en clase».',
        hy: 'Խոնարհիր ներկայում (tú)․ «No te ________ en clase»։',
      },
      options: [
        { id: 'A', text: { es: 'A. distraigas (subjuntivo con imperativo negativo)', hy: 'A. distraigas' } },
        { id: 'B', text: { es: 'B. distraes', hy: 'B. distraes' } },
        { id: 'C', text: { es: 'C. distraer', hy: 'C. distraer' } },
      ],
      correctAnswer: 'A',
      explanation: {
        es: 'En las órdenes negativas ("No...") se usa obligatoriamente el subjuntivo: "No te distraigas".',
        hy: 'Ժխտական հրամայականում («No...») պարտադիր օգտագործվում է subjuntivo-ն՝ «No te distraigas»։',
      },
    },
  },
  {
    id: 'vocab-un-favor',
    word: 'Un favor / Pedir un favor',
    translationHy: 'Խնդրանք / Լավություն / Ծառայություն',
    category: {
      es: 'Locución sustantiva habitual',
      hy: 'Կայուն գոյականական արտահայտություն',
    },
    definition: {
      es: 'Ayuda o servicio que se concede a alguien por gentileza o amistad. Muy usado con fórmulas de cortesía.',
      hy: 'Օգնություն կամ ծառայություն, որը մատուցվում է ինչ-որ մեկին բարյացակամությունից կամ ընկերությունից ելնելով։ Շատ է օգտագործվում քաղաքավարի դիմելաձևերում։',
    },
    usageContext: {
      es: '«¿Me haces un favor?» / «Hazme el favor de escuchar».',
      hy: '«Ինձ մի լավություն կանե՞ս» / «Խնդրում եմ, լսի՛ր ինձ»։',
    },
    collocations: [
      { es: 'Por favor', hy: 'Խնդրեմ / խնդրում եմ' },
      { es: 'Hacer un favor', hy: 'Լավություն անել' },
      { es: 'Pedir un favor', hy: 'Լավություն / օգնություն խնդրել' },
    ],
    examples: [
      {
        es: '¿Podrías hacerme el favor de prestarme tus apuntes de literatura?',
        hy: 'Կարո՞ղ ես ինձ մի լավություն անել և տալ գրականության գրառումներդ։',
      },
    ],
    drill: {
      question: {
        es: '¿Qué fórmula educada usamos para pedir algo a un compañero?',
        hy: 'Ի՞նչ քաղաքավարի բանաձև ենք օգտագործում ընկերոջից որևէ բան խնդրելիս։',
      },
      options: [
        { id: 'A', text: { es: 'A. ¿Me haces un favor, por favor?', hy: 'A. ¿Me haces un favor, por favor? (Կանե՞ս ինձ մի լավություն, խնդրում եմ)' } },
        { id: 'B', text: { es: 'B. ¡Dame eso ya!', hy: 'B. Տո՛ւր դա ինձ հիմա՛ (կոպիտ)' } },
      ],
      correctAnswer: 'A',
      explanation: {
        es: 'La fórmula cortés combina "hacer un favor" con "por favor".',
        hy: 'Քաղաքավարի ձևը համադրում է «hacer un favor» և «por favor» արտահայտությունները։',
      },
    },
  },
  {
    id: 'vocab-date',
    word: 'Date (Darse prisa / Date cuenta)',
    translationHy: 'Շտապի՛ր / Ուշադրությո՛ւն դարձրու, գիտակցի՛ր',
    category: {
      es: 'Forma imperativa del verbo reflexivo "darse"',
      hy: '«Darse» անդրադարձ բայի հրամայական ձևը (դու դեմքով)',
    },
    definition: {
      es: 'Imperativo de segunda persona con pronombre enclítico "te". 1) «¡Date prisa!» = apresúrate, corre. 2) «¡Date cuenta!» = percátate, reflexiona sobre lo que sucede.',
      hy: 'Երկրորդ դեմքի հրամայական «te» դերանվան հետ։ 1) «¡Date prisa!» = շտապի՛ր, արագացրո՛ւ։ 2) «¡Date cuenta!» = գիտակցի՛ր, ուշադրությո՛ւն դարձրու այն բանին, ինչ կատարվում է։',
    },
    usageContext: {
      es: '«¡Date prisa que sale el metro!» / «Date cuenta de que estás cometiendo un error».',
      hy: '«Շտապի՛ր, մետրոն շարժվում է» / «Գիտակցի՛ր, որ սխալ ես գործում»։',
    },
    collocations: [
      { es: 'Darse prisa', hy: 'Շտապել' },
      { es: 'Darse cuenta de algo', hy: 'Որևէ բան գիտակցել / հասկանալ' },
    ],
    examples: [
      {
        es: '¡Date prisa o llegaremos tarde a la primera hora de clase!',
        hy: 'Շտապի՛ր, թե չէ կուշանանք առաջին դասաժամից։',
      },
      {
        es: '¿No te das cuenta de que el examen es mañana?',
        hy: 'Մի՞թե չես գիտակցում, որ քննությունը վաղն է։',
      },
    ],
    drill: {
      question: {
        es: 'Si tu amigo va muy despacio y el timbre va a sonar, le dices:',
        hy: 'Եթե ընկերդ շատ դանդաղ է քայլում, իսկ զանգը քիչ անց կհնչի, դու նրան ասում ես․',
      },
      options: [
        { id: 'A', text: { es: 'A. ¡Date prisa!', hy: 'A. ¡Date prisa! (Շտապի՛ր)' } },
        { id: 'B', text: { es: 'B. Date la vuelta.', hy: 'B. Հետ շրջվիր։' } },
      ],
      correctAnswer: 'A',
      explanation: {
        es: '«¡Date prisa!» significa que acelere el paso.',
        hy: '«¡Date prisa!» նշանակում է՝ քայլերդ արագացրո՛ւ, շտապի՛ր։',
      },
    },
  },
  {
    id: 'vocab-de-repente',
    word: 'De repente',
    translationHy: 'Հանկարծ / Անսպասելիորեն',
    category: {
      es: 'Locución adverbial de tiempo / modo',
      hy: 'Ժամանակի և ձևի մակբայական դարձվածք',
    },
    definition: {
      es: 'De manera súbita, repentina, imprevista y sin previo aviso. Muy frecuente en relatos para marcar giros dramáticos en la narración.',
      hy: 'Հանկարծակի, անակնկալ, անսպասելի կերպով և առանց նախազգուշացման։ Շատ հաճախ է օգտագործվում պատմվածքներում՝ կտրուկ շրջադարձ նշելու համար։',
    },
    usageContext: {
      es: '«Caminábamos tranquilamente y, de repente, se desató una tormenta».',
      hy: '«Հանգիստ քայլում էինք, և հանկարծ մի փոթորիկ սկսվեց»։',
    },
    collocations: [
      { es: 'De repente', hy: 'Հանկարծ / անսպասելիորեն' },
      { es: 'Repentino (adjetivo)', hy: 'Հանկարծակի (ածական)' },
    ],
    examples: [
      {
        es: 'Estudiábamos en la biblioteca cuando, de repente, se apagaron las luces.',
        hy: 'Գրադարանում սովորում էինք, երբ հանկարծ լույսերն անջատվեցին։',
      },
    ],
    drill: {
      question: {
        es: '¿Qué función cumple «de repente» en una narración literaria?',
        hy: 'Ի՞նչ դեր է կատարում «de repente»-ն գեղարվեստական պատմվածքում։',
      },
      options: [
        { id: 'A', text: { es: 'A. Introduce una acción inesperada que rompe la tranquilidad.', hy: 'A. Ներմուծում է անսպասելի գործողություն, որը խախտում է հանգստությունը։' } },
        { id: 'B', text: { es: 'B. Indica que la acción ocurre muy despacio.', hy: 'B. Ցույց է տալիս, որ գործողությունը շատ դանդաղ է կատարվում։' } },
      ],
      correctAnswer: 'A',
      explanation: {
        es: 'Provoca sorpresa y dinamismo en la trama narrativa.',
        hy: 'Առաջացնում է զարմանք և դինամիզմ պատմողական սյուժեում։',
      },
    },
  },
  {
    id: 'vocab-dar-consejos',
    word: 'Dar consejos (Yo que tú..., Lo mejor es..., Es mejor que...)',
    translationHy: 'Խորհուրդներ տալ (Ես քո տեղը լինեի..., Ամենալավն այն է..., Ավելի լավ է, որ...) ',
    category: {
      es: 'Estructuras sintácticas de recomendación',
      hy: 'Առաջարկության և խորհրդի շարահյուսական կառույցներ',
    },
    definition: {
      es: 'Tres fórmulas fundamentales para recomendar o aconsejar a alguien:\n1) Yo que tú + CONDICIONAL («Yo que tú, haría los ejercicios»).\n2) Lo mejor es + INFINITIVO («Lo mejor es preguntar al profesor»).\n3) Es mejor que + SUBJUNTIVO («Es mejor que leas el libro hoy»).',
      hy: 'Երեք հիմնական բանաձևեր որևէ մեկին խորհուրդ տալու համար․\n1) Yo que tú + ՊԱՅՄԱՆԱԿԱՆ ԵՂԱՆԱԿ («Ես քո տեղը լինեի՝ կանեի վարժությունները»)։\n2) Lo mejor es + ԱՆՈՐՈՇ ԴԵՐԲԱՅ («Ամենալավն այն է՝ հարցնել ուսուցչին»)։\n3) Es mejor que + ԸՂՁԱԿԱՆ ԵՂԱՆԱԿ («Ավելի լավ է՝ գիրքն այսօր կարդաս»)։',
    },
    usageContext: {
      es: 'Indispensables en redacciones, exámenes orales y diálogos cotidianos.',
      hy: 'Անփոխարինելի են շարադրություններում, բանավոր քննություններում և առօրյա երկխոսություններում։',
    },
    collocations: [
      { es: 'Yo que tú, estudiaría', hy: 'Ես քո տեղը լինեի՝ կսովորեի' },
      { es: 'Lo mejor es descansar', hy: 'Ամենալավն այն է՝ հանգստանալ' },
      { es: 'Es mejor que vengas', hy: 'Ավելի լավ է՝ գաս' },
    ],
    examples: [
      {
        es: 'Yo que tú, no dejaría todo para el último día antes del examen.',
        hy: 'Ես քո տեղը լինեի՝ ամեն ինչ չէի թողնի քննության նախորդ վերջին օրվան։',
      },
      {
        es: 'Lo mejor es hacer un esquema de las figuras retóricas.',
        hy: 'Ամենալավն այն է՝ կազմել գեղարվեստական հնարքների սխեման։',
      },
      {
        es: 'Es mejor que repases las preposiciones en voz alta.',
        hy: 'Ավելի լավ է՝ նախդիրները բարձրաձայն կրկնես։',
      },
    ],
    drill: {
      question: {
        es: 'Completa correctamente: «Es mejor que nosotros ________ temprano».',
        hy: 'Ճիշտ լրացրու․ «Es mejor que nosotros ________ temprano»։',
      },
      options: [
        { id: 'A', text: { es: 'A. salgamos (presente de subjuntivo)', hy: 'A. salgamos (ըղձական եղանակ)' } },
        { id: 'B', text: { es: 'B. salimos (presente de indicativo)', hy: 'B. salimos' } },
        { id: 'C', text: { es: 'C. salir (infinitivo)', hy: 'C. salir' } },
      ],
      correctAnswer: 'A',
      explanation: {
        es: 'La estructura "Es mejor que + sujeto" exige siempre verbo en modo SUBJUNTIVO.',
        hy: '«Es mejor que + ենթակա» կառույցը միշտ պահանջում է SUBJUNTIVO (ըղձական եղանակ)։',
      },
    },
  },
  {
    id: 'vocab-cancelar',
    word: 'Cancelar',
    translationHy: 'Չեղարկել / Դադարեցնել',
    category: {
      es: 'Verbo transitivo',
      hy: 'Անցողական բայ',
    },
    definition: {
      es: 'Anular una cita, un billete, un examen o una actividad programada con anterioridad.',
      hy: 'Չեղյալ հայտարարել նախապես ծրագրված հանդիպումը, տոմսը, քննությունը կամ որևէ միջոցառում։',
    },
    usageContext: {
      es: 'Cancelar la excursión por lluvia / Cancelar la suscripción.',
      hy: 'Չեղարկել էքսկուրսիան անձրևի պատճառով / Չեղարկել բաժանորդագրությունը։',
    },
    collocations: [
      { es: 'Cancelar un evento', hy: 'Չեղարկել միջոցառումը' },
      { es: 'Cancelar la reserva', hy: 'Չեղարկել ամրագրումը' },
    ],
    examples: [
      {
        es: 'Tuvieron que cancelar el partido de fútbol en el patio debido a la tormenta de granizo.',
        hy: 'Ստիպված եղան չեղարկել բակի ֆուտբոլային հանդիպումը կարկտաբեր փոթորկի պատճառով։',
      },
    ],
    drill: {
      question: {
        es: '¿Qué palabra significa lo contrario (antónimo) de "cancelar"?',
        hy: 'Ո՞ր բառն է «cancelar» (չեղարկել) բայի հականիշը։',
      },
      options: [
        { id: 'A', text: { es: 'A. Confirmar / Mantener', hy: 'A. Confirmar / Mantener (հաստատել / պահպանել)' } },
        { id: 'B', text: { es: 'B. Anular', hy: 'B. Anular (չեղյալ անել - հոմանիշ)' } },
        { id: 'C', text: { es: 'C. Suspender', hy: 'C. Suspender (դադարեցնել)' } },
      ],
      correctAnswer: 'A',
      explanation: {
        es: 'Confirmar o celebrar es lo opuesto a cancelar.',
        hy: 'Հաստատելը (confirmar) կամ իրականացնելը չեղարկելու հականիշն է։',
      },
    },
  },
];
