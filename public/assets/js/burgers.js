console.log('loaded!');

// waiting to attach  handlers until the DOM is loaded
$(function() {

  $('.addBurger').on('click', function(event) {
    event.preventDefault();
    let newBurger = {
      burger_name: $('#newBurger').val().trim(),
      devoured: 0
    };

    console.log(newBurger);

    $.ajax('/api/burgers', {
      type: 'POST',
      data: newBurger
    }).then(
      function() {
        console.log('new burger!');
        location.reload();
      }
    )
  });

  $('.minibutton').on('click', function(event) {
    let id = $(this).data('id');

    let eaten = {
      devoured: 1
    }
    
    $.ajax('/api/burgers/' + id, {
      type: 'PUT',
      data: eaten,
    }).then(
      function() {
        console.log('you ate it');
        // reload
        location.reload();
      }
    )
  })
});