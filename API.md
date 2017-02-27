---
layout: Times
title: API
permalink: API
---

TL;DR -- Nõuded ja soovitused REST API-de projekteerimiseks, testimiseks ja dokumenteerimiseks eelkõige RIHA kontekstis, aga ka laiemalt.

# API-de disaini juhis
{: .no_toc}

v0.1 27.02.2017

koostanud Priit Parmakson

Sisukord

- TOC
{:toc}

## Üldine

### Käsitlusala

Juhis reguleerib eelkõige hajus-RIHA komponentide API-sid, kuid võib olla rakendatav ka teiste API-de arendamisel. 

### API mõiste

**Masinliides** e **API** (_application programming interface_) on eraldi käitatavate ja/või arendatavate süsteemide või komponentide sidumise viis. API-del põhineb süsteemide lõimimine (_systems integration_), hajusarhitektuursed lahendused, sh mikroteenused ja laiemalt võttes kogu tänapäevane infotöötlus. **API-põhine arhitektuur**, nn **API first** strateegia [API First Government, Kütt 2016](https://www.slideshare.net/AndresKtt/api-first-government) toob kaasa API-de arvu ja keerukuse kasvu. Moodsad süsteemid, ka taristud, arenevad selles suunas, et kõik andmed ja kogu funktsionaalsus on kasutatavad API-de kaudu. Vastandiks API-le on inimkasutaja liides.

### API elutsükkel

API disainimine ei ole ühekordne tegevus. **API elutsükli** moodustavad mitmesugused tegevused, näiteks: 

- API kavandamine
- API projekteerimine
- API dokumenteerimine
- API teostamine (programmeerimine)
- API testimine
- API haldamine
- API valitsemine (_API governance_)
- API turvamine
- API rahakspööramine (_monetize_)
- API kasutajaskonna kasvatamine
- APi kasutuse analüüs (API analüütika)

API arendamisel tuleb kõiki neid aspekte adekvaatselt käsitleda.

### API disaini standardid

**Google API disainijuhis**, [Google API Design Guide](https://cloud.google.com/apis/design), avaldatud 2017. a veeburaris, on üks parimaid materjale REST API-de disaini vallas. Juhisesse on kogutud Google-is 2014. a alates rakendatud API-de disaininõuded ja -põhimõtted. Seejuures on püütud ühtselt käsitleda REST ja RPC teenuseid.

REST API-de kujundamisel on otstarbekas lähtuda Google API disainijuhisest, arvestades, et kõik Google nõuded ei ole kohaldatavad.
{: .noue}

[APIs for Dummies](http://www.appythings.nl/sites/default/files/api_for_dummies.pdf) on hea populaarne ülevaade ja sissejuhatus "API-majandusse" (_API economy_), kuid ei ole kasutatav disainijuhendina.

### API disaini lähteparameetrid

Disaini mõjutavad liidese kavandatavad kasutusparameetrid:

- kas liides on avaliides või on vaja ligipääsu piirata?
- kas liides on mõeldud kasutamiseks turvatud sisevõrgus või avalikus internetis? 

Käesolev juhis keskendub [REST API](https://spring.io/understanding/REST)-dele.

### API tööriistad

API-de arendamise, dokumenteerimise, testimise ja turvamise keerukus on tinginud mitmesuguste tööriistade teket. Näiteks REST API testimiseks, sh testimise automatiseerimiseks saab kasutada automaattestimise raamistikku [SoapUI](https://www.soapui.org/). **API-de arendamise ja haldamise platvormid** üritavad pakkuda tööriistade kogumeid ja API elutsükli täistoetust. Tähtsamad API-platvormid on: [Apiary](https://apiary.io/) ja [Agigee](https://apigee.com). API-platvormide arengut näitab Apiary ostmine Oracle poolt (Jan 2017) ja Apigee ostmine Google poolt (Nov 2016).

API-platvormi kasutamine väikese API-de arvu korral tõenäoliselt ei ole õigustatud. 
{: .noue} 

## RIHA API-d

RIHA-s rakendatakse hajusarhitektuuri. Rakendus jagatakse väikesteks, reeglina ühtainust ülesannet täitvateks, eraldipaigaldatavateks komponentideks, mis suhtlevad üksteisega masinliideste abil. Masinliideste kaudu pakutakse ka võimalikult palju RIHA andmeid väljaspoole. Seetõttu on praktiliselt igal komponendil üks või mitu masinliidest. Samuti kasutab komponent reeglina ühe või mitme teise komponendi liideseid.

### Senine praktika 

RIHA nn koskmudelarenduses (2016) tegeldi masinloetavate vormingute projekteerimisega, sõnastati masinliideste põhimõtteid ja teostati "Andmete kirjeldamise (haldamise) mooduli" masinliides. Tulemused on dokumenteeritud:

- RIHA andmete masinloetavate vormingute spetsifikatsioonis v1.4, 09.09.2016
- RIHA API spetsifikatsioonis, v1.8, 05.01.2017 (ajakohasuse kaotanud)
- töö "RIHA andmebaasi täiendamine REST liidesega" tulemites (koodis ja dokumentatsioonis).

Koskmudelarenduses ilmnesid tõsised probleemid liideste dokumenteerimisel ja testimisel. Samuti kalduti kõrvale REST põhimõtetest (pöördumine andmebaasitabelite ja kirjete poole, mitte ressursipõhiselt).

[RIHA agiilarenduse prototüübi](https://e-gov.github.io/RIHA-Launcher/) (detsember 2016) arenduse tulemusena valmis RIHA masinliidese formaalne kirjeldus ja teostati 3 mooduli - Kirjeldaja, Avaldaja, Kooskõlastaja - masinliidesed. Vt:

- [RIHA kirjeldusstandard](https://e-gov.github.io/RIHA-Launcher/Kirjeldusstandard)
- [RIHA "Launchpad"](https://e-gov.github.io/RIHA-Launcher/).

### Seonduvad dokumendid

- [RIHA tehnoloogiaportfell](https://e-gov.github.io/RIHA-Launcher/Tehnoloogiaportfell)

Vt ka jaotis "Senine töö".

### API-de näiteid

Valideerimisteenuse projektis (2016) loodi ka väike [REST JSON liides](http://open-eid.github.io/SiVa/siva/v2/interfaces/).

## API elemendid

### API teenus

**API teenuse nimi** peab olema [RFC1035](https://www.ietf.org/rfc/rfc1035.txt) kohane domeeninimi, mis lahendub üheks või mitmeks võrguaadressiks. Nt `riha.eesti.ee`.

Kui API kujundatakse mitmest teenusest koosnevana, siis peab nimede valik toetama teenuste ülesleitavust.

Mitut teenust saab ka pakkuda sama teenusenime all, esitades need pöördumistees teenuse versiooninumbri järel. Nt `riha.eesti.ee/v1/Producer` ja `riha.eesti.ee/v1/Publisher` (Google käsitlus).

Vt Google disainijuhis, jaotis [Naming Conventions](https://cloud.google.com/apis/design/naming_convention#ListFilterField).

### Ressursid

**Ressursid** jagunevad **lihtressurssideks** (_simple resource_) ja **kogumressurssideks** (_collection resource_). Ressursil on **olek** (_state_) ja võivad olla **alamressursid** (_sub-resources_).

**Ressursi nimi** moodustub ressursi ID-st, vanemressursside ID-dest ja API teenuse nimest (Google käsitlus). Igal ressursil peab olema unikaalne nimi. Nt `systems` (RIHA-s kirjeldatud infosüsteemide kogum) ja `systems\ETIS` (RIHAs kirjeldatud infosüsteem ETIS). 

**Ressursi täisnimi** sarnaneb URL-le, kuid ei ole viimasega samaväärne, sest sama ressurss võib olla eksponeeritud mitme erineva protokolli ja API versiooni kaudu (Google käsitlus). Ressursi täisnimi moodustatakse nii: 1) lisada teenuse nime ette HTTPS skeem; 2) lisada ressursitee ette API major versioon; 3) kasutada URL-escape-i (%-encoding).

**Ressursi suhteline nimi** identifitseerib ressurssi API teenuse kontekstis.

**Ressursi ID** on ressurssi oma vanemressursi kontekstis identifitseeriv URI segment. Nt `ETIS` (RIHAs kirjeldatud infosüsteem ETIS). Peab selgelt dokumenteerima, kas ressursi ID moodustatakse kliendi või serveri poolt.

RIHA koskarenduses väljapakutud nimelahendus (RIHA andmete masinloetavate vormingute spetsifikatsioon v1.4, jaotis "Objektide identifitseerimine URI-de abil") vajab tõsist analüüsi ja ümbertöötamist. Tagasiside kasutajatelt näitab, et keerulisest nimemustrist ei saada aru.
{: .noue}

**Kogumressursi ID** (_collection ID_) peab olema mitmuses. Nt `systems` (RIHA-s kirjeldatud infosüsteemide kogum).

Vt Google disainijuhis, jaotis [Resource Names](https://cloud.google.com/apis/design/resource_names). 

### Meetodid

**Meetodid** rakenduvad ressurssidele ja jagunevad **standardmeetoditeks** ja **erimeetoditeks**. Standardmeetodid Google käsitluses on `List`, `Get`, `Create`, `Update` ja `Delete`. Need esitatakse HTTP meetodite abil järgmiselt:

|  Meetod   |  Vastav HTTP meetodimuster         |  HTTP päringu keha |  HTTP vastuse keha | 
|:---------:|:----------------------------------:|:------------------:|:------------------:| 
|  `List`   |  `GET <kogumi URL>`            |  tühi              |  ressursside kogum | 
|  `Get`    |  `GET <ressursi URL>`              |  tühi              |  ressurss          | 
|  `Create` |  `POST <ressursi URL>`           |  ressurss          |  ressurss          | 
|  `Update` |  `PUT` või `PATCH <ressursi URL>`|  ressurss          |  ressurss          | 
|  `Delete` |  `DELETE <ressursi URL>`         |  tühi              |  tühi              | 

Nendest reeglitest on erisusi, vt Google disainijuhis, jaotis [Standard Methods](https://cloud.google.com/apis/design/standard_methods).

Erimeetod on selline, mis kaldub kõrvale standardsest REST semantikast. Nt infosüsteemi omaniku vahetus. Kus vähegi võimalik, tuleks kasutada standardmeetodeid. Google disainijuhis, jaotis [Custom Methods](https://cloud.google.com/apis/design/custom_methods) pakub skeemi erimeetodite vormindamiseks (_custom verb_). Selle kasutamise otstarbekus vajab selgitamist.

### Protokollid

Kasutusel on HTTPS (aga mitte näiteks [WebSocket](https://en.wikipedia.org/wiki/WebSocket), uuem, TCP-põhine, veebisirvija ja -serveri vahel üheaegselt kahes suunas andmeedastust (full-duplex) võimaldav andmevahetusprotokoll).

## Disainimustrid

### Päringu moodustamine

Andmed saadetakse JSON formaadis.

RIHA koskarenduses teostati GET päringu puhul ka CGI `nimi=urlencoded_väärtus` paaridena esitus. Selle otstabrbekus on kaheldav. Tuleb arutada arendajaga.
{: .noue}

Päringute üldparameetreid võib esitada kahel alternatiivsel moel, kusjuures API peab ära tundma mõlemad ja kasutus on vaba.

### Filtreerimine ja sortimine

Kui API pakub tulemuste nimekirja filtreerimist või sortimist, siis võiks järgida SQL süntaksit.

Vt ka Google disainijuhend, jaotis [Sorting Order](https://cloud.google.com/apis/design/design_patterns#sorting_order) ja RIHA API spetsifikatsioon, jaotised "filter" ja "sort".

### Kauakestvad operatsioonid

Kui API meetodi täitmine võtab tüüpiliselt kauem aega, siis võib meetodi projekteerida nii, et tagastatakse callback (Google terminoloogias - _Long Running Operation_), mille abil klient saab jälgida edenemist ja saada lõpptulemuse. Vrdl Google disainijuhend, jaotis [Common Design Patterns](https://cloud.google.com/apis/design/design_patterns).

### Andmete väljastamine leheküljeti

Andmete väljastamine leheküljeti tuleks teostada ka väikesemahuliste, kuid kasvada võivate ressursikogumite puhul. Google soovitus on "listable collections should support pagination, even if results are typically small." Vt Google disainijuhend, jaotis [Common Design Patterns](https://cloud.google.com/apis/design/design_patterns).

### Päringu samajõulisus

Väga soovitav on teha päringud samajõuliseks (idempotentseteks). See tähendab, et sama päringut saab võrgutõrke korral ilma kahjulike kõrvalmõjudeta uuesti saata. Kui päringut ei saa teha idempotentseks, siis peab iga päringsõnum sisaldama unikaalset *idempotentsus-ID-d*.

Vt:

- Leach (2017) [Designing robust and predictable APIs with idempotency](https://stripe.com/blog/idempotency).
- Google disainijuhis, jaotis [Request Duplication](https://cloud.google.com/apis/design/design_patterns#sorting_order).

### API turvamine

Ainult sisekomponentide vahel toimivad API-d piiratakse väliskeskkonnast üldjuhul IP aadressi põhiselt ning piiranguinfot päringus ei edastata.

Väliseks kasutuseks mõeldud päringud võivad olla kas piiramata või piiratud autentimistokeni abil, mis tuleb päringule kaasa panna kas ühe parameetri või HTTP päises oleva väärtusena.

Eelistatud on JWT ([JSON Web Token](https://jwt.io/)) autentimine. Vt Stankovic (2016), [JWT Authentication Tutorial: An example using Spring Boot](http://www.svlada.com/jwt-token-authentication-with-spring-boot/).

Selgitada, kas JWT kasutamine on jõukohane ja põhjendatud.
{: .noue}

### API versioneerimine

API-s tuleb kasutada [semantilist versioneerimist](http://semver.org/).

Vt Google disainijuhis, jaotised [Compatibility](https://cloud.google.com/apis/design/compatibility) ja [Versioning](https://cloud.google.com/apis/design/versioning).

## Elutsükli toimingud

### API disainimine

[Google API Design Guide](https://cloud.google.com/apis/design/resources) soovitab järgmist tööjärjekorda (_design flow_):

- määrata API-s pakutavad ressursitüübid (_resource types_)
- määrata ressurssidevahelised seosed
- määrata nimemustrid e -skeemid (_resource name schemes_)
- määrata ressursiskeemid
- siduda minimaalne hulk meetodeid ressurssidega.

### API spetsifitseerimine

**Kirjelduse täielikkus**. Masinliides tuleb täielikult dokumenteerida. "Discovery-based documentation" (API käitumise väljaselgitamine katse-eksituse teel) ei ole aktsepteeritav.

**Formalismi kasutamine**. Vajalik on formaalne kirjeldus, mis ühtlasi peab olema ka inimloetav. "Vabas vormis" dokumenteerimine on vastuvõetav ainult triviaalsete liideste puhul. 

Märkus. Formaalne kirjeldamine ei ole eesmärk omaette, vaid vahend kirjelduse täielikkuse ja üheseltmõistetavuse saavutamiseks.

REST API-de dokumenteerimise kohta on kaks laialtlevinud standardit:

- [OpenAPI Specification](https://github.com/OAI/OpenAPI-Specification), endise nimega Swagger, kasutab aluskeelena YAML-i või JSON-it.   
- [API Blueprint](https://apiblueprint.org/) on aluskeelena Markdown-i kasutav API-de kirjelduskeel ("a powerful high-level API description language").

Eelistatud on OpenAPI kirjelduskeele kasutamine.
{: .noue}

- [Extended Backus-Naur Form (EBNF)](https://cloud.google.com/apis/design/design_patterns#grammar_syntax) on samuti hea formalism.

**Näited**. Näite või näidete lisamine on tingimata vajalik. Seejuures kirjeldamine ainuüksi näite abil ei ole piisav.

**Navigeeritavus**. API kirjeldus peab olema navigeeritav.

**Avalikkus**. API kirjeldus tuleb avalikult publitseerida.

**Ajakohasus**. API kirjeldust tuleb hoida ajakohasena. See tähendab, et API käitumine peab vastama kirjeldusele.

### API tarkvaraline teostamine

REST API-de tegemise vahendeid pakutakse paljudel platvormidel ja raamistikes. Mõnda platvormi on API-d vaikimisi sisse ehitatud. Nt:

- [Spring Boot](https://spring.io/guides/gs/actuator-service/)
- [PostgreSQL Restful API](https://www.postgresql.org/about/news/1616/)
- [Google Apps Script](https://trevorfox.com/2015/03/rest-api-with-google-apps-script/) 

### API testimine

**Testide katvus**. Testid peavad hõlmama kõiki ressursitüüpe ja kõiki meetodeid.

**Automatiseerimine**. API testid tuleb automatiseerida vähemalt testikogumit käitava skripti tasemel.

### API kasutamise mõõtmine

API kasutamise mõõtmise ja monitooringu võimalused tuleb ette näha juba API projekteerimisel.

