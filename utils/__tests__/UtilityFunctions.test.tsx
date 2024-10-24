import { describe, it, expect } from "vitest";
import {
  formatPhone,
  formatBlogDate,
  formatImageUrl,
} from "../UtilityFunctions";
import { MonthFormat } from "../enums/enums";

describe("format phone number", () => {
  it("should return desired phone format with 10 digits", () => {
    const inputPhoneNumber = "555 555 5555";

    const result = formatPhone(inputPhoneNumber);

    expect(result).toBe("(555) 555-5555");
  });

  it("should return desired phone format with 11 digits", () => {
    const inputPhoneNumber = "+1 (555) 555-5555";

    const result = formatPhone(inputPhoneNumber);

    expect(result).toBe("1 (555) 555-5555");
  });
  it("should throw with 12 digits", () => {
    const inputPhoneNumber = "+11 (555) 555-5555";

    expect(() => formatPhone(inputPhoneNumber)).toThrow(
      "Max length for a phone number is 11 digits"
    );
  });
  it("should throw with 9 digits", () => {
    const inputPhoneNumber = "+ (55) 555-5555";

    expect(() => formatPhone(inputPhoneNumber)).toThrow(
      "Min length for a phone number is 10 digits"
    );
  });
});

describe("format blog date", () => {
  it("should return month day year string with abbreviated month name", () => {
    const today = new Date(Date.UTC(2024, 9, 23, 0, 30, 0)).toISOString();

    const result = formatBlogDate(today, MonthFormat.ABBREVIATED_MONTH);

    expect(result).toBe("Oct 23, 2024");
  });

  it("should return month day year string with full month name", () => {
    const today = new Date(Date.UTC(2024, 9, 23, 0, 30, 0)).toISOString();

    const result = formatBlogDate(today, MonthFormat.FULL_MONTH);

    expect(result).toBe("October 23, 2024");
  });

  it("should return an error when formatting invalid date format", () => {
    const today = new Date(Date.UTC(2024, 9, 23, 0, 30, 0)).toString();

    expect(() => formatBlogDate(today)).toThrow("Invalid date format");
  });
});

describe("format image url", () => {
  const originalEnv = { ...process.env };

  beforeEach(() => {
    process.env.NEXT_PUBLIC_SANITY_CDN_URL = "https://google.com/";
  });

  afterEach(() => {
    process.env = { ...originalEnv };
  });
  it("should return url with .jpg", () => {
    const url = "image-new-jpg";

    const result = formatImageUrl(url);

    expect(result).toBe("https://google.com/new.jpg?auto=format&fit=min");
  });

  it("should remove -image from url", () => {
    const url = "-image-new-dog-jpg";

    const result = formatImageUrl(url);

    expect(result).toBe("https://google.com/-new-dog.jpg?auto=format&fit=min");
  });
});
