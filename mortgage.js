<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Calculate your mortgage</title>
  </head>
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

    .column1 {
      width: 45%;
    }

    .column2 {
      width: calc(55% - 40px);
    }

    @media screen and (max-width: 929px) {
      .column1,
      .column2 {
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

    .input-box {
      position: relative;
      display: flex;
      flex-direction: column;
    }

    .input-box:nth-child(2),
    .input-box:nth-child(3) {
      margin-bottom: 25px;
    }

    .input-box .percentage {
      position: absolute;
      bottom: 0px;
      right: 2px;
      font-size: 16px;
      background-color: #f2f2f2;
      padding-right: 20px;
      padding-left: 20px;
    }

    @media screen and (max-width: 599px) {
      .input-box .percentage {
        bottom: 1px;
        font-size: 14px;
      }
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

    .range-box {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5px;
    }

    .calculate-btn {
      margin-top: 20px;
      padding: 13px 40px;
      font-weight: 500;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI,
        Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, Oxygen, Fira Sans,
        Droid Sans, sans-serif;
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
        font-size: 16px;
      }

      .result-box .text-box p.l {
        font-size: 16px;
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

    .accordion-title,
    .accordion-title1 {
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

    .monthly-payments-box {
      width: 100%;
      font-size: 16px;
      color: #8b8b8b;
    }

    @media screen and (max-width: 599px) {
      .monthly-payments-box {
        font-size: 12px;
      }
    }

    .monthly-payments-box tr,
    .monthly-payments-box th,
    .monthly-payments-box td {
      padding: 5px;
      margin: 0;
    }

    .monthly-payments-box td {
      padding-bottom: 2px;
    }

    @media screen and (max-width: 599px) {
      .monthly-payments-box tr,
      .monthly-payments-box th,
      .monthly-payments-box td {
        padding: 2px;
      }
    }

    .monthly-payments-box .td-title {
      text-align: left;
      padding: 0;
      color: #8b8b8b;
      font-weight: 500;
    }

    .monthly-payments-box th {
      font-weight: 500;
      padding-bottom: 10px;
    }

    .monthly-payments-box td {
      text-align: center;
      color: #5645d0;
      font-weight: 700;
    }

    .monthly-payments-box .monthly-percent {
      padding: 0;
      padding-bottom: 5px;
      font-size: 12px;
      color: #adadad;
      font-weight: 400;
    }

    @media screen and (max-width: 599px) {
      .monthly-payments-box .monthly-percent {
        font-size: 10px;
      }
    }

    .accordion-content1 {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.2s ease-out;
      background: white;
      padding: 15px 0px 0px 15px;
    }

    #accordion-button-11 {
      cursor: pointer;
    }

    .accordion-item1 {
      display: none;
    }

    [aria-expanded="true"] ~ .accordion-content1 {
      max-height: 500px;
    }

    input[type="range"].input-range {
      height: 2.5em;
      width: 200px;
      -webkit-appearance: none;
    }

    /*progress support*/
    input[type="range"].input-range.slider-progress {
      --range: calc(var(--max) - var(--min));
      --ratio: calc((var(--value) - var(--min)) / var(--range));
      --sx: calc(0.5 * 1.4em + var(--ratio) * (100% - 1.4em));
    }

    input[type="range"].input-range:focus {
      outline: none;
    }

    /*webkit*/
    input[type="range"].input-range::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 1.4em;
      height: 1.4em;
      border-radius: 1em;
      background: #fff;
      border: none;
      box-shadow: 0 0 2px black;
      margin-top: calc(max((0.7em - 1px - 1px) * 0.5, 0px) - 1.4em * 0.5);
    }

    input[type="range"].input-range::-webkit-slider-runnable-track {
      height: 0.7em;
      border: 1px solid #b2b2b2;
      border-radius: 0.5em;
      background: #efefef;
      box-shadow: none;
    }

    input[type="range"].input-range:hover::-webkit-slider-runnable-track {
      border-color: #9a9a9a;
    }

    input[type="range"].input-range:active::-webkit-slider-runnable-track {
      border-color: #c1c1c1;
    }

    input[type="range"].input-range.slider-progress::-webkit-slider-runnable-track {
      background: linear-gradient(#5645d0, #5645d0) 0 / var(--sx) 100% no-repeat,
        #efefef;
    }

    input[type="range"].input-range.slider-progress:hover::-webkit-slider-runnable-track {
      background: linear-gradient(#5645d0, #5645d0) 0 / var(--sx) 100% no-repeat,
        #efefef;
    }

    input[type="range"].input-range.slider-progress:active::-webkit-slider-runnable-track {
      background: linear-gradient(#5645d0, #5645d0) 0 / var(--sx) 100% no-repeat,
        #efefef;
    }

    /*mozilla*/
    input[type="range"].input-range::-moz-range-thumb {
      width: 1.4em;
      height: 1.4em;
      border-radius: 1em;
      background: #fff;
      border: none;
      box-shadow: 0 0 2px black;
    }

    input[type="range"].input-range::-moz-range-track {
      height: max(calc(0.7em - 1px - 1px), 0px);
      border: 1px solid #b2b2b2;
      border-radius: 0.5em;
      background: #efefef;
      box-shadow: none;
    }

    input[type="range"].input-range:hover::-moz-range-track {
      border-color: #9a9a9a;
    }

    input[type="range"].input-range:active::-moz-range-track {
      border-color: #c1c1c1;
    }

    input[type="range"].input-range.slider-progress::-moz-range-track {
      background: linear-gradient(#5645d0, #5645d0) 0 / var(--sx) 100% no-repeat,
        #efefef;
    }

    input[type="range"].input-range.slider-progress:hover::-moz-range-track {
      background: linear-gradient(#5645d0, #5645d0) 0 / var(--sx) 100% no-repeat,
        #efefef;
    }

    input[type="range"].input-range.slider-progress:active::-moz-range-track {
      background: linear-gradient(#5645d0, #5645d0) 0 / var(--sx) 100% no-repeat,
        #efefef;
    }

    /*ms*/
    input[type="range"].input-range::-ms-fill-upper {
      background: transparent;
      border-color: transparent;
    }

    input[type="range"].input-range::-ms-fill-lower {
      background: transparent;
      border-color: transparent;
    }

    input[type="range"].input-range::-ms-thumb {
      width: 1.4em;
      height: 1.4em;
      border-radius: 1em;
      background: #fff;
      border: none;
      box-shadow: 0 0 2px black;
      margin-top: 0;
      box-sizing: border-box;
    }

    input[type="range"].input-range::-ms-track {
      height: 0.7em;
      border-radius: 0.5em;
      background: #efefef;
      border: 1px solid #b2b2b2;
      box-shadow: none;
      box-sizing: border-box;
    }

    input[type="range"].input-range:hover::-ms-track {
      border-color: #9a9a9a;
    }

    input[type="range"].input-range:active::-ms-track {
      border-color: #c1c1c1;
    }

    input[type="range"].input-range.slider-progress::-ms-fill-lower {
      height: max(calc(0.7em - 1px - 1px), 0px);
      border-radius: 0.5em 0 0 0.5em;
      margin: -1px 0 -1px -1px;
      background: #5645d0;
      border: 1px solid #b2b2b2;
      border-right-width: 0;
    }

    input[type="range"].input-range.slider-progress:hover::-ms-fill-lower {
      background: #5645d0;
      border-color: #9a9a9a;
    }

    input[type="range"].input-range.slider-progress:active::-ms-fill-lower {
      background: #5645d0;
      border-color: #c1c1c1;
    }
  </style>

  <body>
    <div class="calculator-box">
      <h2 class="title">Calculate your mortgage</h2>

      <div class="calculator first">
        <div class="column1">
          <form id="mortgageForm1">
            <div>
              <p class="input-label">Residency Status</p>
              <div class="radio-group">
                <input
                  type="radio"
                  id="uaeResident1"
                  name="residency1"
                  value="UAE Resident"
                  checked
                  onchange="updateTenorMax1(); updateDownPayment1(); handleRadioChange(this);"
                />
                <label for="uaeResident1" class="radio1">UAE Resident</label>

                <input
                  type="radio"
                  id="uaeNational1"
                  name="residency1"
                  value="UAE National"
                  onchange="updateTenorMax1(); updateDownPayment1(); handleRadioChange(this);"
                />
                <label for="uaeNational1" class="radio1">UAE National</label>

                <input
                  type="radio"
                  id="nonResident1"
                  name="residency1"
                  value="Non Resident"
                  onchange="updateTenorMax1(); updateDownPayment1(); handleRadioChange(this);"
                />
                <label for="nonResident1" class="radio1">Non Resident</label>
              </div>
            </div>

            <div class="input-box">
              <label for="propertyPrice1" class="input-label"
                >Property Price</label
              >
              <input
                class="text-input"
                type="text"
                id="propertyPrice1"
                name="propertyPrice1"
                placeholder="AED"
                required
                onchange="updateDownPayment1()"
              />
            </div>
            <div class="input-box">
              <label for="downPayment1" class="input-label">Down Payment</label>
              <input
                class="text-input"
                type="text"
                id="downPayment1"
                name="downPayment1"
                placeholder="AED"
                min="0"
                max="999999999"
                onchange="updateDownPayment1()"
              />
              <p class="percentage"></p>
            </div>
            <div id="tenorContainer1" class="input-box">
              <label for="tenor1" class="input-label">Tenor in Years</label>
              <div class="range-box">
                <input
                  class="input-range slider-progress"
                  type="range"
                  id="tenor1"
                  name="tenor1"
                  min="1"
                  step="1"
                  value="25"
                  max="25"
                  oninput="updateTenorValue1();"
                />
                <output id="tenorValue1">25</output>
              </div>
            </div>
            <!-- <button class="calculate-btn" type="button" onclick="calculate1();">
              Calculate
            </button> -->
          </form>
        </div>

        <div class="column2">
          <div id="results1"></div>
          <div class="accordion1">
            <div class="accordion-item1">
              <div
                class="result-box"
                id="accordion-button-11"
                aria-expanded="false"
              >
                <div class="text-box">
                  <p class="accordion-title1">
                    <span class="char">+</span>Fees
                  </p>
                  <p class="unbold">
                    AED <span class="accordion-value1"></span>
                  </p>
                </div>
              </div>
              <div class="accordion-content1" id="fees1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <script>
      function handleRadioChange(selectedRadio) {
        document
          .querySelectorAll('input[name="residency1"]')
          .forEach((radio) => {
            radio.checked = radio === selectedRadio;
          });
      }

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
        //   if (!document.querySelector(
        //   'input[name="residency1"]:checked'
        // )) {
        //     alert("Select your Residency Status");
        //     this.value = "";
        //     return;
        //   }

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

          // Set minimum and maximum property price based on down payment
          downPaymentInput.min = downPayment;

          // Ensure down payment cannot exceed property price
          if (
            parseInt(downPaymentInput.value.replace(/[^\d]/g, "")) >
            parseInt(propertyPrice)
          ) {
            downPaymentInput.value = propertyPrice.replace(
              /\B(?=(\d{3})+(?!\d))/g,
              ","
            );
            percentageChange();
            // Display error message for exceeding property price
            alert("Down payment cannot exceed the property price");
          }

          // Check if user input is less than minimum and reset to minimum if needed
          if (
            parseInt(downPaymentInput.value.replace(/[^\d]/g, "")) < downPayment
          ) {
            downPaymentInput.value = formatNumber1(downPayment);
            percentageChange();
            // Display error message for below minimum down payment
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
    </script>
  </body>
</html>
