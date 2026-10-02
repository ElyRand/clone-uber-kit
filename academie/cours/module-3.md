# Module 3 : Design et maquettes

## La tâche à réaliser

Dessiner demande, suivi, espace chauffeur et reçu avant de coder leurs interactions.

## Comprendre avant de coder

Un écran correspond à une tâche. Le passager choisit départ et destination, voit une estimation, confirme, suit son chauffeur puis reçoit un bilan. Le chauffeur voit une offre, accepte, signale son arrivée et suit les étapes de la course. La connexion reste un écran distinct; le reçu explique estimation et montant final.

La carte est un support, pas l’unique moyen de comprendre le trajet. Affichez adresses, statut et distances en texte. Une géolocalisation refusée doit laisser saisir un point manuellement. Les informations urgentes ne reposent pas seulement sur une couleur. Les boutons possèdent un libellé clair et une taille utilisable sur téléphone.

Dessinez aussi attente, aucun chauffeur disponible, erreur réseau et annulation. Un écran peut paraître élégant avec trois cartes fictives, mais il doit expliquer ce qu’il se passe quand aucun chauffeur ne répond. Les tests lisent quelques éléments HTML et du contenu; ils ne prouvent ni contraste, ni lecture au clavier, ni ergonomie mobile. Montrez une démonstration au mentor à largeur de téléphone et sur ordinateur.

## Le piège à éviter

Afficher seulement une carte vide laisse le passager sans explication quand la localisation ou le réseau manque.

## Un exemple sur un cas voisin

```javascript
const etats=["Recherche","Chauffeur en route","Arrivé"]
console.log(etats.map((texte,i)=>`${i+1}. ${texte}`).join("\n"))
```

## Construire et vérifier

1. Créer cinq fichiers HTML : connexion, demande, suivi, chauffeur et reçu.
2. Mettre un titre et des données fictives lisibles sur chaque écran.
3. Prévoir la saisie manuelle et les états d’attente ou d’erreur.
4. Donner des labels aux formulaires et des noms aux boutons.
5. Tester navigation clavier et affichage à 375 pixels.
6. Déclarer les chemins dans src/academie/module-3.ts et présenter les maquettes.

## Contrat de la remise

Exportez maquettes: {connexion,demande,suivi,chauffeur,recu}, chemins HTML du dépôt. Les pages contiennent un titre h1 et du contenu; connexion comporte un label et un input password; demande présente un bouton/select et le texte Demander.

## Ce qui constitue la preuve

1. Les cinq tâches ont un écran.
2. Les formulaires sont étiquetés.
3. Les états sans carte ou sans chauffeur sont montrés.

## Avant de remettre

Exécutez npm run academie 3 et vos tests métier. Sélectionnez la cible 3, enregistrez et poussez le commit. Contrôlez academie/module-3 sur le SHA remis. Expliquez au mentor les choix et les limites de vos preuves; corrigez votre application, jamais les suites.
