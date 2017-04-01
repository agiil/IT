
AI-s, niipalju, kui oskan otsustada, on praegu ja on alati olnud palju bling-i ja hype-i. Ka viidatud Amelia räägib 7 triljonist (EL tellitud E&Y või PriceWaterhouseCoopers uuringutes on tavaliselt 400 miljardit - avaandmetele üleminek tooks EL majandusele kasu 400 mlrd €, suurandmetele üleminek samuti 400 mlrd €) - aga ei seleta, kuidas siis konkreetselt raha säästev lahendus kokku panna.

Samas viidatakse SEB panga näitele. Suhtlesin just SEB panga turvanõustajaga. Pank tahab mulle kaela määrida teenust, mida ma pole küsinud. Opt-in ja opt-out-il ei tehta vahet (ei taheta teha). Nõustajate tegevus on viisakas, aga jutt, mida nad räägivad, on skriptitud. Inimteenindajale on point-i väga raske seletada, sest tal on ranged juhised. 

AI fundamentaalalgoritmid on juba vähemalt 20-30 a vanad. Lisandunud on arvutusvõimsust, edusamme on arendustehnoloogias jne. Probleem on võib-olla rakendamise kontekstis. 

Viimase 10-15 aastaga on jõudsalt arenenud lean ja agiilmõtlemine IT-s. Võib-olla tuleks keskenduda just järk-järgulisele AI rakendusvõimaluste otsimisele? Alustada kõige "lollimatest" situatsioonidest.

Teiste sõnadega, õppida AI süsteeme tegema samm-sammult. Jättes kõik ägedad omadused ja kellad-viled teise arendusjärjekorda.

2.
Praaminäites mis on probleemi olemus?

 lassifitseerimisprobleem

On kindel hulk probleeme, millest igaühele vastab konkreetne tegevusjuhis, masina poolt sooritatav toiming või nõuanne kliendile.

Kliendi pöördumine on reeglina väljendatud ebaselgelt. Klient ei valda terminoloogiat, ei oska probleemi korrektselt sõnastada jne.

Eesmärgiks on jõuda pöördumisest konkreetse probleemini.

Masinõpe tähendab tagasisidestatud protsessi.

Tagasisidet võib korraldada mitut moodi. Ka automatiseerida. Näiteks võib kliendilt küsida, kas ta sai oma probleemile lahenduse. Kui ei saanud, siis võib tegu olla uue probleemiga ja see tuleb lisada otsustuspuusse. "Õppiv otsustuspuu" on vana algoritm.

3.
Millest me ei tahaks loobuda?

Kliendiga suhtlusest inimkeeles, telefoniga.

Seda võib teha küsimuste vastuste vormis. Virtuaalagent küsib suunavaid küsimusi, inimene vastab. Kõnetuvastusvajadus taandub siis fikseeritud, etteteada sõnade äratundmisele (JAH, EI, PILET, TÜHISTADA, <eesnimi>, <perekonnanimi>). Äratundmist vajavas põhisõnastikus on v-o sadakond sõna. Nimedega on raskem, kuid inimestel on ka isikukoodid. Grammatikat ära tunda ei ole vaja.

3-4 küsimusega saab läbida juba 20-30 lehega otsustuspuu. Sellest võib piisata. Iseõppimisega on raskem, see vajab inimese sekkumist.

Millised elemendid oleksid minimaalselt elujõulises süsteemis (Minimum Viable Product) vajalikud?

- kõnetunnistaja - komponent, mis teisendab sissetuleva kõnesignaali tekstiks
  - lihtsam ülesanne: komponent, mis tunneb ära, kas sissetulevas kõnesignaalis sisaldub üks või mitu SÕNASTIKUS olevat sõna
- lihtne reeglimootor, mis äratuntud sõnade põhjal, vajadusel esitades täpsustavaid küsimusi,  klassifitseeriks probleemi
- kõnesünteesi moodul (võimalik, et pilveteenusena)
  - esitab kliendile küsimusi
  - annab kliendile nõu ja teavitab toimingu teostamisest
- täiturmoodul
  - teeb soovitud toimingu - muudab v tühistab pileti
- tagasiside moodul
  - küsib kliendi tagasisidet ja üritab sellest (inimjuhendaja abiga) õppida.
- fallback moodul - inimese teavitamine juhtudel, mida masin ei mõista lahendada.  
- samuti on vaja masinliidest pileti- ja sõiduplaanisüsteemiga.  

 Kuidas need komponendid tehniliselt lahendada?
 - kõnetunnistuse võiks osta pilveteenusena?
   - kas keegi pakub praegu sellist teenust? IBM Blue pakub vist ainult inglise keeles?
   - kas Eesti riik võiks või peaks eestikeelse kõnetunnistusteenuste turu teket toetama? Rahad on olemas. Meil on suur keeletehnoloogia arendusprogramm. Probleem on aga selles, et keeleteadlased teevad teadust ega vaata praktika poole. Rahadele ei leita rakendust!
- reeglimootor võib olla lihtne, sest reegleid pole palju. Võib-olla kasutada nn hägusarvutust (ingl fuzzy rules). Selleks on vaja mingit keskkonda. Kes fuzzy otsustusmootorit pakuks?
- kõnesünteesi moodul - eestikeelset kõnesünteesi on aastaid rahastatud (Küberneetika Instituut). Kas on jõutud tooteni? Kas eestikeelset kõnesünteesi pakutakse pilveteenusena? Kui ei, siis kes teeks sellise teenuse?
- täiturkomponent nõuab API vm liidese olemasolu pileti- ja sõiduplaanisüsteemiga - see peaks olema tehniliselt kõige lihtsam koht. Kuid! Kui infotöötaja annab teavet aknast välja vaadates, siis see lüli on puudu.

4.
Kirjanduse uurimist võiks seostada konkreetse kava väljatöötamisega. Nt suunaga "Virtuaalagentide tehnoloogia rakendamise tõkked ja võimalused".

See uuring võiks üritada:
- piiritleda probleemide klassi, mida virtuaalagentidega oleks äriliselt mõistlik ja tehniliselt võimalik lahendada. (Ajaperspektiivis lähemad 0..3 aastat, sest tehnoloogia muutub kiiresti)
- esitada tüüpkavandi virtuaalagentlahenduse tüüpilisest arhitektuurist (komponentstruktuur, liidesed, kõige peamised tööpõhimõtted) (Amelia on müügijutt, sealt ei saa asjalikku pilti)
- visandada vajalike teenuste ja komponentide turu arengut. AI lahendusi ei vist ei hakata ostma enda juurde paigaldatavate "kastidena", vaid lõimitakse pilveteenuseid? Millised lüngad on AI-pilveteenuste turul Eestis?

Selline analüüs võiks pakkuda huvi nii klientidele, IT-firmadele kui ka riikliku IT-poliitika kujundajatele. See kataks ka ära harjutustööd 4 ja 5 ning iseseisva lugemise.

 