function get_calc(btn) {
  if(btn.value == "=") {
    document.dentaku.display.value = eval(document.dentaku.display.value);
    result = eval(document.dentaku.display.value);
    parent = document.getElementById("history");
    li = document.createElement("li");
    li.innerHTML = result;
    parent.appendChild(li);
  } else if (btn.value == "C") {
    document.dentaku.display.value = "";
  } else {
    if (btn.value == "×") {
      btn.value = "*";
    } else if (btn.value == "÷") {
      btn.value = "/";
    }
    document.dentaku.display.value += btn.value;
    document.dentaku.multi_btn.value = "×";
    document.dentaku.div_btn.value = "÷";
  }
}
