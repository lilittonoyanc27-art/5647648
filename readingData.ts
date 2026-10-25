import { ReadingText } from './types.ts';

export const READING_TEXTS: ReadingText[] = [
  {
    id: 'lectura-1-cuento',
    title: {
      es: 'El sabio y el barquero',
      hy: 'Իմաստունը և նավավարը',
    },
    genre: {
      es: 'Cuento popular con moraleja didáctica',
      hy: 'Ժողովրդական հեքիաթ/առակ ուսուցողական խրատով',
    },
    typeTag: 'cuento',
    introduction: {
      es: 'Un breve relato tradicional que nos enseña el verdadero valor del conocimiento práctico frente a la soberbia teórica.',
      hy: 'Կարճ ավանդական պատմվածք, որը մեզ սովորեցնում է գործնական գիտելիքի իրական արժեքը՝ տեսական գոռոզության դիմաց։',
    },
    paragraphs: [
      {
        es: 'Había una vez un erudito muy orgulloso que subió a una pequeña barca para cruzar un caudaloso río. Durante la travesía, el sabio miró al humilde barquero y le preguntó con desdén: «¿Acaso has estudiado gramática, astronomía o literatura?».',
        hy: 'Լինում է, չի լինում մի շատ հպարտ գիտնական, որը նստում է փոքրիկ նավակ՝ հորդառատ գետն անցնելու համար։ Նավարկության ընթացքում իմաստունը նայում է համեստ նավավարին և արհամարհանքով հարցնում. «Մի՞թե դու երբևէ ուսումնասիրել ես քերականություն, աստղագիտություն կամ գրականություն»։',
      },
      {
        es: 'El anciano barquero, concentrado en remar contra la fuerte corriente, negó con la cabeza y respondió con sencillez: «No, señor, jamás he tenido la oportunidad de pisar una escuela. Solo sé remar y escuchar la voz del río».',
        hy: 'Ծեր նավավարը, կենտրոնացած ուժեղ հոսանքին հակառակ թիավարելու վրա, տարուբերեց գլուխը և պարզությամբ պատասխանեց. «Ո՛չ, պարո՛ն, ես երբեք դպրոց ոտք դնելու հնարավորություն չեմ ունեցել։ Միայն գիտեմ թիավարել և լսել գետի ձայնը»։',
      },
      {
        es: 'El sabio soltó una carcajada burlona y exclamó: «¡Pobre ignorante! Has perdido la mitad de tu vida». En ese preciso instante, una gigantesca ola golpeó con furia la frágil embarcación y abrió una grieta por donde el agua comenzó a entrar a borbotones.',
        hy: 'Գիտնականը հեգնական քրքիջ արձակեց ու բացականչեց. «Խե՛ղճ տգետ։ Դու կորցրել ես կյանքիդ կեսը»։ Ճիշտ այդ պահին մի հսկա ալիք կատաղությամբ հարվածեց փխրուն նավակին և ճեղք բացեց, որտեղից ջուրը սկսեց հորդել ներս։',
      },
      {
        es: 'Viendo que la barca se hundía irremediablemente, el barquero miró al erudito, que temblaba pálido de espanto, y le preguntó sereno: «Dígame, señor sabio, ¿sabe usted nadar?». «¡No, jamás aprendí!», gritó el sabio. «Pues me temo —dijo el barquero tirándose al agua— que usted acaba de perder toda su vida entera».',
        hy: 'Տեսնելով, որ նավակն անդառնալիորեն խորտակվում է, նավավարը նայեց սարսափից գունատված ու դողացող գիտնականին և հանդարտ հարցրեց. «Ասացե՛ք ինձ, պարո՛ն իմաստուն, Դուք լողալ գիտե՞ք»։ «Ո՛չ, երբեք չեմ սովորել», աղաղակեց իմաստունը։ «Դե ուրեմն ցավում եմ, — ասաց նավավարը՝ նետվելով ջրի մեջ, — Դուք հենց նոր կորցրիք Ձեր ամբողջ կյանքը»։',
      },
    ],
    questions: [
      {
        id: 'q1-1',
        type: 'comprehension',
        question: {
          es: '¿Por qué el barquero le pregunta al sabio si sabe nadar al final de la historia?',
          hy: 'Ինչո՞ւ է նավավարը պատմության վերջում գիտնականին հարցնում, թե արդյոք նա լողալ գիտի։',
        },
        options: [
          {
            id: 'A',
            text: { es: 'A. Para invitarlo a hacer deporte acuático.', hy: 'A. Ջրային սպորտով զբաղվելու հրավիրելու համար։' },
          },
          {
            id: 'B',
            text: { es: 'B. Porque la barca se está hundiendo y es la única habilidad que puede salvarle la vida.', hy: 'B. Որովհետև նավակը խորտակվում է, և դա միակ ունակությունն է, որը կարող է փրկել նրա կյանքը։' },
          },
          {
            id: 'C',
            text: { es: 'C. Porque quería enseñarle gramática en el agua.', hy: 'C. Որովհետև ցանկանում էր նրան քերականություն սովորեցնել ջրի մեջ։' },
          },
          {
            id: 'D',
            text: { es: 'D. Porque el río era muy tranquilo.', hy: 'D. Որովհետև գետը շատ հանդարտ էր։' },
          },
        ],
        correctAnswer: 'B',
        explanation: {
          es: 'La moraleja subraya que en una emergencia real, el conocimiento práctico para sobrevivir es indispensable.',
          hy: 'Խրատն ընդգծում է, որ իրական վտանգի պահին գոյատևելու գործնական իմացությունն անփոխարինելի է։',
        },
      },
      {
        id: 'q1-2',
        type: 'literary',
        question: {
          es: 'En la frase «escuchar la voz del río», ¿qué figura literaria se utiliza?',
          hy: '«Escuchar la voz del río» (գետի ձայնը լսել) արտահայտության մեջ ի՞նչ գեղարվեստական հնարք է կիրառված։',
        },
        options: [
          {
            id: 'A',
            text: { es: 'A. Personificación (atribuye voz humana a un elemento natural inanimado).', hy: 'A. Անձնավորում (մարդկային ձայն է վերագրում անշունչ բնության տարրին)։' },
          },
          {
            id: 'B',
            text: { es: 'B. Hipérbaton.', hy: 'B. Հիպերբատոն։' },
          },
          {
            id: 'C',
            text: { es: 'C. Pleonasmo.', hy: 'C. Պլեոնազմ։' },
          },
          {
            id: 'D',
            text: { es: 'D. Onomatopeya pura.', hy: 'D. Զուտ ձայնանմանություն։' },
          },
        ],
        correctAnswer: 'A',
        explanation: {
          es: 'Se personifica al río dándole una cualidad humana (tener "voz" y comunicarse).',
          hy: 'Գետն անձնավորվում է՝ նրան մարդկային հատկանիշ շնորհելով («ձայն» ունենալ և հաղորդակցվել)։',
        },
      },
    ],
  },
  {
    id: 'lectura-2-leyenda',
    title: {
      es: 'La cueva de la mora encantada',
      hy: 'Կախարդված մավրուհու քարանձավը',
    },
    genre: {
      es: 'Leyenda tradicional hispánica',
      hy: 'Իսպանական ավանդական լեգենդ',
    },
    typeTag: 'leyenda',
    introduction: {
      es: 'Las leyendas combinan un escenario real de la geografía española con mitos medievales y apariciones misteriosas en noches de luna llena.',
      hy: 'Լեգենդները միախառնում են իսպանական աշխարհագրության իրական վայրերը միջնադարյան առասպելների և լիալուսնի գիշերների խորհրդավոր տեսիլքների հետ։',
    },
    paragraphs: [
      {
        es: 'Cerca de las ruinas del antiguo castillo de piedra que corona la colina, se abre la boca oscura de una profunda caverna. Los ancianos del pueblo aseguran que allí habita una hermosa doncella mora que quedó atrapada por un hechizo milenario durante las guerras del Medievo.',
        hy: 'Բլուրը պսակող հին քարե ամրոցի ավերակների մոտ բացվում է խորը քարանձավի մութ բերանը։ Գյուղի ծերերը վստահեցնում են, որ այնտեղ ապրում է մի գեղեցկուհի մավրուհի օրիորդ, որը միջնադարյան պատերազմների ժամանակ թակարդվել է հազարամյա կախարդանքով։',
      },
      {
        es: 'Solo en la noche mágica de San Juan, cuando la luna plateada brilla en el cenit, la joven sale a la entrada de la cueva. Lleva un peine de oro brillante con el que desenreda sus largos cabellos de ébano mientras entona una melodía tan dulce que hace llorar a los sauces.',
        hy: 'Միայն Սուրբ Հովհաննեսի (San Juan) մոգական գիշերը, երբ արծաթյա լուսինը փայլում է զենիթում, երիտասարդ աղջիկը դուրս է գալիս քարանձավի մուտքի մոտ։ Նա բռնած ունի ոսկե փայլուն սանր, որով սանրում է իր սև սաթե երկար վարսերը՝ երգելով այնքան քաղցր մի մեղեդի, որ ստիպում է լաց լինել ուռենիներին։',
      },
      {
        es: 'Cuentan que si un caminante valiente logra mirarla a los ojos sin sentir temor y responde a su adivinanza secreta, el maleficio se romperá para siempre y ella compartirá los tesoros ocultos en las entrañas de la roca.',
        hy: 'Պատմում են, որ եթե մի խիզախ ճամփորդ կարողանա նայել նրա աչքերին առանց վախի և պատասխանի նրա գաղտնի հանելուկին, կախարդանքը կվերանա ընդմիշտ, իսկ նա կկիսի ժայռի ընդերքում թաքցված գանձերը։',
      },
    ],
    questions: [
      {
        id: 'q2-1',
        type: 'comprehension',
        question: {
          es: '¿En qué noche especial puede verse a la doncella según la leyenda?',
          hy: 'Ըստ լեգենդի՝ ո՞ր հատուկ գիշերն է հնարավոր տեսնել օրիորդին։',
        },
        options: [
          {
            id: 'A',
            text: { es: 'A. En Nochebuena.', hy: 'A. Ճրագալույցի գիշերը։' },
          },
          {
            id: 'B',
            text: { es: 'B. En la noche de San Juan con luna plateada.', hy: 'B. Սուրբ Հովհաննեսի (San Juan) գիշերը՝ արծաթյա լուսնի տակ։' },
          },
          {
            id: 'C',
            text: { es: 'C. Cualquier tarde soleada.', hy: 'C. Ցանկացած արևոտ կեսօրի։' },
          },
          {
            id: 'D',
            text: { es: 'D. El primer día de colegio.', hy: 'D. Դպրոցական առաջին օրը։' },
          },
        ],
        correctAnswer: 'B',
        explanation: {
          es: 'El texto indica expresamente: «Solo en la noche mágica de San Juan... sale a la entrada de la cueva».',
          hy: 'Տեքստում ուղղակի նշված է․ «Solo en la noche mágica de San Juan... sale a la entrada de la cueva»։',
        },
      },
      {
        id: 'q2-2',
        type: 'grammar',
        question: {
          es: 'En el sintagma «sus largos cabellos de ébano», ¿qué categoría gramatical es "LARGOS"?',
          hy: '«Sus largos cabellos de ébano» բառակապակցության մեջ ի՞նչ խոսքի մաս է «LARGOS» բառը։',
        },
        options: [
          {
            id: 'A',
            text: { es: 'A. Adjetivo calificativo en grado positivo.', hy: 'A. Որակական ածական դրական աստիճանում։' },
          },
          {
            id: 'B',
            text: { es: 'B. Adverbio de tiempo.', hy: 'B. Ժամանակի մակբայ։' },
          },
          {
            id: 'C',
            text: { es: 'C. Preposición simple.', hy: 'C. Պարզ նախդիր։' },
          },
          {
            id: 'D',
            text: { es: 'D. Pronombre personal.', hy: 'D. Անձնական դերանուն։' },
          },
        ],
        correctAnswer: 'A',
        explanation: {
          es: '"Largos" concuerda en género masculino y número plural con el sustantivo "cabellos", indicando una cualidad física.',
          hy: '«Largos» բառը համաձայնում է արական սեռով և հոգնակի թվով «cabellos» (վարսեր) գոյականի հետ՝ ցույց տալով ֆիզիկական հատկանիշ։',
        },
      },
    ],
  },
  {
    id: 'lectura-3-mito',
    title: {
      es: 'El vuelo de Ícaro y el sol',
      hy: 'Իկարոսի թռիչքը և արևը',
    },
    genre: {
      es: 'Mito clásico de la Antigüedad',
      hy: 'Անտիկ դասական առասպել',
    },
    typeTag: 'mito',
    introduction: {
      es: 'El mito de Dédalo e Ícaro advierte sobre los peligros de la imprudencia y la desobediencia juvenil frente a la sabiduría de los mayores.',
      hy: 'Դեդալոսի և Իկարոսի առասպելը նախազգուշացնում է անխոհեմության և ծնողների իմաստությանը չհնազանդվելու վտանգների մասին։',
    },
    paragraphs: [
      {
        es: 'Encerrados en la isla de Creta por el temible rey Minos, el sabio arquitecto Dédalo ideó una fuga imposible. Recogió miles de plumas de aves marinas y las unió con cera de abejas para fabricar dos pares de gigantescas alas para él y para su joven hijo Ícaro.',
        hy: 'Կրետե կղզում ահեղ Մինոս արքայի կողմից փակված լինելով՝ իմաստուն ճարտարապետ Դեդալոսը հնարեց մի անհավանական փախուստ։ Նա հավաքեց ծովային թռչունների հազարավոր փետուրներ և միացրեց դրանք մեղրամոմով՝ երկու զույգ հսկայական թևեր պատրաստելով իր և իր երիտասարդ որդի Իկարոսի համար։',
      },
      {
        es: 'Antes de elevarse hacia el cielo azul, Dédalo advirtió con gravedad a su hijo: «Escúchame con atención, Ícaro. No vueles demasiado bajo, pues la humedad del mar mojará tus alas y te arrastrará al abismo; ni vueles demasiado alto, porque el calor ardiente del sol derretirá la cera».',
        hy: 'Նախքան կապույտ երկինք բարձրանալը, Դեդալոսը լրջությամբ նախազգուշացրեց իր որդուն. «Ուշադրությա՛մբ լսիր ինձ, Իկարո՛ս։ Շատ ցածր մի՛ թռչիր, քանի որ ծովի խոնավությունը կթրջի թևերդ ու քեզ անդունդը կքաշի, և շատ բարձր էլ մի՛ թռչիր, որովհետև արևի կիզիչ ջերմությունը կհալեցնի մոմը»։',
      },
      {
        es: 'Al principio, Ícaro siguió a su padre con prudencia. Pero pronto, embriagado por la fascinante sensación de libertad y poder, olvidó los consejos paternos y batió sus alas con fuerza ascendiendo cada vez más cerca del brillante disco solar.',
        hy: 'Սկզբում Իկարոսը խոհեմությամբ հետևում էր հորը։ Սակայն շուտով, հարբած ազատության և ուժի հրաշալի զգացումից, նա մոռացավ հայրական խորհուրդները և ուժգնորեն թափահարեց թևերը՝ բարձրանալով ավելի ու ավելի մոտ փայլուն արեգակնային սկավառակին։',
      },
      {
        es: 'Los rayos dorados no tardaron en ablandar la cera. Las plumas comenzaron a desprenderse en el aire como copos de nieve blanca. Ícaro agitó desesperado sus brazos desnudos, pero el vacío ya no lo sostenía, y cayó vertiginosamente en las profundidades de las aguas marinas que hoy llevan su nombre.',
        hy: 'Ոսկեզօծ ճառագայթները շուտով փափկեցրին մոմը։ Փետուրները սկսեցին օդում պոկվել սպիտակ ձյան փաթիլների պես։ Իկարոսը հուսահատ թափահարեց իր մերկ բազուկները, սակայն դատարկությունն այլևս չէր պահում նրան, և նա գլխիվայր ընկավ ծովային ջրերի խորքերը, որոնք այսօր կրում են իր անունը։',
      },
    ],
    questions: [
      {
        id: 'q3-1',
        type: 'literary',
        question: {
          es: 'En la frase «Las plumas se desprendían como copos de nieve blanca», ¿qué recurso retórico aparece?',
          hy: '«Las plumas se desprendían como copos de nieve blanca» արտահայտության մեջ ի՞նչ ոճական հնարք կա։',
        },
        options: [
          {
            id: 'A',
            text: { es: 'A. Comparación o símil (contiene el nexo "como").', hy: 'A. Համեմատություն (símil)՝ ունի «como» (ինչպես) շաղկապը։' },
          },
          {
            id: 'B',
            text: { es: 'B. Metáfora pura.', hy: 'B. Մաքուր փոխաբերություն։' },
          },
          {
            id: 'C',
            text: { es: 'C. Onomatopeya.', hy: 'C. Ձայնանմանություն։' },
          },
          {
            id: 'D',
            text: { es: 'D. Polisíndeton.', hy: 'D. Բազմաշաղկապություն։' },
          },
        ],
        correctAnswer: 'A',
        explanation: {
          es: 'Es una comparación (símil) porque utiliza explícitamente el nexo comparativo "como" para relacionar plumas y copos de nieve.',
          hy: 'Համեմատություն (símil) է, որովհետև բացահայտ օգտագործում է «como» (ինչպես) շաղկապը՝ փետուրները ձյան փաթիլների հետ համեմատելու համար։',
        },
      },
    ],
  },
  {
    id: 'lectura-4-romance',
    title: {
      es: 'Romance del prisionero',
      hy: 'Բանտարկյալի ռոմանսը',
    },
    genre: {
      es: 'Romance lírico tradicional medieval',
      hy: 'Միջնադարյան ավանդական քնարական ռոմանս',
    },
    typeTag: 'romance',
    introduction: {
      es: 'Uno de los romances más hermosos y célebres de la lírica castellana. Muestra el anhelo desgarrador de libertad de un cautivo en plena primavera.',
      hy: 'Կաստիլիական քնարերգության ամենագեղեցիկ և հայտնի ռոմանսներից մեկը։ Ներկայացնում է բանտարկյալի ազատության տենչը գարնան ծաղկունքի օրերին։',
    },
    paragraphs: [
      {
        es: 'Que por mayo era, por mayo, / cuando hace la calor, / cuando los trigos encañan / y están los campos en flor, / cuando canta la calandria / y responde el ruiseñor, / cuando los enamorados / van a servir al amor.',
        hy: 'Մայիսն էր, մայիսը, / երբ տաքությունն է տիրում, / երբ ցորենն է հասկակալում / և դաշտերն են ծաղկում, / երբ երգում է արտույտը / և պատասխանում սոխակը, / երբ սիրահարները / գնում են սիրուն ծառայելու։',
      },
      {
        es: 'Sino yo, triste, cuitado, / que vivo en esta prisión, / que ni sé cuándo es de día / ni cuándo las noches son, / sino por una avecilla / que me cantaba al albor. / Matómela un ballestero; / ¡déle Dios mal galardón!',
        hy: 'Միայն ես՝ տխուրս, վշտահարս, / որ ապրում եմ այս բանտում, / որ չգիտեմ երբ է ցերեկը, / ոչ էլ երբ են գիշերները, / եթե ոչ մի փոքրիկ թռչնակի շնորհիվ, / որն ինձ համար երգում էր լուսաբացին։ / Սպանեց նրան մի աղեղնավոր․ / թո՛ղ Աստված նրան չար հատուցում տա՜։',
      },
    ],
    questions: [
      {
        id: 'q4-1',
        type: 'literary',
        question: {
          es: '¿Qué tipo de versos y rima estructuran este romance tradicional?',
          hy: 'Ինչպիսի՞ տողեր և հանգ են կառուցում այս ավանդական ռոմանսը։',
        },
        options: [
          {
            id: 'A',
            text: { es: 'A. Versos octosílabos (8) con rima asonante en versos pares.', hy: 'A. Ութվանկ (8) տողեր՝ զույգ տողերում ձայնավորական հանգով։' },
          },
          {
            id: 'B',
            text: { es: 'B. Versos de arte mayor con rima consonante.', hy: 'B. Arte mayor տողեր լիակատար հանգով։' },
          },
          {
            id: 'C',
            text: { es: 'C. Prosa libre sin métrica.', hy: 'C. Ազատ արձակ առանց տաղաչափության։' },
          },
          {
            id: 'D',
            text: { es: 'D. Pareados rimados en consonante.', hy: 'D. Լիակատար հանգով երկտողեր։' },
          },
        ],
        correctAnswer: 'A',
        explanation: {
          es: 'Es el molde clásico del romance español: versos de ocho sílabas (arte menor) con rima asonante en los versos pares (calor, flor, ruiseñor, amor, prisión, son, albor, galardón) e impares sueltos.',
          hy: 'Իսպանական ռոմանսի դասական կաղապարն է՝ ութվանկ տողեր (arte menor) զույգ տողերի ձայնավորական հանգով (o-o) և ազատ կենտ տողերով։',
        },
      },
    ],
  },
  {
    id: 'lectura-5-descriptivo',
    title: {
      es: 'El bosque encantado en otoño',
      hy: 'Կախարդական անտառն աշնանը',
    },
    genre: {
      es: 'Texto literario descriptivo',
      hy: 'Նկարագրական գեղարվեստական տեքստ',
    },
    typeTag: 'descriptivo',
    introduction: {
      es: 'Una descripción pictórica que explora las sensaciones visuales, olfativas y sonoras de la naturaleza otoñal.',
      hy: 'Գեղանկարչական նկարագրություն, որն ուսումնասիրում է աշնանային բնության տեսողական, հոտառական և ձայնային զգացողությունները։',
    },
    paragraphs: [
      {
        es: 'El otoño había vestido al viejo bosque con una túnica de ocres, dorados y cobres encendidos. Una alfombra crujiente de hojas secas cubría los senderos de musgo húmedo, despidiendo un aroma terroso a madera mojada y a setas recién nacidas tras las lluvias de octubre.',
        hy: 'Աշունը հին անտառին հագցրել էր դեղնաշագանակագույն, ոսկեզօծ և վառ պղնձագույն թիկնոց։ Չոր տերևների խշխշան գորգը ծածկել էր խոնավ մամուռի արահետները՝ տարածելով հողային բույր՝ թաց փայտի և հոկտեմբերյան անձրևներից հետո նոր ծնված սնկերի։',
      },
      {
        es: 'El viento fresco silbaba suavemente entre las ramas desnudas de los robles centenarios, que alzaban sus brazos hacia un cielo plomizo. A lo lejos, el murmullo cristalino del arroyo cantaba una nana solitaria para adormecer a las ardillas en sus refugios.',
        hy: 'Թարմ քամին մեղմորեն սուլում էր դարավոր կաղնիների մերկ ճյուղերի միջև, որոնք իրենց բազուկներն էին բարձրացնում դեպի կապարագույն երկինք։ Հեռվում առվակի բյուրեղյա մրմունջը միայնակ օրորոցային էր երգում՝ սկյուռներին իրենց թաքստոցներում քնեցնելու համար։',
      },
    ],
    questions: [
      {
        id: 'q5-1',
        type: 'vocabulary',
        question: {
          es: '¿Qué significa la expresión «cielo plomizo» en el segundo párrafo?',
          hy: 'Ի՞նչ է նշանակում «cielo plomizo» արտահայտությունը երկրորդ պարբերությունում։',
        },
        options: [
          {
            id: 'A',
            text: { es: 'A. Cielo gris oscuro, denso como el plomo, que presagia lluvia o frío.', hy: 'A. Մուգ մոխրագույն, կապարի պես ծանր երկինք, որն անձրև կամ ցուրտ է գուժում։' },
          },
          {
            id: 'B',
            text: { es: 'B. Cielo azul despejado sin nubes.', hy: 'B. Կապույտ պարզ երկինք առանց ամպերի։' },
          },
          {
            id: 'C',
            text: { es: 'C. Noche estrellada.', hy: 'C. Աստղազարդ գիշեր։' },
          },
          {
            id: 'D',
            text: { es: 'D. Amanecer luminoso.', hy: 'D. Լուսավոր արշալույս։' },
          },
        ],
        correctAnswer: 'A',
        explanation: {
          es: '«Plomizo» alude al color y peso del plomo: un tono gris ceniciento característico de los días nublados de invierno u otoño.',
          hy: '«Plomizo» բառը վերաբերում է կապարի գույնին և ծանրությանը․ մոխրագույն երանգ, որը բնորոշ է աշնանային կամ ձմեռային ամպամած օրերին։',
        },
      },
    ],
  },
  {
    id: 'lectura-6-informativo',
    title: {
      es: 'La invención de la imprenta y el libro',
      hy: 'Տպագրության գյուտը և գիրքը',
    },
    genre: {
      es: 'Texto informativo divulgativo',
      hy: 'Հանրամատչելի տեղեկատվական տեքստ',
    },
    typeTag: 'informativo',
    introduction: {
      es: 'Un repaso histórico sobre cómo la imprenta revolucionó la difusión del conocimiento y permitió el paso del manuscrito medieval al libro moderno.',
      hy: 'Պատմական ակնարկ այն մասին, թե ինչպես տպագրությունը հեղաշրջեց գիտելիքի տարածումը և միջնադարյան ձեռագրից ճանապարհ հարթեց դեպի ժամանակակից գիրքը։',
    },
    paragraphs: [
      {
        es: 'Hasta mediados del siglo XV, los libros en Europa se copiaban pacientemente a mano uno por uno. Esta laboriosa tarea la realizaban principalmente los monjes copistas en los monasterios medievales, tardando meses e incluso años en finalizar un único ejemplar sobre pergamino de piel.',
        hy: 'Մինչև 15-րդ դարի կեսերը Եվրոպայում գրքերը համբերատարությամբ արտագրվում էին ձեռքով՝ մեկ առ մեկ։ Այս աշխատատար գործը հիմնականում կատարում էին գրիչ վանականները միջնադարյան վանքերում՝ ամիսներ կամ նույնիսկ տարիներ ծախսելով կաշվե մագաղաթի վրա մեկ օրինակ ավարտելու համար։',
      },
      {
        es: 'Hacia 1440, el orfebre alemán Johannes Gutenberg perfeccionó un sistema revolucionario: la imprenta de tipos móviles metálicos. A partir de ese momento histórico, los textos pudieron reproducirse con asombrosa rapidez en papel de celulosa, democratizando el acceso a la lectura y a la literatura culta en todo el continente.',
        hy: 'Մոտ 1440 թվականին գերմանացի ոսկերիչ Յոհան Գուտենբերգը կատարելագործեց մի հեղափոխական համակարգ՝ շարժական մետաղական տառերով տպագրահաստոցը։ Այդ պատմական պահից սկսած տեքստերը կարող էին վերարտադրվել զարմանալի արագությամբ թղթի վրա՝ ընթերցանության և հեղինակային գրականության հասանելիությունը հանրայնացնելով ամբողջ մայրցամաքում։',
      },
    ],
    questions: [
      {
        id: 'q6-1',
        type: 'comprehension',
        question: {
          es: '¿Cuál fue la gran consecuencia social del invento de Gutenberg según el texto?',
          hy: 'Ըստ տեքստի՝ ո՞րն էր Գուտենբերգի գյուտի մեծ սոցիալական հետևանքը։',
        },
        options: [
          {
            id: 'A',
            text: { es: 'A. Democratizó el acceso a la lectura y abarató la difusión de las obras cultas.', hy: 'A. Հանրայնացրեց ընթերցանությունը և մատչելի դարձրեց հեղինակային գործերի տարածումը։' },
          },
          {
            id: 'B',
            text: { es: 'B. Hizo desaparecer por completo las escuelas.', hy: 'B. Լիովին վերացրեց դպրոցները։' },
          },
          {
            id: 'C',
            text: { es: 'C. Prohibió la literatura popular oral.', hy: 'C. Արգելեց ժողովրդական բանավոր գրականությունը։' },
          },
          {
            id: 'D',
            text: { es: 'D. Obligó a escribir solo en verso.', hy: 'D. Ստիպեց գրել միայն չափածո։' },
          },
        ],
        correctAnswer: 'A',
        explanation: {
          es: 'La imprenta multiplicó la producción de libros, abaratando su coste y permitiendo que la cultura escrita llegara a muchas más personas.',
          hy: 'Տպագրությունը բազմապատկեց գրքերի արտադրությունը՝ էժանացնելով դրանց արժեքը և թույլ տալով, որ գրավոր մշակույթը հասնի շատ ավելի շատ մարդկանց։',
        },
      },
    ],
  },
  {
    id: 'lectura-7-poetico',
    title: {
      es: 'A un olmo seco (Antonio Machado)',
      hy: 'Չորացած թեղուն (Անտոնիո Մաչադո)',
    },
    genre: {
      es: 'Texto lírico poético',
      hy: 'Քնարական բանաստեղծական տեքստ',
    },
    typeTag: 'poetico',
    introduction: {
      es: 'Un célebre poema de Antonio Machado donde un árbol carcomido que brota una pequeña hoja verde simboliza la esperanza del renacer.',
      hy: 'Անտոնիո Մաչադոյի հայտնի բանաստեղծությունը, որտեղ մի փտած ծառ, որը կանաչ փոքրիկ տերև է տալիս, խորհրդանշում է վերածննդի հույսը։',
    },
    paragraphs: [
      {
        es: 'Al olmo viejo, hendido por el rayo / y en su mitad podrido, / con las lluvias de abril y el sol de mayo, / algunas hojas verdes le han salido.',
        hy: 'Ծեր թեղուն, շանթահարված կայծակից / և իր կեսով փտած, / ապրիլյան անձրևներով և մայիսյան արևով, / մի քանի կանաչ տերևներ են դուրս եկել։',
      },
      {
        es: '¡El olmo centenario en la colina / que lame el Duero! Un musgo amarillento / mancha la corteza blanquecina / al tronco carcomido y polvoriento.',
        hy: 'Դարավոր թեղին բլրի վրա, / որին լիզում է Դուերո գետը։ Դեղնավուն մի մամուռ / բծավորում է սպիտակավուն կեղևը / որդնակեր և փոշոտ բնի։',
      },
      {
        es: 'Mi corazón espera / también, hacia la luz y hacia la vida, / otro milagro de la primavera.',
        hy: 'Իմ սիրտը սպասում է / նույնպես, դեպի լույսը և դեպի կյանքը, / գարնան մեկ այլ հրաշքի։',
      },
    ],
    questions: [
      {
        id: 'q7-1',
        type: 'author_intent',
        question: {
          es: '¿Qué simbolizan esas «hojas verdes» que brotan en el árbol podrido?',
          hy: 'Ի՞նչ են խորհրդանշում փտած ծառի վրա ծլած այդ «կանաչ տերևները»։',
        },
        options: [
          {
            id: 'A',
            text: { es: 'A. La esperanza de recuperación y el renacer de la vida a pesar del dolor.', hy: 'A. Վերականգնման հույսը և կյանքի վերածնունդը՝ չնայած ցավին։' },
          },
          {
            id: 'B',
            text: { es: 'B. Que el árbol está listo para ser talado.', hy: 'B. Որ ծառը պատրաստ է կտրվելու։' },
          },
          {
            id: 'C',
            text: { es: 'C. El final del verano.', hy: 'C. Ամռան ավարտը։' },
          },
          {
            id: 'D',
            text: { es: 'D. Un error de la naturaleza.', hy: 'D. Բնության սխալը։' },
          },
        ],
        correctAnswer: 'A',
        explanation: {
          es: 'El poeta asocia las hojas verdes con la esperanza de su propio corazón («otro milagro de la primavera»).',
          hy: 'Բանաստեղծը կանաչ տերևները կապում է իր սեփական սրտի հույսի հետ («գարնան մեկ այլ հրաշք»)։',
        },
      },
    ],
  },
  {
    id: 'lectura-8-narracion',
    title: {
      es: 'El misterio de la llave oxidada',
      hy: 'Ժանգոտ բանալու առեղծվածը',
    },
    genre: {
      es: 'Narración de intriga juvenil',
      hy: 'Պատանեկան արկածային առեղծվածային պատմություն',
    },
    typeTag: 'narracion',
    introduction: {
      es: 'Dos amigos de 1.º de ESO descubren un objeto insólito en el desván del colegio durante una tarde de lluvia.',
      hy: '7-րդ դասարանի երկու ընկերներ անձրևոտ մի կեսօր դպրոցի ձեղնահարկում անսովոր մի առարկա են հայտնաբերում։',
    },
    paragraphs: [
      {
        es: 'La tarde de noviembre caía gris y fría sobre los tejados del instituto. Mateo y Sofía, buscando unos disfraces viejos para la obra de teatro escolar en el desván prohibido, tropezaron con un baúl cubierto por décadas de polvo y telarañas.',
        hy: 'Նոյեմբերյան կեսօրը մոխրագույն ու ցուրտ էր իջնում դպրոցի կտուրների վրա։ Մատեոն և Սոֆիան, որոնք դպրոցական թատերական ներկայացման համար հին տարազներ էին փնտրում արգելված ձեղնահարկում, պատահաբար սայթաքեցին մի սնդուկի վրա՝ ծածկված տասնամյակների փոշով և սարդոստայնով։',
      },
      {
        es: 'Al remover una pila de periódicos amarillentos de 1950, brilló un objeto metálico: una pesada llave de hierro forjado con un dragón grabado en la empuñadura. «Mira esto, Sofía —susurró Mateo con los ojos muy abiertos—. Esta llave no abre una puerta ordinaria; guarda un secreto olvidado».',
        hy: '1950 թվականի դեղնած թերթերի կույտը տեղաշարժելիս փայլեց մետաղական մի առարկա՝ կոփածո երկաթե ծանր մի բանալի՝ բռնակին փորագրված վիշապով։ «Նայի՛ր սրան, Սոֆիա, — շշնջաց Մատեոն լայն բացված աչքերով։ — Այս բանալին սովորական դուռ չի բացում, այն մի մոռացված գաղտնիք է պահպանում»։',
      },
    ],
    questions: [
      {
        id: 'q8-1',
        type: 'grammar',
        question: {
          es: 'En la frase «Mateo y Sofía tropezaron con un baúl», ¿cuál es el SUJETO de la oración?',
          hy: '«Mateo y Sofía tropezaron con un baúl» նախադասության մեջ ո՞րն է ԵՆԹԱԿԱՆ (Sujeto)։',
        },
        options: [
          {
            id: 'A',
            text: { es: 'A. Mateo y Sofía (sujeto compuesto).', hy: 'A. Mateo y Sofía (բարդ/բազմակի ենթակա)։' },
          },
          {
            id: 'B',
            text: { es: 'B. Un baúl.', hy: 'B. Un baúl (սնդուկ)։' },
          },
          {
            id: 'C',
            text: { es: 'C. Tropezaron.', hy: 'C. Tropezaron (սայթաքեցին)։' },
          },
          {
            id: 'D',
            text: { es: 'D. El instituto.', hy: 'D. El instituto (դպրոց)։' },
          },
        ],
        correctAnswer: 'A',
        explanation: {
          es: 'El sujeto realiza la acción verbal en plural "tropezaron": son Mateo y Sofía.',
          hy: 'Ենթական կատարում է «tropezaron» (սայթաքեցին) հոգնակի բայի գործողությունը՝ Մատեոն և Սոֆիան են։',
        },
      },
    ],
  },
  {
    id: 'lectura-9-literario',
    title: {
      es: 'Platero (Juan Ramón Jiménez)',
      hy: 'Պլատերոն (Խուան Ռամոն Խիմենես)',
    },
    genre: {
      es: 'Prosa poética universal',
      hy: 'Համաշխարհային բանաստեղծական արձակ',
    },
    typeTag: 'descriptivo',
    introduction: {
      es: 'El comienzo inolvidable de la obra maestra que mereció el Premio Nobel de Literatura. Un derroche de ternura lírica.',
      hy: 'Գրականության Նոբելյան մրցանակի արժանացած գլուխգործոցի անմոռանալի սկիզբը։ Քնարական քնքշանքի հրաշք։',
    },
    paragraphs: [
      {
        es: 'Platero es pequeño, peludo, suave; tan blando por fuera, que se diría todo de algodón, que no lleva huesos. Solo los espejos de azabache de sus ojos son duros cual dos escarabajos de cristal negro.',
        hy: 'Պլատերոն փոքրիկ է, մազոտ, փափուկ. դրսից այնքան փափլիկ, որ կարելի է ասել՝ ամբողջությամբ բամբակից է, առանց ոսկորների։ Միայն նրա աչքերի սաթե հայելիներն են կարծր՝ սև ապակե երկու բզեզների պես։',
      },
      {
        es: 'Lo dejo suelto, y se va al prado, y acaricia tibiamente con su hocico, rozándolas apenas, las florecillas rosas, celestes y gualdas... Lo llamo dulcemente: «¿Platero?», y viene a mí con un trotecillo alegre que parece que se ríe, en no sé qué cascabeleo ideal...',
        hy: 'Արձակ եմ թողնում նրան, և նա գնում է մարգագետին և իր դնչիկով գոլորեն փայփայում է՝ հազիվ հպվելով, վարդագույն, երկնագույն ու դեղին ծաղկիկները․․․ Քնքշորեն կանչում եմ նրան. «Պլատերո՞»․ և նա գալիս է ինձ մոտ ուրախ վարգով, որ կարծես ծիծաղում է չգիտես ինչ իդեալական զանգակների ղողանջով․․․',
      },
    ],
    questions: [
      {
        id: 'q9-1',
        type: 'literary',
        question: {
          es: 'En «Solo los espejos de azabache de sus ojos», ¿qué metáfora encontramos?',
          hy: '«Solo los espejos de azabache de sus ojos» արտահայտության մեջ ի՞նչ փոխաբերություն կա։',
        },
        options: [
          {
            id: 'A',
            text: { es: 'A. Metáfora preposicional donde los ojos (A) se identifican con espejos de azabache (B).', hy: 'A. Նախդիրային փոխաբերություն, որտեղ աչքերը (A) նույնացվում են սաթե հայելիների (B) հետ։' },
          },
          {
            id: 'B',
            text: { es: 'B. Aliteración de la letra "z".', hy: 'B. «Z» տառի ալիտերացիա։' },
          },
          {
            id: 'C',
            text: { es: 'C. Onomatopeya animal.', hy: 'C. Կենդանական ձայնանմանություն։' },
          },
          {
            id: 'D',
            text: { es: 'D. Hipérbaton violento.', hy: 'D. Ուժգին հիպերբատոն։' },
          },
        ],
        correctAnswer: 'A',
        explanation: {
          es: 'Es una metáfora con estructura "B de A": los espejos de azabache (B figurado) representan a sus ojos negros brillantes (A real).',
          hy: '«B de A» կառուցվածքով փոխաբերություն է․ սաթե հայելիները (փոխաբերական B) ներկայացնում են նրա սև փայլուն աչքերը (իրական A)։',
        },
      },
    ],
  },
  {
    id: 'lectura-10-reflexion',
    title: {
      es: 'El valor de las palabras en la convivencia',
      hy: 'Բառերի արժեքը համակեցության մեջ',
    },
    genre: {
      es: 'Texto de opinión y convivencia escolar',
      hy: 'Կարծիքի և դպրոցական համակեցության տեքստ',
    },
    typeTag: 'opinion',
    introduction: {
      es: 'Una reflexión sobre el poder del lenguaje: las palabras tienen la fuerza tanto de herir como de construir amistades duraderas.',
      hy: 'Մտորում լեզվի զորության մասին․ բառերն ունեն ինչպես վիրավորելու, այնպես էլ ամուր բարեկամություն կառուցելու ուժ։',
    },
    paragraphs: [
      {
        es: 'A menudo olvidamos que las palabras no son simples sonidos que se desvanecen en el aire. Las palabras tienen peso, filo y poder. Un insulto lanzado en el patio puede doler más profundamente que un golpe en el brazo, dejando cicatrices invisibles que tardan meses en sanar.',
        hy: 'Հաճախ մոռանում ենք, որ բառերը սովորական հնչյուններ չեն, որոնք ցնդում են օդում։ Բառերն ունեն կշիռ, սայր և զորություն։ Դպրոցի բակում նետված մի վիրավորանք կարող է ավելի խորը ցավեցնել, քան թևին հասցված հարվածը՝ թողնելով անտեսանելի սպիներ, որոնց ապաքինման համար ամիսներ են պահանջվում։',
      },
      {
        es: 'Por el contrario, una palabra amable en el instante oportuno, un sincero «¿cómo estás?» o un sencillo «yo te ayudo» tienen la magia de transformar el día más oscuro de un compañero. Aprender a comunicarnos con respeto y empatía es la lección más valiosa que podemos aprender en el instituto.',
        hy: 'Ընդհակառակը, հարմար պահին ասված մի բարի խոսք, անկեղծ «ինչպե՞ս ես»-ը կամ պարզ «ես քեզ կօգնեմ»-ը ունեն ընկերոջ ամենամութ օրը փոխակերպելու կախարդանքը։ Հարգանքով ու կարեկցանքով հաղորդակցվել սովորելը ամենաարժեքավոր դասն է, որ կարող ենք քաղել դպրոցում։',
      },
    ],
    questions: [
      {
        id: 'q10-1',
        type: 'author_intent',
        question: {
          es: '¿Cuál es la intención principal del autor al escribir este texto?',
          hy: 'Ո՞րն է հեղինակի հիմնական նպատակն այս տեքստը գրելիս։',
        },
        options: [
          {
            id: 'A',
            text: { es: 'A. Concienciar sobre el impacto emocional de las palabras y promover el respeto mutuo.', hy: 'A. Գիտակցել տալ բառերի հուզական ազդեցությունը և խթանել փոխադարձ հարգանքը։' },
          },
          {
            id: 'B',
            text: { es: 'B. Enseñar a construir frases complejas con subjuntivo.', hy: 'B. Սովորեցնել subjuntivo-ով բարդ նախադասություններ կազմել։' },
          },
          {
            id: 'C',
            text: { es: 'C. Criticar los patios escolares.', hy: 'C. Քննադատել դպրոցական բակերը։' },
          },
          {
            id: 'D',
            text: { es: 'D. Describir la arquitectura del instituto.', hy: 'D. Նկարագրել դպրոցի ճարտարապետությունը։' },
          },
        ],
        correctAnswer: 'A',
        explanation: {
          es: 'El autor defiende el uso constructivo y empático del lenguaje para evitar el acoso y fortalecer la convivencia.',
          hy: 'Հեղինակը պաշտպանում է լեզվի կառուցողական և կարեկից կիրառումը՝ բուլինգից խուսափելու և համակեցությունն ամրապնդելու համար։',
        },
      },
    ],
  },
];
