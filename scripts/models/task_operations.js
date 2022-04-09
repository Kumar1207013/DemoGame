// CRUD
import Task from "./task.js";
export const taskOperations = {
  tasks: [],
  add(id, name, desc, date, url) {
    const task = new Task(id, name, desc, date, url);
    this.tasks.push(task);
    console.log("Added ", this.tasks);
    return task;
  },
  mark(id) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].id == id) {
        let taskObject = this.tasks[i];
        taskObject.isMarked = !taskObject.isMarked;
      }
    }
  },
  countMarked() {
    let count = 0;
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].isMarked) {
        count++;
      }
    }
    return count;
  },
  countUnmarked() {
    return this.tasks.length - this.countMarked();
  },
};
