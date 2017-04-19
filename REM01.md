---
title: Remark 01
permalink: REM01
---

# Harjutus 5 IT ettevõtte strateegias

Näidislahendus

## Ülevaade

Analüüsin nimesüsteemide kujundamisega seotud juhtimisväljakutseid ja sõnastan mõned strateegilised soovitused selles vallas.

__Nimesüsteemi__  all pean silmas reeglite kogumit nimede (nimetuste) või  tähistuste moodustamiseks. Nimesüsteeme vajatakse paljudes kohtades. Näiteks:

- kaustanimede moodustamise süsteem ühiskettal
- moodulite nimetamise süsteem programmeerimisprojektis
- URL-de (veebiaadresside) moodustamise süsteem organisatsiooni veebisüsteemis ()
- dokumentide viitade moodustamise süsteem
- õppeainete lühendnimede (koodide) süsteem ülikoolis
- asutuse koosolekuruumidele nimede leidmine (et Outlook-is viidata) jne.

Näiteks. Ühes riigiasutuses kannavad koosolekuruumid järgmisi nimesid: `Cirrus`, `Stratus`, `Cumulus` (7. k), `6k-nouka-vaike`, `6k-nouka-suur`, `5k-nouka`, `PIN1`, `PIN2`, `PUK` (3. k).

Heaks näiteks on EV [õigusaktide lühendite süsteem](https://www.riigiteataja.ee/lyhendid.html). Seaduste lühendnimede moodustamisel kasutatakse [kindlaid reegleid](https://www.riigiteataja.ee/oigusuudised/eelvaadeSeadusUudis/1054).

Nimesüsteemiks võib pidada ka praktiliselt igasugust nimede või nimetuste kogumit, mida iseloomustab tasakaalustatus ja loogiline sidusus. Kitsamas mõttes pean nimesüsteemiks siiski sellist süsteemi, kus nimed moodustatakse kindlate reeglite, mitte ainult kauni kooskõla alusel.

Tähtsamad nõuded heale nimede süsteemile on: loogiline, selge, arusaadav, ökonoomne, objekte eristav, laiendatav. Tänapäeval on tähtis, sageli nõutav omadus nimede masintöödeldavus. Probleemiks on tõusnud nimede üheaegse inim- ja masintöödeldavuse tagamine.

Nimesüsteemide küsimused on sageli alaväärtustatud. Süsteemiarenduses ei pöörata nimesüsteemide kujundamisel õigeaegset ega piisavat tähelepanu. Nimesüsteemid kujunevad iseeneslikult, tulemuseks on süsteemid, mis ei tööta.

Informaatika teooria, aga samuti keeleteadus (rakenduslingvistika) pakuvad teatud soovitusi nimesüsteemide kujundamiseks. [Nimeruumid](https://et.wikipedia.org/wiki/Nimeruum), nende lõikumine ja kooskasutamine jm.

Siin on üks näide nimesüsteemi kavandist: [RIHA URL-de süsteem](https://e-gov.github.io/RIHA-Index/URLid).

## Juhtimise väljakutsed nimesüsteemide kujundamisel ja haldamisel

Harjutuse 2 ühes töös (Priit) märkisite, et ehitusettevõte sooviks, et projektdokumentatsioon tuleks projekteerimisbüroodest ühtlustatud kujul. Ka failinimed võiksid järgida ühtseid kokkuleppeid.

Sattusin neil päevil rääkima kolleegiga, kes kurtis ehitisregistri absurdsetest nõuetest üleslaetavate failide nimedele. Failinimi pidavat olema kokku pandud kodeeritud osadest. Kui nimi ei vasta nõuetele, siis dokumenti üles laadida ei saa. Kõik see on liiga keeruline, aeganõudev ja stressi tekitav.

See on just sama teema. 

Vaatasin: tõepoolest, EHR nõuab, et failinimed on kindla mustri kohased. Keegi projektbüroo on koostanud korraliku juhise: [Ehitusprojekti dokumentide digitaalse
vormistamise nõuded ehitusloa elektroonilisel taotlemisel](https://www.mkm.ee/sites/default/files/juhend_-_ehitusprojekti_digivormistamine_ehitusloa_taotlemisel_10.02.2015.pdf)

__Kas failinimede süsteem on vajalik?__ Tundub, et küll.

__Kas failinimede süsteem on selgelt kommunikeeritud?__ Jah, juhend on selge, heas keeles, sisaldab näiteid.

__Kas tarkvaraliselt saaks veel midagi teha?__ Jah, võiks olla failinime moodustamise tööriist. Tahtmise korral poleks seda raske programmeerida. Lisaks võiks olla veel eraldi failinimede validaator (väike veebipõhine tööriist).

__Kuidas see puutub juhtimisse?__ Tundub, et ka mõistlik ja vajalik süsteem võib kohata inimestes vastuseisu - lihtsalt sellepärast, et inimene on mugav, laisk ega viitsi süveneda; sellepärast, et inimene ei viitsigi mõelda. Keskastme juht, kes sellises keskkonnas hakkab survestama, oma failinimede süsteemi kehtestama, riskib sellega, et töötajad tõstavad mässu. Kokkuvõttes võib üllastel motiividel tegutsev keskastme juht teenimatult "kinga saada".

Valdkonda tundmata julgen arvata, et Eestis võiks kindlasti olla ehitusliku projektdokumentatsiooni vahetamise standard.

## Strateegia

### Tehnoloogilised põhimõtted

- Nimesüsteem ei tohi olla liiga jäik. Heaks võtteks on lubada alternatiivnimesid. Siiski peaks alternatiivide hulgas üks, kanooniline nimi.
- Nimesüsteem peab olema laiendatav. Peavad olema reeglid või vihjed uute nimede moodustamiseks
- Nimed peavad olema kataloogitud

Märkus. 

### Juhtimuslikud põhimõtted

- Juhtimise tasandil peaks püüdma aru saada nimesüsteemide tähtsusest.

Märkus. Tihti piirdub see arusaamine ettevõtte nime olulisuse mõistmisega (kui sedagi). Vrdl Paul Oberschneider nime Oberhaus valikust.

- Nimesüsteeme jõuga kehtestades on suur oht tekitada rahulolematust või isegi sabotaaži. 