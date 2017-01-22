---
sidebar: false
title: 4.1 IT-arenduse õppetunde
permalink: Oppetunde
---

# 4.1 IT-arenduse õppetunde

Sisukord

- Mida siis raha eest saime? (koodistatistika)
- Odav tarkvara? (koodistatistika)
- Kosemudeliga või agiilselt?
- Vali jõukohane raskus
- Codemonkeyism
- Kust tekib keerukus?
- Minimeeri vaheprodukti
- Mis töötab? (dokumentatsioon)
- Mis töötab (hankimine)

__Mida siis raha eest saime? (koodistatistika)__

Praktika näitab, et tehnilisi küsimusi ei õnnestu hoida lahus ärilistest.

IT-ga on võimalik teha kõike, aga kui hakkame tegema, siis selgub, et kõik maksab.

Seetõttu on oluline analüüsida, mida arendusraha kulutamine annab. Mõned elementaarsed arvutused ühe projekti kolme etapi kohta:

|    | [DHX Etalonteostus](https://github.com/e-gov/DHX-etalon) | [DVK täiendamine](https://github.com/e-gov/DVK) | [DHX Adapter](https://github.com/e-gov/DHX-adapter) |
|----------------|:-----------:|:----------:|:------------:|
| Olulisus       | MUST HAVE   | MUST HAVE  | NICE TO HAVE |
|                |             | (peaaegu)  |              |
| Kasutuslugusid | 6           | n/a        | 6            |
| Testilugusid   | 9           | 33         | 34           |
| Dok-n, ridu    | 1130        | n/a        | 6250         |
| Koodiridu (LOC)| 2000        | 21 400     | 45 000       |
| Faile          | 125         |            | 3374         |
| Kaustu         | 58          |            | 273          |
| Maksumus       | *€31,580*{: .c}  | *€19,900*{: .c} | *€35,800*{: .c}  |
| €/LOC          | *€16*{: .c} | *€0.93*{: .c} | *€0.80*{: .c} |
| €/Kasutuslugu  | *€5300*{: .c} |            | *€6000*{: .c} |
| LOC/Kasutuslugu| 333         |            | 7500         |

__Odav tarkvara? (koodistatistika)__

|                | Projekt A (üks moodul) | Projekt B   | Projekt C |
|----------------|:----------------------:|:-----------:|:---------:|
| Meetod         | Kosemudel              | Kosemudel   | Agiilne   |
| Eesmärk        | täislahendus           | täislahendus| MVP*      |
| Koodiridu (LOC)| ca 30 000              | 5000        | 4000      |
| Maksumus       | *€11,500*{: .c}        | *€150,000*{: .c} | *€10,000*{: .c} |
| €/LOC          | *€0.33*{: .c}          | *€30*{: .c} | *€3*{: .c}|
| Kasutuslugusid | ca 8                   | n/a         | 8 + 2     |
| Dokumentatsioon| jah                    | jah         | ei        |
| Dok-ni kvaliteet  | kehv                   | suurepärane |           |
| Kasutatav      | ei                     | jah         | jah       |
| Üldkvaliteet   | kehv                   | suurepärane | väga hea  |

*MVP, _Minimal Viable Product_, minimaalne toimiv lahendus

<p class='tags' style='margin-top: 2em;'>Also</p>
- Alice Cooper (1973) [No More Mr Nice Guy](https://youtu.be/KN6ngThqMEs)
- Glover, R (2003) [No More Mr Nice Guy](https://www.amazon.com/No-More-Mr-Nice-Guy/dp/0762415339). A Proven Plan For Getting What You Want in Love, Sex, And Life.

__Kosemudeliga või agiilselt?__

Sama funktsionaalsus, pärast kosemudeli ebaõnnestumist:

|           |  Kosemudeliga | Agiilselt |
|-----------|:----------:|:-------:|
| Eesmärk   | "Täisvärk" | MVP* |
| Maksumus | *€190,000*{: .c} | *€10,000*{: .c} |
| Teostatud | ei (katkestatud) | jah |
| Aeg | 9 kuud (katkestatud) | 2 nädalat |
| Tulemus kasutatav | õppetunnina, koodi kasutamine problemaatiline | jah |

*MVP, _Minimal Viable Product_, minimaalne toimiv lahendus

Arvutus näitavad, et *agiilarendus võib sama funktsionaalsuse anda 10-15 korda odavamalt ja 10-20 korda kiiremalt.*{: .u}

Asi ei tarvitse olla 10X kiiremates programmeerijates - tõenäoliselt ei olegi -  vaid selles, et *agiilne projekt sunnib Tellijat teisiti tegutsema.*{: .u}

<p class='tags'>Also</p>
[10X software engineer](https://www.quora.com/topic/10X-Engineers)

__Vali jõukohane raskus__

<div style='display: flex; width: 300px; height: 355px; align-items: flex-end; margin: 2em 4em;'>
  <div style='flex: 1; height: 50px; text-align: center: border: 1px solid #8BC34A;'>Basic</div>
  <div style='flex: 1; height: 150px; text-align: center: border: 1px solid #C5E1;'>Nice to Have</div>
  <div style='flex: 1; height: 250px; text-align: center: border: 1px solid #FF9800;'>Äge</div>
  <div style='flex: 1; height: 350px; text-align: center: border: 1px solid #FF5722;'>Ülikõva</div>
</div>

Ambitsioonitase on äärmiselt oluline.

Teeme kõigepealt baastaseme ära, siis täiendame ja alles seejärel viime asja ägedaks ja ülikõvaks - kui veel tahtmist, ressurssi ja tegelikku vajadust tolleks momendiks jagub.

__Codemonkeyism__

|                            | Projekt A | Projekt B |
|----------------------------|:---------:|:---------:|
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

C- nõrk, vajalik Tellija tugev järelevalve ja osade asjade ise ette- või ärategemine; B - hea; A - väga hea, üle ootuste.

Rida probleeme:

- Eesti IT-firmade* võime tööd korraldada on madal
- Töökorralduslikud oskused ei ole aastatega tõusnud, pigem vastupidi
- Oskuste profiilid on ebaühtlased; vajalikud kompetentsid tavaliselt kaetud ebaühtlaselt
- Võimekaid, häid spetsialiste ei osata täie efektiivsusega rakendada - ebakompetentne juhtimine
- Tellijal ei jää muud üle, kui nõrgad kompetentsid oma tööga täita
- IT-arenduse tuumaks peetakse firmades koodi kirjutamist; tarkvaraarendus on aga ainult üks element; paralleelselt peaks käima äriprotsesside ja töövoogude arendus ja muutuste eestvedamine; organisatsiooniliste muutuste juhtimise oskusi IT-firmadel pole.

*kindlasti on tugevaid, välisturule või erasektorile töötavaid ettevõtteid, kelle suhtes väide ei kehti 

__Kust tekib keerukus?__

Keerukus tekib juba haridussüsteemis

  - mentaliteet "Rohkem on parem"
  - Eesti kultuuris puudub lihtsuseguru
  - Eesti IT-s puudub oma Standish Group.

Tulemuseks on inimesed 'not capable of simple'.

Ilmingud:

  - mahu pärast genereeritud projektiplaanid, arendusdokumendid
  - äriprotsessi kirjeldus 80 lk. See ei ole kasutatav.

_If I Had More Time, I Would Have Written a Shorter Letter -- Blaise Pascal (1657)_

Lihtsus ei teki iseenesest.

Lihtsuse saavutamine nõuab jõupingutust.

Lihtsus võib nõuda rohkem oskust kui keerukus.

  - _One-liner_-i kirjutamine pole lihtne.

Lihtsuse hoidmine nõuab jõupingutust.

*Lihtsusele pürgiva jõu olemasolu on projekti õnnestumise eeldus.*{: .u}

__Minimeeri vaheprodukti__

80 mlrd $ aastas - ostab IT-d USA föderaalvalitsus.

Kasutust leiab ainult 1/3 ostetud tarkvarast.

> End users fail entirely to use nearly 45% of features procured and rarely use another 19% percent of those features. -- Balter, B (2011) Toward a More Agile Government: The Case for Rebooting Federal IT Procurement. _Public Contract Law Journal_.

Vaheprodukt (_WIP, Work-In-Progress_):

  - strateegia, tegevuskava, raamistik, juhend
  - arhitektuurne mudel, äriprotsessi kirjeldus jne 
  - üleminekukava
  - igasugune projekti- ja arendusdokumentatsioon.

- Lõpp-produkt (_End Product_):

  - töötav tarkvara, mida ka tegelikult kasutatakse.

Minimeeri töösolevat produkti (_minimise WIP_).

Projekti- ja arendusdokumentatsiooni rohkus ainult suurendab WIP-i.
  
__Mis töötab? (dokumentatsioon)__

|               | Projekt A | Projekt B | Project C | Projekt D | Projekt E |
|---------------|:---------:|:---------:|:---------:|:---------:|:---------:|   
| Dok kvaliteet |  3+       |    5      |    3      |    4-     |   5+      |
| Eraldi dok-ja |   ei      |   jah     |   ei      |    ei     |  jah      |

5+ suurepärane, üle ootuste, Tellija osalusvajadus minimaalne
4- hea, vajalik suur Tellija osalus
3 - vastuvõetav, suure Tellijapoolse tagaajamisega 

*Kvaliteetdokumentatsioon ei teki muu arendustöö kõrvalt, vaja eraldi inimest*{: .u}

Inimene teeb kvaliteetset dokumentatsiooni, kui

  - *tal on selleks talenti*{: .u}
  - *talle antakse selleks aega.*{: .u}

__Mis töötab (hankimine)__

Nordeconi projektijuht: "Allhankijate probleeme? Ei ole. Kui tahad järgmine kord ka tööd saada, siis teed korralikult"

