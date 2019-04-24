# Ajouter l'icone de l'extension
> ### Objectifs :
> Ajouter l'icone de l'extension



# Création du répertoire

```bash
mkdir my-project
cd my-project
```



# Configuration du projet

```bash
touch manifest.json
```

```json
{
    "name": "Exemple d'extension Chrome.",
    "version": "1.0",
    "description": "Création d'une extension Chrome avec OSW3-Campus !",
    "manifest_version": 2
}
```



# Ajouter le projet à Chrome

Ajouter le projet de l'extension Chrome au navigateur Chrome pour un aperçu du développement du projet.

1. Ouvrir la page de gestion des extensions : [`chrome://extensions`](chrome://extensions).
2. Activer le **Mode Développeur**.
3. Cliquer sur le bouton **Chargez l'extension non empaquetée**.
4. Sélectionner le répertoire de votre projet `my-project`.

Chrome à ajouter votre extension à la liste des extensions de votre navigatuer, et un icon de substitusion dans la barre d'extensions.



# Ajouter les fichiers images

## Créer le répertoire `images``

```bash
mkdir images
```

## Ajouter les images dans le répertoire

Ajouter les images de la liste suivante dans le répertoire `images`

- `icon16.png` ([télécharger](https://github.com/OSW3-Campus/Chrome-Extension-tutorials/raw/icons/images/icon16.png))
- `icon48.png` ([télécharger](https://github.com/OSW3-Campus/Chrome-Extension-tutorials/raw/icons/images/icon48.png))
- `icon128.png` ([télécharger](https://github.com/OSW3-Campus/Chrome-Extension-tutorials/raw/icons/images/icon128.png))

## Ajouter les images au `manifest`

```json
{
    // ...
    "icons": {
        "16": "images/icon16.png",
        "48": "images/icon48.png",
        "128": "images/icon128.png"
    }
}
```