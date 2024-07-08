// function myFunction() {
//     document.getElementById("myForm").reset();
//   }

  const button = document.getElementById('alert');
  button.addEventListener('click', function() {
    alert('Sent!');
  });

  const clear = document.getElementById('clear');
  button.addEventListener('click', function() {
    document.getElementById("myForm").reset();
  });