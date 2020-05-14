# COVID-19 RO APP
## Aplicatie ce inglobeaza date numerice legate de impactul COVID-19 asupra Romaniei, actualizate in timp real 
### Documentatia aplicatiei

#### 1. Introducere

#### 2. Descriere problema

Cu totii cunoastem pandemia globala de **coronaviroza COVID-19** in care ne aflam, motiv pentru care aceasta reprezinta unul dintre cele mai importante subiecte pe plan mondial. Este esential sa fim la curent cu evolutia acestei pandemii si consider ca este o responsabilitate morala ca fiecare persoana sa respecte prevederile Institutiilor de Sanatate Publica si a Organizatiei Mondiale a Sanatatii pentru a ii proteja pe cei din jurul nostru, si nu in ultimul rand pe noi insine.

Un aspect ce poate fi observat in perioada aceasta este faptul ca solutiile IT sunt folosite la potential maxim pentru ca activitatile sa se poata desfasura in continuare in ritm cat se poate de normal. De aceea, consider ca in aceasta situatie de criza trebuie sa valorificam toate resursele IT de care dispunem si sa punem intr-o lumina pozitiva comunitatea dezvoltatorilor care fac eforturi pentru ca oamenii sa poata trece mai usor peste aceasta perioada.

Astfel, in contextul pandemiei globale COVID-19, o solutie pe care o consider benefica pentru oameni ar fi crearea unei aplicatii WEB care sa aduca intr-un singur loc date numerice relevante cu privire la raspandirea virusului SARS-CoV-2. Aplicatia preia datele prin intermediul a doua API-uri publice.

#### 3. Descriere API

Infrastructura proiectului este constituita dintr-o aplicatie WEB ce inglobeaza HTML, JavaScript si CSS si se bazeaza pe doua API-uri publice care ofera date relevante despre COVID-19 sub forma unor JSON-uri.

Concret, in realizarea aplicatiei au fost utilizate 2 API-uri:

**I) COVID-19 API**

Link: https://covid19api.com/

Acesta este un API gratuit care permite accesarea datelor legate de Coronavirus, iar datele sunt colectate din sursa *https://github.com/CSSEGISandData/COVID-19*. Johns Hopkins University este de altfel renumita la nivel mondial in special pentru harta interactiva "COVID-19 Dashboard by the Center for Systems Science and Engineering" *https://coronavirus.jhu.edu/map.html*. Aceasta platforma furnizeaza date verificate cu privire la **numarul persoanelor infectate, numarul persoanelor vindecate si numarul persoanelor decedate** la nivel global, pe tara, ori in functie de alte criterii. 

API-ul este vast, are o documentatie clara si usor de parcurs (https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest) impreuna cu toate rutele API-ului (https://api.covid19api.com/) iar endpoint-urile sunt numeroase. Printre acestea se afla variantele de a: obtine un sumar al cazurilor noi de COVID-19, decese si vindecari, la nivel global, ori pe tara; toate datele de mai sus expuse pentru o anumita tara, in functie de data, pornind de la prima data a identificarii virusului la nivel mondial, ori pornind de la prima data a identificarii virusului la nivel national si multe altele. Lista completa a endpoint-urilor este in documentatie.

Datele prezente in aplicatie ***(https://covid19-ro-app.herokuapp.com/)*** sunt obtinute printr-un GET by Country care imi returneaza toate cazurile confirmate/vindecate/decedate, de la prima zi a aparitiei COVID-19. Am selectat doar datele relevante din JSON si anume codul tarii (pentru referinta), data la care au fost identificate cazurile si numarul cazurilor confirmate. Coloana de *status* indica faptul ca numarul reprezinta cazurile confirmate.

**II) Coronavirus Stats in Romania**

Link: https://apify.com/vanadragos/covid-19-romania

Acesta este un API gratuit care permite accesarea datelor legate de Coronavirus, iar datele sunt colectate din sursa *https://stirioficiale.ro/informatii*. Stirioficiale.ro este un site demarat de Guvernul Romaniei, in parteneriat cu Code for Romania pentru ca oamenii sa acceseze mai usor informatiile despre COVID-19. Site-ul este actualizat zilnic, asadar si datele API-ului sunt updatate de la o zi la alta.

Datele prezente in aplicatie ***(https://covid19-ro-app.herokuapp.com/)*** sunt obtinute printr-un GET al fisierului JSON care ne returneaza informatiile dorite. Acestea sunt mai specifice decat cele oferite de primul API, pentru ca putem extrage si numarul de persoane testate, dar si sursa din care acestea provin. De aceea, am selectat doar datele relevante din JSON si anume data la care au fost identificate cazurile, numarul persoanelor testate, recuperate si decedate, dar si link-ul sursa al informatiei pentru fiecare linie, in cazul in care utilizatorul doreste sa vizualizeze buletinul de informatii.

#### 4. Flux de date

#### 5. Capturi de ecran aplicatie
