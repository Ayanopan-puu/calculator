function get_calc(btn) {
  if (btn.value == "=") {
    document.myForm.myLine.value = eval(document.myForm.myLine.value);
  } else if (btn.value == "Ⅽ") {
    document.myForm.myLine.value = "";
  } else {
    if (btn.value == "×") {
      btn.value = "*";
    } else if (btn.value == "÷") {
      btn.value = "/";
    }
    document.myForm.myLine.value += btn.value;
    document.myForm.X_btn.value = "×";
    document.myForm.W_btn.value = "÷";
  }
}
