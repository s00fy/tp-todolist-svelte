# TP Todolist avec Svelte + TypeScript

Liens utiles :

- [Tutorial de Svelte](https://svelte.dev/tutorial/basics)
- [Documentation de TypeScript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

## Étape 0 : Mise en place

Tout d'abord, forkez et clonez ce dépot.

En vous plaçant au sein du dossier, générez une nouvelle application avec `Vite` :

```
npm create vite@latest
```

Pour le nom du projet, utilisez le caractère point (`.`) pour que l'application soit générée dans le dossier courant.

Choisissez **Svelte** en tant que framework et **TypeScript** en tant que variante.

Installez les dépendances :

```
npm install
```

Enfin, lancez l'application :

```
npm run dev
```

L'application par défaut est accessible dans votre navigateur :

<img src="doc/init.png" width="300px">

Afin de démarrer d'un environnement vierge :
- dans le fichier `App.svelte`, supprimer le contenu des balises `<script>`, `<main>` et `<style>`
- videz le fichier `app.css`

*Note : vous pouvez supprimer les autres fichiers inutiles si vous le souhaitez (`Counter.svelte`, ...), mais il peut-être intéressant de les conserver pour s'en inspirer au cours du TP.*

Commitez votre travail.

## Étape 2 : liste des tâches

Nous travaillerons dans un premier temps dans le fichier `App.svelte`.

Voici un exemple d'interface en TypeScript représentant un film :

```ts
interface Movie {
  id: number;
  title: string;
  year: number;
  running_time: number;
  released: boolean;
}
```

Dans la partie `<script>`, créez une interface `Task` représentant une tâche à effectuer. Une tâche contient trois informations :

- un identifiant
- un nom
- un statut (effectuée ou non-effectuée)

Créez une variable `tasks` contenant un tableau de `Task`. Utilisez TypeScript pour typer la varible. Voici par exemple un tableau de films :

```ts
const movies: Movie[] = [
  {
    id: 1,
    title: "Interstellar",
    year: 2014,
    running_time: 154,
    released: true
  },
  {
    id: 2,
    title: "Blade Runner",
    year: 1982,
    running_time: 121,
    released: true
  }
]
```

Ajoutez deux ou trois tâches à votre tableau. Vérifiez que le typage fonctionne : si vous ne le respectez pas, votre éditeur doit vous en informer.

Utilisez une boucle [each](https://svelte.dev/tutorial/each-blocks) pour afficher chaque le nom de chaque tâche dans une liste au sein de la balise `<main>`.

Voici le résultat (que vous pouvez styliser selon vos envies) :

<img src="doc/list.png" width="100">



## Étape X : état des tâches

Devant le nom de chaque tâche, affichez une [checkbox](https://svelte.dev/tutorial/checkbox-inputs) qui doit être cochée si la tâche est marquée comme réalisée. Vous devez pour cela lier l'état de la checkbox à la valeur associée à la tâche dans votre tableau de tâches.

Liez la checkbox et le nom de la tâche grâce à la balise [label](https://developer.mozilla.org/fr/docs/Web/HTML/Element/Label) : quand vous cliquez sur le nom
