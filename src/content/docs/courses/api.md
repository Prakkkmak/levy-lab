---
title: API Course
description: API Course
---

# TP API M1 INFORMATIQUE POSTMAN

> En informatique, **API** est l'acronyme d'**Application Programming Interface**, que l'on traduit en français par **interface de programmation applicative** ou **interface de programmation d'application**. L'API est une solution informatique qui permet à des applications de
communiquer entre elles et de s'échanger mutuellement des services ou
des données.
> 

# Partie 1 : Le protocole HTTP

> HTTP définit un ensemble de **méthodes de requête** qui indiquent l'action que l'on souhaite réaliser sur la ressource indiquée. Bien qu'on rencontre également des noms (en anglais), ces méthodes sont souvent appelées *verbes HTTP*. Chacun d'eux implémente une sémantique différente mais certaines fonctionnalités courantes peuvent être partagées par différentes méthodes (e.g. une méthode de requête peut être sûre (*safe*), idempotente ou être mise en cache (*cacheable*)).
> 

# Premiers pas

Parmi les verbes HTTP les plus utilisés il y a le **GET**. Lorsqu’une **brique applicative** souhaite rendre des **services** à un **client** (application mobile, humain, navigateur ...), il est le moins destructif et permet la **consultation de données**.

<aside>
🚨 Dans l’hypothèse où l’utilisation du verbe **GET** suit une **bonne pratique**, il n’altère **jamais les données**.

</aside>

L’outil le plus connu et utilisé pour manipuler ce verbe est ... Ton **navigateur internet** 🤯! En effet, on oublie souvent que la barre d’adresse d’un navigateur internet fait tout simplement la chose suivante : “Peux tu appeler la ressource (adresse) suivante avec le verbe GET s’il te plait ?”. Le navigateur reçoit la page et l’**interprète** afin d’avoir un **rendu** tout joli 🤯 !

<aside>
💡 N’oublions pas que l’adresse n’est qu’un alias vers une IP, en réalité nous appelons avec le verbe GET : l’adresse IP d’une machine.

</aside>

---

### Exercice 1 (plutôt facile)

- Ouvrir un **navigateur web** (firefox/chrome/edge/opera)
- Dans la **barre d’adresse** entrer `142.251.33.67`
- TADAM ! Ton **site** préféré est **apparu** 🥳

---

Ok, l’**exercice** est simple mais il a pour but de mettre en perspective une action de tous les jours qui consiste à demander à un serveur de donner une page web à afficher. Google, en tant que site consulté par un humain, nous renvoie une **page web**, or la plupart des réponses reçues par les serveurs ne sont pas des pages web. Par exemple, il est populaire d’utiliser le format **JSON** en tant que réponse pour une **API REST**.

---

### Exercice 2 (toujours aussi facile)

Nous allons récupérer des ‘fun facts’ sur nos amis les chats.

- Nous allons continuer d’utiliser un navigateur web.
- Entrer l’adresse suivante: https://cat-fact.herokuapp.com/facts/5887e1d85c873e0011036889

Tu as devant toi un objet JSON avec des infos intéressantes:

<aside>
💡 Certains navigateurs interprètent directement le JSON afin de nous donner un bel affichage, par exemple, Firefox.

</aside>

```json
{
   "status":{
      "verified":true,
      "feedback":"",
      "sentCount":1
   },
   "_id":"5887e1d85c873e0011036889",
   "user":{
      "name":{
         "first":"Alex",
         "last":"Wohlbruck"
      },
      "_id":"5a9ac18c7478810ea6c06381",
      "photo":"https://lh3.googleusercontent.com/a-/AOh14GhYgUCf9yFuj-Xt6_X_cDz-5gSusrGde-lerdKqXxA=s50"
   },
   "text":"Cats make about 100 different sounds. Dogs make only about 10.",
   "__v":0,
   "source":"user",
   "updatedAt":"2020-09-03T16:39:39.578Z",
   "type":"cat",
   "createdAt":"2018-01-15T21:20:00.003Z",
   "deleted":false,
   "used":true
}
```

Un beau petit bordel, heureusement qu’on a l’habitude d’utiliser des pages **HTML** plutôt que du **JSON** 🙂. 

<aside>
💡 Nous allons avoir besoin de comprendre le format JSON par la suite, ne pas hésiter à prendre le temps de te documenter: https://www.json.org/json-fr.html

</aside>

- Qu’avons nous appris sur les chats avec cet appel ?
- Qui a écris ce ‘fun fact’ ?
- Quelles autres infos intéressantes avons nous obtenues ?

---

On souhaite maintenant récupérer d’autres infos sur les **chats** 🐱, pour cela nous allons nous concentrer 30 secondes sur l’un des principes d’une **API REST**. 

https://cat-fact.herokuapp.com/facts/5887e1d85c873e0011036889

- En rouge nous avons la base URL https://cat-fact.herokuapp.com c’est l’interface principale avec le service que veux nous rendre l’API. Ici elle nous renvoie une page HTML.
- En bleu nous les objets sur lesquels nous voulons pointer. Ici des facts.
    - L’objet est nécessairement au pluriel.
    - Le verbe GET sur [Base URL]/[Objet]s doit nous renvoyer la liste de ces objets.
- L’identifiant 5887e1d85c873e0011036889 se situe ensuite.
    - L’identifiant permet de se concentrer sur un objet en particulier.
    - Il est souvent lié à la clé primaire dans une base de donnée associée.
    - Il est possible de le GET mais aussi de le modifier grâce au verbe PUT par exemple

---

### Exercice 3 (🐱)

- Récupérer la liste de tous les faits intéressants sur les chats.

---

<aside>
🔥 L’API a été trouvée sur: https://apilist.fun/. Il existe des centaines de banques d’API disponibles. Si tu souhaite aller plus loin, je t’invite à t’entrainer à les utiliser à la suite du TP (par exemple, le jeudi soir, cette api peut t’être utile : https://www.thecocktaildb.com/api.php?ref=apilist.fun)

</aside>

<aside>
💡 Afin d’éviter les DDOS et autres attaques malveillantes, beaucoup d’APIs sont protégées par des clés. Par exemple tu ne peux pas utiliser l’api du jeu Fortnite (https://dash.fortnite-api.com/) sans créer un compte et obtenir une clé.

</aside>

---

## Un outil magique

Les développeurs web ont un outil magique pour leur faciliter le travail. Le **Browser Developement Tool**. Outil excellent que nous n’allons pas aborder en détail mais je t’invites à l’utiliser activement lors de tes **développements web** !

---

### Exercice 4

Dans cet exercice nous allons intercepter les requêtes HTTP qui transitent dans notre navigateur web.

- Ouvrir un navigateur web
- Ouvrir l’outil de développement (Souvent F12)
- Aller dans l’onglet “Réseau”/”Network”

Nous allons pouvoir y afficher tous les flux de réseau.

- Entrer [google.com](http://google.com) dans la barre d’adresse
- Cliquer sur les requêtes et explorer l’outil afin de répondre a ces questions :
    - Trouver la requête qui renvoie la page internet, quel est le type de la réponse ?
    - Quel autre type de contenu avons nous obtenu ?
    - Quelle est la caractéristique d’une requête qui s’est bien passée ?

---

### Exercice 4 bis (bonus 💪)

Nous avons utilisé un navigateur afin de récupérer des données d’API. Mais savais tu que les principaux systèmes d’exploitations (Windows/Linux) pouvaient aussi faire des appels API ?

- Trouver comment appeler une API via ligne de commande et tester.

---

# Outils d’API

[Postman](https://www.postman.com/) est l’outil par excellence utilisé partout dans le monde afin de requêter des APIs. 

> Postman is an API platform for building and using APIs. Postman simplifies each step of the API lifecycle and streamlines collaboration so you can create better APIs—faster.
> 

Pour la suite du TP, nous allons utiliser le logiciel Postman qui est très utilisé. 

---

### Exercice 5

Il est important de maîtriser ce genre d’outil. Nous allons donc prendre en main la bête. La documentation de Postman est excellente et nous allons pouvoir la suivre !

- Suivre le Getting Started de Postman: https://learning.postman.com/docs/getting-started/

<aside>
⚠️ Je suppose que tu tiens à tes données, bonne nouvelle, tu n’es pas obligé de créer un compte ! Par contre, si tu souhaite synchroniser et sauvegarder dans le cloud ton travail (en collaboration par exemple) tu peux créer un compte et un espace partagé ! Si tu ne peux pas installer Postman sur ta machine la version web existe mais nécessite, cette fois ci, un compte ☹️.

</aside>

- Une fois le ‘Getting Started’ complété tu dois savoir:
    - [ ]  Installer le logiciel, le lancer et le garder à jour.
    - [ ]  Naviguer sur l’application et la prendre en main (vive le thème sombre 🥳)
    - [ ]  Envoyer une requête

---

### Exercice 6

Dans cet exercice tu vas découvrir ton genre en fonction de ton prénom !

- Afin de bien séparer le travail créer une nouvelle collection.
- Créer une requête.
- Utiliser l’API `https://api.genderize.io`
- Re quêter cet API et observer le résultat obtenu.

<aside>
⚠️ En cas d’erreur Postman peux vous demander de désactiver le SSL, le faire permet de débloquer la situation.

</aside>

<aside>
💡 N’oublie pas d’utiliser le verbe GET afin de récupérer des informations !

</aside>

- L’API renvoie une erreur avec la raison de l’échec, c’est donc une bonne API 👏 ! Nous savons désormais que nous devons ajouter un paramètre d’URL nommé ‘name’.
- Il y a deux possibilités:
    - Ajouter à la fin de l’URL `?name=monprénom`
    - Ajouter dans l’onglet Params la KEY `name`, VALUE `monprénom`

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cbbe1139-1d05-4570-9cc7-11a485a25a27/Untitled.png)

- Envoyer la requête et analyser la réponse.

Grâce à cette API tu connais désormais ton genre avec la probabilité associée 🎉 ! Plus sérieusement, cette API peut être très utile pour présupposer le sexe d’un utilisateur d’une application afin d’utiliser le bon genre lors des interactions avec lui ou elle (ou iel?).

---

### Exercice 7

Nous allons appeler une API perso afin de manipuler différentes features de Postman. L’API est disponible à cette adresse de base: `https://test-api-ubo-chat.glitch.me`

- Créer une nouvelle collection
- Tenter un GET sur l’API

<aside>
⚠️ L’API a été faite rapidement, elle ne respecte pas nécessairement tous les principes REST

</aside>

Malheureusement le serveur ne veux pas vous laisser rentrer. C’est normal, il faut s’authentifier !

- Créer une nouvelle requête POST pour l’endpoint `/signup`

<aside>
💡 Un endpoint est un point d’entrée dans l’API. Ici, il suffit d’ajouter `/signup` à la fin de l’URL de base.

</aside>

Cette fois ci l’API veux un nom d’utilisateur, contentons la !

- Ajouter en paramètre d’URL de la requête `username`: `vivelabretagne2024`
- Un code a été reçu, c’est ton identifiant pour cette session, copie le !

<aside>
💡 Habituellement on utilise un JWT (https://jwt.io/) qui contient un grand nombre d’infos sur l’utilisateur authentifié.

</aside>

- Retenter un GET sur l’API en ajoutant le code de session dans l’en tête de la requête. Pour cela il suffit d’aller dans ‘headers’ et d’ajouter `userid` : `id`

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2349c666-0582-460d-a04d-94c2264b67a4/Untitled.png)

L’API fournie est une API de messagerie, elle permet de poster des messages et de les consulter. Il n’y a pas de base de données donc, à chaque redémarrage, les messages et code de sessions sont perdus 😟.

- Nous allons consulter la liste des messages, pour cela, créer une nouvelle requête GET avec l’endpoint `/messages` . Ne pas oublier d’ajouter le code de session comme dans le précédent point 🙂.

<aside>
💡 Si la liste reçue est vide, tu est le premier à arriver ici, sinon tu vois les messages de tout le monde !

</aside>

- Pour ajouter un message, dupliquer la requête de récupération des messages et changer le verbe GET par POST.
- Afin d’ajouter un message, remplir dans le Body `text` : `monMessage` (en remplaçant ‘monMessage’ par ton message perso, écris ce que tu veux 🤪 !)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/26c559e9-2efd-4674-8def-a0e35341dd43/Untitled.png)

---

### Exercice 8

Nous développeurs détestons répéter une tâche, nous allons maintenant utiliser les variables d’environnement sur Postman.

- Aller dans l’onglet ‘Environements’ à gauche.
- Créer un nouvel environnement et le nommer.
- Créer une nouvelle variable userid de la valeur de ton code de session.

Bravo ! La variable est positionée, nous allons maintenant l’utiliser.

- Aller dans toutes les requêtes créés (sauf signup)
- Dans l’en-tête (headers) remplacer le code par `{{userid}}`

Tu as désormais une variable comme identifiant. 

- Dernière étape, changer l’environnement en haut à droite de l’écran.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/87b337c1-8024-40b7-a22f-8cd71ebced6f/Untitled.png)

- Tester si les requêtes sont encore OK.
- Utiliser la nouvelle méthode pour récupérer le tout premier message grâce à l’endpoint /messages/0
- Rendre paramétrable le numéro du message que nous souhaitons récupérer.

---

Le code est disponible sur la plateforme [glitch.com](http://glitch.com) qui permet de créer des PoC (Proof of Concept) très rapidement. L’API est hebergée gratuitement et déployée facilement. Le code très moche est disponible ici : https://glitch.com/edit/#!/test-api-ubo-chat. Tu es invité à le regarder afin de comprendre la mécanique utilisée. Si tu le souhaites, tu peux créer un compte et copier le projet afin de faire ta propre API !