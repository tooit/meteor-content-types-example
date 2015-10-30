var MyCustomChartDisplay = {
  helpers: {
    meta: {
      title: "TODO List",
      summary: "This is a simple example demostrating how we can -override- a display helper."
    },
    myCustomHelper: function () {
      return "This is a simple example demostrating how we can -extend- a display helper. <button class='my-button'>My button</button>";
    }
  },
  events: {
    'click .my-button': function (event) {
      alert("You've clicked My Button.");
    }
  }
}

TasksCT = new ContentType({
  collection: Tasks,
  ctid: "task",
  endpoints: {
    index: {
      display: 'list',
      displays: {
        list: MyCustomChartDisplay
      }
    }
  },
  labels: {
    linkCreate: "Add Task"
  }
});
