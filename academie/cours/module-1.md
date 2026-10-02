# Module 1 : Mise en route et cadrage

## La tâche à réaliser

Préparer le dépôt, démarrer les deux applications et cadrer un service de VTC.

## Comprendre avant de coder

L’API se trouve dans src/ et l’interface dans web/. Chacune possède son installation npm ci. La première répond aux requêtes HTTP; la seconde affiche les écrans. Un commit est un état enregistré du dépôt; le push transmet cet état à GitHub. L’Académie lit une vérification sur le SHA remis, ce qui empêche de confondre une ancienne réussite avec le travail actuel.

Décrivez un trajet réel mais fictif pour la démonstration : un passager demande une voiture, un chauffeur reçoit l’offre, les deux suivent la course puis consultent son reçu. Délimitez le produit : ville, devise, rôles, vérification du chauffeur, annulation et paiement de test. Les positions et pièces utilisées dans vos scénarios sont synthétiques.

Le kit possède deux workflows. kit-ci vérifie installation, types, build web et santé API; cela ne valide aucun exercice. academie lit module-cible.txt : 0 au départ, puis le numéro travaillé entre 1 et 12. La cible 3 produit les checks 1 à 3, tous cumulatifs. Un check absent ne signifie pas un module réussi. Le kit ne contient pas les solutions métier.

## Le piège à éviter

Une URL /health qui répond prouve le démarrage, pas une application VTC complète.

## Un exemple sur un cas voisin

```javascript
console.log("Prêt à travailler",process.version)
```

## Construire et vérifier

1. Installer Node 24, Git et un éditeur; relever leurs versions.
2. Créer le dépôt depuis le modèle et installer API et frontend séparément.
3. Démarrer les applications et vérifier /health et la page React.
4. Remplir src/academie/module-1.ts et docs/specification.md avec votre cadrage.
5. Exécuter npm run academie 1 puis sélectionner la cible 1.
6. Pousser le commit, vérifier le check sur son SHA et relier le dépôt au portail.

## Contrat de la remise

Exportez miseEnRoute: {prenom,editeur,versionNode} et specification: {chemin}. Décrivez problème, utilisateurs, fonctionnalités, course, chauffeur, passager, position, tarification, matching, paiement et déploiement avec au moins 800 caractères de contenu.

## Ce qui constitue la preuve

1. La fiche est renseignée et Node est récent.
2. Le cadrage nomme les tâches des deux utilisateurs.
3. La différence entre CI technique et validation est expliquée.

## Avant de remettre

Exécutez npm run academie 1 et vos tests métier. Sélectionnez la cible 1, enregistrez et poussez le commit. Contrôlez academie/module-1 sur le SHA remis. Expliquez au mentor les choix et les limites de vos preuves; corrigez votre application, jamais les suites.
