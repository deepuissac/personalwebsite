$(document).ready(function () {
  $("#contactform").validate({
    rules: {
      fullname: {
        required: true,
        minlength: 4,
      },
      email: {
        required: true,
        email: true,
      },
    },
  });
});
