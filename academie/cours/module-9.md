# Module 9 : Diagnostic des acceptations concurrentes

## La tâche à réaliser

Reproduire une course critique et expliquer la garantie SQL.

## Comprendre avant de coder

Le matching fonctionne souvent en développement, puis échoue lorsque deux requêtes arrivent au même instant. Un diagnostic utile conserve les conditions de reproduction, la cause, le correctif et la preuve de non-régression. Il distingue ce qui a été observé de ce qui est seulement supposé.

Lancez vingt-cinq candidats sur une même course. Comptez les réponses accepted:true, puis comparez le gagnant annoncé au chauffeur réellement enregistré. Une seule colonne driverId non nulle ne suffit pas : plusieurs requêtes pourraient avoir reçu une réussite avant que la dernière écriture remplace les autres. Une tentative tardive doit encore échouer après la course concurrente.

Les témoins mémoire servent à calibrer ce test, pas à prouver les transactions SQL. Exécutez aussi votre propre scénario avec plusieurs connexions ou processus sur PostgreSQL. Faites varier les délais, vérifiez le comportement d’un rollback et documentez la contrainte ou la clause conditionnelle qui protège l’invariant. Ne fabriquez pas une correction qui ajoute seulement un mutex dans un processus : deux instances du serveur auraient chacune leur mutex.

## Le piège à éviter

Un verrou JavaScript protège une instance, mais ne coordonne pas deux machines connectées à la même base.

## Un exemple sur un cas voisin

```javascript
const resultats=[{accepted:false},{accepted:true},{accepted:false}]
const gagnants=resultats.filter(r=>r.accepted)
if(gagnants.length!==1)throw new Error("Invariant violé")
console.log("Un seul gagnant")
```

## Construire et vérifier

1. Documenter une reproduction concurrente avec état initial précis.
2. Mesurer les réponses et l’affectation réellement persistée.
3. Identifier la lecture/écriture responsable et le correctif SQL.
4. Réexécuter vingt-cinq tentatives et une acceptation tardive.
5. Écrire un scénario avec connexions PostgreSQL indépendantes.
6. Rédiger docs/diagnostic-concurrence.md avec preuves et limites.

## Contrat de la remise

Réexportez createRide, acceptRide et getRide, puis diagnostic:{chemin}. Vingt-cinq tentatives produisent une seule réussite, dont driverId correspond à la course ACCEPTED persistée. Le rapport dépasse 650 caractères et nomme reproduction, concurrence, transaction, correctif et limite.

## Ce qui constitue la preuve

1. Les réponses et l’état stocké désignent un même gagnant.
2. Le refus tardif conserve l’affectation.
3. Le rapport explique cause, preuve SQL et limites.

## Avant de remettre

Exécutez npm run academie 9 et vos tests métier. Sélectionnez la cible 9, enregistrez et poussez le commit. Contrôlez academie/module-9 sur le SHA remis. Expliquez au mentor les choix et les limites de vos preuves; corrigez votre application, jamais les suites.
