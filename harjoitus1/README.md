# Ensikosketus Reactiin
React.js on yksi maailman suosituin työkalu modernien web-käyttöliittymien kehittämiseen. Reactin suosioon on edesauttanut sen komponenttipohjainen lähestymistapa, jolla monimutkaisetkin web-palvelut voidaan koostaa yksinkertaisemmista palasista. Lisäksi Reactin komponentit päivittyvät automaattisesti, kun data muuttuu tai sitä on saatavilla lisää (esimerkiksi uutisvirrat voidaan toteuttaa Reactilla hyvinkin yksinkertaisesti ja suorituskykyisesti). Tämä nk. deklaratiivisuus selkeyttää huomattavasti web-sovellusten kehittämistä. Alkujaan React on Facebookin kehittämä ja nykyään sen ympärille on kehittynyt laaja kirjo lisäosia ja oppimateriaalia, joka on toistaiseksi sementoinut Reactin aseman alati muuttuvassa web-devauksen maailmassa.


## create-react-app
Niin ikään Facebookin kehittämä create-react-app (tuttavallisemmin CRA) on helppo ja nopea tapa luoda raamit React-sovelluksen kehitykseen. Vaikka tapoja käyttää Reactia on monia, CRA:n luoma pohja on eräänlainen standardi josta on hyvä lähteä liikkeelle oman sovelluksen kehityksessä.

### Sovelluspohjan luonti
Luodaan uusi React-sovellus käyttämällä create-react-appia. Siirry hakemistoon, jonne haluat luoda sovelluksesi ja aja komento: 

```bash
yarn create react-app my-app
```

Käytämme tässä sovelluksemme nimenä _my-app_, mutta voit nimetä sovelluksesi miksi haluat – muista kuitenkin korvata _my-app_ oman sovelluksesi nimellä myöhemmin esimerkeissä!

Edellinen komento luo uuden React-sovelluksen annettuun _my-app_-hakemistoon. Siirrytään sovellushakemistoon ajamalla komento:

```bash
cd my-app
```

Koska create-react-app luo täysin valmiin sovelluksen, voimme käynnistää sovelluksen suoraan ja tarkastella sitä selaimessa. Aja komento:

```bash
yarn start
```

Sovelluksen käynnistymiseen kuluu muutama sekunti, jonka jälkeen sovellus voidaan avata selaimessa osoitteessa http://localhost:3000. Sovelluksen voi sammuttaa komentoriviltä painamalla Ctrl-C näppäinyhdistelmää.


## Seuraavat askeleet
Onneksi olkoon, olet luonut ensimmäisen React-sovelluksesi! Vaikka CRA teki ison osan työstä etkä ole vielä kirjoittanut riviäkään koodia, on tässä vaiheessa silti aina aihetta juhlaan – enää tarvitsee vain keskittyä omaan sovellukseen ja miten sen haluaa rakentaa.

Linkki: Harjoitus 2

