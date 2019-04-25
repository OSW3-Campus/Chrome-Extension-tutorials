# Stocker des données (localstorage)
> ### Objectifs :
> Savoir écrire et lire des données stockées



# Création du répertoire

```bash
mkdir my-project
cd my-project
```



# Configuration du projet

Le fichier de configuration principal du projet s'appel `manifest.json`.

## Création du manifest

```bash
touch manifest.json
```

## Ajouter les paramètres

```json
{
    "name": "Exemple d'extension Chrome.",
    "version": "1.0",
    "manifest_version": 2,
    "description": "Création d'une extension Chrome avec OSW3-Campus !"
}
```



# Ajouter le projet à Chrome

Ajouter le projet de l'extension Chrome au navigateur Chrome pour un aperçu du développement du projet.

1. Ouvrir la page de gestion des extensions : [`chrome://extensions`](chrome://extensions).
2. Activer le **Mode Développeur**.
3. Cliquer sur le bouton **Chargez l'extension non empaquetée**.
4. Sélectionner le répertoire de votre projet `my-project`.

Chrome à ajouter votre extension à la liste des extensions de votre navigatuer, et un icon de substitusion dans la barre d'extensions.



# Créer le script

## Créer le répertoire scripts

Créer le répertoire de stockage des scripte JavaScript, à la racine de l'extension.

```bash
mkdir scripts
```

## Ajouter un fichier de script

Ajouter un premier fichier de script `background.js`

### Créer le fichier

```bash
touch scripts/background.js
```

### Ajouter le script

```javascript
"use strict";

// 1. On récupère la valeur du paramètre `name`
var value = localStorage.getItem('name');

// 2. Affichage de la valeur du paramètre `name`dans une boite de dialogue.
// On constate que `value` retourne la valeur `null`
alert(value);

// 3. On affecte une valeur au paramètre `name`
localStorage.setItem('name','Sponge Bob');

// 4. Affichage de la valeur du paramètre `name`dans une boite de dialogue.
// La variable `value` retourne maintenant `Sponge Bob`
alert(value);
```

## Indexer le script

Dans le `manifest.json`, ajouter la configuration permettant d'indexer et exécuter le script.

```json
{
    // ...
    "background": {
        "scripts": ["scripts/background.js"]
    }
}
```



# Plus d'espace de stockage

Donner, à l'extension, les autorisations d'accès aux APIs Chrome :

- `unlimitedStorage` : par défaut, le Local Storage autorise 5Mo. Cette autorisation permet d'obtenir plus d'espace.

```json
{
    "permissions": ["unlimitedStorage"]
}
```



# Plus loin avec localStorage

- [https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage](https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage)
- [https://developer.mozilla.org/fr/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API](https://developer.mozilla.org/fr/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)