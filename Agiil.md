---
title: Agiilne arendus
permalink: Agiil
---

# ⇜ Agiilne arendus
{: .no_toc}

- TOC
{:toc}

Agiilarendus, ingl k _agile development_ või ka lihtsalt _agile_, on 1980-ndatel tekkinud mõtteviis, mis ütleb, et tarkvara tegemisel :

- ei tuleks mõelda liiga palju ette: ehitada grandioosseid mudeleid, teha pikaajalisi detailseid plaane
- ei tuleks üritada kohe saavutada maksimaalset tulemust - kõigi kasutajate kõigi võimalike soovide teostamist
- vaid teha lihtne, üldjoontes plaan
- valida välja esimesed, kõige tähtsamad kasutajate vajadused
- ja hakata vaikselt minema
- teha valmis esimene töötav versioon tulevasest süsteemist
- katsetada seda
- ja vaadata, kuidas töötab
- kui siis on veel jaksu, tahtmist ja reaalset vajadust, siis arendada edasi.

Aga vastuargument: kas pooliku tootega välja minek ikka on hea mõte?
{: .s}

Nii on garanteeritud, et tekib töötav süsteem.

Tänapäevaks on agiilmeetodid saanud tarkvaraarenduse peavooluks (_mainstream_), üldtunnustatud arendusmeetodiks. Praktika on kinnitanud, et agiilarenduses:

- saadav tarkvara vastab paremini kasutajate vajadustele
- tähtaegade ja maksumuse risk on väiksem.

__Miks agiilarendus on üldse teema?__

Vastus peitub osalt tarkvara tegemise olemuslikus keerukuses ja osalt organisatsiooni- ja inimese psühholoogias.

- pikaajaliste detailsete plaanide tegemisel kaldub inimene ülehindama oma võimet kõiki seoseid arvesse võtta ja läbi näha
- planeerimine ja ennustamine põhinevad alati teatud eeldustele ja teadaolevale infole; inimene kipub üle hindama eelduste kehtivust ja teadaoleva info täielikkust ning paikapidavust
- näiteks tulevasi kasutajaid küsitledes võib jääda mulje, et kasutajad teavat täpselt, mida nad tahavad. Tegelikult võib oma tahtmiste artikuleerimine olla pikk protsess; tahtmised muutuvad aja jooksul; inimeste eelistused muutuvad jne.

__[Agiilse tarkvaraarenduse manifest](http://agilemanifesto.org/iso/et/manifesto.html)__ on 2001. a tuntud agiilmõtlejate poolt kokku pandud 4-punktiline deklaratsioon, agiilliikumise ideoloogiline tüvitekst. Mõtet on orginaalsõnastused meelde jätta:

- __Individuals and interactions over processes and tools__

inimesed ja nendevaheline suhtlus on tähtsam kui protsessid ja arendusvahendid

- __Working software over comprehensive documentation__

töötav tarkvara on olulisem kui kõikehõlmav dokumentatsioon

- __Customer collaboration over contract negotiation__

- koostöö kliendiga on loob rohkem väärtust kui läbirääkimised lepingute üle

- __Responding to change over following a plan__

reageerimine muutunud oludele on adekvaatsem kui algsest plaanist kinnihoidmine

- [Scaled Agile Framework](http://www.scaledagileframework.com/)
- [Comparing scaling agile frameworks](http://www.cio.com/article/2974436/agile-development/comparing-scaling-agile-frameworks.html)

- [10 modern software engineering mistakes](https://medium.com/@rdsubhas/10-modern-software-engineering-mistakes-bc67fbef4fc8#.624dxgpz1) 

Erder & Pureur (2016) What's the Architect's Role in an Agile, Cloud-Centric World?. IEEE Software.

__Agiilne tööde struktuur__. Nt: 1) eepik (_Epic_) - _"high-level goal of the product for the multi-release time horizon"_; 2) featuur (_Feature_) - eepiku osa, mis teostatav ühe reliisitsükliga; 3) kasutuslugu (_User Story_) - featuuri osa, funktsionaalsuse väike tükk kasutaja vaatepunktist; 4) ülesanne (_Task_) - tehniline ülesanne, mida on vaja kasutusloo teostamiseks.

[Heikkilä et al (2015) Operational release planning in large-scale Scrum with multiple stakeholders – A longitudinal case study at F-Secure Corporation. Information and Software Technology.](http://www.sciencedirect.com/science/article/pii/S0950584914002043) 

Võtmesõna seejuures on reliis (_Release_). Kosemudeli järgi toimuvas arenduses reliisitakse tüüpiliselt kord aastas või veel harvemini. Avaarenduse guru Eric S. Raymond aga ütleb, et „Release early, release often“.

Vrdl: 1) strateegia; 2) tööplaan; 3) tegevuskava; 4) arenduse iteratsioon; 5)  minihange; 6) etapp; 7) tööpakett; 8) omadus/nõue


## Agiilarenduse kontrolliprotseduur

("Agiilsusbaromeeter")

Küsimused on mõeldud vastamiseks Tellijale. Küsitletakse mitut Pakkuja poolt referentsina esitatud Tellijat. Punktid summeeritakse ja arvutatakse keskmine.

__1  Kas tellisite arendustööd klassikalise koskmudeli (ingl _Waterfall_) järgi või soovisite agiilset arendust?__

Märkus. Koskmudeli tunnusteks on ühe või mitme järgmise elemendi esinemine: tööde teostamine enne arendust koostatud spetsifikatsiooni v põhjaliku lähteülesande alusel; lähteülesande fikseerimine lepingus (muudatuste mitte ette nägemine); tööde jagamine etappideks - analüüs, projekteerimine, programmeerimine, juurutamine jne; tulemite üleandmine etapi või lepingu lõpus; töötava, paigaldatud koodi valmimine lepingu lõpuks.

(kui koskmudel, siis 0 punkti ja intervjuu lõpp)

__2  Kas Täitja lubas pakkumuses, et teostab tööd agiilselt?__

Jah - 0 p, Ei - 0 p

Märkus. Sõna "agiilne" kasutamine iseenesest pole määrav.

__3  Kas teie arvates tööd teostati agiilselt?__

Jah - 3 p, Ei -0 p; Ei oska öelda - 0 p

__4  Kas tööd teostati iteratsioonidega (arendustsüklitena)? Kui pikk oli üks iteratsioon?__

Jah, interatsioon kuni 2 nädalat - 2 p; Ei või iteratsiooni pikkus üle 2 nädala - 0 p

__5  Kas igal iteratsioonil teostati väike arv kasutuslugusid või kasutajale vajalikke omadusi?__

Jah - 2 p, Ei - 0 pt

__6  Palju kasutuslugusid oli korraga töös?__

Kuni 8 kasutuslugu - 2 pt; kuni 12 kasutuslugu - 1 pt; üle 12 kasutusloo või kõik kasutuslood - 0 pt

__7  Kas iga iteratsiooni lõpuks valmis töötav kood (mitte prototüüp), mida demonstreeriti Tellijale?__

Jah - 2 p, Ei - 0 p

__8  Kui tihe oli Täitja ja Tellija arendajate suhtlus?__

Igapäevane, arendus toimus in-premise, Tellija ruumides - 4 pt; igapäevane skype-i vms suhtluskeskkonna abil koos iganädalaste koosolekutega - 3 pt; iganädalasel koosolekul ja vajadusel e-postiga - 0 pt

__9  Kui pikk oli iganädalane projektikoosolek?__

Kuni 1 h - 1 p, üle tunni - 0 p

__10  Kas Täitja meeskonnas oli Scrum Certified Master vm analoogiliste agiilmeetodite sertifikaatidega liikmeid?__

Jah - 0 p, Ei - 0 p

__11  Palju kulus aega minimaalse funktsionaalsusega, piirangutega, kuid siiski lõppkasutaja seisukohast kasutatava lahenduse tekkimiseks?__

Kuni 2 kuud projekti algusest - 2 pt, kuni 3 kuud projekti algusest - 1 p, kauem kui 3 kuud - 0 p

---

Hindamisskaala: 15 või rohkem punkti - agiilarenduse kogemus on tõendatud; 0-14 punkti - agiilarenduse kogemus ei ole tõendatud
