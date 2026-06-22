# Documentation sur la confidentialité et les autorisations de PartnerCheck

## Aperçu

PartnerCheck est une application de vérification de compatibilité qui vous aide à visualiser et comparer les contacts en utilisant un appariement basé sur les couleurs. Ce document explique pourquoi l'application demande l'accès à vos contacts et comment vos données sont traitées.

## Pourquoi nous demandons l'accès aux contacts

PartnerCheck demande un accès **en lecture seule** à vos contacts pour un seul objectif spécifique :

### Sélection de contacts uniquement

L'application utilise le sélecteur de contacts natif de votre appareil pour vous permettre de **sélectionner manuellement** les contacts que vous souhaitez ajouter à l'application. Nous n'accédons **PAS** automatiquement, ne lisons pas ou n'importons pas tous vos contacts. Vous avez un contrôle total sur les contacts qui sont ajoutés.

**Ce qui se passe lorsque vous accordez l'autorisation :**
- L'application ouvre le sélecteur de contacts standard de votre appareil
- Vous parcourez et sélectionnez vous-même des contacts individuels
- Seul le contact que vous choisissez explicitement est traité
- L'application n'accède jamais à vos contacts sans votre action directe

## Quelles données nous accédons

Lorsque vous sélectionnez un contact via le sélecteur, l'application accède à :

1. **Nom du contact** - Le nom d'affichage du contact sélectionné
2. **Numéro de téléphone** - Le premier numéro de téléphone associé au contact (s'il est disponible)

## Quelles données nous stockons

L'application stocke les données **uniquement localement sur votre appareil**. Nous stockons :

1. **Nom du contact** - Le nom que vous avez sélectionné
2. **Valeur de couleur** - Un code couleur numérique dérivé du numéro de téléphone

**Important :** Nous **NE** stockons **PAS** :
- Le numéro de téléphone réel
- Les adresses e-mail
- Les adresses
- Toute autre information de contact
- Les photos ou images

## Comment les numéros de téléphone sont utilisés

Le numéro de téléphone est utilisé **uniquement** pour générer une couleur unique pour l'affichage visuel :

1. L'application extrait les 6 derniers chiffres du numéro de téléphone
2. Ces chiffres sont convertis en code couleur hexadécimal
3. La couleur est utilisée pour afficher le contact dans l'application
4. **Le numéro de téléphone lui-même n'est jamais stocké** - uniquement la valeur de couleur résultante

Cela signifie :
- Chaque contact obtient une couleur unique et cohérente basée sur son numéro de téléphone
- La couleur aide à visualiser la compatibilité entre les contacts
- Le numéro de téléphone original est jeté après le calcul de la couleur

## Stockage des données et confidentialité

### Stockage local uniquement

Toutes les données sont stockées **exclusivement sur votre appareil** en utilisant le stockage local (SharedPreferences). Cela signifie :

- ✅ Vos données ne quittent jamais votre appareil
- ✅ Aucune donnée n'est envoyée aux serveurs ou à des tiers
- ✅ Aucune connexion Internet n'est requise pour les fonctionnalités principales
- ✅ Vous pouvez supprimer toutes les données en désinstallant l'application

### Conservation des données

- Les données persistent sur votre appareil jusqu'à ce que vous supprimiez manuellement les contacts ou désinstalliez l'application
- Vous pouvez supprimer des contacts individuels à tout moment via l'interface de l'application
- La désinstallation de l'application supprime toutes les données stockées

## Autorisations expliquées

### Autorisation READ_CONTACTS

**Pourquoi nécessaire :** Pour ouvrir le sélecteur de contacts natif afin que vous puissiez sélectionner des contacts à ajouter.

**Ce qu'elle permet :**
- Ouvrir l'interface du sélecteur de contacts du système
- Lire uniquement le contact que vous sélectionnez explicitement
- Lire le nom et le numéro de téléphone de ce contact sélectionné

**Ce qu'elle ne permet PAS :**
- Accéder automatiquement à tous les contacts
- Lire les contacts sans votre sélection
- Modifier ou supprimer des contacts dans votre carnet d'adresses
- Accéder à toute autre information de contact au-delà de ce que vous sélectionnez

**Type d'autorisation :** Lecture seule (nous demandons `readonly: true`)

### Autorisation WRITE_CONTACTS

**Note :** Bien que cette autorisation soit déclarée dans le manifeste Android pour la compatibilité avec la bibliothèque du sélecteur de contacts, **nous n'écrivons pas, ne modifions pas ou ne supprimons pas de contacts dans votre carnet d'adresses**. L'application lit uniquement le contact que vous sélectionnez et stocke une quantité minimale de données localement.

## Vos droits et contrôle

Vous avez un contrôle total sur vos données :

1. **Choisissez quels contacts ajouter** - Seuls les contacts que vous sélectionnez explicitement sont traités
2. **Supprimez les contacts à tout moment** - Supprimez n'importe quel contact de l'application à tout moment
3. **Révoquez l'autorisation** - Vous pouvez révoquer l'accès aux contacts dans les paramètres de votre appareil
4. **Option de saisie manuelle** - Vous pouvez ajouter des contacts manuellement sans utiliser le sélecteur de contacts
5. **Suppression complète des données** - La désinstallation de l'application supprime toutes les données stockées

## Sécurité et meilleures pratiques

- Tout le traitement des données se fait localement sur votre appareil
- Aucune transmission réseau des données de contact
- Aucun partage de données avec des tiers
- Collecte minimale de données (uniquement le nom et la valeur de couleur dérivée)
- Accès aux contacts en lecture seule

## Limite de contacts (version gratuite)

La version gratuite permet jusqu'à 10 contacts. Cette limite :
- S'applique uniquement aux contacts stockés dans l'application
- N'affecte pas la liste de contacts de votre appareil
- Ne limite pas votre capacité à utiliser vos contacts ailleurs
- Peut être améliorée en achetant PartnerCheck Pro pour des contacts illimités

## Questions fréquemment posées

**Q : L'application accède-t-elle à tous mes contacts ?**  
R : Non. L'application accède uniquement aux contacts que vous sélectionnez explicitement via le sélecteur de contacts.

**Q : Mes données de contact sont-elles envoyées aux serveurs ?**  
R : Non. Toutes les données restent sur votre appareil. Aucune information de contact n'est transmise via Internet.

**Q : L'application peut-elle modifier mes contacts ?**  
R : Non. L'application a un accès en lecture seule et ne modifie, ne supprime ni n'ajoute de contacts à votre carnet d'adresses.

**Q : Que se passe-t-il si je révoque l'autorisation de contact ?**  
R : Vous pouvez toujours utiliser l'application en ajoutant des contacts manuellement. La fonctionnalité du sélecteur de contacts sera indisponible jusqu'à ce que vous accordiez à nouveau l'autorisation.

**Q : Comment mon numéro de téléphone est-il utilisé ?**  
R : Le numéro de téléphone est utilisé uniquement pour calculer un code couleur. Le numéro de téléphone réel n'est jamais stocké - uniquement la valeur de couleur résultante.

**Q : Puis-je utiliser l'application sans accorder l'autorisation de contact ?**  
R : Oui. Vous pouvez ajouter des contacts manuellement en saisissant vous-même le nom et le numéro de téléphone.

## Engagement de transparence

Nous croyons en la transparence et la confidentialité des utilisateurs. Cette application :
- Demande les autorisations minimales nécessaires pour la fonctionnalité
- Traite les données localement sur votre appareil
- Ne collecte, ne partage ni ne vend pas vos données
- Vous donne un contrôle total sur les données stockées

## Contactez-nous

Si vous avez des questions sur la confidentialité ou le traitement des données, veuillez nous contacter via les canaux de support de l'application.

---

**Dernière mise à jour :** 25.06.2026  
**Version de l'application :** PartnerCheck  
**Plateformes :** iOS, Android
