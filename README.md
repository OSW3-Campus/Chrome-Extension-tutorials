# Internationalisation
> ### Objectifs :
> Traduire l'extension et choisir la langue par defaut



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



# Ajouter les traductions

## Créer le répertoire `_locales`

Créer, à la racine de l'extension, le répertoire `_locales` dans lequel seront stockés les fichiers de traduction.

```bash
mkdir _locales
```


## Créer les répertoires de langue

Dans le répertoire `_locales`, ajouter les répertoires des langues dans lesquelles sera traduite l'extension (e.g. `fr` pour le Français, `en` pour l'anglais...).

```bash
mkdir _locales/fr
mkdir _locales/en
```

> Liste des codes de langues supporté : [https://developer.chrome.com/webstore/i18n?csw=1#localeTable](https://developer.chrome.com/webstore/i18n?csw=1#localeTable)


## Créer les fichiers de traduction

Dans chacun des répertoires de langues, ajouter le fichier de traduction `messages.json`.  
Le fichier `messages.json` doit contenir une structure jSon.


## Définir les messages

Les traductions sont stockées dans des objets contenants les paramètres :

- `message` : Texte traduit
- `description` : Information sur le texte traduit

Le nom de l'objet doit être unique.  
Pour cet exemple nous avons choisi de l'appeler `extName`

```json
{
    "extName": {
        "message": "Exemple d'extension Chrome.",
        "description": "Nom de l'extension"
    }
}
```


## Utiliser les messages

### Utiliser un message dans le `manifest.json`

Pour internationaliser le nom de l'extension (par exemple) dans le `manifest.json`, utiliser la variable `__MSG_extName__`

```json
{
    "name": "__MSG_extName__",
    "default_locale": "fr"
}
```

### Utiliser un message avec JavaScript

Pour récupérer la valeur internationaliser d'un message via JavaScript, utiliser la méthode :

```javascript
var title = chrome.i18n.getMessage("extName");
```




# Définir la langue par défaut

Lorsque l'internationalisation est ajoutée à une extension, il est impératif de definir la langue par défaut de l'extension.

Ajouter le paramètre `default_locale` au `manifest.json`.  
La valeur du paramètre doit être le nom d'un des répertoire de langue du répertoire `_locales`.

```json
{
    "default_locale": "fr"
}
```