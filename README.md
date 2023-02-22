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

_Note : vous pouvez supprimer les autres fichiers inutiles si vous le souhaitez (`Counter.svelte`, ...), mais il peut-être intéressant de les conserver pour s'en inspirer au cours du TP._

Commitez votre travail à la fin de chaque étape.

## Étape 1 : liste des tâches

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
    title: 'Interstellar',
    year: 2014,
    running_time: 154,
    released: true,
  },
  {
    id: 2,
    title: 'Blade Runner',
    year: 1982,
    running_time: 121,
    released: true,
  },
];
```

Ajoutez deux ou trois tâches à votre tableau. Vérifiez que le typage fonctionne : si vous ne le respectez pas, votre éditeur doit vous en informer.

Utilisez une boucle [each](https://svelte.dev/tutorial/each-blocks) pour afficher chaque le nom de chaque tâche dans une liste au sein de la balise `<main>`.

Voici le résultat (que vous pouvez styliser selon vos envies) :

<img src="doc/list.png" width="100">

## Étape 2 : le composant `TodoList`

Une application est généralement structurée en composants : on ne va pas tout stocker dans un fichier unique. On va même essayer de le remplir au minimum.

Notre première action va donc être de déplacer notre todo list dans un composant dédié.

Créez un fichier `lib/TodoList.svelte`. Il sera structurée comme le composant `App.svelte` : une balise `<script>`, du HTML, puis une balise `<style>`.

Déplacez le contenu des balises du fichier `App.svelte` vers les balises du fichier `TodoList.svelte`.

Dans la balise `<script>` de `App.svelte`, vous aller maintenant importer votre nouveau composant :

```ts
import TodoList from "./lib/TodoList.svelte";
```

Puis vous allez pouvoir l'utiliser :

```html
<main>
  <TodoList />
</main>
```

Le résultat est le même, mais notre application est un peu plus modulaire.

## Étape 3 : état des tâches

Devant le nom de chaque tâche, affichez une [checkbox](https://svelte.dev/tutorial/checkbox-inputs) qui doit être cochée si la tâche est marquée comme réalisée. Vous devez pour cela lier l'état de la checkbox à la valeur associée à la tâche dans votre tableau de tâches.

Utilisez HTML pour lier la checkbox et le nom de la tâche grâce à la balise [label](https://developer.mozilla.org/fr/docs/Web/HTML/Element/Label) : quand vous cliquez sur le nom de la tâche, la checkbox doit être ciblée.

Grâce à CSS :
- retirez les puces de la liste
- rayez les noms des tâches cochées (sans modifier le HTML)

Voici le résultat attendu à ce stade :

<img src="doc/checkbox.png" width="100">

## Étape 4 : compter les tâches restantes





















## Étape 4 : le composant `Task`

Notre interface est encore simple mais se complexifie lentement. Typiquement, il peut être intéressant de donner aux éléments qui se répètent leur propre composant.

Créez un fichier `lib/Task.svelte` avec la structure que vous connaissez désormais.

Cette fois-ci, notre composant doit être en mesure d'accepter une propriété représentant la tâche à afficher. Voici comment déclarer une propriété `task` dans le fichier `Task.svelte` :

```ts
export let task: Task;
```

Petit problème : le type `Task` n'est pas défini dans ce nouveau fichier. Nous allons le récupérer du fichier `TodoList.svelte`. Pour cela, il faut rendre le type visible de l'extérieur grâce au mot clé `export` :

```ts
export interface Task {
  ...
}
```

Vous pouvez maintenant l'importer au début de votre fichier `Task.svelte` :

```ts
import { Task } from "./TodoList.svelte";
```

Déplacez le HTML permettant d'afficher une tâche dans le nouveau fichier `Task.svelte`.

*Note : la balise `<li>` ne devrait pas faire partie du composant `Task.svelte` : la tâche ne "sait pas" qu'elle fait partie d'une liste, c'est le parent qui s'en sert dans ce contexte.*

Dans `TodoList.svelte`, importez le composant `Task.svelte`. À l'endroit approprié, vous pouvez désormais appeler votre nouveau composant en lui passant une tache :

```html
<Task task={task} />
```

N'oubliez pas de déplacer la partie du CSS appropriée dans le composant `Task.svelte`.

## Étape 5 : compter les tâches restantes

