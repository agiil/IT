---
layout: Times
title: Kasutusvalmis tarkvara
permalink: Kasutusvalmis
---

# Tulemuse fikseerimine

Millal saame rääkida reaalsest tarkvarast? Minimaalne nõuete komplekt. Juhtmõte: Arendus peab olema agiilne, kuid tulemus tuleb fikseerida. 

Need 

| Nõutav omadus             | Selgitus |
|-------------------|-----------|
| 1 Tarkvara nimetus | Tarkvaral, millel pole püsivat, konkreetset nime, pole ka püsivat skoopi.  Järelikult pole ka fookust. Tõenäoliselt selline kood pole puhastatud sinna-tänna liikunud arendusest jne. Argikeelsed nimetused a la "Anatoli tükk", "see julla" jne pole piisavad. |
| 2 Teenuse nimetus | Tarkvaraga pakutava teenuse nimetus. Iga tarkvara peab kellelegi midagi pakkuma. |
| 3 Sihtrühm | Sihtrühmata ei ole teenust. |
| Kasutusvoo kirjeldus | Samm-sammuline, ei pea tingimata olema tabeli või diagrammi vormis. | 
| 4 Tarkvara spetsifikatsioon (argikeeles - "spekk") | Lihtsamal juhul piisab tarkvara oluliste funktsionaalsete omaduste loetelust. Miks see on vajalik? Iga vajadust võib lahendada laiemalt või kitsamalt. Kui tarkvara pakub teavet masinliidese kaudu, siis ka liidese spekk. |
| 5 Arhitektuurijoonis | Ükski tarkvara pole asi iseeneses, arhitektuurijoonis peab spetsifitseerima, mida tarkvara keskkonnale pakub ja kuidas ise tarkvarast sõltub. |
| 6 Komponentskeem | See on ka arhitektuurijoonis; avab tarkvara siseehitust. |
| 7 Kood | Eraldi koodirepos. |
| 8 Testidokumentatsioon | Peab olema arusaadav, mida ja mis tulemustega on testitud. Kuna testimine ei ole kunagi kattev, siis peab olema võimalik ka aru saada, mida ei ole testitud. Need eesmärgid saavutatakse tavaliselt testiraporti ja testilugude abil. Keerukamal juhul on vaja testistrateegiat, testimise arhitektuurijoonist, makettide kirjeldust jm. |
| 9 Kood ja dokumentatsioon on kokku kogutud ja mittevajalikust eraldatud | Dokumentatsiooni hoitakse ka repos. Tavaliselt koos koodiga. Dokumentatsioon peab olema kokku kogutud, mitte erinevates kohtades laiali, uputatud muu teabe sisse. Mittevajalik on eraldi tõstetud. Valmis tarkvara juurde ei kuulu strateegiad, analüüsid, arhitektuurikavandid, arendusplaanid, ajakavad, edenemisaruanded, projektikoosolekute protokollid, memod, e-kirjad, nädalaaruanded, TODO-nimekirjad, Jira-taskid jne. Need on vajalikud arenduses oleva tarkvara puhul, samuti tarkvara edasiarendamisel. |
| 10 Kood ja dokumentatsioon on ajakohane ja kooskõlas | |

**Kasutamine** tähendab, et:
- tarkvara väidab midagi (teenuse nimetuse, kasutusvoo kirjelduse, spetsifikatsiooni näol) ja väite kehtivuse kohta on objektiivseid tõendeid (testiraport ja -lood);
 tarkvarale saab tugineda, nii inimkasutamises kui ka liidestuste ja järgmiste tööde ettevalmistamisel;
- repo põhjal, ilma arendamises osalenuid taga ajamata, mõistliku ajakuluga, on võimalik aru saada,  mida tarkvara teeb ja mida ei tee;
- arenduses saab teha pausi ja vahepeal ka produkti kasutamisega tegeleda.

**Milleks see loetelu?** Tarkvaraarenduses on palju võimalusi enesepetmiseks ja soovmõtlemiseks, nii isiku, rühma kui ka organisatsiooni tasandil:
- koodi on palju, see kompileerub (aga pole dokumenteeritud) -> palju tööd on tehtud
- Confluence-is ja Outlook-is (aga koodi pole) -> palju tööd on tehtud
- koosolekud toimuvad, kirjad liiguvad, projektiaruandluses on kõik OK, jne.