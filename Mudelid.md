---
title: Mudelid
permalink: Mudelid
layout: Times
---

# Mudelid ja spetsifikatsioonid agiilarenduses

<p class='tldr' style='
  margin: 2rem 8rem 2rem 2rem;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid Aquamarine;
  background-color: Azure;'>
_TL;DR;_ Iga pidu saab kord otsa. Agiilarendus on meeldiv, kuid mitte lõputu protsess. Tulemuse fikseerimisel on mudelitel ja spetsifikatsioonidel võtmeroll (reaalse kasutuse ja kasutajate arvamuse järel).
</p>

Agiilne mõtteviis muudab tarkvaraarenduse proportsioone. Nii mõnigi vaieldamatuks peetud eesmärk või töövõte kaotab tähtsuse või isegi heidetakse kõrvale kui eesmärkide saavutamisele vastutöötav. Seejuures ei tohi aga mittevajalikku minema visata.

***Üheks kõrvalejätmisohus olevaks, kuid tegelikult vajalikuks arenduselemendiks on mudelid ja spetsifikatsioonid***. Mudelite ja spetsifikatsioonide all pean silmas ka nõudeid, kasutusjuhendeid, müügitekste ja üldse igasuguseid koodist eraldiseisvaid, vähem või rohkem formaliseeritud kirjeldusi, millele vastavust on tarkvara (koodi) puhul võimalik objektiivselt hinnata. Ei pea siin silmas agiilses tööprotsessis spontaanselt tehtavaid, _throwaway_ jooniseid, tarbetekste jm artefakte, mis kaotavad kiiresti ajakohasuse (kuna neid ei ajakohastata) ja millel seetõttu ei ole püsivat väärtust.

<style>
    .joonis {
        border-radius: 8px;
        border: 1px solid darkgrey;
        margin 2rem 8rem;
    }
    .ruut {
        width: 40%;
        padding: 1rem;
        margin: 1rem 1rem;
        height: 10rem; 
        text-align: center;
    }
    .ikoon {
        font-family: 'Material Icons';
        font-size: 48px;
        color:darkgray;
    }
</style>

<div class='joonis'>

    <div class='d-flex flex-wrap align-items-center justify-content-center'>
        <div class='ruut d-inline'>
            <p>(1)</p>
            <p>
                <i class="ikoon material-icons">subject</i>
            </p>
            <p>
                Mudelid, Spetsifikatsioonid
            </p>
        </div>
        <div class='ruut d-inline'>
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
        <div class='ruut d-inline'>
            <p>(4)</p>
            <p>
                <i class="ikoon material-icons">account_circle</i>
            </p>
            <p>
                Kasutajakogemus<br>
                Reaalne kasutamine
            </p>
        </div>
        <div class='ruut d-inline'>
            <p>(3)</p>
            <p>
                <i class="ikoon material-icons">bug_report</i>
            </p>
            <p>
                Testid (automaat-)
            </p>
        </div>
    </div>

</div>

Mudelid ja spetsifikatsioonid on tarkvaraarenduses tähtsal kohal. Traditsioonilises koskarenduses  (_waterfall_) ületähtsustatud, agiilarenduses - reaalne oht, et saavad alatähtsustatud. Arenduse neli tähtsat elementi: 1) mudelid; (2) programmikood; 3) testid; 4) tarkvara reaalne kasutamine (vt joonis). Koskarenduses läbitakse etapid: spetsifikatsioon (1) &rarr; programmeerimine (2) &rarr; testimine (3) &rarr; kasutamine (4). Etapid on rangelt piiritletud.

Traditsioonilise koskarenduse suurim probleem on selles, et enne tegelikku programmeerimist ja tarkvara proovikasutust koostatud spetsifikatsioonid kukuvad välja kasutajate vajadusi halvasti rahuldavatena, raskesti teostatavatena. Tulemusena arendusprojekt annab tarkvara, millega kasutajad ei ole rahul või ei jõua tarkvara üldse reaalse kasutuseni. 

Agiilarenduses põimuvad arendustegevused üksteisega tihedalt. Võimalikuks saavad erinevad töövööd, sealhulgas sellised, kus tegevuste järjekord on traditsioonilisega võrreldes peapeale pööratud. Näiteks testidest lähtuv arendus (_TDD - test-driven development_).

 Mis saab agiilses arenduskorralduses spetsifikatsioonidest, nõuetest, mudelitest, kirjeldustest, üldse dokumentatsioonist?

Agiilarendus peab töötavat koodi (_working code_) tähtsamaks kui täielikku dokumentatsioon (_comprehensive documentation_) [1]. Tarkvara kasutajaid ja tarkvara reaalset kasutamist peetakse tähtsamaks protsessikirjeldustest ja tööriistadest [ibid.]. See on õige - kuid ainult reaktsioonina üleprojekteerimisele (_overengineering_). See ei ole õige, kui agiilsus viib mudelite ja spetsifikatsioonide eitamisele.

Programmeerimine tekkis 1950-ndatel ja oli algselt seotud matemaatilise tõestamisega. Programm loeti lõpetatuks alles siis, kui programmi käitumise nõutud omadused (invariandid) olid tõestatud. Programmi "tõestamine" sarnanes matemaatilise teoreemi tõestamisega. See protsess ei olnud automatiseeritud, kuid nõudis programmi oluliste omaduste täpset määratlemist, tavaliselt mõnes formaliseeritud tähistussüsteemis. Tõestamine seisnes loogilise arutluse kirjapanemises ja kontrollimises teise inimese poolt. Selline protsess oli loomulikult  töömahukas ja nõudis matemaatilise ettevalmistusega inimesi.

Hiljem kasvas tormiliselt testimine ja eraldus omaette arendusalaks. Tänapäeval on testide täitmine suuresti automatiseeritud, testid on omaette programmid. Koodi ja testide (mõlemad on kood) proportsioon arendusprojektis võib olla 50:50 või isegi testide kasuks. Agiilarenduses tuleks hoiduda ohust, et tekib palju koodi ja palju teste - kood nagu töötaks ja testid ka töötavad - kuid pole spetsifikatsiooni.

Matemaatika on 4000 aastat vana. Tarkvara &mdash; kood, millel võib olla mahukas testikogum (_test suite_) ja isegi teatav reaalne kasutajaskond &mdash; kuid mis ei suhtestu ühegi formaalse kirjeldusega (mudeliga, spetsifikatsiooniga, standardiga jms) - on... lonkav. Miks? Seda on raske selgitada. Kood eksisteerib, testid eksisteerivad (aga miks just sellised testid ja mida need testivad?), kasutajad eksisteerivad ja arvavad midagi. Kuid igaüks võib arvata, ei ole valesid vastuseid, valesid arvamusi... 

Analoogia moodsa haridusega: pole olulised enam formaliseeritud kontseptuaalsed struktuurid ja nendest aru saama õppimine, vaid rühmatöö teemal, mis emotsioone üks või teine asi sinus tekitab. Arutelus ei ole valesid seisukohti!

Formaalne pole siin päris õige sõna. Eraldiseisev kirjeldus on võib-olla õigem. Kood on formaliseeritud tekst. Tihti väidetakse, et kood on ühtlasi iseenda formaliseeritud kirjeldus ja sellest piisab (isedokumenteeriv kood). Ei, koodist üksi ei piisa. Vaja on ka eraldiseisvat kirjeldust. Isegi mitut - näiteks müügiteksti. Kood ei müü end ise.

Teatav väljakutse on aru saada, ***millal ja milliseid mudeleid ning spetsifikatsioone koostada***. Koskarenduses tekkisid mudelid ja spetsifikatsioonid enne arendust (_up-front_). Agiilarenduses - arendusega samaaegselt või pigem mõningase viivitusega. Peab mõistma, et neid on vaja, nende koostamiseks-kirjapanemiseks on vaja eraldada või võtta tööaega (nii meeldiv kui programmeerimine ja kasutajatega suhtlemine ka pole).

Teine ja võib-olla suuremgi väljakutse on aru saada, et ***mitteajakohased spetsifikatsioonid ja mudelid on kasutud***.

***Ilma spetsifikatsioonide-mudeliteta-müügitekstideta ei saa rääkida kvaliteetsest tarkvarast.*** Eelkõige aitavad spetsifikatsioonid saavutada stabiilsust. Stabiilsus on soovitav omadus, sest nii nagu üksi pidu ei saa kesta lõputult, pole ka agiilarendus lõputu protsess. Aagiilarenduse spetsifikatsioonide peamine erinevus koskmudeli spetsifikatsioonidest on selles, et need mitte niivõrd ei kirjuta ette, vaid fikseerivad tulemuse. Agiilarendus ainuüksi - emotsionaalselt meeldiv protsess - pole veel tulemus!

[1] Manifesto for Agile Software Development, [http://agilemanifesto.org/](http://agilemanifesto.org/) 

<img src='https://agiil.github.io/IT/img/VisuaalneHierarhia01.PNG' style='width: 400px;'>