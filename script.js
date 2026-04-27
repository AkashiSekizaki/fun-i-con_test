document.getElementById("myInput").addEventListener("input", function () {
  let output = document.getElementById("output");
  output.textContent = "入力された値: " + this.value;
});

document.getElementById("myButton").addEventListener("click", function () {
  let output = document.getElementById("output");
  output.textContent = "ボタンがクリックされました！";
});
