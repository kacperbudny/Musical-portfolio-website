function validateForm() {
  var x1 = document.forms["newsletter"]["name"].value;
  var x2 = document.forms["newsletter"]["email"].value;
  if (x1 == "" || x2=="") {
    alert("Nie wypełniłeś wszystkich pól!.");
    return false;
  }
}

function validateFormContact() {
  var x1 = document.forms["contact"]["name"].value;
  var x2 = document.forms["contact"]["email"].value;
  var x3 = document.forms["contact"]["message"].value;
  if (x1 == "" || x2=="" || x3=="") {
    alert("Nie wypełniłeś wszystkich pól!.");
    return false;
  }
}
