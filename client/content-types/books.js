BooksCT = new ContentType({
  collection: Books,
  ctid: "book",
  endpoints: {
    books: {
      path: 'books',
      name: 'books',
      displays: {
        default: {
          helpers: {
            items: function () {
              var cursor = Books.find({});
              return {
                cursor: cursor,
                total: cursor.count()
              };
            }
          },
          events: {
            'click .book-view-detail': function (event) {
              Router.go('books.purchase', {_id: this._id});
            }
          }
        }
      }
    },
    book_purchase: {
      path: 'books/purchase/:_id',
      name: 'books.purchase',
      displays: {
        default: {
          helpers: {
            item: function () {
              var router = Router.current();
              return Books.findOne({_id:router.params._id});
            }
          },
          events: {
            'click .goto-checkout': function (event) {
              alert("I'm doing a checkout from the Book default display.");
            },
            'click .goto-detail': function (event) {
              BooksCT.setDisplay('book_purchase', 'full');
            }
          }
        },
        full: {
          helpers: {
            item: function () {
              var router = Router.current();
              return Books.findOne({_id:router.params._id});
            }
          },
          events: {
            'click .goto-checkout': function (event) {
              alert("I'm doing a checkout from the Book full display.");
            },
            'click .goto-default': function (event) {
              BooksCT.setDisplay('book_purchase', 'default');
            }
          }
        }
      }
    }
  }
});
