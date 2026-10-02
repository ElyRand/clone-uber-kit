# Votre API

API Hono dans src/, frontend React dans web/. L’adaptateur réexporte votre
code sous les noms du contrat, sans imposer les noms de vos classes ou tables.

| Module | Exports attendus |
| --- | --- |
| 1 | `miseEnRoute, specification` |
| 2 | `Ride, schema` |
| 3 | `maquettes` |
| 4 | `Driver, hashPassword` |
| 5 | `recordPosition, findNearbyDrivers` |
| 6 | `estimateFare` |
| 7 | `createRide, acceptRide, getRide` |
| 8 | `createRide, acceptRide, canSubscribe, rideSnapshot, applyEvent` |
| 9 | `createRide, acceptRide, getRide, diagnostic` |
| 10 | `captureFare, listCharges, verifyWebhookSignature` |
| 11 | `testsEtudiant` |
| 12 | `Aucun adaptateur : secrets de démonstration` |

Les signatures complètes sont dans chaque leçon et en tête des suites.
Le module 2 déclare schema.migrationsDir, tables et moneyColumns. Les migrations
utilisent vos noms; réexportez votre classe Course sous le nom Ride.
Lancez npm run academie N puis sélectionnez le module cible avant de pousser.
