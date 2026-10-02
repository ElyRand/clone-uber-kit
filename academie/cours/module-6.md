# Module 6 : Estimation et tarification

## La tâche à réaliser

Produire un prix compréhensible et conserver le tarif utilisé.

## Comprendre avant de coder

Une estimation combine distance, durée, base et minimum de course. La forte demande peut appliquer un multiplicateur explicite. Gardez les unités dans les noms : distanceMeters, durationSeconds et amountCents évitent de multiplier des kilomètres par un prix au mètre sans s’en apercevoir.

La monnaie est représentée dans son unité mineure, avec une devise ISO à trois lettres. Un calcul intermédiaire peut être fractionnaire, mais la sortie monétaire est arrondie une seule fois selon une règle documentée et reste un entier sûr. Conservez tariffVersion pour expliquer un montant contesté lorsque vos paramètres auront changé.

Le navigateur affiche l’estimation, mais le serveur fait autorité sur le montant. Une estimation n’est pas encore le reçu final : le trajet réel et la durée réelle peuvent modifier le bilan. Décrivez l’écart permis au passager et les données conservées. Les suites vérifient des propriétés plutôt qu’un tarif commercial précis : le montant est positif, croît avec durée et distance, et augmente avec le multiplicateur. Choisissez votre propre barème et fournissez des exemples chiffrés.

## Le piège à éviter

Un tarif sans version devient impossible à expliquer après une modification des prix.

## Un exemple sur un cas voisin

```javascript
const prixUnitaire=125
const quantite=3
const montant=prixUnitaire*quantite
if(!Number.isSafeInteger(montant))throw new Error("Montant trop grand")
console.log(montant)
```

## Construire et vérifier

1. Choisir base, minimum, coût de distance et coût de durée.
2. Documenter unités, devise et règle d’arrondi.
3. Valider entrées non négatives et valeurs finies.
4. Calculer le montant côté serveur et conserver la version du tarif.
5. Afficher estimation et règle d’écart avec le montant final.
6. Tester trajets courts, longs et forte demande.

## Contrat de la remise

Exportez estimateFare({distanceMeters,durationSeconds,demandMultiplier?}):{amountCents,currency,tariffVersion}. Le montant est entier, positif, sensible à distance/durée et majoré pour une demande forte; un minimum s’applique aux trajets courts.

## Ce qui constitue la preuve

1. Le prix et la devise sont explicites.
2. Le tarif appliqué possède une version.
3. Les variations de distance, durée et demande sont testées.

## Avant de remettre

Exécutez npm run academie 6 et vos tests métier. Sélectionnez la cible 6, enregistrez et poussez le commit. Contrôlez academie/module-6 sur le SHA remis. Expliquez au mentor les choix et les limites de vos preuves; corrigez votre application, jamais les suites.
