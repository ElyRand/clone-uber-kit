# Module 11 : Tests de l’étudiant

## La tâche à réaliser

Écrire vos propres tests du VTC et démontrer ce qu’ils détectent.

## Comprendre avant de coder

Les suites de l’Académie contrôlent un contrat stable. Elles ne connaissent pas toutes vos routes, votre schema SQL ou vos choix de session. Vos tests complètent ces contrôles et continueront de protéger votre application après le parcours.

Couvrez cycle de vie, autorisations, acceptations concurrentes et paiement. Testez une transition interdite, un passager appelant une route chauffeur, un chauffeur non vérifié, deux acceptations et un débit rejoué. Après un refus, vérifiez également que la base et le journal sont restés inchangés. Une mutation volontaire de la règle de concurrence ou du contrôle de rôle doit rendre au moins un test rouge.

Le module vérifie présence de fichiers, au moins six tests nommés, thèmes annoncés et exécution réussie. Ces critères ne prouvent pas la qualité des assertions : un test nommé paiement qui compare 1 à 1 reste inutile. Le mentor lit donc les assertions et voit les mutations détectées. Pour les garanties de base, utilisez PostgreSQL/PostGIS réel avec des connexions séparées. Ne placez pas vos tests dans academie/, qui appartient au harnais, et ne réexportez pas ses suites comme votre propre travail.

## Le piège à éviter

Un nom de test convaincant ne remplace pas une assertion sur le comportement annoncé.

## Un exemple sur un cas voisin

```javascript
function autorise(role){return role==="CHAUFFEUR"}
if(autorise("PASSAGER"))throw new Error("Régression de droits")
console.log("Le passager reste refusé")
```

## Construire et vérifier

1. Créer vos tests métier et HTTP hors du harnais.
2. Écrire au moins six scénarios avec assertions pertinentes.
3. Couvrir cycle, concurrence, paiement et autorisations.
4. Ajouter une vraie preuve PostgreSQL avec deux connexions.
5. Montrer une modification incorrecte détectée par vos tests.
6. Déclarer les fichiers dans src/academie/module-11.ts et les exécuter.

## Contrat de la remise

Exportez testsEtudiant:{fichiers:string[]}. Les fichiers restent dans le dépôt hors academie/, contiennent au moins six it/test avec expect et des noms parlant du cycle, de la concurrence, du paiement et des autorisations. Leur exécution via Vitest doit réussir.

## Ce qui constitue la preuve

1. Les fichiers et les six scénarios existent.
2. Les thèmes critiques ont des assertions pertinentes.
3. Les tests s’exécutent et détectent une régression.

## Avant de remettre

Exécutez npm run academie 11 et vos tests métier. Sélectionnez la cible 11, enregistrez et poussez le commit. Contrôlez academie/module-11 sur le SHA remis. Expliquez au mentor les choix et les limites de vos preuves; corrigez votre application, jamais les suites.
