<div style='display: inline-block;'><i class="material-icons ikoon" style='color: #00acc1; font-size: 48px;'>extension</i></div>

[Veebirakenduse failid GitHub-is](https://github.com/PriitParmakson/6068)

[Ikoonide test](system/IkoonideTest.html)

#    Kuidas see veebirakendus on tehtud?

##    Ülevaade

*   Kursuse veebisait on teostatud üheleherakendusena.
*   Kogu töötlus toimub kliendi poolel s.t veebisirvijas.
*   Tekste hoitakse Parse.com andmebaasis Markdown-vormingus. (Parse.com on veebiäpide ja -rakenduste pilvemajutuse keskkond, mis pakub ka NoSQL pilveandmebaasi).
*   Kuvamisel teisendatakse tekstid Markdown-st HTML-i. Selleks on kasutusel teek [remarkable](https://github.com/jonschlinkert/remarkable).
*   Kujundus põhineb [Bootstrap](http://getbootstrap.com/) raamistikul.
*   Lisaks standardsetele HTML-le, CSS-le, Javascriptile on kasutusel jQuery ja mõned Google fondid.  
*   Ajalugu: Kümmekond aastat oli kursuse veebirakendus Google Blogger-i keskkonnas.
*   Tekstide redigeerimiseks on veebisaiti sisse programmeeritud lihtne redaktor. Redaktor võimaldab redigeerida Parse.com-i andmebaasis hoitavaid tekste. Redaktori kasutamiseks peab olema veebilehe omanikuna sisse logitud.
*   Kasutajate haldus on teostatud Parse.com vahenditega. Hetkel on sisselogimist vaja ainult veebilehe omanikul.

##    Kujunduse juhtmõtted

*   Navigatsiooni ja üldse kogu veebirakenduse juhtmõtteks on selgus ja lihtsus. Kandev osa on tekstil. Teatmeline teave täiendab teksti.

##    Teksti vorming

*   `Armata`, `14px`, reakõrgusega `1.4`.
*  h1 pealkirjad:  `Roboto Condensed `, tähevahe  `3px `
* kood:  `Courier New `, suurus  `1.1em `

##    Värviskeem

*    tagasihoidlik, hall
*   <span style='border:1px solid gray; background-color:#F9F9F9;'>peaaegu valge</span> #F9F9F9 &ndash; koodi taustavärv
*   <span style='color:#222;'>mustjashall</span> `#222` — teksti põhivärv
*   <span style='color:#777;'>heledam hall</span> `#777` – külgmenüü element; redaktori tekstiala
*   <span style='color:#888;'>hall</span> #888 &ndash; blokktsitaat
*   <span style='color:Gray;'>hall</span> Gray &ndash; külgmenüüs valitud elemendi indikaatorriba
*   <span style='color:#333;'>tumehall</span> `#333` – ülamenüü element, osutatud külgmenüü element (Bootstrapi tekstivärv)
*   <span style='color:#484848;'>tumehall</span> #484848 &ndash; artikli tekst
*   <span style='color:Black;'>must</span> – koodis
*   <span style='color:#009999;'>mereroheline</span> `#009999` — linkides
*  <span style='background-color:#C2185B;'> `#C2185B ` tumepunane aktsent</span>
*  <span style='background-color:#ECB9CD;'> `#ECB9CD ` esivärv eelmisele</span>
*   <span style='color:#FF555D;'>roosakaspunane</span> `#FF555D`  `rgb(255, 85, 93)` — võimalik aktsendina
*   <span style='color:#EE5F64;'>roosa</span> #EE5F64 (katkestamise dialoogis, rubriigis "Aktuaalne")
*   <span style='background-color:#E7E7E7;'>tumehall</span> #E7E7E7 &ndash; nupu seesolekut näitav taustavärv
*   <span style='background-color:#FCF8E3;'>beež</span> #FCF8E3 &ndash; rubriigi 'Aktuaalne' taust
*   <span style='color:#CA9C44;'>pruun</span> #CA9C44 &ndash; rubriigi 'Aktuaalne' kiri ja äär
 
##    Fondid

*  <span style='font-family: "Roboto Condensed";'>Roboto Condensed</span> – päises
*   <span style='font-family: "Roboto";'>Roboto</span> – pealkirjas (h1)
*   <span style='font-family: "Armata";'>Armata</span> – tekstis, jaotise pealkirjas (h2)
*   <span style='font-family: "Inconsolata";'>Inconsolata</span> – koodis ja väljatõstetes.

##    Jaotised

*    Jaotiste struktuur on minimaalselt lihtne. Kasutusel on ainult üks tase (`h2`).

##    Rõhutused

*    *Uute terminite* jms väljatõstmiseks paigutatakse need taagide `em` vahele.
