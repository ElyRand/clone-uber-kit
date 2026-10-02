# Kit de départ — Clone Uber en 12 modules

API Hono, frontend React/Vite/Tailwind/shadcn, adaptateurs par module et décisions
versionnées. Le kit ne contient pas les solutions : vous construisez le VTC.

## Démarrage

Node 24, Git, PostgreSQL et PostGIS. Exécutez npm ci à la racine et dans web/.
Lancez npm run dev dans chaque application (API 3000, frontend 5173).
Les douze leçons sont dans academie/cours/ et les exports dans src/README.md.

## Deux familles de vérifications

kit-ci vérifie les types, le build web et /health sur le kit neuf. Il ne valide
aucun exercice. academie/module-cible.txt contient 0 au départ : aucun module
n’est demandé. Après travail et npm run academie 1, écrivez 1 dans ce fichier,
enregistrez et poussez le commit. La cible 3 crée les checks 1 à 3, chacun
cumulatif. Les modules futurs restent absents; un check absent ne valide rien
sur le portail. La cible est éditable; les suites, le lanceur et le workflow
restent protégés par empreinte. Corrigez votre code plutôt que ces fichiers.

## Programme

1. Mise en route et cadrage
2. Architecture et modèle du domaine
3. Design et maquettes
4. Authentification et profils vérifiés
5. Géolocalisation et recherche de proximité
6. Estimation et tarification
7. Matching et acceptation
8. Suivi de la course en temps réel
9. Diagnostic des acceptations concurrentes
10. Paiement et clôture
11. Tests de l’étudiant
12. Déploiement et preuve HTTP

## Passage de huit à douze étapes

La v4 reprend tous les scénarios existants avec cette correspondance :
1→2 (domaine), 2→4 (profils), 3→5 (géographie), 4→6 (prix), 5→7 (matching),
6→8 (temps réel), 7→10 (paiement), 8→12 (déploiement). Les étapes 1, 3, 9 et 11
sont nouvelles. Le modèle v4 est prévu sous ElyRand; le modèle précédent de
Phanuel reste distinct. Les espaces déjà créés dans l’Académie conservent leurs
modules et leurs empreintes : ce kit s’adresse aux nouveaux espaces en v4.
Ne remplacez pas les fichiers d’un projet à huit modules sans plan de migration.

## Déploiement et limites des preuves

Les Dockerfiles sont des points de départ. Déployez PostgreSQL/PostGIS et
appliquez les migrations; configurez VITE_API_URL au build web, sans secret privé.
La CI pédagogique fournit PostgreSQL 18 avec PostGIS 3.6, via le
[modèle officiel PostGIS](https://github.com/postgis/docker-postgis).
Le module 12 utilise DEPLOYMENT_URL HTTPS, DEPLOYMENT_PASSENGER_TOKEN et
DEPLOYMENT_DRIVER_TOKEN, avec comptes fictifs et droits limités. Il crée des
profils/demandes de démonstration et refuse anonymes ou demandes de chauffeur.
N’exécutez pas cette suite sur un environnement contenant des données réelles.
Stripe reste en mode test. Le mentor examine contraintes SQL, connexions
concurrentes, sécurité des sessions, transport WebSocket, signatures valides
et qualité des écrans; les suites de conformité ne prouvent pas tout cela.
