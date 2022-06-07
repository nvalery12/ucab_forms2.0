function showPassword() {
  document.getElementById('inputPass').type = "text";
  document.getElementById('hidePassword').style.display = 'inline';
  document.getElementById('showPassword').style.display = 'none';
}

function hidePassword() {
  document.getElementById('inputPass').type = "password";
  document.getElementById('hidePassword').style.display = 'none';
  document.getElementById('showPassword').style.display = 'inline';
}

// Mientras descubro como rayos se hace

function showPassword1() {
  document.getElementById('inputPass1').type = "text";
  document.getElementById('hidePassword1').style.display = 'inline';
  document.getElementById('showPassword1').style.display = 'none';
}

function hidePassword1() {
  document.getElementById('inputPass1').type = "password";
  document.getElementById('hidePassword1').style.display = 'none';
  document.getElementById('showPassword1').style.display = 'inline';
}

function showconfPassword() {
  document.getElementById('confinputPass').type = "text";
  document.getElementById('confhidePassword').style.display = 'inline';
  document.getElementById('confshowPassword').style.display = 'none';
}

function hideconfPassword() {
  document.getElementById('confinputPass').type = "password";
  document.getElementById('confhidePassword').style.display = 'none';
  document.getElementById('confshowPassword').style.display = 'inline';
}

// Que fastidio

var check = function() {
  if (document.getElementById('password1').value == document.getElementById('confpassword').value) {
    document.getElementById('confpassword').style.border = "green";
    document.getElementById('confpassword').style.borderWidth = "1px";
  } else {
    document.getElementById('confpassword').style.border = "red";
    document.getElementById('confpassword').style.borderWidth = "1px";
  }
}

function toggleFrom() {
  section = document.querySelector('section');
  container = document.querySelector('.container');
  container.classList.toggle('active');
  section.classList.toggle('active');
}