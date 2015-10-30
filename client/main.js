Router.configure({
  loadingTemplate: 'loading',
  layoutTemplate: 'Layout'
});

// Set the default Iron Router Route.
Router.route('/', {
  name: 'front',
  template: 'Frontpage'
});
