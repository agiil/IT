---
sidebar: false
title: Tehnoloogiate (tarkvarade) hindamine ja valik
permalink: Tehno
---

# 1.5 Tehnoloogiate (tarkvarade) hindamine ja valik
{: .no_toc}

- TOC
{:toc}

<p class='action'><i class="material-icons ikoon">help_circle</i>Suur organisatsioon (mitu tuhat töötajat, erinevates allstruktuurides) hangib tööaja planeerimise ja tööaja arvestuse jaoks tarkvara. See on strateegiline otsus, mida eksimise korral on raske tagasi pöörata. Kuidas toimida?<br>
<br>
Leiti pakkuja, kes oli nõus oma tarkvara testkasutuseks andma.<br>
<br>
Testkasutuse eesmärgiks seati:<br>
- veenduda, et pakkujal on piisava funktsionaalsusega standardne toode/teenus;<br>
- veenduda, et pakkuja toodet on võimalik paigaldada ja hallata tellija keskkonnas (arvestades tellija turvanõudeid);<br>
- veenduda, et pakutav toode on koosvõimeline tellija spetsiifiliste vajaduste jaoks loodud rakendustega; leida allüksuste ülene ühine maksimaalne standardne funktsionaalsus, mida on võimalik katta hangitava tootega.<br>
<br>
 Testkasutuse käigus selgus, et:<br>
- loobumine kasutusel olevatest senistest lahendustest nõuab töörutiinide ümbertegemist;<br>
- algselt kasutajate püstitatud nõuded on vastuolulised;<br>
- kasutajad kaaluvad loobumist spetsiifilistest nõuetest, et kasutada standardset lahendust.</p>
 
__Küsimus millist tarkvara kasutada__ on oluline mitmel põhjusel. Hea tarkvaraga võib töö olla 10-20-40% ja enamgi kiirem, mugavam, kvaliteetsem. Hea tarkvara sobib hästi kokku teiste tarkvaradega. Head tarkvara on kerge kasutama õppida, hallata ja kohandada.

Tarkvara valiku otsuseid tehakse suuremas organisatsioonis aastas vähemalt 4-5 tükki aastas. Sageli on nende otsuste mõju oluline. 

<p class='tags'><span class='tag'>Näide</span></p>
Organisatsioonis kasutati aastaid kõrvuti kahte andmebaasisüsteemi: Oracle (tasuline) ja PostgreSQL (vabavara). Iga-aastased Oracle litsentsitasud olid suhteliselt suured. Kulude kokkuhoidmise eesmärgil otsustati üle minna ainult PostgreSQL-le. Otsus oli siiski problemaatiline, sest süsteemiadministraator väitis, et Oracle andmebaasi haldamine on oluliselt kergem ja ähvardas töölt lahkuda.

Tarkvara valikut tehakse praktikas mitmel viisil:

- analüütiline valikuprotsess
- testkasutus
- keegi hakkab kasutama ja kasutus levib.

__Analüütiline valikuprotsess__ võib anda parima tulemuse, kuid ainult siis, kui protsessi läbitegemiseks on piisavalt aega ja kompetentsi. Professionaalne tarkvaravalija [Tate2015] tegutseb metoodiliselt: kaardistab kasutajate vajadused, pöörates tähelepanu erinevate kasutajarühmade esindatusele; vajadused  artikuleeritakse selgepiirilisteks nõueteks (_Requirements_ etapp); väljaselgitatud vajadustele lisanduvad hinna- ja tehnoloogilised kaalutlused (nt kokkusobivus teiste tarkvaradega), neist moodustub valikukriteeriumite loetelu; järgmiseks sammuks on turul pakutavate tarkvara-kandidaatide väljaselgitamine ja uurimine.

<p class='tags'>Artikli TL;TR</p>
<p class='s'>[Tate2015] Tate, M. (2015). Off-The-Shelf IT Solutions : A practitioner's guide to selection and procurement. Swindon, GB: BCS, The Chartered Institute for IT.</p>

Metoodiline, võib isegi öelda, et liiga põhjalik protseduur valmistarkvarade valimiseks ettevõttesse. TL;DR: koosta kandidaatide pikk nimekiri (_long list_), seejärel lühike nimekiri (_short list_), siis tee otsus

Tarkvara valik on mitmekriteeriumiline otsustusprobleem. Juhtub, et ükski kandidaatidest ei vasta ideaalselt kõigile nõuetele. Siis kasutatakse kandidaatide pingerea koostamiseks mõnda otsustusmeetodit (kaalutud punktikeskmine vms). Tate läheb isegi nii kaugele, et tuletab meelde, et nõuete väljaselgitamiseks korraldatavates tööturbades on otstarbekas teha kohvipause.

Analüütiline valikuprotsess ei anna siiski alati head tulemust.

Esiteks peab organisatsioon olema võimeline süstemaatilist, objektiivset protsessi läbi tegema; kaugeltki alati ei ole see võimekus olemas.

Kõik olulised kriteeriumid tuleb välja selgitada. Kriteeriumite suhtelist tähtsust tuleb hinnata. Hinnangud põhinevad tihti eeldustel. Hinnang, mis on tehtud valedel eeldustel, on parimal juhul kasutu, halvemal juhul - eksitav. Näiteks seatakse tarkvara valikul sageli eesmärgiks infotehnoloogilise keskkonna ühtlustamine, "loomaaia" piiramine. Usutakse, et kui kõik hakkavad kasutama sama töövahendit, siis ühtlustuvad ja korrastuvad ka tööprotsessid ja paraneb kommunikatsioon - rääkimata standardse tarkvara madalamatest hooldus- ja hankimiskuludest. Kahjuks reaalsus nii lihtne ei ole. Universaalset tööriista on raske leida, sageli seda ei olegi. Protsessid võivad olla küll väliselt sarnased, kuid detailitasandil siiski nii spetsiifilised, et nõuavad erinevaid töövahendeid.

<p class='tags'><span class='tag'>Näide</span></p>
Tarkvaraarendusega ja IT-teenustega tegelevas organisatsioonis otsustati, et kogu teavet hakatakse hoidma Confluence-is. [Atlassiani Confluence](https://www.atlassian.com/software/confluence) on hea tarkvara, kuid sobib siiski ainult teatud liiki dokumentatsiooni töötlemiseks.

Teiseks võib süstemaatiline protsess kujuneda töömahukaks ja aeganõudvaks.

<p class='tags'><span class='tag'>Näide</span></p>
Turul on kümneid, kui mitte sadu [märkmete tegemise tarkvarasid](https://en.wikipedia.org/wiki/Comparison_of_notetaking_software). Kes jõuab neid süstemaatiliselt võrrelda?

<p class='tags'><span class='tag'>Näide</span></p>
Kaks koostööpartnerit otsustasid, et võtavad kumbki kasutusele sama tarkvara. Sobivat tarkvara valiti süstemaatiliselt. Osteti konsultant, kes tegi põhjaliku, mitmekuulise analüüsi. Jõuti juba peaaegu otsuseni, kui viimasel hetkel üks partner loobus, sisuliselt poliitilisel põhjusel. 

Kolmandaks ei saa tootekirjelduste põhjal alati õiget pilti tarkvara tegelikust kasutatavusest.

Valikumeetodit võib täiendada tarkvara testkasutusega.

__Tarkvara testkasutus__ on üldlevinud praktika. Tarkvaratootjad pakuvad tarkvara testimiseks mitmesuguseid võimalusi: tasuta katsetamine piiratud perioodi jooksul (_Free Trial_), piiratud funktsionaalsusega versiooni kasutamine (_Free Tier_).

<p class='tags'><span class='tag'>Näide</span></p>
Organisatsioon otsustas, et valib uue tööplaanimise ja tööaja arvestuse tarkvara nii, et laseb kuni neljal IT-firmal paigaldada oma toote testversioon. Töötajatel on vabadus valida, millist kasutada. Valitakse see, mis "jääb ellu". (Tuli ainult üks IT-firma).

Testkasutuse probleemiks on ajakulu. Siiski tundub, et testimist kasutatakse liiga vähe. Liiga vara seotakse end ühe tarkvaraga - ja liiga kauaks jäädakse seotud ühe tarkvaraga.

__Keegi hakkab lihtsalt kasutama__. Tarkvara tulek organisatsiooni on innovatsiooniprotsess. Innovatsioon ei ole alati planeeritud ja süstemaatiline. Võib-olla ongi kaootiline, üksikisiku initsiatiivist lähtuv tarkvara kasutuselevõtmise protsess valdav. Keegi on kuulnud heast tarkvarast, toob selle teadmise organisatsiooni, paigaldab tarkvara oma arvutisse või hakkab pilveteenust kasutama.

<p class='tags'>Näited</p>
1) Asutuses kasutati suurel hulgal .NET tarkvara. Algas sellest, et programmeerija tundis seda. 2) Suures tarkvarasüsteemis programmeeriti üks moodul Ruby-keeles (mis konteksti arvestades ei olnud hea valik). Miks? Programmeerijale meeldis Ruby.

__Õige otsustustasand__. Juhtkond ei ole õige tasand otsustama, millist vikitarkvara kasutatakse. Samas ei tohiks see otsus tulla ka IT osakonna süsteemiadministraatorilt. Tarkvara valikult peaks lähtuma tarkvara tegelike kasutajate arvamusest,  ühitades seda organisatsiooni tervikvaatega.

Tarkvara valides peetakse tavaliselt silmas laiemaid töökorralduslikke ja ärilisi eesmärke. See on õige, kuid seos töö- ja äriprotsessides taotletavate muutustega tuleb ka läbi mõelda.

Huvitav miks, kuid tarkvara valik võtab vahel __poliitilise või isegi "usuküsimuse"__ varjundi. Võib-olla on põhjus selles, et kasutajal tekib sügav emotsionaalne side oma tarkvara. Võib-olla alahinnatakse ümberõppimise psühholoogilist kulu. Võib-olla ka selles, et nii nagu muud tooted, on tarkvara tugevalt bränditud.

__Tegelik kasutuselevõtt__. Tarkvara valik on ainult eelmäng tegelikule kasutuselevõtule. Tihti libisetakse sellest üle, kuid tegelikult on tarkvara kasutuselevõtmine pikk ja keeruline protsess. Tarkvara kasutuselevõttu mõjutavaid tegureid on palju uuritud ja loodud mitmesuguseid teooriaid. Tuntuim neist on tehnoloogia kasutuselevõtu mudel [Technology Acceptance Model, TAM](https://en.wikipedia.org/wiki/Technology_acceptance_model). TAM-st on mitmeid variatsioone. Kriitikud väidavad siiski, et teooria on triviaalne.

<p class='tags'>Praktikas kuuldu</p>
> "Olen aastatega jõudnud järeldusele, et tehnoloogia valik on üleüldse kõige raskem ülesanne, mis IT valdkonnas võib ette tulla. Asjade õige nimetamine on peaaegu lahendamatu probleem, siis tuleb tükk tühja maad ja alles siis tuleb tehnoloogia valiku probleem." (IT-teenusepakkuja firmajuht)

## Praktilised valikumeetodid

Eelöeldust üldistust teha on raske. Tarkvara valikuks ei ole ühte universaalset protsessi. Pretendeerimata ammendavusele võib nimetada kolme teed:

1) Leida usaldatav teabeallikas ja usaldada selle soovitust.  Lihtsamate tarkvarade võrdlusi leiab kergesti (vt all), põhjalikumad analüüsid on tasulised (nt Gartner).

<p class='tags'><span class='tag'>Tarkvara</span></p>
"Teha"-tarkvara. [40 of the Best To-Do Apps for Personal Task Management](https://zapier.com/blog/best-todo-list-apps/). Probleem: töödega unustamine, viivitamine ja hilinemine; lahendus: ToDo app (_List and Task Manager_);
Edenemisaruannete (_Progress Report_) tarkvarasid :
  - [I Done This](https://home.idonethis.com/)
  - [Weekdone.com](https://weekdone.com/)   
- [14 Free Business Tools to Make Your Startup more Successful in 2017](http://www.huffingtonpost.com/kathleen-maloney/14-free-business-tools-to_b_13718746.html)

2) Teha ise läbi metoodiline, analüütiline valikuprotsess.

<p class='tags'>Näide</p>
Kanban-laua valik. Tarkvaraarendusega tegelev tiim otsib tööde planeerimise ja jälgimise vahendit.

Hindamistabel

|                 | Lihtsus | Ilu  | Workflow tugi | Tasuta |
|-----------------|:-------:|:----:|:------------:|:------:|
| JIRA            |         |      |              |        |
| Pivotal Tracker |         |      |              |        |
| Trello          |         |      |              |        |
| GitHub          |         |      |              |        |
{: .tabel}


<table>
<tbody>
<tr>
<td>&nbsp;</td>
<td>Lihtne</td>
<td>Ilus</td>
<td>Workflow tugi</td>
<td>Tasuta</td>
</tr>
<tr>
<td><strong>JIRA</strong></td>
<td class='ei'>ei</td>
<td class='ei'>ei</td>
<td class='jah'>jah</td>
<td class='ei'>ei</td>
</tr>
<tr>
<td><strong>Pivotal Tracker</strong></td>
<td class='ei'>&nbsp;</td>
<td class='ei'>ei</td>
<td class='ei'>&nbsp;</td>
<td class='jah'>jah</td>
</tr>
<tr>
<td><strong>Trello</strong></td>
<td class='jah'>jah</td>
<td class='jah'>jah</td>
<td class='ei'>&nbsp;</td>
<td class='jah'>jah</td>
</tr>
<tr>
<td><strong>GitHub</strong></td>
<td class='jah'>jah</td>
<td class='ei'>ei</td>
<td class='ei'>ei</td>
<td class='jah'>jah</td>
</tr>
</tbody>
</table> 

3) Osta teadmine sisse, kas tasulise turuülevaate või konsultatsiooniteenuse näol.

## Tee ise tööriist

> "Build tools for yourself." -- Edmond Lau, _Effective Engineer_

Väljapaistvaid professionaale eristab see, et nad teevad endale ise tööriistu, kirjutab Lau. Tõepoolest, kui Facebook tahab teha veebiarendust või Google andmeid vahetada, siis kirjutatakse ise veebiraamistik ([React](https://facebook.github.io/react/)) ja andmevahetusprotokoll ([Protocol Buffers](https://developers.google.com/protocol-buffers/)). 