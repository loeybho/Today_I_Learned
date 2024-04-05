import { countState } from "@recoil/atoms.mjs";
import { selector } from "recoil";

export const countStateKor = selector({
  key: "countKor",
  get: ({ get }) => {
    const count = get(countState);
    return numberToKorean(count);
  },
});

function numberToKorean(number) {
  const koreanNumbers = [
    "영",
    "일",
    "이",
    "삼",
    "사",
    "오",
    "육",
    "칠",
    "팔",
    "구",
  ];
  const koreanUnits = ["", "십", "백", "천", "만", "억", "조", "경"];

  function digitToKorean(digit, position) {
    if (digit === 1 && position > 0) {
      return "";
    }

    return koreanNumbers[digit];
  }

  const digits = number.toString().split("").map(Number);

  digits.reverse();

  let koreanString = "";

  digits.forEach((digit, index) => {
    if (digit !== 0) {
      koreanString =
        digitToKorean(digit, index) + koreanUnits[index] + koreanString;
    } else if (index === 4) {
      koreanString = koreanUnits[index] + koreanString;
    }
  });

  return koreanString;
}
