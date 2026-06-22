# PartnerCheck Datenschutz- und Berechtigungsdokumentation

## Übersicht

PartnerCheck ist eine Kompatibilitätsprüfungs-App, die Ihnen hilft, Kontakte mithilfe von farbbasiertem Matching zu visualisieren und zu vergleichen. Dieses Dokument erklärt, warum die App Zugriff auf Ihre Kontakte anfordert und wie Ihre Daten behandelt werden.

## Warum wir Kontaktzugriff anfordern

PartnerCheck fordert **nur-Lese-Zugriff** auf Ihre Kontakte für einen einzigen spezifischen Zweck:

### Nur Kontaktauswahl

Die App verwendet den nativen Kontaktauswähler Ihres Geräts, damit Sie Kontakte **manuell auswählen** können, die Sie zur App hinzufügen möchten. Wir greifen **NICHT** automatisch auf alle Ihre Kontakte zu, lesen oder importieren sie nicht. Sie haben vollständige Kontrolle darüber, welche Kontakte hinzugefügt werden.

**Was passiert, wenn Sie die Berechtigung erteilen:**
- Die App öffnet den Standard-Kontaktauswähler Ihres Geräts
- Sie durchsuchen und wählen einzelne Kontakte selbst aus
- Nur der Kontakt, den Sie explizit wählen, wird verarbeitet
- Die App greift niemals auf Ihre Kontakte zu, ohne Ihre direkte Aktion

## Welche Daten wir zugreifen

Wenn Sie einen Kontakt über den Auswähler auswählen, greift die App auf folgende Daten zu:

1. **Kontaktname** - Der Anzeigename des ausgewählten Kontakts
2. **Telefonnummer** - Die erste Telefonnummer, die dem Kontakt zugeordnet ist (falls verfügbar)

## Welche Daten wir speichern

Die App speichert Daten **nur lokal auf Ihrem Gerät**. Wir speichern:

1. **Kontaktname** - Der Name, den Sie ausgewählt haben
2. **Farbwert** - Ein numerischer Farbcode, der von der Telefonnummer abgeleitet wird

**Wichtig:** Wir speichern **NICHT**:
- Die tatsächliche Telefonnummer
- E-Mail-Adressen
- Adressen
- Andere Kontaktinformationen
- Fotos oder Bilder

## Wie Telefonnummern verwendet werden

Die Telefonnummer wird **nur** verwendet, um eine eindeutige Farbe für die visuelle Anzeige zu generieren:

1. Die App extrahiert die letzten 6 Ziffern aus der Telefonnummer
2. Diese Ziffern werden in einen hexadezimalen Farbcode umgewandelt
3. Die Farbe wird verwendet, um den Kontakt in der App anzuzeigen
4. **Die Telefonnummer selbst wird niemals gespeichert** - nur der resultierende Farbwert

Das bedeutet:
- Jeder Kontakt erhält eine eindeutige, konsistente Farbe basierend auf seiner Telefonnummer
- Die Farbe hilft, die Kompatibilität zwischen Kontakten zu visualisieren
- Die ursprüngliche Telefonnummer wird nach der Farbberechnung verworfen

## Datenspeicherung und Datenschutz

### Nur lokale Speicherung

Alle Daten werden **ausschließlich auf Ihrem Gerät** unter Verwendung des lokalen Speichers (SharedPreferences) gespeichert. Das bedeutet:

- ✅ Ihre Daten verlassen niemals Ihr Gerät
- ✅ Keine Daten werden an Server oder Dritte gesendet
- ✅ Keine Internetverbindung ist für die Kernfunktionalität erforderlich
- ✅ Sie können alle Daten löschen, indem Sie die App deinstallieren

### Datenaufbewahrung

- Daten bleiben auf Ihrem Gerät, bis Sie Kontakte manuell löschen oder die App deinstallieren
- Sie können einzelne Kontakte jederzeit über die App-Oberfläche löschen
- Die Deinstallation der App entfernt alle gespeicherten Daten

## Berechtigungen erklärt

### READ_CONTACTS-Berechtigung

**Warum benötigt:** Um den nativen Kontaktauswähler zu öffnen, damit Sie Kontakte zum Hinzufügen auswählen können.

**Was es erlaubt:**
- Öffnen der System-Kontaktauswähler-Oberfläche
- Nur den Kontakt lesen, den Sie explizit auswählen
- Lesen des Namens und der Telefonnummer dieses ausgewählten Kontakts

**Was es NICHT erlaubt:**
- Automatischen Zugriff auf alle Kontakte
- Lesen von Kontakten ohne Ihre Auswahl
- Ändern oder Löschen von Kontakten in Ihrem Adressbuch
- Zugriff auf andere Kontaktinformationen außer dem, was Sie auswählen

**Berechtigungstyp:** Nur-Lesen (wir fordern `readonly: true`)

### WRITE_CONTACTS-Berechtigung

**Hinweis:** Obwohl diese Berechtigung im Android-Manifest für die Kompatibilität mit der Kontaktauswähler-Bibliothek deklariert ist, **schreiben, ändern oder löschen wir keine Kontakte in Ihrem Adressbuch**. Die App liest nur den Kontakt, den Sie auswählen, und speichert eine minimale Datenmenge lokal.

## Ihre Rechte und Kontrolle

Sie haben vollständige Kontrolle über Ihre Daten:

1. **Wählen Sie, welche Kontakte hinzugefügt werden sollen** - Nur Kontakte, die Sie explizit auswählen, werden verarbeitet
2. **Löschen Sie Kontakte jederzeit** - Entfernen Sie jeden Kontakt aus der App jederzeit
3. **Berechtigung widerrufen** - Sie können den Kontaktzugriff in den Geräteeinstellungen widerrufen
4. **Manuelle Eingabeoption** - Sie können Kontakte manuell hinzufügen, ohne den Kontaktauswähler zu verwenden
5. **Vollständige Datenentfernung** - Die Deinstallation der App entfernt alle gespeicherten Daten

## Sicherheit und Best Practices

- Alle Datenverarbeitung erfolgt lokal auf Ihrem Gerät
- Keine Netzwerkübertragung von Kontaktdaten
- Keine Datenweitergabe an Dritte
- Minimale Datensammlung (nur Name und abgeleiteter Farbwert)
- Nur-Lese-Zugriff auf Kontakte

## Kontaktlimit (Kostenlose Version)

Die kostenlose Version erlaubt bis zu 10 Kontakte. Dieses Limit:
- Gilt nur für Kontakte, die in der App gespeichert sind
- Beeinflusst nicht Ihre Kontaktliste auf dem Gerät
- Begrenzt nicht Ihre Fähigkeit, Ihre Kontakte woanders zu verwenden
- Kann durch den Kauf von PartnerCheck Pro für unbegrenzte Kontakte aktualisiert werden

## Häufig gestellte Fragen

**F: Greift die App auf alle meine Kontakte zu?**  
A: Nein. Die App greift nur auf Kontakte zu, die Sie explizit über den Kontaktauswähler auswählen.

**F: Werden meine Kontaktdaten an Server gesendet?**  
A: Nein. Alle Daten bleiben auf Ihrem Gerät. Keine Kontaktinformationen werden über das Internet übertragen.

**F: Kann die App meine Kontakte ändern?**  
A: Nein. Die App hat nur-Lese-Zugriff und ändert, löscht oder fügt keine Kontakte zu Ihrem Adressbuch hinzu.

**F: Was passiert, wenn ich die Kontaktberechtigung widerrufe?**  
A: Sie können die App weiterhin verwenden, indem Sie Kontakte manuell hinzufügen. Die Kontaktauswähler-Funktion ist nicht verfügbar, bis Sie die Berechtigung erneut erteilen.

**F: Wie wird meine Telefonnummer verwendet?**  
A: Die Telefonnummer wird nur verwendet, um einen Farbcode zu berechnen. Die tatsächliche Telefonnummer wird niemals gespeichert - nur der resultierende Farbwert.

**F: Kann ich die App verwenden, ohne die Kontaktberechtigung zu erteilen?**  
A: Ja. Sie können Kontakte manuell hinzufügen, indem Sie den Namen und die Telefonnummer selbst eingeben.

## Transparenzverpflichtung

Wir glauben an Transparenz und Benutzerdatenschutz. Diese App:
- Fordert minimale Berechtigungen an, die für die Funktionalität erforderlich sind
- Verarbeitet Daten lokal auf Ihrem Gerät
- Sammelt, teilt oder verkauft Ihre Daten nicht
- Gibt Ihnen vollständige Kontrolle darüber, welche Daten gespeichert werden

## Kontaktieren Sie uns

Wenn Sie Fragen zum Datenschutz oder zur Datenverarbeitung haben, kontaktieren Sie uns bitte über die Support-Kanäle der App.

---

**Zuletzt aktualisiert:** 25.06.2026  
**App-Version:** PartnerCheck  
**Plattformen:** iOS, Android
