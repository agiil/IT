---
title: 4Mudel
permalink: 4Mudel
layout: Times
---

# Mudelid ja spetsifikatsioonid agiilarenduses

_TL;DR;_

Agiilne mõtteviis muudab tarkvaraarenduse proportsioone. Nii mõnigi vaieldamatuks peetud eesmärk või arusaamine kaotab tähtsuse või leitakse isegi olevat eesmärkide saavutamisele vastutöötav. Seejuures ei tohi aga mittevajalikku minema visata.

Analüüsime nelja elemendi suhet: 1) mudelid; (2) programmikood; 3) testid; 4) tarkvara reaalne kasutamine. Traditsioonilises koskarenduses (_waterfall_) läbitakse etapid (1)-(2)-(3)-(4) spetsifikatsioon &rarr; programmeerimine &rarr; testimine &rarr; kasutamine. Etapid on rangelt piiritletud ja üksteisest eraldatud.

Traditsioonilise koskarenduse suurim probleem on selles, et enne tegelikku programmeerimist ja tarkvara proovikasutust koostatud spetsifikatsioonid kukuvad enamasti välja kasutajate vajadusi halvasti rahuldavatena, raskesti teostatavatena. Tulemusena arendusprojektid kas annavad tarkvara, millega kasutajad ei ole rahul, või mis ei jõua üldse reaalse kasutuseni. 

 Agiilarenduses põimuvad arendustegevused üksteisega tihedalt läbi. Võimalikuks saavad töövööd, kus tegevuste järjekord on peapeale pööratud, näiteks testidest lähtuv arendus (_TDD - test-driven development_).

 Mis saab agiilsele töökorraldusele üleminekul tarkvaraarenduses traditsioonilistest spetsifikatsioonidest, nõuetest, mudelitest, kirjeldustest, dokumentatsioonist?

Programmeerimine tekkis 1950-ndatel ja oli algselt seotud matemaatilise tõestamisega. Programm loeti lõpetatuks alles siis, kui programmi toimimiselt nõutud omadused (invariandid) olid tõestatud. Programmi "tõestamine" sarnanes matemaatilise teoreemi tõestamisega. See protsess ei olnud automatiseeritud, kuid nõudis programmi oluliste omaduste täpset määratlemist, tavaliselt mõnes formaliseeritud tähistussüsteemis. Tõestamine seisnes loogilise arutluse kirjapanemises ja kontrollimises teise inimese poolt. Selline protsess oli loomulikult  töömahukas ja nõudis matemaatilise ettevalmistusega inimesi. Hiljem kasvas tormiliselt testimine ja eraldus omaette arendusdistsipliin. Tänapäeval on testide täitmine suuresti automatiseeritud, testid on omaette programmid. Koodi ja testide (mõlemad on kood) proportsioon arendusprojektis võib olla 50:50 või isegi testide kasuks. Agiilarenduses tuleks hoiduda ohust, et tekib palju koodi ja palju teste - kood nagu töötaks ja testid ka töötavad - kuid pole spetsifikatsiooni. Agiilarendus peab töötavat koodi (_working code_) tähtsamaks kui täielikku dokumentatsioon (_comprehensive documentation_) [1]. Tarkvara kasutajaid ja tarkvara reaalset kasutamist peetakse tähtsamaks protsessikirjeldustest ja tööriistadest [ibid.].

See on õige - reaktsioonina üleprojekteerimisele (__overengineering). See ei ole õige, kui agiilsus viib mudelite ja spetsifikatsioonide eitamisele. Analoogia moodsa haridusega: pole olulised enam formaliseeritud kontseptuaalsed struktuurid ja nendest aru saama õppimine, vaid rühmatöö teemal, mis emotsioone üks või teine asi sinus tekitab. Arutelus ei ole valesid seisukohti!

Matemaatika on 4000 aastat vana. Tarkvara &mdash; kood, millel võib olla mahukas testikogum (_test suite_) ja isegi teatav reaalne kasutajaskond &mdash; kuid mis ei suhtestu ühegi formaalse kirjeldusega (mudeliga, spetsifikatsiooniga, standardiga jms) - on... lonkav. Miks? Seda on raske selgitada. Kood eksisteerib, testid eksisteerivad (aga miks just sellised testid ja mida need testivad?), kasutajad eksisteerivad ja arvavad midagi. Kuid igaüks võib arvata, ei ole valesid vastuseid, valesid arvamusi... 

Formaalne pole siin päris õige sõna. Eraldiseisev kirjeldus on võib-olla õigem. Kood on formaliseeritud tekst. Tihti väidetakse, et kood on ühtlasi iseenda formaliseeritud kirjeldus ja sellest piisab (isedokumenteeriv kood). Ei, koodist üksi ei piisa. Vaja on ka eraldiseisvat kirjeldust. Isegi mitut - näiteks müügiteksti. Kood ei müü end ise.

Väljakutse on aru saada, millal ja milliseid mudeleid ja spetsifikatsioone koostada. Koskarenduses tekkisid mudelid ja spetsifikatsioonid enne arendust (_up-front_). Agiilarenduses - arendusega samaaegselt või pigem mõningase viivitusega. Ilma spetsifikatsioonide-mudeliteta-müügitekstideta ei saa aga rääkida kvaliteetsest tarkvarast.  

[1] Manifesto for Agile Software Development, [http://agilemanifesto.org/](http://agilemanifesto.org/) 

<div class='paan dialoog'>

    <div class='d-flex flex-wrap align-items-center justify-content-center'>
        <div class='ruut'>
            <p>(1)</p>
            <p>
                <i class="ikoon material-icons">subject</i>
            </p>
            <p>
                Mudel(id)<br>
                Spetsifikatsioon(id)<br>
                Müügitekst(id)
            </p>
        </div>
        <div class='ruut'>
            <p>(2)</p>
            <p>
                <i class="ikoon material-icons">code</i>
            </p>
            <p>
                Kood
            </p>
        </div>
    </div>

    <div class='d-flex flex-wrap align-items-center justify-content-center'>
        <div class='ruut'>
            <p>(3)</p>
            <p>
                <i class="ikoon material-icons">account_circle</i>
            </p>
            <p>
                Kasutajakogemus<br>
                Reaalne kasutamine
            </p>
        </div>
        <div class='ruut'>
            <p>(4)</p>
            <p>
                <i class="ikoon material-icons">bug_report</i>
            </p>
            <p>
                Testid (automaat-)
            </p>
        </div>
    </div>

</div>

