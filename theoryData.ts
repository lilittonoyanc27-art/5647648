import { BloqueInfo } from './types.ts';

export const THEORY_BLOCKS: BloqueInfo[] = [
  {
    id: 'bloque-1',
    number: 1,
    title: {
      es: 'Bloque 1: El Lenguaje Literario',
      hy: 'Թեմա 1․ Գրական լեզուն',
    },
    shortDesc: {
      es: 'Características del texto literario, prosa, verso, ritmo, rima y métrica.',
      hy: 'Գրական տեքստի առանձնահատկությունները, արձակ, չափածո, ռիթմ, հանգ և տաղաչափություն։',
    },
    icon: 'Feather',
    sections: [
      {
        id: 'lenguaje-literario-def',
        blockId: 'bloque-1',
        title: {
          es: 'El lenguaje literario y la función estética',
          hy: 'Գրական լեզուն և գեղագիտական գործառույթը',
        },
        badge: {
          es: 'Concepto clave',
          hy: 'Հիմնական հասկացություն',
        },
        definition: {
          es: 'El lenguaje literario es una forma especial de comunicación en la que el autor utiliza las palabras no solo para transmitir información, sino para crear belleza, despertar emociones y provocar el disfrute estético del lector.',
          hy: 'Գրական լեզուն հաղորդակցման յուրահատուկ ձև է, որտեղ հեղինակը բառերն օգտագործում է ոչ միայն տեղեկություն փոխանցելու, այլև գեղեցկություն ստեղծելու, հույզեր արթնացնելու և ընթերցողի մեջ գեղագիտական հաճույք առաջացնելու համար։',
        },
        explanation: {
          es: 'A diferencia de la lengua cotidiana que empleamos para hablar con amigos o comprar el pan, el lenguaje literario busca la originalidad, el ritmo y la sorpresa. En la literatura predomina la función poética o estética del lenguaje: importa tanto lo que se dice como la forma artística en que se dice.',
          hy: 'Ի տարբերություն առօրյա խոսքի, որն օգտագործում ենք ընկերների հետ զրուցելիս կամ գնումներ կատարելիս, գրական լեզուն ձգտում է ինքնատիպության, ռիթմի և զարմանքի։ Գրականության մեջ գերակշռում է լեզվի բանաստեղծական (գեղագիտական) գործառույթը․ կարևոր է ոչ միայն այն, թե ինչ է ասվում, այլև այն գեղարվեստական ձևը, որով դա ասվում է։',
        },
        rules: [
          {
            title: {
              es: 'Voluntad de estilo y función poética',
              hy: 'Ոճական ձգտում և գեղարվեստական գործառույթ',
            },
            description: {
              es: 'El autor elige cuidadosamente el léxico, la musicalidad y las figuras literarias para desviar el lenguaje de su uso común.',
              hy: 'Հեղինակը խնամքով ընտրում է բառապաշարը, երաժշտականությունը և արտահայտչամիջոցները՝ լեզուն սովորական կիրառությունից վեր բարձրացնելու համար։',
            },
          },
          {
            title: {
              es: 'Connotación y polisemia',
              hy: 'Ենթատեքստային իմաստ (կոնոտացիա) և բազմիմաստություն',
            },
            description: {
              es: 'Las palabras en la literatura sugieren sentimientos, sensaciones y múltiples significados subjetivos.',
              hy: 'Գրականության մեջ բառերը հուշում են զգացմունքներ, ապրումներ և բազմաթիվ սուբյեկտիվ իմաստներ։',
            },
          },
          {
            title: {
              es: 'Ficción y verosimilitud',
              hy: 'Հորինվածք և հավաստիություն (իրականանմանություն)',
            },
            description: {
              es: 'Crea mundos imaginarios que el lector acepta como verdaderos dentro de la obra literaria.',
              hy: 'Ստեղծում է երևակայական աշխարհներ, որոնք ընթերցողն ընդունում է որպես ճշմարտություն գեղարվեստական գործի շրջանակներում։',
            },
          },
        ],
        comparisons: [
          {
            title: {
              es: 'Lenguaje Cotidiano frente a Lenguaje Literario',
              hy: 'Առօրյա լեզուն ընդդեմ գրական լեզվի',
            },
            itemA: { es: 'Lenguaje Cotidiano', hy: 'Առօրյա խոսք' },
            itemB: { es: 'Lenguaje Literario', hy: 'Գրական լեզու' },
            differences: [
              {
                aspect: { es: 'Finalidad', hy: 'Նպատակ' },
                valA: { es: 'Práctica: informar con rapidez y claridad.', hy: 'Գործնական․ արագ և հստակ տեղեկացնել։' },
                valB: { es: 'Estética: emocionar y crear belleza.', hy: 'Գեղագիտական․ հուզել և ստեղծել գեղեցկություն։' },
              },
              {
                aspect: { es: 'Significado', hy: 'Իմաստ' },
                valA: { es: 'Denotativo (significado literal del diccionario).', hy: 'Ուղիղ (բառարանային բառացի իմաստ)։' },
                valB: { es: 'Connotativo (significados simbólicos y sugeridos).', hy: 'Փոխաբերական, խորհրդանշական, զգացմունքային։' },
              },
              {
                aspect: { es: 'Función dominante', hy: 'Գերիշխող գործառույթ' },
                valA: { es: 'Referencial o apelativa.', hy: 'Հաղորդակցական կամ կոչական։' },
                valB: { es: 'Poética o estética.', hy: 'Բանաստեղծական կամ գեղագիտական։' },
              },
              {
                aspect: { es: 'Estructura', hy: 'Կառուցվածք' },
                valA: { es: 'Espontánea, a veces con repeticiones o frases hechas.', hy: 'Ինքնաբուխ, երբեմն կրկնություններով ու պատրաստի կաղապարներով։' },
                valB: { es: 'Elaborada, rítmica y con recursos retóricos.', hy: 'Մշակված, ռիթմիկ և հռետորական հնարքներով հարուստ։' },
              },
            ],
          },
        ],
        examples: [
          {
            es: 'Cotidiano: Hoy hace mucho calor en la calle.',
            hy: 'Առօրյա․ Այսօր դրսում շատ շոգ է։',
            noteEs: 'Mensaje directo y puramente informativo.',
            noteHy: 'Ուղիղ և զուտ տեղեկատվական հաղորդում։',
          },
          {
            es: 'Literario: El sol derramaba su oro ardiente sobre el asfalto dormido.',
            hy: 'Գրական․ Արևն իր այրող ոսկին էր հեղում քնած ասֆալտի վրա։',
            noteEs: 'Uso de metáforas ("oro ardiente") y personificación ("dormido").',
            noteHy: 'Փոխաբերություն («այրող ոսկի») և անձնավորում («քնած»)։',
          },
          {
            es: 'Cotidiano: Me voy a dormir porque estoy cansado.',
            hy: 'Առօրյա․ Գնում եմ քնելու, որովհետև հոգնած եմ։',
            noteEs: 'Expresión habitual sin adorno.',
            noteHy: 'Սովորական արտահայտություն առանց զարդարանքի։',
          },
          {
            es: 'Literario: El sueño cerró mis párpados con alas de sombra y silencio.',
            hy: 'Գրական․ Քունը փակեց իմ կոպերը ստվերի ու լռության թևերով։',
            noteEs: 'Lenguaje poético y evocador.',
            noteHy: 'Բանաստեղծական և պատկերավոր լեզու։',
          },
          {
            es: 'Cotidiano: El mar tiene olas grandes y hace ruido.',
            hy: 'Առօրյա․ Ծովը մեծ ալիքներ ունի և աղմկում է։',
            noteEs: 'Descripción objetiva.',
            noteHy: 'Օբյեկտիվ նկարագրություն։',
          },
          {
            es: 'Literario: Bramaba el mar con su garganta de espuma y cólera.',
            hy: 'Գրական․ Մռնչում էր ծովն իր փրփուրի և զայրույթի կոկորդով։',
            noteEs: 'Personificación y fuerza expresiva.',
            noteHy: 'Անձնավորում և արտահայտչական ուժ։',
          },
        ],
        trickyCases: [
          {
            title: {
              es: '¿Un texto en prosa puede ser literatura?',
              hy: 'Կարո՞ղ է արձակ տեքստը լինել գրականություն։',
            },
            explanation: {
              es: '¡Sí! La literatura no solo se escribe en verso. Una novela como Don Quijote o un cuento de fantasía están en prosa y son grandes obras literarias por su riqueza y belleza.',
              hy: 'Այո՛։ Գրականությունը միայն չափածո չի գրվում։ «Դոն Կիխոտ» վեպը կամ ցանկացած հեքիաթ գրված են արձակ, սակայն հանդիսանում են մեծ գրական գործեր իրենց հարստության ու գեղեցկության շնորհիվ։',
            },
            example: {
              es: 'Platero y yo de Juan Ramón Jiménez está escrito en prosa, pero tiene un lenguaje profundamente poético (prosa poética).',
              hy: 'Խուան Ռամոն Խիմենեսի «Պլատերոն և ես» ստեղծագործությունը գրված է արձակ, սակայն ունի խորը բանաստեղծական լեզու (բանաստեղծական արձակ)։',
            },
          },
        ],
        frequentMistakes: [
          {
            mistake: {
              es: 'Creer que el lenguaje literario solo consiste en usar palabras difíciles o poco comunes.',
              hy: 'Կարծել, թե գրական լեզուն ընդամենը բարդ կամ հազվադեպ բառեր օգտագործելն է։',
            },
            correction: {
              es: 'La literatura no busca la dificultad, sino la emoción, el ritmo y el significado profundo mediante palabras sencillas combinadas de forma mágica.',
              hy: 'Գրականությունը չի ձգտում բարդության, այլ հույզերի, ռիթմի և խորը իմաստի՝ նույնիսկ պարզ բառերը կախարդական կերպով միահյուսելու միջոցով։',
            },
            explanation: {
              es: 'Muchos poemas célebres de Antonio Machado o Federico García Lorca utilizan palabras muy cotidianas, pero con un poder evocador inmenso.',
              hy: 'Անտոնիո Մաչադոյի կամ Ֆեդերիկո Գարսիա Լորկայի շատ հայտնի բանաստեղծություններ օգտագործում են շատ պարզ բառեր, սակայն հսկայական զգացմունքային ուժով։',
            },
          },
        ],
        detectionGuide: [
          {
            es: '1. Comprueba si el texto utiliza metáforas, comparaciones o personificaciones.',
            hy: '1. Ստուգիր՝ արդյոք տեքստում կա՞ն փոխաբերություններ, համեմատություններ կամ անձնավորումներ։',
          },
          {
            es: '2. Observa si hay un ritmo sonoro o una musicalidad intencionada al leer en voz alta.',
            hy: '2. Ուշադրություն դարձրու՝ բարձրաձայն կարդալիս զգացվո՞ւմ է մտածված ռիթմ կամ երաժշտականություն։',
          },
          {
            es: '3. Pregúntate si las palabras transmiten sentimientos además de datos objetivos.',
            hy: '3. Հարցրու ինքդ քեզ՝ արդյոք բառերը փաստերից բացի փոխանցո՞ւմ են զգացմունքներ։',
          },
        ],
        summary: [
          {
            es: 'El lenguaje literario busca la belleza (función poética), no solo la información.',
            hy: 'Գրական լեզուն ձգտում է գեղեցկության (բանաստեղծական գործառույթ), ոչ թե միայն տեղեկատվության։',
          },
          {
            es: 'Se apoya en la connotación, la imaginación y las figuras retóricas.',
            hy: 'Այն հենվում է ենթատեքստային իմաստների, երևակայության և ոճական հնարքների վրա։',
          },
        ],
      },
      {
        id: 'verso-prosa-metrica',
        blockId: 'bloque-1',
        title: {
          es: 'El verso, la prosa, el ritmo, la rima y la métrica',
          hy: 'Չափածոն, արձակը, ռիթմը, հանգը և տաղաչափությունը',
        },
        badge: {
          es: 'Formas de expresión',
          hy: 'Արտահայտման ձևեր',
        },
        definition: {
          es: 'La prosa es la forma natural de escribir que ocupa todo el renglón sin ajustarse a una medida fija ni a una rima, mientras que el verso es cada una de las líneas cortas de un poema sujetas a un ritmo melódico, a una medida silábica y habitualmente a una rima.',
          hy: 'Արձակը գրելու բնական ձևն է, որը զբաղեցնում է ամբողջ տողը՝ առանց հաստատուն չափի կամ հանգի ենթարկվելու, մինչդեռ չափածո տողը (verso) բանաստեղծության կարճ տողերից յուրաքանչյուրն է, որը ենթարկվում է երաժշտական ռիթմի, վանկերի հաշվարկի և սովորաբար հանգի։',
        },
        explanation: {
          es: 'En el verso, el ritmo se consigue mediante la repetición periódica de acentos, la pausa final de cada verso, el cómputo silábico (métrica) y la rima. En la métrica española, la sinalefa une la vocal final de una palabra con la inicial de la siguiente en una sola sílaba.',
          hy: 'Չափածոյում ռիթմը ձեռք է բերվում շեշտերի պարբերական կրկնությամբ, յուրաքանչյուր տողի վերջում դադարով, վանկերի հաշվարկով (տաղաչափություն) և հանգով։ Իսպանական տաղաչափության մեջ սինալեֆան (sinalefa) բառի վերջին ձայնավորը միացնում է հաջորդ բառի սկզբի ձայնավորին մեկ վանկի մեջ։',
        },
        classifications: [
          {
            name: { es: 'Rima consonante', hy: 'Լիակատար (բաղաձայնական) հանգ' },
            description: {
              es: 'Coinciden todos los sonidos (vocales y consonantes) a partir de la última vocal acentuada del verso.',
              hy: 'Համընկնում են բոլոր հնչյունները (ձայնավորներ և բաղաձայններ)՝ սկսած տողի վերջին շեշտված ձայնավորից։',
            },
            examples: [
              { es: 'cancIÓN / corazÓN', hy: 'երգ / սիրտ' },
              { es: 'estrELLA / bELLA', hy: 'աստղ / գեղեցիկ' },
            ],
            keyDetail: {
              es: 'Ejemplo: "Quiero escribir y el corazón no pUEDE / y tanta pena en el dolor se quUEDE".',
              hy: 'Օրինակ՝ «Quiero escribir y el corazón no pUEDE / y tanta pena en el dolor se quUEDE» (UEDE համընկնում է ամբողջությամբ)։',
            },
          },
          {
            name: { es: 'Rima asonante', hy: 'Թերի (ձայնավորական) հանգ' },
            description: {
              es: 'Solo coinciden las vocales a partir de la última vocal acentuada; las consonantes son distintas.',
              hy: 'Համընկնում են միայն ձայնավորները՝ սկսած վերջին շեշտված ձայնավորից, իսկ բաղաձայնները տարբեր են։',
            },
            examples: [
              { es: 'bArcO / cArrO (coinciden a-o)', hy: 'նավակ / սայլ (համընկնում են a-o ձայնավորները)' },
              { es: 'sOmbrA / hOrA (coinciden o-a)', hy: 'ստվեր / ժամ (համընկնում են o-a ձայնավորները)' },
            ],
            keyDetail: {
              es: 'Típica de los romances españoles (versos pares con rima asonante, impares sueltos).',
              hy: 'Բնորոշ է իսպանական ռոմանսներին (զույգ տողերը՝ ձայնավորական հանգով, կենտերը՝ ազատ)։',
            },
          },
          {
            name: { es: 'Arte menor y Arte mayor', hy: 'Փոքր արվեստի և Մեծ արվեստի չափեր' },
            description: {
              es: 'Los versos de hasta 8 sílabas son de arte menor (a, b, c). Los de 9 sílabas o más son de arte mayor (A, B, C).',
              hy: 'Մինչև 8 վանկ ունեցող տողերը կոչվում են arte menor (փոքր արվեստ, նշվում են փոքրատառ a, b, c)։ 9 կամ ավելի վանկ ունեցողները՝ arte mayor (մեծ արվեստ, նշվում են մեծատառ A, B, C)։',
            },
            examples: [
              { es: 'Octosílabo (8 sílabas, arte menor)', hy: 'Ութվանկ տող (8 վանկ, arte menor)' },
              { es: 'Endecasílabo (11 sílabas, arte mayor)', hy: 'Տասնմեկվանկ տող (11 վանկ, arte mayor)' },
            ],
          },
        ],
        rules: [
          {
            title: {
              es: 'Regla de la última palabra del verso',
              hy: 'Տողի վերջին բառի կանոնը իսպանական տաղաչափության մեջ',
            },
            description: {
              es: 'Si el verso acaba en palabra aguda (+1 sílaba). Si acaba en llana (= no cambia). Si acaba en esdrújula (-1 sílaba).',
              hy: 'Եթե տողն ավարտվում է վերջին վանկի վրա շեշտ ունեցող բառով (aguda)՝ գումարվում է 1 վանկ (+1)։ Եթե նախավերջին վանկի վրա (llana)՝ մնում է նույնը։ Եթե երրորդ վանկի վրա վերջից (esdrújula)՝ հանվում է 1 վանկ (-1)։',
            },
          },
          {
            title: {
              es: 'La sinalefa',
              hy: 'Սինալեֆա',
            },
            description: {
              es: 'Unión métrica de la vocal final de una palabra con la vocal inicial de la siguiente en una sola sílaba.',
              hy: 'Բառի վերջին ձայնավորի և հաջորդ բառի սկզբնական ձայնավորի միաձուլումը մեկ տաղաչափական վանկի մեջ։',
            },
          },
        ],
        examples: [
          {
            es: 'En un lu-gar de la Man-cha... (Prosa continua)',
            hy: 'Լա Մանչայի մի բնակավայրում․․․ (Շարունակական արձակ)',
            noteEs: 'Ocupa el renglón completo, sin medida silábica predeterminada.',
            noteHy: 'Զբաղեցնում է ամբողջ տողը՝ առանց նախապես որոշված վանկերի հաշվարկի։',
          },
          {
            es: 'Verde que te quiero verde. / Verde viento. Verdes ramas. (Verso)',
            hy: 'Կանաչ, քեզ սիրում եմ կանաչ։ / Կանաչ քամի։ Կանաչ ճյուղեր։ (Չափածո)',
            noteEs: 'Versos octosílabos (8 sílabas) con ritmo acentual y rima asonante e-a.',
            noteHy: 'Ութվանկ տողեր (8 վանկ) շեշտադրական ռիթմով և e-a ձայնավորական հանգով։',
          },
          {
            es: 'Rima consonante: "Pastora de las nubes, / mi corazón te subes".',
            hy: 'Լիակատար հանգ․ «Pastora de las nubes, / mi corazón te subes» (-ubes / -ubes).',
            noteEs: 'Coinciden vocales y consonantes exactas a partir del acento.',
            noteHy: 'Համընկնում են բոլոր ձայնավորներն ու բաղաձայնները շեշտից սկսած։',
          },
          {
            es: 'Rima asonante: "A las cinco de la tarde. / Eran las cinco en punto de la tarde".',
            hy: 'Ձայնավորական հանգ․ «A las cinco de la tarde. / Eran las cinco en punto de la tarde».',
            noteEs: 'Coincidencia de vocales en posición final.',
            noteHy: 'Ձայնավորների համընկնում վերջնամասում։',
          },
        ],
        stepByStep: [
          {
            step: 1,
            title: { es: 'Dividir en sílabas gramaticales', hy: 'Բաժանել քերականական վանկերի' },
            action: { es: 'Separa cada palabra en sus sílabas naturales.', hy: 'Առանձնացրու յուրաքանչյուր բառն իր բնական վանկերի։' },
            example: { es: 'Me / gus / tas / cuan / do / ca / llas', hy: 'Me / gus / tas / cuan / do / ca / llas (7 sílabas)' },
          },
          {
            step: 2,
            title: { es: 'Aplicar la sinalefa', hy: 'Կիրառել սինալեֆան' },
            action: { es: 'Si una palabra termina en vocal y la siguiente empieza por vocal o "h", únelas en una sílaba.', hy: 'Եթե բառն ավարտվում է ձայնավորով, իսկ հաջորդը սկսվում է ձայնավորով կամ h-ով, միացրու դրանք մեկ վանկի մեջ։' },
            example: { es: 'Tu a-mor -> tua-mor (1 sílaba métrica)', hy: 'Tu a-mor -> tua-mor (մեկ տաղաչափական վանկ)' },
          },
          {
            step: 3,
            title: { es: 'Revisar la última palabra', hy: 'Ստուգել վերջին բառի շեշտը' },
            action: { es: 'Suma 1 si es aguda, resta 1 si es esdrújula, déjala igual si es llana.', hy: 'Գումարիր 1, եթե aguda է, հանիր 1, եթե esdrújula է, թող նույնը, եթե llana է։' },
            example: { es: 'y / to / do / mi / do / lor (6 + 1 aguda = 7 sílabas)', hy: 'y / to / do / mi / do / lor (6 + 1 aguda = 7 վանկ)' },
          },
        ],
        detectionGuide: [
          {
            es: 'Fíjate en la disposición en la página: el verso deja márgenes amplios a la derecha; la prosa llena el renglón.',
            hy: 'Ուշադրություն դարձրու էջի դասավորությանը․ չափածոն աջ կողմում լայն լուսանցքներ է թողնում, իսկ արձակը լցնում է ամբողջ տողը։',
          },
          {
            es: 'Para la rima, subraya desde la última vocal tónica: si todas las letras son iguales es consonante, si solo coinciden vocales es asonante.',
            hy: 'Հանգի համար ընդգծիր վերջին շեշտված ձայնավորից սկսած․ եթե բոլոր տառերը նույնն են՝ consonante է, եթե միայն ձայնավորները՝ asonante։',
          },
        ],
        summary: [
          {
            es: 'El verso tiene medida, ritmo y rima; la prosa fluye de renglón a renglón.',
            hy: 'Չափածոն ունի չափ, ռիթմ և հանգ, իսկ արձակը հոսում է տողից տող։',
          },
          {
            es: 'La rima consonante iguala vocales y consonantes; la asonante solo vocales.',
            hy: 'Լիակատար (consonante) հանգը նույնացնում է ձայնավորներն ու բաղաձայնները, իսկ թերի (asonante) հանգը՝ միայն ձայնավորները։',
          },
        ],
      },
    ],
  },
  {
    id: 'bloque-2',
    number: 2,
    title: {
      es: 'Bloque 2: Las Figuras Literarias (Recursos Retóricos)',
      hy: 'Թեմա 2․ Գեղարվեստական արտահայտչամիջոցներ (ոճական հնարքներ)',
    },
    shortDesc: {
      es: 'Recursos fónicos, morfosintácticos y semánticos: metáfora (A es B, B pura, B de A), anáfora, hipérbaton y más.',
      hy: 'Հնչյունային, ձևաբանական-շարահյուսական և իմաստային հնարքներ․ փոխաբերություն, անաֆորա, հիպերբատոն և այլն։',
    },
    icon: 'Sparkles',
    sections: [
      {
        id: 'figuras-fonicas',
        blockId: 'bloque-2',
        title: {
          es: 'Nivel Fónico: Aliteración, Onomatopeya, Paronomasia y Epanadiplosis',
          hy: 'Հնչյունային մակարդակ․ Ալիտերացիա, Ձայնանմանություն, Հարանունություն, Էպանադիպլոզիս',
        },
        badge: {
          es: 'Sonido y musicalidad',
          hy: 'Հնչյուն և երաժշտականություն',
        },
        definition: {
          es: 'Las figuras fónicas juegan con los sonidos de las palabras para sugerir sensaciones, imitar ruidos de la naturaleza o crear efectos rítmicos y musicales sorprendentes.',
          hy: 'Հնչյունային արտահայտչամիջոցները խաղում են բառերի հնչյունների հետ՝ զգացողություններ առաջացնելու, բնության ձայները նմանակելու կամ զարմանալի ռիթմիկ ու երաժշտական էֆեկտներ ստեղծելու համար։',
        },
        explanation: {
          es: 'En 1.º de ESO estudiamos cuatro figuras sonoras fundamentales: la aliteración (repite sonidos semejantes), la onomatopeya (imita ruidos reales), la paronomasia (usa palabras de sonido muy parecido pero significado distinto) y la epanadiplosis (comienza y termina un verso con la misma palabra exacta).',
          hy: '1.º ESO դասարանում մենք ուսումնասիրում ենք չորս հիմնարար հնչյունային հնարքներ․ ալիտերացիա (նման հնչյունների կրկնություն), ձայնանմանություն (իրական ձայների ընդօրինակում), հարանունություն/պարոնոմազիա (շատ նման հնչողությամբ, բայց տարբեր իմաստով բառեր) և էպանադիպլոզիս (տողը սկսվում և ավարտվում է ճիշտ նույն բառով)։',
        },
        classifications: [
          {
            name: { es: 'Aliteración', hy: 'Ալիտերացիա (հնչյունակրկնություն)' },
            description: {
              es: 'Repetición intencionada de uno o varios sonidos consonánticos para evocar una sensación física o auditiva.',
              hy: 'Մեկ կամ մի քանի բաղաձայն հնչյունների մտածված կրկնություն՝ ֆիզիկական կամ լսողական զգացողություն առաջացնելու համար։',
            },
            examples: [
              { es: 'En el silencio solo se escuchaba un susurro de abejas que sonaba. (Repetición de la "s")', hy: 'Լռության մեջ լսվում էր միայն հնչող մեղուների շշուկը։ («s» հնչյունի կրկնություն, որը հիշեցնում է մեղուների բզզոցը)' },
              { es: 'Con el ala aleve del leve abanico. (Repetición de "l")', hy: 'Թեթև հովհարի դավադիր թևով։ («l» հնչյունի մեղմ կրկնություն)' },
            ],
          },
          {
            name: { es: 'Onomatopeya', hy: 'Ձայնանմանություն' },
            description: {
              es: 'Palabra que reproduce o imita un sonido de la realidad, de la naturaleza, de animales o de objetos.',
              hy: 'Բառ, որն ընդօրինակում է իրականության, բնության, կենդանիների կամ առարկաների արձակած ձայները։',
            },
            examples: [
              { es: 'El tic-tac del reloj rompía el silencio de la noche.', hy: 'Ժամացույցի տիկ-տակը խախտում էր գիշերվա լռությունը։' },
              { es: '¡Kikirikí! Ya amanece en la granja.', hy: 'Ծուղրուղո՜ւ։ Արդեն լուսանում է ագարակում։' },
              { es: 'El chasquido del látigo asustó al caballo.', hy: 'Մտրակի ճայթյունը վախեցրեց ձիուն։' },
            ],
          },
          {
            name: { es: 'Paronomasia', hy: 'Հարանունություն (պարոնոմազիա)' },
            description: {
              es: 'Colocación cercana de palabras que tienen sonidos casi idénticos pero significados completamente diferentes.',
              hy: 'Հնչողությամբ գրեթե նույնական, բայց իմաստով միանգամայն տարբեր բառերի մերձավոր կիրառում։',
            },
            examples: [
              { es: 'Vendado que me has vendido. (Vendado / Vendido)', hy: 'Կապկպված, որ ինձ վաճառեցիր։ (Vendado՝ աչքերը կապած / Vendido՝ ծախված, դավաճանված)' },
              { es: 'Hombre de poca pena y de mucha pena. (Pena / Pena)', hy: 'Քիչ տանջանքի և մեծ ցավի մարդ։' },
              { es: 'Entre casar y cansar solo hay una letra.', hy: 'Ամուսնանալու (casar) և հոգնելու (cansar) միջև միայն մեկ տառի տարբերություն կա։' },
            ],
          },
          {
            name: { es: 'Epanadiplosis', hy: 'Էպանադիպլոզիս' },
            description: {
              es: 'Repetición de la misma palabra al principio y al final de un mismo verso o de una frase.',
              hy: 'Նույն բառի կրկնությունը նույն տողի կամ նախադասության սկզբում և վերջում։',
            },
            examples: [
              { es: 'Verde que te quiero verde.', hy: 'Կանաչ, քեզ սիրում եմ կանաչ։ (Սկսվում է "Verde" բառով և ավարտվում "verde" բառով)' },
              { es: 'Silencio, la noche está en silencio.', hy: 'Լռություն, գիշերը լռության մեջ է։' },
              { es: 'Hurra, cosmopolitas, hurra.', hy: 'Ուռռա՜, կոսմոպոլիտներ, ուռռա՜։' },
            ],
          },
        ],
        comparisons: [
          {
            title: {
              es: 'Aliteración vs Paronomasia vs Onomatopeya',
              hy: 'Ալիտերացիա ընդդեմ հարանունության և ձայնանմանության',
            },
            itemA: { es: 'Aliteración', hy: 'Ալիտերացիա' },
            itemB: { es: 'Paronomasia', hy: 'Հարանունություն' },
            differences: [
              {
                aspect: { es: '¿Qué se repite?', hy: 'Ի՞նչն է կրկնվում' },
                valA: { es: 'Un fonema o sonido (letras aisladas s, r, l).', hy: 'Հնչյուն (առանձին տառեր s, r, l)։' },
                valB: { es: 'Palabras completas parecidas (adopción / adaptación).', hy: 'Ամբողջական նման բառեր (օր․՝ adoptar / adaptar)։' },
              },
              {
                aspect: { es: 'Efecto', hy: 'Ազդեցություն' },
                valA: { es: 'Acústico y sensorial (silbido, viento, fluir).', hy: 'Լսողական և զգայական (սուլոց, քամի, հոսք)։' },
                valB: { es: 'Juego de ingenio con el significado.', hy: 'Մտքի և իմաստի խաղ։' },
              },
            ],
          },
        ],
        detectionGuide: [
          {
            es: 'Si oyes el sonido de un animal o cosa ("muuu", "pum", "crac"), es Onomatopeya.',
            hy: 'Եթե լսում ես կենդանու կամ իրի ձայնը («muuu», «pum», «crac»), դա Ձայնանմանություն է (Onomatopeya)։',
          },
          {
            es: 'Si una sola palabra abre y cierra el mismo verso, es Epanadiplosis.',
            hy: 'Եթե մեկ բառը բացում և փակում է նույն տողը, դա Էպանադիպլոզիս է (Epanadiplosis)։',
          },
          {
            es: 'Si se repite insistentemente una misma letra consonante para evocar un ruido, es Aliteración.',
            hy: 'Եթե համառորեն կրկնվում է նույն բաղաձայն տառը՝ ձայն հիշեցնելու համար, դա Ալիտերացիա է (Aliteración)։',
          },
        ],
        summary: [
          {
            es: 'Las figuras fónicas transforman el sonido en arte y sensación.',
            hy: 'Հնչյունային հնարքները հնչյունը վերածում են արվեստի և զգացողության։',
          },
        ],
        examples: [],
      },
      {
        id: 'figuras-morfosintacticas',
        blockId: 'bloque-2',
        title: {
          es: 'Nivel Morfosintáctico: Hipérbaton, Anáfora, Asíndeton, Polisíndeton, Enumeración y Pleonasmo',
          hy: 'Ձևաբանական-շարահյուսական մակարդակ․ Հիպերբատոն, Անաֆորա, Ասինդետոն, Բազմաշաղկապություն, Թվարկում, Պլեոնազմ',
        },
        badge: {
          es: 'Estructura gramatical',
          hy: 'Քերականական կառուցվածք',
        },
        definition: {
          es: 'Las figuras morfosintácticas alteran el orden habitual de las palabras en la oración, repiten términos o suprimen/añaden nexos para llamar la atención sobre el mensaje y crear ritmo.',
          hy: 'Ձևաբանական-շարահյուսական արտահայտչամիջոցները փոխում են նախադասության մեջ բառերի սովորական շարադասությունը, կրկնում են բառեր կամ հանում/ավելացնում են կապակցող շաղկապները՝ ուշադրություն գրավելու և ռիթմ ստեղծելու համար։',
        },
        explanation: {
          es: 'En español, el orden normal es Sujeto + Verbo + Complementos. Modificar este orden o encadenar elementos mediante conjunciones cambia por completo la expresividad del texto.',
          hy: 'Իսպաներենում սովորական կարգն է Ենթակա + Բայ (Ստորոգյալ) + Լրացումներ։ Այս կարգը փոխելը կամ տարրերը շաղկապներով շղթայելը լիովին փոխում է տեքստի արտահայտչականությունը։',
        },
        classifications: [
          {
            name: { es: 'Hipérbaton', hy: 'Հիպերբատոն (շրջադասություն)' },
            description: {
              es: 'Alteración del orden sintáctico habitual y lógico de las palabras en una oración.',
              hy: 'Նախադասության մեջ բառերի սովորական և տրամաբանական շարադասության խախտում։',
            },
            examples: [
              { es: 'Volverán las oscuras golondrinas en tu balcón sus nidos a colgar. (Bécquer)', hy: 'Կվերադառնան մութ ծիծեռնակները քո պատշգամբում իրենց բները կախելու։ (Նորմալ կարգը՝ Las oscuras golondrinas volverán a colgar sus nidos en tu balcón)' },
              { es: 'Del salón en el ángulo oscuro... (Normal: En el ángulo oscuro del salón)', hy: 'Դահլիճի մութ անկյունում․․․ (Բառացի՝ Դահլիճի անկյունում մութ․․․)' },
            ],
          },
          {
            name: { es: 'Anáfora', hy: 'Անաֆորա (տողասկզբի կրկնություն)' },
            description: {
              es: 'Repetición de una o varias palabras al COMIENZO de versos o frases sucesivas.',
              hy: 'Մեկ կամ մի քանի բառերի կրկնությունը հաջորդական տողերի կամ արտահայտությունների ՍԿԶԲՈՒՄ։',
            },
            examples: [
              { es: 'Temprano levantó la muerte el vuelo,\ntemprano madrugó la madrugada,\ntemprano estás rodando por el suelo.', hy: 'Վաղ բարձրացրեց մահը թռիչքը,\nվաղ արթնացավ լուսաբացը,\nվաղ ես գլորվում գետնին։ (Miguel Hernández - "Temprano" կրկնվում է տողասկզբում)' },
              { es: 'Pena con pena y pena desayuno,\npena es mi paz y pena mi batalla.', hy: 'Ցավով ու ցավով եմ նախաճաշում,\nցավն է իմ խաղաղությունը, ցավն իմ մարտը։' },
            ],
          },
          {
            name: { es: 'Asíndeton', hy: 'Ասինդետոն (անշաղկապություն)' },
            description: {
              es: 'Supresión intencionada de conjunciones (como "y", "e", "ni") para dar rapidez, dinamismo y agilidad.',
              hy: 'Շաղկապների (ինչպիսիք են «և», «ոչ») միտումնավոր բացթողում՝ խոսքին արագություն, դինամիզմ և ճկունություն հաղորդելու համար։',
            },
            examples: [
              { es: 'Llegué, vi, vencí. (Julio César)', hy: 'Եկա, տեսա, հաղթեցի։ (Առանց «և» շաղկապի, միայն ստորակետներով)' },
              { es: 'Rendí, rompí, derribé, / rajé, deshice, prendí...', hy: 'Հանձնվեցի, կոտրեցի, տապալեցի, / ճեղքեցի, քանդեցի, բռնեցի․․․' },
            ],
          },
          {
            name: { es: 'Polisíndeton', hy: 'Պոլիսինդետոն (բազմաշաղկապություն)' },
            description: {
              es: 'Repetición innecesaria de conjunciones para dar lentitud, solemnidad, peso y calma al texto.',
              hy: 'Շաղկապների ավելորդ կրկնություն՝ տեքստին դանդաղություն, հանդիսավորություն, ծանրակշռություն և հանգստություն հաղորդելու համար։',
            },
            examples: [
              { es: 'Y sueña, y ama, y canta, y vive, y llora.', hy: 'Ե՛վ երազում է, և՛ սիրում է, և՛ երգում է, և՛ ապրում է, և՛ լալիս է։' },
              { es: 'Ni los libros, ni los viajes, ni las horas me consuelan.', hy: 'Ո՛չ գրքերը, ո՛չ ճամփորդությունները, ո՛չ ժամերը ինձ չեն սփոփում։' },
            ],
          },
          {
            name: { es: 'Enumeración', hy: 'Թվարկում' },
            description: {
              es: 'Sucesión acumulativa de elementos lingüísticos (sustantivos, adjetivos, verbos) pertenecientes al mismo campo o idea.',
              hy: 'Միևնույն ոլորտին կամ մտքին պատկանող լեզվական տարրերի (գոյականներ, ածականներ, բայեր) կուտակային հաջորդականություն։',
            },
            examples: [
              { es: 'En polvo, en humo, en aire, en sombra, en nada.', hy: 'Փոշու, ծխի, օդի, ստվերի, ոչնչի մեջ։ (Góngora)' },
              { es: 'Había mesas, sillas, platos rotos y libros por el suelo.', hy: 'Սեղաններ, աթոռներ, կոտրված ափսեներ և գրքեր կային հատակին։' },
            ],
          },
          {
            name: { es: 'Pleonasmo', hy: 'Պլեոնազմ (ավելորդաբանություն)' },
            description: {
              es: 'Empleo de palabras redundantes o innecesarias para reforzar enfáticamente la expresividad.',
              hy: 'Ավելորդ կամ կրկնվող բառերի օգտագործում՝ արտահայտչականությունն ընդգծելու և ուժեղացնելու համար։',
            },
            examples: [
              { es: 'Lo vi con mis propios ojos.', hy: 'Իմ սեփական աչքերով տեսա։ (Եթե տեսել ես, բնականաբար աչքերով ես տեսել, սակայն շեշտում է ճշմարտացիությունը)' },
              { es: 'Lloraba amargamente por los ojos lágrimas vivas.', hy: 'Դառնորեն աչքերից կենդանի արցունքներ էր թափում։' },
              { es: 'Subir arriba / Salir afuera (en uso literario enfático).', hy: 'Վեր բարձրանալ / Դուրս ելնել (գրական ընդգծված կիրառության մեջ)։' },
            ],
          },
        ],
        comparisons: [
          {
            title: {
              es: 'Asíndeton frente a Polisíndeton',
              hy: 'Ասինդետոն ընդդեմ Բազմաշաղկապության',
            },
            itemA: { es: 'Asíndeton', hy: 'Ասինդետոն' },
            itemB: { es: 'Polisíndeton', hy: 'Բազմաշաղկապություն (Պոլիսինդետոն)' },
            differences: [
              {
                aspect: { es: 'Conjunciones', hy: 'Շաղկապներ' },
                valA: { es: 'Se eliminan completamente (solo comas).', hy: 'Լիովին հանվում են (միայն ստորակետներ)։' },
                valB: { es: 'Se repiten continuamente (y... y... y...).', hy: 'Անընդհատ կրկնվում են (և․․․ և․․․ և․․․)։' },
              },
              {
                aspect: { es: 'Ritmo conseguido', hy: 'Ստացվող ռիթմը' },
                valA: { es: 'Rápido, urgente, frenético.', hy: 'Արագ, հրատապ, բուռն։' },
                valB: { es: 'Lento, reflexivo, majestuoso.', hy: 'Դանդաղ, մտորող, վեհաշուք։' },
              },
            ],
          },
          {
            title: {
              es: 'Anáfora frente a Epanadiplosis',
              hy: 'Անաֆորա ընդդեմ Էպանադիպլոզիսի',
            },
            itemA: { es: 'Anáfora', hy: 'Անաֆորա' },
            itemB: { es: 'Epanadiplosis', hy: 'Էպանադիպլոզիս' },
            differences: [
              {
                aspect: { es: 'Posición de las palabras', hy: 'Բառերի դիրքը' },
                valA: { es: 'Solo al PRINCIPIO de versos distintos.', hy: 'Միայն տարբեր տողերի ՍԿԶԲՈՒՄ։' },
                valB: { es: 'Al PRINCIPIO y al FINAL del MISMO verso.', hy: 'ՆՈՒՅՆ տողի ՍԿԶԲՈՒՄ և ՎԵՐՋՈՒՄ։' },
              },
            ],
          },
        ],
        detectionGuide: [
          {
            es: '¿Ves muchas "y" repetidas entre cada palabra? -> Polisíndeton.',
            hy: 'Տեսնո՞ւմ ես բառերի միջև բազմիցս կրկնվող «y» շաղկապներ -> Polisíndeton (Բազմաշաղկապություն)։',
          },
          {
            es: '¿Solo hay comas y los verbos se suceden a toda prisa? -> Asíndeton.',
            hy: 'Միայն ստորակետնե՞ր են, և բայերը հաջորդո՞ւմ են մեծ արագությամբ -> Asíndeton (Ասինդետոն)։',
          },
          {
            es: '¿El orden parece "raro" o invertido como habla el maestro Yoda? -> Hipérbaton.',
            hy: 'Շարադասությունը տարօրինա՞կ է կամ շրջվա՞ծ -> Hipérbaton (Հիպերբատոն)։',
          },
        ],
        summary: [
          {
            es: 'Las figuras morfosintácticas modelan la arquitectura y el ritmo de la frase.',
            hy: 'Ձևաբանական-շարահյուսական հնարքները կերտում են նախադասության ճարտարապետությունն ու ռիթմը։',
          },
        ],
        examples: [],
      },
      {
        id: 'figuras-semanticas-metafora',
        blockId: 'bloque-2',
        title: {
          es: 'Nivel Semántico: La Metáfora y sus formas (A es B, B pura, B de A)',
          hy: 'Իմաստային մակարդակ․ Փոխաբերություն և նրա տեսակները (A es B, B, B de A)',
        },
        badge: {
          es: 'El rey de los recursos',
          hy: 'Արտահայտչամիջոցների թագավորը',
        },
        definition: {
          es: 'La metáfora es la identificación de dos elementos diferentes entre los cuales el autor descubre una relación de semejanza o analogía. Consta de dos términos: el Elemento Real (A) y el Elemento Figurado o Evocado (B).',
          hy: 'Փոխաբերությունը (metáfora) երկու տարբեր երևույթների նույնացումն է, որոնց միջև հեղինակը հայտնաբերում է նմանության կամ համաբանության կապ։ Այն բաղկացած է երկու անդամից՝ Իրական տարր (A) և Փոխաբերական/Պատկերավոր տարր (B)։',
        },
        explanation: {
          es: 'A diferencia de la comparación o símil (que usa la palabra "como": "Tus ojos son como esmeraldas"), la metáfora suprime el "como" y afirma directamente la identidad entre ambos términos, otorgando una fuerza poética mucho mayor.',
          hy: 'Ի տարբերություն համեմատության (símil), որն օգտագործում է «ինչպես/նման» («como») բառը (օր․՝ «Քո աչքերը զմրուխտի պես են»), փոխաբերությունը վերացնում է «ինչպես»-ը և ուղղակիորեն պնդում երկու տարրերի նույնությունը՝ հաղորդելով շատ ավելի մեծ բանաստեղծական ուժ։',
        },
        classifications: [
          {
            name: { es: 'Metáfora impura (A es B)', hy: 'Անմաքուր փոխաբերություն (A es B)' },
            description: {
              es: 'Aparecen explícitamente tanto el término real (A) como el término figurado (B) unidos por el verbo "ser".',
              hy: 'Նախադասության մեջ բացահայտ առկա են և՛ իրական տարրը (A), և՛ փոխաբերական տարրը (B)՝ միացված «լինել» (ser) բայով։',
            },
            examples: [
              { es: 'Tus dientes (A) son perlas (B).', hy: 'Քո ատամները (A) մարգարիտներ են (B)։' },
              { es: 'El tiempo (A) es oro (B).', hy: 'Ժամանակը (A) ոսկի է (B)։' },
              { es: 'La luna (A) es un queso blanco en el cielo (B).', hy: 'Լուսինը (A) սպիտակ պանիր է երկնքում (B)։' },
            ],
            keyDetail: {
              es: 'Fórmula básica y más sencilla de identificar en 1.º de ESO.',
              hy: 'Հիմնական բանաձևն է, որն ամենահեշտն է ճանաչվում 7-րդ դասարանում։',
            },
          },
          {
            name: { es: 'Metáfora pura (solo aparece B)', hy: 'Մաքուր փոխաբերություն (միայն B)' },
            description: {
              es: 'Desaparece el término real (A) y solo se nombra el término figurado (B). El lector debe deducir a qué realidad se refiere.',
              hy: 'Իրական տարրը (A) բացակայում է, և նշվում է միայն փոխաբերական պատկերը (B)։ Ընթերցողը պետք է կռահի, թե որ իրականության մասին է խոսքը։',
            },
            examples: [
              { es: 'Las perlas (B) de tu boca brillan al sonreír.', hy: 'Քո բերանի մարգարիտները (B) փայլում են ժպտալիս։ (A = ատամները չի նշվում, բայց հասկացվում է)' },
              { es: 'La linterna de la noche (B) alumbra el bosque.', hy: 'Գիշերվա լապտերը (B) լուսավորում է անտառը։ (A = լուսինը բացակայում է)' },
              { es: 'El manto blanco (B) cubría las montañas.', hy: 'Սպիտակ թիկնոցը (B) ծածկել էր լեռները։ (A = ձյունը)' },
            ],
          },
          {
            name: { es: 'Metáfora preposicional (B de A)', hy: 'Նախդիրային փոխաբերություն (B de A)' },
            description: {
              es: 'El término figurado (B) se une al término real (A) mediante la preposición "de".',
              hy: 'Փոխաբերական տարրը (B) միանում է իրական տարրին (A) «de» նախդիրի միջոցով։',
            },
            examples: [
              { es: 'El tambor (B) de su pecho (A) latía con fuerza.', hy: 'Նրա կրծքի (A) թմբուկը (B) ուժգին զարկում էր։ (Իրական սիրտը համեմատվում է թմբուկի հետ)' },
              { es: 'Las perlas (B) de sus dientes (A).', hy: 'Նրա ատամների (A) մարգարիտները (B)։' },
              { es: 'El río de plata (B) de tus cabellos (A).', hy: 'Քո մազերի (A) արծաթե գետը (B)։' },
            ],
          },
        ],
        comparisons: [
          {
            title: {
              es: 'Símil (Comparación) frente a Metáfora',
              hy: 'Համեմատություն ընդդեմ Փոխաբերության',
            },
            itemA: { es: 'Símil / Comparación', hy: 'Համեմատություն (Símil)' },
            itemB: { es: 'Metáfora', hy: 'Փոխաբերություն (Metáfora)' },
            differences: [
              {
                aspect: { es: 'Nexo comparativo ("como")', hy: 'Համեմատական կապ («ինչպես/նման»)' },
                valA: { es: 'Obligatorio: "Sus manos son como la seda".', hy: 'Պարտադիր է․ «Նրա ձեռքերը մետաքսի պես են»։' },
                valB: { es: 'No existe nexo: "Sus manos son seda" o "La seda de sus manos".', hy: 'Չկա շաղկապ․ «Նրա ձեռքերը մետաքս են» կամ «Նրա ձեռքերի մետաքսը»։' },
              },
              {
                aspect: { es: 'Grado de identidad', hy: 'Նույնացման աստիճանը' },
                valA: { es: 'Dice que una cosa se parece a otra.', hy: 'Ասում է, որ մի բանը նման է մյուսին։' },
                valB: { es: 'Identifica una cosa con otra directamente.', hy: 'Մի բանն ուղղակիորեն նույնացնում է մյուսի հետ։' },
              },
            ],
          },
        ],
        stepByStep: [
          {
            step: 1,
            title: { es: 'Localizar el término figurado B', hy: 'Գտնել փոխաբերական B տարրը' },
            action: { es: 'Pregúntate: ¿Qué palabra no encaja en su sentido literal? ¿Qué imagen poética aparece?', hy: 'Հարցրու ինքդ քեզ․ ո՞ր բառը չի համապատասխանում բառացի իմաստին։ Ի՞նչ պատկեր է երևում։' },
            example: { es: 'En "El oro de tu pelo", "oro" es la imagen figurada.', hy: '«Քո մազերի ոսկին» արտահայտության մեջ «ոսկին» փոխաբերական պատկերն է։' },
          },
          {
            step: 2,
            title: { es: 'Descubrir el término real A', hy: 'Բացահայտել իրական A տարրը' },
            action: { es: '¿De qué realidad física está hablando el autor en el mundo real?', hy: 'Իրական աշխարհի ո՞ր երևույթի մասին է խոսում հեղինակը։' },
            example: { es: 'El pelo rubio.', hy: 'Շիկահեր մազերի մասին։' },
          },
          {
            step: 3,
            title: { es: 'Identificar la estructura de la metáfora', hy: 'Որոշել փոխաբերության կառուցվածքը' },
            action: { es: 'Si tiene "A es B", es impura. Si es "B de A", es preposicional. Si solo está "B", es metáfora pura.', hy: 'Եթե «A es B» է՝ impura է։ Եթե «B de A»՝ preposicional է։ Եթե միայն «B»՝ pura է։' },
            example: { es: '"El oro de tu pelo" = B de A (Metáfora preposicional).', hy: '«El oro de tu pelo» = B de A (Նախդիրային փոխաբերություն)։' },
          },
        ],
        detectionGuide: [
          {
            es: 'Si tiene "como", "cual" o "parece", NO es metáfora: es una comparación (símil).',
            hy: 'Եթե ունի «como», «cual» կամ «parece» (ինչպես, նման), փոխաբերություն ՉԷ, այլ համեմատություն է (símil)։',
          },
          {
            es: 'Busca el rasgo común: color, brillo, velocidad, forma, calor, sonido.',
            hy: 'Փնտրիր ընդհանուր հատկանիշը՝ գույն, փայլ, արագություն, ձև, ջերմություն, ձայն։',
          },
        ],
        summary: [
          {
            es: 'Metáfora = A (Real) + B (Figurado) sin nexo comparativo.',
            hy: 'Փոխաբերություն = A (Իրական) + B (Փոխաբերական) առանց համեմատական կապի։',
          },
          {
            es: 'Formas: A es B, B de A, o solo B (pura).',
            hy: 'Տեսակները՝ A es B, B de A, կամ միայն B (մաքուր փոխաբերություն)։',
          },
        ],
        examples: [],
      },
    ],
  },
  {
    id: 'bloque-3',
    number: 3,
    title: {
      es: 'Bloque 3: La Literatura Culta y Popular',
      hy: 'Թեմա 3․ Հեղինակային և ժողովրդական գրականություն',
    },
    shortDesc: {
      es: 'Autor conocido vs autor anónimo, transmisión oral vs escrita, canciones populares, nanas, villancicos y coplas.',
      hy: 'Հայտնի ընդդեմ անհայտ հեղինակի, բանավոր ընդդեմ գրավոր փոխանցման, ժողովրդական երգեր, օրորոցայիններ, տոնական երգեր և կոպլաներ։',
    },
    icon: 'BookOpen',
    sections: [
      {
        id: 'culta-popular-comparativa',
        blockId: 'bloque-3',
        title: {
          es: 'Literatura Culta vs Literatura Popular: Orígenes y Características',
          hy: 'Հեղինակային և ժողովրդական գրականություն․ ծագումը և առանձնահատկությունները',
        },
        badge: {
          es: 'Historia y tradición',
          hy: 'Պատմություն և ավանդույթ',
        },
        definition: {
          es: 'La literatura popular es aquella creada por el pueblo, de autor anónimo, transmitida oralmente de generación en generación y con múltiples versiones. La literatura culta es creada por un autor individual conocido, transmitida por escrito (manuscritos o libros impresos) y con un texto fijo e inmutable.',
          hy: 'Ժողովրդական գրականությունը (literatura popular) ժողովրդի ստեղծած գրականությունն է՝ անհայտ հեղինակով, որը բանավոր սերնդեսերունդ է փոխանցվել և ունի բազմաթիվ տարբերակներ։ Հեղինակային գրականությունը (literatura culta) ստեղծվում է հայտնի անհատ հեղինակի կողմից, փոխանցվում է գրավոր եղանակով (ձեռագրերով կամ տպագիր գրքերով) և ունի անփոփոխ, հաստատուն տեքստ։',
        },
        explanation: {
          es: 'Ambas manifestaciones han convivido a lo largo de los siglos en España. La literatura popular servía para acompañar las faenas del campo, dormir a los niños o celebrar fiestas populares. La culta requería que el público supiera leer y escribir, algo reservado antiguamente a nobles, clérigos y eruditos.',
          hy: 'Երկու դրսևորումներն էլ դարեր շարունակ կողք կողքի են գոյատևել Իսպանիայում։ Ժողովրդական գրականությունը ծառայում էր դաշտային աշխատանքներին ուղեկցելու, երեխաներին քնեցնելու կամ ժողովրդական տոները նշելու համար։ Հեղինակային գրականությունը պահանջում էր գրագիտություն, ինչը հնում հասանելի էր միայն ազնվականներին, հոգևորականներին և գիտնականներին։',
        },
        classifications: [
          {
            name: { es: 'Manifestaciones de la Literatura Popular', hy: 'Ժողովրդական գրականության տեսակները' },
            description: {
              es: 'Composiciones breves, musicales, con rima asonante y estribillos fáciles de recordar.',
              hy: 'Կարճ, երաժշտական ստեղծագործություններ՝ ձայնավորական հանգով և հեշտ հիշվող կրկներգերով։',
            },
            examples: [
              { es: 'Nanas: Canciones de cuna para dormir a los bebés.', hy: 'Օրորոցայիններ (Nanas)․ երգեր փոքրիկներին քնեցնելու համար։' },
              { es: 'Villancicos: Canciones de celebración navideña o festiva.', hy: 'Վիլյանսիկոներ (Villancicos)․ Սուրբ Ծննդյան և տոնական ուրախ երգեր։' },
              { es: 'Coplas: Estrofas de cuatro versos de arte menor sobre la vida cotidiana y el amor.', hy: 'Կոպլաներ (Coplas)․ չորս կարճ տողից բաղկացած քառյակներ՝ առօրյա կյանքի և սիրո մասին։' },
              { es: 'Romances populares: Poemas narrativos cantados por juglares en plazas de pueblos.', hy: 'Ժողովրդական ռոմանսներ․ պատմողական բանաստեղծություններ, որոնք գուսանները երգում էին հրապարակներում։' },
            ],
          },
          {
            name: { es: 'Características de la Literatura Culta', hy: 'Հեղինակային գրականության առանձնահատկությունները' },
            description: {
              es: 'Obras de arte individual, firmadas con nombre y apellidos, con léxico cuidado y métrica compleja.',
              hy: 'Անհատական արվեստի գործեր՝ ստորագրված կոնկրետ հեղինակի անունով, մշակված բառապաշարով և բարդ տաղաչափությամբ։',
            },
            examples: [
              { es: 'Obras manuscritas en monasterios medievales y libros impresos tras la imprenta de Gutenberg.', hy: 'Միջնադարյան վանքերի ձեռագրեր և տպագիր գրքեր Գուտենբերգի տպագրահաստոցից հետո։' },
              { es: 'Cervantes (Don Quijote), Quevedo, Góngora, Bécquer.', hy: 'Սերվանտես («Դոն Կիխոտ»), Կևեդո, Գոնգորա, Բեկեր։' },
            ],
          },
        ],
        comparisons: [
          {
            title: {
              es: 'Tabla comparativa: Culta frente a Popular',
              hy: 'Համեմատական աղյուսակ․ Հեղինակային ընդդեմ Ժողովրդականի',
            },
            itemA: { es: 'Literatura Popular', hy: 'Ժողովրդական գրականություն' },
            itemB: { es: 'Literatura Culta', hy: 'Հեղինակային գրականություն' },
            differences: [
              {
                aspect: { es: 'Autoría', hy: 'Հեղինակություն' },
                valA: { es: 'Anónima (obra del pueblo).', hy: 'Անհայտ (ժողովրդի ստեղծագործություն)։' },
                valB: { es: 'Autor conocido con nombre propio.', hy: 'Հայտնի հեղինակ կոնկրետ անունով։' },
              },
              {
                aspect: { es: 'Transmisión', hy: 'Փոխանցման եղանակ' },
                valA: { es: 'Oral (de boca a oído, cantada y recitada).', hy: 'Բանավոր (բերանից բերան, երգելով ու արտասանելով)։' },
                valB: { es: 'Escrita (manuscritos, libros impresos).', hy: 'Գրավոր (ձեռագրեր, տպագիր գրքեր)։' },
              },
              {
                aspect: { es: 'Fijación del texto', hy: 'Տեքստի կայունություն' },
                valA: { es: 'Variable: existen múltiples versiones de un mismo poema.', hy: 'Փոփոխական․ նույն ստեղծագործությունը տարբեր գյուղերում տարբեր է։' },
                valB: { es: 'Fijo e inmutable: se respeta la versión del autor.', hy: 'Հաստատուն և անփոփոխ․ հեղինակի տեքստը պահպանվում է։' },
              },
              {
                aspect: { es: 'Recursos típicos', hy: 'Բնորոշ հնարքներ' },
                valA: { es: 'Estribillos, repeticiones, rima asonante sencilla.', hy: 'Կրկներգեր, կրկնություններ, պարզ ձայնավորական հանգ։' },
                valB: { es: 'Léxico culto, métrica elaborada, figuras complejas.', hy: 'Մշակված բառապաշար, բարդ տաղաչափություն, խորը հնարքներ։' },
              },
            ],
          },
        ],
        examples: [
          {
            es: 'Popular (Nana tradicional): "Duérmete, niño chiquito, / duérmete y no llores más, / que se van los angelitos / para no verte llorar".',
            hy: 'Ժողովրդական (Օրորոցային)․ «Քնիր, փոքրիկ երեխա, / քնիր ու էլ մի՛ լացիր, / որ հրեշտակները չհեռանան / քո լացը չտեսնելու համար»։',
            noteEs: 'Anónimo, musical, transmitido por madres y abuelas.',
            noteHy: 'Անհայտ հեղինակ, երաժշտական, փոխանցված մայրերի և տատիկների կողմից։',
          },
          {
            es: 'Culta (Gustavo Adolfo Bécquer): "Volverán las oscuras golondrinas / en tu balcón sus nidos a colgar...".',
            hy: 'Հեղինակային (Գուստավո Ադոլֆո Բեկեր)․ «Կվերադառնան մութ ծիծեռնակները / քո պատշգամբում իրենց բները կախելու․․․»։',
            noteEs: 'Autor célebre, publicado en libro escrito.',
            noteHy: 'Հայտնի հեղինակ, հրատարակված տպագիր գրքում։',
          },
        ],
        detectionGuide: [
          {
            es: 'Si el poema tiene estribillo repetitivo y no lleva autor firmado, es Popular.',
            hy: 'Եթե բանաստեղծությունն ունի կրկնվող կրկներգ և հեղինակի ստորագրություն չկա՝ Ժողովրդական է (Popular)։',
          },
          {
            es: 'Si está publicado en un libro con el nombre del escritor, es Culta.',
            hy: 'Եթե գրքում հրատարակված է գրողի անունով՝ Հեղինակային է (Culta)։',
          },
        ],
        summary: [
          {
            es: 'Popular = Anónima + Oral + Variaciones; Culta = Autor + Escrita + Texto fijo.',
            hy: 'Ժողովրդական = Անհայտ + Բանավոր + Տարբերակներ; Հեղինակային = Հեղինակ + Գրավոր + Հաստատուն տեքստ։',
          },
        ],
      },
    ],
  },
  {
    id: 'bloque-4',
    number: 4,
    title: {
      es: 'Bloque 4: Los Géneros y Textos Literarios',
      hy: 'Թեմա 4․ Գրական ժանրեր և տեքստեր',
    },
    shortDesc: {
      es: 'Narración breve, cuento, leyenda, mito, romance: estructura, personajes, elementos fantásticos y finalidad didáctica.',
      hy: 'Կարճ պատմվածք, հեքիաթ, լեգենդ, առասպել, ռոմանս․ կառուցվածք, կերպարներ, ֆանտաստիկ տարրեր և ուսուցողական նպատակ։',
    },
    icon: 'ScrollText',
    sections: [
      {
        id: 'generos-narrativos-formas',
        blockId: 'bloque-4',
        title: {
          es: 'Cuento, Leyenda, Mito y Romance: Diferencias y Características',
          hy: 'Հեքիաթ/պատմվածք, Լեգենդ, Առասպել և Ռոմանս․ տարբերություններն ու առանձնահատկությունները',
        },
        badge: {
          es: 'Tipos de textos',
          hy: 'Տեքստերի տեսակներ',
        },
        definition: {
          es: 'Los textos narrativos relatan una sucesión de hechos protagonizados por personajes en un espacio y tiempo determinados. En 1.º de ESO distinguimos las formas narrativas fundamentales: el cuento, la leyenda, el mito y el romance.',
          hy: 'Պատմողական տեքստերը ներկայացնում են դեպքերի հաջորդականություն, որոնք կատարվում են կերպարների հետ որոշակի տարածության և ժամանակի մեջ։ 1.º ESO դասարանում մենք տարբերակում ենք պատմողական հիմնական ձևերը՝ հեքիաթ/պատմվածք (cuento), լեգենդ (leyenda), առասպել (mito) և ռոմանս (romance)։',
        },
        explanation: {
          es: 'Cada subgénero tiene una intención particular: el mito explica el origen del cosmos y los dioses; la leyenda parte de un lugar o hecho histórico real al que se añaden elementos fantásticos; el cuento narra una historia breve con personajes arquetípicos y moraleja didáctica; y el romance es un poema narrativo octosílabo.',
          hy: 'Յուրաքանչյուր ենթաժանր ունի յուրահատուկ նպատակ․ առասպելը բացատրում է տիեզերքի, բնության երևույթների և աստվածների ծագումը. լեգենդը հենվում է իրական պատմական վայրի կամ իրադարձության վրա, որին ավելացվում են գերբնական տարրեր. հեքիաթը/կարճ պատմվածքը ներկայացնում է հորինված պատմություն տիպական կերպարներով և ուսուցողական խրատով (moraleja). իսկ ռոմանսը պատմողական ութվանկ բանաստեղծություն է։',
        },
        classifications: [
          {
            name: { es: 'El Cuento (Popular o Literario)', hy: 'Հեքիաթ կամ Պատմվածք (Cuento)' },
            description: {
              es: 'Narración breve de ficción con pocos personajes, una trama sencilla centrada en un único conflicto y desenlace rápido. A menudo contiene finalidad didáctica (moraleja).',
              hy: 'Կարճ գեղարվեստական պատմություն սակավաթիվ կերպարներով, մեկ հիմնական հակամարտության շուրջ կառուցված պարզ սյուժեով և արագ հանգուցալուծմամբ։ Հաճախ ունի ուսուցողական նպատակ (խրատ)։',
            },
            examples: [
              { es: 'Fórmulas de inicio: "Érase una vez...", "Había una vez en un reino lejano...".', hy: 'Սկսման բանաձևեր․ «Լինում է, չի լինում․․․», «Ժուկով-ժամանակով մի հեռավոր թագավորությունում․․․»։' },
            ],
          },
          {
            name: { es: 'La Leyenda', hy: 'Լեգենդ (Ավանդազրույց)' },
            description: {
              es: 'Relato que parte de una base real (un monumento histórico, un personaje auténtico, un pueblo concreto) sobre la cual se mezclan elementos mágicos o misteriosos.',
              hy: 'Պատմություն, որը հենվում է իրական հիմքի վրա (պատմական հուշարձան, իրական անձնավորություն, կոնկրետ գյուղ/քաղաք), որի վրա ավելացվում են մոգական կամ առեղծվածային տարրեր։',
            },
            examples: [
              { es: 'Las Leyendas de Gustavo Adolfo Bécquer (El monte de las ánimas, El rayo de luna).', hy: 'Գուստավո Ադոլֆո Բեկերի լեգենդները («Հոգիների բլուրը», «Լուսնի ճառագայթը»)։' },
            ],
          },
          {
            name: { es: 'El Mito', hy: 'Առասպել (Mito)' },
            description: {
              es: 'Narración sagrada protagonizada por dioses, semidioses o héroes legendarios que explica el origen del mundo, la creación de la humanidad o fenómenos de la naturaleza.',
              hy: 'Սրբազան պատմություն, որի հերոսներն են աստվածները, կիսաստվածները կամ լեգենդար հերոսները, և որը բացատրում է աշխարհի ծագումը, մարդկության արարումը կամ բնության երևույթները։',
            },
            examples: [
              { es: 'El mito de Ícaro y Dédalo, la caja de Pandora, el rapto de Perséfone.', hy: 'Իկարոսի և Դեդալոսի առասպելը, Պանդորայի արկղը, Պերսեփոնեի առևանգումը։' },
            ],
          },
          {
            name: { es: 'El Romance', hy: 'Ռոմանս (Romance)' },
            description: {
              es: 'Composición poética narrativa con versos octosílabos (8 sílabas), rima asonante en los versos pares y versos impares sueltos (sin rima). Cuenta hazañas bélicas, amores o leyendas.',
              hy: 'Պատմողական բանաստեղծական կառուցվածք՝ ութվանկ (8 վանկ) տողերով, զույգ տողերում ձայնավորական հանգով (asonante), իսկ կենտ տողերն ազատ են (առանց հանգի)։ Պատմում է ռազմական սխրանքների, սիրո կամ լեգենդների մասին։',
            },
            examples: [
              { es: 'Esquema métrico: 8- 8a 8- 8a 8- 8a...', hy: 'Տաղաչափական սխեման՝ 8- 8a 8- 8a 8- 8a...' },
              { es: 'Romance del conde Arnaldos, Romance del prisionero.', hy: '«Կոմս Արնալդոսի ռոմանսը», «Բանտարկյալի ռոմանսը»։' },
            ],
          },
        ],
        comparisons: [
          {
            title: {
              es: 'Mito frente a Leyenda frente a Cuento',
              hy: 'Առասպել ընդդեմ Լեգենդի ընդդեմ Հեքիաթի',
            },
            itemA: { es: 'Mito', hy: 'Առասպել (Mito)' },
            itemB: { es: 'Leyenda', hy: 'Լեգենդ (Leyenda)' },
            differences: [
              {
                aspect: { es: 'Personajes', hy: 'Կերպարներ' },
                valA: { es: 'Dioses inmortales, monstruos mitológicos.', hy: 'Անմահ աստվածներ, դիցաբանական հրեշներ։' },
                valB: { es: 'Seres humanos vinculados a una época histórica.', hy: 'Մարդիկ՝ կապված որոշակի պատմական ժամանակաշրջանի հետ։' },
              },
              {
                aspect: { es: 'Tiempo y espacio', hy: 'Ժամանակ և տարածություն' },
                valA: { es: 'Tiempo sagrado, remoto e indeterminado.', hy: 'Սրբազան, հեռավոր և անորոշ ժամանակներում։' },
                valB: { es: 'Lugar real reconocible (Toledo, Soria, Sevilla).', hy: 'Ճանաչելի իրական վայր (Տոլեդո, Սորիա, Սևիլյա)։' },
              },
              {
                aspect: { es: 'Finalidad', hy: 'Նպատակ' },
                valA: { es: 'Explicar el cosmos y las fuerzas universales.', hy: 'Բացատրել տիեզերքն ու բնության ուժերը։' },
                valB: { es: 'Explicar un misterio local o tradición histórica.', hy: 'Բացատրել տեղական առեղծվածը կամ պատմական ավանդույթը։' },
              },
            ],
          },
        ],
        detectionGuide: [
          {
            es: 'Si aparecen Zeus, Poseidón o se explica el origen de las estaciones del año -> Mito.',
            hy: 'Եթե հայտնվում են Զևսը, Պոսեյդոնը կամ բացատրվում է տարվա եղանակների առաջացումը -> Mito (Առասպել)։',
          },
          {
            es: 'Si se ambienta en una catedral o castillo español y hay fantasmas o milagros -> Leyenda.',
            hy: 'Եթե գործողությունը կատարվում է իսպանական տաճարում կամ ամրոցում և կան ուրվականներ կամ հրաշքներ -> Leyenda (Լեգենդ)։',
          },
          {
            es: 'Si son versos de 8 sílabas que riman solo en los pares con rima asonante -> Romance.',
            hy: 'Եթե 8-վանկանի տողեր են, որոնք հանգավորվում են միայն զույգ տողերում ձայնավորական հանգով -> Romance (Ռոմանս)։',
          },
        ],
        summary: [
          {
            es: 'El romance es verso octosílabo asonante en pares. Cuento, leyenda y mito son las tres grandes ramas de la narrativa tradicional.',
            hy: 'Ռոմանսը ութվանկ տողերով ձայնավորական հանգով չափածո է։ Հեքիաթը, լեգենդը և առասպելը ավանդական պատմողական ժանրի երեք մեծ ճյուղերն են։',
          },
        ],
        examples: [],
      },
    ],
  },
  {
    id: 'bloque-5',
    number: 5,
    title: {
      es: 'Bloque 5: Las Funciones del Lenguaje',
      hy: 'Թեմա 5․ Լեզվի գործառույթները',
    },
    shortDesc: {
      es: 'Las 6 funciones: referencial, expresiva, apelativa, fática, metalingüística y poética.',
      hy: '6 գործառույթները․ հաղորդակցական, արտահայտչական, կոչական, կապի հաստատման, մետալեզվական և բանաստեղծական։',
    },
    icon: 'Radio',
    sections: [
      {
        id: 'seis-funciones-lenguaje',
        blockId: 'bloque-5',
        title: {
          es: 'Las 6 Funciones del Lenguaje según Roman Jakobson',
          hy: 'Լեզվի 6 գործառույթներն ըստ Ռոման Յակոբսոնի',
        },
        badge: {
          es: 'Teoría lingüística',
          hy: 'Լեզվաբանական տեսություն',
        },
        definition: {
          es: 'Las funciones del lenguaje son los distintos objetivos, intenciones y propósitos que persigue el emisor al emitir un mensaje. Cada función se vincula directamente con uno de los seis elementos del acto de la comunicación.',
          hy: 'Լեզվի գործառույթները այն տարբեր նպատակներն ու մտադրություններն են, որոնց ձգտում է խոսողը (հաղորդողը) հաղորդագրություն ուղարկելիս։ Յուրաքանչյուր գործառույթ ուղղակիորեն կապված է հաղորդակցության վեց տարրերից մեկի հետ։',
        },
        explanation: {
          es: 'Aunque en un mismo mensaje pueden coexistir varias funciones, casi siempre hay una función predominante. Reconocerla depende de analizar los rasgos lingüísticos: verbos, modos, signos de exclamación, pronombres y vocabulario.',
          hy: 'Չնայած նույն նախադասության մեջ կարող են համատեղվել մի քանի գործառույթներ, գրեթե միշտ կա մեկ գերիշխող գործառույթ։ Դա ճանաչելու համար պետք է վերլուծել լեզվական հատկանիշները՝ բայական եղանակները, բացականչական նշանները, դերանունները և բառապաշարը։',
        },
        classifications: [
          {
            name: { es: '1. Función Referencial o Representativa (Contexto)', hy: '1. Հաղորդակցական կամ Տեղեկատվական գործառույթ (Կոնտեքստ)' },
            description: {
              es: 'Transmite información objetiva sobre la realidad sin valoraciones personales. Se centra en el contexto o referente.',
              hy: 'Փոխանցում է օբյեկտիվ տեղեկատվություն իրականության մասին՝ առանց անձնական գնահատականների։ Կենտրոնանում է կոնտեքստի վրա։',
            },
            examples: [
              { es: 'La capital de España es Madrid.', hy: 'Իսպանիայի մայրաքաղաքը Մադրիդն է։' },
              { es: 'El examen de Lengua será el próximo martes a las diez.', hy: 'Իսպաներենի քննությունը կլինի հաջորդ երեքշաբթի ժամը տասին։' },
              { es: 'El agua hierve a cien grados centígrados.', hy: 'Ջուրը եռում է հարյուր աստիճան Ցելսիուսում։' },
              { es: 'Hoy el autobús llegó con diez minutos de retraso.', hy: 'Այսօր ավտոբուսը տասը րոպե ուշացումով տեղ հասավ։' },
            ],
            keyDetail: {
              es: 'Rasgos: Modo indicativo, entonación neutra, oraciones enunciativas, tercera persona.',
              hy: 'Հատկանիշներ՝ սահմանական եղանակ (indicativo), չեզոք հնչերանգ, պատմողական նախադասություններ, երրորդ դեմք։',
            },
          },
          {
            name: { es: '2. Función Expresiva o Emotiva (Emisor)', hy: '2. Արտահայտչական կամ Հուզական գործառույթ (Խոսող/Emisor)' },
            description: {
              es: 'El emisor manifiesta sus sentimientos, opiniones, deseos, estados de ánimo o emociones subjetivas.',
              hy: 'Խոսողն արտահայտում է իր զգացմունքները, կարծիքը, ցանկությունները, տրամադրությունը կամ սուբյեկտիվ հույզերը։',
            },
            examples: [
              { es: '¡Qué alegría me da verte después de tanto tiempo!', hy: 'Որքա՜ն ուրախ եմ քեզ տեսնել այդքան ժամանակ անց։' },
              { es: 'Me duele muchísimo la cabeza hoy.', hy: 'Այսօր գլուխս սաստիկ ցավում է։' },
              { es: '¡Ojalá ganemos el partido el sábado!', hy: 'Երանի՜ շաբաթ օրը հաղթենք խաղում։' },
              { es: 'No me gusta nada esta película, es aburridísima.', hy: 'Ինձ ամենևին դուր չի գալիս այս ֆիլմը, շատ ձանձրալի է։' },
            ],
            keyDetail: {
              es: 'Rasgos: Primera persona (yo/nosotros), interjecciones, exclamaciones, adjetivos valorativos.',
              hy: 'Հատկանիշներ՝ առաջին դեմք (ես/մենք), ձայնարկություններ, բացականչություններ, գնահատողական ածականներ։',
            },
          },
          {
            name: { es: '3. Función Apelativa o Conativa (Receptor)', hy: '3. Կոչական կամ Ազդեցության գործառույթ (Լսող/Receptor)' },
            description: {
              es: 'Pretende influir en el receptor, llamar su atención, ordenarle, aconsejarle o pedirle que haga o deje de hacer algo.',
              hy: 'Նպատակ ունի ազդել լսողի վրա, գրավել նրա ուշադրությունը, հրամայել, խորհուրդ տալ կամ խնդրել, որ նա որևէ բան անի կամ չանի։',
            },
            examples: [
              { es: '¡Cierra la ventana, por favor!', hy: 'Խնդրում եմ, փակի՛ր պատուհանը։' },
              { es: 'Escuchad con atención lo que voy a explicar.', hy: 'Ուշադրությամբ լսե՛ք այն, ինչ պատրաստվում եմ բացատրել։' },
              { es: '¿Podrías pasarme la sal?', hy: 'Կարո՞ղ ես ինձ աղամանը փոխանցել։' },
              { es: '¡No cruces con el semáforo en rojo!', hy: 'Մի՛ անցիր փողոցը լուսացույցի կարմիր լույսի տակ։' },
            ],
            keyDetail: {
              es: 'Rasgos: Modo imperativo, vocativos ("Juan, ven"), preguntas para exigir respuesta, segunda persona (tú/vosotros/usted).',
              hy: 'Հատկանիշներ՝ հրամայական եղանակ (imperativo), կոչականներ («Խուա՛ն, արի»), հարցադրումներ պատասխան ստանալու համար, երկրորդ դեմք (դու/դուք)։',
            },
          },
          {
            name: { es: '4. Función Fática o de Contacto (Canal)', hy: '4. Կապի հաստատման (Ֆատիկ) գործառույթ (Կապուղի/Canal)' },
            description: {
              es: 'Sirve para abrir, mantener, comprobar o cerrar el canal físico de la comunicación.',
              hy: 'Ծառայում է հաղորդակցման ֆիզիկական կապուղին բացելու, պահպանելու, ստուգելու կամ փակելու համար։',
            },
            examples: [
              { es: '¿Diga? ¿Me escuchas bien?', hy: 'Ալո՞։ Ինձ լավ լսո՞ւմ ես։' },
              { es: 'Sí, sí, claro... ya veo... ajá.', hy: 'Այո, այո, իհարկե․․․ հասկանում եմ․․․ ըհը։' },
              { es: 'Hola, buenos días a todos.', hy: 'Ողջույն, բարի լույս բոլորին։' },
              { es: 'Adiós, hasta mañana por la tarde.', hy: 'Ցտեսություն, մինչ վաղը կեսօր։' },
              { es: 'Uno, dos, tres... probando micrófono.', hy: 'Մեկ, երկու, երեք․․․ ստուգում ենք խոսափողը։' },
            ],
            keyDetail: {
              es: 'Rasgos: Fórmulas de saludo y despedida, muletillas repetitivas, frases breves para verificar el audio.',
              hy: 'Հատկանիշներ՝ ողջույնի և հրաժեշտի բանաձևեր, կարճ արտահայտություններ կապն ու լսելիությունը ստուգելու համար։',
            },
          },
          {
            name: { es: '5. Función Metalingüística (Código)', hy: '5. Մետալեզվական գործառույթ (Կոդ/Լեզու)' },
            description: {
              es: 'Se utiliza el propio idioma para hablar del propio lenguaje, explicar reglas gramaticales, ortografía o el significado de las palabras.',
              hy: 'Օգտագործվում է հենց լեզուն՝ լեզվի մասին խոսելու, քերականական կանոնները, ուղղագրությունը կամ բառերի իմաստը բացատրելու համար։',
            },
            examples: [
              { es: 'La palabra "árbol" lleva tilde porque es llana terminada en consonante distinta de n o s.', hy: '«Árbol» (ծառ) բառը շեշտանշան (tilde) է կրում, որովհետև llana բառ է՝ ավարտվող n-ից կամ s-ից տարբեր բաղաձայնով։' },
              { es: '"Inmortal" significa que no puede morir jamás.', hy: '«Անմահ» նշանակում է այնպիսին, որ երբեք չի կարող մահանալ։' },
              { es: 'El pretérito imperfecto de cantar es cantaba.', hy: '«Cantar» բայի անցյալ անկատար ժամանակն է «cantaba»։' },
              { es: 'Los sustantivos colectivos nombran en singular a un conjunto de seres.', hy: 'Հավաքական գոյականները եզակի թվով անվանում են էակների մի ամբողջություն։' },
            ],
            keyDetail: {
              es: 'Rasgos: Vocabulario gramatical (sustantivo, tilde, sílaba, verbo, prefijo, significado).',
              hy: 'Հատկանիշներ՝ քերականական տերմիններ (գոյական, շեշտ, վանկ, բայ, նախածանց, իմաստ)։',
            },
          },
          {
            name: { es: '6. Función Poética o Estética (Mensaje)', hy: '6. Բանաստեղծական կամ Գեղագիտական գործառույթ (Հաղորդագրություն/Mensaje)' },
            description: {
              es: 'Se centra en la forma bella, artística y rítmica del mensaje mismo. Busca deleitar mediante figuras literarias, rimas o juegos de palabras.',
              hy: 'Կենտրոնանում է հենց հաղորդագրության գեղեցիկ, գեղարվեստական և ռիթմիկ ձևի վրա։ Ձգտում է հաճույք պատճառել գեղարվեստական հնարքների, հանգերի կամ բառախաղերի միջոցով։',
            },
            examples: [
              { es: 'Caminante, no hay camino, se hace camino al andar. (Machado)', hy: 'Ճամփորդ, ճանապարհ չկա, ճանապարհը բացվում է քայլելիս։' },
              { es: 'Tres tristes tigres comían trigo en un trigal.', hy: 'Երեք տխուր վագրեր ցորեն էին ուտում ցորենի արտում։ (Շուտասելուկ)' },
              { es: 'El viento peina las copas doradas de los álamos.', hy: 'Քամին սանրում է բարդիների ոսկեզօծ սաղարթները։' },
              { es: 'En abril, aguas mil. (Refrán tradicional popular)', hy: 'Ապրիլին՝ հազար ջուր (իսպանական ժողովրդական ասացվածք)։' },
            ],
            keyDetail: {
              es: 'Rasgos: Recursos literarios (metáforas, rima, aliteración), refranes, canciones y trabalenguas.',
              hy: 'Հատկանիշներ՝ գեղարվեստական արտահայտչամիջոցներ (փոխաբերություն, հանգ, ալիտերացիա), առածներ, երգեր և շուտասելուկներ։',
            },
          },
        ],
        comparisons: [
          {
            title: {
              es: 'Función Poética vs Función Expresiva',
              hy: 'Բանաստեղծական ընդդեմ Արտահայտչական (Հուզական) գործառույթի',
            },
            itemA: { es: 'Función Poética', hy: 'Բանաստեղծական' },
            itemB: { es: 'Función Expresiva', hy: 'Արտահայտչական (հուզական)' },
            differences: [
              {
                aspect: { es: 'Foco de atención', hy: 'Ուշադրության կենտրոն' },
                valA: { es: 'En el MENSAJE: cómo se dice artísticamente.', hy: 'ՀԱՂՈՐԴԱԳՐՈՒԹՅԱՆ վրա․ ինչպես է այն գեղարվեստորեն ասվում։' },
                valB: { es: 'En el EMISOR: qué siente la persona ("¡Qué rabia tengo!").', hy: 'ԽՈՍՈՂԻ վրա․ ինչ է զգում մարդը («Ինչպիսի՜ զայրույթ ունեմ»)։' },
              },
            ],
          },
          {
            title: {
              es: 'Función Referencial vs Función Metalingüística',
              hy: 'Հաղորդակցական (տեղեկատվական) ընդդեմ Մետալեզվականի',
            },
            itemA: { es: 'Referencial', hy: 'Տեղեկատվական' },
            itemB: { es: 'Metalingüística', hy: 'Մետալեզվական' },
            differences: [
              {
                aspect: { es: 'De qué habla', hy: 'Ինչի՞ մասին է խոսում' },
                valA: { es: 'Del mundo exterior: geografía, ciencias, sucesos reales.', hy: 'Արտաքին աշխարհի մասին՝ աշխարհագրություն, գիտություն, դեպքեր։' },
                valB: { es: 'Del propio idioma español: ortografía, verbos, definiciones.', hy: 'Հենց իսպաներեն լեզվի մասին՝ ուղղագրություն, բայեր, սահմանումներ։' },
              },
            ],
          },
        ],
        detectionGuide: [
          {
            es: 'Si da una orden, consejo o suplica a otra persona -> Apelativa.',
            hy: 'Եթե հրաման է տալիս, խորհուրդ կամ խնդրանք մեկ ուրիշին -> Apelativa (Կոչական)։',
          },
          {
            es: 'Si comprueba si la línea telefónica o el audio funciona -> Fática.',
            hy: 'Եթե ստուգում է՝ արդյոք հեռախոսակապը կամ ձայնը գործո՞ւմ են -> Fática (Կապի հաստատման)։',
          },
          {
            es: 'Si explica una norma ortográfica o significado léxico -> Metalingüística.',
            hy: 'Եթե բացատրում է ուղղագրական կանոն կամ բառի իմաստ -> Metalingüística (Մետալեզվական)։',
          },
        ],
        summary: [
          {
            es: 'Cada función responde a un elemento de la comunicación: Referencial (Contexto), Expresiva (Emisor), Apelativa (Receptor), Fática (Canal), Metalingüística (Código) y Poética (Mensaje).',
            hy: 'Յուրաքանչյուր գործառույթ համապատասխանում է հաղորդակցության մի տարրի՝ Տեղեկատվական (Կոնտեքստ), Հուզական (Խոսող), Կոչական (Լսող), Կապի հաստատման (Կապուղի), Մետալեզվական (Կոդ/Լեզու) և Բանաստեղծական (Հաղորդագրություն)։',
          },
        ],
        examples: [],
      },
    ],
  },
  {
    id: 'bloque-6',
    number: 6,
    title: {
      es: 'Bloque 6: Las Modalidades Oracionales',
      hy: 'Թեմա 6․ Նախադասությունների տեսակներն ըստ խոսողի նպատակի',
    },
    shortDesc: {
      es: 'Las 6 modalidades: enunciativa (afirmativa/negativa), interrogativa, exclamativa, exhortativa, desiderativa y dubitativa.',
      hy: '6 տեսակները․ պատմողական (հաստատական/ժխտական), հարցական, բացականչական, հրամայական, ըղձական և երկբայական։',
    },
    icon: 'MessageSquare',
    sections: [
      {
        id: 'modalidades-oracionales-seis',
        blockId: 'bloque-6',
        title: {
          es: 'Clasificación de las Oraciones según la Actitud del Hablante',
          hy: 'Նախադասությունների դասակարգումն ըստ խոսողի վերաբերմունքի',
        },
        badge: {
          es: 'Sintaxis y comunicación',
          hy: 'Շարահյուսություն և հաղորդակցություն',
        },
        definition: {
          es: 'La modalidad oracional es la actitud que adopta el hablante ante lo que dice: afirmar un hecho, preguntar una duda, exclamar una sorpresa, ordenar una acción, desear un acontecimiento o manifestar incertidumbre.',
          hy: 'Նախադասության եղանակավորումը (modalidad) խոսողի ընդունած դիրքորոշումն է իր ասածի նկատմամբ՝ փաստի հաստատում, կասկածի հարցում, զարմանքի բացականչում, գործողության հրամայում, իրադարձության ցանկություն կամ անորոշության դրսևորում։',
        },
        explanation: {
          es: 'En español existen 6 tipos de modalidades oracionales. Cada una se distingue por la entonación, los signos ortográficos (¿? ¡!), el modo verbal empleado (indicativo, subjuntivo o imperativo) y los adverbios o nexos introductores.',
          hy: 'Իսպաներենում կա նախադասությունների 6 տեսակ ըստ խոսողի նպատակի։ Յուրաքանչյուրը տարբերվում է հնչերանգով, կետադրական նշաններով (¿? ¡!), բայի եղանակով (indicativo, subjuntivo կամ imperativo) և ներածական մակբայներով կամ շաղկապներով։',
        },
        classifications: [
          {
            name: { es: '1. Oraciones Enunciativas', hy: '1. Պատմողական նախադասություններ (Enunciativas)' },
            description: {
              es: 'Comunican un hecho de forma objetiva presentándolo como real. Pueden ser afirmativas o negativas.',
              hy: 'Հաղորդում են փաստը օբյեկտիվ կերպով՝ ներկայացնելով որպես իրականություն։ Լինում են հաստատական կամ ժխտական։',
            },
            examples: [
              { es: 'Afirmativa: El tren de cercanías sale a las ocho y media.', hy: 'Հաստատական․ Մերձքաղաքային գնացքը շարժվում է ութն անց կեսին։' },
              { es: 'Negativa: Mañana no habrá clase de educación física.', hy: 'Ժխտական․ Վաղը ֆիզկուլտուրայի դաս չի լինի։' },
              { es: 'Negativa: Ningún alumno olvidó traer su cuaderno.', hy: 'Ժխտական․ Ոչ մի աշակերտ չմոռացավ բերել իր տետրը։' },
            ],
          },
          {
            name: { es: '2. Oraciones Interrogativas', hy: '2. Հարցական նախադասություններ (Interrogativas)' },
            description: {
              es: 'Formulan una pregunta para obtener información del receptor. Pueden ser directas (con signos ¿?) o indirectas (sin signos, introducidas por verbos como "preguntar" o "saber").',
              hy: 'Հարց են ուղղում լսողից տեղեկություն ստանալու համար։ Լինում են ուղղակի (¿? նշաններով) կամ անուղղակի (առանց նշանների, սկսվող «preguntar» կամ «saber» բայերով)։',
            },
            examples: [
              { es: 'Directa: ¿Dónde has dejado la mochila del colegio?', hy: 'Ուղղակի․ Որտե՞ղ ես թողել դպրոցական պայուսակը։' },
              { es: 'Indirecta: Dime a qué hora empieza la función.', hy: 'Անուղղակի․ Ասա՛ ինձ, թե որ ժամին է սկսվում ներկայացումը։' },
              { es: 'Total (respuesta sí/no): ¿Has terminado ya la tarea?', hy: 'Ընդհանուր (այո/ոչ պատասխանով)․ Արդեն ավարտե՞լ ես տնայինը։' },
            ],
          },
          {
            name: { es: '3. Oraciones Exclamativas', hy: '3. Բացականչական նախադասություններ (Exclamativas)' },
            description: {
              es: 'Expresan con intensidad emociones vivas como sorpresa, admiración, enfado o alegría. Llevan signos de admiración (¡!).',
              hy: 'Ուժգնությամբ արտահայտում են վառ հույզեր՝ զարմանք, հիացմունք, բարկություն կամ ուրախություն։ Կրում են բացականչական նշաններ (¡!)։',
            },
            examples: [
              { es: '¡Qué golazo tan impresionante ha marcado!', hy: 'Ինչպիսի՜ տպավորիչ գոլ նա խփեց։' },
              { es: '¡Vaya sorpresa encontrarte aquí!', hy: 'Ի՜նչ անակնկալ քեզ այստեղ հանդիպելը։' },
              { es: '¡Qué frío hace en la cumbre!', hy: 'Որքա՜ն ցուրտ է գագաթին։' },
            ],
          },
          {
            name: { es: '4. Oraciones Exhortativas o Imperativas', hy: '4. Հրամայական կամ Հորդորական նախադասություններ (Exhortativas / Imperativas)' },
            description: {
              es: 'Expresan una orden, mandato, ruego, prohibición o consejo dirigido al receptor.',
              hy: 'Արտահայտում են հրաման, կարգադրություն, խնդրանք, արգելք կամ խորհուրդ՝ ուղղված լսողին։',
            },
            examples: [
              { es: 'Orden: Guarda tus libros en la taquilla ahora mismo.', hy: 'Հրաման․ Պահի՛ր գրքերդ պահարանում հենց հիմա։' },
              { es: 'Ruego: Por favor, ayúdame a recoger este desorden.', hy: 'Խնդրանք․ Խնդրում եմ, օգնի՛ր ինձ հավաքել այս թափթփվածությունը։' },
              { es: 'Prohibición: No abras la puerta a desconocidos.', hy: 'Արգելք․ Դուռը մի՛ բացիր անծանոթների առաջ։' },
            ],
          },
          {
            name: { es: '5. Oraciones Desiderativas u Optativas', hy: '5. Ըղձական նախադասություններ (Desiderativas)' },
            description: {
              es: 'Expresan el deseo de que ocurra o no ocurra un hecho. Suelen utilizar el modo subjuntivo y partículas como "ojalá", "que", "así".',
              hy: 'Արտահայտում են ցանկություն, որ որևէ դեպք կատարվի կամ չկատարվի։ Սովորաբար օգտագործում են ըղձական եղանակը (subjuntivo) և «ojalá» (երանի), «que», «así» բառերը։',
            },
            examples: [
              { es: '¡Ojalá apruebe todos los exámenes de junio!', hy: 'Երանի՜ հունիսի բոլոր քննությունները հանձնեմ։' },
              { es: 'Que tengas un viaje maravilloso.', hy: 'Բարի և հիանալի ճանապարհորդություն քեզ։' },
              { es: '¡Así te salgan bien las cosas!', hy: 'Թո՛ղ գործերդ հաջող ընթանան։' },
            ],
          },
          {
            name: { es: '6. Oraciones Dubitativas', hy: '6. Երկբայական կամ Կասկած արտահայտող նախադասություններ (Dubitativas)' },
            description: {
              es: 'Expresan duda, probabilidad, incertidumbre o suposición. Se acompañan de adverbios de duda como "quizás", "tal vez", "acaso", "probablemente".',
              hy: 'Արտահայտում են կասկած, հավանականություն, անորոշություն կամ ենթադրություն։ Ուղեկցվում են կասկածի մակբայներով՝ «quizás», «tal vez» (գուցե), «acaso», «probablemente» (հավանաբար)։',
            },
            examples: [
              { es: 'Quizás llueva este fin de semana en la sierra.', hy: 'Գուցե անձրև գա այս հանգստյան օրերին լեռներում։' },
              { es: 'Tal vez nos veamos el domingo en el parque.', hy: 'Թերևս կիրակի օրը տեսնվենք զբոսայգում։' },
              { es: 'Probablemente el paquete llegue mañana por correo.', hy: 'Հավանաբար ծանրոցը վաղը կհասնի փոստով։' },
            ],
          },
        ],
        stepByStep: [
          {
            step: 1,
            title: { es: 'Transformar una idea en las 6 modalidades', hy: 'Միևնույն միտքը վերածել 6 տեսակների' },
            action: { es: 'Observa cómo cambia la misma acción básica (hacer los deberes):', hy: 'Տես, թե ինչպես է փոխվում նույն գործողությունը (տնայինն անելը)․' },
            example: {
              es: '1. Enunciativa: Haces los deberes.\n2. Interrogativa: ¿Haces los deberes?\n3. Exclamativa: ¡Haces los deberes rapidísimo!\n4. Exhortativa: Haz los deberes ahora.\n5. Desiderativa: Ojalá hagas los deberes a tiempo.\n6. Dubitativa: Quizás hagas los deberes luego.',
              hy: '1. Պատմողական․ Դու անում ես տնայինը։\n2. Հարցական․ Դու անո՞ւմ ես տնայինը։\n3. Բացականչական․ Ի՜նչ արագ ես անում տնայինը։\n4. Հրամայական․ Արի՛ր տնայինդ հիմա։\n5. Ըղձական․ Երանի՜ ժամանակին անես տնայինդ։\n6. Երկբայական․ Գուցե հետո անես տնայինդ։',
            },
          },
        ],
        detectionGuide: [
          {
            es: 'Si empieza por "¡Ojalá...!" o "Que te vaya bien" -> Desiderativa.',
            hy: 'Եթե սկսվում է «¡Ojalá...!» (Երանի) կամ «Que te vaya bien» -> Desiderativa (Ըղձական)։',
          },
          {
            es: 'Si lleva "quizás", "tal vez" o "acaso" -> Dubitativa.',
            hy: 'Եթե կրում է «quizás», «tal vez» (գուցե, թերևս) -> Dubitativa (Երկբայական)։',
          },
          {
            es: 'Si contiene un verbo en imperativo ("ven", "calla", "haz") o un ruego respetuoso -> Exhortativa.',
            hy: 'Եթե պարունակում է հրամայական բայ («արի՛», «լռի՛ր», «արա՛») կամ խնդրանք -> Exhortativa (Հրամայական/Հորդորական)։',
          },
        ],
        summary: [
          {
            es: 'Las 6 modalidades oracionales reflejan el propósito del hablante: enunciar, preguntar, exclamar, ordenar, desear o dudar.',
            hy: 'Նախադասության 6 տեսակներն արտացոլում են խոսողի նպատակը՝ պատմել, հարցնել, բացականչել, հրամայել, ցանկանալ կամ կասկածել։',
          },
        ],
        examples: [],
      },
    ],
  },
  {
    id: 'bloque-7',
    number: 7,
    title: {
      es: 'Bloque 7: La Comunicación',
      hy: 'Թեմա 7․ Հաղորդակցություն',
    },
    shortDesc: {
      es: 'Emisor, receptor, mensaje, código, canal y contexto en situaciones de la vida real.',
      hy: 'Հաղորդող, ստացող, հաղորդագրություն, կոդ, կապուղի և կոնտեքստ իրական կյանքի իրավիճակներում։',
    },
    icon: 'RadioTower',
    sections: [
      {
        id: 'elementos-comunicacion-analisis',
        blockId: 'bloque-7',
        title: {
          es: 'Los 6 Elementos del Proceso Comunicativo',
          hy: 'Հաղորդակցական գործընթացի 6 տարրերը',
        },
        badge: {
          es: 'Proceso comunicativo',
          hy: 'Հաղորդակցական գործընթաց',
        },
        definition: {
          es: 'La comunicación es el proceso mediante el cual un emisor transmite un mensaje a un receptor a través de un canal determinado, utilizando un código compartido y en un contexto específico.',
          hy: 'Հաղորդակցությունը (la comunicación) այն գործընթացն է, որի միջոցով խոսողը/հաղորդողը (emisor) հաղորդագրություն (mensaje) է փոխանցում լսողին/ստացողին (receptor) որոշակի կապուղու (canal) միջոցով՝ օգտագործելով ընդհանուր կոդ (código) և կոնկրետ իրավիճակում/կոնտեքստում (contexto)։',
        },
        explanation: {
          es: 'Para que la comunicación tenga éxito es indispensable que el receptor conozca el código empleado (por ejemplo, el idioma español) y que el canal no sufra interferencias o ruidos. Todos los seres humanos nos comunicamos a diario tanto con palabras (comunicación verbal) como con gestos, miradas y señales (comunicación no verbal).',
          hy: 'Որպեսզի հաղորդակցությունը հաջող լինի, անհրաժեշտ է, որ ստացողը ճանաչի օգտագործվող կոդը (օրինակ՝ իսպաներեն լեզուն), իսկ կապուղին չունենա խանգարումներ կամ աղմուկներ։ Բոլոր մարդիկ ամեն օր հաղորդակցվում են ինչպես բառերով (վերբալ հաղորդակցություն), այնպես էլ ժեստերով, հայացքներով և ազդանշաններով (ոչ վերբալ հաղորդակցություն)։',
        },
        classifications: [
          {
            name: { es: 'Emisor (Խոսող / Հաղորդող)', hy: 'Խոսող / Հաղորդող (Emisor)' },
            description: {
              es: 'Persona, grupo o entidad que elabora y emite el mensaje.',
              hy: 'Անձը, խումբը կամ կազմակերպությունը, որը կազմում և ուղարկում է հաղորդագրությունը։',
            },
            examples: [
              { es: 'La profesora explicando en clase, un amigo enviando un audio de WhatsApp.', hy: 'Ուսուցչուհին, որը բացատրում է դասարանում, կամ ընկերը, որը WhatsApp-ով ձայնային հաղորդագրություն է ուղարկում։' },
            ],
          },
          {
            name: { es: 'Receptor (Լսող / Ստացող)', hy: 'Լսող / Ստացող (Receptor)' },
            description: {
              es: 'Persona o grupo que recibe e interpreta el mensaje.',
              hy: 'Անձը կամ խումբը, որը ստանում և մեկնաբանում է հաղորդագրությունը։',
            },
            examples: [
              { es: 'Los alumnos que escuchan la explicación, quien lee el mensaje en el teléfono.', hy: 'Աշակերտները, որոնք լսում են բացատրությունը, կամ նա, ով կարդում է հաղորդագրությունը հեռախոսով։' },
            ],
          },
          {
            name: { es: 'Mensaje (Հաղորդագրություն)', hy: 'Հաղորդագրություն (Mensaje)' },
            description: {
              es: 'La información, idea, sentimiento o contenido transmitido.',
              hy: 'Փոխանցվող տեղեկությունը, միտքը, զգացմունքը կամ բովանդակությունը։',
            },
            examples: [
              { es: '"Abrid el libro en la página 45", "Nos vemos en la puerta del cine a las cinco".', hy: '«Բացե՛ք գիրքը 45-րդ էջում», «Կհանդիպենք կինոթատրոնի դռան մոտ ժամը հինգին»։' },
            ],
          },
          {
            name: { es: 'Código (Կոդ / Լեզու)', hy: 'Կոդ / Լեզվական համակարգ (Código)' },
            description: {
              es: 'Conjunto de signos y reglas que emisor y receptor comparten para entenderse.',
              hy: 'Նշանների և կանոնների համակարգը, որոնք հաղորդողն ու ստացողը կիսում են միմյանց հասկանալու համար։',
            },
            examples: [
              { es: 'El idioma castellano, el código morse, las señales de tráfico, el lenguaje de signos.', hy: 'Իսպաներեն լեզուն, Մորզեի այբուբենը, ճանապարհային նշանները, ժեստերի լեզուն։' },
            ],
          },
          {
            name: { es: 'Canal (Կապուղի)', hy: 'Կապուղի (Canal)' },
            description: {
              es: 'El medio físico o soporte a través del cual viaja el mensaje del emisor al receptor.',
              hy: 'Ֆիզիկական միջավայրը կամ կրիչը, որի միջոցով հաղորդագրությունը ճամփորդում է հաղորդողից դեպի ստացողը։',
            },
            examples: [
              { es: 'El aire (ondas sonoras al hablar), el papel (carta, examen), la fibra óptica/internet (móvil, email).', hy: 'Օդը (ձայնային ալիքները խոսելիս), թուղթը (նամակ, քննաթերթիկ), ինտերնետը/օպտիկական մալուխը (բջջային հեռախոս, էլ. փոստ)։' },
            ],
          },
          {
            name: { es: 'Contexto o Situación (Իրավիճակ / Կոնտեքստ)', hy: 'Իրավիճակ / Կոնտեքստ (Contexto)' },
            description: {
              es: 'Circunstancias de lugar, tiempo y entorno sociocultural que rodean el acto comunicativo y ayudan a comprender su verdadero sentido.',
              hy: 'Վայրի, ժամանակի և սոցիալ-մշակութային միջավայրի հանգամանքները, որոնք շրջապատում են հաղորդակցման պահը և օգնում հասկանալ դրա իսկական իմաստը։',
            },
            examples: [
              { es: 'El aula del instituto durante una clase matinal; la parada del autobús bajo la lluvia.', hy: 'Դպրոցի դասարանը առավոտյան դասի ժամանակ; ավտոբուսի կանգառը անձրևի տակ։' },
            ],
          },
        ],
        stepByStep: [
          {
            step: 1,
            title: { es: 'Caso práctico: El timbre del recreo', hy: 'Գործնական օրինակ․ Դասամիջոցի զանգը' },
            action: { es: 'Desglosamos los 6 elementos en una situación escolar habitual:', hy: 'Առանձնացնում ենք 6 տարրերը դպրոցական սովորական իրավիճակում․' },
            example: {
              es: '• Emisor: La dirección del centro escolar (quien programa el timbre).\n• Receptor: Alumnos y profesores en las aulas.\n• Mensaje: Ha terminado la hora lectiva; comienza el recreo.\n• Código: No verbal (sonoro acústico del timbre preacordado).\n• Canal: El aire y los altavoces del colegio.\n• Contexto: El instituto a las 11:30 de la mañana.',
              hy: '• Emisor (Հաղորդող)․ Դպրոցի տնօրինությունը (որը ծրագրավորում է զանգը)։\n• Receptor (Ստացող)․ Աշակերտները և ուսուցիչները դասարաններում։\n• Mensaje (Հաղորդագրություն)․ Դասաժամն ավարտվեց, սկսվում է դասամիջոցը։\n• Código (Կոդ)․ Ոչ վերբալ (նախապես պայմանավորված զանգի ձայնային ազդանշան)։\n• Canal (Կապուղի)․ Օդը և դպրոցի բարձրախոսները։\n• Contexto (Կոնտեքստ)․ Դպրոցը առավոտյան ժամը 11:30-ին։',
            },
          },
          {
            step: 2,
            title: { es: 'Caso práctico: Mensaje de WhatsApp entre amigos', hy: 'Գործնական օրինակ․ WhatsApp հաղորդագրություն ընկերների միջև' },
            action: { es: 'Identificamos los elementos en la comunicación digital:', hy: 'Որոշում ենք տարրերը թվային հաղորդակցության մեջ․' },
            example: {
              es: '• Emisor: David (quien escribe el mensaje).\n• Receptor: Lucas (quien lo lee en su pantalla).\n• Mensaje: "¿Vienes al parque a jugar al baloncesto?".\n• Código: Lengua castellana escrita y emoticonos.\n• Canal: Internet / ondas electromagnéticas / pantalla del móvil.\n• Contexto: Tarde del viernes en sus casas.',
              hy: '• Emisor (Հաղորդող)․ Դավիթը (որը գրում է հաղորդագրությունը)։\n• Receptor (Ստացող)․ Լուկասը (որը կարդում է այն իր էկրանին)։\n• Mensaje (Հաղորդագրություն)․ «Գալի՞ս ես այգի բասկետբոլ խաղալու»։\n• Código (Կոդ)․ Գրավոր իսպաներեն և էմոձիներ։\n• Canal (Կապուղի)․ Ինտերնետ / էլեկտրամագնիսական ալիքներ / հեռախոսի էկրան։\n• Contexto (Կոնտեքստ)․ Ուրբաթ երեկո իրենց տներում։',
            },
          },
        ],
        detectionGuide: [
          {
            es: 'Pregúntate: ¿Quién lo dice? -> Emisor. ¿A quién? -> Receptor. ¿Qué dice exactamente? -> Mensaje.',
            hy: 'Հարցրու ինքդ քեզ․ Ո՞վ է ասում -> Emisor: Ո՞ւմ -> Receptor: Ի՞նչ է ասում կոնկրետ -> Mensaje:',
          },
          {
            es: '¿En qué idioma o con qué signos? -> Código. ¿A través de qué medio físico viaja? -> Canal.',
            hy: 'Ո՞ր լեզվով կամ ինչ նշաններով -> Código: Ի՞նչ ֆիզիկական միջոցով է հասնում -> Canal:',
          },
        ],
        summary: [
          {
            es: 'La comunicación requiere 6 pilares: Emisor, Receptor, Mensaje, Código, Canal y Contexto.',
            hy: 'Հաղորդակցությունն ունի 6 սյուներ՝ Հաղորդող, Ստացող, Հաղորդագրություն, Կոդ, Կապուղի և Կոնտեքստ։',
          },
        ],
        examples: [],
      },
    ],
  },
  {
    id: 'bloque-8',
    number: 8,
    title: {
      es: 'Bloque 8: Las Categorías Gramaticales',
      hy: 'Թեմա 8․ Խոսքի մասեր (քերականական կարգեր)',
    },
    shortDesc: {
      es: 'Las 10 categorías completas: sustantivo, pronombre, adjetivo, verbo, adverbio, determinante, artículo, preposición, conjunción e interjección.',
      hy: 'Բոլոր 10 խոսքի մասերը․ գոյական, դերանուն, ածական, բայ, մակբայ, որոշիչ, հոդ, նախդիր, շաղկապ և ձայնարկություն։',
    },
    icon: 'Layers',
    sections: [
      {
        id: 'sustantivo-completo',
        blockId: 'bloque-8',
        title: {
          es: '1. El Sustantivo o Nombre y sus Clases',
          hy: '1. Գոյական (El Sustantivo) և նրա տեսակները',
        },
        badge: {
          es: 'Palabra variable',
          hy: 'Թեքվող խոսքի մաս',
        },
        definition: {
          es: 'El sustantivo es una categoría gramatical variable que designa seres vivos, personas, animales, cosas reales, conceptos abstractos, lugares o sentimientos. Tiene género (masculino o femenino) y número (singular o plural).',
          hy: 'Գոյականը (el sustantivo) փոփոխվող խոսքի մաս է, որն անվանում է կենդանի էակներ, մարդկանց, կենդանիների, իրական առարկաներ, վերացական հասկացություններ, վայրեր կամ զգացմունքներ։ Ունի սեռ (արական կամ իգական) և թիվ (եզակի կամ հոգնակի)։',
        },
        explanation: {
          es: 'En 1.º de ESO se clasifica cada sustantivo según parejas de criterios semánticos: común o propio; concreto o abstracto; individual o colectivo; contable o incontable.',
          hy: '1.º ESO դասարանում յուրաքանչյուր գոյական դասակարգվում է ըստ իմաստային զույգերի՝ հասարակ կամ հատուկ, թանձրացական (նյութական) կամ վերացական, անհատական կամ հավաքական, հաշվելի կամ անհաշվելի։',
        },
        classifications: [
          {
            name: { es: 'Comunes frente a Propios', hy: 'Հասարակ ընդդեմ Հատուկ' },
            description: {
              es: 'Común: nombra a cualquier ser de su clase en general (río, ciudad, perro). Propio: distingue a un ser específico individualizándolo con mayúscula (Ebro, Madrid, Toby).',
              hy: 'Հասարակ (común)՝ անվանում է իր տեսակի ցանկացած էակ ընդհանուր ձևով (գետ, քաղաք, շուն)։ Հատուկ (propio)՝ առանձնացնում է կոնկրետ էակի մեծատառով (Էբրո, Մադրիդ, Տոբի)։',
            },
            examples: [
              { es: 'montaña (común) / Pirineos (propio)', hy: 'լեռ (հասարակ) / Պիրենեյներ (հատուկ)' },
            ],
          },
          {
            name: { es: 'Concretos frente a Abstractos', hy: 'Թանձրացական (նյութական) ընդդեմ Վերացական' },
            description: {
              es: 'Concreto: se percibe por los sentidos (vista, oído, tacto, olfato, gusto): piedra, música, manzana. Abstracto: ideas, emociones o conceptos mentales: libertad, esperanza, amistad, tristeza.',
              hy: 'Թանձրացական (concreto)՝ ընկալվում է զգայարաններով (տեսողություն, լսողություն, շոշափելիք, հոտ, համ)՝ քար, երաժշտություն, խնձոր։ Վերացական (abstracto)՝ մտքեր, հույզեր, գաղափարներ՝ ազատություն, հույս, ընկերություն, տխրություն։',
            },
            examples: [
              { es: 'árbol (concreto) / sabiduría (abstracto)', hy: 'ծառ (թանձրացական) / իմաստություն (վերացական)' },
            ],
          },
          {
            name: { es: 'Individuales frente a Colectivos', hy: 'Անհատական ընդդեմ Հավաքական' },
            description: {
              es: 'Individual: en singular designa a un solo ser (abeja, oveja, soldado). Colectivo: en singular designa a un conjunto de seres (enjambre, rebaño, ejército).',
              hy: 'Անհատական (individual)՝ եզակի թվով անվանում է մեկ էակ (մեղու, ոչխար, զինվոր)։ Հավաքական (colectivo)՝ եզակի թվով անվանում է էակների ամբողջություն (պարս, հոտ, բանակ)։',
            },
            examples: [
              { es: 'pájaro (individual) / bandada (colectivo)', hy: 'թռչուն (անհատական) / երամ (հավաքական)' },
              { es: 'árbol (individual) / bosque (colectivo)', hy: 'ծառ (անհատական) / անտառ (հավաքական)' },
            ],
          },
          {
            name: { es: 'Contables frente a Incontables', hy: 'Հաշվելի ընդդեմ Անհաշվելի' },
            description: {
              es: 'Contable: se puede contar en unidades numéricas enteras (un libro, dos libros, tres libros). Incontable: materias, sustancias o fluidos que no se cuentan por unidades, sino que se pesan o miden (agua, arena, harina, azúcar).',
              hy: 'Հաշվելի (contable)՝ կարելի է հաշվել ամբողջական թվային միավորներով (մեկ գիրք, երկու գիրք)։ Անհաշվելի (incontable)՝ նյութեր, հեղուկներ, որոնք ոչ թե հատերով են հաշվվում, այլ կշռվում կամ չափվում են (ջուր, ավազ, ալյուր, շաքարավազ)։',
            },
            examples: [
              { es: 'bolígrafo (contable) / leche (incontable)', hy: 'գրիչ (հաշվելի) / կաթ (անհաշվելի)' },
            ],
          },
        ],
        stepByStep: [
          {
            step: 1,
            title: { es: 'Análisis morfológico completo de un sustantivo', hy: 'Գոյականի լրիվ ձևաբանական վերլուծություն' },
            action: { es: 'Aplica los 4 pares de clasificación más género y número:', hy: 'Կիրառիր 4 դասակարգման զույգերը, գումարած սեռն ու թիվը․' },
            example: {
              es: 'Palabra: "Jauría" -> Sustantivo común, femenino, singular, concreto, colectivo, contable (una jauría de perros cazadores).',
              hy: 'Բառ՝ «Jauría» (որսաշների ոհմակ) -> Գոյական հասարակ, իգական սեռ, եզակի թիվ, թանձրացական, հավաքական, հաշվելի։',
            },
          },
        ],
        detectionGuide: [
          {
            es: 'Si puedes ponerle delante "el", "la", "los", "las", es un sustantivo.',
            hy: 'Եթե կարող ես առաջը դնել «el», «la», «los», «las» որոշիչ հոդերը, ապա դա գոյական է։',
          },
        ],
        summary: [
          {
            es: 'Todo sustantivo se analiza en: común/propio, concreto/abstracto, individual/colectivo, contable/incontable, género y número.',
            hy: 'Յուրաքանչյուր գոյական վերլուծվում է՝ հասարակ/հատուկ, նյութական/վերացական, անհատական/հավաքական, հաշվելի/անհաշվելի, սեռ և թիվ։',
          },
        ],
        examples: [],
      },
      {
        id: 'determinante-vs-pronombre',
        blockId: 'bloque-8',
        title: {
          es: '2. Determinantes frente a Pronombres: ¡La gran distinción!',
          hy: '2. Որոշիչներն ընդդեմ Դերանունների․ մեծ տարբերակումը',
        },
        badge: {
          es: '¡Pregunta estrella de examen!',
          hy: 'Քննության կարևորագույն հարց',
        },
        definition: {
          es: 'Un DETERMINANTE siempre ACOMPAÑA a un sustantivo concordando con él en género y número para concretarlo o delimitarlo. Un PRONOMBRE SUSTITUYE por completo al sustantivo y realiza sus mismas funciones sintácticas (va solo, sin sustantivo a su lado).',
          hy: 'ՈՐՈՇԻՉԸ (determinante) միշտ ՈՒՂԵԿՑՈՒՄ Է գոյականին՝ համաձայնելով նրա հետ սեռով և թվով՝ այն կոնկրետացնելու կամ սահմանափակելու համար։ Իսկ ԴԵՐԱՆՈՒՆԸ (pronombre) լիովին ՓՈԽԱՐԻՆՈՒՄ Է գոյականին և կատարում նրա շարահյուսական դերը (գալիս է միայնակ՝ առանց կողքին գոյականի)։',
        },
        explanation: {
          es: 'Muchas palabras (este, ese, aquel, mi, mío, mucho, poco, qué) tienen formas casi iguales. La regla de oro infalible para 1.º de ESO es: ¿Va pegado a un sustantivo? -> Determinante. ¿Va solo o acompaña al verbo directamente? -> Pronombre.',
          hy: 'Շատ բառեր (este, ese, aquel, mucho, poco, qué) ունեն գրեթե նույնական ձևեր։ Ոսկե անսխալական կանոնը հետևյալն է․ կպա՞ծ է գոյականին -> Determinante (Որոշիչ)։ Գալիս է միայնա՞կ կամ անմիջապես բայի՞ կողքին -> Pronombre (Դերանուն)։',
        },
        classifications: [
          {
            name: { es: 'Clases de Pronombres', hy: 'Դերանունների տեսակները' },
            description: {
              es: 'Personales (yo, tú, él, me, te, se, nos, os), demostrativos (este, esa, aquello), posesivos (el mío, los tuyos), indefinidos (alguien, nadie, muchos, pocos), interrogativos (¿quién?, ¿cuál?).',
              hy: 'Անձնական (yo, tú, él, me, te, se...), ցուցական (este, esa, aquello...), ստացական (el mío, los tuyos...), անորոշ (alguien, nadie, muchos...), հարցական (¿quién?, ¿cuál?...)։',
            },
            examples: [
              { es: 'Ellos llegaron temprano. (Pronombre personal)', hy: 'Նրանք շուտ հասան։ (Անձնական դերանուն)' },
              { es: 'Nadie sabe la respuesta. (Pronombre indefinido)', hy: 'Ոչ ոք չգիտի պատասխանը։ (Անորոշ դերանուն)' },
            ],
          },
          {
            name: { es: 'Clases de Determinantes', hy: 'Որոշիչների տեսակները' },
            description: {
              es: 'Artículos (el, la, los, las; un, una), demostrativos (este libro), posesivos (mi casa), numerales (dos gatos, primer piso), indefinidos (muchos niños), interrogativos (¿cuántos años?).',
              hy: 'Հոդեր (el, la, los, las; un, una...), ցուցական (este libro), ստացական (mi casa), թվական (dos gatos, primer piso), անորոշ (muchos niños), հարցական (¿cuántos años?)։',
            },
            examples: [
              { es: 'Mi mochila azul. ("Mi" es determinante posesivo)', hy: 'Իմ կապույտ պայուսակը («Mi»-ն ստացական որոշիչ է, որովհետև ուղեկցում է mochila-ին)' },
            ],
          },
        ],
        comparisons: [
          {
            title: {
              es: 'Comparación directa de oraciones espejo',
              hy: 'Հայելային նախադասությունների ուղիղ համեմատություն',
            },
            itemA: { es: 'Determinante (Acompaña)', hy: 'Որոշիչ (Ուղեկցում է)' },
            itemB: { es: 'Pronombre (Sustituye)', hy: 'Դերանուն (Փոխարինում է)' },
            differences: [
              {
                aspect: { es: 'Demostrativos', hy: 'Ցուցական' },
                valA: { es: 'ESTE libro me gusta. ("Este" va con "libro")', hy: 'ԱՅՍ գիրքն ինձ դուր է գալիս («Este»-ն գոյականի հետ է)։' },
                valB: { es: 'ESTE me gusta más. ("Este" va solo)', hy: 'ՍԱ ինձ ավելի է դուր գալիս («Este»-ն միայնակ է, փոխարինում է գրքին)։' },
              },
              {
                aspect: { es: 'Indefinidos', hy: 'Անորոշ' },
                valA: { es: 'Comí MUCHAS manzanas. ("Muchas" va con "manzanas")', hy: 'ՇԱՏ խնձորներ կերա («Muchas»-ը խնձորի հետ է)։' },
                valB: { es: 'Comí MUCHAS. ("Muchas" va solo)', hy: 'ՇԱՏ կերա («Muchas»-ը միայնակ է)։' },
              },
              {
                aspect: { es: 'Posesivos', hy: 'Ստացական' },
                valA: { es: 'Dame TU bolígrafo.', hy: 'Տո՛ւր ՔՈ գրիչը։' },
                valB: { es: 'El TUYO está sobre la mesa.', hy: 'ՔՈՆԸ սեղանի վրա է։' },
              },
            ],
          },
        ],
        detectionGuide: [
          {
            es: 'Paso 1: Mira la palabra que sigue. ¿Es un sustantivo? -> Es DETERMINANTE.',
            hy: 'Քայլ 1․ Նայիր հաջորդող բառին։ Գոյակա՞ն է -> ՈՐՈՇԻՉ Է (Determinante)։',
          },
          {
            es: 'Paso 2: ¿La palabra va al lado de un verbo o sola? -> Es PRONOMBRE.',
            hy: 'Քայլ 2․ Բառը բայի՞ կողքին է կամ միայնա՞կ -> ԴԵՐԱՆՈՒՆ Է (Pronombre)։',
          },
        ],
        summary: [
          {
            es: 'El determinante acompaña al sustantivo; el pronombre lo sustituye.',
            hy: 'Որոշիչը ուղեկցում է գոյականին, դերանունը՝ փոխարինում նրան։',
          },
        ],
        examples: [],
      },
      {
        id: 'adjetivo-adverbio-comparativa',
        blockId: 'bloque-8',
        title: {
          es: '3. El Adjetivo frente al Adverbio: ¿Variable o Invariable?',
          hy: '3. Ածականն ընդդեմ Մակբայի․ թեքվո՞ղ, թե՞ անփոփոխ',
        },
        badge: {
          es: 'Distinción clave',
          hy: 'Հիմնական տարբերակում',
        },
        definition: {
          es: 'El ADJETIVO es una palabra VARIABLE (cambia de género y número) que acompaña al sustantivo para expresar una cualidad o estado. El ADVERBIO es una palabra INVARIABLE (nunca tiene femenino ni plural) que modifica a un verbo, a un adjetivo o a otro adverbio indicando circunstancias.',
          hy: 'ԱԾԱԿԱՆԸ (el adjetivo) ԹԵՔՎՈՂ (փոփոխվող) խոսքի մաս է (փոխում է սեռը և թիվը), որն ուղեկցում է գոյականին՝ արտահայտելով որակ կամ վիճակ։ ՄԱԿԲԱՅԸ (el adverbio) ԱՆՓՈՓՈԽ բառ է (երբեք չունի իգական սեռ կամ հոգնակի թիվ), որը լրացնում է բային, ածականին կամ այլ մակբայի՝ ցույց տալով հանգամանքներ։',
        },
        explanation: {
          es: '¡Cuidado con palabras como "rápido", "claro" o "mucho"! Si cambian en plural con el nombre son adjetivos ("trenes rápidos"). Si quedan fijas modificando a la acción del verbo son adverbios ("los trenes corren rápido").',
          hy: 'Ուշադրությո՛ւն «rápido», «claro» կամ «mucho» բառերի հետ։ Եթե գոյականի հետ դառնում են հոգնակի, ապա ածական են («trenes rápidos» - արագ գնացքներ)։ Իսկ եթե մնում են անփոփոխ՝ լրացնելով բայի գործողությանը, ապա մակբայ են («los trenes corren rápido» - գնացքները արագ են ընթանում)։',
        },
        classifications: [
          {
            name: { es: 'Grados del Adjetivo', hy: 'Ածականի համեմատության աստիճանները' },
            description: {
              es: 'Positivo (alto), Comparativo (de superioridad: más alto que; de igualdad: tan alto como; de inferioridad: menos alto que), Superlativo (absoluto: altísimo / muy alto; relativo: el más alto de la clase).',
              hy: 'Դրական (alto), Համեմատական (գերազանցության՝ más alto que; հավասարության՝ tan alto como; նվազության՝ menos alto que), Գերադրական (բացարձակ՝ altísimo / muy alto; հարաբերական՝ el más alto de la clase)։',
            },
            examples: [
              { es: 'Esta montaña es altísima. (Superlativo absoluto)', hy: 'Այս լեռը չափազանց բարձր է։' },
            ],
          },
          {
            name: { es: 'Clases de Adverbios', hy: 'Մակբայների տեսակները' },
            description: {
              es: 'Lugar (aquí, allí, cerca, lejos), Tiempo (hoy, ayer, mañana, pronto, tarde), Modo (bien, mal, rápidamente, despacio), Cantidad (mucho, poco, muy, bastante), Afirmación (sí, también), Negación (no, jamás, nunca), Duda (quizás, acaso, tal vez).',
              hy: 'Տեղի (aquí, allí...), Ժամանակի (hoy, ayer, mañana...), Ձևի (bien, mal, rápidamente...), Քանակի (mucho, poco, muy...), Հաստատման (sí, también), Ժխտման (no, jamás, nunca), Կասկածի (quizás, acaso, tal vez)։',
            },
            examples: [
              { es: 'Ella canta muy bien. ("Muy" adverbio de cantidad, "bien" adverbio de modo)', hy: 'Նա շատ լավ է երգում («Muy»՝ քանակի մակբայ, «bien»՝ ձևի մակբայ)։' },
            ],
          },
        ],
        comparisons: [
          {
            title: {
              es: '¿Cómo distinguir Adjetivo y Adverbio?',
              hy: 'Ինչպե՞ս տարբերակել Ածականը և Մակբայը',
            },
            itemA: { es: 'Adjetivo (Variable)', hy: 'Ածական (Փոփոխվող)' },
            itemB: { es: 'Adverbio (Invariable)', hy: 'Մակբայ (Անփոփոխ)' },
            differences: [
              {
                aspect: { es: '¿Cambia de forma?', hy: 'Փոխո՞ւմ է ձևը' },
                valA: { es: 'SÍ: concuerda con el sustantivo (chico rápido / chica rápida / chicas rápidas).', hy: 'ԱՅՈ․ համաձայնում է գոյականի հետ սեռով և թվով (chica rápida / chicas rápidas)։' },
                valB: { es: 'NO: nunca cambia (Ellas corren rápido; nunca decimos *rápidas).', hy: 'ՈՉ․ երբեք չի փոխվում (Ellas corren rápido; երբեք չենք ասում *rápidas)։' },
              },
              {
                aspect: { es: '¿A quién acompaña?', hy: 'Ո՞ւմ է լրացնում' },
                valA: { es: 'A un sustantivo.', hy: 'Գոյականին։' },
                valB: { es: 'A un verbo, un adjetivo u otro adverbio.', hy: 'Բային, ածականին կամ այլ մակբայի։' },
              },
            ],
          },
        ],
        detectionGuide: [
          {
            es: 'Prueba a cambiar el sujeto a femenino plural: si la palabra cambia con él, es Adjetivo; si no se altera, es Adverbio.',
            hy: 'Փորձիր ենթական դարձնել իգական հոգնակի․ եթե բառը նրա հետ փոխվում է՝ Ածական է, իսկ եթե մնում է անփոփոխ՝ Մակբայ է։',
          },
        ],
        summary: [
          {
            es: 'El adjetivo concuerda con el sustantivo. El adverbio es invariable y modifica a verbos o adjetivos.',
            hy: 'Ածականը համաձայնում է գոյականի հետ։ Մակբայն անփոփոխ է և լրացնում է բայերին կամ ածականներին։',
          },
        ],
        examples: [],
      },
      {
        id: 'verbo-preposicion-conjuncion-interjeccion',
        blockId: 'bloque-8',
        title: {
          es: '4. El Verbo, Preposición, Conjunción e Interjección',
          hy: '4. Բայ, Նախդիր, Շաղկապ և Ձայնարկություն',
        },
        badge: {
          es: 'Palabras clave de unión y acción',
          hy: 'Գործողության և կապի հիմնական բառեր',
        },
        definition: {
          es: 'El VERBO expresa acciones, procesos o estados (cantar, vivir, pensar). La PREPOSICIÓN une palabras subordinando una a otra. La CONJUNCIÓN enlaza palabras u oraciones. La INTERJECCIÓN expresa sentimientos súbitos, llamadas o impresiones.',
          hy: 'ԲԱՅԸ (el verbo) արտահայտում է գործողություն, գործընթաց կամ վիճակ (երգել, ապրել, մտածել)։ ՆԱԽԴԻՐԸ (la preposición) կապում է բառերը՝ մեկը մյուսին ստորադասելով։ ՇԱՂԿԱՊԸ (la conjunción) միացնում է բառեր կամ նախադասություններ։ ՁԱՅՆԱՐԿՈՒԹՅՈՒՆԸ (la interjección) արտահայտում է հանկարծակի զգացմունքներ, կանչեր կամ տպավորություններ։',
        },
        explanation: {
          es: 'Las preposiciones en español son una lista cerrada que se debe memorizar en 1.º de ESO: a, ante, bajo, cabe, con, contra, de, desde, durante, en, entre, hacia, hasta, mediante, para, por, según, sin, so, sobre, tras, versus y vía.',
          hy: 'Իսպաներենի նախդիրները կազմում են փակ ցուցակ, որը 1.º ESO-ում անգիր պետք է իմանալ․ a, ante, bajo, cabe, con, contra, de, desde, durante, en, entre, hacia, hasta, mediante, para, por, según, sin, so, sobre, tras, versus և vía։',
        },
        classifications: [
          {
            name: { es: 'El Verbo y sus Modos', hy: 'Բայը և նրա եղանակները' },
            description: {
              es: 'Modo Indicativo (hechos reales: canto, canté), Modo Subjuntivo (deseos, dudas, posibilidades: cante, cantara), Modo Imperativo (órdenes: canta, cantad). Formas no personales: Infinitivo (-ar, -er, -ir), Gerundio (-ando, -iendo), Participio (-ado, -ido).',
              hy: 'Սահմանական եղանակ (իրական փաստեր՝ canto, canté), Ըղձական եղանակ (ցանկություններ, կասկածներ՝ cante, cantara), Հրամայական եղանակ (հրամաններ՝ canta, cantad)։ Անդեմ ձևեր՝ անորոշ դերբայ (Infinitivo), համակատար (Gerundio), հարակատար (Participio)։',
            },
            examples: [
              { es: 'Habíamos estudiado (pretérito pluscuamperfecto de indicativo).', hy: 'Մենք սովորել էինք (indicativo-ի pluscuamperfecto ժամանակ)։' },
            ],
          },
          {
            name: { es: 'Conjunciones Coordinantes y Subordinantes', hy: 'Համադասական և Ստորադասական շաղկապներ' },
            description: {
              es: 'Copulativas (y, e, ni), Disyuntivas (o, u), Adversativas (pero, sino), Causales (porque, puesto que), Condicionales (si).',
              hy: 'Միավորող (y, e, ni), Տրոհական (o, u), Հակադրական (pero, sino), Պատճառական (porque, puesto que), Պայմանական (si)։',
            },
            examples: [
              { es: 'Estudió mucho, PERO no aprobó el examen. (Adversativa)', hy: 'Շատ սովորեց, ԲԱՅՑ չհանձնեց քննությունը (հակադրական)։' },
            ],
          },
          {
            name: { es: 'Interjecciones Propias e Impropias', hy: 'Բուն և Փոխառյալ ձայնարկություններ' },
            description: {
              es: 'Propias: solo funcionan como interjección (¡ah!, ¡oh!, ¡ay!, ¡hola!, ¡ole!). Impropias: palabras de otra categoría usadas como interjección (¡vaya!, ¡cuidado!, ¡bravo!, ¡fuego!).',
              hy: 'Բուն (propias)՝ միայն որպես ձայնարկություն են գործում (¡ah!, ¡oh!, ¡ay!, ¡hola!)։ Փոխառյալ (impropias)՝ այլ խոսքի մասից անցած (¡cuidado!՝ զգո՜ւյշ, ¡bravo!՝ կեցցե՜ս, ¡fuego!՝ կրա՜կ)։',
            },
            examples: [
              { es: '¡Ay! Me he pinchado el dedo con la espina.', hy: 'Վա՜յ։ Մատս փշով ծակեցի։' },
            ],
          },
        ],
        detectionGuide: [
          {
            es: 'Si expresa tiempo (presente, pasado, futuro) y persona (yo, tú, él), es un Verbo.',
            hy: 'Եթե ցույց է տալիս ժամանակ (ներկա, անցյալ, ապառնի) և դեմք (ես, դու, նա), ապա Բայ է։',
          },
          {
            es: 'Aprende la cantinela de las 23 preposiciones para no confundirlas nunca.',
            hy: 'Սովորիր 23 նախդիրների ցանկը՝ դրանք երբեք չշփոթելու համար։',
          },
        ],
        summary: [
          {
            es: 'Las 10 categorías gramaticales cubren todas las palabras del idioma español: variables (sustantivo, adjetivo, determinante, pronombre, verbo) e invariables (adverbio, preposición, conjunción, interjección).',
            hy: '10 խոսքի մասերն ընդգրկում են իսպաներենի բոլոր բառերը՝ թեքվող (գոյական, ածական, որոշիչ, դերանուն, բայ) և անփոփոխ (մակբայ, նախդիր, շաղկապ, ձայնարկություն)։',
          },
        ],
        examples: [],
      },
    ],
  },
  {
    id: 'bloque-9',
    number: 9,
    title: {
      es: 'Bloque 9: Vocabulario Esencial del Material',
      hy: 'Թեմա 9․ Ուսումնական նյութի հիմնական բառապաշարը',
    },
    shortDesc: {
      es: 'Términos clave y expresiones: recuperar, comprender, haber/hay, protagonista, distraer, un favor, date, dar consejos, etc.',
      hy: 'Հիմնական եզրույթներ և արտահայտություններ․ recuperar, comprender, haber/hay, protagonista, distraer, un favor, date, dar consejos և այլն։',
    },
    icon: 'Sparkle',
    sections: [
      {
        id: 'vocabulario-clave-expresiones',
        blockId: 'bloque-9',
        title: {
          es: 'Palabras y Expresiones Clave del Curso de 1.º de ESO',
          hy: '1.º ESO դասընթացի հիմնական բառերը և արտահայտությունները',
        },
        badge: {
          es: 'Léxico y uso comunicativo',
          hy: 'Բառապաշար և գործնական կիրառություն',
        },
        definition: {
          es: 'El dominio del vocabulario académico y cotidiano es imprescindible para redactar correctamente, responder a preguntas de examen y comunicarse con soltura en el ámbito escolar español.',
          hy: 'Ակադեմիական և առօրյա բառապաշարի տիրապետումն անհրաժեշտ է ճիշտ շարադրելու, քննական հարցերին պատասխանելու և իսպանական դպրոցական միջավայրում ազատ հաղորդակցվելու համար։',
        },
        explanation: {
          es: 'En este bloque desglosamos las palabras y giros idiomáticos más recurrentes en las actividades y lecturas de 1.º de ESO: desde verbos de recuperación y procesos mentales hasta fórmulas para aconsejar ("yo que tú...", "lo mejor es...").',
          hy: 'Այս թեմայում մանրամասն վերլուծում ենք 1.º ESO-ի առաջադրանքներում և ընթերցանության մեջ ամենահաճախ հանդիպող բառերն ու դարձվածքները՝ վերականգնողական և մտավոր բայերից մինչև խորհուրդ տալու բանաձևեր («yo que tú...», «lo mejor es...»)։',
        },
        classifications: [
          {
            name: { es: 'Fórmulas para dar consejos', hy: 'Խորհուրդ տալու բանաձևեր' },
            description: {
              es: 'Estructuras habituales para orientar o sugerir a un compañero qué hacer.',
              hy: 'Սովորական կառույցներ՝ ընկերոջը խորհուրդ տալու կամ առաջարկելու, թե ինչ անի։',
            },
            examples: [
              { es: 'Yo que tú + condicional: "Yo que tú, estudiaría más para Lengua".', hy: 'Ես քո տեղը լինեի + պայմանական․ «Ես քո տեղը լինեի, ավելի շատ կսովորեի իսպաներենի համար»։' },
              { es: 'Lo mejor es + infinitivo: "Lo mejor es repasar los apuntes cada tarde".', hy: 'Ամենալավն այն է, որ + անորոշ դերբայ․ «Ամենալավն այն է՝ ամեն երեկո կրկնել գրառումները»։' },
              { es: 'Es mejor que + subjuntivo: "Es mejor que descanses bien antes del examen".', hy: 'Ավելի լավ է, որ + ըղձական եղանակ․ «Ավելի լավ է՝ լավ հանգստանաս քննությունից առաջ»։' },
            ],
          },
          {
            name: { es: 'Usos especiales de verbos', hy: 'Բայերի հատուկ կիրառություններ' },
            description: {
              es: 'Distinciones importantes: "haber" como impersonal "hay" para existencia, frente a "estar" para localización.',
              hy: 'Կարևոր տարբերակումներ․ «haber» որպես անդեմ «hay» գոյության համար, ընդդեմ «estar»-ի՝ գտնվելու վայրի համար։',
            },
            examples: [
              { es: 'Hay tres libros en la mesa (existencia) / Los libros están en la mesa (ubicación).', hy: 'Սեղանին երեք գիրք կա (գոյություն) / Գրքերը սեղանի վրա են (տեղադրություն)։' },
              { es: 'Recuperar: volver a tener algo que se perdió, o aprobar una asignatura pendiente ("recuperar la evaluación").', hy: 'Recuperar՝ վերականգնել կորցրածը, կամ հանձնել կիսամյակի պարտքը («recuperar la evaluación»)։' },
              { es: 'Darse prisa ("¡date prisa!") vs Date cuenta ("¡date cuenta de lo que haces!").', hy: 'Darse prisa («շտապի՛ր») ընդդեմ Date cuenta («գիտակցի՛ր, ուշադրությո՛ւն դարձրու, թե ինչ ես անում»)։' },
            ],
          },
        ],
        detectionGuide: [
          {
            es: 'Recuerda: después de "Es mejor que..." siempre usamos SUBJUNTIVO ("que vengas", "que leas").',
            hy: 'Հիշիր․ «Es mejor que...»-ից հետո միշտ օգտագործում ենք SUBJUNTIVO (ըղձական եղանակ՝ «que vengas», «que leas»)։',
          },
          {
            es: 'Después de "Lo mejor es..." usamos INFINITIVO ("dormir", "estudiar").',
            hy: 'Իսկ «Lo mejor es...»-ից հետո օգտագործում ենք INFINITIVO (անորոշ դերբայ՝ «dormir», «estudiar»)։',
          },
        ],
        summary: [
          {
            es: 'El léxico adecuado permite comprender con precisión las preguntas de los enunciados de examen.',
            hy: 'Ճիշտ բառապաշարը թույլ է տալիս ճշգրտորեն հասկանալ քննական առաջադրանքների պայմանները։',
          },
        ],
        examples: [],
      },
    ],
  },
];
