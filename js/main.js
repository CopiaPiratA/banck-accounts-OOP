class BankAccount {
    constructor() {
      this.openingBalance = 0;
      this.userBalance = 4000;
      this.finalAmount = 0;
      this.interest = 0;
      this.months = document.getElementById("months-inp");
      this.showUserBalance = document.getElementById("user-balance");
      this.openingBalanceShow = document.getElementById("opening-balance");
      this.finalAmountShow = document.getElementById("final-amount");
      this.showInterest = document.getElementById("monthly-interest-pharaph");
      this.buttons = [...document.getElementsByTagName('button')];
      this.initialize();
    }
  
    initialize() {
      this.months.addEventListener("change", () => {
        document.getElementById("number-of-months").innerHTML = `${this.months.value} Meses`;
        this.finalAmount = ((this.openingBalance * (this.interest / 100)) * this.months.value) + this.openingBalance;
        this.finalAmountShow.innerHTML = `Monto Final: ${this.finalAmount} USD`;
      });
  
      this.buttons.forEach(button => button.addEventListener("click", () => {
        if (button.id === "deposit-btn") {
          let deposit = parseInt(prompt("depositar"));
          this.depositMoney(deposit);
        } else {
          if (this.openingBalance === 0) {
            alert("no hay dinero que sacar");
          } else {
            let withdraw = parseInt(prompt("retiro"));
            this.withdrawMoney(withdraw);
          }
        }
        this.showInterest.innerHTML = `Interés: ${this.interest}%`;
        this.finalAmount = ((this.openingBalance * (this.interest / 100)) * this.months.value) + this.openingBalance;
        this.openingBalanceShow.innerHTML = `Monto Inicial: ${this.openingBalance} USD`;
        this.finalAmountShow.innerHTML = `Monto Final: ${this.finalAmount} USD`;
        this.showUserBalance.innerHTML = `Saldo: ${this.userBalance} USD`;
      }));
    }
  
    depositMoney(amount) {
      this.openingBalance += amount;
      this.userBalance -= amount;
      this.interest = parseInt(prompt("interés: %"));
    }
  
    withdrawMoney(amount) {
      this.finalAmount -= amount;
      this.userBalance += amount;
      if (this.finalAmount >= 0) {
        this.openingBalance = this.finalAmount;
        if (this.finalAmount > 0) {
          this.interest = parseInt(prompt("Dejar el resto a un interés de: %"));
        } else {
          this.showInterest.innerHTML = "Interés: 0%";
        }
      } else {
        alert("no tiene dinero suficiente");
      }
    }
  }
  
  const bankAccount = new BankAccount();

