# Dokumentacja prywatności i uprawnień PartnerCheck

## Przegląd

PartnerCheck to aplikacja sprawdzająca kompatybilność, która pomaga wizualizować i porównywać kontakty za pomocą dopasowania opartego na kolorach. Niniejszy dokument wyjaśnia, dlaczego aplikacja żąda dostępu do kontaktów i jak są przetwarzane Twoje dane.

## Dlaczego żądamy dostępu do kontaktów

PartnerCheck żąda dostępu **tylko do odczytu** do kontaktów w jednym konkretnym celu:

### Tylko wybór kontaktów

Aplikacja używa natywnego selektora kontaktów Twojego urządzenia, aby umożliwić Ci **ręczne wybranie** kontaktów, które chcesz dodać do aplikacji. **NIE** uzyskujemy automatycznie dostępu, nie czytamy ani nie importujemy wszystkich Twoich kontaktów. Masz pełną kontrolę nad tym, które kontakty są dodawane.

**Co się dzieje, gdy udzielisz uprawnienia:**
- Aplikacja otwiera standardowy selektor kontaktów Twojego urządzenia
- Przeglądasz i wybierasz poszczególne kontakty samodzielnie
- Przetwarzany jest tylko kontakt, który wyraźnie wybierzesz
- Aplikacja nigdy nie uzyskuje dostępu do kontaktów bez Twojej bezpośredniej akcji

## Jakie dane uzyskujemy

Gdy wybierzesz kontakt za pomocą selektora, aplikacja uzyskuje dostęp do:

1. **Imię kontaktu** - Wyświetlane imię wybranego kontaktu
2. **Numer telefonu** - Pierwszy numer telefonu powiązany z kontaktem (jeśli dostępny)

## Jakie dane przechowujemy

Aplikacja przechowuje dane **tylko lokalnie na Twoim urządzeniu**. Przechowujemy:

1. **Imię kontaktu** - Imię, które wybrałeś
2. **Wartość koloru** - Numeryczny kod koloru pochodzący z numeru telefonu

**Ważne:** **NIE** przechowujemy:
- Rzeczywistego numeru telefonu
- Adresów e-mail
- Adresów
- Jakichkolwiek innych informacji kontaktowych
- Zdjęć lub obrazów

## Jak używane są numery telefonów

Numer telefonu jest używany **tylko** do wygenerowania unikalnego koloru do wizualnego wyświetlenia:

1. Aplikacja wyodrębnia ostatnie 6 cyfr z numeru telefonu
2. Te cyfry są konwertowane na szesnastkowy kod koloru
3. Kolor jest używany do wyświetlenia kontaktu w aplikacji
4. **Sam numer telefonu nigdy nie jest przechowywany** - tylko wynikowa wartość koloru

Oznacza to:
- Każdy kontakt otrzymuje unikalny, spójny kolor na podstawie swojego numeru telefonu
- Kolor pomaga wizualizować kompatybilność między kontaktami
- Oryginalny numer telefonu jest odrzucany po obliczeniu koloru

## Przechowywanie danych i prywatność

### Tylko lokalne przechowywanie

Wszystkie dane są przechowywane **wyłącznie na Twoim urządzeniu** przy użyciu lokalnego przechowywania (SharedPreferences). Oznacza to:

- ✅ Twoje dane nigdy nie opuszczają Twojego urządzenia
- ✅ Żadne dane nie są wysyłane na serwery ani do stron trzecich
- ✅ Połączenie internetowe nie jest wymagane do podstawowej funkcjonalności
- ✅ Możesz usunąć wszystkie dane przez odinstalowanie aplikacji

### Przechowywanie danych

- Dane pozostają na Twoim urządzeniu, dopóki ręcznie nie usuniesz kontaktów lub nie odinstalujesz aplikacji
- Możesz usunąć poszczególne kontakty w dowolnym momencie za pomocą interfejsu aplikacji
- Odinstalowanie aplikacji usuwa wszystkie przechowywane dane

## Wyjaśnienie uprawnień

### Uprawnienie READ_CONTACTS

**Dlaczego potrzebne:** Aby otworzyć natywny selektor kontaktów, aby móc wybrać kontakty do dodania.

**Co pozwala:**
- Otwieranie interfejsu selektora kontaktów systemu
- Odczyt tylko kontaktu, który wyraźnie wybierzesz
- Odczyt imienia i numeru telefonu wybranego kontaktu

**Czego NIE pozwala:**
- Automatyczny dostęp do wszystkich kontaktów
- Odczyt kontaktów bez Twojego wyboru
- Modyfikowanie lub usuwanie kontaktów w Twojej książce adresowej
- Dostęp do jakichkolwiek innych informacji kontaktowych poza tym, co wybierzesz

**Typ uprawnienia:** Tylko do odczytu (żądamy `readonly: true`)

### Uprawnienie WRITE_CONTACTS

**Uwaga:** Chociaż to uprawnienie jest zadeklarowane w manifeście Androida dla kompatybilności z biblioteką selektora kontaktów, **nie zapisujemy, nie modyfikujemy ani nie usuwamy żadnych kontaktów w Twojej książce adresowej**. Aplikacja tylko odczytuje kontakt, który wybierzesz, i przechowuje minimalną ilość danych lokalnie.

## Twoje prawa i kontrola

Masz pełną kontrolę nad swoimi danymi:

1. **Wybierz, które kontakty dodać** - Przetwarzane są tylko kontakty, które wyraźnie wybierzesz
2. **Usuń kontakty w dowolnym momencie** - Usuń dowolny kontakt z aplikacji w dowolnym momencie
3. **Cofnij uprawnienie** - Możesz cofnąć dostęp do kontaktów w ustawieniach urządzenia
4. **Opcja ręcznego wprowadzania** - Możesz dodawać kontakty ręcznie bez użycia selektora kontaktów
5. **Całkowite usunięcie danych** - Odinstalowanie aplikacji usuwa wszystkie przechowywane dane

## Bezpieczeństwo i najlepsze praktyki

- Całe przetwarzanie danych odbywa się lokalnie na Twoim urządzeniu
- Brak transmisji danych kontaktowych przez sieć
- Brak udostępniania danych stronom trzecim
- Minimalna kolekcja danych (tylko imię i pochodna wartość koloru)
- Dostęp do kontaktów tylko do odczytu

## Limit kontaktów (wersja bezpłatna)

Wersja bezpłatna pozwala na maksymalnie 10 kontaktów. Ten limit:
- Dotyczy tylko kontaktów przechowywanych w aplikacji
- Nie wpływa na listę kontaktów Twojego urządzenia
- Nie ogranicza Twojej zdolności do używania kontaktów w innych miejscach
- Może zostać ulepszona przez zakup PartnerCheck Pro dla nieograniczonej liczby kontaktów

## Często zadawane pytania

**P: Czy aplikacja uzyskuje dostęp do wszystkich moich kontaktów?**  
O: Nie. Aplikacja uzyskuje dostęp tylko do kontaktów, które wyraźnie wybierzesz za pomocą selektora kontaktów.

**P: Czy moje dane kontaktowe są wysyłane na serwery?**  
O: Nie. Wszystkie dane pozostają na Twoim urządzeniu. Żadne informacje kontaktowe nie są przesyłane przez internet.

**P: Czy aplikacja może modyfikować moje kontakty?**  
O: Nie. Aplikacja ma dostęp tylko do odczytu i nie modyfikuje, nie usuwa ani nie dodaje kontaktów do Twojej książki adresowej.

**P: Co się stanie, jeśli cofnę uprawnienie do kontaktów?**  
O: Nadal możesz używać aplikacji, dodając kontakty ręcznie. Funkcja selektora kontaktów będzie niedostępna, dopóki ponownie nie udzielisz uprawnienia.

**P: Jak używany jest mój numer telefonu?**  
O: Numer telefonu jest używany tylko do obliczenia kodu koloru. Rzeczywisty numer telefonu nigdy nie jest przechowywany - tylko wynikowa wartość koloru.

**P: Czy mogę używać aplikacji bez udzielenia uprawnienia do kontaktów?**  
O: Tak. Możesz dodawać kontakty ręcznie, wprowadzając imię i numer telefonu samodzielnie.

## Zobowiązanie do przejrzystości

Wierzymy w przejrzystość i prywatność użytkowników. Ta aplikacja:
- Żąda minimalnych uprawnień niezbędnych do funkcjonalności
- Przetwarza dane lokalnie na Twoim urządzeniu
- Nie zbiera, nie udostępnia ani nie sprzedaje Twoich danych
- Daje Ci pełną kontrolę nad tym, jakie dane są przechowywane

## Skontaktuj się z nami

Jeśli masz pytania dotyczące prywatności lub przetwarzania danych, skontaktuj się z nami za pomocą kanałów wsparcia aplikacji.

---

**Ostatnia aktualizacja:** 25.06.2026  
**Wersja aplikacji:** PartnerCheck  
**Platformy:** iOS, Android
