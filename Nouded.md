---
title: 4.5 Ärinõuded ja infovajadused
permalink: Nouded
---

# 4.5 Ärinõuded ja infovajadused
{: .no_toc}

- TOC
{:toc}

<p class='tags'>Artikli TL;TR</p>
<p class='s'>[Spolsky2000] Joel Spolsky (2000) [Painless Functional Specifications](https://www.joelonsoftware.com/2000/10/03/painless-functional-specifications-part-2-whats-a-spec/).</p>

4-osaline blogikirjutise sari tuntud arendusgurult ja ettevõtjalt spetsifitseerimisest (IT arenduses üliolulisest, paljudiskuteeritavast küsimusest)

---

## Infovajadused

__Info vajadus__ on lähtekoht iga süsteemi tegemisel. Miks muidu süsteemi üldse teha?

Keegi vajab mingit infot. *Väga harva on kasutajate infovajadused nii selged, et neid ei ole vaja uurida*{: .u}

Samas väga tihti eksitakse selle reegli vastu. Arendaja usub, et ta teab, mida süsteemi tulevased kasutajad tahavad. Tegelikult ei tea, õigemini - teab osaliselt. 

Infovajaduste kaardistamine ja täpsustamine peaks seetõttu olema üks esimesi samme süsteemi tegemisel. Kas ja kui metoodiliselt seda tehakse, sõltub paljudest asjaoludest. Statistika näitab, et vaevalt pool arendatud tarkvarast on õigesti "rihitud" ja leiab tegelikku kasutamist.

Infovajaduste väljaselgitamist võib raskendada kasutajate suutmatus oma soove väljendada. See, mida nad ütlevad, ei ole see, mida nad tegelikult tahavad või nad on ei ütle midagi. Sellisel juhul ei ole muud, kui süsteem valmis teha - kulude kokkuhoidmiseks esialgu prototüübina - ja lasta kasutajatel proovida. 

Prototüüpimise vahendid on kiiresti arenenud. Kogenud arendajal käib veebirakenduse töötava prototüübi tegemine kiiresti. Siiski ei ole see teenus tasuta ja vajaduste süstemaatiline kaardistamine enne koodi kirjutamisega alustamist on jätkuvalt aktuaalne meetod.   

Infovajaduste uuring toob reeglina välja palju soove ja vajadusi. Kõiki neid ei jõuta kunagi realiseerida. Seetõttu on äärmiselt oluline __infovajaduste prioritiseerimine__. See töö haakub otseselt arendustööde plaanimisega.

Infosüsteemi arendustsüklis on infovajaduste väljaselgitamine tüüpiline töö, mida teeb __analüütik__. Analüütiline küsimus on "kes mille tegemisel millist infot kasutab?" (Organisatsioon + Protsess + Info).

Klassikalises arendusmudelis (nn kosemudel, ingl _Waterfall_) selgitati *kõik*{: .u} infovajadused enne süsteemi projekteerimist ja teostust täielikult välja. Agiilses arenduses on sellest loobutud, kuid infovajadus on nii või teisiti süsteemiarenduse lähtekoht.

Infovajaduste väljaselgitamise peamised meetodid on: 1) küsitlus; 2) vaatlus; 3) dokumentatsiooni jm. kasutatavate andmekogumite kaardistamine.

_Infovajadus (_Information Need_) on teave, mida keegi mingil ees­mär­gil vajab. Infovajaduses võib eristada no­men­kla­tuuri — millist infot vajatakse? — ja kvaliteeti — mil­lise kva­li­tee­di­ta­se­mega infot va­ja­takse? (Kui ajakohane peab teave olema? Millises vormis? jne)

Vajadustest lähtuv analüüs ei ole ainuvõimalik. Võib ka lähtuda organisatsiooni valduses ole­va­test in­foressurssidest ning mõelda, kuidas  *olemasolevat infot paremini töö­le panna*{: .u}.

__Infovajadused ja tööprotsess__. In­fo­va­ja­dus on tihe­dalt seo­tud töö­prot­ses­si­ga, mida ini­me­ne teeb. Ei saa lihtsalt üles lu­geda töö­ta­ja info­vaja­dusi, mõist­ma­ta ümb­rit­se­vat tööprotsessi. Mitte alati aga ei ole info­süs­teemiga toe­tatavate töö- ja äri­prot­ses­si­de ole­mus selge. Lihtsalt küsida, kes millist infot va­jab ja vastuste järgi süsteem  üles ehitada on suhteliselt pri­mi­tiiv­ne lä­he­nemine. Infovajaduste analüüs tuleb siduda äri- või tööprotsessi analüüsiga.

*Fookuse infovajaduste väljaselgitamisele annab inimese töös vajalikest otsustest ja tegevustest lähtumine-*{: .u}

__Infovajaduse sotsiaalne olemus__. In­fo­vajadused on vä­ga tihe­dalt seotud ka sot­si­aal­se ümb­rusega, kel­lega ini­mene suht­leb. Ei saa lihtsalt üles lu­ge­da töö­ta­ja in­fo­vaja­du­si, mõist­ma­ta töötaja sotsi­aal­set suht­lus­kesk­kon­da. Sotsiaalsed ja teh­no­loo­gi­li­sed struk­tuu­rid on info­süs­tee­mi­des üks­teisega lä­bi põi­mu­nud. Sa­ma teh­no­loo­gia, sama ees­mär­gi­ga süs­tee­mid—või­vad eri­ne­va­tes or­ga­ni­sat­si­oo­nides anda täi­es­ti eri­ne­vaid tu­le­mu­si. Sama ar­vu­ti­tüüp, sa­ma tark­va­ra—kuid kaks ka­su­tajat või­vad kasutada üp­ris eri­ne­valt.

Uuring vähi­hai­ge­te infovajaduste kohta näitas, et patsiendil ei ole ükskõik, kas diagnoosi teatab talle arst, õde, pe­re­arst või saab ta selle teada e-tervise infosüsteemist: _“The majority of people (60%) want­ed the infor­mat­ion to be given by their hos­pit­al doc­tor, rather than by a nurse (2%) or by their general practitioner (24%).”_

Ing­lis­maal tehtud uurimus näitas, et keskmiselt patsient oli suuteline pärast arsti külas­ta­mist (visiit kestis kesk­miselt 8 minuti) meenutada ainult veidi vähem kui 50% arsti poolt suuliselt edastatud infost. Ilm­selt on vajadus infotehnoloogilise lahenduse järele.

__Infotulva vältimine kui vajadus__. Ini­me­se info­töötlusvõime on piiratud. Infovajaduseks tuleb seetõttu lugeda ka vajadust väl­tida või vabaneda väheväärtuslikust infost.

__Infovajaduste dünaamilisus.__ Kõik infovajadused ei tarvitse olla ajas stabiilsed. Organisatsiooni tegevuse iseloom ja muutuv keskkond võivad tingida, et vajaliku teabe koosseisu on raske fikseerida. Sellisel juhul on ka infosüsteemi väga raske teha. Vähemalt peab süsteem olema väga paindlik.

## Infovajaduste väljaselgitamine

__Infovajaduste väljaselgitamise protsess__ ei pea olema keeruline. Põhimõtteliselt piisab ka­hest osast: 1) and­mete kogu­mi­ne info­va­ja­dus­te koh­ta; 2) kogutud andmete kor­ras­ta­mi­ne ja struk­tu­ree­ri­mi­ne, ettevalmistusena süs­tee­mi­aren­du­se eda­sis­te etap­pi­de jaoks.

Infovajaduste analüüs lähtub harilikult info ka­su­ta­jast (ametikoha tüü­bist). Välja ei selgitata mitte konk­reet­se indiviidi infovajadusi, vaid ameti­koh­ta­de ka­te­goo­riate kaupa. Inimesest lähtuvat ana­lüü­si on kasulik täi­en­dada teis­tes lõigetes lii­ku­vate ana­lüü­side­ga — uurida tööprotsesside infovajadusi või alus­tada andmetest ning uurida, kes andmeid vajavad.

Infovajadused ei ole alati ilmsed. Töö­prot­sessi vaatlus ja töö­ta­ja kü­sitlemine annavad kii­res­ti väl­ja ainult osa infovajadustest. Seetõttu kasutatakse in­fo­va­ja­dus­te väl­ja­sel­gitamiseks mitmesuguseid täiendavaid meetodeid ja võtteid:

- spetsifitseerimine infokasutajate endi poolt (self-reporting), tule­mu­seks on loetelu, mis sisaldab nii kasutajale kättesaadavat kui ka soovitavat in­fot
- dokumentide ringluse analüüs (oli oluline analüüsimeetod paberdokumentatsiooni ajastul)
- tööprotsessi kaardistamine ja analüüs
- tüüpkasutajate kujude (profiilide ja nn _[persona](https://en.wikipedia.org/wiki/Persona_(user_experience))_-de) loomine; in­fo­va­ja­dused leitakse ana­lüüsides stsenaariume, mida tüüpkasutaja võiks täita
- infovajaduste tuletamine tegeliku süs­tee­mi­ka­su­tuse logidest. 

__Kasutajate küsitlemine.__ Küsitluste tavalised osad on: 1) konkreetsed va­ja­du­sed ja soovid info jä­re­le; 2) tavalised ja eelistatud info hankimise mee­to­did; 3) takistused info hankimisel; 4) seniste infoteenuste tugevad ja nõrgad küljed.

__Rühmitamine.__ Infovajaduste kogumine võib tule­mu­seks anda suurel arvul mitmeliigilisi info­va­ja­dusi. Saa­dud andmekogumi kasu­ta­mis­kõlb­li­kuks te­ge­mi­seks tu­leb kogutud infot rühmitada. Näiteks vee­bi­süs­teemide kon­teks­tis võib eris­tada järgmisi info­va­ja­dus­te tüüpe: 1) konk­reet­se asja otsing (known-item search); 2) ülevaate saamine (ex­plo­ra­to­ry ori­en­ta­t­ion); 3) väl­ja­valik (selective research); 4) kõi­ke­hõlmav otsing (comprehensive re­search).

Infovajaduste väljaselgitamist on uuritud akadeemiliselt ja eraldi käsitletud mitmetes raamatutes. [Rinzler2009] _Telling Stories : A Short Path to Writing Better Software Requirements_ põhitees on, et lihtne küsimine "Mis teavet sa vajad?" ei ole piisav. Infovajadused avanevad ainult sügavama uurija ja uuritava koostöös tulemusena. Veebis on tasuta kättesaadav agiilarenduse guru Cockburni kõrgelt hinnatud raamat _[Writing Effective Use Cases](http://alistair.cockburn.us/get/2465) (2001)_.

__Kui täpselt on infovajadused määratavad?__ In­fo­va­ja­dus­te väljaselgitamine on näi­li­selt lihtne, kuid prak­ti­kas sageli keerukas, sest: 1) sa­ma in­for­mat­si­oo­ni näe­vad ja väär­tus­ta­vad eri­ne­vad ini­mesed eri­ne­valt; 2) sama in­for­mat­si­oo­ni ka­su­ta­tak­se eri­ne­va­tel vii­si­del; 3) info liikumisvood on kee­ru­kad; 4) eri­ne­vaid in­fo­ka­na­leid võib ol­la pal­ju; 5) indi­vi­duaal­sed ee­lis­tu­sed ja käi­tu­mi­se oma­pära; 5) küsitletu võib ühel või teisel põh­ju­sel varjata oma te­ge­lik­ku in­fo­va­ja­dust; teisest kül­jest, küsitletu võib esi­tada pseu­do­va­ja­duse.

__Kriitilised edutegurid__ (_Critical Success Factors_, CSF) on Rockart'i [Rockart1979] poolt loo­dud, klassikaline meetod tipp­ju­hi infovajaduste väl­ja­sel­gi­ta­mi­seks. Rockart kritiseerib levinud eksi­ar­va­musi juhi in­fo­va­ja­duste kohta, eelkõige seisukohta, et "juht peab teadma kõike". Juht koormatakse infosüsteemist saadetava infoga üle. Juhil ei jätku  aega ise en­da­le vajalikku info väl­ja sõeluda. Ju­hi töö on vägagi muutlik. Seetõttu juhile on pü­si­vat in­fo­süsteemi raske luua. Pa­rim lahendus ju­hi infovajaduste ra­hul­da­mi­seks on ot­se­ne suhtlus usal­dusväärsete alljuhtidega. Seejärel esitab Rockart oma meetodi, mille aluseks on seisukoht, et orga­ni­sat­siooni (ning üht­la­si ka juhi) edukus sõltub väikesest arvust (tüü­pi­li­selt 4-10) krii­ti­lisest edutegurist. Edutegurid on igal or­ga­ni­sat­si­oo­nil in­di­vi­du­aal­sed. Edutegurite väl­ja­sel­gi­ta­mi­ne on lähtepunktiks nii info­va­ja­duste spet­si­fit­see­ri­mi­se­le ja juhti toetavate infosüsteemide ehi­ta­mi­sele kui ka organisatsiooni tööprotsesside voo­lujoonestamisele ja pa­ren­da­mi­se­le. Oluline on edutegurite mõõdetavus - tuleb leida olulised mõõdikud (_Key Performance Indicators_, KPI) leida Seonduvaks juh­ti­mis­kont­sept­si­oo­niks on tule­mus­juh­ti­mi­ne (_Man­ag­e­ment by Ob­ject­ives_).

## Ärinõuded

Mis on ärinõude (_Business Requirement_) eesmärk?

Mis on selle gorilla nimi, keda puuris tahetakse hoida? 

Miks võiksime vajada metoodikat, poliitikat või protseduuri ärinõuete sõnastamiseks?

Millist ülekeevat tegevust tahaksime raamidesse suruda?

Ego ohjekshoidmiseks?

Grupidünaamika kontrolli all hoimiseks?

Millist probleemi ärinõuded lahendaksid? Loetleda saab terve rea laialt levinud nähtusi, mille ärahoidmiseks ärinõuetest võiks hüpoteetiliselt kasu olla. Käsitlusala laialivalgumine projektides (_[Scope Creep](https://en.wikipedia.org/wiki/Scope_creep)_). Ekslemine (_Project Drift_, _Strategic Drift_). Strateegia ekslemine muide tähendab organisatsiooni suutmatust kohaneda kiirelt muutuva keskkonnaga. Raske on näha kuidas ärinõuete sõnastamine otseselt seda ebasoovitavat nähtust aitaksid vältida. Funktsionaalsuste kuhjumine toodetes ja süsteemides (_[Feature creep](https://en.wikipedia.org/wiki/Feature_creep)_). Kellade-vilede tellimise vältimiseks. “Ägedate" lahenduste tellimisega hooguminemise vältimiseks. Otsustusprotsesside ratsionaalsemaks tegemiseks. Pakkuda tuge valikute tegemisel, plaanide ja tulemite hindamisel. Võib tödeda, et need nähtused on suuresti seotud inimpsühholoogiaga.

## Mis on ärinõue?

Ärinõudmine kui kasutaja vajadus. Ärinõue kui lõppkasutaja vajadus. Haridussüsteemis lõppkasutaja - tudeng (aga mitte õppejõud!). Veel samm kaugemale ja haridussüsteemi lõppkasutaja on ettevõtja, autoritaarses ühiskonnas - Suur juht, natsionalistlikus ühiskonnas - rahvus. Avaliku sektori lõpp-kasutaja on kodanik. Erasektoris on üpris levinud meem, et teenuse lõppkasutaja on kliendi klient (“sinu äri heaks”). Nõrkuseks selle vaate juures on see, et keerukas ühiskonnas võivad väärtusahelad olla suhteliselt pikad. Väärtusahela läbipaistvus ei sõltu ühe lüli tahtest. Lõppkasutajale mõtlemine võib olla hoopis _distraction_. Jaapani kanban-filosoofia ütleb, et orienteeru ainult oma vahetule kliendile.

Ärinõue kui ülemuse soov. Nõrk selle poolest, et soov ei tarvitse olla selgelt väljendatud ja ajas püsiv. Ülemise soov täna ja aasta pärast ei tarvitse olla üks ja sama. Hea ülemus saab sellest ise ka aru.

Ärinõue kui õiguskaitsevahend vaidluses arendustöö täitjaga. Nõrk, kuna sageli pole piisavalt konkreetne.

_Disaini eesmärgid_ (_Design Goals_). Paljudes avatarkvarades on disaini eesmärgid selgelt ja veenvalt välja toodud. See on väljakujunenud, hea praktika. Disaini eesmärkide sõnastamise kasu on päris ilmne. Disaini eesmärgid on siiski seotud mitte niivõrd lahendatava probleemi või tarkvara eesmärgi kui juba lahendamise kontseptsiooni või põhimõtete kavandamisega. 

## Mida ärinõudelt nõuda?

Ärinõuete arv igas konkreetses projektis, tootes jm PEAKS olema võimalikult väike.

Milleri arv 7±2 nõuet on veel väike. Miks väike arv on oluline? Proovida võib keerukaid nõuete väljaselgitamise (_Requirements Extraction_ ja haldamise (_Requirements Engineering_) süsteeme (nt Toyota maatriksite süsteem jm), kuid nende süsteemide töölepanemine ja haldamine on omaette väljakutse ning nõuab organisatsiooni vastavat küpsustaset.

<p class='tags'>Näide</p>
Dokumenditaristu hajusarhitektuurile üleviimise projektis on 16 ärinõuet.

Ärinõuded PEAKSID olema prioritiseeritud.

Ärinõuded PEAKSID olema seotud high-level kasutusjuhtudega.

Ärinõuete lisamine PEAKS olema pidev, kuid tagasihoidev protsess.

Kõigi nõuete _up-front_ väljaselgitamine kipub viima projektideni, mis on kas “üle võlli” või siis ei saagi valmis. Ärinõuete haldamisel tuleks kasutada "portfellijuhtimist" - nõuete lisamisega samavõrra tähtis on ebaadekvaatseks muutunud nõuete eemaldamine.

## Ärinõuded agiilarenduses

Alahinnatakse seda, kui dünaamilised võivad olukorrad olla, kui kiirelt võivad olukorrad muutuda. Kiire kohanemine võib olla adekvaatsem, kui kõigi nõuete väljasõnastamise üritamine. Alahinnatakse kommunikatsiooni ja infohalduse keerukust. 

Agiilarenduses kasutuslugu (_User Story_) ongi ärinõue.



