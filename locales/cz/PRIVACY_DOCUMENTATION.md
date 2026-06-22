# Dokumentace o soukromí a oprávněních PartnerCheck

## Přehled

PartnerCheck je aplikace pro kontrolu kompatibility, která vám pomáhá vizualizovat a porovnávat kontakty pomocí barevného párování. Tento dokument vysvětluje, proč aplikace žádá o přístup ke kontaktům a jak jsou vaše data zpracovávána.

## Proč žádáme o přístup ke kontaktům

PartnerCheck žádá o **přístup pouze pro čtení** ke kontaktům za jediným konkrétním účelem:

### Pouze výběr kontaktů

Aplikace používá nativní výběr kontaktů vašeho zařízení, aby vám umožnila **ručně vybrat** kontakty, které chcete přidat do aplikace. **NEPŘISTUPUJEME** automaticky ke všem kontaktům, nečteme je ani je neimportujeme. Máte plnou kontrolu nad tím, které kontakty jsou přidány.

**Co se stane, když udělíte oprávnění:**
- Aplikace otevře standardní výběr kontaktů vašeho zařízení
- Sami procházíte a vybíráte jednotlivé kontakty
- Zpracovává se pouze kontakt, který explicitně vyberete
- Aplikace nikdy nepřistupuje ke kontaktům bez vaší přímé akce

## Jaká data přistupujeme

Když vyberete kontakt prostřednictvím výběru, aplikace přistupuje k:

1. **Jméno kontaktu** - Zobrazované jméno vybraného kontaktu
2. **Telefonní číslo** - První telefonní číslo spojené s kontaktem (pokud je k dispozici)

## Jaká data ukládáme

Aplikace ukládá data **pouze lokálně na vašem zařízení**. Ukládáme:

1. **Jméno kontaktu** - Jméno, které jste vybrali
2. **Barevná hodnota** - Číselný barevný kód odvozený z telefonního čísla

**Důležité:** **NEUkládáme:**
- Skutečné telefonní číslo
- E-mailové adresy
- Adresy
- Jakékoli další informace o kontaktu
- Fotografie nebo obrázky

## Jak se používají telefonní čísla

Telefonní číslo se používá **pouze** k vygenerování jedinečné barvy pro vizuální zobrazení:

1. Aplikace extrahuje posledních 6 číslic z telefonního čísla
2. Tyto číslice se převedou na hexadecimální barevný kód
3. Barva se používá k zobrazení kontaktu v aplikaci
4. **Samotné telefonní číslo se nikdy neukládá** - pouze výsledná barevná hodnota

To znamená:
- Každý kontakt dostane jedinečnou, konzistentní barvu na základě svého telefonního čísla
- Barva pomáhá vizualizovat kompatibilitu mezi kontakty
- Původní telefonní číslo se po výpočtu barvy zahodí

## Ukládání dat a soukromí

### Pouze místní úložiště

Všechna data jsou uložena **výhradně na vašem zařízení** pomocí místního úložiště (SharedPreferences). To znamená:

- ✅ Vaše data nikdy neopustí vaše zařízení
- ✅ Žádná data se neposílají na servery ani třetím stranám
- ✅ Pro základní funkčnost není vyžadováno internetové připojení
- ✅ Všechna data můžete smazat odinstalováním aplikace

### Uchovávání dat

- Data zůstávají na vašem zařízení, dokud ručně nesmažete kontakty nebo neodinstalujete aplikaci
- Jednotlivé kontakty můžete kdykoli smazat prostřednictvím rozhraní aplikace
- Odinstalování aplikace odstraní všechna uložená data

## Vysvětlení oprávnění

### Oprávnění READ_CONTACTS

**Proč je potřeba:** K otevření nativního výběru kontaktů, abyste mohli vybrat kontakty k přidání.

**Co umožňuje:**
- Otevření rozhraní výběru kontaktů systému
- Čtení pouze kontaktu, který explicitně vyberete
- Čtení jména a telefonního čísla vybraného kontaktu

**Co NEumožňuje:**
- Automatický přístup ke všem kontaktům
- Čtení kontaktů bez vašeho výběru
- Úprava nebo mazání kontaktů ve vašem adresáři
- Přístup k jakýmkoli dalším informacím o kontaktu kromě toho, co vyberete

**Typ oprávnění:** Pouze pro čtení (žádáme `readonly: true`)

### Oprávnění WRITE_CONTACTS

**Poznámka:** I když je toto oprávnění deklarováno v manifestu Androidu pro kompatibilitu s knihovnou výběru kontaktů, **nezapisujeme, nemodifikujeme ani nemazeme žádné kontakty ve vašem adresáři**. Aplikace pouze čte kontakt, který vyberete, a ukládá minimální množství dat lokálně.

## Vaše práva a kontrola

Máte plnou kontrolu nad svými daty:

1. **Vyberte, které kontakty přidat** - Zpracovávají se pouze kontakty, které explicitně vyberete
2. **Smažte kontakty kdykoli** - Odstraňte jakýkoli kontakt z aplikace kdykoli
3. **Odvolejte oprávnění** - Přístup ke kontaktům můžete odvolat v nastavení zařízení
4. **Možnost ručního zadání** - Kontakty můžete přidat ručně bez použití výběru kontaktů
5. **Úplné odstranění dat** - Odinstalování aplikace odstraní všechna uložená data

## Zabezpečení a osvědčené postupy

- Veškeré zpracování dat probíhá lokálně na vašem zařízení
- Žádný přenos kontaktních dat přes síť
- Žádné sdílení dat s třetími stranami
- Minimální sběr dat (pouze jméno a odvozená barevná hodnota)
- Přístup ke kontaktům pouze pro čtení

## Limit kontaktů (bezplatná verze)

Bezplatná verze umožňuje až 10 kontaktů. Tento limit:
- Platí pouze pro kontakty uložené v aplikaci
- Neovlivňuje seznam kontaktů vašeho zařízení
- Neomezuje vaši schopnost používat kontakty jinde
- Lze upgradovat zakoupením PartnerCheck Pro pro neomezené kontakty

## Často kladené otázky

**Otázka: Má aplikace přístup ke všem mým kontaktům?**  
Odpověď: Ne. Aplikace přistupuje pouze ke kontaktům, které explicitně vyberete prostřednictvím výběru kontaktů.

**Otázka: Jsou moje kontaktní data odesílána na servery?**  
Odpověď: Ne. Všechna data zůstávají na vašem zařízení. Žádné kontaktní informace se nepřenášejí přes internet.

**Otázka: Může aplikace upravit mé kontakty?**  
Odpověď: Ne. Aplikace má přístup pouze pro čtení a nemodifikuje, nemazá ani nepřidává kontakty do vašeho adresáře.

**Otázka: Co se stane, když odvolám oprávnění ke kontaktům?**  
Odpověď: Aplikaci můžete stále používat přidáváním kontaktů ručně. Funkce výběru kontaktů bude nedostupná, dokud znovu neudělíte oprávnění.

**Otázka: Jak se používá moje telefonní číslo?**  
Odpověď: Telefonní číslo se používá pouze k výpočtu barevného kódu. Skutečné telefonní číslo se nikdy neukládá - pouze výsledná barevná hodnota.

**Otázka: Mohu aplikaci používat bez udělení oprávnění ke kontaktům?**  
Odpověď: Ano. Kontakty můžete přidat ručně zadáním jména a telefonního čísla sami.

## Závazek k transparentnosti

Věříme v transparentnost a soukromí uživatelů. Tato aplikace:
- Žádá minimální oprávnění nezbytná pro funkčnost
- Zpracovává data lokálně na vašem zařízení
- Neshromažďuje, nesdílí ani neprodává vaše data
- Dává vám plnou kontrolu nad tím, jaká data jsou uložena

## Kontaktujte nás

Pokud máte otázky týkající se soukromí nebo zpracování dat, kontaktujte nás prostřednictvím kanálů podpory aplikace.

---

**Poslední aktualizace:** 25.06.2026  
**Verze aplikace:** PartnerCheck  
**Platformy:** iOS, Android
