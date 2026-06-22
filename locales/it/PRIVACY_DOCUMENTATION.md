# Documentazione sulla privacy e le autorizzazioni di PartnerCheck

## Panoramica

PartnerCheck è un'app di verifica della compatibilità che ti aiuta a visualizzare e confrontare i contatti utilizzando l'abbinamento basato sui colori. Questo documento spiega perché l'app richiede l'accesso ai tuoi contatti e come vengono gestiti i tuoi dati.

## Perché richiediamo l'accesso ai contatti

PartnerCheck richiede l'accesso **solo in lettura** ai tuoi contatti per un unico scopo specifico:

### Solo selezione contatti

L'app utilizza il selettore di contatti nativo del tuo dispositivo per permetterti di **selezionare manualmente** i contatti che desideri aggiungere all'app. **NON** accediamo automaticamente, non leggiamo né importiamo tutti i tuoi contatti. Hai il controllo completo su quali contatti vengono aggiunti.

**Cosa succede quando concedi l'autorizzazione:**
- L'app apre il selettore di contatti standard del tuo dispositivo
- Sfogli e selezioni singoli contatti tu stesso
- Viene elaborato solo il contatto che scegli esplicitamente
- L'app non accede mai ai tuoi contatti senza la tua azione diretta

## Quali dati accediamo

Quando selezioni un contatto tramite il selettore, l'app accede a:

1. **Nome del contatto** - Il nome visualizzato del contatto selezionato
2. **Numero di telefono** - Il primo numero di telefono associato al contatto (se disponibile)

## Quali dati memorizziamo

L'app memorizza i dati **solo localmente sul tuo dispositivo**. Memorizziamo:

1. **Nome del contatto** - Il nome che hai selezionato
2. **Valore del colore** - Un codice colore numerico derivato dal numero di telefono

**Importante:** **NON** memorizziamo:
- Il numero di telefono effettivo
- Indirizzi email
- Indirizzi
- Qualsiasi altra informazione di contatto
- Foto o immagini

## Come vengono utilizzati i numeri di telefono

Il numero di telefono viene utilizzato **solo** per generare un colore univoco per la visualizzazione:

1. L'app estrae le ultime 6 cifre dal numero di telefono
2. Queste cifre vengono convertite in un codice colore esadecimale
3. Il colore viene utilizzato per visualizzare il contatto nell'app
4. **Il numero di telefono stesso non viene mai memorizzato** - solo il valore del colore risultante

Ciò significa:
- Ogni contatto ottiene un colore univoco e coerente basato sul suo numero di telefono
- Il colore aiuta a visualizzare la compatibilità tra i contatti
- Il numero di telefono originale viene scartato dopo il calcolo del colore

## Archiviazione dei dati e privacy

### Solo archiviazione locale

Tutti i dati sono memorizzati **esclusivamente sul tuo dispositivo** utilizzando l'archiviazione locale (SharedPreferences). Ciò significa:

- ✅ I tuoi dati non lasciano mai il tuo dispositivo
- ✅ Nessun dato viene inviato a server o terze parti
- ✅ Nessuna connessione Internet è richiesta per le funzionalità principali
- ✅ Puoi eliminare tutti i dati disinstallando l'app

### Conservazione dei dati

- I dati persistono sul tuo dispositivo fino a quando non elimini manualmente i contatti o disinstalli l'app
- Puoi eliminare singoli contatti in qualsiasi momento tramite l'interfaccia dell'app
- La disinstallazione dell'app rimuove tutti i dati memorizzati

## Autorizzazioni spiegate

### Autorizzazione READ_CONTACTS

**Perché necessaria:** Per aprire il selettore di contatti nativo in modo da poter selezionare i contatti da aggiungere.

**Cosa consente:**
- Aprire l'interfaccia del selettore di contatti del sistema
- Leggere solo il contatto che selezioni esplicitamente
- Leggere il nome e il numero di telefono di quel contatto selezionato

**Cosa NON consente:**
- Accedere automaticamente a tutti i contatti
- Leggere i contatti senza la tua selezione
- Modificare o eliminare i contatti nella tua rubrica
- Accedere a qualsiasi altra informazione di contatto oltre a ciò che selezioni

**Tipo di autorizzazione:** Solo lettura (richiediamo `readonly: true`)

### Autorizzazione WRITE_CONTACTS

**Nota:** Sebbene questa autorizzazione sia dichiarata nel manifest Android per compatibilità con la libreria del selettore di contatti, **non scriviamo, modifichiamo né eliminiamo contatti nella tua rubrica**. L'app legge solo il contatto che selezioni e memorizza una quantità minima di dati localmente.

## I tuoi diritti e controllo

Hai il controllo completo sui tuoi dati:

1. **Scegli quali contatti aggiungere** - Vengono elaborati solo i contatti che selezioni esplicitamente
2. **Elimina i contatti in qualsiasi momento** - Rimuovi qualsiasi contatto dall'app in qualsiasi momento
3. **Revoca l'autorizzazione** - Puoi revocare l'accesso ai contatti nelle impostazioni del dispositivo
4. **Opzione di inserimento manuale** - Puoi aggiungere contatti manualmente senza utilizzare il selettore di contatti
5. **Rimozione completa dei dati** - La disinstallazione dell'app rimuove tutti i dati memorizzati

## Sicurezza e best practice

- Tutta l'elaborazione dei dati avviene localmente sul tuo dispositivo
- Nessuna trasmissione di dati di contatto sulla rete
- Nessuna condivisione di dati con terze parti
- Raccolta minima di dati (solo nome e valore del colore derivato)
- Accesso ai contatti solo in lettura

## Limite di contatti (versione gratuita)

La versione gratuita consente fino a 10 contatti. Questo limite:
- Si applica solo ai contatti memorizzati nell'app
- Non influisce sull'elenco dei contatti del tuo dispositivo
- Non limita la tua capacità di utilizzare i tuoi contatti altrove
- Può essere migliorato acquistando PartnerCheck Pro per contatti illimitati

## Domande frequenti

**D: L'app accede a tutti i miei contatti?**  
R: No. L'app accede solo ai contatti che selezioni esplicitamente tramite il selettore di contatti.

**D: I miei dati di contatto vengono inviati ai server?**  
R: No. Tutti i dati rimangono sul tuo dispositivo. Nessuna informazione di contatto viene trasmessa tramite Internet.

**D: L'app può modificare i miei contatti?**  
R: No. L'app ha accesso solo in lettura e non modifica, elimina né aggiunge contatti alla tua rubrica.

**D: Cosa succede se revoco l'autorizzazione ai contatti?**  
R: Puoi ancora utilizzare l'app aggiungendo contatti manualmente. La funzionalità del selettore di contatti non sarà disponibile fino a quando non concederai nuovamente l'autorizzazione.

**D: Come viene utilizzato il mio numero di telefono?**  
R: Il numero di telefono viene utilizzato solo per calcolare un codice colore. Il numero di telefono effettivo non viene mai memorizzato - solo il valore del colore risultante.

**D: Posso usare l'app senza concedere l'autorizzazione ai contatti?**  
R: Sì. Puoi aggiungere contatti manualmente inserendo tu stesso il nome e il numero di telefono.

## Impegno per la trasparenza

Crediamo nella trasparenza e nella privacy degli utenti. Questa app:
- Richiede le autorizzazioni minime necessarie per la funzionalità
- Elabora i dati localmente sul tuo dispositivo
- Non raccoglie, condivide né vende i tuoi dati
- Ti dà il controllo completo su quali dati vengono memorizzati

## Contattaci

Se hai domande sulla privacy o sulla gestione dei dati, contattaci tramite i canali di supporto dell'app.

---

**Ultimo aggiornamento:** 25.06.2026 
**Versione app:** PartnerCheck  
**Piattaforme:** iOS, Android
