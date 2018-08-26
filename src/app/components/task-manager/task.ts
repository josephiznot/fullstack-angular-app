export default class Task {
  constructor(
    public id: number,
    public task: string,
    public isComplete: boolean
  ) {
    this.id = id;
    this.task = task;
    this.isComplete = isComplete;
  }
}
