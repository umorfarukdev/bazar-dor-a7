export const bengaliToEnglishNumber = (value: string | number) => {
  const bengaliDigits = "০১২৩৪৫৬৭৮৯";

  return Number(
    value
      .toString()
      .split("")
      .map((char) => {
        const index = bengaliDigits.indexOf(char);

        return index !== -1 ? index : char;
      })
      .join(""),
  );
};

export const toBengaliNumber = (value?: number | string | null) => {
  if (value === undefined || value === null) {
    return "০";
  }

  const englishDigits = "0123456789";
  const bengaliDigits = "০১২৩৪৫৬৭৮৯";

  return value
    .toString()
    .split("")
    .map((digit) => {
      const index = englishDigits.indexOf(digit);

      return index !== -1 ? bengaliDigits[index] : digit;
    })
    .join("");
};
