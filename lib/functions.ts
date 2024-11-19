import { PIECES } from "@/lib/constants";

export function changeFenToArray(fenPosition: string) {
  const arrayPosition = [];
  for (let i = 0; i < fenPosition.length; i++) {
    if (Number.isInteger(+fenPosition[i])) {
      for (let j = 0; j < +fenPosition[i]; j++) {
        arrayPosition.push("");
      }
    } else if (Object.keys(PIECES).includes(fenPosition[i])) {
      arrayPosition.push(fenPosition[i]);
    }
  }
  return arrayPosition;
}
