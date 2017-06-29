---
layout: Times
title: Tulemuse fikseerimine
permalink: TulemuseFikseerimine
---

# Tulemuse fikseerimine

Millal saame rääkida reaalsest tarkvarast?

Lihtne vastus: ***reaalne tarkvara*** on selline, mida saab reaalselt kasutada. Mitte ainult, et kood kompileerub ja saab isegi midagi "näppida", vaid et:
- tarkvarale saab tugineda, nii inimkasutamises, teiste tarkvaradega liidestamisel kui ka järgmiste tööde ettevalmistamisel;
- eelneva tagamiseks, tarkvara väidab midagi (teenuse nimetuse, kasutusvoo kirjelduse, spetsifikatsiooni näol) ja väite kehtivuse kohta on objektiivseid tõendeid (testiraport ja -lood);
- soovi korral saab arenduses teha pausi ja vahepeal ka produkti kasutamisega tegeleda; pärast pausi on arendus jätkatav, võimalik, et teiste inimestega.
- eelneva tagamiseks, repo põhjal, ilma arendamises osalenuid taga ajamata, mõistliku ajakuluga, on võimalik aru saada,  mida tarkvara teeb ja mida ei tee.

Tarkvara, mis seda ei võimalda, on suuremal või vähemal määral ***viirastusvara*** (_phantomware_).

Juhtmõte: Arendus peab olema agiilne, kuid tulemus tuleb fikseerida.

Minimaalne nõuete komplekt, mille puhul saab rääkida reaalsest tarkvarast (kui õnnestub hoida asjad lihtsad, siis võib-olla on need ka piisavad): 

| Nõutav omadus             | Selgitus |
|-------------------|-----------|
| 1 Tarkvara nimetus | Tarkvaral, millel pole püsivat, konkreetset nime, pole ka püsivat skoopi.  Järelikult pole ka fookust. Tõenäoliselt selline kood pole puhastatud sinna-tänna liikunud arendusest jne. Argikeelsed nimetused a la "Anatoli tükk", "see julla" jne pole piisavad. |
| 2 Teenuse nimetus | Tarkvaraga pakutava teenuse nimetus. Iga tarkvara peab kellelegi midagi pakkuma. |
| 3 Sihtrühm | Sihtrühmata ei ole teenust. |
| 4 Kasutusvoo kirjeldus | Samm-sammuline, ei pea tingimata olema tabeli või diagrammi vormis. | 
| 5 Tarkvara spetsifikatsioon (argikeeles - "spekk") | Lihtsamal juhul piisab tarkvara oluliste funktsionaalsete omaduste loetelust. Miks see on vajalik? Iga vajadust võib lahendada laiemalt või kitsamalt. Kui tarkvara pakub teavet masinliidese kaudu, siis ka liidese spekk. |
| 6 Arhitektuurijoonis | Ükski tarkvara pole asi iseeneses, arhitektuurijoonis peab spetsifitseerima, mida tarkvara keskkonnale pakub ja kuidas ise tarkvarast sõltub. |
| 7 Komponentskeem | See on ka arhitektuurijoonis; avab tarkvara siseehitust. |
| 8 Kood | Eraldi koodirepos. |
| 9 Testidokumentatsioon | Peab olema arusaadav, mida ja mis tulemustega on testitud. Kuna testimine ei ole kunagi kattev, siis peab olema võimalik ka aru saada, mida ei ole testitud. Need eesmärgid saavutatakse tavaliselt testiraporti ja testilugude abil. Keerukamal juhul on vaja testistrateegiat, testimise arhitektuurijoonist, makettide kirjeldust jm. |
| 10 Kood ja dokumentatsioon on kokku kogutud ja mittevajalikust eraldatud | Dokumentatsiooni hoitakse ka repos. Tavaliselt koos koodiga. Dokumentatsioon peab olema kokku kogutud, mitte erinevates kohtades laiali, uputatud muu teabe sisse. Mittevajalik on eraldi tõstetud. Valmis tarkvara juurde ei kuulu strateegiad, analüüsid, arhitektuurikavandid, arendusplaanid, ajakavad, edenemisaruanded, projektikoosolekute protokollid, memod, e-kirjad, nädalaaruanded, TODO-nimekirjad, Jira-taskid jne. Need on vajalikud arenduses oleva tarkvara puhul, samuti tarkvara edasiarendamisel. |
| 11 Kood ja dokumentatsioon, sh testidokumentatsioon on ajakohane ja kooskõlas | |

**Milleks see loetelu?** Tarkvaraarenduses on palju võimalusi enesepetmiseks ja soovmõtlemiseks, nii isiku, rühma kui ka organisatsiooni tasandil:
- koodi on palju, see kompileerub (aga pole dokumenteeritud) -> palju tööd on tehtud
- Confluence-is ja Outlook-is on palju dokumente ja kirju (aga koodi pole) -> palju tööd on tehtud
- koosolekud toimuvad, kirjad liiguvad, projektiaruandluses on kõik OK, jne -> palju tööd on tehtud.