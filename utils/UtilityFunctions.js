import { months } from "@/config/index";

export function cleanPhone(phoneNumber) {
  const regexPattern = /[^0-9]+/g;
  const newPhoneNumber = phoneNumber.replace(regexPattern, "");
  let desiredPhoneFormat = "";
  if (newPhoneNumber.length == 10) {
    const areaCode = newPhoneNumber.slice(0, 3);
    const cityCode = newPhoneNumber.slice(3, 6);
    const lastFour = newPhoneNumber.slice(6);
    desiredPhoneFormat = `(${areaCode}) ${cityCode}-${lastFour}`;
  } else if (newPhoneNumber.length == 11) {
    const countryCode = newPhoneNumber.slice(0, 1);
    const areaCode = newPhoneNumber.slice(1, 4);
    const cityCode = newPhoneNumber.slice(4, 7);
    const lastFour = newPhoneNumber.slice(7);
    desiredPhoneFormat = `${countryCode} (${areaCode}) ${cityCode}-${lastFour}`;
  }

  if (desiredPhoneFormat.length > newPhoneNumber.length) {
    return desiredPhoneFormat;
  } else {
    return newPhoneNumber;
  }
}

export function formatBlogDate(dateTime) {
  let dateStr = "";

  try {
    let dtSplit = dateTime.split("-");
    let dateSplit = dtSplit[2].split("T");
    let month = months[parseInt(dtSplit[1] - 1)];
    let day = dateSplit[0];
    let year = dtSplit[0];

    dateStr = `${month} ${day}, ${year}`;
  } catch (error) {
    // Todo: add logging
  }

  return dateStr;
}
