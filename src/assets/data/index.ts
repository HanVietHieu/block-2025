import Avt from "../img/avt-2024.jpg";
import imgJits from "../img/cty-jits.jpg";
import imgArabica from "../img/logo-arabica.svg";

export const information = {
  fullName: "H.V.Hieu",
  avatar: Avt,
  fakeBook: "https://www.facebook.com/hanviethieu",
};

interface WorkingItem {
  logoCompany: string;
  location: string;
  companyName: string;
  workingTime: string;
}
export const dataWorking: WorkingItem[] = [
  {
    logoCompany: imgJits,
    location: "Thực tập sinh",
    companyName: "Just In Time Solutions (jits)",
    workingTime: "02/2021 - 04/2021",
  },
  {
    logoCompany:
      "https://static.topcv.vn/company_logos/psMPv0ZZb1sUc3hhsagvRqgOCH9gTQ43_1633421799____d70425d87c547f71d6df274b8a328f62.png",
    location: "Front-end Developer",
    companyName: "Early Start ( Monkey )",
    workingTime: "10/2021 - 03/2023",
  },
  {
    logoCompany: imgArabica,
    location: "Web Developer",
    companyName: "Arabica Tech",
    workingTime: "04/2023 - Now",
  },
];
