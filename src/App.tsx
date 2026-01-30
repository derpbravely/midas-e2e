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
  ListBoxItem,
  DateField,
  DatePicker,
  DialogTrigger,
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
  TabList,
  Tab,
  TabPanel,
} from "@midas-ds/components";
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
import "@midas-ds/components/default.css";
import ModalWithComboBox from "./ModalWithComboBox";

export default function App() {
  return (
    <>
      <ModalWithComboBox />
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
        <ListBoxItem id="Lime">Lime</ListBoxItem>
        <ListBoxItem id="Äpple">Äpple</ListBoxItem>
        <ListBoxItem id="Banan">Banan</ListBoxItem>
        <ListBoxItem id="Kiwi">Kiwi</ListBoxItem>
        <ListBoxItem id="Apelsin">Apelsin</ListBoxItem>
      </ComboBox>
      <DatePicker label="Välj ett datum" />
      <DateField label="Etikett" description="Beskrivning" />
      <Grid>
        <GridItem size={12}>
          <span>size=12</span>
        </GridItem>
        <GridItem size={3}>
          <span>size=3</span>
        </GridItem>
        <GridItem size={4}>
          <span>size=4</span>
        </GridItem>
        <GridItem size={5}>
          <span>size=5</span>
        </GridItem>
        <GridItem size={4}>
          <span>size=4</span>
        </GridItem>
        <GridItem size={4}>
          <span>size=4</span>
        </GridItem>
        <GridItem size={4}>
          <span>size=4</span>
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
        items={[
          { id: "apelsin", name: "Apelsin" },
          { id: "banan", name: "Banan" },
          { id: "citron", name: "Citron" },
          { id: "dadel", name: "Dadel" },
          { id: "fikon", name: "Fikon" },
        ]}
      >
        {(item) => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
      </Select>
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
      <Tabs>
        <TabList aria-label="Viktig information om frukter och bär">
          <Tab id="vitaminer">...</Tab>
          <Tab id="frukter">...</Tab>
          <Tab id="hallon">...</Tab>
        </TabList>
        <TabPanel id="vitaminer">...</TabPanel>
        <TabPanel id="frukter">...</TabPanel>
        <TabPanel id="hallon">...</TabPanel>
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
              },
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
