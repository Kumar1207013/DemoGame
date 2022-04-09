function Task(id, name, desc, date, url) {
  this.id = id;
  this.name = name;
  this.desc = desc;
  this.date = date;
  this.url = url;
  this.isMarked = false; // red
}
export default Task;
