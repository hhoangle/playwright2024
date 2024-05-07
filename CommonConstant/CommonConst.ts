export class CommonConst {
  static VEHICLE_REGISTRATION_NUMBER: string = "SLS8801K";
  static DRIVING_EXPERIENCE: string = "2 years";
  static NO_OF_CLAIM: string = "0";
  static EMAIL: string = "autoecics@gmail.com";
  static MOBILE_NO: string = "89898989";
  static UAT_URL: string = "https://www.triceratopdev.com/";
  static DEV_URL: string = "https://ecics-dev.tdt.asia/";
  static ADD_ON_LIST = ["Any Workshops", "Loss Of Use", "Medical Expenses"
    ,"Key Replacement Cover", "Add Additional Named Driver(s)", "50% Buy Up NCD",
    "24x7 Roadside Assistance", "New for Old Replacement","Personal Accident+",
    "Adjustable Excess"
  ]
  static CHASSIS_NO: string = generateRandomNumber();
  static ENGINE_NO: string = generateRandomNumber();
}

function generateRandomNumber(): string {
  let result = '';
  for (let i = 0; i < 10; i++) {
    result += Math.floor(Math.random() * 10); // Generate a random integer from 0 to 9
  }
  return result;
}