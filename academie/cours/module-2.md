# Module 2 : Architecture et modèle du domaine

## La tâche à réaliser

Modéliser passager, chauffeur, véhicule et course avant les écrans interactifs.

## Comprendre avant de coder

La course est une machine à états. Elle naît REQUESTED, passe par OFFERED et ACCEPTED, puis ARRIVED, IN_PROGRESS et COMPLETED. CANCELLED referme un parcours abandonné. Centralisez les transitions dans une seule règle métier; les routes HTTP ne doivent pas reproduire leur propre liste de passages autorisés. Un montant conserve sa devise et une valeur entière dans l’unité mineure : CAD possède des centimes, MGA utilise des ariary entiers.

Une migration décrit tables, clés primaires, références et colonnes obligatoires. Les noms restent vos choix : schema indique au harnais où lire la migration et quelles tables correspondent aux rôles métier. Les tests SQL lisent le texte de vos migrations. Ils ne les exécutent pas et ne prouvent pas que chaque contrainte est au bon endroit : appliquez réellement les migrations sur PostgreSQL.

Séparez routes, logique métier et stockage. Ride est l’interface attendue pour tester le cycle de vie, mais votre classe peut s’appeler Course et être réexportée par l’adaptateur. Consignez les frontières et les contraintes; elles serviront au matching et au paiement. Ne stockez aucune donnée bancaire ni pièce personnelle dans un exemple de migration.

## Le piège à éviter

Dupliquer les transitions dans les routes permet à une annulation HTTP et à un worker de suivre deux règles différentes.

## Un exemple sur un cas voisin

```javascript
const passages={BROUILLON:["PUBLIE"],PUBLIE:[]}
function peutPasser(de,vers){return passages[de]?.includes(vers)??false}
console.log(peutPasser("PUBLIE","BROUILLON"))
```

## Construire et vérifier

1. Dessiner les quatre objets métier et leurs relations.
2. Écrire une migration PostgreSQL et l’appliquer localement.
3. Installer le client SQL choisi et versionner ses dépendances.
4. Centraliser les états et les transitions d’une course.
5. Stocker montants et devise sans flottants.
6. Exporter Ride et schema puis tester chemin nominal et transitions interdites.

## Contrat de la remise

Exportez Ride avec request({passengerId,fareCents,currency}), status, fareCents et transitionTo(next). Exportez schema: {migrationsDir,tables:{passenger,driver,vehicle,ride},moneyColumns:string[]}. Les signatures complètes sont en tête des deux suites du module 2.

## Ce qui constitue la preuve

1. La migration décrit les quatre tables et leurs relations.
2. Les transitions interdites échouent.
3. La devise et les montants entiers sont conservés.

## Avant de remettre

Exécutez npm run academie 2 et vos tests métier. Sélectionnez la cible 2, enregistrez et poussez le commit. Contrôlez academie/module-2 sur le SHA remis. Expliquez au mentor les choix et les limites de vos preuves; corrigez votre application, jamais les suites.
