import {
  Button,
  Checkbox,
  ComboBox,
  DatePicker,
  RadioGroup,
  TextField,
  Radio,
  ListBoxItem,
} from "@midas-ds/components";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { defaultValues, formatDisplayValue, fruits, animals } from "./utils";

export default function Form() {
  const { handleSubmit, control, formState } = useForm({ defaultValues });
  const [data, setData] = useState(defaultValues);

  return (
    <form onSubmit={handleSubmit(setData)}>
      <h1>Form</h1>
      <Controller
        name="name"
        control={control}
        render={({ field }) => <TextField {...field} label="Name" isRequired />}
      />
      <Controller
        name="fruit"
        control={control}
        render={({ field: { onChange, value } }) => (
          // TODO: Should use locale when comparing keys?
          <ComboBox
            label="Vad är din favoritfrukt?"
            placeholder="Välj en frukt"
            items={fruits}
            selectedKey={value}
            onSelectionChange={onChange}
            isRequired
          >
            {(item) => <ListBoxItem>{item.name}</ListBoxItem>}
          </ComboBox>
        )}
      />
      <Controller
        control={control}
        name="date"
        render={({ field }) => (
          <DatePicker
            {...field}
            description="YYYY-MM-DD"
            label="Välj datum"
            isRequired
          />
        )}
      />
      <Controller
        control={control}
        name="animal"
        render={({ field }) => (
          <RadioGroup
            // TODO: The '' value creates an accessibility issue
            {...field}
            description="Välj ett djur"
            label="Djur"
            isRequired
          >
            {animals.map(({ id, name }) => (
              <Radio key={id} value={id} id={id}>
                {name}
              </Radio>
            ))}
          </RadioGroup>
        )}
      />
      <Controller
        control={control}
        name="accept"
        render={({ field: { value, ...rest } }) => (
          <Checkbox isSelected={value} {...rest} isRequired>
            Jag godkänner villkoren
          </Checkbox>
        )}
      />
      <Button type="submit">Submit</Button>
      {formState.isSubmitted ? (
        <div data-testid="result">
          {Object.entries(data).map(([name, value]) => (
            <p key={name}>
              <strong>{name}</strong>: {formatDisplayValue(value)}
            </p>
          ))}
        </div>
      ) : null}
    </form>
  );
}
