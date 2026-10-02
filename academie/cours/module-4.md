# Module 4 : Authentification et profils vérifiés

## La tâche à réaliser

Séparer identité, profils métier et autorisation de mise en ligne.

## Comprendre avant de coder

L’authentification identifie l’utilisateur; le profil métier détermine ce qu’il peut faire. Un passager peut demander une course. Un chauffeur peut se connecter avant vérification, mais ne passe en ligne qu’une fois approuvé. La décision d’approbation appartient à un rôle distinct et protégé; elle ne vient pas d’une propriété role envoyée dans un formulaire.

Driver naît PENDING. approve rend la mise en ligne possible; reject conserve un motif utile et la bloque. Dans la démonstration, utilisez des documents synthétiques. Les vraies pièces demanderaient une politique de conservation, d’accès et de suppression distincte de ce projet pédagogique.

Utilisez une bibliothèque de sessions et un hachage lent et salé comme scrypt, bcrypt ou Argon2. Deux hachages du même mot de passe diffèrent grâce au sel. Le harnais vérifie absence du texte clair et diversité des valeurs; un encodage aléatoire faible pourrait pourtant passer. Le mentor vérifie donc la bibliothèque, ses paramètres, les cookies, la révocation et les contrôles HTTP. L’identité d’un acteur vient de la session serveur, jamais d’un identifiant libre dans le corps de requête.

## Le piège à éviter

Masquer le bouton Passer en ligne ne protège pas la route qu’un chauffeur non vérifié appelle directement.

## Un exemple sur un cas voisin

```javascript
const profil={verification:"PENDING"}
console.log("En ligne autorisé :",profil.verification==="APPROVED")
```

## Construire et vérifier

1. Configurer inscription, connexion, session et déconnexion.
2. Créer profils passager et chauffeur au-dessus de l’identité.
3. Ajouter PENDING, APPROVED et REJECTED avec motif.
4. Protéger la vérification manuelle et la mise en ligne côté serveur.
5. Utiliser un hachage lent et salé fourni par une bibliothèque.
6. Tester un chauffeur en attente, approuvé puis refusé.

## Contrat de la remise

Exportez Driver.register({email,name}), verification, rejectionReason, approve(), reject(reason) et canGoOnline(). Exportez hashPassword(plain):Promise<string>. Les contrôles réels de session et des routes doivent être démontrés au mentor.

## Ce qui constitue la preuve

1. Un chauffeur non approuvé reste hors ligne.
2. Un refus conserve son motif.
3. Les mots de passe ne sont jamais conservés en clair.

## Avant de remettre

Exécutez npm run academie 4 et vos tests métier. Sélectionnez la cible 4, enregistrez et poussez le commit. Contrôlez academie/module-4 sur le SHA remis. Expliquez au mentor les choix et les limites de vos preuves; corrigez votre application, jamais les suites.
