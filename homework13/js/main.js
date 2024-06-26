const form = document.querySelector(".form");
const formEl = form.querySelectorAll("[data-value]");

const onSubmit = (event) => {
  event.preventDefault();

  const name = event.currentTarget.elements.name;
  const message = event.currentTarget.elements.message;
  const phone = event.currentTarget.elements.phone;
  const email = event.currentTarget.elements.email;
  const formData = {
    name: name.value,
    message: message.value,
    phone: phone.value,
    email: email.value,
  };
  validateForm();
  form.reset();
  console.log(formData);
};

form.addEventListener("submit", onSubmit);

function validateForm() {
  formEl.forEach((element) => {
    const error = document.createElement("span");
    const regPnone = /^(\+380)[0-9]{9}$/;
    const correctEmail = /^\w+@\w+\.\w{2,4}$/i;
    const regMessage = /[0-9a-zA-Z!@#$%^&*]{5,}/g;
    const validMes = regMessage.test(element.value);
    const validationPhone = regPnone.test(element.value);
    const validationEmail = correctEmail.test(element.value);

    if (element.value.trim().length === 0) {
      error.textContent = "Required fild";
      error.classList.add("active");
      element.parentNode.append(error);
      element.classList.add("invalid");
      return false;
    }

    if (element.type === "tel" && !validationPhone) {
      error.textContent =
        "Required fild! The number must start with +380 and have 9 digits";
      error.classList.add("active");
      element.classList.add("invalid");
      element.parentNode.append(error);
      return false;
    }

    if (element.type === "email" && !validationEmail) {
      error.textContent = "Required fild! Email must have @ and a dot";
      error.classList.add("active");
      element.parentNode.append(error);
      return false;
    }
    if (element.type === "textarea" && !validMes) {
      error.textContent = "Text field at least 5 characters";
      error.classList.add("active");
      element.parentNode.append(error);
      element.classList.add("invalid");
      return false;
    }
    return true;
  });
}
