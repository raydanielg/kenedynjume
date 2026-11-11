export type BlogBlock =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }

export interface BlogPost {
  slug: string
  title: string
  description: string
  datePublished: string
  dateModified?: string
  readTime: string
  keywords: string[]
  content: BlogBlock[]
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-handle-customer-objections",
    title: "Jinsi ya Kushughulikia Customer Objections za Wateja",
    description:
      "Mbinu za vitendo za kujibu objections za wateja — kuelewa sababu halisi, kubaki na heshima, na kugeuza pingamizi kuwa mauzo.",
    datePublished: "2025-01-15",
    readTime: "5 min",
    keywords: [
      "how to handle customer objections",
      "sales objection handling",
      "jinsi ya kushughulikia pingamizi za wateja",
    ],
    content: [
      {
        type: "p",
        text: "Kila muuzaji anakutana na objections. 'Bei iko juu.' 'Nitakurudia.' 'Ngoja nikafikirie.' Tofauti kati ya muuzaji anayefunga deals na anayepoteza wateja si ukosefu wa objections — ni jinsi anavyozishughulikia.",
      },
      {
        type: "h2",
        text: "Objection si kukataliwa — ni swali lisilojibiwa",
      },
      {
        type: "p",
        text: "Wauzaji wengi hupokea objection kama 'hapana'. Ukweli ni kwamba objection mara nyingi ni ishara ya mteja anavutiwa lakini ana swali au wasiwasi fulani. Akikwambia bei iko juu, anamaanisha bado hajaona thamani inayolingana na bei. Hiyo ni nafasi, si kikwazo.",
      },
      {
        type: "h2",
        text: "Hatua nne za kushughulikia objection yoyote",
      },
      {
        type: "list",
        items: [
          "Sikiliza hadi mwisho — usimkate mteja. Objection kamili ina taarifa unayohitaji.",
          "Thibitisha hisia zake — 'Naelewa kabisa unachomaanisha' huondoa ulinzi.",
          "Chunguza sababu halisi — uliza 'ni kitu gani hasa kinachokufanya useme hivyo?'",
          "Jibu kwa ushahidi — tumia mfano, matokeo au faida inayolingana na wasiwasi wake.",
        ],
      },
      {
        type: "h2",
        text: "Kosa kubwa: kujibu haraka",
      },
      {
        type: "p",
        text: "Wauzaji wengi huruka kujibu objection mara moja — na hujiongea wenyewe kwenye kupoteza deal. Mteja anaposikia jibu la haraka, hana uhakika kuwa umeelewa wasiwasi wake. Pumzika, uliza swali moja la kuchunguza, kisha jibu.",
      },
      {
        type: "p",
        text: "Kitabu cha 20 Objections That Cost You Sales kina mifano halisi ya objections 20 zinazotokea mara kwa mara kwenye mauzo ya kila siku — na majibu ya kila moja.",
      },
    ],
  },
  {
    slug: "how-to-respond-when-a-customer-says-your-price-is-too-high",
    title: "Mteja Akisema Bei Yako Iko Juu, Unamjibu Vipi?",
    description:
      "Jinsi ya kujibu 'bei yenu iko juu' bila kupunguza bei — mbinu za kuonyesha thamani na kufunga deal kwa bei yako.",
    datePublished: "2025-01-15",
    readTime: "5 min",
    keywords: [
      "how to respond when a customer says your price is too high",
      "price objection",
      "jinsi ya kujibu wateja wanaosema bei ni kubwa",
    ],
    content: [
      {
        type: "p",
        text: "'Bei yenu iko juu' ndiyo objection maarufu zaidi duniani. Na ndiyo objection inayopoteza mauzo mengi zaidi — si kwa sababu ni ngumu, bali kwa sababu wauzaji wengi wanaitikia vibaya: wanapunguza bei au wanakataa.",
      },
      {
        type: "h2",
        text: "Usipunguze bei — ongeza thamani inayoonekana",
      },
      {
        type: "p",
        text: "Mteja akisema bei iko juu, anaunganisha bei na thamani. Kazi yako si kupunguza bei, bali kuonyesha thamani anayopata. Ukishusha bei mara moja, unathibitisha kuwa bei yako haikuwa ya kweli — na unapoteza uaminifu na faida.",
      },
      {
        type: "h2",
        text: "Maswali yanayobadilisha mazungumzo",
      },
      {
        type: "list",
        items: [
          "'Iko juu ikilinganishwa na nini?' — hubainisha kama analinganisha kwa usahihi.",
          "'Ni sehemu gani ya bei inayokusumbua zaidi?' — hupata wasiwasi halisi.",
          "'Ikiwa tuweza kutatua tatizo X, bei ingekuwa tatizo?' — hutenganaza bei na thamani.",
        ],
      },
      {
        type: "h2",
        text: "Onyesha gharama ya kutofanya uamuzi",
      },
      {
        type: "p",
        text: "Wateja wengi hufikiria gharama ya kununua — wachache hufikiria gharama ya kutokununua. Ikiwa bidhaa yako huokoa muda, huongeza mapato au kuondoa tatizo, weka hilo wazi kwa namba. 'Ikiwa hii itakuokolea masaa 5 kwa wiki, kwa mwaka ni masaa 260 — bei yake ni ndogo ikilinganishwa.'",
      },
      {
        type: "p",
        text: "Hii ni moja tu ya objections 20 zinazofundishwa ndani ya kitabu — na kila moja ina mbinu tofauti.",
      },
    ],
  },
  {
    slug: "how-to-handle-customers-who-say-i-will-think-about-it",
    title: "Kushughulikia Wateja Wanaosema 'Ngoja Nikafikirie'",
    description:
      "Mteja akisema 'nitafikiria' mara nyingi hana nia ya kurudi. Jifunze kufichua objection halisi na kusonga deal mbele.",
    datePublished: "2025-01-15",
    readTime: "4 min",
    keywords: [
      "how to handle customers who say I will think about it",
      "overcome hesitation",
      "ngoja nikafikirie objection",
    ],
    content: [
      {
        type: "p",
        text: "'Ngoja nikafikirie' ni objection ya kupendeza — inasikika kama nafuu, lakini mara nyingi ni njia ya mteja kukwepa kusema 'hapana' au kuficha wasiwasi fulani. Ukimruhusu aende bila kufahamu sababu halisi, hatarudi.",
      },
      {
        type: "h2",
        text: "Fichua kile 'kufikiria' kinachomaanisha",
      },
      {
        type: "p",
        text: "Badala ya kukubali na kumwachilia, uliza kwa heshima: 'Ni vyema kabisa. Ili niweze kukusaidia vizuri — ni sehemu gani unayotaka kuifikiria zaidi? Ni bei, ni muda, au kuna kitu kingine?' Swali hili humkurupisha mteja kusema ukweli.",
      },
      {
        type: "h2",
        text: "Matokeo ya kawaida",
      },
      {
        type: "list",
        items: [
          "Mteja anakiri objection halisi — na sasa unaweza kujibu kitu halisi.",
          "Mteja anaonyesha kweli anahitaji muda — weka tarehe mahususi ya kufuatilia.",
          "Mteja anasema 'hapana' — bora kujua sasa kuliko kufuatilia miezi.",
        ],
      },
      {
        type: "h2",
        text: "Ukaamua kumpa muda — weka mipaka",
      },
      {
        type: "p",
        text: "Ikiwa kweli anahitaji kufikiria, kubali — lakini acha na tarehe: 'Sawa, nitakupigia Alhamisi saa nne mchana — hilo linafaa kwako?' Follow-up isiyo na tarehe si follow-up; ni matumaini.",
      },
    ],
  },
  {
    slug: "how-to-close-more-sales",
    title: "Jinsi ya Kufunga Mauzo Mengi Zaidi (Close More Sales)",
    description:
      "Kwa nini unapoteza deals mwishoni — na mbinu za kuomba uamuzi bila kuonekana kumhimiza mteja.",
    datePublished: "2025-01-15",
    readTime: "5 min",
    keywords: [
      "how to close more sales",
      "closing techniques",
      "namna ya kufunga mauzo",
    ],
    content: [
      {
        type: "p",
        text: "Wauzaji wengi wanafanya kila kitu vizuri — wanajenga mahusiano, wanaeleza bidhaa, wanashughulikia objections — kisha wanapoteza deal hatua ya mwisho kwa sababu hawakuomba uamuzi.",
      },
      {
        type: "h2",
        text: "Kufunga deal si kulazimisha — ni kuongoza uamuzi",
      },
      {
        type: "p",
        text: "Closing haianzi mwishoni mwa mazungumzo. Inaanzia mwanzoni: ukiwa umeelewa mahitaji ya mteja na umeonyesha thamani, kuomba uamuzi ni hatua ya asili. Tatizo ni kuwa wauzaji wengi huogopa kuonekana 'pushy' — na mteja anabaki bila mwongozo.",
      },
      {
        type: "h2",
        text: "Mbinu tatu za kufunga deal",
      },
      {
        type: "list",
        items: [
          "Assumptive close — 'Tutakupatia lini nakala yako?' Unachukulia uamuzi umefanywa na kuongoza hatua inayofuata.",
          "Choice close — 'Ungependa malipo ya simu au cash?' Unampa chaguo kati ya namna za kununua, si kununua au la.",
          "Summary close — rudia faida zote alizokubali, kisha uliza: 'Haya, tuanze?'",
        ],
      },
      {
        type: "h2",
        text: "Ishara za kununua zinazokosekana na wengi",
      },
      {
        type: "p",
        text: "Mteja anapouliza 'inapatikana lini?' au 'malipo ni vipi?' — amefunga deal akilini. Hizo ni buying signals. Unapozisikia, acha kuuza na anza kufunga: 'Vyema — tunaweza kukupatia kesho. Nitumie taarifa zako WhatsApp.'",
      },
    ],
  },
  {
    slug: "sales-techniques-for-business-owners",
    title: "Mbinu za Mauzo kwa Wamiliki wa Biashara",
    description:
      "Wewe ndiye muuzaji mkuu wa biashara yako. Mbinu za vitendo za kuuza bila timu ya sales — kwa entrepreneurs na business owners.",
    datePublished: "2025-01-15",
    readTime: "5 min",
    keywords: [
      "sales techniques",
      "sales for business owners",
      "mbinu za kuongeza mauzo",
      "jinsi ya kupata wateja wengi",
    ],
    content: [
      {
        type: "p",
        text: "Ukimiliki biashara, hauna budi kuuza — wewe ndiye muuzaji wa kwanza. Lakini wamiliki wengi wa biashara hawakufundishwa mauzo; wanajua bidhaa yao, si mchakato wa kuuza.",
      },
      {
        type: "h2",
        text: "Uza suluhisho, si bidhaa",
      },
      {
        type: "p",
        text: "Mteja hanunui bidhaa — ananunua matokeo. Badala ya kueleza 'bidhaa yangu ina X, Y, Z', anza na tatizo lake: 'Wateja wengi wanaofika hapa wana shida ya...' Mteja anaposikia tatizo lake likielezwa, anakusikiliza.",
      },
      {
        type: "h2",
        text: "Mbinu tano za kila siku",
      },
      {
        type: "list",
        items: [
          "Uliza maswali kabla ya kueleza — mteja aeleze tatizo lake kwanza.",
          "Tumia lugha ya mteja — maneno yake mwenyewe kurudia matatizo ni uhamasishaji bora.",
          "Weka bei kwa ujasiri — bei inayosemwa kwa shaka inaonekana kubwa.",
          "Fuata wateja wa zamani — mauzo mapya ya rahisi zaidi yanatoka kwa wateja uliowahi kuwatumikia.",
          "Omba rufaa — kila mteja aliyeridhika anajua watu wengine watatu wenye tatizo kama lake.",
        ],
      },
      {
        type: "h2",
        text: "Objections hazikwepi hata biashara ndogo",
      },
      {
        type: "p",
        text: "'Nitafikiria', 'bei iko juu', 'nina supplier' — hizo zinakutana wewe pia. Muuzaji wa biashara ndiye anayepoteza zaidi kwa kukosa majibu, kwa sababu kila deal ni muhimu zaidi. Kuandaliwa kwa objections ni sehemu ya kazi yako ya kila siku.",
      },
    ],
  },
  {
    slug: "how-to-handle-competitor-objections",
    title: "Kushughulikia 'Tuna Supplier Mwingine' — Competitor Objections",
    description:
      "Mteja anapokuambia ana supplier mwingine, huna haja ya kumvunja. Hivi ndivyo unavyobadilisha mazungumzo kwa heshima.",
    datePublished: "2025-01-15",
    readTime: "4 min",
    keywords: [
      "how to handle competitor objections",
      "competitor objection",
      "tuna supplier mwingine",
    ],
    content: [
      {
        type: "p",
        text: "'Tunafanya kazi na supplier mwingine' inasikika kama mlango umefungwa — lakini si hivyo. Mteja mwenye supplier ana uzoefu wa kununua, anajua tatizo, na anaweza kulinganisha. Huyo ni prospect bora zaidi kuliko anayeanza.",
      },
      {
        type: "h2",
        text: "Usimvunje mshindani",
      },
      {
        type: "p",
        text: "Kosa la kwanza ni kuzingua supplier mwingine — humfanya mteja alinde uamuzi wake wa zamani. Badala yake, mheshimu: 'Ni vyema — naona unafanya kazi na kampuni imara.' Kisha uliza kitu ambacho mshindani hawezi kukijibu.",
      },
      {
        type: "h2",
        text: "Maswali ya kuvunja ulinzi",
      },
      {
        type: "list",
        items: [
          "'Ni kitu gani unachothamani zaidi kuhusu supplier wako wa sasa?' — kwanza sikiliza nguvu zake.",
          "'Kama kungekuwa na kitu kimoja ungependa kuboresha kwao, kingekuwa nini?' — hufungua pengo la nafasi yako.",
          "'Je, ungekubali kulinganisha huduma — bila kujipanga kubadili?' — hupunguza shinikizo.",
        ],
      },
      {
        type: "h2",
        text: "Uza tofauti yako, si udhafu wao",
      },
      {
        type: "p",
        text: "Lengo si kuonyesha kuwa supplier wao ni mbaya — ni kuonyesha kuwa wewe ni tofauti kwa njia inayohusiana na mahitaji yake. Mteja anapoona tofauti yenye thamani, yeye mwenyewe ataamua kubadili — bila kushinikizwa.",
      },
    ],
  },
  {
    slug: "sales-training-in-tanzania",
    title: "Sales Training Tanzania: Kwa Nini Wauzaji Wanahitaji Objection Handling",
    description:
      "Soko la Tanzania lina lugha yake ya mauzo. Kwa nini mafunzo ya objection handling ni uwekezaji mkuu kwa wauzaji na biashara.",
    datePublished: "2025-01-15",
    readTime: "4 min",
    keywords: [
      "sales training Tanzania",
      "mafunzo ya mauzo Tanzania",
      "sales trainer Tanzania",
      "mbinu za mauzo",
    ],
    content: [
      {
        type: "p",
        text: "Soko la Tanzania ni la mahusiano. Mteja hanunui bidhaa pekee — ananunua uaminifu wako. Na ndiyo maana objection handling ni ujuzi muhimu kuliko script yoyote: mteja anapokwepa, anakuona unavyojibu — ndipo uaminifu unapojengwa au kuvunjika.",
      },
      {
        type: "h2",
        text: "Objections za soko letu",
      },
      {
        type: "p",
        text: "'Bei yenu iko juu', 'nitakurudia', 'ngoja niongee na mume wangu' — hizi ni objections za kila siku za mauzo ya Tanzania. Zinahitaji majibu yanayofaa utamaduni wetu: heshima, uvumilivu, na uelewa wa jinsi watu wanavyoamua.",
      },
      {
        type: "h2",
        text: "Kwa nini mafunzo ya sales yanafanya kazi",
      },
      {
        type: "list",
        items: [
          "Objections hubadilika kutoka miadiyoni kuwa maswali ya kawaida — unaandaliwa.",
          "Timu nzima inaongea lugha moja ya mauzo — matokeo yanakuwa ya kudumu.",
          "Wauzaji hupata ujasiri — na ujasiri ndicho mteja anachonunua kwanza.",
        ],
      },
      {
        type: "h2",
        text: "Anza na kitabu",
      },
      {
        type: "p",
        text: "Kabla ya mafunzo makubwa, anza na misingi: 20 Objections That Cost You Sales inakusanya objections 20 za soko letu na majibu yake — kwa TSh 30,000. Kisha Kenedy Njume, Sales Trainer na Founder wa High Return Consulting, anatoa mafunzo ya timu zinazohitaji kwenda mbali zaidi.",
      },
    ],
  },
]

export function getPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug)
}
