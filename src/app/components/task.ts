export default class Task {
  constructor(
    public id: number,
    public task: string,
    public isComplete: boolean
  ) {
    id = this.id;
    task = this.task;
    isComplete = this.isComplete;
  }
}
