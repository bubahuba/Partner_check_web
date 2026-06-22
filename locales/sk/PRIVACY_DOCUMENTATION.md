# Dokumentácia o súkromí a oprávneniach PartnerCheck

## Prehľad

PartnerCheck je aplikácia na kontrolu kompatibility, ktorá vám pomáha vizualizovať a porovnávať kontakty pomocou farebného párovania. Tento dokument vysvetľuje, prečo aplikácia žiada o prístup ku kontaktom a ako sú vaše údaje spracovávané.

## Prečo žiadame o prístup ku kontaktom

PartnerCheck žiada o **prístup len na čítanie** ku kontaktom za jediným konkrétnym účelom:

### Iba výber kontaktov

Aplikácia používa natívny výber kontaktov vášho zariadenia, aby vám umožnila **ručne vybrať** kontakty, ktoré chcete pridať do aplikácie. **NEPRISTUPUJEME** automaticky ku všetkým kontaktom, nečítame ich ani ich neimportujeme. Máte plnú kontrolu nad tým, ktoré kontakty sú pridané.

**Čo sa stane, keď udelíte oprávnenie:**
- Aplikácia otvorí štandardný výber kontaktov vášho zariadenia
- Sám prechádzate a vyberáte jednotlivé kontakty
- Spracováva sa iba kontakt, ktorý explicitne vyberiete
- Aplikácia nikdy nepristupuje ku kontaktom bez vašej priamej akcie

## Aké údaje pristupujeme

Keď vyberiete kontakt prostredníctvom výberu, aplikácia pristupuje k:

1. **Meno kontaktu** - Zobrazované meno vybraného kontaktu
2. **Telefónne číslo** - Prvé telefónne číslo spojené s kontaktom (ak je k dispozícii)

## Aké údaje ukladáme

Aplikácia ukladá údaje **iba lokálne na vašom zariadení**. Ukladáme:

1. **Meno kontaktu** - Meno, ktoré ste vybrali
2. **Farebná hodnota** - Číselný farebný kód odvodený z telefónneho čísla

**Dôležité:** **NEUkladáme:**
- Skutočné telefónne číslo
- E-mailové adresy
- Adresy
- Akékoľvek ďalšie informácie o kontakte
- Fotografie alebo obrázky

## Ako sa používajú telefónne čísla

Telefónne číslo sa používa **iba** na vygenerovanie jedinečnej farby pre vizuálne zobrazenie:

1. Aplikácia extrahuje posledných 6 číslic z telefónneho čísla
2. Tieto číslice sa prevedú na hexadecimálny farebný kód
3. Farba sa používa na zobrazenie kontaktu v aplikácii
4. **Samotné telefónne číslo sa nikdy neukladá** - iba výsledná farebná hodnota

To znamená:
- Každý kontakt dostane jedinečnú, konzistentnú farbu na základe svojho telefónneho čísla
- Farba pomáha vizualizovať kompatibilitu medzi kontaktmi
- Pôvodné telefónne číslo sa po výpočte farby zahodí

## Ukladanie údajov a súkromie

### Iba lokálne úložisko

Všetky údaje sú uložené **výhradne na vašom zariadení** pomocou lokálneho úložiska (SharedPreferences). To znamená:

- ✅ Vaše údaje nikdy neopustia vaše zariadenie
- ✅ Žiadne údaje sa neposielajú na servery ani tretím stranám
- ✅ Pre základnú funkčnosť nie je vyžadované internetové pripojenie
- ✅ Všetky údaje môžete vymazať odinštalovaním aplikácie

### Uchovávanie údajov

- Údaje zostávajú na vašom zariadení, kým ručne nevymažete kontakty alebo neodinštalujete aplikáciu
- Jednotlivé kontakty môžete kedykoľvek vymazať prostredníctvom rozhrania aplikácie
- Odinštalovanie aplikácie odstráni všetky uložené údaje

## Vysvetlenie oprávnení

### Oprávnenie READ_CONTACTS

**Prečo je potrebné:** Na otvorenie natívneho výberu kontaktov, aby ste mohli vybrať kontakty na pridanie.

**Čo umožňuje:**
- Otvorenie rozhrania výberu kontaktov systému
- Čítanie iba kontaktu, ktorý explicitne vyberiete
- Čítanie mena a telefónneho čísla vybraného kontaktu

**Čo NEumožňuje:**
- Automatický prístup ku všetkým kontaktom
- Čítanie kontaktov bez vášho výberu
- Úprava alebo mazanie kontaktov vo vašom adresári
- Prístup k akýmkoľvek ďalším informáciám o kontakte okrem toho, čo vyberiete

**Typ oprávnenia:** Len na čítanie (žiadame `readonly: true`)

### Oprávnenie WRITE_CONTACTS

**Poznámka:** Hoci je toto oprávnenie deklarované v manifeste Androidu pre kompatibilitu s knižnicou výberu kontaktov, **nezapisujeme, nemodifikujeme ani nemazeme žiadne kontakty vo vašom adresári**. Aplikácia iba číta kontakt, ktorý vyberiete, a ukladá minimálne množstvo údajov lokálne.

## Vaše práva a kontrola

Máte plnú kontrolu nad svojimi údajmi:

1. **Vyberte, ktoré kontakty pridať** - Spracovávajú sa iba kontakty, ktoré explicitne vyberiete
2. **Vymažte kontakty kedykoľvek** - Odstráňte akýkoľvek kontakt z aplikácie kedykoľvek
3. **Odvoľte oprávnenie** - Prístup ku kontaktom môžete odvolať v nastaveniach zariadenia
4. **Možnosť ručného zadania** - Kontakty môžete pridať ručne bez použitia výberu kontaktov
5. **Úplné odstránenie údajov** - Odinštalovanie aplikácie odstráni všetky uložené údaje

## Zabezpečenie a osvedčené postupy

- Všetko spracovanie údajov prebieha lokálne na vašom zariadení
- Žiadny prenos kontaktných údajov cez sieť
- Žiadne zdieľanie údajov s tretími stranami
- Minimálny zber údajov (iba meno a odvodená farebná hodnota)
- Prístup ku kontaktom len na čítanie

## Limit kontaktov (bezplatná verzia)

Bezplatná verzia umožňuje až 10 kontaktov. Tento limit:
- Platí iba pre kontakty uložené v aplikácii
- Neovplyvňuje zoznam kontaktov vášho zariadenia
- Neobmedzuje vašu schopnosť používať kontakty inde
- Možno upgradovať zakúpením PartnerCheck Pro pre neobmedzené kontakty

## Často kladené otázky

**Otázka: Má aplikácia prístup ku všetkým mojim kontaktom?**  
Odpoveď: Nie. Aplikácia pristupuje iba ku kontaktom, ktoré explicitne vyberiete prostredníctvom výberu kontaktov.

**Otázka: Sú moje kontaktné údaje odosielané na servery?**  
Odpoveď: Nie. Všetky údaje zostávajú na vašom zariadení. Žiadne kontaktné informácie sa neprenášajú cez internet.

**Otázka: Môže aplikácia upraviť moje kontakty?**  
Odpoveď: Nie. Aplikácia má prístup len na čítanie a nemodifikuje, nemazá ani nepridáva kontakty do vášho adresára.

**Otázka: Čo sa stane, keď odvolám oprávnenie ku kontaktom?**  
Odpoveď: Aplikáciu môžete stále používať pridávaním kontaktov ručne. Funkcia výberu kontaktov bude nedostupná, kým znova neudelíte oprávnenie.

**Otázka: Ako sa používa moje telefónne číslo?**  
Odpoveď: Telefónne číslo sa používa iba na výpočet farebného kódu. Skutočné telefónne číslo sa nikdy neukladá - iba výsledná farebná hodnota.

**Otázka: Môžem aplikáciu používať bez udelenia oprávnenia ku kontaktom?**  
Odpoveď: Áno. Kontakty môžete pridať ručne zadaním mena a telefónneho čísla sami.

## Záväzok k transparentnosti

Veríme v transparentnosť a súkromie používateľov. Táto aplikácia:
- Žiada minimálne oprávnenia nevyhnutné pre funkčnosť
- Spracováva údaje lokálne na vašom zariadení
- Nezhromažďuje, nezdieľa ani nepredáva vaše údaje
- Dáva vám plnú kontrolu nad tým, aké údaje sú uložené

## Kontaktujte nás

Ak máte otázky týkajúce sa súkromia alebo spracovania údajov, kontaktujte nás prostredníctvom kanálov podpory aplikácie.

---

**Posledná aktualizácia:** 25.06.2026  
**Verzia aplikácie:** PartnerCheck  
**Platformy:** iOS, Android
