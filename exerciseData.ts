import { Exercise } from './types.ts';

export const EXERCISES: Exercise[] = [
  // ==========================================
  // BLOQUE 1: EL LENGUAJE LITERARIO
  // ==========================================
  {
    id: 'b1-ex-1',
    blockId: 'bloque-1',
    level: 'facil',
    type: 'multiple-choice',
    instruction: {
      es: 'Selecciona la respuesta correcta.',
      hy: 'Ընտրիր ճիշտ պատասխանը։',
    },
    question: {
      es: '¿Cuál es la función del lenguaje que predomina en un texto literario?',
      hy: 'Լեզվի ո՞ր գործառույթն է գերիշխում գեղարվեստական տեքստում։',
    },
    options: [
      {
        id: 'A',
        text: {
          es: 'A. Función referencial o informativa.',
          hy: 'A. Հաղորդակցական կամ տեղեկատվական գործառույթը։',
        },
      },
      {
        id: 'B',
        text: {
          es: 'B. Función poética o estética.',
          hy: 'B. Բանաստեղծական կամ գեղագիտական գործառույթը։',
        },
      },
      {
        id: 'C',
        text: {
          es: 'C. Función fática o de contacto.',
          hy: 'C. Կապի հաստատման (ֆատիկ) գործառույթը։',
        },
      },
      {
        id: 'D',
        text: {
          es: 'D. Función metalingüística.',
          hy: 'D. Մետալեզվական գործառույթը։',
        },
      },
    ],
    correctAnswer: 'B',
    explanation: {
      es: 'En el lenguaje literario, el autor se preocupa por la belleza del mensaje y la forma de expresión, por lo que predomina la función poética.',
      hy: 'Գրական լեզվում հեղինակը հոգ է տանում հաղորդագրության գեղեցկության և արտահայտման ձևի մասին, ուստի գերիշխում է բանաստեղծական գործառույթը։',
    },
    hint: {
      es: 'Piensa en la función que busca emocionar y embellecer la forma del mensaje.',
      hy: 'Մտածիր այն գործառույթի մասին, որը ձգտում է հուզել և գեղեցկացնել հաղորդագրության ձևը։',
    },
  },
  {
    id: 'b1-ex-2',
    blockId: 'bloque-1',
    level: 'facil',
    type: 'true-false',
    instruction: {
      es: 'Indica si la afirmación es verdadera o falsa.',
      hy: 'Նշիր՝ արդյոք պնդումը ճիշտ է, թե սխալ։',
    },
    question: {
      es: 'La prosa literaria debe medirse obligatoriamente en versos de ocho sílabas.',
      hy: 'Գրական արձակը պարտադիր պետք է չափվի ութվանկ տողերով։',
    },
    options: [
      {
        id: 'true',
        text: { es: 'Verdadero', hy: 'Ճիշտ է' },
      },
      {
        id: 'false',
        text: { es: 'Falso', hy: 'Սխալ է' },
      },
    ],
    correctAnswer: 'false',
    explanation: {
      es: 'Falso. La prosa ocupa todo el renglón de forma continua y no está sujeta a medida silábica fija ni a rima; eso es propio del verso.',
      hy: 'Սխալ է։ Արձակը զբաղեցնում է ամբողջ տողը շարունակական ձևով և ենթակա չէ հաստատուն վանկերի չափման կամ հանգի, դա բնորոշ է չափածոյին։',
    },
    hint: {
      es: 'Recuerda que la prosa fluye libremente por todo el renglón de la página.',
      hy: 'Հիշիր, որ արձակն ազատորեն հոսում է էջի ամբողջ տողով մեկ։',
    },
  },
  {
    id: 'b1-ex-3',
    blockId: 'bloque-1',
    level: 'facil',
    type: 'multiple-choice',
    instruction: {
      es: 'Elige la opción correcta sobre la rima.',
      hy: 'Ընտրիր հանգի վերաբերյալ ճիշտ տարբերակը։',
    },
    question: {
      es: '¿Cómo se llama la rima en la que solo coinciden las vocales a partir de la última vocal acentuada?',
      hy: 'Ինչպե՞ս է կոչվում այն հանգը, որտեղ համընկնում են միայն ձայնավորները՝ սկսած վերջին շեշտված ձայնավորից։',
    },
    options: [
      {
        id: 'A',
        text: { es: 'A. Rima consonante.', hy: 'A. Լիակատար (բաղաձայնական) հանգ։' },
      },
      {
        id: 'B',
        text: { es: 'B. Rima asonante.', hy: 'B. Թերի (ձայնավորական) հանգ։' },
      },
      {
        id: 'C',
        text: { es: 'C. Rima libre.', hy: 'C. Ազատ հանգ։' },
      },
      {
        id: 'D',
        text: { es: 'D. Rima continua.', hy: 'D. Շարունակական հանգ։' },
      },
    ],
    correctAnswer: 'B',
    explanation: {
      es: 'En la rima asonante solo coinciden las vocales (ejemplo: barca / plata). Si coincidieran vocales y consonantes sería consonante.',
      hy: 'Ձայնավորական հանգում (rima asonante) համընկնում են միայն ձայնավորները (օր․՝ barca / plata)։ Եթե համընկնեին ձայնավորներն ու բաղաձայնները, կլիներ լիակատար (consonante)։',
    },
    hint: {
      es: 'Asonante = solo vocales; Consonante = vocales y consonantes.',
      hy: 'Asonante = միայն ձայնավորներ; Consonante = ձայնավորներ և բաղաձայններ։',
    },
  },
  {
    id: 'b1-ex-4',
    blockId: 'bloque-1',
    level: 'intermedio',
    type: 'identify-figure',
    instruction: {
      es: 'Identifica la forma del siguiente texto.',
      hy: 'Որոշիր հետևյալ տեքստի ձևը։',
    },
    question: {
      es: '«Verde que te quiero verde. / Verde viento. Verdes ramas. / El barco sobre la mar / y el caballo en la montaña.» ¿Qué tipo de forma literaria es?',
      hy: '«Verde que te quiero verde. / Verde viento. Verdes ramas. / El barco sobre la mar / y el caballo en la montaña.» Ի՞նչ տեսակի գրական ձև է սա։',
    },
    options: [
      {
        id: 'A',
        text: { es: 'A. Prosa periodística.', hy: 'A. Լրագրողական արձակ։' },
      },
      {
        id: 'B',
        text: { es: 'B. Poema en verso con ritmo y rima.', hy: 'B. Չափածո բանաստեղծություն ռիթմով և հանգով։' },
      },
      {
        id: 'C',
        text: { es: 'C. Texto informativo.', hy: 'C. Տեղեկատվական տեքստ։' },
      },
      {
        id: 'D',
        text: { es: 'D. Definición metalingüística.', hy: 'D. Մետալեզվական սահմանում։' },
      },
    ],
    correctAnswer: 'B',
    explanation: {
      es: 'Son versos octosílabos organizados en estrofas con rima asonante en las palabras ramas / montaña (a-a).',
      hy: 'Սրանք ութվանկ տողեր են՝ կազմված տներով և «ramas / montaña» բառերի ձայնավորական հանգով (a-a)։',
    },
    hint: {
      es: 'Fíjate en las líneas cortas y en la musicalidad.',
      hy: 'Ուշադրություն դարձրու կարճ տողերին և երաժշտականությանը։',
    },
  },
  {
    id: 'b1-ex-5',
    blockId: 'bloque-1',
    level: 'intermedio',
    type: 'multiple-choice',
    instruction: {
      es: 'Calcula la métrica silábica con la regla de la última palabra.',
      hy: 'Հաշվիր տաղաչափական վանկերը՝ ըստ վերջին բառի կանոնի։',
    },
    question: {
      es: 'Si un verso tiene 7 sílabas gramaticales y termina en una palabra aguda (como "corazón"), ¿cuántas sílabas métricas tiene?',
      hy: 'Եթե տողն ունի 7 քերականական վանկ և ավարտվում է aguda (շեշտը վերջին վանկի վրա) բառով (ինչպես «corazón»), քանի՞ տաղաչափական վանկ կունենա։',
    },
    options: [
      {
        id: 'A',
        text: { es: 'A. 6 sílabas (se resta una).', hy: 'A. 6 վանկ (մեկը հանվում է)։' },
      },
      {
        id: 'B',
        text: { es: 'B. 7 sílabas (se queda igual).', hy: 'B. 7 վանկ (մնում է նույնը)։' },
      },
      {
        id: 'C',
        text: { es: 'C. 8 sílabas (se suma una por ser aguda).', hy: 'C. 8 վանկ (գումարվում է մեկը՝ aguda լինելու պատճառով)։' },
      },
      {
        id: 'D',
        text: { es: 'D. 9 sílabas (se suman dos).', hy: 'D. 9 վանկ (գումարվում է երկուսը)։' },
      },
    ],
    correctAnswer: 'C',
    explanation: {
      es: 'La regla métrica establece: si la última palabra es aguda, se suma una sílaba (+1). 7 + 1 = 8 sílabas (octosílabo).',
      hy: 'Տաղաչափական կանոնը սահմանում է․ եթե վերջին բառը aguda է, գումարվում է մեկ վանկ (+1)։ 7 + 1 = 8 վանկ (octosílabo)։',
    },
    hint: {
      es: 'Aguda = +1; Llana = igual; Esdrújula = -1.',
      hy: 'Aguda = +1; Llana = նույնը; Esdrújula = -1։',
    },
  },
  {
    id: 'b1-ex-6',
    blockId: 'bloque-1',
    level: 'examen',
    type: 'multiple-choice',
    instruction: {
      es: 'Pregunta de examen 1.º ESO.',
      hy: 'Քննական հարց 1.º ESO:',
    },
    question: {
      es: '¿En cuál de los siguientes ejemplos se produce una sinalefa métrica?',
      hy: 'Հետևյալ օրինակներից որո՞ւմ է առաջանում տաղաչափական սինալեֆա (sinalefa)։',
    },
    options: [
      {
        id: 'A',
        text: {
          es: 'A. «Sol brillante»',
          hy: 'A. «Sol brillante» (պայծառ արև)',
        },
      },
      {
        id: 'B',
        text: {
          es: 'B. «Toda una vida» (unión de da + u)',
          hy: 'B. «Toda una vida» (da + u միաձուլումը)',
        },
      },
      {
        id: 'C',
        text: {
          es: 'C. «Cien casas»',
          hy: 'C. «Cien casas» (հարյուր տուն)',
        },
      },
      {
        id: 'D',
        text: {
          es: 'D. «Gran árbol»',
          hy: 'D. «Gran árbol» (մեծ ծառ)',
        },
      },
    ],
    correctAnswer: 'B',
    explanation: {
      es: 'En "Tod-a u-na", la palabra "toda" termina en vocal "a" y "una" empieza por vocal "u". En métrica se unen en una sola sílaba: [To-dau-na].',
      hy: '«Tod-a u-na» արտահայտության մեջ «toda» բառն ավարտվում է «a» ձայնավորով, իսկ «una»-ն սկսվում «u» ձայնավորով։ Տաղաչափության մեջ դրանք միաձուլվում են մեկ վանկում՝ [To-dau-na]։',
    },
    hint: {
      es: 'La sinalefa une la vocal final de una palabra con la vocal inicial de la siguiente.',
      hy: 'Սինալեֆան բառի վերջին ձայնավորը միավորում է հաջորդ բառի սկզբի ձայնավորի հետ։',
    },
  },

  // ==========================================
  // BLOQUE 2: LAS FIGURAS LITERARIAS
  // ==========================================
  {
    id: 'b2-ex-1',
    blockId: 'bloque-2',
    level: 'facil',
    type: 'multiple-choice',
    instruction: {
      es: 'Identifica el recurso literario.',
      hy: 'Ճանաչիր գեղարվեստական արտահայտչամիջոցը։',
    },
    question: {
      es: '«En el silencio solo se escuchaba un susurro de abejas que sonaba». ¿Qué figura fónica destaca por la repetición del sonido /s/?',
      hy: '«En el silencio solo se escuchaba un susurro de abejas que sonaba». Ո՞ր հնչյունային հնարքն է ընդգծվում /s/ հնչյունի կրկնությամբ։',
    },
    options: [
      {
        id: 'A',
        text: { es: 'A. Hipérbaton.', hy: 'A. Հիպերբատոն։' },
      },
      {
        id: 'B',
        text: { es: 'B. Aliteración.', hy: 'B. Ալիտերացիա։' },
      },
      {
        id: 'C',
        text: { es: 'C. Asíndeton.', hy: 'C. Ասինդետոն։' },
      },
      {
        id: 'D',
        text: { es: 'D. Pleonasmo.', hy: 'D. Պլեոնազմ։' },
      },
    ],
    correctAnswer: 'B',
    explanation: {
      es: 'Es una aliteración porque repite el sonido /s/ para imitar el zumbido de las abejas.',
      hy: 'Ալիտերացիա է, որովհետև կրկնում է /s/ հնչյունը՝ մեղուների բզզոցը նմանակելու համար։',
    },
    hint: {
      es: 'Repetición de sonidos consonánticos para evocar una sensación sonora.',
      hy: 'Բաղաձայն հնչյունների կրկնություն՝ ձայնային զգացողություն ստեղծելու համար։',
    },
  },
  {
    id: 'b2-ex-2',
    blockId: 'bloque-2',
    level: 'facil',
    type: 'multiple-choice',
    instruction: {
      es: 'Identifica la figura retórica.',
      hy: 'Ճանաչիր ոճական հնարքը։',
    },
    question: {
      es: '«El tic-tac del reloj rompía el silencio de la noche». La palabra "tic-tac" es un ejemplo de...',
      hy: '«El tic-tac del reloj rompía el silencio de la noche». «Tic-tac» բառը օրինակ է․․․',
    },
    options: [
      {
        id: 'A',
        text: { es: 'A. Onomatopeya.', hy: 'A. Ձայնանմանության (Onomatopeya)։' },
      },
      {
        id: 'B',
        text: { es: 'B. Metáfora pura.', hy: 'B. Մաքուր փոխաբերության։' },
      },
      {
        id: 'C',
        text: { es: 'C. Hipérbaton.', hy: 'C. Հիպերբատոնի։' },
      },
      {
        id: 'D',
        text: { es: 'D. Polisíndeton.', hy: 'D. Բազմաշաղկապության։' },
      },
    ],
    correctAnswer: 'A',
    explanation: {
      es: '"Tic-tac" reproduce directamente el sonido mecánico del reloj, por lo tanto es una onomatopeya.',
      hy: '«Tic-tac»-ը ուղղակիորեն ընդօրինակում է ժամացույցի մեխանիկական ձայնը, ուստի ձայնանմանություն է։',
    },
    hint: {
      es: 'Palabras que imitan sonidos de la naturaleza, animales o cosas.',
      hy: 'Բառեր, որոնք ընդօրինակում են բնության, կենդանիների կամ իրերի ձայները։',
    },
  },
  {
    id: 'b2-ex-3',
    blockId: 'bloque-2',
    level: 'intermedio',
    type: 'multiple-choice',
    instruction: {
      es: 'Distingue entre anáfora y epanadiplosis.',
      hy: 'Տարբերակիր անաֆորան և էպանադիպլոզիսը։',
    },
    question: {
      es: '«Verde que te quiero verde». ¿Qué figura literaria consiste en empezar y terminar el verso con la misma palabra?',
      hy: '«Verde que te quiero verde». Ո՞ր գեղարվեստական հնարքն է կայանում տողը նույն բառով սկսելու և ավարտելու մեջ։',
    },
    options: [
      {
        id: 'A',
        text: { es: 'A. Anáfora.', hy: 'A. Անաֆորա։' },
      },
      {
        id: 'B',
        text: { es: 'B. Epanadiplosis.', hy: 'B. Էպանադիպլոզիս։' },
      },
      {
        id: 'C',
        text: { es: 'C. Paronomasia.', hy: 'C. Հարանունություն։' },
      },
      {
        id: 'D',
        text: { es: 'D. Pleonasmo.', hy: 'D. Պլեոնազմ։' },
      },
    ],
    correctAnswer: 'B',
    explanation: {
      es: 'La epanadiplosis empieza y acaba con la misma palabra exacta en el mismo verso ("Verde... verde"). La anáfora se repite solo al principio de distintos versos.',
      hy: 'Էպանադիպլոզիսը սկսվում և ավարտվում է ճիշտ նույն բառով նույն տողում («Verde... verde»)։ Անաֆորան կրկնվում է միայն տարբեր տողերի սկզբում։',
    },
    hint: {
      es: 'Empieza por una palabra y termina por esa misma palabra.',
      hy: 'Սկսվում է մի բառով և ավարտվում ճիշտ այդ նույն բառով։',
    },
  },
  {
    id: 'b2-ex-4',
    blockId: 'bloque-2',
    level: 'intermedio',
    type: 'multiple-choice',
    instruction: {
      es: 'Distingue asíndeton de polisíndeton.',
      hy: 'Տարբերակիր ասինդետոնը բազմաշաղկապությունից։',
    },
    question: {
      es: '«Y sueña, y ama, y canta, y vive, y llora». ¿Qué figura morfosintáctica es?',
      hy: '«Y sueña, y ama, y canta, y vive, y llora». Ո՞ր ձևաբանական-շարահյուսական հնարքն է սա։',
    },
    options: [
      {
        id: 'A',
        text: { es: 'A. Asíndeton (sin conjunciones).', hy: 'A. Ասինդետոն (առանց շաղկապների)։' },
      },
      {
        id: 'B',
        text: { es: 'B. Polisíndeton (repetición de conjunciones "y").', hy: 'B. Բազմաշաղկապություն («y» շաղկապների կրկնությամբ)։' },
      },
      {
        id: 'C',
        text: { es: 'C. Hipérbaton.', hy: 'C. Հիպերբատոն։' },
      },
      {
        id: 'D',
        text: { es: 'D. Aliteración.', hy: 'D. Ալիտերացիա։' },
      },
    ],
    correctAnswer: 'B',
    explanation: {
      es: 'Es un polisíndeton porque repite intencionadamente la conjunción copulativa "y" antes de cada verbo para dar lentitud y énfasis.',
      hy: 'Բազմաշաղկապություն (polisíndeton) է, որովհետև միտումնավոր կրկնում է «y» (և) շաղկապը յուրաքանչյուր բայից առաջ՝ դանդաղություն և ընդգծվածություն հաղորդելու համար։',
    },
    hint: {
      es: 'Poli = muchos. Muchos nexos "y... y... y...".',
      hy: 'Poli = շատ։ Շատ կապող շաղկապներ՝ «y... y... y...»։',
    },
  },
  {
    id: 'b2-ex-5',
    blockId: 'bloque-2',
    level: 'intermedio',
    type: 'identify-figure',
    instruction: {
      es: 'Analiza la siguiente metáfora.',
      hy: 'Վերլուծիր հետևյալ փոխաբերությունը։',
    },
    question: {
      es: 'En la frase «El tiempo (A) es oro (B)», ¿qué tipo de metáfora encontramos?',
      hy: '«El tiempo (A) es oro (B)» (Ժամանակը ոսկի է) նախադասության մեջ ի՞նչ տեսակի փոխաբերություն ենք տեսնում։',
    },
    options: [
      {
        id: 'A',
        text: { es: 'A. Metáfora impura con estructura "A es B".', hy: 'A. Անմաքուր փոխաբերություն «A es B» կառուցվածքով։' },
      },
      {
        id: 'B',
        text: { es: 'B. Metáfora pura (solo B).', hy: 'B. Մաքուր փոխաբերություն (միայն B)։' },
      },
      {
        id: 'C',
        text: { es: 'C. Metáfora preposicional "B de A".', hy: 'C. Նախդիրային փոխաբերություն «B de A»։' },
      },
      {
        id: 'D',
        text: { es: 'D. Comparación o símil.', hy: 'D. Համեմատություն (símil)։' },
      },
    ],
    correctAnswer: 'A',
    explanation: {
      es: 'Aparecen tanto el elemento real (A: el tiempo) como el elemento figurado (B: oro) unidos por el verbo "es". Es la metáfora impura (A es B).',
      hy: 'Առկա են և՛ իրական տարրը (A՝ ժամանակը), և՛ փոխաբերական տարրը (B՝ ոսկի)՝ միացված «es» (է) բայով։ Դա անմաքուր փոխաբերությունն է (A es B)։',
    },
    hint: {
      es: 'Busca la fórmula directa con el verbo ser: A es B.',
      hy: 'Փնտրիր ser բայով ուղիղ բանաձևը՝ A es B։',
    },
  },
  {
    id: 'b2-ex-6',
    blockId: 'bloque-2',
    level: 'examen',
    type: 'identify-figure',
    instruction: {
      es: 'Identifica el tipo exacto de metáfora.',
      hy: 'Որոշիր փոխաբերության ճշգրիտ տեսակը։',
    },
    question: {
      es: '«Las perlas de tu boca brillan al sonreír». ¿Por qué es una metáfora pura?',
      hy: '«Las perlas de tu boca brillan al sonreír» (Քո բերանի մարգարիտները փայլում են ժպտալիս)։ Ինչո՞ւ է սա մաքուր փոխաբերություն։',
    },
    options: [
      {
        id: 'A',
        text: {
          es: 'A. Porque nombra la palabra "dientes".',
          hy: 'A. Որովհետև նշում է «dientes» (ատամներ) բառը։',
        },
      },
      {
        id: 'B',
        text: {
          es: 'B. Porque solo aparece el término figurado B ("perlas") y se omite el real A ("dientes").',
          hy: 'B. Որովհետև առկա է միայն փոխաբերական B («մարգարիտներ») տարրը, իսկ իրական A («ատամներ») տարրը բացակայում է։',
        },
      },
      {
        id: 'C',
        text: {
          es: 'C. Porque tiene la palabra "como".',
          hy: 'C. Որովհետև ունի «como» բառը։',
        },
      },
      {
        id: 'D',
        text: {
          es: 'D. Porque es una aliteración sonora.',
          hy: 'D. Որովհետև հնչյունային ալիտերացիա է։',
        },
      },
    ],
    correctAnswer: 'B',
    explanation: {
      es: 'En la metáfora pura el término real A (los dientes) no se menciona explícitamente; el lector debe deducirlo a partir de la imagen figurada B (las perlas).',
      hy: 'Մաքուր փոխաբերության մեջ իրական A տարրը (ատամները) բացահայտ չի հիշատակվում. ընթերցողը պետք է այն կռահի փոխաբերական B պատկերից (մարգարիտները)։',
    },
    hint: {
      es: 'En la metáfora pura el término real A no aparece escrito.',
      hy: 'Մաքուր փոխաբերության մեջ իրական A անդամը գրված չէ։',
    },
  },
  {
    id: 'b2-ex-7',
    blockId: 'bloque-2',
    level: 'examen',
    type: 'identify-figure',
    instruction: {
      es: 'Identifica la alteración del orden sintáctico.',
      hy: 'Ճանաչիր շարահյուսական շարադասության խախտումը։',
    },
    question: {
      es: '«Volverán del amor en tus oídos las palabras ardientes a sonar». ¿Qué figura morfosintáctica es?',
      hy: '«Volverán del amor en tus oídos las palabras ardientes a sonar». Ո՞ր ձևաբանական-շարահյուսական հնարքն է սա։',
    },
    options: [
      {
        id: 'A',
        text: { es: 'A. Hipérbaton.', hy: 'A. Հիպերբատոն։' },
      },
      {
        id: 'B',
        text: { es: 'B. Pleonasmo.', hy: 'B. Պլեոնազմ։' },
      },
      {
        id: 'C',
        text: { es: 'C. Paronomasia.', hy: 'C. Հարանունություն։' },
      },
      {
        id: 'D',
        text: { es: 'D. Asíndeton.', hy: 'D. Ասինդետոն։' },
      },
    ],
    correctAnswer: 'A',
    explanation: {
      es: 'Es un hipérbaton porque se altera el orden habitual (Las palabras ardientes de amor volverán a sonar en tus oídos).',
      hy: 'Հիպերբատոն է, որովհետև խախտված է բառերի սովորական շարադասությունը (Las palabras ardientes de amor volverán a sonar en tus oídos)։',
    },
    hint: {
      es: 'Cambio del orden lógico de las palabras en la frase.',
      hy: 'Նախադասության մեջ բառերի տրամաբանական շարադասության փոփոխություն։',
    },
  },

  // ==========================================
  // BLOQUE 3: LA LITERATURA CULTA Y POPULAR
  // ==========================================
  {
    id: 'b3-ex-1',
    blockId: 'bloque-3',
    level: 'facil',
    type: 'multiple-choice',
    instruction: {
      es: 'Identifica el rasgo propio de la literatura popular.',
      hy: 'Որոշիր ժողովրդական գրականությանը բնորոշ հատկանիշը։',
    },
    question: {
      es: '¿Cuál de las siguientes es una característica fundamental de la literatura popular?',
      hy: 'Հետևյալներից ո՞րն է ժողովրդական գրականության հիմնարար հատկանիշը։',
    },
    options: [
      {
        id: 'A',
        text: { es: 'A. Autor conocido y texto inmutable.', hy: 'A. Հայտնի հեղինակ և անփոփոխ տեքստ։' },
      },
      {
        id: 'B',
        text: { es: 'B. Transmisión oral, autoría anónima y múltiples variantes.', hy: 'B. Բանավոր փոխանցում, անհայտ հեղինակ և բազմաթիվ տարբերակներ։' },
      },
      {
        id: 'C',
        text: { es: 'C. Se publica siempre en libros de lujo.', hy: 'C. Միշտ հրատարակվում է շքեղ գրքերում։' },
      },
      {
        id: 'D',
        text: { es: 'D. No tiene ritmo ni musicalidad.', hy: 'D. Չունի ռիթմ կամ երաժշտականություն։' },
      },
    ],
    correctAnswer: 'B',
    explanation: {
      es: 'La literatura popular nace del pueblo, no tiene un autor individual firmado (es anónima) y se difunde oralmente de padres a hijos con variantes.',
      hy: 'Ժողովրդական գրականությունը ծնվում է ժողովրդից, չունի ստորագրված անհատ հեղինակ (անհայտ է) և տարածվում է բանավոր՝ ծնողներից երեխաներին՝ տարբերակներով։',
    },
    hint: {
      es: 'Piensa en las canciones de corro o nanas que se cantan en familia.',
      hy: 'Մտածիր շուրջպարի երգերի կամ օրորոցայինների մասին, որոնք երգվում են ընտանիքում։',
    },
  },
  {
    id: 'b3-ex-2',
    blockId: 'bloque-3',
    level: 'intermedio',
    type: 'multiple-choice',
    instruction: {
      es: 'Clasifica la siguiente composición popular.',
      hy: 'Դասակարգիր հետևյալ ժողովրդական ստեղծագործությունը։',
    },
    question: {
      es: '«Duérmete, niño chiquito, / duérmete y no llores más...» ¿Qué tipo de manifestación popular es?',
      hy: '«Duérmete, niño chiquito, / duérmete y no llores más...» Ժողովրդական ո՞ր տեսակին է պատկանում սա։',
    },
    options: [
      {
        id: 'A',
        text: { es: 'A. Un villancico.', hy: 'A. Վիլյանսիկո (Սուրբ Ծննդյան երգ)։' },
      },
      {
        id: 'B',
        text: { es: 'B. Una nana o canción de cuna.', hy: 'B. Օրորոցային (nana)։' },
      },
      {
        id: 'C',
        text: { es: 'C. Una novela culta.', hy: 'C. Հեղինակային վեպ։' },
      },
      {
        id: 'D',
        text: { es: 'D. Un cantar de gesta.', hy: 'D. Հերոսավեպ։' },
      },
    ],
    correctAnswer: 'B',
    explanation: {
      es: 'Las nanas son canciones suaves y repetitivas utilizadas tradicionalmente para arrullar y dormir a los niños pequeños.',
      hy: 'Օրորոցայինները (nanas) մեղմ և կրկնվող երգեր են, որոնք ավանդաբար օգտագործվում են փոքրիկ երեխաներին օրորելու և քնեցնելու համար։',
    },
    hint: {
      es: 'Su propósito es calmar y dormir al bebé.',
      hy: 'Նպատակն է հանգստացնել և քնեցնել մանկանը։',
    },
  },

  // ==========================================
  // BLOQUE 4: LOS GÉNEROS Y TEXTOS LITERARIOS
  // ==========================================
  {
    id: 'b4-ex-1',
    blockId: 'bloque-4',
    level: 'facil',
    type: 'multiple-choice',
    instruction: {
      es: 'Distingue los subgéneros narrativos.',
      hy: 'Տարբերակիր պատմողական ենթաժանրերը։',
    },
    question: {
      es: '¿Qué tipo de relato explica el origen de los dioses, del mundo o de los fenómenos de la naturaleza?',
      hy: 'Ինչպիսի՞ պատմությունն է բացատրում աստվածների, աշխարհի կամ բնության երևույթների ծագումը։',
    },
    options: [
      {
        id: 'A',
        text: { es: 'A. El mito.', hy: 'A. Առասպելը (Mito)։' },
      },
      {
        id: 'B',
        text: { es: 'B. La leyenda.', hy: 'B. Լեգենդը (Leyenda)։' },
      },
      {
        id: 'C',
        text: { es: 'C. La noticia periodística.', hy: 'C. Լրագրողական լուրը։' },
      },
      {
        id: 'D',
        text: { es: 'D. El microrrelato.', hy: 'D. Միկրոպատմվածքը։' },
      },
    ],
    correctAnswer: 'A',
    explanation: {
      es: 'El mito es una narración sagrada que tiene como protagonistas a dioses o héroes cósmicos para dar sentido al origen del universo.',
      hy: 'Առասպելը (mito) սրբազան պատմություն է, որի գլխավոր հերոսներն են աստվածները կամ տիեզերական հերոսները՝ տիեզերքի ծագումը բացատրելու համար։',
    },
    hint: {
      es: 'Involucra a dioses griegos o romanos como Zeus, Apolo o Perséfone.',
      hy: 'Ներառում է հունական կամ հռոմեական աստվածների՝ Զևս, Ապոլոն, Պերսեփոնե։',
    },
  },
  {
    id: 'b4-ex-2',
    blockId: 'bloque-4',
    level: 'intermedio',
    type: 'multiple-choice',
    instruction: {
      es: 'Identifica la estructura del romance español.',
      hy: 'Որոշիր իսպանական ռոմանսի կառուցվածքը։',
    },
    question: {
      es: '¿Cuáles son las características métricas obligatorias de un romance?',
      hy: 'Որո՞նք են ռոմանսի պարտադիր տաղաչափական հատկանիշները։',
    },
    options: [
      {
        id: 'A',
        text: {
          es: 'A. Versos endecasílabos con rima consonante en todos los versos.',
          hy: 'A. Տասնմեկվանկ տողեր լիակատար հանգով բոլոր տողերում։',
        },
      },
      {
        id: 'B',
        text: {
          es: 'B. Versos octosílabos (8) con rima asonante en los pares y los impares sueltos.',
          hy: 'B. Ութվանկ (8) տողեր՝ զույգ տողերում ձայնավորական հանգով, իսկ կենտերը՝ ազատ։',
        },
      },
      {
        id: 'C',
        text: {
          es: 'C. Prosa continua dividida en párrafos.',
          hy: 'C. Պարբերություններով բաժանված շարունակական արձակ։',
        },
      },
      {
        id: 'D',
        text: {
          es: 'D. Versos alejandrinos de 14 sílabas.',
          hy: 'D. 14-վանկանի ալեքսանդրյան տողեր։',
        },
      },
    ],
    correctAnswer: 'B',
    explanation: {
      es: 'El romance español se define por versos octosílabos (8) de arte menor, donde riman en asonante los pares (2, 4, 6...) y quedan sueltos los impares (1, 3, 5...).',
      hy: 'Իսպանական ռոմանսը բնորոշվում է ութվանկ (8) տողերով, որտեղ ձայնավորական հանգով հանգավորվում են զույգերը (2, 4, 6...) և ազատ են մնում կենտերը (1, 3, 5...)։',
    },
    hint: {
      es: 'Fórmula básica del romance: 8- 8a 8- 8a.',
      hy: 'Ռոմանսի հիմնական բանաձևը՝ 8- 8a 8- 8a։',
    },
  },

  // ==========================================
  // BLOQUE 5: LAS FUNCIONES DEL LENGUAJE
  // ==========================================
  {
    id: 'b5-ex-1',
    blockId: 'bloque-5',
    level: 'facil',
    type: 'multiple-choice',
    instruction: {
      es: 'Identifica la función del lenguaje.',
      hy: 'Ճանաչիր լեզվի գործառույթը։',
    },
    question: {
      es: '«¡Por favor, cierra la puerta al salir!». ¿Qué función del lenguaje predomina en esta frase?',
      hy: '«¡Por favor, cierra la puerta al salir!» (Խնդրում եմ, դուրս գալիս փակի՛ր դուռը)։ Լեզվի ո՞ր գործառույթն է գերիշխում այս նախադասության մեջ։',
    },
    options: [
      {
        id: 'A',
        text: { es: 'A. Función referencial.', hy: 'A. Հաղորդակցական (տեղեկատվական)։' },
      },
      {
        id: 'B',
        text: { es: 'B. Función apelativa o conativa.', hy: 'B. Կոչական կամ ազդեցության (Apelativa)։' },
      },
      {
        id: 'C',
        text: { es: 'C. Función metalingüística.', hy: 'C. Մետալեզվական։' },
      },
      {
        id: 'D',
        text: { es: 'D. Función poética.', hy: 'D. Բանաստեղծական։' },
      },
    ],
    correctAnswer: 'B',
    explanation: {
      es: 'La función apelativa busca influir en la conducta del receptor mediante un mandato, ruego o petición.',
      hy: 'Կոչական գործառույթը (apelativa) ձգտում է ազդել լսողի վարքագծի վրա հրամանի, խնդրանքի կամ կոչի միջոցով։',
    },
    hint: {
      es: 'Se centra en el RECEPTOR para que realice una acción.',
      hy: 'Կենտրոնանում է ԼՍՈՂԻ (Receptor) վրա, որպեսզի նա գործողություն կատարի։',
    },
  },
  {
    id: 'b5-ex-2',
    blockId: 'bloque-5',
    level: 'intermedio',
    type: 'multiple-choice',
    instruction: {
      es: 'Distingue entre función referencial y metalingüística.',
      hy: 'Տարբերակիր տեղեկատվական և մետալեզվական գործառույթները։',
    },
    question: {
      es: '«Los sustantivos colectivos nombran en singular a un grupo de seres». ¿Qué función es?',
      hy: '«Los sustantivos colectivos nombran en singular a un grupo de seres» (Հավաքական գոյականները եզակի թվով անվանում են էակների խումբ)։ Ո՞ր գործառույթն է սա։',
    },
    options: [
      {
        id: 'A',
        text: { es: 'A. Función metalingüística.', hy: 'A. Մետալեզվական գործառույթ։' },
      },
      {
        id: 'B',
        text: { es: 'B. Función fática.', hy: 'B. Կապի հաստատման գործառույթ։' },
      },
      {
        id: 'C',
        text: { es: 'C. Función emotiva.', hy: 'C. Հուզական գործառույթ։' },
      },
      {
        id: 'D',
        text: { es: 'D. Función apelativa.', hy: 'D. Կոչական գործառույթ։' },
      },
    ],
    correctAnswer: 'A',
    explanation: {
      es: 'Es metalingüística porque usa el lenguaje para explicar una regla o definición del propio código gramatical.',
      hy: 'Մետալեզվական է, որովհետև լեզուն օգտագործում է հենց քերականական կոդի կանոնը կամ սահմանումը բացատրելու համար։',
    },
    hint: {
      es: 'Habla sobre las reglas del propio idioma (código).',
      hy: 'Խոսում է հենց լեզվի կանոնների մասին (կոդ)։',
    },
  },
  {
    id: 'b5-ex-3',
    blockId: 'bloque-5',
    level: 'intermedio',
    type: 'multiple-choice',
    instruction: {
      es: 'Identifica la función fática.',
      hy: 'Ճանաչիր կապի հաստատման (ֆատիկ) գործառույթը։',
    },
    question: {
      es: '«¿Diga? ¿Me escuchas bien por el teléfono?». ¿Qué función del lenguaje se activa?',
      hy: '«¿Diga? ¿Me escuchas bien por el teléfono?» (Ալո՞։ Ինձ լավ լսո՞ւմ ես հեռախոսով)։ Լեզվի ո՞ր գործառույթն է ակտիվանում։',
    },
    options: [
      {
        id: 'A',
        text: { es: 'A. Función fática o de contacto.', hy: 'A. Կապի հաստատման (ֆատիկ) գործառույթը։' },
      },
      {
        id: 'B',
        text: { es: 'B. Función poética.', hy: 'B. Բանաստեղծական գործառույթը։' },
      },
      {
        id: 'C',
        text: { es: 'C. Función referencial.', hy: 'C. Տեղեկատվական գործառույթը։' },
      },
      {
        id: 'D',
        text: { es: 'D. Función metalingüística.', hy: 'D. Մետալեզվական գործառույթը։' },
      },
    ],
    correctAnswer: 'A',
    explanation: {
      es: 'La función fática verifica que el canal físico de comunicación funcione correctamente.',
      hy: 'Ֆատիկ գործառույթը ստուգում է, որ հաղորդակցման ֆիզիկական կապուղին ճիշտ աշխատի։',
    },
    hint: {
      es: 'Se enfoca en comprobar el canal físico.',
      hy: 'Կենտրոնանում է ֆիզիկական կապուղու ստուգման վրա։',
    },
  },

  // ==========================================
  // BLOQUE 6: LAS MODALIDADES ORACIONALES
  // ==========================================
  {
    id: 'b6-ex-1',
    blockId: 'bloque-6',
    level: 'facil',
    type: 'multiple-choice',
    instruction: {
      es: 'Clasifica la modalidad de la oración.',
      hy: 'Դասակարգիր նախադասության տեսակն ըստ խոսողի նպատակի։',
    },
    question: {
      es: '«¡Ojalá no llueva mañana durante la excursión escolar!». ¿Qué modalidad oracional es?',
      hy: '«¡Ojalá no llueva mañana durante la excursión escolar!» (Երանի՜ վաղը դպրոցական էքսկուրսիայի ժամանակ անձրև չգա)։ Ի՞նչ տեսակի նախադասություն է։',
    },
    options: [
      {
        id: 'A',
        text: { es: 'A. Desiderativa.', hy: 'A. Ըղձական (Desiderativa)։' },
      },
      {
        id: 'B',
        text: { es: 'B. Enunciativa afirmativa.', hy: 'B. Պատմողական հաստատական։' },
      },
      {
        id: 'C',
        text: { es: 'C. Exhortativa.', hy: 'C. Հրամայական/Հորդորական։' },
      },
      {
        id: 'D',
        text: { es: 'D. Interrogativa indirecta.', hy: 'D. Անուղղակի հարցական։' },
      },
    ],
    correctAnswer: 'A',
    explanation: {
      es: 'Expresa un anhelo o deseo del hablante y va introducida por la palabra "ojalá", por lo que es una oración desiderativa.',
      hy: 'Արտահայտում է խոսողի իղձը կամ ցանկությունը և սկսվում է «ojalá» (երանի) բառով, ուստի ըղձական նախադասություն է։',
    },
    hint: {
      es: 'Ojalá = deseo.',
      hy: 'Ojalá = ցանկություն, իղձ։',
    },
  },
  {
    id: 'b6-ex-2',
    blockId: 'bloque-6',
    level: 'intermedio',
    type: 'multiple-choice',
    instruction: {
      es: 'Reconoce la modalidad dubitativa.',
      hy: 'Ճանաչիր երկբայական (կասկածի) նախադասությունը։',
    },
    question: {
      es: '¿Cuál de las siguientes es una oración DUBITATIVA?',
      hy: 'Հետևյալներից ո՞րն է ԵՐԿԲԱՅԱԿԱՆ (կասկած արտահայտող) նախադասություն։',
    },
    options: [
      {
        id: 'A',
        text: { es: 'A. Haz la cama antes de irte al colegio.', hy: 'A. Դպրոց գնալուց առաջ հավաքի՛ր անկողինդ։' },
      },
      {
        id: 'B',
        text: { es: 'B. Quizás lleguemos a tiempo para ver el principio.', hy: 'B. Գուցե ժամանակին հասնենք՝ սկիզբը տեսնելու համար։' },
      },
      {
        id: 'C',
        text: { es: 'C. El examen consta de diez preguntas.', hy: 'C. Քննությունը բաղկացած է տասը հարցից։' },
      },
      {
        id: 'D',
        text: { es: 'D. ¡Qué alegría volver a verte!', hy: 'D. Որքա՜ն ուրախ եմ քեզ կրկին տեսնել։' },
      },
    ],
    correctAnswer: 'B',
    explanation: {
      es: '"Quizás lleguemos a tiempo" expresa duda o probabilidad mediante el adverbio "quizás".',
      hy: '«Quizás lleguemos a tiempo» արտահայտում է կասկած կամ հավանականություն «quizás» (գուցե) մակբայի միջոցով։',
    },
    hint: {
      es: 'Busca conectores de duda como "quizás", "tal vez" o "acaso".',
      hy: 'Փնտրիր կասկածի բառեր՝ «quizás», «tal vez» (գուցե, թերևս)։',
    },
  },

  // ==========================================
  // BLOQUE 7: LA COMUNICACIÓN
  // ==========================================
  {
    id: 'b7-ex-1',
    blockId: 'bloque-7',
    level: 'facil',
    type: 'multiple-choice',
    instruction: {
      es: 'Identifica el elemento de la comunicación.',
      hy: 'Որոշիր հաղորդակցության տարրը։',
    },
    question: {
      es: 'En una clase de matemáticas, el profesor escribe una fórmula en la pizarra. ¿Cuál es el CANAL de la comunicación?',
      hy: 'Մաթեմատիկայի դասին ուսուցիչը բանաձև է գրում գրատախտակին։ Ո՞րն է հաղորդակցման ԿԱՊՈՒՂԻՆ (Canal)։',
    },
    options: [
      {
        id: 'A',
        text: { es: 'A. El profesor.', hy: 'A. Ուսուցիչը։' },
      },
      {
        id: 'B',
        text: { es: 'B. Los alumnos.', hy: 'B. Աշակերտները։' },
      },
      {
        id: 'C',
        text: { es: 'C. La pizarra y la tiza / la luz.', hy: 'C. Գրատախտակը և կավիճը / լույսը։' },
      },
      {
        id: 'D',
        text: { es: 'D. El idioma castellano.', hy: 'D. Իսպաներեն լեզուն։' },
      },
    ],
    correctAnswer: 'C',
    explanation: {
      es: 'El canal es el soporte o medio físico por el cual viaja la información visual: en este caso, la pizarra y los trazos de tiza captados por la vista.',
      hy: 'Կապուղին (canal) այն կրիչը կամ ֆիզիկական միջավայրն է, որով տեղեկությունը հասնում է․ տվյալ դեպքում՝ գրատախտակն ու կավիճը։',
    },
    hint: {
      es: 'El soporte físico por el que viaja el mensaje.',
      hy: 'Ֆիզիկական կրիչը, որով ճամփորդում է հաղորդագրությունը։',
    },
  },
  {
    id: 'b7-ex-2',
    blockId: 'bloque-7',
    level: 'intermedio',
    type: 'multiple-choice',
    instruction: {
      es: 'Analiza el código en la comunicación.',
      hy: 'Վերլուծիր կոդը հաղորդակցության մեջ։',
    },
    question: {
      es: 'Un semáforo se pone en color rojo frente a un conductor. ¿Cuál es el CÓDIGO de este mensaje?',
      hy: 'Լուսացույցը կարմիր գույնով է վառվում վարորդի առաջ։ Ո՞րն է այս հաղորդագրության ԿՈԴԸ (Código)։',
    },
    options: [
      {
        id: 'A',
        text: { es: 'A. Las ondas sonoras del claxon.', hy: 'A. Ազդանշանի ձայնային ալիքները։' },
      },
      {
        id: 'B',
        text: { es: 'B. El código de las señales luminosas de tráfico.', hy: 'B. Ճանապարհային լուսային ազդանշանների համակարգը/կոդը։' },
      },
      {
        id: 'C',
        text: { es: 'C. El asfalto de la carretera.', hy: 'C. Ճանապարհի ասֆալտը։' },
      },
      {
        id: 'D',
        text: { es: 'D. El conductor del automóvil.', hy: 'D. Ավտոմեքենայի վարորդը։' },
      },
    ],
    correctAnswer: 'B',
    explanation: {
      es: 'El código es el sistema de signos y normas convencionales que asigna al color rojo el significado de "prohibido el paso / detenerse".',
      hy: 'Կոդը նշանների և պայմանական կանոնների համակարգն է, որը կարմիր գույնին վերագրում է «անցումն արգելվում է / կանգնե՛ք» իմաստը։',
    },
    hint: {
      es: 'El sistema de signos compartido para entender el significado.',
      hy: 'Ընդհանուր նշանային համակարգը իմաստը հասկանալու համար։',
    },
  },

  // ==========================================
  // BLOQUE 8: LAS CATEGORÍAS GRAMATICALES
  // ==========================================
  {
    id: 'b8-ex-1',
    blockId: 'bloque-8',
    level: 'facil',
    type: 'multiple-choice',
    instruction: {
      es: 'Distingue determinante y pronombre.',
      hy: 'Տարբերակիր որոշիչը և դերանունը։',
    },
    question: {
      es: 'En la frase «ESTE libro es mío, pero AQUEL es tuyo», ¿qué categoría gramatical es "AQUEL"?',
      hy: '«ESTE libro es mío, pero AQUEL es tuyo» նախադասության մեջ ի՞նչ խոսքի մաս է «AQUEL»-ը։',
    },
    options: [
      {
        id: 'A',
        text: { es: 'A. Determinante demostrativo.', hy: 'A. Ցուցական որոշիչ։' },
      },
      {
        id: 'B',
        text: { es: 'B. Pronombre demostrativo.', hy: 'B. Ցուցական դերանուն։' },
      },
      {
        id: 'C',
        text: { es: 'C. Adjetivo calificativo.', hy: 'C. Որակական ածական։' },
      },
      {
        id: 'D',
        text: { es: 'D. Adverbio de lugar.', hy: 'D. Տեղի մակբայ։' },
      },
    ],
    correctAnswer: 'B',
    explanation: {
      es: '"Aquel" no acompaña a ningún sustantivo, sino que lo sustituye (sustituye a "libro") y va solo; por tanto, es un pronombre demostrativo.',
      hy: '«Aquel»-ը չի ուղեկցում որևէ գոյականի, այլ փոխարինում է նրան (փոխարինում է «գիրք» բառին) և գալիս է միայնակ, հետևաբար ցուցական դերանուն է։',
    },
    hint: {
      es: '"Este libro" = determinante; "Aquel" (solo) = pronombre.',
      hy: '«Este libro» = որոշիչ; «Aquel» (միայնակ) = դերանուն։',
    },
  },
  {
    id: 'b8-ex-2',
    blockId: 'bloque-8',
    level: 'facil',
    type: 'multiple-choice',
    instruction: {
      es: 'Clasifica el sustantivo.',
      hy: 'Դասակարգիր գոյականը։',
    },
    question: {
      es: 'El sustantivo «jauría» (conjunto de perros de caza) es...',
      hy: '«Jauría» (որսաշների ոհմակ) գոյականը․․․',
    },
    options: [
      {
        id: 'A',
        text: { es: 'A. Común, concreto, colectivo y contable.', hy: 'A. Հասարակ, թանձրացական, հավաքական և հաշվելի։' },
      },
      {
        id: 'B',
        text: { es: 'B. Propio, abstracto e incontable.', hy: 'B. Հատուկ, վերացական և անհաշվելի։' },
      },
      {
        id: 'C',
        text: { es: 'C. Común, abstracto, individual.', hy: 'C. Հասարակ, վերացական, անհատական։' },
      },
      {
        id: 'D',
        text: { es: 'D. Propio e individual.', hy: 'D. Հատուկ և անհատական։' },
      },
    ],
    correctAnswer: 'A',
    explanation: {
      es: 'Nombra en singular a un conjunto de animales (colectivo), se puede percibir físicamente (concreto) y se puede contar (una jauría, dos jaurías).',
      hy: 'Եզակի թվով անվանում է կենդանիների ամբողջություն (հավաքական), ընկալվում է ֆիզիկապես (թանձրացական) և կարելի է հաշվել (մեկ ոհմակ, երկու ոհմակ)։',
    },
    hint: {
      es: 'En singular nombra a un grupo: es colectivo.',
      hy: 'Եզակի թվով խումբ է անվանում՝ հավաքական է։',
    },
  },
  {
    id: 'b8-ex-3',
    blockId: 'bloque-8',
    level: 'intermedio',
    type: 'multiple-choice',
    instruction: {
      es: 'Distingue adjetivo de adverbio.',
      hy: 'Տարբերակիր ածականը մակբայից։',
    },
    question: {
      es: 'En la frase «Los atletas corrieron MUY RÁPIDO hacia la meta», ¿qué es la palabra "RÁPIDO"?',
      hy: '«Los atletas corrieron MUY RÁPIDO hacia la meta» նախադասության մեջ ի՞նչ է «RÁPIDO» բառը։',
    },
    options: [
      {
        id: 'A',
        text: { es: 'A. Adjetivo calificativo.', hy: 'A. Որակական ածական։' },
      },
      {
        id: 'B',
        text: { es: 'B. Adverbio de modo (invariable).', hy: 'B. Ձևի մակբայ (անփոփոխ)։' },
      },
      {
        id: 'C',
        text: { es: 'C. Sustantivo abstracto.', hy: 'C. Վերացական գոյական։' },
      },
      {
        id: 'D',
        text: { es: 'D. Preposición.', hy: 'D. Նախդիր։' },
      },
    ],
    correctAnswer: 'B',
    explanation: {
      es: 'Modifica al verbo "corrieron" indicando cómo corrieron (de modo rápido) y permanece invariable en masculino singular aunque los atletas sean plural. Por tanto, es un adverbio.',
      hy: 'Լրացնում է «corrieron» (վազեցին) բային՝ ցույց տալով, թե ինչպես վազեցին (արագ ձևով) և մնում է անփոփոխ եզակի թվով, թեև մարզիկները հոգնակի են։ Հետևաբար, մակբայ է։',
    },
    hint: {
      es: 'No concuerda con "atletas" (no dice "rápidos"), sino que explica cómo corrieron.',
      hy: 'Չի համաձայնում «atletas»-ի հետ (չի ասվում «rápidos»), այլ բացատրում է, թե ինչպես վազեցին։',
    },
  },
  {
    id: 'b8-ex-4',
    blockId: 'bloque-8',
    level: 'intermedio',
    type: 'multiple-choice',
    instruction: {
      es: 'Identifica la preposición.',
      hy: 'Ճանաչիր նախդիրը։',
    },
    question: {
      es: '¿Cuál de las siguientes palabras es una PREPOSICIÓN en español?',
      hy: 'Հետևյալ բառերից ո՞րն է ՆԱԽԴԻՐ (preposición) իսպաներենում։',
    },
    options: [
      {
        id: 'A',
        text: { es: 'A. Desde', hy: 'A. Desde (սկսած, -ից)' },
      },
      {
        id: 'B',
        text: { es: 'B. Pero', hy: 'B. Pero (բայց - շաղկապ)' },
      },
      {
        id: 'C',
        text: { es: 'C. Aunque', hy: 'C. Aunque (թեև - շաղկապ)' },
      },
      {
        id: 'D',
        text: { es: 'D. Ayer', hy: 'D. Ayer (երեկ - մակբայ)' },
      },
    ],
    correctAnswer: 'A',
    explanation: {
      es: '"Desde" pertenece a la lista oficial de preposiciones (a, ante, bajo, cabe, con, contra, de, desde...). "Pero" y "aunque" son conjunciones, y "ayer" es adverbio.',
      hy: '«Desde»-ն պատկանում է իսպաներեն նախդիրների պաշտոնական ցուցակին (a, ante, bajo, cabe, con, contra, de, desde...)։ «Pero»-ն և «aunque»-ն շաղկապներ են, իսկ «ayer»-ը՝ մակբայ։',
    },
    hint: {
      es: 'A, ante, bajo, cabe, con, contra, de, DESDE...',
      hy: 'A, ante, bajo, cabe, con, contra, de, DESDE...',
    },
  },
  {
    id: 'b8-ex-5',
    blockId: 'bloque-8',
    level: 'examen',
    type: 'multiple-choice',
    instruction: {
      es: 'Análisis morfológico de examen 1.º ESO.',
      hy: 'Քննական ձևաբանական վերլուծություն 1.º ESO:',
    },
    question: {
      es: 'En la frase «Ayer ellos comieron tres deliciosas manzanas rojas», ¿cuál es el análisis morfológico de "TRES"?',
      hy: '«Ayer ellos comieron tres deliciosas manzanas rojas» նախադասության մեջ ո՞րն է «TRES» բառի ձևաբանական վերլուծությունը։',
    },
    options: [
      {
        id: 'A',
        text: {
          es: 'A. Determinante numeral cardinal.',
          hy: 'A. Որոշիչ թվական (քանակական)։',
        },
      },
      {
        id: 'B',
        text: {
          es: 'B. Pronombre personal.',
          hy: 'B. Անձնական դերանուն։',
        },
      },
      {
        id: 'C',
        text: {
          es: 'C. Adverbio de cantidad.',
          hy: 'C. Քանակի մակբայ։',
        },
      },
      {
        id: 'D',
        text: {
          es: 'D. Sustantivo abstracto.',
          hy: 'D. Վերացական գոյական։',
        },
      },
    ],
    correctAnswer: 'A',
    explanation: {
      es: '"Tres" acompaña al sustantivo "manzanas" indicando un número exacto, por lo tanto es un determinante numeral cardinal.',
      hy: '«Tres»-ը ուղեկցում է «manzanas» գոյականին՝ ցույց տալով ճշգրիտ քանակ, հետևաբար քանակական որոշիչ թվական է։',
    },
    hint: {
      es: 'Acompaña a un sustantivo expresando una cantidad matemática exacta.',
      hy: 'Ուղեկցում է գոյականին՝ արտահայտելով ճշգրիտ մաթեմատիկական քանակ։',
    },
  },

  // ==========================================
  // BLOQUE 9: VOCABULARIO DEL MATERIAL
  // ==========================================
  {
    id: 'b9-ex-1',
    blockId: 'bloque-9',
    level: 'facil',
    type: 'multiple-choice',
    instruction: {
      es: 'Selecciona el significado del término académico.',
      hy: 'Ընտրիր ակադեմիական եզրույթի իմաստը։',
    },
    question: {
      es: 'En el ámbito escolar español, ¿qué significa "RECUPERAR una asignatura"?',
      hy: 'Իսպանական դպրոցական միջավայրում ի՞նչ է նշանակում «RECUPERAR una asignatura»:',
    },
    options: [
      {
        id: 'A',
        text: {
          es: 'A. Comprar un libro nuevo en la papelería.',
          hy: 'A. Գրենական խանութից նոր գիրք գնել։',
        },
      },
      {
        id: 'B',
        text: {
          es: 'B. Volver a examinarse y aprobar una materia suspendida previamente.',
          hy: 'B. Կրկին քննություն հանձնել և հաջողությամբ փակել նախկինում կտրված առարկան։',
        },
      },
      {
        id: 'C',
        text: {
          es: 'C. Cambiarse de colegio.',
          hy: 'C. Դպրոցը փոխել։',
        },
      },
      {
        id: 'D',
        text: {
          es: 'D. Olvidar los deberes en casa.',
          hy: 'D. Տնային աշխատանքը տանը մոռանալ։',
        },
      },
    ],
    correctAnswer: 'B',
    explanation: {
      es: '"Recuperar" en el colegio significa realizar un examen o trabajo extraordinario para alcanzar el aprobado en una materia que se había suspendido.',
      hy: 'Դպրոցում «recuperar» նշանակում է լրացուցիչ քննություն հանձնել կամ աշխատանք կատարել՝ կտրված առարկան դրական գնահատականով հանձնելու համար։',
    },
    hint: {
      es: 'Superar un examen de recuperación tras suspender.',
      hy: 'Վերահանձնման քննություն անցնել կտրվելուց հետո։',
    },
  },
  {
    id: 'b9-ex-2',
    blockId: 'bloque-9',
    level: 'intermedio',
    type: 'multiple-choice',
    instruction: {
      es: 'Completa la fórmula correcta para aconsejar.',
      hy: 'Լրացրու խորհուրդ տալու ճիշտ բանաձևը։',
    },
    question: {
      es: '«Yo que tú, ________ con más tiempo para el examen de Lengua».',
      hy: '«Yo que tú, ________ con más tiempo para el examen de Lengua».',
    },
    options: [
      {
        id: 'A',
        text: { es: 'A. estudiaría (condicional simple)', hy: 'A. estudiaría (պայմանական եղանակ)' },
      },
      {
        id: 'B',
        text: { es: 'B. estudio (presente indicativo)', hy: 'B. estudio (ներկա սահմանական)' },
      },
      {
        id: 'C',
        text: { es: 'C. estudiar (infinitivo)', hy: 'C. estudiar (անորոշ դերբայ)' },
      },
      {
        id: 'D',
        text: { es: 'D. estudiaste (pretérito)', hy: 'D. estudiaste (անցյալ)' },
      },
    ],
    correctAnswer: 'A',
    explanation: {
      es: 'La estructura de consejo "Yo que tú..." se construye siempre con CONDICIONAL SIMPLE: "Yo que tú, estudiaría / descansaría / hablaría".',
      hy: '«Yo que tú...» (Ես քո տեղը լինեի․․․) խորհրդի կառույցը միշտ կազմվում է ՊԱՅՄԱՆԱԿԱՆ ԵՂԱՆԱԿՈՎ (condicional simple)՝ «Yo que tú, estudiaría / descansaría»։',
    },
    hint: {
      es: 'Yo que tú + verbo en -ría (condicional).',
      hy: 'Yo que tú + -ría վերջավորությամբ բայ (condicional)։',
    },
  },
  {
    id: 'b9-ex-3',
    blockId: 'bloque-9',
    level: 'examen',
    type: 'multiple-choice',
    instruction: {
      es: 'Elige la construcción gramatical correcta con subjuntivo.',
      hy: 'Ընտրիր subjuntivo-ով քերականական ճիշտ կառույցը։',
    },
    question: {
      es: '«Es mejor que tú ________ a la biblioteca esta tarde».',
      hy: '«Es mejor que tú ________ a la biblioteca esta tarde».',
    },
    options: [
      {
        id: 'A',
        text: { es: 'A. vayas (presente de subjuntivo)', hy: 'A. vayas (subjuntivo-ի ներկա)' },
      },
      {
        id: 'B',
        text: { es: 'B. vas (presente de indicativo)', hy: 'B. vas (indicativo-ի ներկա)' },
      },
      {
        id: 'C',
        text: { es: 'C. ir (infinitivo)', hy: 'C. ir (անորոշ դերբայ)' },
      },
      {
        id: 'D',
        text: { es: 'D. fue (pretérito)', hy: 'D. fue (անցյալ)' },
      },
    ],
    correctAnswer: 'A',
    explanation: {
      es: 'Tras "Es mejor que..." siempre se exige el modo SUBJUNTIVO: "que tú vayas", no el indicativo "vas".',
      hy: '«Es mejor que...» (Ավելի լավ է, որ․․․) արտահայտությունից հետո միշտ պահանջվում է SUBJUNTIVO (ըղձական եղանակ)՝ «que tú vayas», ոչ թե indicativo-ի «vas»։',
    },
    hint: {
      es: 'Es mejor que + subjuntivo.',
      hy: 'Es mejor que + subjuntivo (ըղձական եղանակ)։',
    },
  },
];
