function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var address = document.getElementById("address").value;
  var city = document.getElementById("city").value;
  var county = document.getElementById("county").value;
  var post = document.getElementById("post").value;
  var cardname = document.getElementById("cardname").value;
  var cardnumber = document.getElementById("cardnumber").value;
  var expmonth = document.getElementById("expmonth").value;
  var expyear = document.getElementById("expyear").value;
  var cvv = document.getElementById("cvv").value;

  if (name == "" || email == "" || address == "" || city == "" || county == "" || post == "" || cardname == "" || cardnumber == "" || expmonth == "" || expyear == "" || cvv == "") {
    alert("Please fill in all required fields");
    return false;
  }

  if (!/^[A-Za-z\s]+$/.test(name)) {
    alert("Name can only contain letters and spaces");
    return false;
  }

  if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }

  if (!/^[0-9]+$/.test(zip)) {
    alert("Zip code can only contain numbers");
    return false;
  }

  if (!/^[0-9]{16}$/.test(cardnumber)) {
    alert("Please enter a valid 16-digit card number");
    return false;
  }

  if (!/^[0-9]{3}$/.test(cvv)) {
    alert("CVV must be a 3-digit number");
    return false;
  }

  return true;
}
