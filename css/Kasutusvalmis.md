---
layout: Times
title: Kasutusvalmis tarkvara
permalink: Kasutusvalmis
---

# Kasutusvalmis tarkvara

Millal saame rääkida reaalsest tarkvarast?

Minimaalne nõuete komplekt

Juhtmõte: Arendus peab olema agiilne, kuid tulemus tuleb fikseerida.

Alljärgnev ei rakendu triviaalsetele tarkvaradele - need on erandid.

|  | Nõue              | Selgitus |
|  |-------------------|-----------|
|  | Püsiv, korrektne nimi | Tarkvaral, millel pole püsivat nime, pole ka püsivat skoopi.  Järelikult pole ka fookust, kood pole puhastatud sinna-tänna liikunud arendusest jne. Argikeelsed nimetused a la "Anatoli tükk", "see julla" jne pole piisavad |
|  | Tarkvaraga pakutava teenuse nimetus | Iga tarkvara peab kellelegi midagi pakkuma |
|  | Sihtrühm | Sihtrühmata ei ole teenust |
|  | Kasutusvoo kirjeldus | Samm-sammuline, ei pea tingimata olema tabeli või diagrammi vormis | 
|  | Tarkvara spetsifikatsioon (argikeeles - "spekk") | Lihtsamal juhul piisab tarkvara oluliste funktsionaalsete omaduste loetelust. Miks see on vajalik? Iga vajadust võib lahendada laiemalt või kitsamalt. Kui tarkvara pakub teavet masinliidese kaudu, siis ka liidese spekk. |
| Arhitektuurijoonis | Ükski tarkvara pole asi iseeneses, arhitektuurijoonis peab spetsifitseerima, mida tarkvara keskkonnale pakub ja kuidas ise tarkvarast sõltub |
| Komponentskeem | see on ka arhitektuurijoonis; avab tarkvara siseehitust. Mittevajalik ainult triviaalsete tarkvarade puhul |
| Kood | Kood peab asuma eraldi koodirepos |
| Testidokumentatsioon | Peab olema arusaadav, mida ja mis tulemustega on testitud. Testimine ei ole kunagi kattev. P.o võimalik aru saada, mida ei ole testitud. Need eesmärgid lahendatakse testiraporti ja testilugude abil. Keerukamal juhul on vaja testistrateegiat, testimise arhitektuurijoonist, makettide kirjeldust jm. |
| Kood ja dokumentatsioon kokkukogutud ja koos | Dokumentatsiooni hoitakse ka repos. Tavaliselt koos koodiga. Dokumentatsioon peab olema kokku kogutud, mitte erinevates kohtades laiali, uputatud muu teabe sisse. |
| Mittevajalik eraldi tõstetud | Valmis tarkvara juurde ei kuulu strateegiad, analüüsid, arhitektuurikavandid, projekti edenemiskoosolekute protokollid, memod, e-kirjad, nädalaaruanded, TODO-nimekirjad, Jira-taskid jne. Need kõik on vajalikud arenduses oleva tarkvara puhul, samuti tarkvara edasiarendamisel. Valmis tarkvara tähendab seda, et tarkvara seis on fikseeritud.|

Kokkuvõttes - valmis tarkvara on selline, kus arenduse tulemus on fikseeritud
- kood on repos
- dokumentatsioon on repost leitav
  - Ärivaade:
    - tarkvara nimetus
    - teenuse nimetus
    - sihtrühm
    - kasutusvoog
  - Tehniline vaade
    - Tarkvara spetsifikatsioon
      - oluliste funktsionaalsete omaduste loetelu 
      - arhitektuurijoonis
      - komponentskeem
      - masinliidese (API) spetsifikatsioon
- kood
- testidokumentatsioon
  - testiraport
  - testilood
- ajakohasuse kaotanud ja kõrvaline teave on eraldi tõstetud.





