// Example taken from https://github.com/aldeed/meteor-autoform

Tasks = new Mongo.Collection("tasks");
Tasks.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  assignee: {
    type: String,
    label: "Assignee"
  },
  status: {
    type: String,
    allowedValues: ['new', 'in-progress', 'ready-to-test','closed']
  },
  summary: {
    type: String,
    label: "Brief summary",
    optional: true,
    max: 1000
  }
}));

// Be sure to define proper insert security for untrusted code if you've
// removed the insecure package. Call allow/deny or use ongoworks:security.
