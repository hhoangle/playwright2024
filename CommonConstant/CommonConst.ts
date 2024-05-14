export class CommonConst {
  static VEHICLE_REGISTRATION_NUMBER: string = "SLS8801K";
  static DRIVING_EXPERIENCE: string = "2 years";
  static NO_OF_CLAIM: string = "0";
  static EMAIL: string = "autoecics@gmail.com";
  static MOBILE_NO: string = "89898989";
  // static UAT_URL: string = "https://www.triceratopdev.com/";
  // static DEV_URL: string = "https://ecics-dev.tdt.asia/";
  static URL: string = "/";
  static ADD_ON_LIST = [
    "Any Workshops",
    "Loss Of Use",
    "Medical Expenses",
    "Key Replacement Cover",
    "Add Additional Named Driver(s)",
    "50% Buy Up NCD",
    "24x7 Roadside Assistance",
    "New for Old Replacement",
    "Personal Accident+",
    "Adjustable Excess",
  ];
  static CHASSIS_NO: string = generateRandomNumber();
  static ENGINE_NO: string = generateRandomNumber();
  static MAIN_DRIVER_FULL_NAME: string = generateRandomFullName();
  static NRIC_FIN_MAIN_DRIVER: string = "S2182566B";
  static MAIN_DRIVER_ADDRESS: string = generateRandomAddress();
  static MAIN_DRIVER_POSTCODE: string = generateRandomPostalCode();
  static ADDITIONAL_DRIVER_FULL_NAME: string = generateRandomFullName();
  static ADDITIONAL_DRIVER_NRIC_FIN: string = "S2819892B";
}

function generateRandomNumber(): string {
  let result = "";
  for (let i = 0; i < 10; i++) {
    result += Math.floor(Math.random() * 10); // Generate a random integer from 0 to 9
  }
  return result;
}

function generateRandomFullName(): string {
  const names = [
    "John",
    "Jane",
    "Mary",
    "James",
    "Emily",
    "Michael",
    "Sarah",
    "David",
    "Jessica",
    "Robert",
    "Sarah",
    "William",
    "Laura",
    "Richard",
    "Karen",
  ];
  const surnames = [
    "Smith",
    "Johnson",
    "Williams",
    "Jones",
    "Brown",
    "Davis",
    "Miller",
    "Wilson",
    "Moore",
    "Taylor",
    "Anderson",
    "Thomas",
    "Jackson",
    "White",
    "Harris",
  ];

  const name = names[Math.floor(Math.random() * names.length)];
  const surname = surnames[Math.floor(Math.random() * surnames.length)];

  return `${name} ${surname}`;
}

function generateRandomAddress(): string {
  const blocks = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"];
  const streets = [
    "Ang Mo Kio Ave",
    "Bedok North St",
    "Clementi Ave",
    "Dover Rd",
    "Eunos Crescent",
    "Farrer Rd",
    "Geylang Bahru",
    "Hougang Ave",
    "Jurong West St",
    "Kent Ridge Rd",
  ];
  const postalCodes = [
    "119077",
    "569830",
    "159545",
    "528765",
    "460025",
    "310530",
    "600040",
    "680235",
    "640492",
    "119260",
  ];

  const block = blocks[Math.floor(Math.random() * blocks.length)];
  const street = streets[Math.floor(Math.random() * streets.length)];
  const postalCode =
    postalCodes[Math.floor(Math.random() * postalCodes.length)];

  return `${block} ${street}, Singapore ${postalCode}`;
}

function generateRandomPostalCode(): string {
  let result = "";
  for (let i = 0; i < 6; i++) {
    result += Math.floor(Math.random() * 10); // Generate a random integer from 0 to 9
  }
  return result;
}
