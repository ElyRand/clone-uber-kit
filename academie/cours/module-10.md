# Module 10 : Paiement et clôture

## La tâche à réaliser

Capturer le montant final sans second débit et produire un reçu.

## Comprendre avant de coder

Un appel réseau qui échoue peut avoir produit son effet avant la coupure. Rejouer une capture doit retrouver le même chargeId plutôt que débiter à nouveau. La clé d’idempotence est liée au contenu de la commande, au compte autorisé et à la course. Conservez la référence du paiement et un état qui permette une reprise sûre.

L’autorisation puis la capture peuvent intervenir à deux moments. Le reçu explique estimation, tarif et montant final. Définissez la politique d’annulation avant de l’implémenter; le parcours ne vous impose pas de vrais frais commerciaux. Les exercices utilisent exclusivement Stripe en mode test, aucune carte réelle ni collecte de numéro de carte dans votre API.

Un webhook est une requête externe, pas une preuve de paiement par sa seule présence. Vérifiez la signature sur le corps brut, sa date et la clé de test, puis dédupliquez l’identifiant d’événement avant d’appliquer la transition. Le harnais vérifie rejeu, concurrence, montant et rejet d’une signature inventée; cela ne prouve pas l’acceptation d’un webhook valide ou le rejet d’un événement périmé. Vos propres tests et le mentor doivent contrôler ces cas et l’absence de secrets dans les journaux.

## Le piège à éviter

Traiter une panne réseau comme une absence certaine de débit conduit à encaisser deux fois.

## Un exemple sur un cas voisin

```javascript
const captures=new Map()
function capturer(cle){if(captures.has(cle))return captures.get(cle);const id="charge-demo";captures.set(cle,id);return id}
console.log(capturer("une-cle"),capturer("une-cle"))
```

## Construire et vérifier

1. Configurer uniquement le mode test du prestataire.
2. Conserver estimation, montant final et version de tarif.
3. Implémenter capture et lecture des débits par course.
4. Associer clé d’idempotence et contenu sans répétition d’effet.
5. Vérifier le corps brut signé et dédupliquer les webhooks.
6. Tester erreur, rejeu, concurrence, signature valide/invalide et reçu.

## Contrat de la remise

Exportez captureFare({rideId,amountCents,idempotencyKey}):Promise<{captured:boolean,chargeId:string}>, listCharges(rideId):Promise<{chargeId,amountCents}[]> et verifyWebhookSignature(payload,signature):boolean. Une capture rejouée ou concurrente produit un seul débit; une signature inventée est refusée.

## Ce qui constitue la preuve

1. Le rejeu et la concurrence ne répètent pas le débit.
2. Le montant capturé est celui attendu.
3. Les webhooks et le reçu ont des preuves supplémentaires.

## Avant de remettre

Exécutez npm run academie 10 et vos tests métier. Sélectionnez la cible 10, enregistrez et poussez le commit. Contrôlez academie/module-10 sur le SHA remis. Expliquez au mentor les choix et les limites de vos preuves; corrigez votre application, jamais les suites.
