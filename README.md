# Créer une Popup
> ### Objectifs :
> Créer une interface en popup.



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



# Créer le template HTML

## Créer le répertoire `templates`

Créer le répertoire de stockage des templates HTML, à la racine de l'extension.

```bash
mkdir templates
```

## Ajouter un fichier HTML

### Créer le fichier

Créer le fichier HTML `popup.html`

```bash
touch templates/popup.html
```

### Ajouter le code HTML

```html
<html>
    <head></head>
    <body>
        Bonjour, je suis la popup de votre Extension Chrome.
    </body>
</html>
```



# Ajouter la configuration au `manifest`

Ajouter au `manifest.json` le paramètre `browser_action` :

```json
{
    "browser_action": {
        "default_popup": "templates/popup.html"
    }
}
```



# Ajouter une feuille de styles

Modifier les propriétés CSS pour définir les dimension de la popup.

## Créer le répertoire `styles`

```bash
mkdir styles
``` 

## Ajouter une feuille de style

```bash
touch styles/popup.css
```

## Ajouter les propriétés CSS

```css
html {
    height: 300px;
    width: 300px;
}
```

## Lier la feuille de style

Ajouter la feuille de style `popup.css` au template HTML `popup.html`

```html
<head>
    <link rel="stylesheet" href="../styles/popup.css">
</head>
```



# Ajouter des scripts

## Créer le répertoire `scripts`

```bash
mkdir scripts
``` 

## Ajouter un fichier de script

```bash
touch scripts/popup.js
```

## Ajouter du script

Ajouter du script au fichier `popup.js`

```javascript
"use strict"
alert("Hello le script de popup.");
```

Ce script affiche une boite de dialogue à chaque ouverture de la popup.