---
title: Ärialgoritm
permalink: Automatiseerimine
---

# 3.3 Ärialgoritm

__Algoritm ja masin__

Kui ostame Eesti Ekspressi, kas mõtleme siis, kuidas ajaleht on kokku pandud? Iga nädal on uus leht. Iga artikkel on erinev. Kuid samas ka sarnane. Väljaande formaat, kontseptsioon, toimetusepoliitika, ajakirjanike väljakujunenud võtted. Väljaande jätkuvust loovad mitmed struktuurielemendid. Osal nendest on infotehnoloogiline kuju. Kujunduselemendid, mallid, tõenäoliselt mitmeid makrosid ja skripte. Kogu kirjutamise-toimetamise-avaldamise töövoog. Andmebaasid, mida ajakirjanikud kasutavad. Rolodexid (ajakirjanike kontaktimärkmikud). Veebianalüütika loetavuse kohta. -- Ajakirjanikul on võimalus mõjutada ja määrav jõud, kuid suure osa tööst teevad ära algoritmid. Spordi- ja majandusuudiste kirjutamine automatiseeritakse. Tõenäoliselt on kasutusel või võetakse peagi kasutusele targad algoritmid, mis analüüsivad turgu ja keskkonda ning annavad ajakirjanikule juhiseid, mida kirjutada. -- Ajaleht kui infot tootev masin. Selle pilguga vaadates tekib küsimus, kas meile suunatud targalt optimeeritud meediateave on objektiivse pildi saamiseks piisav? Kas meie kasutame ajalehte või äkki kasutab ajaleht meid?

Ilmselt nii seda kui teist. Kaugel mõttest, et ajakirjandus manipuleerib, ei, annab vajalikku teavet. Kuid samas on ajalehe eesmärk lugejat lugema panna ja tagasi tuua.

Tõenäoliselt ei piisa, kuid tarbime ajakirjandust valimata, mida loeme ja vaatame ning mõistatamata, mis mehhanismiga teave on koostatud. Lugemisalgoritm.  

Ajakirjanduse algoritmi ja lugemisalgoritmi koostoimimine. "Enim loetud" on näide lugemisalgoritmi viimisest meediaväljaandesse endasse. 

"Algoritmide aeg" on populaarne teema, kus viimast sõna ilmselt pole veel öeldud. Nt Facebooki algoritm, Google algoritm. 

__Mis on algoritm?__ Algoritm on kahtlemata erinevate infotehnoloogiate üks tuummõiste.

> Algoritm on fikseeritud sõnastiku põhjal kirjutatud lõplik protseduur, mis toimib täpsete juhiste järgi, liigub diskreetsete sammude kaupa ja varem või hiljem jõuab lõpule. -- David Berlinski, matemaatik

<p class='action'><i class="material-icons ikoon">help_circle</i>Kas iga äri peaks rajanema oma, originaalsele algoritmile?</p>

__Ärialgoritm__ - võiksime kasutusele võtta sellise termini? - oleks siis täpne, samm-sammuline, IT-ga teostatav protseduur, mis loob ettevõttele väärtust ärilises mõttes.

__Ärimudel__ (_Business Model_) ja __ärireegel_ (_Business Rule_) on lähedased, kuid siiski erinevad mõisted. Kõik ärimudelid ei ole algoritmilised. Ärireegel on infosüsteemi analüüsis kasutusel otsustusreegli või piirangu tähenduses.

Ärialgoritme võib ilusa välja mõelda, kuid kuidas seda teostada? Kohe puutume kokku sellega, et andmeid kas ei ole, või ei ole neile lihtsat ligipääsu. Andmed võivad olla madala kvaliteediga. Taristu, millele IT-lahendust ehitada, puudub. Kvaliteetne andmehõive oleks võimatult kallis. Jne.

```
if (oskame_struktureerida_masinale) {
  automatiseerime
} else {
  if (oskame_struktureerida_inimesele) {
    korraldame
  } else {
    tegutseme_ad_hoc
  }
}
```
