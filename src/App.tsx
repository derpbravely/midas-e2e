import {
  Accordion,
  AccordionItem,
  Badge,
  BadgeContainer,
  Breadcrumbs,
  Button,
  ButtonGroup,
  Calendar,
  Card,
  CardActions,
  CardContent,
  CardTitle,
  Cell,
  Checkbox,
  Column,
  ComboBox,
  ComboBoxItem,
  DateField,
  DatePicker,
  DialogTrigger,
  Dropdown,
  DropdownItem,
  FileUpload,
  Flex,
  FlexItem,
  GlobalToastRegion,
  Grid,
  GridItem,
  Heading,
  InfoBanner,
  Layout,
  Link,
  LinkButton,
  Logo,
  Modal,
  ProgressBar,
  Radio,
  RadioGroup,
  Row,
  SearchField,
  Select,
  Skeleton,
  Spinner,
  Table,
  TableBody,
  TableHeader,
  Tabs,
  Tag,
  TagGroup,
  Text,
  TextArea,
  TextField,
  toastQueue,
  Tooltip,
  TooltipTrigger,
} from "@midas-ds/components";
import { typography } from "@midas-ds/components/theme";
import "@midas-ds/components/global.css";
import {
  Bell,
  Pen,
  X,
  House,
  Plus,
  Gavel,
  ClipboardList,
  Save,
} from "lucide-react";

export default function App() {
  console.log(typography);
  return (
    <>
      <Accordion>
        <AccordionItem id="mandarin" title="Mandarin">
          Liten orange citrusfrukt
        </AccordionItem>
        <AccordionItem id="sharon" title="Sharon">
          Persikoliknande frukt med fast kött
        </AccordionItem>
        <AccordionItem id="watermelon" title="Vattenmelon">
          Stor frukt med rött, saftigt kött
        </AccordionItem>
      </Accordion>
      <Button variant="tertiary" aria-label="Olästa meddelanden">
        <BadgeContainer>
          <Bell />
          <Badge />
        </BadgeContainer>
      </Button>
      <Breadcrumbs
        items={[
          { href: "/", title: "Start" },
          { href: "/du-vill-forlanga", title: "Du vill förlänga" },
          { href: "/du-vill-forlanga/studera", title: "Studera" },
        ]}
      />
      <ButtonGroup aria-label="Välj knapp">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="tertiary">Tertiary</Button>
        <Button isDisabled>Disabled</Button>
      </ButtonGroup>
      <Calendar />
      <Card>
        <CardContent>
          <CardTitle>Här är en titel</CardTitle>
          <Text>Här är lite innehåll</Text>
          <CardActions>
            <Button variant="icon" icon={Pen}>
              Ändra
            </Button>
            <Button variant="icon" icon={X}>
              Avbryt
            </Button>
          </CardActions>
        </CardContent>
      </Card>
      <Checkbox>Jag godkänner villkoren</Checkbox>
      <ComboBox
        label="Välj din favoritfrukt"
        description="Du kan bara välja en"
      >
        <ComboBoxItem id="Lime">Lime</ComboBoxItem>
        <ComboBoxItem id="Äpple">Äpple</ComboBoxItem>
        <ComboBoxItem id="Banan">Banan</ComboBoxItem>
        <ComboBoxItem id="Kiwi">Kiwi</ComboBoxItem>
        <ComboBoxItem id="Apelsin">Apelsin</ComboBoxItem>
      </ComboBox>
      <DatePicker label="Välj ett datum" />
      <DateField label="Etikett" description="Beskrivning" />
      <Dropdown title="Meny">
        <DropdownItem>
          <Button variant="tertiary">Skriv ut</Button>
        </DropdownItem>
        <DropdownItem>
          <Button variant="tertiary">Avbryt</Button>
        </DropdownItem>
        <DropdownItem>
          <Button variant="tertiary">Dela</Button>
        </DropdownItem>
      </Dropdown>
      <FileUpload
        label="Välj en fil att ladda upp"
        description="Du kan välja en fil"
      />
      <Flex>
        <FlexItem col={12}>
          <span>col=12</span>
        </FlexItem>
        <FlexItem>
          <span>not set</span>
        </FlexItem>
        <FlexItem col="auto">
          <span>col=auto</span>
        </FlexItem>
        <FlexItem col={6}>
          <span>col=6</span>
        </FlexItem>
      </Flex>
      <Grid>
        <GridItem col={12}>
          <span>col=12</span>
        </GridItem>
        <GridItem col={3}>
          <span>col=3</span>
        </GridItem>
        <GridItem col={4}>
          <span>col=4</span>
        </GridItem>
        <GridItem col={5}>
          <span>col=5</span>
        </GridItem>
        <GridItem col={4}>
          <span>col=4</span>
        </GridItem>
        <GridItem col={4}>
          <span>col=4</span>
        </GridItem>
        <GridItem col={4}>
          <span>col=4</span>
        </GridItem>
      </Grid>
      <Heading level={2}>Jag är en vanlig h2-rubrik</Heading>
      <InfoBanner
        type="success"
        title="Formuläret har skickats"
        message="Allt gick bra. Du kan nu stänga fönstret."
      />
      <Layout
        variant="internal"
        items={[
          {
            items: [
              {
                title: "Översikt",
                href: "#",
                icon: House,
              },
            ],
          },
          {
            title: "Ansökan",
            items: [
              {
                title: "Skapa ansökan",
                href: "#",
                icon: Plus,
              },
              {
                title: "Beslut",
                href: "#",
                icon: Gavel,
              },
            ],
          },
          {
            title: "Kort och konto",
            items: [
              {
                title: "Avvikelser",
                href: "#",
                icon: ClipboardList,
                hasBadge: true,
              },
            ],
          },
        ]}
        title="Skapa ansökningar"
        user={{ name: "Namn Namnsson", title: "Roll eller behörighet" }}
        app={{ name: "Namn på applikationen" }}
        headerChildren={
          <LinkButton variant="tertiary" target="_blank">
            Öppna annan tjänst
          </LinkButton>
        }
      >
        derp
      </Layout>
      <Text>
        En text med en <Link href="#">länk</Link> i ett textstycke.
      </Text>
      <Logo size="x-small" />
      <DialogTrigger>
        <Button>Open</Button>
        <Modal
          //highlight-start
          isDismissable
          //highlight-end
          title="Modal Title"
        >
          /* Modal content */
        </Modal>
      </DialogTrigger>
      <ProgressBar label="Laddar..." showValueLabel value={30} />
      <RadioGroup
        label="Välj din favoritfrukt"
        description="Du kan bara välja en"
      >
        <Radio value="apple">Äpple</Radio>
        <Radio value="banan">Banan</Radio>
        <Radio value="kiwi">Kiwi</Radio>
        <Radio value="apelsin">Apelsin</Radio>
      </RadioGroup>
      <SearchField placeholder="Sök efter frukter" />
      <Select
        label="Favoritfrukt"
        description="Välj vilken du vill"
        placeholder="Välj en frukt"
        selectionMode="single"
        options={[
          { id: "apelsin", name: "Apelsin" },
          { id: "banan", name: "Banan" },
          { id: "citron", name: "Citron" },
          { id: "dadel", name: "Dadel" },
          { id: "fikon", name: "Fikon" },
        ]}
      />
      <Skeleton height="48px" />
      <Spinner />
      <Table aria-label="Fruit">
        <TableHeader>
          <Column>Name</Column>
          <Column>Description</Column>
        </TableHeader>
        <TableBody>
          <Row>
            <Cell>Banana</Cell>
            <Cell>A yellow fruit</Cell>
          </Row>
          <Row>
            <Cell>Pear</Cell>
            <Cell>Usually green</Cell>
          </Row>
        </TableBody>
      </Table>
      <Tabs
        label="Viktig information om frukter och bär"
        tabs={[
          "Vitaminer",
          "Frysta frukter och bär",
          "Frysta importerade hallon",
        ]}
      >
        <Text>...</Text>
        <Text>...</Text>
        <Text>...</Text>
      </Tabs>
      <TagGroup>
        <Tag>Tag med information</Tag>
      </TagGroup>
      <TextArea label="Kommentar" description="Skriv en kommentar" />
      <TextField label="Etikett" description="Beskrivning" />
      <div className="card" style={{ display: "block" }}>
        <GlobalToastRegion />
        <Button
          onPress={() =>
            toastQueue.add(
              { type: "success", message: "Allt funkar som det ska!" },
              {
                timeout: 5000,
              }
            )
          }
        >
          {"Tryck här för en notifiering"}
        </Button>
      </div>
      <TooltipTrigger isOpen>
        <Button variant="tertiary" aria-label="Spara">
          <Save />
        </Button>
        <Tooltip>Spara</Tooltip>
      </TooltipTrigger>
    </>
  );
}
