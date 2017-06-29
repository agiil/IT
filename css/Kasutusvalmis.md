---
layout: Times
title: Kasutusvalmis tarkvara
permalink: Kasutusvalmis
---

# Kasutusvalmis tarkvara

Millal saame rääkida reaalsest tarkvarast? Minimaalne nõuete komplekt. Juhtmõte: Arendus peab olema agiilne, kuid tulemus tuleb fikseerida. Alljärgnev ei rakendu triviaalsetele tarkvaradele - need on erandid.

| Nõutav omadus             | Selgitus |
|-------------------|-----------|
| Tarkvara nimetus | Tarkvaral, millel pole püsivat, konkreetset nime, pole ka püsivat skoopi.  Järelikult pole ka fookust. Tõenäoliselt selline kood pole puhastatud sinna-tänna liikunud arendusest jne. Argikeelsed nimetused a la "Anatoli tükk", "see julla" jne pole piisavad. |
| Teenuse nimetus | Tarkvaraga pakutava teenuse nimetus. Iga tarkvara peab kellelegi midagi pakkuma. |
| Sihtrühm | Sihtrühmata ei ole teenust. |
| Kasutusvoo kirjeldus | Samm-sammuline, ei pea tingimata olema tabeli või diagrammi vormis. | 
| Tarkvara spetsifikatsioon (argikeeles - "spekk") | Lihtsamal juhul piisab tarkvara oluliste funktsionaalsete omaduste loetelust. Miks see on vajalik? Iga vajadust võib lahendada laiemalt või kitsamalt. Kui tarkvara pakub teavet masinliidese kaudu, siis ka liidese spekk. |
| Arhitektuurijoonis | Ükski tarkvara pole asi iseeneses, arhitektuurijoonis peab spetsifitseerima, mida tarkvara keskkonnale pakub ja kuidas ise tarkvarast sõltub. |
| Komponentskeem | See on ka arhitektuurijoonis; avab tarkvara siseehitust. Mittevajalik ainult triviaalsete tarkvarade puhul. |
| Kood eraldi koodirepos | |
| Testidokumentatsioon | Peab olema arusaadav, mida ja mis tulemustega on testitud. Kuna testimine ei ole kunagi kattev, siis peab olema võimalik ka aru saada, mida ei ole testitud. Need eesmärgid saavutatakse tavaliselt testiraporti ja testilugude abil. Keerukamal juhul on vaja testistrateegiat, testimise arhitektuurijoonist, makettide kirjeldust jm. |
| Kood ja dokumentatsioon on kokku kogutud | Dokumentatsiooni hoitakse ka repos. Tavaliselt koos koodiga. Dokumentatsioon peab olema kokku kogutud, mitte erinevates kohtades laiali, uputatud muu teabe sisse. |
| Mittevajalik on eraldi tõstetud | Valmis tarkvara juurde ei kuulu strateegiad, analüüsid, arhitektuurikavandid, projekti edenemiskoosolekute protokollid, memod, e-kirjad, nädalaaruanded, TODO-nimekirjad, Jira-taskid jne. Need kõik on vajalikud arenduses oleva tarkvara puhul, samuti tarkvara edasiarendamisel. |

**Kasutamine** siin tähendab, et tarkvarale saab tugineda, nii inimkasutamises kui ka liidestuste ja järgnevate tööde kavandamisel; on võimalik aru saada, mida tarkvara teeb ja mida ei tee ning repo põhjal, ilma arendamises osalenuid taga ajamata on võimalik aru saada, mis on arenduses saavutatud koodi kvaliteet. 



