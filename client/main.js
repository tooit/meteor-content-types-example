
// Set the default Iron Router Route.
Router.route('/', function () {
  this.render('Frontpage');
});

BooksCT = new ContentType({
  collection:       Books, // The collection defined above.
  ctid:             "book", // The unique identifier for this content type.
  endpoints: {
    create: {
      meta: {
        title:      "Create a new Book sasa",
        summary:    "Complete this form to add a new Book.",
        help:       "Title, Author and Numbers of copies are required."
      }
    }
  },
  labels: {
    deletePrefix: "Hey, pay attention!! The delete action is unrecoverable!! You are about to delete ",
    deleteSuffix: "Are you 110% positive?",
    noItemsFound: "No books found."
  }
});
