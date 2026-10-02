# Module 5 : Géolocalisation et recherche de proximité

## La tâche à réaliser

Enregistrer les positions et retrouver les chauffeurs proches sans lire toute la base.

## Comprendre avant de coder

Une position associe chauffeur, latitude, longitude et instant de mesure. L’ordre longitude/latitude compte lors de la construction d’un point SQL; inversez-les et votre voiture se retrouve sur un autre continent. Validez les limites géographiques et les dates avant d’enregistrer la mesure. Une position récente est plus utile qu’un point proche envoyé vingt minutes auparavant.

PostGIS permet de filtrer un rayon et de classer les candidats. Utilisez une colonne geography pour des distances en mètres et un index spatial adapté. Appliquez disponibilité et vérification du chauffeur avant de proposer une course; une position seule ne donne aucun droit d’acceptation. Les tests de ce module ciblent distance, rayon, tri et fraîcheur, tandis que les droits restent à couvrir dans vos tests de routes.

recordPosition et findNearbyDrivers exposent une interface de requête asynchrone. Une formule de distance en mémoire peut calibrer les exemples, mais seule une requête exécutée sur PostgreSQL/PostGIS avec un plan analysé prouve l’usage de l’index. Conservez cette preuve et utilisez exclusivement des positions fictives. Évitez de publier l’historique de déplacements de tous les chauffeurs dans le navigateur du passager.

## Le piège à éviter

Trier après avoir retenu quelques lignes peut exclure le chauffeur réellement le plus proche.

## Un exemple sur un cas voisin

```javascript
const maintenant=Date.parse("2030-01-01T12:00:00Z")
const mesures=[{id:"a",at:maintenant-30000},{id:"b",at:maintenant-1200000}]
console.log(mesures.filter(m=>maintenant-m.at<=120000))
```

## Construire et vérifier

1. Installer PostGIS et créer une migration de positions.
2. Enregistrer la mesure avec son instant et valider les coordonnées.
3. Créer un index spatial puis une recherche par rayon.
4. Exclure les positions de plus de deux minutes.
5. Trier par distance et afficher seulement les candidats autorisés.
6. Analyser une vraie requête SQL et exporter les deux fonctions.

## Contrat de la remise

Exportez recordPosition({driverId,lat,lon,at:Date}):Promise<void> et findNearbyDrivers({lat,lon,radiusKm,now:Date}):Promise<{driverId,distanceKm}[]>. Les résultats sont classés par distance, dans le rayon et avec une position de moins de deux minutes.

## Ce qui constitue la preuve

1. Le chauffeur le plus proche apparaît avant les autres.
2. Hors rayon et positions périmées sont exclus.
3. L’index PostGIS réel est montré au mentor.

## Avant de remettre

Exécutez npm run academie 5 et vos tests métier. Sélectionnez la cible 5, enregistrez et poussez le commit. Contrôlez academie/module-5 sur le SHA remis. Expliquez au mentor les choix et les limites de vos preuves; corrigez votre application, jamais les suites.
