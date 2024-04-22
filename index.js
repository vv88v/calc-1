
const checkedRadio = document.querySelector(
  'input[name="residency1"]:checked'
);
const propertyPriceInput = document.getElementById("propertyPrice1");
const downPaymentInput = document.getElementById("downPayment1");
const inputRange = document.querySelector(".input-range");
const tenorInput = document.getElementById("tenor1");

updateTenorMax1();

function updateTenorMax1() {
  const selection = checkedRadio.value;
  const tenorOutput = document.getElementById("tenorValue1");

  tenorInput.max = selection === "UAE National" ? 30 : 25;
  tenorInput.value = tenorInput.max;
  tenorOutput.textContent = tenorInput.max;

  for (let e of document.querySelectorAll(
    'input[type="range"].slider-progress'
  )) {
    e.style.setProperty("--value", e.value);
    e.style.setProperty("--min", e.min == "" ? "0" : e.min);
    e.style.setProperty("--max", e.max == "" ? "100" : e.max);
    e.addEventListener("input", () =>
      e.style.setProperty("--value", e.value)
    );
  }
}

propertyPriceInput.oninput = function () {
  const cleanedValue = this.value.replace(/[^\d]/g, "");
  const formattedValue = cleanedValue.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ","
  );

  this.value = formattedValue;

  const propertyPrice = parseInt(this.value.replace(/[^\d]/g, ""));
  let downPayment;

  if (!isNaN(propertyPrice)) {
    const selection = document.querySelector(
      'input[name="residency1"]:checked'
    ).value;

    if (selection === "UAE Resident") {
      downPayment = Math.round(propertyPrice * 0.2);
    } else if (selection === "UAE National") {
      downPayment = Math.round(propertyPrice * 0.15);
    } else if (selection === "Non Resident") {
      downPayment = Math.round(propertyPrice * 0.2);
    } else {
      downPayment = 0;
    }

    const downPaymentFormatted = formatNumber1(downPayment);
    const downPaymentInput = document.getElementById("downPayment1");
    downPaymentInput.value = downPaymentFormatted;
  }

  percentageChange();
  calculate1();
};

downPaymentInput.oninput = function () {
  const cleanedValue = this.value.replace(/[^\d]/g, "");
  const formattedValue = cleanedValue.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ","
  );

  this.value = formattedValue;

  percentageChange();
  calculate1();
};

const residencyRadios = document.querySelectorAll(
  'input[name="residency"]'
);

residencyRadios.forEach((radio) => {
  radio.addEventListener("change", calculate);
});

function updateDownPayment1() {
  const propertyPrice = propertyPriceInput.value.replace(/[^\d]/g, "");

  if (!isNaN(propertyPrice)) {
    const selection = document.querySelector(
      'input[name="residency1"]:checked'
    ).value;
    let downPaymentPercentage;

    switch (selection) {
      case "UAE Resident":
      case "Non Resident":
        downPaymentPercentage = 0.2;
        break;
      case "UAE National":
        downPaymentPercentage = 0.15;
        break;
      default:
        downPaymentPercentage = 0;
        break;
    }

    const downPayment = Math.round(propertyPrice * downPaymentPercentage);

    downPaymentInput.min = downPayment;

    if (
      parseInt(downPaymentInput.value.replace(/[^\d]/g, "")) >
      parseInt(propertyPrice)
    ) {
      downPaymentInput.value = propertyPrice.replace(
        /\B(?=(\d{3})+(?!\d))/g,
        ","
      );
      percentageChange();
      alert("Down payment cannot exceed the property price");
    }

    if (
      parseInt(downPaymentInput.value.replace(/[^\d]/g, "")) < downPayment
    ) {
      downPaymentInput.value = formatNumber1(downPayment);
      percentageChange();
      alert(
        "Down payment cannot be less than the minimum required amount"
      );
    }
  }
  calculate1();
}

function percentageChange() {
  const propertyPrice = propertyPriceInput.value.replace(/[^\d]/g, "");
  const downPayment = downPaymentInput.value.replace(/[^\d]/g, "");

  const percentageOutput = document.querySelector(
    ".input-box .percentage"
  );

  if (
    !isNaN(propertyPrice) &&
    !isNaN(downPayment) &&
    propertyPrice !== ""
  ) {
    const percentage = Math.round((downPayment / propertyPrice) * 100);
    percentageOutput.textContent = `${percentage}%`;
    percentageOutput.style.display = "block";
    if (isNaN(percentage)) {
      percentageOutput.style.display = "none";
    }
  } else {
    percentageOutput.style.display = "none";
  }
}

function calculate1() {
  const feeValue1 = document.querySelector(".accordion-value1");
  const selection = document.querySelector(
    'input[name="residency1"]:checked'
  ).value;
  const propertyPrice = propertyPriceInput.value.replace(/[^\d]/g, "");

  if (!isNaN(propertyPrice) && propertyPrice && propertyPrice > 0) {
    document.querySelector(".accordion-item1").style.display = "block";
    let downPayment;
    let tenor;

    if (selection === "UAE Resident" || selection === "Non Resident") {
      downPayment = parseInt(
        document
          .getElementById("downPayment1")
          .value.replace(/[^\d]/g, "")
      );
      tenor = parseInt(tenorInput.value); // Extract tenor from input value
    } else if (selection === "UAE National") {
      downPayment = parseInt(
        document
          .getElementById("downPayment1")
          .value.replace(/[^\d]/g, "")
      );
      tenor = parseInt(tenorInput.value); // Extract tenor from input value
    }

    // First calculation with annual interest rate of 3.99%
    const monthlyInterestRate1 = 0.0399 / 12;
    const monthlyPayment1 = Math.round(
      ((propertyPrice - downPayment) *
        monthlyInterestRate1 *
        Math.pow(1 + monthlyInterestRate1, tenor * 12)) /
        (Math.pow(1 + monthlyInterestRate1, tenor * 12) - 1)
    );

    // Second calculation with annual interest rate of 4.19%
    const monthlyInterestRate2 = 0.0419 / 12;
    const monthlyPayment2 = Math.round(
      ((propertyPrice - downPayment) *
        monthlyInterestRate2 *
        Math.pow(1 + monthlyInterestRate2, tenor * 12)) /
        (Math.pow(1 + monthlyInterestRate2, tenor * 12) - 1)
    );

    // Third calculation with annual interest rate of 7.00%
    const monthlyInterestRate3 = 0.07 / 12;
    const monthlyPayment3 = Math.round(
      ((propertyPrice - downPayment) *
        monthlyInterestRate3 *
        Math.pow(1 + monthlyInterestRate3, tenor * 12)) /
        (Math.pow(1 + monthlyInterestRate3, tenor * 12) - 1)
    );

    const landDepartmentFee = Math.round(0.04 * propertyPrice + 580);
    const registrationFee = Math.round(
      propertyPrice > 50000 ? 4000 * (1 + 0.05) : 2000 * (1 + 0.05)
    );
    const mortgageRegistrationFee = Math.round(
      0.0025 * (propertyPrice - downPayment) + 10
    );
    const bankArrangementFee = Math.round(
      0.01 * (propertyPrice - downPayment) * (1 + 0.05)
    );
    const valuationFee = Math.round(3000 * (1 + 0.05));

    const mortgageUpfrontCosts =
      downPayment +
      landDepartmentFee +
      registrationFee +
      mortgageRegistrationFee +
      bankArrangementFee +
      valuationFee +
      monthlyPayment1 +
      monthlyPayment2 +
      monthlyPayment3;

    const fee1 =
      landDepartmentFee +
      registrationFee +
      mortgageRegistrationFee +
      bankArrangementFee +
      valuationFee;

    feeValue1.innerHTML = `${formatNumber1(fee1)}`;

    const resultsDiv = document.getElementById("results1");
    const feesDiv = document.getElementById("fees1");

    resultsDiv.innerHTML = `
    <div class="result-box">
      <div class="text-box">
        <p>Loan Amount</p>
        <p class="l">AED ${formatNumber1(propertyPrice - downPayment)}</p>
      </div>
    </div>

    <div class="line"></div>

    <table class="monthly-payments-box">
      <tr>
        <th></th>
        <th>3yr fixed</th>
        <th>5yr fixed</th>
        <th>variable</th>
      </tr>
      <tr>
        <td class="td-title">Monthly Payment</td>
        <td>AED ${formatNumber1(monthlyPayment1)}</td>
        <td>AED ${formatNumber1(monthlyPayment2)}</td>
        <td>AED ${formatNumber1(monthlyPayment3)}</td>
      </tr>
      <tr>
        <td></td>
        <td class="monthly-percent">(3.99%)</td>
        <td class="monthly-percent">(4.19%)</td>
        <td class="monthly-percent">(7%)</td>
      </tr>
    </table>

    <div class="line"></div>

    <div class="result-box">
      <div class="text-box">
        <p>Upfront Costs</p>
        <p class="unbold">AED ${formatNumber1(mortgageUpfrontCosts)}</p>
      </div>
    </div>
    <div class="result-box ml">
      <div class="text-box">
        <p>Down Payment</p>
        <p class="unbold">AED ${formatNumber1(downPayment)}</p>
      </div>
    </div>`;

    feesDiv.innerHTML = `
    <div class="result-box unbold">
      <div class="text-box">
        <p>Land Department Fee</p>
        <p>AED ${formatNumber1(landDepartmentFee)}</p>
      </div>
      <p class="description">4% of the property value + 580 AED admin fee</p>
    </div>
    <div class="result-box unbold">
      <div class="text-box">
        <p>Registration Fee</p>
        <p>AED ${formatNumber1(registrationFee)}</p>
      </div>
      <p class="description">
        4,000 AED for properties over 500,000 AED + 5% VAT
      </p>
      <p class="description">
        2,000 AED for properties over 500,000 AED + 5% VAT
      </p>
    </div>
    <div class="result-box unbold">
      <div class="text-box">
        <p>Mortgage Registration Fee</p>
        <p>AED ${formatNumber1(mortgageRegistrationFee)}</p>
      </div>
      <p class="description">0.25% of the loan amount + 10 AED admin fee</p>
    </div>
    <div class="result-box unbold">
      <div class="text-box">
        <p>Bank Arrangement Fee</p>
        <p>AED ${formatNumber1(bankArrangementFee)}</p>
      </div>
      <p class="description">Between 0% to 1% of the loan amount + 5% VAT</p>
    </div>
    <div class="result-box unbold">
      <div class="text-box">
        <p>Valuation Fee</p>
        <p>AED ${formatNumber1(valuationFee)}</p>
      </div>
      <p class="description">Between 2,500 and 3,000 AED + 5% VAT</p>
    </div>`;
  } else {
    return;
  }
}

function updateTenorValue1() {
  const tenor = tenorInput.value;
  document.getElementById("tenorValue1").textContent = tenor;

  calculate1();
}

function formatNumber1(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

document
  .querySelectorAll(".accordion-item1 #accordion-button-11")
  .forEach((button) => {
    button.addEventListener("click", () => {
      const expanded =
        button.getAttribute("aria-expanded") === "true" || false;
      button.setAttribute("aria-expanded", !expanded);

      const buttonTitleElement = document.querySelector(
        ".accordion-title .char"
      );

      if (buttonTitleElement) {
        const buttonTitle = buttonTitleElement.textContent.trim();

        if (buttonTitle === "+") {
          buttonTitleElement.textContent = "-";
        } else if (buttonTitle === "-") {
          buttonTitleElement.textContent = "+";
        }
      }
    });
  });
