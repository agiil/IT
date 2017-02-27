---
title: API
permalink: API
---

# API disainijuhis
{: .no_toc}

- TOC
{:toc}

## Alusmaterjalid

Google API disainijuhis, [Google API Design Guide](https://cloud.google.com/apis/design), avaldatud 2017. a veeburaris, on üks parimaid REST API-de kujundamise juhiseid. Selles esitatakse Google-is 2014. a alates rakendatud API-de disaininõuded ja -põhimõtted. Käesolev juhis põhineb Google API disainijuhise REST API-sid käsitlevale osale.

API-de kohta ei ole üldisi disainistandardeid. Kuid on mitmesuguseid muid käsitlusi. [APIs for Dummies](http://www.appythings.nl/sites/default/files/api_for_dummies.pdf) on hea sissejuhatus teemasse, kuid ei ole kasutatav disainijuhendina.

## API-de tähtsus

API e masintöödeldav liides on eraldi käitatavate ja/või arendatavate süsteemide või komponentide sidumise viis. API-del põhineb süsteemide lõimimine (_systems integration_), hajusarhitektuursed lahendused, sh mikroteenused ja laiemalt võttes kogu tänapäevane infotöötlus.

API-põhine arhitektuur, nn _API first_ strateegia [API First Government, Kütt 2016](https://www.slideshare.net/AndresKtt/api-first-government) toob kaasa API-de arvu ja keerukuse kasvu. Moodsad süsteemid, ka taristud, arenevad selles suunas, et kõik andmed ja kogu funktsionaalsus on kasutatavad API-de kaudu. (Vastandiks API-le) on inimkasutaja liides). 

## API elutsükkel

API disainimine ei ole ühekordne tegevus. *_API elutsükli_* moodustavad mitmesugused tegevused, näiteks: 

- API kasutajaskonna kasvatamine (_attract developers_)
- API dokumenteerimine
- API testimine
- API haldus (_API governance_)
- API turvamine (_secure API_)
- API rahakspööramine (_monetize API_)
- APi kasutuse analüüs (API analüütika)

API arendamisel tuleb kõiki neid aspekte adekvaatselt käsitleda.

## REST API põhimõisted

*_Ressursid_* jagunevad *_lihtressurssideks_* (_simple resource_) ja *_kogumressurssideks_* (_collection resource_).

Ressursil on _*olek*_ (_state_) ja võivad olla *_alamressursid_* (_sub-resources_).

Ressurssidele rakendatavad _*meetodid*_ jagunevad _*standardmeetoditeks*_ ja _*erimeetoditeks*_. Standardmeetodid Google käsitluses on `List`, `Get`, `Create`, `Update` ja `Delete`.

Ressursinimed. Igal ressursil peab olema unikaalne nimi. Ressursinimi moodustub ressursid ID-st, vanemressursside ID-dest ja API teenuse nimest.

_*Ressursi täisnimi*_ 

Ressursi täisnimi sarnaneb URL-le, kuid ei ole viimasega samaväärne. Sama ressurss võib olla eksponeeritud mitme erineva protokolli ja API versiooni kaudu.

Ressursi täisnime kasutamiseks API-s tuleb: 1) lisada teenuse nime ette HTTPS skeem; 2) lisada ressursitee ette API major versioon; 3) kasutada URL-escape-i (%-encoding).

_*Ressursi suhteline nimi*_ 


## API disaini töövoog

[Google API Design Guide](https://cloud.google.com/apis/design/resources) soovitab järgmist tööjärjekorda (_design flow_):

- määrata API-s pakutavad ressursitüübid (_resource types_)
- määrata ressurssidevahelised seosed
- määrata nimemustrid e -skeemid (_resource name schemes_)
- määrata ressursiskeemid
- siduda minimaalne hulk meetodeid ressurssidega




## API-de arendamise ja haldamise platvormid

Apiary https://apiary.io/ Oracle (Jan 2017)
Agigee "Adapt Faster" (Oracle Nov 2016)


## APi standardid

API Blueprint https://apiblueprint.org/ 

OpenAPI


## Front- ja backendi vaheline suhtlus

Veebisirvija ja serveri vahel võimalik mitmel viisil:

- HTTP 1.1
- HTTP/2
- [WebSocket](https://en.wikipedia.org/wiki/WebSocket), uuem, TCP-põhine, veebisirvija ja -serveri vahel üheaegselt kahes suunas andmeedastust (full-duplex) võimaldav andmevahetusprotokoll.

[Google API Design Guide](https://cloud.google.com/apis/design/)



