# PartnerCheck Privacy- en Machtigingsdocumentatie

## Overzicht

PartnerCheck is een compatibiliteitscontrole-app die u helpt contacten te visualiseren en vergelijken met behulp van op kleur gebaseerde matching. Dit document legt uit waarom de app toegang tot uw contacten vraagt en hoe uw gegevens worden verwerkt.

## Waarom we toegang tot contacten vragen

PartnerCheck vraagt **alleen-lezen** toegang tot uw contacten voor één specifiek doel:

### Alleen contactselectie

De app gebruikt de native contactenkiezer van uw apparaat om u in staat te stellen contacten **handmatig te selecteren** die u aan de app wilt toevoegen. We hebben **GEEN** automatische toegang, lezen of importeren we al uw contacten. U heeft volledige controle over welke contacten worden toegevoegd.

**Wat er gebeurt wanneer u toestemming verleent:**
- De app opent de standaard contactenkiezer van uw apparaat
- U bladert en selecteert zelf individuele contacten
- Alleen het contact dat u expliciet kiest, wordt verwerkt
- De app heeft nooit toegang tot uw contacten zonder uw directe actie

## Welke gegevens we openen

Wanneer u een contact selecteert via de kiezer, heeft de app toegang tot:

1. **Contactnaam** - De weergavenaam van het geselecteerde contact
2. **Telefoonnummer** - Het eerste telefoonnummer dat aan het contact is gekoppeld (indien beschikbaar)

## Welke gegevens we opslaan

De app slaat gegevens **alleen lokaal op uw apparaat** op. We slaan op:

1. **Contactnaam** - De naam die u heeft geselecteerd
2. **Kleurwaarde** - Een numerieke kleurcode afgeleid van het telefoonnummer

**Belangrijk:** We slaan **NIET** op:
- Het werkelijke telefoonnummer
- E-mailadressen
- Adressen
- Andere contactgegevens
- Foto's of afbeeldingen

## Hoe telefoonnummers worden gebruikt

Het telefoonnummer wordt **alleen** gebruikt om een unieke kleur te genereren voor visuele weergave:

1. De app extraheert de laatste 6 cijfers van het telefoonnummer
2. Deze cijfers worden geconverteerd naar een hexadecimale kleurcode
3. De kleur wordt gebruikt om het contact in de app weer te geven
4. **Het telefoonnummer zelf wordt nooit opgeslagen** - alleen de resulterende kleurwaarde

Dit betekent:
- Elk contact krijgt een unieke, consistente kleur op basis van hun telefoonnummer
- De kleur helpt compatibiliteit tussen contacten te visualiseren
- Het oorspronkelijke telefoonnummer wordt weggegooid na kleurberekening

## Gegevensopslag en privacy

### Alleen lokale opslag

Alle gegevens worden **uitsluitend op uw apparaat** opgeslagen met behulp van lokale opslag (SharedPreferences). Dit betekent:

- ✅ Uw gegevens verlaten nooit uw apparaat
- ✅ Er worden geen gegevens naar servers of derden verzonden
- ✅ Er is geen internetverbinding vereist voor kernfunctionaliteit
- ✅ U kunt alle gegevens verwijderen door de app te verwijderen

### Gegevensretentie

- Gegevens blijven op uw apparaat totdat u handmatig contacten verwijdert of de app verwijdert
- U kunt individuele contacten op elk moment verwijderen via de app-interface
- Het verwijderen van de app verwijdert alle opgeslagen gegevens

## Machtigingen uitgelegd

### READ_CONTACTS-machtiging

**Waarom nodig:** Om de native contactenkiezer te openen zodat u contacten kunt selecteren om toe te voegen.

**Wat het toestaat:**
- Het openen van de systeem contactenkiezer-interface
- Alleen het contact lezen dat u expliciet selecteert
- Het lezen van de naam en het telefoonnummer van dat geselecteerde contact

**Wat het NIET toestaat:**
- Automatische toegang tot alle contacten
- Contacten lezen zonder uw selectie
- Contacten in uw adresboek wijzigen of verwijderen
- Toegang tot andere contactgegevens dan wat u selecteert

**Machtigingstype:** Alleen-lezen (we vragen `readonly: true`)

### WRITE_CONTACTS-machtiging

**Opmerking:** Hoewel deze machtiging is gedeclareerd in het Android-manifest voor compatibiliteit met de contactenkiezer-bibliotheek, **schrijven, wijzigen of verwijderen we geen contacten in uw adresboek**. De app leest alleen het contact dat u selecteert en slaat een minimale hoeveelheid gegevens lokaal op.

## Uw rechten en controle

U heeft volledige controle over uw gegevens:

1. **Kies welke contacten toe te voegen** - Alleen contacten die u expliciet selecteert, worden verwerkt
2. **Verwijder contacten op elk moment** - Verwijder elk contact uit de app op elk moment
3. **Machtiging intrekken** - U kunt toegang tot contacten intrekken in de instellingen van uw apparaat
4. **Handmatige invoeroptie** - U kunt contacten handmatig toevoegen zonder de contactenkiezer te gebruiken
5. **Volledige gegevensverwijdering** - Het verwijderen van de app verwijdert alle opgeslagen gegevens

## Beveiliging en best practices

- Alle gegevensverwerking gebeurt lokaal op uw apparaat
- Geen netwerktransmissie van contactgegevens
- Geen gegevensdeling met derden
- Minimale gegevensverzameling (alleen naam en afgeleide kleurwaarde)
- Alleen-lezen toegang tot contacten

## Contactlimiet (gratis versie)

De gratis versie staat maximaal 10 contacten toe. Deze limiet:
- Is alleen van toepassing op contacten die in de app zijn opgeslagen
- Heeft geen invloed op uw contactenlijst op het apparaat
- Beperkt uw vermogen om uw contacten elders te gebruiken niet
- Kan worden geüpgraded door PartnerCheck Pro te kopen voor onbeperkte contacten

## Veelgestelde vragen

**V: Heeft de app toegang tot al mijn contacten?**  
A: Nee. De app heeft alleen toegang tot contacten die u expliciet selecteert via de contactenkiezer.

**V: Worden mijn contactgegevens naar servers verzonden?**  
A: Nee. Alle gegevens blijven op uw apparaat. Er worden geen contactgegevens via internet verzonden.

**V: Kan de app mijn contacten wijzigen?**  
A: Nee. De app heeft alleen-lezen toegang en wijzigt, verwijdert of voegt geen contacten toe aan uw adresboek.

**V: Wat gebeurt er als ik de contactmachtiging intrek?**  
A: U kunt de app nog steeds gebruiken door contacten handmatig toe te voegen. De contactenkiezer-functie is niet beschikbaar totdat u opnieuw toestemming verleent.

**V: Hoe wordt mijn telefoonnummer gebruikt?**  
A: Het telefoonnummer wordt alleen gebruikt om een kleurcode te berekenen. Het werkelijke telefoonnummer wordt nooit opgeslagen - alleen de resulterende kleurwaarde.

**V: Kan ik de app gebruiken zonder contactmachtiging te verlenen?**  
A: Ja. U kunt contacten handmatig toevoegen door zelf de naam en het telefoonnummer in te voeren.

## Transparantieverbintenis

We geloven in transparantie en gebruikersprivacy. Deze app:
- Vraagt minimale machtigingen die nodig zijn voor functionaliteit
- Verwerkt gegevens lokaal op uw apparaat
- Verzamelt, deelt of verkoopt uw gegevens niet
- Geeft u volledige controle over welke gegevens worden opgeslagen

## Neem contact met ons op

Als u vragen heeft over privacy of gegevensverwerking, neem dan contact met ons op via de ondersteuningskanalen van de app.

---

**Laatst bijgewerkt:** 25.06.2026  
**App-versie:** PartnerCheck  
**Platforms:** iOS, Android
