import { ProductPageUI } from "../PageUI/ProductPageUI";
import { BasePage } from "../BasePage/BasePage";
import { GetQuoteCarPageUI } from "../PageUI/GetQuoteCarPageUI";

export class GetQuoteCarPage extends BasePage {
  constructor(page: any) {
    super(page);
  }

  private policyStartDate: string;
  private policyEndDate: string;

  async inputVehicleRegistrationNumber(keyToSend: string) {
    await this.sendKeyToElement(
      GetQuoteCarPageUI.VEHICLE_REGISTRATION_NUMBER,
      keyToSend
    );
  }

  async selectVehicleMake() {
    await this.clickToElement(GetQuoteCarPageUI.VEHICLE_MAKE_DROP);
    await this.clickToElement(GetQuoteCarPageUI.VEHICLE_MAKE_OPTION);
  }

  async selectFirstRegisteredIn() {
    await this.clickToElement(GetQuoteCarPageUI.SELECT_YEAR_DROPDOWN);
    await this.clickToElement(GetQuoteCarPageUI.SELECT_YEAR_OPTION);
  }

  async selectVehicleModel() {
    await this.clickToElement(GetQuoteCarPageUI.VEHICLE_MODEL_DROPDOWN);
    await this.clickToElement(GetQuoteCarPageUI.VEHICLE_MODEL_OPTION);
  }

  async selectPolicyStartDate() {
    const currentDate: Date = new Date();
    const increasedDate: Date = new Date(currentDate);
    increasedDate.setDate(increasedDate.getDate() + 1);

    const day: string = String(increasedDate.getDate()).padStart(2, "0");
    const month: string = String(increasedDate.getMonth() + 1).padStart(2, "0");
    const year: string = String(increasedDate.getFullYear());
    const policyStartDate: string = `${day}/${month}/${year}`;

    await this.sendKeyToElement(
      GetQuoteCarPageUI.SELECT_POLICY_START_DATE,
      policyStartDate
    );
    await this.clickToElement(GetQuoteCarPageUI.MARK_POINT);

    this.policyStartDate = policyStartDate;
  }

  async selectPolicyEndDate() {
    const currentDate: Date = new Date();
    const increasedDate: Date = new Date(currentDate);
    increasedDate.setMonth(increasedDate.getMonth() + 12);
    increasedDate.setDate(increasedDate.getDate() - 1);

    const day: string = String(increasedDate.getDate()).padStart(2, "0");
    const month: string = String(increasedDate.getMonth() + 1).padStart(2, "0");
    const year: string = String(increasedDate.getFullYear());
    const policyEndDate: string = `${day}/${month}/${year}`;

    await this.sendKeyToElement(
      GetQuoteCarPageUI.SELECT_POLICY_END_DATE,
      policyEndDate
    );
    await this.clickToElement(GetQuoteCarPageUI.MARK_POINT);

    this.policyEndDate = policyEndDate;
  }

  public getPolicyStartDate(): string {
    return this.policyStartDate;
  }

  public getPolicyEndDate(): string {
    return this.policyEndDate;
  }

  async selectDOB() {
    const currentDate: Date = new Date();
    const finalDate: Date = new Date(currentDate);
    finalDate.setFullYear(finalDate.getFullYear() - 25);

    const day: string = String(finalDate.getDate()).padStart(2, "0");
    const month: string = String(finalDate.getMonth() + 1).padStart(2, "0");
    const year: string = String(finalDate.getFullYear());
    const dateOfBirth: string = `${day}/${month}/${year}`;

    await this.sendKeyToElement(GetQuoteCarPageUI.DATE_OF_BIRTH, dateOfBirth);
    await this.clickToElement(GetQuoteCarPageUI.MARK_POINT);
  }

  async selectDrivingExperience(drivingExperience: string) {
    await this.clickToElement(GetQuoteCarPageUI.DRIVING_EXPERIENCE);
    await this.sleepInSecond(1);
    await this.clickToElementDynamic(
      GetQuoteCarPageUI.DRIVING_EXPERIENCE_OPTION,
      drivingExperience
    );
  }

  async selectNCD() {
    await this.clickToElement(GetQuoteCarPageUI.NCD_DROPDOWN);
    await this.clickToElement(GetQuoteCarPageUI.NCD_DROPDOWN_OPTION);
  }

  async selectNoOfClaim(noOfClaim: string) {
    await this.clickToElement(GetQuoteCarPageUI.NO_OF_CLAIM_DROPDOWN);
    await this.clickToElementDynamic(
      GetQuoteCarPageUI.NO_OF_CLAIM_DROPDOWN_OPTION,
      noOfClaim
    );
  }

  async inputEmail(email: string) {
    await this.sendKeyToElement(GetQuoteCarPageUI.EMAIL_FIELD, email);
  }

  async inputMobileNo(mobileNo: string) {
    await this.sendKeyToElement(GetQuoteCarPageUI.MOBILE_FIELD, mobileNo);
  }

  async clickCheckPrice() {
    await this.clickToElementDynamic(GetQuoteCarPageUI.CHECK_PRICE_BUTTON);
  }

  async isPlansNameDisplayed() {
    await this.waitForElementVisible(GetQuoteCarPageUI.PLANS_HEADER);

    const [PlanHeader, ThirdPartyTitle, Comprehensive, ThirdPartyFireTheftTitle] = await Promise.all([
      this.isElementDisplay(GetQuoteCarPageUI.PLANS_HEADER),
      this.isElementDisplay(GetQuoteCarPageUI.THIRD_PARTY_TITLE),
      this.isElementDisplay(GetQuoteCarPageUI.COMPREHENSIVE_TITLE),
      this.isElementDisplay(GetQuoteCarPageUI.THIRD_PARTY_FIRE_AND_THIEFT_TITLE)
    ]);

    return PlanHeader && ThirdPartyTitle && Comprehensive && ThirdPartyFireTheftTitle;
  }

  async selectComprehensive() {
    await this.clickToElement(GetQuoteCarPageUI.SELECT_PLANS_BUTTON);
  }

  async clickYesContinueButton() {
    await this.clickToElement(GetQuoteCarPageUI.YES_CONTINUE_BUTTON);
  }

  async selectAllAddOn() {
    await this.waitForElementVisible(GetQuoteCarPageUI.CONTINUE_BUTTON);
    await this.clickToElements(GetQuoteCarPageUI.ADD_ONS_CHECKBOX);
  }

  async getTotalPremiumInAddOnPage() {
    return await this.getElementText(GetQuoteCarPageUI.TOTAL_PREMIUM_IN_ADD_ON_PAGE);
  }

  async clickContinue() {
    await this.clickToElement(GetQuoteCarPageUI.CONTINUE_BUTTON);
  }

  async getTotalPremiumInDetailPage() {
    return await this.getElementText(GetQuoteCarPageUI.TOTAL_PREMIUM_IN_DETAIL_PAGE);
  }

  async getAddOnList() {
    await this.waitForElementVisible(GetQuoteCarPageUI.CONTINUE_BUTTON);
    return await this.getElementsText(GetQuoteCarPageUI.ADD_ONS);
  }

  async insertVehicleRegistrationNumber(vehicleRegNo: string) {
    await this.sendKeyToElement(GetQuoteCarPageUI.VEHICLE_REGISTRATION_NUMBER, vehicleRegNo);
  }

  async insertChassisNo(chassisNo: string) {
    await this.sendKeyToElement(GetQuoteCarPageUI.CHASSIS_NUMBER_FIELD, chassisNo);
  }

  async insertEngineNo(engineNo: string) {
    await this.sendKeyToElement(GetQuoteCarPageUI.ENGINE_NUMBER_FIELD, engineNo);
  }

  async selectHirePurchaseCompany() {
    await this.clickToElement(GetQuoteCarPageUI.HIRE_PURCHASE_COMPANY_DROPDOWN);
    await this.clickToElement(GetQuoteCarPageUI.HIRE_PURCHASE_COMPANY_OPTION);
    return await this.getElementAttribute(GetQuoteCarPageUI.HIRE_PURCHASE_COMPANY_NAME, 'textvalue');
  }

  async inputMainDriverFullName(value) {
    await this.sendKeyToElement(GetQuoteCarPageUI.MAIN_DRIVER_FULL_NAME, value);
  }

  async inputNRICFIN(value) {
    await this.sendKeyToElement(GetQuoteCarPageUI.MAIN_DRIVER_NRIC_FIELD, value);
  }

  async selectGender() {
    await this.clickToElement(GetQuoteCarPageUI.MAIN_DRIVER_GENDER);
    await this.clickToElement(GetQuoteCarPageUI.GENDER_OPTION);
  }

  async selectMaritalStatus() {
    await this.clickToElement(GetQuoteCarPageUI.MARITAL_STATUS_DROPDOWN);
    await this.clickToElement(GetQuoteCarPageUI.MARITAL_STATUS_OPTION);
  }

  async inputAddress(value) {
    await this.sendKeyToElement(GetQuoteCarPageUI.MAIN_DRIVER_ADDRESS, value);
  }

  async inputPostcode(value) {
    await this.sendKeyToElement(GetQuoteCarPageUI.MAIN_DRIVER_POSTCODE, value);
  }

  async inputAdditionalNamedDriver(value) {
    await this.sendKeyToElement(GetQuoteCarPageUI.ADDITIONAL_NAMED_DRIVER_FIELD, value);
  }

  async inputAdditionalNRIC(value) {
    await this.sendKeyToElement(GetQuoteCarPageUI.ADDITIONAL_NRIC_FIELD, value);
  }

  async selectAdditionalDriverDOB() {
    const currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() - 27);
    const dateOfBirth = currentDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
    await this.clickToElement(GetQuoteCarPageUI.ADDITIONAL_DRIVER_DOB_FIELD);
    await this.sendKeyToElement(GetQuoteCarPageUI.ADDITIONAL_DRIVER_DOB_FIELD, dateOfBirth);
    await this.page.keyboard.press('Enter');
  }

  async selectAdditionalDriverGender() {
    await this.clickToElement(GetQuoteCarPageUI.ADDITIONAL_DRIVER_GENDER);
    await this.page.keyboard.press('ArrowDown')
    await this.page.keyboard.press('Enter')
  }

  async selectAdditionalDriverMaritalStatus() {
    await this.clickToElement(GetQuoteCarPageUI.ADDITIONAL_DRIVER_MARITAL_STATUS_DROPDOWN);
    await this.page.keyboard.press('ArrowDown')
    await this.page.keyboard.press('Enter')
  }

  async selectAdditionalDriverDrivingExp() {
    await this.clickToElement(GetQuoteCarPageUI.ADDITIONAL_DRIVER_DRIVING_EXP_DROPDOWN);
    await this.page.keyboard.press('ArrowDown')
    await this.page.keyboard.press('Enter')
  }

  async agreePrivacyPolicy() {
    await this.clickToElement(GetQuoteCarPageUI.PRIVACY_POLICY_CHECKBOX);
  }
}
