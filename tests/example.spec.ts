import { chromium, expect, test, BrowserContext, Page } from "@playwright/test";
import { CommonConst } from "../CommonConstant/CommonConst";
import { HomePage } from "../PageObject/HomePage";
import { ProductPage } from "../PageObject/ProductPage";
import { GetQuoteCarPage } from "../PageObject/GetQuoteCarPage";

let homePage: HomePage;
let productPage: ProductPage;
let getQuoteCarPage: GetQuoteCarPage;
let browserContext: BrowserContext;
let page: Page;

test.beforeEach(async () => {
  const browser = await chromium.launch({
    headless: true,
    args: ["--start-maximized"],
  });
  browserContext = await browser.newContext();
  page = await browserContext.newPage();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await Promise.all([
    page.waitForNavigation(), // The promise to wait for navigation
    page.goto(CommonConst.URL), // The promise returned by page.goto()
  ]);
  homePage = new HomePage(page);
  productPage = new ProductPage(page);
  getQuoteCarPage = new GetQuoteCarPage(page);
});

test.describe("Home Page Tests", () => {
  test("Check Elements in Home page", async () => {
    await test.step("Check if Home page title is visible", async () => {
      expect(await homePage.isHomePageTitleVisible()).toBeTruthy();
    });

    await test.step("Check if Personal Insurance button is visible", async () => {
      expect(await homePage.isPersonalInsuranceButtonVisible()).toBeTruthy();
    });

    await test.step("Check if Contact Information is visible", async () => {
      expect(await homePage.isContactInformationVisible()).toBeTruthy();
    });
  });

  test("Get quote car - Comprehensive", async () => {
    let getQuoteData = {
      vehicleMake: "",
      vehicleModel: "",
      policyStartDate: "",
      policyEndDate: "",
      dob: "",
      email: "",
      mobileNo: "",
    };

    await test.step("Click on Product button", async () => {
      await homePage.clickProductButton();
    });

    await test.step("Check if Product page is visible", async () => {
      expect(await productPage.isProductPageVisible()).toBeTruthy();
    });

    await test.step("Click on Buy Private Motor Car", async () => {
      await productPage.clickBuyPrivateMotorCar();
    });

    await test.step("Click on Buy", async () => {
      await productPage.clickBuy();
    });

    await test.step("Select Vehicle Make", async () => {
      await getQuoteCarPage.selectVehicleMake();
    });

    await test.step("Select Vehicle Model", async () => {
      await getQuoteCarPage.selectVehicleModel();
    });

    await test.step("Select First Registered In", async () => {
      await getQuoteCarPage.selectFirstRegisteredIn();
    });

    await test.step("Input Vehicle Registration Number", async () => {
      await getQuoteCarPage.inputVehicleRegistrationNumber(
        CommonConst.VEHICLE_REGISTRATION_NUMBER
      );
    });

    await test.step("Select Policy Start Date", async () => {
      await getQuoteCarPage.selectPolicyStartDate();
    });

    await test.step("Select Policy End Date", async () => {
      await getQuoteCarPage.selectPolicyEndDate();
    });

    await test.step("Select DOB", async () => {
      await getQuoteCarPage.selectDOB();
    });

    await test.step("Select Driving Experience", async () => {
      await getQuoteCarPage.selectDrivingExperience(
        CommonConst.DRIVING_EXPERIENCE
      );
    });

    await test.step("Select NCD", async () => {
      await getQuoteCarPage.selectNCD();
    });

    await test.step("Select No Of Claim", async () => {
      await getQuoteCarPage.selectNoOfClaim(CommonConst.NO_OF_CLAIM);
    });

    await test.step("Input Email", async () => {
      await getQuoteCarPage.inputEmail(CommonConst.EMAIL);
    });

    await test.step("Input Mobile No", async () => {
      await getQuoteCarPage.inputMobileNo(CommonConst.MOBILE_NO);
    });

    await test.step("Click on Check Price", async () => {
      await getQuoteCarPage.clickCheckPrice();
    });

    await test.step("Check if Plans Name is displayed", async () => {
      expect(getQuoteCarPage.isPlansNameDisplayed()).toBeTruthy();
    });

    await test.step("Select Comprehensive", async () => {
      await getQuoteCarPage.selectComprehensive();
    });

    await test.step("Click on Yes Continue Button", async () => {
      await getQuoteCarPage.clickYesContinueButton();
    });

    await test.step("Check Add-On List", async () => {
      let addOnList = CommonConst.ADD_ON_LIST;
      let actualAddOnList = await getQuoteCarPage.getAddOnList();
      console.log(addOnList);
      expect(addOnList).toEqual(actualAddOnList);
    });

    await test.step("Select All Add-On", async () => {
      await getQuoteCarPage.selectAllAddOn();
    });

    let totalPremiumInAddOnPage: string;

    await test.step("Get Total Premium in Add-On Page", async () => {
      totalPremiumInAddOnPage =
        await getQuoteCarPage.getTotalPremiumInAddOnPage();
    });

    await test.step("Click on Continue", async () => {
      await getQuoteCarPage.clickContinue();
    });

    await test.step("Get Total Premium in Detail Page", async () => {
      let totalPremiumDetailPage =
        await getQuoteCarPage.getTotalPremiumInDetailPage();
      expect(totalPremiumInAddOnPage).toEqual(totalPremiumDetailPage);
    });

    await test.step("Insert Chassis No.", async () => {
      await getQuoteCarPage.insertChassisNo(CommonConst.CHASSIS_NO);
    });

    await test.step("Insert Engine No.", async () => {
      await getQuoteCarPage.insertEngineNo(CommonConst.ENGINE_NO);
    });

    let hirePurchaseCompany: string;
    await test.step("Select hire purchase company", async () => {
      hirePurchaseCompany = await getQuoteCarPage.selectHirePurchaseCompany();
      console.log(hirePurchaseCompany);
    });

    await test.step("Input main driver full name", async () => {
      getQuoteCarPage.inputMainDriverFullName(
        CommonConst.MAIN_DRIVER_FULL_NAME
      );
      await getQuoteCarPage.page.waitForTimeout(1000);
    });

    await test.step("Input NRIC/FIN", async () => {
      getQuoteCarPage.inputNRICFIN(CommonConst.NRIC_FIN_MAIN_DRIVER);
    });

    await test.step("Select gender", async () => {
      await getQuoteCarPage.selectGender();
      await getQuoteCarPage.page.waitForTimeout(1000);
    });

    await test.step("Select marital status", async () => {
      await getQuoteCarPage.selectMaritalStatus();
    });

    await test.step("Input address", async () => {
      await getQuoteCarPage.inputAddress(CommonConst.MAIN_DRIVER_ADDRESS);
    });

    await test.step("Input postcode", async () => {
      await getQuoteCarPage.inputPostcode(CommonConst.MAIN_DRIVER_POSTCODE);
    });

    await test.step("Input additional named driver", async () => {
      await getQuoteCarPage.inputAdditionalNamedDriver(
        CommonConst.ADDITIONAL_DRIVER_FULL_NAME
      );
    });

    await test.step("Input additional driver NRIC/FIN", async () => {
      await getQuoteCarPage.inputAdditionalNRIC(
        CommonConst.ADDITIONAL_DRIVER_NRIC_FIN
      );
    });

    await test.step("Select additional driver DOB", async () => {
      await getQuoteCarPage.selectAdditionalDriverDOB();
    });

    await test.step("Select additional driver gender", async () => {
      await getQuoteCarPage.selectAdditionalDriverGender();
    });

    await test.step("Select additional driver marital status", async () => {
      await getQuoteCarPage.selectAdditionalDriverMaritalStatus();
    });

    await test.step("Select additional driver driving exp", async () => {
      await getQuoteCarPage.selectAdditionalDriverDrivingExp();
    });

    await test.step("Agree privacy policy", async () => {
      await getQuoteCarPage.agreePrivacyPolicy();
    });
    await getQuoteCarPage.page.waitForTimeout(10000);
  });
});
