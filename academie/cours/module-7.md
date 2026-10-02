# Module 7 : Matching et acceptation

## La tâche à réaliser

Proposer une course et garantir un seul chauffeur accepté.

## Comprendre avant de coder

Le passager demande une course; le serveur calcule des candidats vérifiés et disponibles. Une proposition n’est pas encore une affectation. Le premier chauffeur qui accepte gagne seulement si la course reste disponible au moment de l’écriture. Les autres reçoivent un refus cohérent et cessent d’afficher l’offre.

Le contrat createRide crée une course REQUESTED pour les scénarios, acceptRide tente une affectation et getRide lit le résultat. La fonction d’acceptation renvoie accepted:false pour une tentative tardive au lieu d’écraser le chauffeur déjà choisi. L’API transforme ce résultat en réponse lisible pour l’interface.

Une lecture suivie d’une écriture sans condition laisse deux candidats accepter. Protégez la décision avec une mise à jour conditionnelle, une contrainte ou un verrou dans une transaction courte. Vérifiez les droits avant cette transaction et évitez tout appel réseau pendant qu’elle reste ouverte. Promise.all lance plusieurs tentatives dans un processus; ce test ne prouve pas la concurrence de deux serveurs. Préparez déjà un scénario SQL avec connexions séparées, qui sera approfondi au module 9.

## Le piège à éviter

La dernière écriture peut masquer une double réussite : le chauffeur stocké semble unique alors que deux personnes ont reçu accepted:true.

## Un exemple sur un cas voisin

```javascript
let placeLibre=true
function reserver(){if(!placeLibre)return false;placeLibre=false;return true}
console.log([reserver(),reserver()])
```

## Construire et vérifier

1. Créer la demande côté serveur et contrôler le rôle passager.
2. Sélectionner les chauffeurs autorisés du module 5.
3. Implémenter une acceptation conditionnelle atomique.
4. Conserver l’identifiant du chauffeur gagnant.
5. Refuser les tentatives tardives sans changer l’affectation.
6. Relier offre, réponse et état de course aux deux interfaces.

## Contrat de la remise

Exportez createRide({passengerId,fareCents}):Promise<string>, acceptRide({rideId,driverId}):Promise<{accepted:boolean}> et getRide(rideId):Promise<{status,driverId:string|null}>. Cinq acceptations simultanées produisent exactement un gagnant.

## Ce qui constitue la preuve

1. Un seul chauffeur reçoit une acceptation.
2. La lecture montre le gagnant annoncé.
3. Une acceptation tardive ne remplace pas le gagnant.

## Avant de remettre

Exécutez npm run academie 7 et vos tests métier. Sélectionnez la cible 7, enregistrez et poussez le commit. Contrôlez academie/module-7 sur le SHA remis. Expliquez au mentor les choix et les limites de vos preuves; corrigez votre application, jamais les suites.
