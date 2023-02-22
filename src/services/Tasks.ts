interface Task {
  id: number;
  name: string;
  done: boolean;
}

export class Tasks {
  this.tasks: Task[] = [
    {
      id: 1,
      name: "Manger",
      done: true
    },
    {
      id: 2,
      name: "Boire",
      done: false
    },
    {
      id: 3,
      name: "Dormir",
      done: false
    }
  ];
}