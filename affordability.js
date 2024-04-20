  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Calculate your affordability</title>
    <style>
      
      .calculator-box {
        padding: 30px 20px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        max-width: 975px;
        width: 90%;
      }

      @media screen and (max-width: 929px) {
        .calculator-box {
          max-width: 600px;
          width: 70%;
        }
      }

      .calculator-box .title {
        padding: 0;
        margin: 0;
        margin-bottom: 20px;
        font-size: 36px;
      }

      @media screen and (max-width: 599px) {
        .calculator-box .title {
          font-size: 25px;
          text-align: center;
        }
      }

      .calculator {
        display: flex;
        gap: 40px;
      }

      @media screen and (max-width: 929px) {
        .calculator {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
      }

      .column {
        width: calc(50% - 20px);
      }

      @media screen and (max-width: 929px) {
        .column {
          width: 100%;
        }
      }

      .radio-group {
        display: flex;
        gap: 10px;
        margin-bottom: 25px;
      }

      @media screen and (max-width: 599px) {
        .radio-group {
          flex-direction: column;
          gap: 5px;
          margin-bottom: 20px;
        }
      }

      .radio-group input[type="radio"] {
        display: none;
      }

      .radio-group label {
        padding: 10px 15px;

        font-size: 14px;
        font-weight: 500;

        background-color: #f2f2f2;
        color: #333;
        border: 2px solid #d1d1d1;
        border-radius: 5px;

        cursor: pointer;
        transition: all 0.3s ease;
      }

      @media screen and (max-width: 599px) {
        .radio-group label {
          font-size: 12px;
        }
      }

      .radio-group label:hover,
      .radio-group input[type="radio"]:checked + label {
        background-color: #5645d0;
        border: 2px solid transparent;
        color: #fff;
      }

      .input-label {
        margin: 0;
        padding: 0;
        margin-bottom: 5px;
        font-size: 14px;
        color: #8b8b8b;
        font-weight: 500;
      }

      @media screen and (max-width: 599px) {
        .input-label {
          font-size: 12px;
        }
      }

      .input-container {
        display: flex;
        gap: 10px;
      }

      @media screen and (max-width: 929px) {
        .input-container {
          flex-direction: column;
        }
      }

      .input-container .input-box {
        width: calc(50% - 5px);
      }

      @media screen and (max-width: 929px) {
        .input-container .input-box {
          width: 100%;
        }
      }

      .input-box {
        display: flex;
        flex-direction: column;
      }

      .text-input {
        padding: 15px;
        font-size: 16px;
        border-radius: 5px;
        background-color: #f2f2f2;
        color: #333;
        border: 1px solid #d1d1d1;
      }

      .text-input::placeholder {
        font-size: 16px;
        color: #333;
      }

      @media screen and (max-width: 599px) {
        .text-input,
        .text-input::placeholder {
          font-size: 14px;
        }
      }

      .calculate-btn {
        margin-top: 20px;
        padding: 13px 40px;
        font-weight: 500;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI,
          Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, Oxygen,
          Fira Sans, Droid Sans, sans-serif;
        font-size: 16px;
        background-color: #5645d0;
        color: #fff;
        border: none;
        border-radius: 5px;

        cursor: pointer;
        transition: all 0.3 ease;
      }

      .calculate-btn:hover {
        background-color: #4d39e4;
      }

      @media screen and (max-width: 599px) {
        .calculate-btn {
          margin-top: 15px;
          font-size: 14px;
        }
      }

      .result-box {
        margin-bottom: 10px;
      }

      .result-box .text-box {
        display: flex;
        justify-content: space-between;
        align-items: end;
      }

      .result-box.ml {
        margin-left: 15px;
      }

      .result-box .text-box p {
        margin: 0;
        font-size: 16px;
      }

      .result-box .text-box p.l {
        font-size: 25px;
      }

      @media screen and (max-width: 599px) {
        .result-box .text-box p {
          font-size: 12px;
        }

        .result-box .text-box p.l {
          font-size: 18px;
        }
      }

      .result-box .text-box p:first-child {
        color: #8b8b8b;
        font-weight: 500;
      }

      .result-box .text-box p:last-child {
        color: #5645d0;
        font-weight: 700;
      }

      .result-box.unbold .text-box p {
        font-weight: 400;
      }

      .result-box.unbold .text-box p:last-child {
        font-weight: 500;
      }

      .result-box .text-box p.unbold {
        font-weight: 500;
      }

      .result-box .description {
        margin: 0;
        padding: 0;
        font-size: 14px;
        color: #cacaca;
      }

      @media screen and (max-width: 599px) {
        .result-box .description {
          margin: 0;
          padding: 0;
          font-size: 12px;
          color: #cacaca;
        }
      }

      .result-box .description:not(:last-child) {
        margin-top: 5px;
        margin-bottom: 2px;
      }

      @media screen and (max-width: 599px) {
        .result-box .description:not(:last-child) {
          margin-top: 2px;
          margin-bottom: 2px;
        }
      }

      .accordion-title {
        display: flex;
      }

      .char {
        display: block;
        width: 15px;
      }

      .line {
        background-color: #8b8b8b;
        height: 2px;
        width: 100%;
        margin-top: 20px;
        margin-bottom: 20px;
        opacity: 0.2;
      }

      .accordion-content {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.2s ease-out;
        background: white;
        padding: 15px 0px 0px 15px;
      }

      #accordion-button-1 {
        cursor: pointer;
      }

      .accordion-item {
        display: none;
      }

      [aria-expanded="true"] ~ .accordion-content {
        max-height: 500px;
      }
    </style>
  </head>

  <body>
    <div class="calculator-box">
      <h2 class="title">Calculate your affordability</h2>
      <div class="calculator second">
        <div class="column">
          <div>
            <p class="input-label">Residency Status</p>
            <div class="radio-group">
              <input
                type="radio"
                id="uaeResident"
                name="residency"
                value="UAE Resident"
                checked
              />
              <label for="uaeResident" class="radio">UAE Resident</label>

              <input
                type="radio"
                id="uaeNational"
                name="residency"
                value="UAE National"
              />
              <label for="uaeNational" class="radio">UAE National</label>

              <input
                type="radio"
                id="nonResident"
                name="residency"
                value="Non Resident"
              />
              <label for="nonResident" class="radio">Non Resident</label>
            </div>
          </div>

          <div>
            <p class="input-label">Employment Type</p>
            <div class="radio-group">
              <input
                type="radio"
                id="employed"
                name="employment"
                value="Employed"
                checked
              />
              <label for="employed" class="radio">Employed</label>
              <input
                type="radio"
                id="selfEmployed"
                name="employment"
                value="Self-employed"
              />
              <label for="selfEmployed" class="radio">Self-employed</label>
            </div>
          </div>

          <div class="input-container">
            <div class="input-box">
              <label for="monthlyIncome" class="input-label"
                >Monthly Income</label
              >
              <input
                class="text-input"
                type="text"
                id="monthlyIncome"
                placeholder="AED"
                step="1"
              />
            </div>

            <div class="input-box">
              <label for="monthlyDebt" class="input-label">Monthly Debt</label>
              <input
                class="text-input"
                type="text"
                id="monthlyDebt"
                placeholder="AED"
                step="1"
              />
            </div>
          </div>

          <!-- <button class="calculate-btn" onclick="calculate()">Calculate</button> -->
        </div>

        <div class="column">
          <div id="results"></div>
          <div class="accordion">
            <div class="accordion-item">
              <div
                class="result-box"
                id="accordion-button-1"
                aria-expanded="false"
              >
                <div class="text-box">
                  <p class="accordion-title"><span class="char">+</span>Fees</p>
                  <p class="unbold">
                    AED <span class="accordion-value"></span>
                  </p>
                </div>
              </div>
              <div class="accordion-content" id="fees"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <script>
      const monthlyDebtInput = document.getElementById("monthlyDebt");
      monthlyDebtInput.value = 0;

      function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }

      const numberInput = document.querySelectorAll(".text-input");

      numberInput.forEach((input) => {
        let previousValue = input.value;

        input.addEventListener("input", function (event) {
          const cleanedValue = this.value.replace(/[^\d]/g, "");
          const [integerPart, decimalPart] = cleanedValue.split(".");

          const formattedIntegerPart = integerPart.replace(
            /\B(?=(\d{3})+(?!\d))/g,
            ","
          );

          const formattedValue = decimalPart
            ? `${formattedIntegerPart}.${decimalPart}`
            : formattedIntegerPart;

          this.value = formattedValue;
        });
      });

      document.getElementById("monthlyIncome").oninput = function () {
        calculate();
      };

      monthlyDebtInput.oninput = function () {
        calculate();
      };

      document
        .querySelectorAll(".accordion-item #accordion-button-1")
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

      function calculate() {
        const checkedRadio = document.querySelector(
          'input[name="residency"]:checked'
        );

        const monthlyIncomeInput = document.getElementById("monthlyIncome");
        const monthlyDebtInput = document.getElementById("monthlyDebt");

        if (
          !checkedRadio ||
          !monthlyIncomeInput.value.replace(/[^\d]/g, "") ||
          !monthlyDebtInput.value.replace(/[^\d]/g, "")
        ) {
          // alert("Please fill in all fields");
          return;
        }

        document.querySelector(".accordion-item").style.display = "block";
        const feeValue = document.querySelector(".accordion-value");

        // Constants
        const DTIRatio = 0.55;
        const annualInterestRate = 0.0399;
        const monthlyInterestRate = annualInterestRate / 12;

        // Inputs
        const residency = document.querySelector(
          'input[name="residency"]:checked'
        ).value;
        // const employment = document.querySelector(
        //   'input[name="employment"]:checked'
        // ).value;
        const monthlyIncome = parseFloat(
          document.getElementById("monthlyIncome").value.replace(/[^\d]/g, "")
        );
        const monthlyDebt = parseFloat(
          document.getElementById("monthlyDebt").value.replace(/[^\d]/g, "")
        );

        // Calculations based on residency
        let tenorInMonths, multiplier;
        if (residency === "UAE Resident") {
          tenorInMonths = 300;
          multiplier = 0.8;
        } else if (residency === "UAE National") {
          tenorInMonths = 360;
          multiplier = 0.85;
        } else if (residency === "Non Resident") {
          tenorInMonths = 300;
          multiplier = 0.8;
        }

        // Home Affordability
        const homeAffordability = Math.round(
          ((monthlyIncome * DTIRatio - monthlyDebt) /
            (monthlyInterestRate *
              Math.pow(1 + monthlyInterestRate, tenorInMonths))) *
            (Math.pow(1 + monthlyInterestRate, tenorInMonths) - 1)
        );

        // Maximum Eligible Financing
        const maxEligibleFinancing = Math.round(homeAffordability * multiplier);

        // Down Payment
        const downPayment = Math.round(homeAffordability * (1 - multiplier));

        // Land Department Fee
        const landDepartmentFee = Math.round(0.04 * homeAffordability + 580);

        // Registration Fee
        let registrationFee;
        if (homeAffordability > 50000) {
          registrationFee = Math.round(4000 * (1 + 0.05));
        } else {
          registrationFee = Math.round(2000 * (1 + 0.05));
        }

        // Mortgage Registration Fee
        const mortgageRegistrationFee = Math.round(
          0.0025 * (homeAffordability - downPayment) + 10
        );

        // Bank Arrangement Fee
        const bankArrangementFee = Math.round(
          0.01 * (homeAffordability - downPayment) * (1 + 0.05)
        );

        // Valuation Fee
        const valuationFee = Math.round(3000 * (1 + 0.05));

        // Real Estate Agency Fee
        const realEstateAgencyFee = Math.round(
          homeAffordability * 0.02 * (1 + 0.05)
        );

        // Mortgage Upfront Costs
        const mortgageUpfrontCosts = Math.round(
          downPayment +
            landDepartmentFee +
            registrationFee +
            mortgageRegistrationFee +
            bankArrangementFee +
            valuationFee
        );

        // Monthly Payment
        const monthlyPayment = Math.round(
          monthlyIncome * DTIRatio - monthlyDebt
        );

        // Display results
        const resultsDiv = document.getElementById("results");
        const feesDiv = document.getElementById("fees");

        resultsDiv.innerHTML = `
        <div class="result-box">
          <div class="text-box">
            <p>Home Affordability</p>
            <p class="l">AED ${numberWithCommas(homeAffordability)}</p>
          </div>
        </div>
        <div class="result-box">
          <div class="text-box">
            <p>Monthly Payment</p>
            <p>AED ${numberWithCommas(monthlyPayment)}</p>
          </div>
        </div>

        <div class="line"></div>

        <div class="result-box">
          <div class="text-box">
            <p>Mortgage Upfront Costs</p>
            <p class="unbold">AED ${numberWithCommas(mortgageUpfrontCosts)}</p>
          </div>
        </div>
        <div class="result-box ml">
          <div class="text-box">
            <p>Down Payment</p>
            <p class="unbold">AED ${numberWithCommas(downPayment)}</p>
          </div>
        </div>`;

        const fee =
          landDepartmentFee +
          registrationFee +
          mortgageRegistrationFee +
          bankArrangementFee +
          realEstateAgencyFee;

        feeValue.innerHTML = `${numberWithCommas(fee)}`;

        feesDiv.innerHTML = `
        <div class="result-box unbold">
          <div class="text-box">
            <p>Land Department Fee</p>
            <p>AED ${numberWithCommas(landDepartmentFee)}</p>
          </div>
          <p class="description">4% of the property value + 580 AED admin fee</p>
        </div>
        <div class="result-box unbold">
          <div class="text-box">
            <p>Registration Fee</p>
            <p>AED ${numberWithCommas(registrationFee)}</p>
          </div>
          <p class="description">4,000 AED for properties over 500,000 AED + 5% VAT</p>
          <p class="description">2,000 AED for properties over 500,000 AED + 5% VAT</p>
        </div>
        <div class="result-box unbold">
          <div class="text-box">
            <p>Mortgage Registration Fee</p>
            <p>AED ${numberWithCommas(mortgageRegistrationFee)}</p>
          </div>
          <p class="description">0.25% of the loan amount + 10 AED admin fee</p>
        </div>
        <div class="result-box unbold">
          <div class="text-box">
            <p>Bank Arrangement Fee</p>
            <p>AED ${numberWithCommas(bankArrangementFee)}</p>
          </div>
          <p class="description">Between 0% to 1% of the loan amount + 5% VAT</p>
        </div>
        <div class="result-box unbold">
          <div class="text-box">
            <p>Real Estate Agency Fee</p>
            <p>AED ${numberWithCommas(realEstateAgencyFee)}</p>
          </div>
          <p class="description">Typically 2% of the property value + 5% VAT</p>
        </div>
        <div class="result-box unbold">
          <div class="text-box">
            <p>Valuation Fee</p>
            <p>AED ${numberWithCommas(valuationFee)}</p>
          </div>
          <p class="description">Between 2,500 and 3,000 AED + 5% VAT</p>
        </div>`;
      }
    </script>
  </body>
