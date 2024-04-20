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
