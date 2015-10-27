
// Set the default Iron Router Route.
Router.route('/', function () {
  this.render('Frontpage');
});

BooksCT = new ContentType({
  collection:   Books, // The collection defined above.
  ctid:         "books", // The unique identifier for this content type.
  title:        "Books", // Human redable name.
  meta: {
    title:      "Books",
    summary:    "A book is a set of written, printed, illustrated, or blank sheets, made of ink, paper, parchment, or other materials, fastened together to hinge at one side. See https://en.wikipedia.org/wiki/Book",
    help:       "A book could not have a summary but it must have a title."
  }
});