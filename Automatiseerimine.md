---
title: Ärialgoritm
permalink: Automatiseerimine
---

# 3.3 Ärialgoritm
{: .no_toc}

- TOC
{:toc}

![](img/Algo.PNG)

## Automatiseerimine

<p class='tags'>Näide</p>
IT enda automatiseerimine on "kuum" teema. Infraosakond peab haldama kümneid erinevaid tarkvarasid ja süsteeme. Need on vaja endale selgeks teha, paigaldada, konfigureerida, tõrkeid kõrvaldada, veapaiku ja uuendusi peale panna... tööd on väga palju. Lisaks kõigele on hea süsadminid tööturul nõutud ja vahetavad töökohti. Süsteemide administreerimise automatiseerimine on seetõttu väga oluline.

__Automatiseerimine__ on inimtöö asendamine masina "tööga", masina toimimisega. Lihtsaimaks näi­teks on makro sal­ves­ta­mi­ne mõne lihtsa, kuid korduva, käsitsi sooritatava ope­rat­si­ooni jaoks teks­ti­tööt­lussüsteemis. Suuremõõtmeline näide on ter­ve elukutse kadumine arvutisüsteemide kasutuselevõ­tu tulemusena.

Mis on au­to­ma­ti­see­ri­mi­se juures olulisteks mo­mentideks?

*Automatiseerimine nõuab tehnilisi vahendeid ja oskusi.*{: .u} Makro sal­ves­ta­mi­ne ei ole keeruline, kuid vähegi ulatuslikuma makrode kogumi haldamine nõu­ab plaa­nimist, kindlat süsteemi ja eraldi tähelepanu.

*Automatiseerimine on võimalik ainult teatud piirini.*{: .u} Eraldiseisvat ope­rat­si­oo­ni, mille struktuur on mõistetav ja regulaarne, on lihtne automatiseerida. Ope­rat­sioonide komplekside, samuti vabama struktuuriga tegevuste auto­ma­ti­see­ri­mine on keerukas.

*Paindlikkuse kadumine.*{: .u} Automatiseerimine võib kaasa tuua paindlikkuse ka­dumise ja lõpp­kok­ku­võt­tes madalama kvaliteedi.

*Väiksemad kulud, suurem täpsus.*{: .u} Samas võib automatiseerimine alandada kulusid ja saavutada suuremat tehnilist täpsust. Automatiseerimine võib nii tõs­ta kui ka alandada operatsiooni kvaliteeti.

*Automatiseerimine võib võtta aega.*{: .u} Automatiseerimine ja de­au­to­ma­ti­see­ri­mi­ne (tagasiminek inimtööle) nõua­vad harilikult aega. Kahte süsteemi kõrvuti toi­mimas hoida on harilikult kulukas (e-pangandus ja inimtelleri kaudu klien­di­teenindus).

*Osaline automatiseerimine.*{: .u} Täielik automatiseerimine ei ole kaugeltki alati võimalik. Sageli on ots­tar­be­kas jätta osa funktsioone inimese teha. 

*Automatiseeritud töötlus ei ole alati inimtööga samaväärne.*{: .u} Seadus ütleb, et digiallkiri on samaväärne omakäelise allkirjaga. Õiguslikus mõttes küll, kuid samaväärsuse deklareerimine ei tee asju veel kõigis aspektides võrdseks. E-õpe ei ole samaväärne klassiruumis toimuva õppega, jne. Inimkäeline töö on tihtigi väär­tus­li­ku­m kui masinaga tehtu.

<p class='action'><i class="material-icons ikoon">help_circle</i>Kas tarbid mõnd toodet või teenust, milles müüja rõhutab käsitöö sisalduvust kui väärtust?</p> 

*Majanduslik tasuvus ja töötluse maht.*{: .u} Automatiseerimise majanduslik ta­su­vus sõltub töötluse mahust. 10 do­ku­men­di töötluseks ei ole vaja erilist süsteemi; 100 dokumendi töötluseks on vaja ju­ba teatud süsteemi; 1000 dokumendi tööt­lusel tekib vähemalt mõnede ope­rat­si­oonide automatiseerimise küsimus ju­ba teravalt; 100 000 dokumendi töötlus nõuab mitte ainult auto­ma­ti­see­ri­mist vaid ka jõudlusele mõtlemist. Iga ma­hu­aste toob kaasa uusi rõhuasetusi. 

## Algoritm ja masin

Kui ostame Eesti Ekspressi, kas mõtleme siis, kuidas ajaleht on kokku pandud? Iga nädal on uus leht. Iga artikkel on erinev. Kuid samas ka sarnane. Väljaande formaat, kontseptsioon, toimetusepoliitika, ajakirjanike väljakujunenud võtted. Väljaande jätkuvust loovad mitmed struktuurielemendid. Osal nendest on infotehnoloogiline kuju. Kujunduselemendid, mallid, tõenäoliselt mitmeid makrosid ja skripte. Kogu kirjutamise-toimetamise-avaldamise töövoog. Andmebaasid, mida ajakirjanikud kasutavad. Rolodexid (ajakirjanike kontaktimärkmikud). Veebianalüütika loetavuse kohta. -- Ajakirjanikul on võimalus mõjutada ja määrav jõud, kuid suure osa tööst teevad ära algoritmid. Spordi- ja majandusuudiste kirjutamine automatiseeritakse. Tõenäoliselt on kasutusel või võetakse peagi kasutusele targad algoritmid, mis analüüsivad turgu ja keskkonda ning annavad ajakirjanikule juhiseid, mida kirjutada. -- Ajaleht kui infot tootev masin. Selle pilguga vaadates tekib küsimus, kas meile suunatud targalt optimeeritud meediateave on objektiivse pildi saamiseks piisav? Kas meie kasutame ajalehte või äkki kasutab ajaleht meid?

Ilmselt nii seda kui teist. Kaugel mõttest, et ajakirjandus manipuleerib, ei, annab vajalikku teavet. Kuid samas on ajalehe eesmärk lugejat lugema panna ja tagasi tuua.

Tõenäoliselt ei piisa, kui tarbime ajakirjandust valimata, mida loeme ja vaatame ning mõistatamata, mis mehhanismiga teave on koostatud. Lugemisalgoritm.  

Ajakirjanduse algoritmi ja lugemisalgoritmi koostoimimine. "Enim loetud" on näide lugemisalgoritmi viimisest meediaväljaandesse endasse. 

"Algoritmide aeg" on populaarne teema, kus viimast sõna ilmselt pole veel öeldud. Nt Facebooki algoritm, Google algoritm. 

__Mis on algoritm?__ Algoritm on kahtlemata erinevate infotehnoloogiate üks tuummõiste.

> Algoritm on fikseeritud sõnastiku põhjal kirjutatud lõplik protseduur, mis toimib täpsete juhiste järgi, liigub diskreetsete sammude kaupa ja varem või hiljem jõuab lõpule. -- David Berlinski, matemaatik

<p class='action'><i class="material-icons ikoon">help_circle</i>Kas iga äri peaks rajanema oma, originaalsele algoritmile?</p>

__Ärialgoritm__ - võiksime kasutusele võtta sellise termini? - oleks siis täpne, samm-sammuline, IT-ga teostatav protseduur, mis loob ettevõttele väärtust ärilises mõttes.

__Ärimudel__ (_Business Model_) ja __ärireegel__ (_Business Rule_) on lähedased, kuid siiski erinevad mõisted. Kõik ärimudelid ei ole algoritmilised. Ärireegel on infosüsteemi analüüsis kasutusel otsustusreegli või piirangu tähenduses.

Ärialgoritmi võib ilusa välja mõelda, kuid kuidas seda teostada? Kohe puutume kokku sellega, et andmeid kas ei ole, või ei ole neile lihtsat ligipääsu. Andmed võivad olla madala kvaliteediga. Taristu, millele IT-lahendust ehitada, puudub. Kvaliteetne andmehõive oleks võimatult kallis. Jne.

![](https://1.bp.blogspot.com/-tavi58WFvb8/UkKGGRln8eI/AAAAAAAAFVk/6qRP2xNcG8s/s1600/image006.gif)

