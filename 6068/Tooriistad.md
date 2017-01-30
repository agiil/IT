<div style='display: inline-block;'><i class="material-icons ikoon" style='color: #00acc1; font-size: 48px;'>code</i></div>

#    HTML

[HTML Entities](http://dev.w3.org/html5/html-author/charref)

#    Javascript

Marijn Haverbeke, [Eloquent JavaScript](http://eloquentjavascript.net/index.html)

    array.forEach(function callback(currentValue, index, array) { });

vt [forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

    var a = JSON.stringify(this.model);
    var b = JSON.parse(a);

`num.toString();` - number stringiks
 
`parseInt(string)` - string täisarvuks

`str.length` - stringi pikkus

## Viited
[Speaking Javascript](http://speakingjs.com/es5/index.html)

[Javascripti teatmik, Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[Javascripti stringitöötlus](http://www.w3schools.com/jsref/jsref_obj_string.asp)

#    jQuery teatmik

## Valijad (selectors)

`$('div .m')` valib `div` alused klassiga `m` elemendid või kui selliseid ei ole, siis moodustab uue elemendi.

## HTMLi lisamine

````
var div = $("<div></div>"); $("#box").append(div);

var thtKirje = $('div').attr('id', 'thtId').addClass('thtKirje');
$('#indeks').append(thtKirje);
````
`.append(lisatav sisu)` – parameetriga määratud sisu lisamine lõppu  

## Klassid

`.addClass(ühe või mitme klassi nimi (nimed))` – klassi lisamine

`.removeClass(ühe või mitme klassi nimi (nimed))` – klassi eemaldamine

`.toggleClass(ühe või mitme klassi nimi (nimed))` 

## Lugemine ja seadmine

`.attr(atribuudiNimi, väärtus)` – atribuudi lugemine või seadmine

`.css(omaduseNimi, väärtus)` – CSS omaduse lugemine või seadmine

`.html(lisatav HTML kood)` – HTML koodi lisamine

`.text(lisatav tekst)` – teksti lisamine elemendile  

`.load(href [, callback])` – html-i laadimine elementi; NB! asünkroonne. Lokaalses masinas file: protokolliga Firefox ei luba ülakataloogi, Chrome ei luba üldse.

`$(this)` – kontekstelemendi poole pöördumine

## Sündmusekäsitleja lisamine:
````
$('.avadetail').click( function() {  // Kõigile klassi .avadetail liikmetele
$('.laiendus:first', this.parent).toggle();
});
````

Teine parameeter `$('.laiendus', this.parent)` on kontekst. Kontekst piirab valiku skoopi. `:first` võimaldab valida klassi esimese isendi.

#    CSS

[Quick Reference Sheet](http://www.smashingmagazine.com/wp-content/uploads/images/css3-cheat-sheet/css3-cheat-sheet.pdf), Smashing Magazine

*inline-block* – “We can use inline-blocks to make HTML-elements appear side-by-side on a webpage. It seems that they’ve gained popularity as an alternative to using floats. Essentially HTML elements can be either ‘block-level’ or ‘inline’ elements. An inline-block behaves as a combination of both. It is actually an inline-element that behaves as a block-level element on it’s inside.”

#    SVG

[http://editor.method.ac/](http://editor.method.ac/), SVG veebiredaktor

[Styling And Animating SVGs With CSS](http://www.smashingmagazine.com/2014/11/styling-and-animating-svgs-with-css/)

#    jQuery teatmik

## Valijad (selectors)

`$('div .m')` valib `div` alused klassiga `m` elemendid või kui selliseid ei ole, siis moodustab uue elemendi.

## HTMLi lisamine

````
var div = $("<div></div>"); $("#box").append(div);

var thtKirje = $('div').attr('id', 'thtId').addClass('thtKirje');
$('#indeks').append(thtKirje);
````
`.append(lisatav sisu)` – parameetriga määratud sisu lisamine lõppu  

## Klassid

`.addClass(ühe või mitme klassi nimi (nimed))` – klassi lisamine

`.removeClass(ühe või mitme klassi nimi (nimed))` – klassi eemaldamine

`.toggleClass(ühe või mitme klassi nimi (nimed))` 

## Lugemine ja seadmine

`.attr(atribuudiNimi, väärtus)` – atribuudi lugemine või seadmine

`.css(omaduseNimi, väärtus)` – CSS omaduse lugemine või seadmine

`.html(lisatav HTML kood)` – HTML koodi lisamine

`.text(lisatav tekst)` – teksti lisamine elemendile  

`.load(href [, callback])` – html-i laadimine elementi; NB! asünkroonne. Lokaalses masinas file: protokolliga Firefox ei luba ülakataloogi, Chrome ei luba üldse.

`$(this)` – kontekstelemendi poole pöördumine

## Sündmusekäsitleja lisamine:
````
$('.avadetail').click( function() {  // Kõigile klassi .avadetail liikmetele
$('.laiendus:first', this.parent).toggle();
});
````

Teine parameeter `$('.laiendus', this.parent)` on kontekst. Kontekst piirab valiku skoopi. `:first` võimaldab valida klassi esimese isendi.


<p>
<i class="material-icons ikoon" style='color: #00acc1; font-size: 48px;'>subject</i>
<i class="material-icons ikoon" style='color: #00acc1; font-size: 48px;'>schedule</i>
<i class="material-icons ikoon" style='color: #00acc1; font-size: 48px;'>delete_forever</i>
<i class="material-icons ikoon" style='color: #9C27B0; font-size: 48px;'>group_work</i>
<i class="material-icons ikoon" style='color: #FF555D; font-size: 48px;'>code</i>
<!-- i class="material-icons ikoon" style='color: #FF555D; font-size: 48px;'>report_problem</i>
<i class="material-icons ikoon" style='color: #EE5F64; font-size: 48px;'>description</i>
<i class="material-icons ikoon" style='color: #00acc1; font-size: 48px;'>lock_outline</i>
<i class="material-icons ikoon" style='color: #00acc1; font-size: 48px;'>lock_open</i>
<i class="material-icons ikoon" style='color: #9C27B0; font-size: 48px;'>perm_media</i>
<i class="material-icons ikoon" style='color: #FFEB3B; font-size: 48px;'>record_voice_over</i>
<i class="material-icons ikoon" style='color: #00acc1; font-size: 48px;'>games</i>
<i class="material-icons ikoon" style='color: #00acc1; font-size: 48px;'>open_with</i>
<i class="material-icons ikoon" style='color: #00acc1; font-size: 48px;'>create</i>
<i class="material-icons ikoon" style='color: #03A9F4; font-size: 48px;'>filter_drama</i>
<i class="material-icons ikoon" style='color: #00acc1; font-size: 48px;'>zoom_out_map</i -->

</p>

# Kasutajaliidese vahendid

##   UI disain 
- [Material Design Colors](https://www.materialui.co/colors)
- [MaterialUp - Material Design icons](http://www.materialup.com/tools/icons)
- [Material Design Icons](https://www.google.com/design/icons/) 
- [materialdesignicons.com/](https://materialdesignicons.com/) "Community-led iconography"
- [Material Design](https://www.google.com/design/spec/material-design/introduction.html#)
- [Google Design](https://design.google.com/)
- Alex Griedling [Google Visual Assets Guidelines](http://alexlikesdesign.com/google-visual-assets-guidelines/)

##    Värvid
- [Nimedega värvid (HEX, RGB)](http://www.standardista.com/css3/cssnamed-hsl-and-rgb-colors/)
- [Mozilla värvikoodid (HEX)](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) 
- [Material Design värvikoodid](https://www.google.com/design/spec/style/color.html)
- [Chroma.js Color Scale Helper](https://vis4.net/blog/posts/mastering-multi-hued-color-scales/)

## Fondid
- [Typewolf](https://www.typewolf.com/)

##   Bootstrap
- [Bootstrap](http://getbootstrap.com/)
- W3 Schools  [Bootstrap](http://www.w3schools.com/bootstrap/default.asp)

##  Maketitegemise vahendid
[moqups](https://beta.moqups.com/)

<div style='display: inline-block;'><i class="material-icons ikoon" style='color: #00acc1; font-size: 48px;'>code</i></div>

#    Markdown

<i class="material-icons ikoon" style='color: #C2185B; font-size: 48px;'>error</i> Adam Pritchardi [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#code)

* [CommonMark spetsifikatsioon](http://spec.commonmark.org/)

*    [Markdown-i süntaks](http://daringfireball.net/projects/markdown/syntax)

*    [remarkable](https://github.com/jonschlinkert/remarkable) &ndash; "Markdone parser, done right".

*    [to-markdown](https://domchristie.github.io/to-markdown/) &ndash; HTML-i Markdown-i teisendaja

<div style='display: inline-block;'><i class="material-icons ikoon" style='color: #00acc1; font-size: 48px;'>code</i></div>

#    Sõnastikud

*  [Heikki Vallaste E-sõnastik](http://www.vallaste.ee/)

*  [Andmekaitse ja infoturbe seletussõnastik](http://akit.cyber.ee/) (Cybernetica AS)

*  [Standardipõhine tarkvaratehnika sõnastik](https://stats.cyber.ee/terms) (Cybernetica AS)

*  [ISTQB Glossary of Testing Terms](https://www.istqb.org/downloads/viewcategory/20.html)

*  [ISO/IEC/IEEE 24765 Systems and software engineering — 
Vocabulary](https://www.cse.msu.edu/~cse435/Handouts/Standards/IEEE24765.pdf)

<div style='display: inline-block;'><i class="material-icons ikoon" style='color: #00acc1; font-size: 48px;'>code</i></div>

#    Muud tööriistad

-[Thibaut API Documentation Browser http://devdocs.io](https://github.com/Thibaut/devdocs)

## Koodiredaktorid

- [Notepad++](https://notepad-plus-plus.org/)
- [Sublime](http://www.sublimetext.com/2)
- [Atom](https://atom.io/), a hackable text editor

- [Tern](https://github.com/marijnh/tern), intelligent JavaScript editing

## Nimemoodustaja

[Generate awesome Javascript project names](http://mrsharpoblunto.github.io/foswig.js/)

## Skeemide joonistamise vahendid

- Veebipõhine skeemiredaktor [Gliffy](https://www.gliffy.com/)
- Jadadiagrammide (UML) redaktorid
    - [Web sequence diagrams](https://www.websequencediagrams.com/)
    - [ckwnc](http://www.ckwnc.com/),  a free tool for creating UML sequence diagrams quickly and easily through an intuitive psuedo C-style language
 
##   Google API
- [API Client Library for JavaScript](https://developers.google.com/api-client-library/javascript/)
- [Google Developers Console](https://console.developers.google.com/start)

##    Unicode
[Unicodinator](http://unicodinator.com/)

##    StackOverflow
[StackOverflow](http://stackoverflow.com)

##    Jade
[Jade](http://naltatis.github.io/jade-syntax-docs/)

[Jade to HTML](http://jade-lang.com/demo/)

[Learn Jade](http://www.learnjade.com/)

##    SVG veebiredaktor
[Janvas](http://www.janvas.com/XOSYSTEM/PROJECTS/janvas_apps_suite_3.0_public/janvas_application.php)

## Java
* [Jakob Jenkovi Java Tutorial](http://tutorials.jenkov.com/java/index.html)
* Sedgewick, Wayne (2002) [Introduction to Programming in Java](http://introcs.cs.princeton.edu/java/home/)
* [Java SE 8 dokumentatsioon (Oracle)](http://docs.oracle.com/javase/8/)
- [Not Your Father's Java: An Opinionated Guide to Modern Java Development](http://blog.paralleluniverse.co/2014/05/01/modern-java/)

## Go
- Golang is an experimental (new) language with the philosophy that less is more. [https://www.reddit.com/r/golang/comments/1orz8z/the_state_of_golang_and_its_future_question/](https://www.reddit.com/r/golang/comments/1orz8z/the_state_of_golang_and_its_future_question/)

- [Teatmik](https://golang.org/ref/spec)
- [Go By Example](https://gobyexample.com/)
- [Learning Go](http://miek.nl/go/)
- Rob Pike (2012) [Go Concurrency Patterns](https://youtu.be/f6kdp27TYZs)
 
## D
[Programming in D](http://ddili.org/ders/d.en/)

## Windows Powershell
[A-Z Index of Windows PowerShell commands](http://ss64.com/ps/)

[Scripting with Windows PowerShell](https://technet.microsoft.com/en-us/library/bb978526.aspx)

## YAML

[YAML](https://en.wikipedia.org/wiki/YAML)

## Linux
[Basic Unix commands](http://mally.stanford.edu/~sr/computing/basic-unix.html)

