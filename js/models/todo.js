// I guess this is where the js for the todos will go

var app = app || {};

// Todo Model
// ----------
// Our basic **Todo** model has `title` and `completed` attributes.

app.Todo = Backbone.Model.extend({

  // Default attributes ensure that each todo created has `title` and `completed` keys.
  defaults: {
    title: '',
    completed: false
  },

  // Toggle the `completed` state of this todo item.
  toggle: function() {

    console.log(this.get("title").slice(-5));
    if(this.get("title").slice(-5 ) == "nezo!"){
      this.save({
        completed: !this.get('completed')
      });

    }
    else{
      this.save({
        title: this.get("title") + "  --donezo!",
        completed: !this.get('completed')
      });
    }
  }

});
