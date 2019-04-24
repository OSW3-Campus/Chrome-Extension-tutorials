# Création d'un projet vierge
> ### Objectifs :
> Créer la base d'une extension vierge et l'ajouter aux extensions Chrome.
> ### Notes :
> Dans ce cours, le terme **my-project** réprésente le nom du projet. Remplacez ce terme par le nom de votre projet.



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



# Donner les permissions

Donner à l'extension, l'autorisation d'accès à l'API du menu contextuel.

```json
{
    "permissions": ["contextMenus"]
}
```



# Créer le script

## Créer le répertoire scripts

Créer le répertoire de stockage des scripts JavaScript, à la racine de l'extension.

```bash
mkdir scripts
```

## Ajouter le fichier de script

Ajouter fichier de script dédié au menu contextuel `scripts/contextMenus.js`

### Créer le fichier

```bash
touch scripts/contextMenus.js
```

### Ajouter le script

```javascript
"use strict";
// ...
```


## Indexer le script

Dans le `manifest.json`, ajouter la configuration permettant d'indexer et exécuter le script.

```json
{
    // ...
    "background": {
        "scripts": ["scripts/contextMenus.js"]
    }
}
``` 