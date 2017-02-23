---
title: API
permalink: API
---


API disain

[Google API Design Guide](https://cloud.google.com/apis/design/resources) soovitab järgmist tööjärjekorda (_design flow_):

- määrata API-s pakutavad ressursitüübid (_resource types_)
- määrata ressurssidevahelised seosed
- määrata nimemustrid e -skeemid (_resource name schemes_)
- määrata ressursiskeemid
- siduda minimaalne hulk meetodeid ressurssidega

Ressursid jagunevad *_lihtressurssideks_* (_simple resource_) ja *_kogumressurssideks_* (_collection resource_). Ressursil on _*olek*_ (_state_) ja võivad olla alamressursid (_sub-resources_).

Ressurssidele rakendatavad _*meetodid*_ jagunevad _*standardmeetoditeks*_ ja _*erimeetoditeks*_. Standardmeetodid Google käsitluses on `List`, `Get`, `Create`, `Update` ja `Delete`.

Ressursinimed. Igal ressursil peab olema unikaalne nimi. Ressursinimi moodustub ressursid ID-st, vanemressursside ID-dest ja API teenuse nimest.

_*Ressursi täisnimi*_ 

Ressursi täisnimi sarnaneb URL-le, kuid ei ole viimasega samaväärne. Sama ressurss võib olla eksponeeritud mitme erineva protokolli ja API versiooni kaudu.

Ressursi täisnime kasutamiseks API-s tuleb: 1) lisada teenuse nime ette HTTPS skeem; 2) lisada ressursitee ette API major versioon; 3) kasutada URL-escape-i (%-encoding).

_*Ressursi suhteline nimi*_ 



API kasutajaskonna kasvatamine
(_attract developers_)

API dokumenteerimine

API testimine

API haldus (_API governance_)

API turvamine (_secure API_)

API rahakspööramine (_monetize API_)

APi kasutuse analüüs (API analüütika)

API elutsükkel

API-de arendamise ja haldamise platvormid

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



