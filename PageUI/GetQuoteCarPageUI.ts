export class GetQuoteCarPageUI {
    public static VEHICLE_REGISTRATION_NUMBER: string = "//div[@class='car_plate_no el-input']//input"
    public static VEHICLE_MAKE_DROP: string = "//input[@placeholder='Select a Vehicle Make']";
    public static VEHICLE_MAKE_OPTION: string = "//li[contains(text(),'Popular Makes')]//parent::*//ul//li[1]";
    public static SELECT_YEAR_DROPDOWN: string = "//input[@placeholder='Select a year']";
    public static SELECT_YEAR_OPTION: string = "//span[text()='2023']//parent::*//preceding-sibling::*//span";
    public static VEHICLE_MODEL_DROPDOWN: string = "//input[@placeholder='Select a Vehicle Model']";
    public static VEHICLE_MODEL_OPTION: string = "//span[text()='A1 1.4']//parent::*//preceding-sibling::*//span";
    public static SELECT_POLICY_START_DATE: string = "//p[text()='Policy Start Date (inclusive)']//following-sibling::*//input[@placeholder='DD/MM/YYYY']";
    public static MARK_POINT: string = "//p[text()='Policy Start Date (inclusive)']";
    public static SELECT_POLICY_END_DATE: string = "//p[text()='Policy End Date (inclusive)']//following-sibling::*//input[@placeholder='DD/MM/YYYY']";
    public static DATE_OF_BIRTH: string = "//p[text()='Date of Birth']//following-sibling::*//input[@placeholder='DD/MM/YYYY']";
    public static DRIVING_EXPERIENCE: string = "//input[@placeholder=\"Select Driver's Experience (Years)\"]";
    public static DRIVING_EXPERIENCE_OPTION: string = "//span[text()='%s']";
    public static NCD_DROPDOWN: string = "//input[@placeholder='Select your current NCD']";
    public static NCD_DROPDOWN_OPTION: string = "//span[text()='0%']";
    public static NO_OF_CLAIM_DROPDOWN: string = "//input[@placeholder='Select number claim(s) within 3 years']";
    public static NO_OF_CLAIM_DROPDOWN_OPTION: string = "//span[text()='%s']";
    public static EMAIL_FIELD: string = "//p[text()='Email']//following-sibling::*//input";
    public static MOBILE_FIELD: string = "//p[text()='Mobile No.']//following-sibling::*//input";
    public static CHECK_PRICE_BUTTON: string = "//button//p[text()='Check Price']";
    public static PLANS_HEADER: string = "//h3[text()='Plans for you']";
    public static THIRD_PARTY_TITLE: string = "//div[@class='plans-container']//h4[@class='section-header text-center'][normalize-space()='Third Party Only']";
    public static COMPREHENSIVE_TITLE: string = "//div[@class='plans-container']//h4[@class='section-header text-center'][normalize-space()='Comprehensive']";
    public static THIRD_PARTY_FIRE_AND_THIEFT_TITLE: string = "//div[@class='plans-container']//h4[@class='section-header text-center'][normalize-space()='Third Party Only']";
    public static SELECT_PLANS_BUTTON: string = "(//div[@class='orange-button-filled'][normalize-space()='Select'])[5]";
    public static YES_CONTINUE_BUTTON: string = "//button[text()='Yes, Continue']";
    public static ADD_ONS_TITLE: string = "//p[@class='text-title text-semi-bold mb-1']";
    public static CONTINUE_BUTTON: string = "//p[text()='Continue']"
    public static ADD_ONS_CHECKBOX: string = "//input[@type='checkbox']"
    public static TOTAL_PREMIUM_IN_ADD_ON_PAGE: string = "//p[text()='Total Premium']//following-sibling::h3"
    public static TOTAL_PREMIUM_IN_DETAIL_PAGE: string = "//p[text()='Total Premium']//following-sibling::h3"
    public static ADD_ONS: string = "//p[@class='text-title text-semi-bold mb-1']"
    public static CHASSIS_NUMBER_FIELD: string = "//p[text()='Chassis No.']//following-sibling::*//input";
    public static ENGINE_NUMBER_FIELD: string = "//p[text()='Engine No.']//following-sibling::*//input";
    public static HIRE_PURCHASE_COMPANY_DROPDOWN: string = "//input[@placeholder='Select hire purchase company']";
    public static HIRE_PURCHASE_COMPANY_OPTION: string = "//li[contains(text(),'Popular')]//following-sibling::*//ul//li[1]";
    public static HIRE_PURCHASE_COMPANY_NAME: string = "//div[@objectkey='hire_purchase_company']"
    public static MAIN_DRIVER_FULL_NAME: string = "//h3[contains(text(),'Main Driver Details')]//parent::*//following-sibling::*//p[contains(text(),'Full name')]//parent::*//input"
    public static MAIN_DRIVER_NRIC_FIELD: string = "//h3[contains(text(),'Main Driver Details')]//parent::div//following-sibling::div//p[contains(text(),'NRIC/FIN')]//following-sibling::*//input";
    public static MAIN_DRIVER_GENDER: string = "//h3[contains(text(),'Main Driver Details')]//parent::div//following-sibling::div//p[contains(text(),'Gender')]//following-sibling::*//input";
    public static GENDER_OPTION: string = "//p[text()='Address']//ancestor::div[@id='__nuxt']//following-sibling::script//following-sibling::div//following-sibling::div//following-sibling::div[@class='el-select-dropdown el-popper']//li[1]";
    public static MARITAL_STATUS_DROPDOWN: string = "//h3[contains(text(),'Main Driver Details')]//parent::div//following-sibling::div//p[contains(text(),'Marital Status')]//following-sibling::*//input";
    public static MARITAL_STATUS_OPTION: string = "//p[text()='Address']//ancestor::div[@id='__nuxt']//following-sibling::script//following-sibling::div//following-sibling::div//following-sibling::div[@class='el-select-dropdown el-popper'][2]//li[1]";
    public static MAIN_DRIVER_ADDRESS: string = "//input[@placeholder='address line 1']";
    public static MAIN_DRIVER_POSTCODE: string = "//input[@placeholder='postcode']";
    public static ADDITIONAL_NAMED_DRIVER_FIELD: string = "//h3[contains(text(),'Additional Named Driver')]//parent::div//parent::div[@class='title-container mb-4']//parent::div[@id='add-additional-driver-details']//p[contains(text(),'Full name')]//following-sibling::div//input";
    public static ADDITIONAL_NRIC_FIELD: string = "//body/div[@id='__nuxt']/div[@id='__layout']/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[2]/div[6]/div[2]/div[1]/div[2]/div[1]/div[1]/input[1]"
    public static ADDITIONAL_DRIVER_DOB_FIELD: string = "//input[@placeholder='DD/MM/YYYY']"
    public static MARK_POINT_2: string = "//p[text()='Driving Experience']";
  }