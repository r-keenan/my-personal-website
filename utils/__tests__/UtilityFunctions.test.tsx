import { describe, it, expect } from "vitest";
import { formatBlogDate, formatImageUrl } from "../UtilityFunctions";

describe("format blog date", () => {
  it("should return month day year string", () => {
    const today = new Date(Date.UTC(2024, 9, 23, 0, 30, 0)).toISOString();

    const result = formatBlogDate(today);

    expect(result).toBe("Oct 23, 2024");
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
