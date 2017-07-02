# Autentimine

## arendusstiilid
“rich clients, a RESTful backend and communication via JSON”

## küpsised
  - RFC 6265 (2011) HTTP State Management Mechanism https://tools.ietf.org/html/rfc6265 
  `HttpOnly` atribuudiga küpsised ei ole sirvijas jooksva rakenduse Javascriptile kättesaadavad.
  `Secure` atribuudiga küpsist saab saata ainult HTTPS kaudu (sirvija kontrollib seda).
  `Path` - piirab küpsise skoobi teega.
  `Domain` - määrab, millal küpsis saadetakse. Saadetakse ka kõigile alamdomeenidele. Kui aga ei ole määratud, siis küpsis saadetakse ainult küpsise seadnud domeenile (s.t lehe domeen, mitte alamdomeenidele).
  _Third Party Cookie_ Kui lehelt tehakse pöördumisi teistele saitidele, nt skriptide või `img` laadimine, siis need saidid võivad ka asetada küpsiseid (omale). Seda asetamist saab keelata.
  - Leht võib ise seada `document.domain` väärtuseks ülemdomeeni. Seda kasutatakse siis edasistes ühisallikapoliitika kontrollides. Vt ühisallikapoliitika.  

  ```
  Set-Cookie: name=value; Path=/kirjeldaja/
  ```

  Küpsis lisatakse päringusse ainult siis, kui päringu URL-is on tee `/kirjeldaja`.

## Content Security Policy, CSP
  - keelelised vahendid sisu töötlemise piiramiseks turvaeesmärkidel
  - https://www.w3.org/TR/CSP/ 
  - CSP Cheat Sheet https://scotthelme.co.uk/csp-cheat-sheet/ 
 
## cross-site scripting, XSS, murdskriptimine
  - (http://akit.cyber.ee/term/567-cross-site-scripting),
  kood ja andmed segamini (veebirakendustes)
  Millal andmed muutuvad programmiks?
  koodisüstimine, code injection 
  *ründaja* saadab andmeteks maskeeritud koodi, mida sirvija ekslikult parsib mitte andmetena vaid koodina
  puhastamine, sanitization, tähtsaim kaitsevahend, ohtlike konstruktsioonide muutmine inertseks
  vt: http://www.comp.nus.edu.sg/~prateeks/papers/csas-ccs11.pdf 
  õpetlik artikkel: http://wonko.com/post/html-escaping “Tuleb aru saada kontekstist, milles kasutaja sisendit kasutatakse” 
  “1. Injectability: the attacker must be able to inject data into the Document Object Model (DOM) rendered by the Web browser.
  2. Executability: if JavaScript (or any other code) is injected, it must be executed.
  3. Exfiltration Capability: attacker-harvested data must be delivered to another domain or resource for further analysis and exploitation.” - https://www.hgi.rub.de/media/emma/veroeffentlichungen/2012/08/16/scriptlessAttacks-ccs2012.pdf 
  “server- and client-side XSS filters try to remove scripts from the injected content, or, they try to modify/replace these scripts in a way that they are not executed in the browser’s DOM”
  http://appsandsecurity.blogspot.com.ee/2012/11/is-xss-solved.html 
 
## Cross-Site Request Forgery, CSRF
  - “CSRF rely on the fact that your browser automatically adds cookies to HTTP requests if it has cookies associated with the target domain and path. That includes session cookies.” http://appsandsecurity.blogspot.com.ee/2012/01/stateless-csrf-protection.html 
  oht ainult GET päringutes? Ei
  CSRF hea kirjeldus (2008) “There are three widely used techniques for defending against CSRF attacks: validating a secret request token, validating the HTTP Referer header, and validating custom headers attached to XMLHttpRequests.” - http://www.adambarth.com/papers/2008/barth-jackson-mitchell-b.pdf 
  https://stackoverflow.com/questions/2392100/how-to-prevent-csrf-in-a-restful-application 
  CSRF Protection With Double Submit - sama küpsis tuleb esitada nii küpsisena kui ka eraldi päises. Ründaja ei saa küpsist enne saatmist lugeda. CSRF küpsisena ei tohiks kasutada sessiooniküpsist, sest CSRF küpsis ei saa olla Http Only (lehe Javascript peab suutma seda lugeda). See aga toob kaasa sessiooni ülevõtmise (session hijacking) ohu (murdskriptimise teel). Peaks olema eraldi CSRF küpsis. Kahekordse esituse küpsise saab genereerida kliendi poolel, ei pea serveris.  http://appsandsecurity.blogspot.com.ee/2012/01/stateless-csrf-protection.html 
  OWASP CSRF Cheat Sheet, vt jaotis Double Submit Cookie: https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)_Prevention_Cheat_Sheet#Double_Submit_Cookies 
  ka AJAX-vastuses saab seada küpsise; CSRF-küpsise pärimine enne iga pöördumist REST API poole? Piisab ühest!?
 
## custom header-i lisamine AJAX-päringus
  https://stackoverflow.com/questions/7686827/how-can-i-add-a-custom-http-header-to-ajax-request-with-js-or-jquery (“CORS has different requirements and beyond a few (very basic) headers, any additional will have to be whitelisted via the Access-Control-Request-Headers header.”)

  ```
  // Request with custom header
  $.ajax({
      url: 'foo/bar',
      headers: { 'x-my-custom-header': 'some value' }
  });
  ```

## cross-origin resource sharing, CORS
  ***teise domeeni päring, CORS request*** 
  hea seletus: https://www.moesif.com/blog/technical/cors/Authoritative-Guide-to-CORS-Cross-Origin-Resource-Sharing-for-REST-APIs/ 
  CORS lahendus Node.js-s: https://github.com/expressjs/cors/blob/master/README.md 
 
## domeen, domain 
  interneti domeenisüsteemiga määratud identiteet. 
  Domeen on serverirakenduse (-teenuse) identiteet. Sirvijasse laetud Javascript-rakendusel ei ole oma identiteeti. Tema identiteediks on tema allikas (origin), viimase tähtsaim osa on laadimislehe identiteet (domeen, kust leht laeti).

## allikas, origin
  kombinatsiooniga protokoll, domain, port määratud identiteet. Sirvijasse laetud Javascript-rakenduse tähtsaim identiteet.
 
## ühisallikapoliitika, same-origin policy
  Sirvijas ühe lehe skriptid ei pääse ligi teisele lehele (DOM-le) (liivakasti põhimõte).
  https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy 

## kus hoida JWT-d?
  "A JWT, if used without Cookies, negates the need for a CSRF token - BUT! by storing JWT in session/localStorage, your expose your JWT and user's identity if your site has an XSS vulnerability (fairly common). It is better to add a csrfToken key to the JWT and store the JWT in a cookie with secure and `http-only` attributes set." - https://stackoverflow.com/questions/21357182/csrf-token-necessary-when-using-stateless-sessionless-authentication 
  You can make this CSRF protection stateless by including a xsrfToken JWT claim:

  ```
      {
          "iss": "http://galaxies.com",
          "exp": 1300819380,
          "scopes": ["explorer", "solar-harvester", "seller"],
          "sub": "tom@andromeda.com",
          "xsrfToken": "d9b9714c-7ac0-42e0-8696-2dae95dbc33e"
        }
  ```

  So you will need to store the csrfToken in localStorage/sessionStorage as well as in the JWT itself (which is stored in a `http-only` and secure cookie). Then for csrf protection, verify that the csrf token in the JWT matches the submitted csrf-token header.

  - Where to Store your JWTs – Cookies vs HTML5 Web Storage (2016) https://stormpath.com/blog/where-to-store-your-jwts-cookies-vs-html5-web-storage 

- Angular’s XSRF: How It Works - https://stormpath.com/blog/angular-xsrf 

## RIHA näide
  `riha.ee` - laadimislehe domeen
  `riha.ee/login` - autentiminse marsruut (_route_) e _endpoint_

## HTML5 veebimälu, Web Storage (localStorage ja sessionStorage)
  Kahte tüüpi: 1) `window.localStorage` salvestame aegumistähtajata; 2) `window.sessionStorage` salvestab kuni sirvija tab suletakse. Veebimälule pääseb ligi ainult ühisallikast (_same-origin policy_).
  - https://developer.mozilla.org/en/docs/Web/API/Window/sessionStorage
  - https://www.w3schools.com/html/html5_webstorage.asp

### Salvestamine `sessionStorage`-sse
  Server saadab pääsuvolituse (_access token_-i) vastuse kehas:

  ```
  HTTP/1.1 200 OK
  
    {
    "access_token": "eyJhbGciOiJIUzI1NiIsI.eyJpc3MiOiJodHRwczotcGxlL.mFrs3Zo8eaSNcxiNfvRh9dqKP4F1cB",
        "expires_in":3600
    }
  ```

  Salvestamine:

  ```
  function tokenSuccess(err, response) {
      $window.sessionStorage.accessToken = response.body.access_token;
  }
  ```

  Kasutamine `sessionStorage`-st:

  ```
  HTTP/1.1
  
  GET /stars/pollux
  Host: galaxies.com
  Authorization: Bearer eyJhbGciOiJIUzI1...
  ```

  ### Salvestamine küpsisena

  Server saadab:

  ```
  HTTP/1.1 200 OK
  
  Set-Cookie: access_token=eyJhbGciOiJIUzI1NiIsI
  ```

  Kasutamine (võimalik ainult samas allikas olevas API-s!) - server lisab automaatselt küpsise:

  ```
  GET /stars/pollux
  Host: galaxies.com
  
  Cookie: access_token=eyJhbGciOiJIUzI1NiIs
  ```

  AngularJS kasutab... , aga mitte cross-domain päringute korral!
  https://docs.angularjs.org/api/ng/service/$http#cross-site-request-forgery-xsrf-protection 

## HTTP Turvapäised

  ### Referer päis
  "CSRF can also be partially prevented by checking the HTTP Referer and Origin header from your API. CSRF attacks will have Referer and Origin headers that are unrelated to your application."

  ### Origin päis
  Samalaadne Referer-ga, kuid ei saada teed (_path_-i).
  https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin 

  ### Uus: Referrer Policy
  vt https://scotthelme.co.uk/a-new-security-header-referrer-policy/ 


## Kaks viisi, kuidas sirvijarakendus saab end serverile autentida:
1) ilmutatama - sirvija hoolitseb, küpsised, Basic Authentication jm. "Once established for a certain domain, the browser implicitly sends the credential along automatically." 2) ilmutatud - sirvijarakendus saadab kredentsiaalid ise, tavaliselt `Authorization` päises, vahel ka päringusõnes (_query string_).
Kui rakendus kasutab API-sid, mis on laiali erinevate domeenide vahel, siis küpsiste mehhanism ei tööta.
https://leastprivilege.com/2015/04/01/implicit-vs-explicit-authentication-in-browser-based-applications/

Selleks, et kredentsiaale `Authorization` päises saata, peab sirvijarakendus olema need saanud nii, et neile ligi pääseb (mitte `HttpOnly` küpsisena).

## JWT
  Multiple audiences? Hea juhukirjeldus, kus see vajadus on:  https://github.com/IdentityServer/IdentityServer3/issues/1365 
  "in an Enterprise scenario with very specific clients and resources I don't see a use case for scopes (or consent)."
  "OAuth2 does not use the term 'audience' (search the spec) - it instead uses the term 'scope'. Semantically they are equivalent (where and for what can the access token be used)."
  "OAuth2 says nothing about audiences; but Jwt says a lot. Jwt says that the token can have multiple - or one - audiences; it also says that the recipients of the tokens should validate that they are included in the audiences and reject the token if they are not."
  