# Module 12 : Déploiement et preuve HTTP

## La tâche à réaliser

Mettre API, interface et base en ligne et vérifier des requêtes protégées.

## Comprendre avant de coder

Le dernier module appelle votre URL publique. Déployez l’API et le frontend à partir de leurs Dockerfiles, provisionnez PostgreSQL avec PostGIS et appliquez les migrations avant de démarrer. Le build web reçoit seulement VITE_API_URL. Les clés de session, de base et de paiement restent dans le serveur, hors de Git.

Le workflow utilise DEPLOYMENT_URL en HTTPS et deux jetons de démonstration distincts : DEPLOYMENT_PASSENGER_TOKEN et DEPLOYMENT_DRIVER_TOKEN. Préparez un environnement avec données fictives; les tests créent des profils et des demandes de course. Un compte passager permet ces actions. Une demande anonyme et une demande portée par le chauffeur doivent être refusées. L’identité du passager est déduite du jeton, pas d’un champ libre du corps.

Les routes attendues sont GET /health, POST /passengers et POST /rides. La première répond sans auth et les mutations sont protégées. La suite ne joue pas toute la course : démontrez également acceptation, WebSocket, clôture et paiement de test au mentor. Vérifiez les origines autorisées entre interface et API, le redémarrage des services et la présence de journaux sans secrets. Une machine en ligne sans migrations appliquées n’est pas un déploiement fonctionnel.

## Le piège à éviter

Compiler une clé privée dans le frontend la rend accessible à chaque visiteur.

## Un exemple sur un cas voisin

```javascript
const origine=new URL("https://demo.invalid")
console.log(origine.protocol==="https:",origine.origin)
```

## Construire et vérifier

1. Déployer une base PostgreSQL/PostGIS et appliquer les migrations.
2. Déployer API et frontend avec HTTPS et origines autorisées.
3. Configurer les secrets serveur sans les exposer au build web.
4. Créer comptes passager/chauffeur et données fictives de démonstration.
5. Configurer les trois secrets GitHub et exécuter les suites jusqu’à 12.
6. Montrer la course complète, la reprise et le paiement de test au mentor.

## Contrat de la remise

Aucun adaptateur de source. Secrets : DEPLOYMENT_URL, DEPLOYMENT_PASSENGER_TOKEN, DEPLOYMENT_DRIVER_TOKEN. GET /health répond; POST /passengers {email,name} et POST /rides {pickup:{lat,lon},dropoff:{lat,lon}} répondent 200/201 au passager, id ou rideId pour la course. Une demande mal formée renvoie 4xx; une demande anonyme ou chauffeur reçoit 401/403.

## Ce qui constitue la preuve

1. La santé et les requêtes publiques fonctionnent en HTTPS.
2. Les mutations vérifient l’identité et le rôle.
3. La démonstration montre frontend, course complète et mode test.

## Avant de remettre

Exécutez npm run academie 12 et vos tests métier. Sélectionnez la cible 12, enregistrez et poussez le commit. Contrôlez academie/module-12 sur le SHA remis. Expliquez au mentor les choix et les limites de vos preuves; corrigez votre application, jamais les suites.
