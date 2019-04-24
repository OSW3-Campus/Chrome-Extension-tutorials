# Créer un script
> ### Objectifs :
> Ajouter un premier script



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

## Créer le répertoire `scripts`

Créer le répertoire de stockage des scripte JavaScript, à la racine de l'extension.

```bash
mkdir scripts
```

## Ajouter un fichier de script

Ajouter un premier fichier de script `hello.js`

### Créer le fichier

```bash
touch scripts/hello.js
```

### Ajouter le script

```javascript
"use strict";
alert("Hello Worlds");
```

## Indexer le script

Dans le `manifest.json`, ajouter la configuration permettant d'indexer et exécuter le script.

```jsonc
{
    // ...
    "background": {
        "scripts": ["scripts/hello.js"]
    }
}
```

Dès que l'extension sera (re)charger dans Chrome, une boite de dialogue avec le message "Hello World" apparait.