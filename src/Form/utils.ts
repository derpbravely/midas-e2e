import type { Key } from "@react-types/shared";
import type { DateValue } from "react-aria-components";

interface FormValues {
  name: string;
  fruit: Key | null;
  date: DateValue | null;
  animal: string | null;
  accept: boolean;
}

export const defaultValues: FormValues = {
  name: "",
  fruit: null,
  date: null,
  animal: null,
  accept: false,
};

const toObject = (item: string) => ({ id: item, name: item });

export const fruits = ["Äpple", "Banan", "Apelsin", "Mango"].map(toObject);
export const animals = ["Apa", "Tiger", "Älg", "Mungo"].map(toObject);

// Why doesn't it say string as a possible value?
export const formatDisplayValue = (value: FormValues[keyof FormValues]) => {
  if (value === null) return "Inget val";
  if (typeof value === "boolean") return value ? "Ja" : "Nej";
  return typeof value === "object" && "day" in value
    ? `${value.year}-${value.month}-${value.day}`
    : value;
};
