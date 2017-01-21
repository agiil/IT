---
sidebar: false
title: Koodistatistika
permalink: 
---

# Mida raha eest saime?

Sisukord

- Koodistatistika 1
- Koodistatistika 2
- Waterfall versus Agile
- Ambitsioonitase
- Codemonkeyism
- Kust tekib keerukus?
- Minimise WIP
- Dokumentatsiooni kvaliteet

__Koodistatistika 1__

|    | [DHX Etalonteostus](https://github.com/e-gov/DHX-etalon) | [DVK täiendamine](https://github.com/e-gov/DVK) | [DHX Adapter](https://github.com/e-gov/DHX-adapter) |
|----------------|:-----------:|:----------:|:------------:|
| Olulisus       | MUST HAVE   | MUST HAVE  | NICE TO HAVE |
|                | (essential) | (almost)   |              |
| Kasutuslugusid | 6           | N/A        | 6            |
| Testilugusid   | 9           | 33         | 34           |
| Dok-n, ridu    | 1130        | N/A        | 5200         |
| Koodiridu (LOC)| 2000        | 21 400     | 45 000       |
| Faile          | 125         |            | 3374         |
| Kaustu         | 58          |            | 273          |
| Maksumus       | *€31,580*{: .c}  | *€19,900*{: .c} | *€35,800*{: .c}  |
| €/LOC          | *€16*{: .c} | *€0.93*{: .c} | *€0.80*{: .c} |
| €/Kasutuslugu  | *€5300*{: .c} |            | *€6000*{: .c} |
| LOC/Kasutuslugu| 333         |            | 7500         |

__Koodistatistika 2__

|                | Projekt A (üks moodul) | Projekt B   | Projekt C |
|----------------|:----------------------:|:-----------:|:---------:|
| Meetod         | Waterfall              | Waterfall   | Agiilne   |
| Eesmärk        | täislahendus           | täislahendus| MVP*      |
| Koodiridu (LOC)| ca 30 000              | 5000        | 4000      |
| Maksumus       | *€11,500*{: .c}        | *€150,000*{: .c} | *€10,000*{: .c} |
| €/LOC          | *€0.33*{: .c}          | *€30*{: .c} | *€3*{: .c}|
| Kasutuslugusid | ca 8                   | n/a         | 8 + 2     |
| Dokumentatsioon| jah                    | jah         | ei        |
| Dok kvaliteet  | kehv                   | suurepärane |           |
| Kasutatav      | ei                     | jah         | jah       |
| Üldkvaliteet   | kehv                   | suurepärane | väga hea  |

*MVP, _Minimal Viable Product_, minimaalne toimiv lahendus

<p class='tags' style='margin-top: 2em;'>Also</p>
- Alice Cooper (1973) [No More Mr Nice Guy](https://youtu.be/KN6ngThqMEs)
- Glover, R (2003) [No More Mr Nice Guy](https://www.amazon.com/No-More-Mr-Nice-Guy/dp/0762415339). A Proven Plan For Getting What You Want in Love, Sex, And Life.

__Waterfall versus Agile, sama funktsionaalsuse teostamine__

|           |  Waterfall | Agiilne |
|-----------|:----------:|:-------:|
| Eesmärk   | "Täisvärk" | MVP* |
| Maksumus | *€190,000*{: .c} | *€10,000*{: .c} |
| Teostatud | ei (katkestatud) | jah |
| Aeg | 9 kuud (katkestatud) | 2 nädalat |
| Tulemus kasutatav | õppetunnina, koodi kasutamine problemaatiline | jah |

*MVP, _Minimal Viable Product_, minimaalne toimiv lahendus

- Arvutus näitavad, et *agiilarendus võib sama funktsionaalsuse anda 10-15 korda odavamalt ja 10-20 korda kiiremalt*{: .u}
- Asi ei tarvitse olla 10X kiiremates programmeerijates - tõenäoliselt ei olegi -  vaid selles, et *agiilne projekt sunnib Tellijat teisiti tegutsema*{: .u}

<p class='tags'>Also</p>
[10X software engineer](https://www.quora.com/topic/10X-Engineers)

__Ambitsioonitase__

<div style='display: flex; width: 300px; height: 400px; align-items: flex-end; margin: 2em 4em;'>
  <div style='flex: 1; height: 50px; background-color: #C5E1A5;'>Basic</div>
  <div style='flex: 1; height: 150px; background-color: #FFF59D;'>Nice to Have</div>
  <div style='flex: 1; height: 250px; background-color: #FFCC80;'>Äge</div>
  <div style='flex: 1; height: 350px; background-color: #FFAB91;'>Ülikõva</div>
</div>

__Codemonkeyism__

|                            | Projekt A | Projekt B |
|----------------------------|-----------|-----------|
| Programmeerimine           |  C        |  B/A      |
| Infohaldus                 |  C        |   C       |
| Joonis                     |  C        |  C/A      |
| Kaardistav analüüs         |  B        |   B       |
| Kontseptsiooni loov analüüs|  C        |   B       |
| Optimeeriv analüüs         |  C        |   A       |
| Originaalne mõtlemine      |  C        |   B       |
| Probleemi analüüs          |  C        |   A       |
| Protsessi v töövoo kujundamine |  C |  C | 
| Kasutajaliides             |  C        |   C       |
| Lihtsus                    |  C        |   C/A     |
| Kavast kinnipidamine       |  C        |   B       |
| Kirjutamine                |  C        |   B/A     |      
| Raporteerimine             |  C        |   C       |
| Selgitamine                |  C        |   A/C     |
| Spetsifitseerimine         |  C        |   C/A     |
| Tegevuskava koostamine     |  C        |   C       |
| Muutuste eestvedaja        |  C        |   C       |

C- nõrk, vajalik Tellija tugev järelevalve ja osade asjade ise ette- või ärategemine; B - hea; A - väga hea

- Eesti IT-firmade* võime tööd korraldada on madal
- Töökorralduslikud oskused ei ole aastatega tõusnud, pigem vastupidi
- Oskuste profiilid on ebaühtlased; vajalikud kompetentsid tavaliselt kaetud ebaühtlaselt
- Võimekaid, häid spetsialiste ei osata täie efektiivsusega rakendada - ebakompetentne juhtimine
- Tellijal ei jää muud üle, kui nõrgad kompetentsid oma tööga täita
- IT-arenduse tuumaks peetakse firmades koodi kirjutamist; tarkvaraarendus on aga ainult üks element; paralleelselt peaks käima äriprotsesside ja töövoogude arendus ja muutuste eestvedamine; organisatsiooniliste muutuste juhtimise oskusi IT-firmadel pole.

*kindlasti on tugevaid, välisturule või erasektorile töötavaid ettevõtteid, kelle suhtes väide ei kehti 

__Kus tekib keerukus?__

- Keerukus tekib juba haridussüsteemis
  - mentaliteet "Rohkem on parem"

<p><span id='L1' class="lyliti">näide
 <i class='material-icons'>add_circle</i></span></p>

<div id='lylitatavL1' style='display: none;'>
  - 11-kohaline tudengi identifikaator<br>
  - <i>heavyweight</i> hindamissüsteemid
  <img src='img/Koodid.PNG'>
</div>

- tulemuseks on inimesed 'not capable of simple'

- Ilmingud: mahu pärast genereeritud projektiplaanid, arendusdokumendid
- Näide: Äriprotsessi kirjeldus 80 lk. See ei ole kasutatav

_If I Had More Time, I Would Have Written a Shorter Letter -- Blaise Pascal (1657)_

- Lihtsus ei teki iseenesest 
- Lihtsuse saavutamine nõuab jõupingutust
- Lihtsus võib nõuda rohkem oskust kui keerukus
  - _One-liner_-i kirjutamine pole lihtne
- Lihtsuse hoidmine nõuab jõupingutust
- *Lihtsusele pürgiva jõu olemasolu pn projekti õnnestumise eeldus*{: .u}

__Minimise WIP__

USA Föderaalvalitsus ostab IT-de 80 mlrd $ aastas; kasutust leiab ainult 1/3 tarkvarast.

> End users fail entirely to use nearly 45% of features procured and rarely use another 19% percent of those features. -- Balter, B (2011) Toward a More Agile Government: The Case for Rebooting Federal IT Procurement. _Public Contract Law Journal_.


__Dokumentatsiooni kvaliteet__

|               | Projekt A | Projekt B | Project C | Projekt D | Projekt E |
|---------------|:---------:|:---------:|:---------:|:---------:|:---------:|   
| Dok kvaliteet |  3+       |    5      |    3      |    4-     |   5+      |
| Eraldi dok-ja |   ei      |   jah     |   ei      |    ei     |  jah      |

5+ suurepärane, üle ootuste, Tellija osalusvajadus minimaalne
4- hea, vajalik suur Tellija osalus
3 - vastuvõetav, suure Tellijapoolse tagaajamisega 

- *kvaliteetdokumentatsioon ei teki muu arendustöö kõrvalt, vaja eraldi inimest*{: .u}
- inimene teeb kvaliteetset dokumentatsiooni, kui
  - *tal on selleks talenti*{: .u}
  - *talle antakse selleks aega*{: .u}



