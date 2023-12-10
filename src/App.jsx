import "./App.css";
import Button from "./Components/Button/Button";
import Container from "./Components/Container/Container";
import IconButton from "./Components/IconButton/IconButton";
import Input from "./Components/Input/Input";
import Modal from "./Components/Modal/Modal";
import Space from "./Components/Space/Space";
import Table from "./Components/Table/Table";
import Header from "./Components/Header/Header";
import Tag from "./Components/Tag/Tag";
import Text from "./Components/Text/Text";
import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleInputChange = (value) => {
    setSearchValue(value);
    console.log("Input changed:", value);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    console.log("Closed modal");
  };
  const handleActionClick = () => {
    console.log("Action clicked");
  };

  const columns = [
    { key: "name", header: "Name" },
    { key: "age", header: "Age" },
    { key: "city", header: "City" },
  ];

  const data = [
    { name: "Baker", age: 22, city: "Iraq" },
    { name: "Yaseen", age: 21, city: "Iraq" },
    { name: "Ali", age: 25, city: "Iraq" },
  ];

  return (
    <>
      <Header
        brand="My App"
        action={
          <IconButton
            type="secondary"
            size="md"
            onClick={handleActionClick}
            icon="⭕"
          >
            Action
          </IconButton>
        }
      ></Header>
      <Container>
        <Text bold={"false"} size={20}>
          this is a header
        </Text>
        <Space height="16px" width="16px" />
        <Button
          type="primary"
          size="md"
          onClick={() => console.log("Button clicked")}
        >
          Click me
        </Button>
        <Text bold={"false"} size={20}>
          this is a normal button
        </Text>
        <Space height="16px" width="16px" />
        <IconButton
          type="primary"
          size="md"
          onClick={() => console.log("Search clicked")}
          icon="🔍"
        >
          Search
        </IconButton>
        <Text bold={"false"} size={20}>
          this is a button with an icon
        </Text>
        <Space height="16px" width="16px" />
        <Input
          placeholder="Enter your search"
          value={searchValue}
          onChange={handleInputChange}
        />
        <Text bold={"false"} size={20}>
          this is an input space
        </Text>
        <Space height="16px" width="16px" />
        <button className="modal-button" onClick={handleOpenModal}>
          Open Modal
        </button>
        <Space height="16px" width="16px" />
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title="Sample Modal"
          description="This is a sample modal with a title and description."
        />
        <Text bold={"false"} size={20}>
          this is a modal
        </Text>
        <Space height="16px" width="16px" />

        <Table columns={columns} data={data} />
        <Text bold={"false"} size={20}>
          this is a table
        </Text>
        <Space height="16px" width="16px" />
        <Tag color="#ff5c5c">Error</Tag>
        <Tag color="#5c8dff">Info</Tag>
        <Tag color="#66d966">Success</Tag>
        <Text bold={"false"} size={20}>
          these are basic tags
        </Text>
      </Container>
    </>
  );
}

export default App;
