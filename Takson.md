---
sidebar: false
title: 2.3 Äritaksonoomia
permalink: Takson
---

# 2.3 Äritaksonoomia
{: .no_toc}

- TOC
{:toc}

__Äritaksonoomia__ on ettevõttele või organisatsioonile huvi pakkuvate asjade hierarhiline liigitus.

> "Corporate taxonomy is hierarchical classification of entities of interest to an enterprise, organization or administration."

Äritaksonoomia on suhteliselt vähetuntud, kuid suure kasutuspotentsiaaliga teabe süstematiseerimise vahend.

```
        Maanteerattad
        Maastikurattad
        Rattaosad
          Hammasrattad
          Jooksud ja pöiad
          Kahvlid ja amordid
          ...
        Rattariided
```

Taksonoomiat võib nimetada mitmeti: __koodiloend__ (_code list_), __tesaurus__, __klassifikaator__, __klassifikatsioon__, __liigendusskeem__, __ontoloogia__.

Uuemal ajal öeldakse, et taksonoomia __teadmuse korrastamise süsteem__ (_knowledge organization system_).

Olemuselt on taksonoomia __reguleeritud sõnastik__ (_controlled vocabulary_); nimetuste korrastatud kogum, süsteem, mille abil saab sarnased asjad või nähtused ühte koondada, eristada teistest ja nimetada rühmi kasutajatele arusaadavas keeles.

<p class='action'><i class="material-icons ikoon">help_circle</i>Guugelda `startup taxonomy` ja uuri, kuidas idufirmade ärimudeleid on liigitatud</p>

<p class='tags'>Näiteid</p>
- Hartmann P et al (2014) [A Taxonomy of Data-driven Business Models used by Start-up Firms](http://cambridgeservicealliance.eng.cam.ac.uk/resources/Downloads/Monthly%20Papers/2014_March_DataDrivenBusinessModels.pdf)
- [Healthcare Provider Taxonomy](https://www.cms.gov/medicare/provider-enrollment-and-certification/medicareprovidersupenroll/taxonomy.html)

Taksonoomiad täidavad sageli nn __teatmelise teabe__ (_reference data_) rolli. Näiteks toote veebipoodi kaubavalikusse lisamise eelduseks on tootekategooriate süsteemi e taksonoomia olemasolu.

Taksonoomiad aitavad äritegevuse objekte ja toiminguid liigitada, asju õigetesse „lahtritesse“ paigutada ja on selle kaudu ärilogistika eelduseks.

Infotöötlus infosüsteemides tugineb suures osas taksonoomiatele. Infosüsteemi või andmebaasi kontekstis nimetatakse taksonoomiat sageli kooditabeliks, -loendiks või klassifikaatoriks.

Kuna taksonoomiad on alusandmed teiste andmete tootmiseks, siis peavad taksonoomiad olema ajakohased, täpsed ja täielikud. Teatmelise äriteabe kvaliteediga tegelev suund kannab inglise keeles nimetust [Master Data Management](http://www.earley.com/blog/why-taxonomy-critical-master-data-management-mdm) (__põhiandmete haldamine__).

Taksonoomiad on andmete ühendamise (kooskasutamise) aluseks. Selle väljenduseks on __linkandmete__ [Linked Data](http://linkeddata.org/) trend.

Taksonoomiad on organisatsioonis vajalikud mitmes vaates. Aitavad:

- teavet korrastada, nii, et teave on kiiremini otsitav, navigeeritav ja leitav
  - vabatekstiotsing ei ole alati piisav
- välja töötada protseduure, efektiivset, korratavat töövoogu (_workflow_)
- automatiseerida infotöötlust
- kehtestada mitmesuguseid nõudeid (_policy_)
- hõlmata ja süstematiseerida teadmust ja teha see organisatsioonis taaskasutatavaks
- luua ja ühtlustada äriterminoloogiat, sellega tõhustada kommunikatsiooni nii organisatsiooni sees kui ka klientidega ja partneritega
- lõimida (integreerida) infosüsteeme.

Tüüpilisi äritaksonoomiaid:

- veebipoe tootekategooriad – __tootetaksonoomia__
- teenuste taksonoomia
- protsesside taksonoomia
- klientirühmade taksonoomia
- dokumendiliikide taksonoomia
- märgendite (_tag_) süsteem, nt veahaldus- või projektijuhtimissüsteemis
- intraneti sisu taksonoomia
- projektikaustade ja failide nimede süsteem, nt ehitus- või projekteerimisettevõttes.

Taksonoomiaid kasutatakse erinevates valdkondades, lidaks ärile ka teaduses, meditsiinis, sõjanduses, avalikus halduses jm.

<p class='tags'>Näide</p>
- [Open Eligibility taxonomy](http://about.auntbertha.com/openeligibility)
- [Taxonomy of Digital Research Activities in the Humanities](https://github.com/dhtaxonomy/TaDiRAH)

Taksonoomia elemendid:

- __klassid__ e __taksonid__
  - __eelisterminid__ (_preferred term_)
  - __sünonüümid__
- __"alammõiste-ülemmõiste"__ seosed, mis moodustavad __hierarhia__
- __aspektid__ e __tahud__ - spetsiaalne termin – __fassett__, ingl _facet_ - võimaldavad vältida paljutasemelist hierarhiat ja esitada taksonoomia "lamedamana".

__"Mõistetes ja nimetustes kokkuleppimine"__ võib olla keeruline protsess. Inimesed on harjunud asju omamoodi nimetama. Tihti mõistetakse ka samade sõnade all erinevaid asju. Terminoloogiat ja üldse keelekasutust ei tuleks üritada jõuga kehtestada. Võimaluse jätmine asju mitut moodi nimetada, s.t sünonüümide lubamine, aitab vaidlusi vältida. Eelistermini määramine jätab vabadust ja samas võimaldab ka täpsust.

<p class='tags'>Näide</p>
Kas organisatsioon pakub teenuseid, tooteid või mõlemaid? Teenuspõhine lähenemine näeb kõike teenustena. Traditsioonilises käsituses on toode kliendile antav kasulik füüsiline asi. Keeles puudub üldnimetus tootele ja teenusele. Võib-olla polegi aga see vahetegemine oluline? Digimajanduses võib asja nimetada nii teenuseks kui ka tooteks.

Väikese taksonoomia tegemiseks ei ole vaja spetsiaalset tarkvara. Piisab tavalisest tekstiredaktorist. Suur taksonoomia võib sisaldada tuhandeid mõisteid; siis on eritarkvara vajalik. Head ja lihtsat vahendit siiski  turul ei ole. 

__Andmehooldus__ ([data curation](https://en.wikipedia.org/wiki/Data_curation)) on

> "a broad term used to indicate processes and activities related to the organization and integration of data collected from various sources, annotation of the data, and publication and presentation of the data such that the value of the data is maintained over time, and the data remains available for reuse and preservation."

__Andmehooldaja__ ([data steward](https://en.wikipedia.org/wiki/Data_steward)) on

> "a person responsible for the management and fitness of data elements - both the content and metadata."

__Masinloetav taksonoomia__ on selline taksonoomia, mis on esitatud vormis, mida programm suudab töödelda. Levinud vormis on JSON, XML, CSV, RDF, SKOS.

Kes koostab taksonoomiaid? Taksonoomia koostaja tegutseb __taksonoomina__. Praktikas võib olla analüütik, infoarhitekt, sisutoimetaja vm.

Suure taksonoomia haldamiseks on kindlasti inimest, kes täidaks haldaja rolli.

Kirjanduses märgitakse, et taksonoomia koostaja peab olema osalt "compulsive organizer", osalt tehnoloog ja osalt diplomaat.

Viiteid

- [Taxonomy Bootcamp London 2016](http://www.taxonomybootcamp.com/London/2016/)
- [The Accidental Taxonomist](http://accidental-taxonomist.blogspot.com.ee/2016/11/popular-topics-in-taxonomies.html) - taksonoomiablogi
- [Data stewardship](http://insights.wired.com/profiles/blogs/data-stewardship-is-everybody-s-business-5-best-practices-for#axzz4Vh6iYU1s)

- - -

[Ettevõtja taksonoomia](/IT/Ettevotja)


