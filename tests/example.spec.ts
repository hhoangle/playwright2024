import { chromium, expect, test, BrowserContext, Page } from "@playwright/test";
import { CommonConst } from "../CommonConstant/CommonConst";
import { HomePage } from "../PageObject/HomePage";
import { ProductPage } from "../PageObject/ProductPage";
import { GetQuoteCarPage } from "../PageObject/GetQuoteCarPage";
import { log } from "console";

let homePage: HomePage;
let productPage: ProductPage;
let getQuoteCarPage: GetQuoteCarPage;
let browserContext: BrowserContext;
let page: Page;

test.beforeEach(async () => {
  const browser = await chromium.launch({
    headless: false,
    args: ["--start-maximized"],
  });
  browserContext = await browser.newContext();
  const page = await browserContext.newPage();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(CommonConst.UAT_URL);
  homePage = new HomePage(page);
  productPage = new ProductPage(page);
  getQuoteCarPage = new GetQuoteCarPage(page);
});

test.describe("Home Page Tests", () => {
  test("Check Elements in Home page", async () => {
    expect(homePage.isHomePageTitleVisible()).toBeTruthy();
    expect(homePage.isPersonalInsuranceButtonVisible()).toBeTruthy();
    expect(homePage.isContactInformationVisible()).toBeTruthy();
  });

  test("Get quote car - Comprehensive", async () => {
    await homePage.clickProductButton();
    await expect(productPage.isProductPageVisible()).toBeTruthy();
    await productPage.clickBuyPrivateMotorCar();
    await productPage.clickBuy();
    await getQuoteCarPage.selectVehicleMake();
    await getQuoteCarPage.selectVehicleModel();
    await getQuoteCarPage.selectFirstRegisteredIn();
    await getQuoteCarPage.inputVehicleRegistrationNumber(CommonConst.VEHICLE_REGISTRATION_NUMBER);
    await getQuoteCarPage.selectPolicyStartDate();
    await getQuoteCarPage.selectPolicyEndDate();
    await getQuoteCarPage.selectDOB();
    await getQuoteCarPage.selectDrivingExperience(CommonConst.DRIVING_EXPERIENCE);
    await getQuoteCarPage.selectNCD();
    await getQuoteCarPage.selectNoOfClaim(CommonConst.NO_OF_CLAIM);
    await getQuoteCarPage.inputEmail(CommonConst.EMAIL);
    await getQuoteCarPage.inputMobileNo(CommonConst.MOBILE_NO);
    await getQuoteCarPage.clickCheckPrice();
    expect(getQuoteCarPage.isPlansNameDisplayed()).toBeTruthy();
    await getQuoteCarPage.selectComprehensive();
    await getQuoteCarPage.clickYesContinueButton();
    await getQuoteCarPage.selectAllAddOn();
    let totalPremium = await getQuoteCarPage.getTotalPremiumInAddOnPage();
    await getQuoteCarPage.clickContinue();
    



    await getQuoteCarPage.page.waitForTimeout(5000)

  });
});
