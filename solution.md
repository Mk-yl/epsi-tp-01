
#  Fichier `solution.md` – Résolution des bugs

###  Problème 1 : Navigation qui recharge la page  
 **Solution** :  
J’ai remplacé les balises `href` par `routerLink` pour permettre une navigation fluide **sans rechargement de la page**, comme prévu avec Angular.

---

###  Problème 2 : Formatage du texte  
 **Solution** :  
J’ai créé une pipe personnalisée (`ng generate pipe`) pour **transformer le texte des catégories** : les underscores ont été remplacés par des espaces, et la première lettre est mise en majuscule. Cette pipe a ensuite été utilisée directement dans les templates.

---

###  Problème 3 : Répétition du code dans les pages  
 **Solution** :  
Le header et le footer étaient dupliqués dans plusieurs composants. J’ai donc **créé deux composants séparés** (Header et Footer), que j’ai insérés dans `AppComponent` via `<app-header>` et `<app-footer>` pour une meilleure réutilisabilité.

---

###  Problème 4 : Certaines pages ne s’affichaient pas  
 **Solution** :  
J’ai vérifié toute la configuration de routage (fichier de routes, app.config.ts, main.ts) pour m’assurer que l’app était bien initialisée avec `provideRouter()` et que toutes les routes étaient bien définies. Rien à changer, tout était en place.

---

###  Problème 5 : Route détail déjà présente  
 **Solution** :  
La route vers les détails d’un livre (`books/:id`) était bien configurée, donc aucune modification n’était nécessaire. J’ai juste testé l’URL avec un id pour m’assurer que les détails s’affichaient.

---

###  Problème 6 : Formulaire vide  
 **Solution** :  
J’ai mis en place un **formulaire réactif** dans le composant d’ajout de livre. Les champs étaient déjà en HTML, donc j’ai utilisé `FormBuilder` et `formControlName` pour relier les champs, et j’ai ajouté une méthode `onSubmit()`.

---

###  Problème 7 : Absence de validations  
 **Solution** :  
J’ai intégré des **validators** (`required`, `minLength`) dans le `FormGroup` et affiché des messages d’erreur conditionnels avec `*ngIf`. J’ai aussi géré les erreurs potentielles avec l’opérateur `?.`.

---

###  Problème 8 : Pas de bouton retour  
 **Solution** :  
J’ai utilisé le service `Location` d’Angular (`@angular/common`) pour faire fonctionner le bouton retour avec `this.location.back()`.

---

###  Problème 9 : Erreur d’accès aux propriétés  
 **Solution** :  
Une erreur apparaissait car le livre n’était pas encore chargé. J’ai corrigé cela en utilisant `*ngIf="book"` pour éviter d’accéder à une donnée non définie.

---

###  Problème 10 : Élément non mis en valeur  
 **Solution** :  
J’ai appliqué une directive `appHighlight` pour **ajouter un fond jaune clair** sur certains titres de livres. Cette directive utilise `Renderer2` pour modifier les styles en fonction d’une valeur d’entrée.

---

###  Problème 11 : Boutons inactifs  
 **Solution** :  
Tous les boutons ont été testés et fonctionnent normalement. Rien à modifier.

---

###  Problème 12 : Livres non visibles  
 **Solution** :  
La condition de rendu était mal écrite. J’ai corrigé le `*ngIf` pour qu’il vérifie bien `books.length > 0` avant d’afficher la liste.

---

###  Problème 13 : Texte trop long  
 **Solution** :  
J’ai créé une pipe `truncate` pour **limiter la longueur des descriptions** à 20 caractères. Les textes sont maintenant coupés avec `...` si besoin.

---

###  Problème 14 : Manque de retour utilisateur  
 **Solution** :  
J’ai ajouté un message d’information dans le composant pour afficher un texte après une action comme la suppression. Le message s'affiche avec `*ngIf="message"`.

---

###  Problème 15 : Titre mal affiché  
 **Solution** :  
J’ai utilisé le pipe `uppercase` pour afficher le titre en **majuscules**, comme demandé.

---

###  Problème 16 : Directive partiellement appliquée  
 **Solution** :  
J’ai modifié la directive `appHighlight` pour qu’elle applique **aussi du texte en gras**, en plus du fond coloré, lorsque la condition est vraie.

---
