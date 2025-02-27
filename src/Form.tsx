import {
  Button,
  Checkbox,
  ComboBox,
  ComboBoxItem,
  DatePicker,
  RadioGroup,
  TextField,
  Radio,
} from "@midas-ds/components";
import { useState } from "react";
import { fruits, animals } from "./utils";
import type { Key } from "@react-types/shared";
import type { DateValue } from "react-aria-components";

export default function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [name, setName] = useState("");
  const [fruit, setFruit] = useState<Key | null>(null);
  const [date, setDate] = useState<DateValue | null>(null);
  const [animal, setAnimal] = useState<string | null>(null);
  const [accept, setAccept] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const values = {
    name,
    fruit,
    date,
    animal,
    accept,
  };

  const formatValue = (value: Key | null | DateValue | boolean | string) => {
    if (value === null) return "Inget val";
    if (typeof value === "boolean") return value ? "Ja" : "Nej";
    return typeof value === "object" && "day" in value
      ? `${value.year}-${value.month}-${value.day}`
      : value;
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Form</h1>
      <TextField label="Name" onChange={setName} isRequired />
      <ComboBox
        label="Vad är din favoritfrukt?"
        placeholder="Välj en frukt"
        items={fruits}
        selectedKey={fruit}
        onSelectionChange={setFruit}
        isRequired
      >
        {(item) => <ComboBoxItem>{item.name}</ComboBoxItem>}
      </ComboBox>
      <DatePicker
        description="YYYY-MM-DD"
        label="Välj datum"
        onChange={setDate}
        value={date}
        isRequired
      />
      <RadioGroup
        description="Välj ett djur"
        label="Djur"
        isRequired
        onChange={setAnimal}
        value={animal}
      >
        {animals.map(({ id, name }) => (
          <Radio key={id} value={id} id={id}>
            {name}
          </Radio>
        ))}
      </RadioGroup>
      <Checkbox isSelected={accept} onChange={setAccept} isRequired>
        Jag godkänner villkoren
      </Checkbox>
      <Button type="submit">Submit</Button>
      {isSubmitted ? (
        <div data-testid="result">
          {Object.entries(values).map(([name, value]) => (
            <p key={name}>
              <strong>{name}</strong>: {formatValue(value)}
            </p>
          ))}
        </div>
      ) : null}
    </form>
  );
}
