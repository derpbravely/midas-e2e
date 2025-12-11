import { ChevronDown } from "lucide-react";
import {
  Button as AriaButton,
  ComboBox,
  Input,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
} from "react-aria-components";

import { Button, DialogTrigger, Modal } from "@midas-ds/components";
import "@midas-ds/components/default.css";

export default function ModalWithComboBox() {
  return (
    <DialogTrigger>
      <Button>Öppna modal</Button>
      <Modal title="Rubrik">
        <ComboBox>
          <Label>Favorite Animal</Label>
          <Input />
          <AriaButton>
            <ChevronDown size={16} />
          </AriaButton>
          <Popover>
            <ListBox>
              <ListBoxItem>Aardvark</ListBoxItem>
              <ListBoxItem>Cat</ListBoxItem>
              <ListBoxItem>Dog</ListBoxItem>
            </ListBox>
          </Popover>
        </ComboBox>
      </Modal>
    </DialogTrigger>
  );
}
