// Generated by CoffeeScript 1.3.1
(function() {

  $('form[data-validate="yes"]').on('submit', function(e) {
    return alert('validate');
  });

  $('form[data-validate="yes"]').each(function(i, el) {
    var $form, handlers, validation;
    $form = $(el);
    handlers = $form.data('events').submit;
    validation = handlers.pop();
    return handlers = handlers.splice(0, 0, validation);
  });

}).call(this);
