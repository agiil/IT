---
title: IT arhitektuur
permalink: Arhi
---

# 1.6 IT arhitektuur
{: .no_toc}

- TOC
{:toc}

<p class='tags'>Oskab</p>
- suhelda IT-arhitektiga

Süsteemi arhitektuuri mõiste ja vajadus selle järele. Arhitektuuri esitamise tehnikad. Põhimõtteid ja juhiseid süsteemi arhitektuuri kujundamiseks.

## Miks on süsteemi arhitektuur oluline?

Praktiliselt iga reaalselt kasulik süsteem:

- koosneb suurest hulgast elementidest
- muutub nii süsteemi väljatöötamise kui ka kasutamise perioodil
- leiab kasutamist mitmete erinevate kasutajate gruppide poolt.

Süsteemi arhitektuur on vajalik selleks, et:

- anda süsteemi tegijatele ja kasutajatele ülevaade süsteemist
- aktiivselt kujundada süsteemi struktuuri, vastavalt arhitektuuripõhimõtetele (moodulprintsiip, tasakaalustatus jm).

Eristada:

- arhitektuurse lahenduse taset – kui hästi on süsteem arhitektitud?
- arhitektuuri esitamise taset – kui hästi süsteemide arhitektuur on kirjeldatud?

Mõneti paradoksaalne, kuid sageli süsteemil polegi korralikku arhitektuuri kirjeldust. Detailid on kirjeldatud, kuid üldpilt on ainult süsteemi tegija peas.

## Mis on arhitektuur?

Arhitektuuri all mõistetakse süsteemi üldist struktuuri. Loodava süsteemi korral – lahenduse alusraamistikku. Arhitektuuri mõistega on ajalooliselt, lahutamatult seotud esteetiline mõõde. Arhi­tek­tuur ei ole ainult mõõdetavad proportsioonid vaid ka nende proportsioonide otstarbekus ja efektiivsus kõige laiemas, ka esteetilises mõttes.

Arhitektuur on midagi püsivat (süsteemi tunnusjooned või omadused, mis on suhteliselt raskesti muudetavad või muutuvad; ajutine ei ole arhitektuur). Arhitektuur on midagi olulist. Arhitektuur on midagi inimese poolt kujundatut (juhuslik või looduslikult arenenud ei ole arhitektuur). 

Arhitektuur on midagi ümbruskonnaga suhtestuvat (vaevalt on arhitektuuri, mis seisab omaette). Arhitektuur on eriti süsteemi tervikstruktuur; see on kuidas-asjad-koos-käivad.

Arhitektuur on idee (kandev idee?) ja selle teostus. 

Arhitektuur on sisemine ehitus, ühendav alusstruktuur, aga ka väliselt, kasutaja poolt nähtav ja kogetav.

> "Architecture, of a system — The fundamental and unifying system structure defined in terms of system elements, interfaces, processes, constraints, and behaviors.” -- INCOSE SAWG

> “Architecture, of a system — The fundamental organization of a system, embodied in its components, their relationships to each other and the environment, and the principles governing its design and evolution.” -- IEEE P1471

Olulisemad momendid süsteemi arhitektuuri loomisel:

- eesmärkide väljaselgitamine: kellele ja milleks süsteemi vaja on?
- kontseptsioon ja struktuur: üldine ehitus, erinevatest vaatepunktidest lähtudes
- teostatavuse kontrollimine: kui valmis ehitada, kas siis on suuteline vajadusi rahuldama, eesmärke täitma?

## Arhitekt

Arhitekt loob vajadusi rahuldava, teostatava süsteemi kont­sept­siooni, tagab selle kontseptsiooni ühtsena säilimise arenduse prot­ses­sis ning kontrollib loodud süsteemi valmisolekut kasutusse võtuks.

Arhitekt sünteesib erinevad vaated ja nõudmised ühtseks tervikuks – leiab optimaalse lahenduse, tehes vajadusel kompromisse erinevate nõudmiste ja piirangute vahel. Lahendus peab olema ühest küljest vajadusi rahuldav, teisest küljest teostatav. Arhitekti töö ei piirdu projekti valmimisega; ta osaleb aktiivselt lahenduse teostamisel, nõuandja ja järelevalvaja rollides.

Igal vähegi tõsisemal süsteemil peaks olema arhitekt.

## Arhitektuuri kirjeldus

Kas arhitektuur on abstraktne või konkreetne mõiste?

Kuidas näeme arhitektuuri? Kas arhitektuuri saab tajuda vahetult?

Kas kahemõõtmeline diagramm on arhitektuur?

Kas kolmemõõtmeline virtuaalmaailm on arhitektuur?

Arhitektuuri esitused, kirjeldused ja arhitektuur ise on erinevad. Süsteemi arhitektuur alati on tervik. Seda tervikut on äärmiselt raske ühe skeemi abil esitada. Selle tõttu esitatakse süsteemi arhitektuur tavaliselt spetsialiseeritud jooniste ­– vaadete – abil. 

## Arhitektuuri esitamine

__Arhitektuurivaade__ on süsteemi lihtsustatud kirjeldus abstraktsioon) ühest vaatepunktist või vaatenurgast. Vaade ei esita antud vaatenurga jaoks ebaolulisi detaile.

 Arhitektuuri kirjeldused on harilikult mitme­vaa­te­lised. Vaadete ja mudelite valik sõltub uuritavast probleemist.

Süsteemi vaade esitatakse harilikult visuaalsete kujutiste (diagrammide, skeemide, jooniste) abil, mida täiendavad tekstid (seletuskiri jooniste juurde). Kasutatakse nii praktikas väljakujunenud diagrammide tüüpe (kokkuleppeid tähistuste jm. kujutusviiside osas) kui ka formaliseeritud meetoditega antud diagrammitüüpe.

UML keel pakub 9 standardset diagrammitüüpi (vaadet), milles enimkasutatavad on:

- kasutusjuhu diagramm (_Use Case Diagram_)
- komponentdiagramm (_Component Diagram_)
- paigaldusdiagramm (_Deployment Diagram_)
- jadadiagramm (_Sequence Diagram_)
- olekudiagramm (_Statechart_)

Ärikasutajale on UML diagrammid tavaliselt liiga tehnilised.

Uuem, lihtne ja loogiline on [“C4” meetod](http://static.codingthearchitecture.com/c4.pdf). Vt Simon Brown (2015) [Communicating software architecture with sketches, diagrams and the C4 model](https://leanpub.com/visualising-software-architecture/read#leanpub-auto-sketches-diagrams-models-and-tooling).

## Hea arhitektuuri omadused

Hea arhitektuur kestab. "_The test of a good architecture is that it will last. The sound architecture is an enduring pattern._"

Thomas:

- tasakaalustatud
- struktureeritud
- elegantne ja lihtne
- terviklik.

Booch:

- resilient
- simple
- approachable
- clear separation of concerns
- balanced distribution of responsibilities
- balances economic and technology constraints.

## Arhitektuuri loomise “reegleid”

Kas arhitektuur ainult tekitatakse või tekib ka ise?

Dale Thomas loetleb huvitava rea arhitektuuri loomise „reegleid”. Seejuures:

- Sellised reeglid ei ole absoluutsed. Näiteks on võimalik leida lahendus, mis on nii efektiivne kui ka universaalne. Lahendatavate probleemide klassi laiendamine (samm universaalsuse suunas) on sageli just efektiivsuse saavutamise vahendiks.
- Reeglid tuleb alati osata rakendada konkreetses situatsioonis. Raskuspunkt võib olla just selles, mitte reeglist üldises arusaamises.
- Reeglite loetelu peaks süsteemi arendaja ise jätkama (leida oma tööstiilile sobivaid reegleid).

- Efektiivsus ja universaalsus on sageli üksteise suhtes vastukäivad. _Efficiency is inversely proportional to universality_.
- Esimeseks kaitsejooneks keerukuse vastu on disaini lihtsus. _The first line of defence against complexity is simplicity of design_.
- Ükski keerukas süsteem ei saa rahuldada kõigi osapoolte soove täielikult. _No complex system can be optimum to all parties concerned_.
- Laiem eesmärk suurendab võimalike lahenduste ringi. _Moving to a larger purpose widens the range of solutions_. – Mõeldud on seda, et oluline on kontekst, milles süsteemi vaadelda. Mõnda probleemi või süsteemi peab vaatama väga laias kontekstis.
- Kui sa ei suuda seda lahti seletada, siis ära ürita seda ehitada. _If you can't analyze it, don't build it_. – Mõeldud ei ole seda, et analüütiline kirjeldus peab tingimata paberil olema; süsteemi arhitektil peab olema kindel mentaalne pilt (vaimukujutis) loodavast lahendusest – ja sellest tulenev kindlus.
- Elemendid, mis on üksteisega tihedalt seotud, koonda ühte moodulisse; elemendid, mille vaheline funktsionaalne seos on nõrk, võivad paikneda eraldi. _Group elements that are strongly connected, separate elements that are unrelated_. – See on nõrga seostatuse (_loose coupling_) põhimõte.
- Vali ülesehitus, milles kommunikatsioon alamsüsteemide vahel on minimaalne. _Choose a configuration with minimal communications between the subsystems._
- Süsteemi struktuur peab järgima süsteemi funktsioonide struktuuri. _System structure should resemble functional structure_.
- Dekomponeeri süsteem (jaota allsüsteemideks ja mooduliteks) nii, et igal tasandil on 5 kuni 9 alamsüsteemi. _Iterate the partition/aggregation procedure until systems on each level are composed of 5..9 subsystems_.
- Tõkesta mittekasuliku energia (müra, vigade, igat liiki ebaefektiivsuse) levikut. _Contain excess energy as close to the source as possible_.
- Suurimad võimalused asja parendada on liidestes. Seal on ka suurimad ohud. _The greatest leverage in system architecting is at the interfaces. And the greatest dangers_. _Be sure to ask the question: "What is the worst thing that other systems could do to you across the interface?_"

Maier, M et al (2001) The Art of Systems Architecting. CRC Press.

The Open Group. [Arhitektuuriraamistik TOGAF](http://pubs.opengroup.org/architecture/togaf9-doc/arch/).

__Ehitusblokid__, ingl _building blocks_ on IT arhitektuuri kujundamise viis, kasutusel eelkõige suurtes süsteemides. Kavandatakse ja teostatakse rida komponente - "ehitusblokke" (taristulisi teenuseid), pöörates erilist tähelepanu komponentide kokkusobivusele (koostalitlusvõimele, ingl _interoperability_). Komponte kombineerides saab paindlikult ja kuluefektiivselt teha erinevaid lahendusi ja teenuseid.

Ehitusblokkide arhitektuuripõhimõte on kasutusel mitmete riikide rahvuslike e-taristute ehitamisel:

- [Norra rahvusliku e-taristu ehitusblokid](img/NO-National-Building_Blocks.PNG)
- Soome [National Architecture for Digital Services](https://esuomi.fi/?lang=en)
- Euroopa Liidu piiriülese e-taristu ehitusblokid: [CEF building blocks](https://ec.europa.eu/cefdigital/wiki/display/CEFDIGITAL/CEF+building+blocks).

Ehitusblokkide arhitektuurile on rajatud ka suured pilveplatvormid, nt:

- [IBM Bluemix](https://www.ibm.com/cloud-computing/bluemix/)
- [Google Cloud](https://cloud.google.com/)
- [Amazon Web Services](https://aws.amazon.com/)

