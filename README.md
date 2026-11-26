# Site des vidéos (GitHub Pages)

Publié sur https://lantappli.github.io — construit automatiquement par GitHub Pages (Jekyll).

## Ajouter une vidéo

1. Mettre l'image d'aperçu dans `assets/img/` (de préférence une image sans logo YouTube).
2. Créer `_videos/<adresse>.md` — l'adresse de la page sera `https://lantappli.github.io/<adresse>/`.
3. En-tête du fichier :

```yaml
---
title: Titre de la page
description: Une phrase (apparaît dans l'aperçu des liens et sur l'accueil).
youtube_id: "XXXXXXXXXXX"        # identifiant YouTube ; vide = « bientôt disponible »
poster: /assets/img/mon-image.jpg
poster_width: 1280
poster_height: 720
poster_has_button: false         # true si l'image contient déjà un bouton « lecture »
order: 2                         # ordre sur la page d'accueil
---
Texte de la page en Markdown.
```

4. `git add . && git commit -m "..." && git push` — en ligne une minute plus tard.

## Vie privée

Le lecteur YouTube (`youtube-nocookie.com`) n'est chargé qu'au clic (`assets/video.js`) :
aucune requête vers Google avant, donc pas de bandeau cookies nécessaire. Pas de polices externes.
