const email = document.getElementById("email")
let fail = document.getElementById("fail")

function validateData() {
  if (email.value.length == 0) {
    fail.innerText = "You must enter your email."
    return
  }

  const emailSliced = email.value.split("@")

  const expectedDomains = [
    "company.com",
    "gmail.com",
    "outlook.com",
    "hotmail.com",
  ]

  for (const expectedDomain of expectedDomains) {
    if (expectedDomain === emailSliced[1]) {
      let link = document.getElementById("link")
      link.setAttribute("href", "./success-pc.html?email=" + email.value)
      return
    }
  }

  fail.innerText = "You must enter a valid email."
  return
}

function loadSuccessScrean(){
  const searchParams = new URLSearchParams(window.location.search)
  let msg = document.getElementsByClassName("msg")
  msg[0].innerHTML = `A confirmation email has been sent to <strong>${searchParams.get('email')}</strong>. Please open it and click the button inside to confirm your subscription.`
}