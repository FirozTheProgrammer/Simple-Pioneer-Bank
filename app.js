function inputValue() {
  const button = document.getElementById("button");

  button.addEventListener("click", function () {
    const email = document.querySelector(".email").value;
    const password = document.querySelector(".password").value;

    if (email.length <= 3) {
      alert("Invalid email");
    }

    if (password.length <= 6) {
      alert("Enter password at least 6 number");
    } else {
      const loginArea = document.querySelector(".login");
      loginArea.style.display = "none";

      const transaction = document.querySelector(".transaction_area");
      transaction.style.display = "block";
    }
  });
}

inputValue();

// diposit calculation

function diposit() {
  const dipoBtn = document.querySelector("#deposit");
  dipoBtn.addEventListener("click", function () {
    const dipositAmount = document.getElementById("dipositInput").value;
    const dipoInput = parseFloat(dipositAmount);
    const currentdeposite =
      document.getElementById("currentdeposite").innerText;
    const currentdepositeparse = parseFloat(currentdeposite);
    const total = dipoInput + currentdepositeparse;

    document.getElementById("currentdeposite").innerText = total;
    document.getElementById("dipositInput").value = "";

    balanceDeposita(dipoInput);
  });
}
diposit();

function balanceDeposita(id) {
  const currentbalance = document.querySelector(".currentbalance").innerText;
  const mainBalance = parseFloat(currentbalance);
  const total = mainBalance + id;
  document.querySelector(".currentbalance").innerText = total;
}

//withdraw calsulation
function withdraw() {
  const dipoBtn = document.querySelector("#withdraw");
  dipoBtn.addEventListener("click", function () {
    const withdrawamount = document.getElementById("withdrawInput").value;
    const withdrawInput = parseFloat(withdrawamount);
    const currentwithdraw =
      document.getElementById("currentwithdraw").innerText;
    const currentwithdrawParse = parseFloat(currentwithdraw);

    const total = withdrawInput + currentwithdrawParse;

    document.getElementById("currentwithdraw").innerText = total;
    document.getElementById("withdrawInput").value = "";

    balanceWithdraw(withdrawInput);
  });
}
withdraw();

function balanceWithdraw(id) {
  const currentbalance = document.querySelector(".currentbalance").innerText;
  const mainBalance = parseFloat(currentbalance);
  const total = mainBalance - id;
  document.querySelector(".currentbalance").innerText = total;
}

document.getElementById("bank").innerText = " Your balance is  $983572938";

setTimeout(function () {
  document.getElementById("demo").innerHTML = new Date();
}, 3000);
