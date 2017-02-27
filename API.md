---
layout: Times
title: API
permalink: API
---

# API disainijuhis
{: .no_toc}

- TOC
{:toc}

## API mõiste

*API e masintöödeldav liides*  on eraldi käitatavate ja/või arendatavate süsteemide või komponentide sidumise viis. API-del põhineb süsteemide lõimimine (_systems integration_), hajusarhitektuursed lahendused, sh mikroteenused ja laiemalt võttes kogu tänapäevane infotöötlus.

*API-põhine arhitektuur*, nn _API first_ strateegia [API First Government, Kütt 2016](https://www.slideshare.net/AndresKtt/api-first-government) toob kaasa API-de arvu ja keerukuse kasvu. Moodsad süsteemid, ka taristud, arenevad selles suunas, et kõik andmed ja kogu funktsionaalsus on kasutatavad API-de kaudu. Vastandiks API-le) on inimkasutaja liides.

Käesolev juhis keskendub [REST API](https://en.wikipedia.org/wiki/Representational_state_transfer)-dele.

## API elutsükkel

API disainimine ei ole ühekordne tegevus. *API elutsükli* moodustavad mitmesugused tegevused, näiteks: 

- API kasutajaskonna kasvatamine (_attract developers_)
- API dokumenteerimine
- API testimine
- API haldus (_API governance_)
- API turvamine (_secure API_)
- API rahakspööramine (_monetize API_)
- APi kasutuse analüüs (API analüütika)

API arendamisel tuleb kõiki neid aspekte adekvaatselt käsitleda.

## API disaini standardid

Google API disainijuhis, [Google API Design Guide](https://cloud.google.com/apis/design), avaldatud 2017. a veeburaris, on üks parimaid REST API-de kujundamise juhiseid. Selles esitatakse Google-is 2014. a alates rakendatud API-de disaininõuded ja -põhimõtted. Käesolev juhis põhineb Google API disainijuhise REST API-sid käsitlevale osale.

REST API-de kujundamisel on otstarbekas lähtuda Google API disainijuhisest, arvestades, et kõik Google nõuded ei ole kohaldatavad.
{: .takeaway}

REST API-de dokumenteerimise kohta on kaks laialtlevinud standardit:
- [OpenAPI Specification](https://github.com/OAI/OpenAPI-Specification), endise nimega Swagger, kasutab aluskeelena YAML-i või JSON-it.   
- [API Blueprint](https://apiblueprint.org/) on aluskeelena Markdown-i kasutav API-de kirjelduskeel ("a powerful high-level API description language").

REST API dokumenteerimine "vabas vormis" on mõeldav ainult väikese API ja kõrge dokumenteerimisoskusega arendaja korral. Reeglina tuleks API-d kirjeldada asjakohast formaalset kirjelduskeeld kasutades. Eelistatud on kasutada OpenAPI kirjelduskeele kasutamine.
{: .takeaway}

[APIs for Dummies](http://www.appythings.nl/sites/default/files/api_for_dummies.pdf) on hea ülevaade ja sissejuhatus "API-majandusse" (_API economy_), kuid ei ole kasutatav disainijuhendina.

## API tööriistad

API-de arendamise, dokumenteerimise, testimise ja turvamise keerukus on tinginud mitmesuguste tööriistade teket. Näiteks REST API testimiseks, sh testimise automatiseerimiseks saab kasutada automaattestimise raamistikku [SoapUI](https://www.soapui.org/).

*API-de arendamise ja haldamise platvormid* üritavad pakkuda tööriistade kogumeid ja API elutsükli täistoetust. Tähtsamad API-platvormid on:

- [Apiary](https://apiary.io/)
- [Agigee](https://apigee.com).

API-platvormide arengut näitab Apiary ostmine Oracle poolt (Jan 2017) ja Apigee ostmine Google poolt (Nov 2016).

API-platvormide kasutamine väikese API-de arvu korral ei ole põhjendatud.
{: .takeaway} 

## Ressursid

**Ressursid** jagunevad **lihtressurssideks** (_simple resource_) ja **kogumressurssideks** (_collection resource_). Ressursil on **olek** (_state_) ja võivad olla **alamressursid** (_sub-resources_).

## Ressursinimed

Ressursinimi moodustub ressursi ID-st, vanemressursside ID-dest ja API teenuse nimest. Igal ressursil peab olema unikaalne nimi. 

*Ressursi täisnimi* täisnimi sarnaneb URL-le, kuid ei ole viimasega samaväärne, sest sama ressurss võib olla eksponeeritud mitme erineva protokolli ja API versiooni kaudu. Ressursi täisnimi moodustatakse nii: 1) lisada teenuse nime ette HTTPS skeem; 2) lisada ressursitee ette API major versioon; 3) kasutada URL-escape-i (%-encoding).

**Ressursi suhteline nimi** identifitseerib ressurssi API teenuse kontekstis.

**Ressursi ID** on ressurssi oma vanemressursi kontekstis identifitseeriv URI segment. Peab selgelt dokumenteerima, kas ressursi ID moodustatakse kliendi või serveri poolt.

**Kogumressursi ID** (_collection ID_) peab olema mitmuses.

Vt Google disainijuhis, jaotis [Resource Names](https://cloud.google.com/apis/design/resource_names). 

## Meetodid

**Meetodid** rakenduvad ressurssidele ja jagunevad **standardmeetoditeks** ja **erimeetoditeks**. Standardmeetodid Google käsitluses on `List`, `Get`, `Create`, `Update` ja `Delete`.

## API disaini töövoog

[Google API Design Guide](https://cloud.google.com/apis/design/resources) soovitab järgmist tööjärjekorda (_design flow_):

- määrata API-s pakutavad ressursitüübid (_resource types_)
- määrata ressurssidevahelised seosed
- määrata nimemustrid e -skeemid (_resource name schemes_)
- määrata ressursiskeemid
- siduda minimaalne hulk meetodeid ressurssidega

## API turvamine

Eelistatud on JWT ([JSON Web Token](https://jwt.io/)) autentimine. Vt Stankovic (2016), [JWT Authentication Tutorial: An example using Spring Boot](http://www.svlada.com/jwt-token-authentication-with-spring-boot/).

## API versioneerimine

API-s tuleb kasutada [semantilist versioneerimist](http://semver.org/).

Vt Google disainijuhis, jaotis [Versioning](https://cloud.google.com/apis/design/versioning).

