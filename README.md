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

- `img16.png` ([télécharger](https://github.com/OSW3-Campus/Chrome-Extension-tutorials/blob/icons/images/img16.png))
- `img32.png` ([télécharger](https://github.com/OSW3-Campus/Chrome-Extension-tutorials/blob/icons/images/img32.png))
- `img48.png` ([télécharger](https://github.com/OSW3-Campus/Chrome-Extension-tutorials/blob/icons/images/img48.png))
- `img64.png` ([télécharger](https://github.com/OSW3-Campus/Chrome-Extension-tutorials/blob/icons/images/img64.png))

## Ajouter les images au `manifest`

```json
{
    // ...
    "icons": {
        "16": "images/img16.png",
        "32": "images/img32.png",
        "48": "images/img48.png",
        "64": "images/img64.png"
    }
}
```