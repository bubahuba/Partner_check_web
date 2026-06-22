# PartnerCheck adatvédelmi és engedélyezési dokumentáció

## Áttekintés

A PartnerCheck egy kompatibilitás-ellenőrző alkalmazás, amely segít vizualizálni és összehasonlítani a kapcsolatokat színalapú párosítással. Ez a dokumentum elmagyarázza, miért kéri az alkalmazás hozzáférést a kapcsolataihoz, és hogyan kezeli az adatait.

## Miért kérünk hozzáférést a kapcsolatokhoz

A PartnerCheck **csak olvasási** hozzáférést kér a kapcsolataihoz egyetlen konkrét célból:

### Csak kapcsolat kiválasztás

Az alkalmazás az eszköz natív kapcsolatválasztóját használja, hogy **manuálisan kiválaszthassa** azokat a kapcsolatokat, amelyeket hozzá szeretne adni az alkalmazáshoz. **NEM** férünk hozzá automatikusan, nem olvassuk el és nem importáljuk az összes kapcsolatát. Ön teljes mértékben ellenőrzi, mely kapcsolatok kerülnek hozzáadásra.

**Mi történik, ha megadja az engedélyt:**
- Az alkalmazás megnyitja az eszköz szabványos kapcsolatválasztóját
- Ön maga böngészi és választja ki az egyes kapcsolatokat
- Csak az Ön által kifejezetten kiválasztott kapcsolat kerül feldolgozásra
- Az alkalmazás soha nem fér hozzá a kapcsolataihoz az Ön közvetlen művelete nélkül

## Milyen adatokhoz férünk hozzá

Amikor kapcsolatot választ a választón keresztül, az alkalmazás hozzáfér:

1. **Kapcsolat neve** - A kiválasztott kapcsolat megjelenített neve
2. **Telefonszám** - A kapcsolathoz tartozó első telefonszám (ha elérhető)

## Milyen adatokat tárolunk

Az alkalmazás az adatokat **csak helyileg az eszközén** tárolja. Tároljuk:

1. **Kapcsolat neve** - Az Ön által kiválasztott név
2. **Színérték** - A telefonszámból származtatott numerikus színkód

**Fontos:** **NEM** tároljuk:
- A tényleges telefonszámot
- E-mail címeket
- Címeket
- Bármilyen más kapcsolati információt
- Fényképeket vagy képeket

## Hogyan használjuk a telefonszámokat

A telefonszámot **csak** egyedi szín generálására használjuk vizuális megjelenítéshez:

1. Az alkalmazás kinyeri a telefonszám utolsó 6 számjegyét
2. Ezek a számjegyek hexadecimális színkóddá alakulnak
3. A szín a kapcsolat megjelenítésére szolgál az alkalmazásban
4. **Magát a telefonszámot soha nem tároljuk** - csak a kapott színértéket

Ez azt jelenti:
- Minden kapcsolat egyedi, konzisztens színt kap a telefonszáma alapján
- A szín segít vizualizálni a kompatibilitást a kapcsolatok között
- Az eredeti telefonszám a szín számítása után eldobásra kerül

## Adattárolás és adatvédelem

### Csak helyi tárolás

Minden adat **kizárólag az eszközén** tárolódik helyi tároló (SharedPreferences) segítségével. Ez azt jelenti:

- ✅ Az adatai soha nem hagyják el az eszközét
- ✅ Semmilyen adat nem kerül szerverekre vagy harmadik felekhez
- ✅ Az alapfunkciókhoz nincs szükség internetkapcsolatra
- ✅ Minden adatot törölhet az alkalmazás eltávolításával

### Adatmegőrzés

- Az adatok az eszközén maradnak, amíg manuálisan nem törli a kapcsolatokat vagy nem távolítja el az alkalmazást
- Egyes kapcsolatokat bármikor törölhet az alkalmazás felületén keresztül
- Az alkalmazás eltávolítása törli az összes tárolt adatot

## Engedélyek magyarázata

### READ_CONTACTS engedély

**Miért szükséges:** A natív kapcsolatválasztó megnyitásához, hogy kiválaszthassa a hozzáadni kívánt kapcsolatokat.

**Mit engedélyez:**
- A rendszer kapcsolatválasztó felületének megnyitása
- Csak az Ön által kifejezetten kiválasztott kapcsolat olvasása
- A kiválasztott kapcsolat nevének és telefonszámának olvasása

**Mit NEM engedélyez:**
- Automatikus hozzáférés az összes kapcsolathoz
- Kapcsolatok olvasása az Ön kiválasztása nélkül
- Kapcsolatok módosítása vagy törlése a címjegyzékében
- Bármilyen más kapcsolati információ elérése az Ön kiválasztásán túl

**Engedély típusa:** Csak olvasás ( `readonly: true` kérünk)

### WRITE_CONTACTS engedély

**Megjegyzés:** Bár ez az engedély deklarálva van az Android manifestben a kapcsolatválasztó könyvtárral való kompatibilitás érdekében, **nem írunk, nem módosítunk és nem törlünk kapcsolatokat a címjegyzékében**. Az alkalmazás csak az Ön által kiválasztott kapcsolatot olvassa el, és minimális adatot tárol helyileg.

## Az Ön jogai és ellenőrzése

Teljes ellenőrzése van az adatai felett:

1. **Válassza ki, mely kapcsolatokat adja hozzá** - Csak az Ön által kifejezetten kiválasztott kapcsolatok kerülnek feldolgozásra
2. **Törölhet kapcsolatokat bármikor** - Bármely kapcsolatot eltávolíthat az alkalmazásból
3. **Visszavonhatja az engedélyt** - A kapcsolatok elérését visszavonhatja az eszköz beállításaiban
4. **Manuális beviteli lehetőség** - Kapcsolatokat manuálisan is hozzáadhat a kapcsolatválasztó használata nélkül
5. **Teljes adateltávolítás** - Az alkalmazás eltávolítása törli az összes tárolt adatot

## Biztonság és ajánlott eljárások

- Minden adatfeldolgozás helyileg az eszközén történik
- Nincs hálózati továbbítás kapcsolati adatoknak
- Nincs adatmegosztás harmadik felekkel
- Minimális adatgyűjtés (csak név és származtatott színérték)
- Csak olvasási hozzáférés a kapcsolatokhoz

## Kapcsolati limit (ingyenes verzió)

Az ingyenes verzió legfeljebb 10 kapcsolatot engedélyez. Ez a limit:
- Csak az alkalmazásban tárolt kapcsolatokra vonatkozik
- Nem befolyásolja az eszköz kapcsolatlistáját
- Nem korlátozza a kapcsolatok máshol történő használatát
- PartnerCheck Pro vásárlásával korlátlan kapcsolatra frissíthető

## Gyakran ismételt kérdések

**K: Az alkalmazás hozzáfér az összes kapcsolatomhoz?**  
V: Nem. Az alkalmazás csak azokhoz a kapcsolatokhoz fér hozzá, amelyeket kifejezetten kiválaszt a kapcsolatválasztón keresztül.

**K: A kapcsolati adataim szerverekre kerülnek?**  
V: Nem. Minden adat az eszközén marad. Semmilyen kapcsolati információ nem kerül továbbításra az interneten.

**K: Módosíthatja az alkalmazás a kapcsolataimat?**  
V: Nem. Az alkalmazás csak olvasási hozzáféréssel rendelkezik, és nem módosít, nem töröl és nem ad hozzá kapcsolatokat a címjegyzékéhez.

**K: Mi történik, ha visszavonom a kapcsolatengedélyt?**  
V: Továbbra is használhatja az alkalmazást manuális kapcsolathozzáadással. A kapcsolatválasztó funkció nem lesz elérhető, amíg újra meg nem adja az engedélyt.

**K: Hogyan használják a telefonszámomat?**  
V: A telefonszámot csak színkód számítására használjuk. A tényleges telefonszámot soha nem tároljuk - csak a kapott színértéket.

**K: Használhatom az alkalmazást kapcsolatengedély megadása nélkül?**  
V: Igen. Kapcsolatokat manuálisan adhat hozzá a név és telefonszám megadásával.

## Átláthatósági elkötelezettség

Hiszünk az átláthatóságban és a felhasználói adatvédelemben. Ez az alkalmazás:
- Minimális, a működéshez szükséges engedélyeket kér
- Adatokat helyileg az eszközén dolgoz fel
- Nem gyűjt, oszt meg vagy ad el adatokat
- Teljes ellenőrzést biztosít a tárolt adatok felett

## Kapcsolat

Ha kérdése van az adatvédelemmel vagy adatkezeléssel kapcsolatban, lépjen kapcsolatba velünk az alkalmazás támogatási csatornáin keresztül.

---

**Utolsó frissítés:** 25.06.2026  
**Alkalmazás verzió:** PartnerCheck  
**Platformok:** iOS, Android
