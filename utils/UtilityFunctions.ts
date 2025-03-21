import { monthsAbbreviated, monthsFull } from "@config/index";
import { MonthFormat } from "./enums/enums";

export function formatPhone(phoneNumber: string): string {
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

  if (newPhoneNumber.length > 11) {
    throw new Error("Max length for a phone number is 11 digits");
  }
  if (newPhoneNumber.length < 10) {
    throw new Error("Min length for a phone number is 10 digits");
  }

  if (desiredPhoneFormat.length > newPhoneNumber.length) {
    return desiredPhoneFormat;
  } else {
    return newPhoneNumber;
  }
}

export function formatBlogDate(
  dateTime: string,
  monthFormat: MonthFormat,
): string {
  let dateStr = "";

  try {
    let dtSplit = dateTime.split("-");
    let dateSplit = dtSplit[2].split("T");
    let month =
      monthFormat === MonthFormat.ABBREVIATED_MONTH
        ? monthsAbbreviated[Number(dtSplit[1]) - 1]
        : monthsFull[Number(dtSplit[1]) - 1];
    let day = dateSplit[0];
    let year = dtSplit[0];

    dateStr = `${month} ${day}, ${year}`;
  } catch (error) {
    console.error("Invalid date format");
    throw new Error("Invalid date format");
  }

  return dateStr;
}

export function formatImageUrl(image: string): string {
  let imageUrl: URL | string = new URL(
    `${process.env.NEXT_PUBLIC_SANITY_CDN_URL}${image}`,
  );
  imageUrl.searchParams.append("auto", "format");
  imageUrl.searchParams.append("fit", "min");

  imageUrl = imageUrl.toString();

  if (imageUrl.includes("-jpeg")) imageUrl = imageUrl.replace("-jpeg", ".jpeg");
  if (imageUrl.includes("-jpg")) imageUrl = imageUrl.replace("-jpg", ".jpg");
  if (imageUrl.includes("-png")) imageUrl = imageUrl.replace("-png", ".png");
  if (imageUrl.includes("-webp")) imageUrl = imageUrl.replace("-webp", ".webp");
  if (imageUrl.includes("image-")) imageUrl = imageUrl.replace("image-", "");

  return imageUrl;
}
