---
title: Test
permalink: Test
layout: Times
---

# 3 probleemi, mille indikaatoriks on vajadus teha ohtralt ühikteste

Tehakse palju teste. Varem, ca 15-20 a tagasi, seda ei olnud.

Miks on testimine nii suure koha võtnud? Kliendi vajadused on raskesti sõnastatavad, avalduvad järk-järgult ja võivad üldse olla ebastabiilsed. Küsimus, miks kliendi vajadused on muutunud raskesti artikuleeritavaks ja heitlikeks vajab omaette uurimist. Kuid testimise vajadus ei tule ainult sellest. Ühiktestidel ei ole otsest seost kliendi vajadustega.

Testimine võib olla tunnuseks, et: 1) kasutatav tehnoloogia ei ole stabiilne; 2) kasutatav tehnoloogia ei ole programmeerijale selge; 3) programmeerija ei kasuta piisavalt mudeldamist.

***Kasutatav tehnoloogia ei ole stabiilne.*** Programmeerimiskeeled – ja siin on küsimus mitte ainult keele tuumas, vaid sisuliselt keele osaks kujunenud standardteekidest ja API-dest – on ülepaisutatud (_bloat_) ja ebastabiilsed (muutuvad kiiresti) [1]. Näiteks lihtne AJAX-päringud tehti Javascriptis aastaid JQuery vahendite ([$.ajax](http://api.jquery.com/jquery.ajax/) jt) abil. Javascripti uuemas versioonis on lisatud JQuery ajax-ga samalaadseid võimalusi pakkuv [Fetch API](https://fetch.spec.whatwg.org/). Kuid üleminek ei ole lihtne, sest JQuery ajax on optimeeritud kõige sagedasematele kasutusjuhtudele. Fetch on väidetavalt laiem ja paindlikum. Kuid ei JQuery ega Fetch rahulda veel kõiki vajadusi. Nendega konkureerib [Axios](https://github.com/mzabriskie/axios), teek, mis pakub üldiselt samalaadseid võimalusi (HTTP GET, POST jt REST päringute tegemine). Kuid siiski erineval moel. Ühes ja samas keeles on seega mitmeid erivaid viise sama, suhteliselt lihtsa asja tegemiseks. 

***Kasutatav tehnoloogia ei ole programmeerijale selge. *** Kuna töövahendid ei ole stabiilsed, siis ei jõuagi programmeerija töövahendit põhjalikult selgeks saada. Programmeerija ei valda töövahendit – programmeerimiskeelt. Kuna kindlust ei ole, siis kasutatakse umbes, katsetades.

`String.substring` ja `String.substr` - mis on nende vahe? Keele _bloat_-i tõttu ei jää see enam kindlalt pähe. Sealt tulevad elementaarsed vead - mistõttu ka lihtsate sõnetöötlusfunktsioonide jaoks tuleb kirjutada ühikteste.

Umbes kasutades aga tekib rohkelt vigu. Neid on vaja kinni püüda. See toob vajaduse koostada palju teste.

***Programmeerija ei kasuta piisavalt mudeldamist.*** Mudel ei ole ainult tarkvaraväline andmebaasiskeem, protsessiskeem vms. Mudelid on ka koodis endas. Näiteks front-endis võib – ja lihtsamatel juhtudel on optimaalne – UI olekut hoida HTML-is (DOM-is) endas.

UI elemendi peitmisene tehakse programmaatiliselt CSS atribuudi või klassi `peidetud` lisamisega DOM-i (s.t HTML-i):

`<div id=’Infopaan’ style=’display: none’>Info</div>`

või klassi abil

`<div id=’Infopaan’ class=’peidetud’>Info</div>`

Programmaatiliselt saab seejärel vajadusel DOM-ist pärida elemendi seisundit:

`if ($('#Tekstikogu').is(':visible')) { ... `

või

`if ($(’#Infopaan’).hasClass(’peidetud’)) { ... `

Selle meetodi probleem on, et keerukama kasutajaliidese (ja väga raske on omada distsipliini, et kasutajaliides hoida lihtne) puhul see ei ole enam ülevaatlik. Kasutajaliidese edasiarendamisel hakkavad kergesti sisse tulema vead. Nende leidmiseks rakendatakse testimist.

MVC (mudel-vaade-ohjur) mustrid teevad sammu edasi. Näiteks [Flux](https://facebook.github.io/flux/) ja [Redux](http://redux.js.org/) on vahendid, milles UI olekut hoitakse süstematiseeritult sisekujul

`{ ... infopaan: { kuvatud: true ... ` 

[1] Programmeerimiskeelte (liiga) kiirest muutumisest kirjutab hästi Quirksmode.org: (Stop pushing the web forward)[https://www.quirksmode.org/blog/archives/2015/07/stop_pushing_th.html].