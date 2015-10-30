BooksCT = new ContentType({
  collection: Books,
  ctid: "book",
  endpoints: {
    create: {
      displays: {
        default: {
          helpers: {
            meta: {
              title: "Create your new Book",
              help: "Title, Author and Number of copies are mandatory."
            }
          }
        }
      }
    }
  }
});
