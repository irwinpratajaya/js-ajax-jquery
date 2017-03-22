$("button").click(function(){
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/',
    success: function(hex) {
      var numberId = Math.ceil(Math.random() * 9);
      $(`#${numberId}`).css("background-color", hex );
      console.log(numberId);
    }
  });
});
