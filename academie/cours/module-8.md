# Module 8 : Suivi de la course en temps réel

## La tâche à réaliser

Suivre la position et reprendre un état cohérent après une coupure.

## Comprendre avant de coder

Le canal temps réel transporte position et progression de la course. Son accès appartient uniquement au passager et au chauffeur concernés. Un utilisateur connecté à une autre course reste un tiers. Vérifiez ce droit à l’ouverture du canal et prévoyez une fermeture en cas de révocation, plutôt que de laisser une connexion vivre indéfiniment.

Chaque message possède une séquence. applyEvent ignore un numéro déjà appliqué ou ancien; un message plus récent met à jour l’état. rideSnapshot rend l’état courant au moment d’une reconnexion afin que le navigateur n’ait pas à rejouer toute l’histoire de la course. Une coupure doit produire un état de reconnexion visible au lieu de laisser un point figé sembler actuel.

Le harnais appelle la politique d’abonnement, le snapshot et le réducteur. Il ne crée pas une connexion WebSocket réelle. Montrez donc deux clients connectés, une coupure volontaire et une reprise au mentor. Les URL ne doivent pas contenir de jetons secrets; utilisez le mécanisme d’authentification du serveur et vérifiez les origines. Ne laissez aucune transaction SQL ouverte pendant toute la durée du canal.

## Le piège à éviter

Recevoir deux fois le même message ne doit ni déplacer la voiture deux fois ni revenir à une ancienne position.

## Un exemple sur un cas voisin

```javascript
let sequence=6
for(const evenement of [7,7,5,8]){if(evenement<=sequence)continue;sequence=evenement;console.log("Appliquer",sequence)}
```

## Construire et vérifier

1. Créer le canal WebSocket et vérifier l’identité à l’ouverture.
2. Limiter l’abonnement aux acteurs de la course.
3. Numéroter les messages et dédupliquer dans applyEvent.
4. Implémenter rideSnapshot pour la reconnexion.
5. Afficher connexion perdue, reprise et dernier instant reçu.
6. Démontrer une vraie coupure entre deux navigateurs.

## Contrat de la remise

Réexportez createRide et acceptRide. Exportez canSubscribe({rideId,viewerId}):Promise<boolean>, rideSnapshot(rideId):Promise<{status,driverPosition:{lat,lon}|null}> et applyEvent(state,event). Un événement DRIVER_MOVED porte lat,lon,seq; son rejeu conserve l’état.

## Ce qui constitue la preuve

1. Un tiers ne s’abonne pas à la course.
2. Le snapshot permet de reprendre l’affichage.
3. Un message dupliqué ne corrompt pas l’état.

## Avant de remettre

Exécutez npm run academie 8 et vos tests métier. Sélectionnez la cible 8, enregistrez et poussez le commit. Contrôlez academie/module-8 sur le SHA remis. Expliquez au mentor les choix et les limites de vos preuves; corrigez votre application, jamais les suites.
