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
        render={({ field: { onChange, value } }) => (
          <TextField
            label="Name"
            value={value}
            onChange={onChange}
            isRequired
          />
        )}
      />
      <Controller
        name="fruit"
        control={control}
        render={({ field: { onChange, value } }) => (
          <ComboBox
            label="Vad är din favoritfrukt?"
            placeholder="Välj en frukt"
            items={fruits}
            selectedKey={value}
            onSelectionChange={onChange}
            isRequired
          >
            {(item) => <ComboBoxItem>{item.name}</ComboBoxItem>}
          </ComboBox>
        )}
      />
      <Controller
        control={control}
        name="date"
        render={({ field: { onChange, value } }) => (
          <DatePicker
            description="YYYY-MM-DD"
            label="Välj datum"
            onChange={onChange}
            value={value}
            isRequired
          />
        )}
      />
      <Controller
        control={control}
        name="animal"
        render={({ field: { onChange, value } }) => (
          <RadioGroup
            description="Välj ett djur"
            label="Djur"
            isRequired
            onChange={onChange}
            // TODO: The '' value creates an accessibility issue
            value={value}
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
        render={({ field: { onChange, value } }) => (
          <Checkbox isSelected={value} onChange={onChange} isRequired>
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
