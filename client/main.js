Router.configure({
  loadingTemplate: 'loading'
});


// Set the default Iron Router Route.
Router.route('/', function () {
  this.render('Frontpage');
});

BooksCT = new ContentType({
  collection:       Books, // The collection defined above.
  ctid:             "book" // The unique identifier for this content type.
});

ContactsCT = new ContentType({
  collection:       Contacts, // The collection defined above.
  ctid:             "contact", // The unique identifier for this content type.
  labels: {
    deletePrefix: "Hey, pay attention!! The delete action is unrecoverable!! You are about to delete ",
    deleteSuffix: "Are you 110% positive?",
    noItemsFound: "No books found."
  }
});

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
      // console.log(event);
      alert("You've clicked My Button.");
    }
  }
}

TasksCT = new ContentType({
  collection: Tasks,
  ctid: "task",
  endpoints: {
    index: {
      path: '/my-task-list',
      name: 'ct.task.index',
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
