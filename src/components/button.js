import React, { useState, useEffect } from "react";
import {
  Button,
  ToggleButtonGroup,
  ToggleButton,
  ButtonToolbar,
  InputGroup,
  FormControl,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

//Normal button in React bootstrap
export function Btn() {
  return (
    <div>
      <Button variant="primary" style={{ marginRight: "5px" }} pill>
        Click me
      </Button>
      <Button variant="primary" active size="lg">
        Click me
      </Button>
    </div>
  );
}

//Button Loader in React bootstrap
function PromiseTesting() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

export function ButtonLoader() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      PromiseTesting().then(() => {
        setLoading(false);
      });
    }
  });
  const handleClick = () => setLoading(true);
  return (
    <div className="d-flex justify-content-center">
      <Button
        variant="primary"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
        className="mt-2"
      >
        {isLoading ? "Loading" : "Click to load"}
      </Button>
    </div>
  );
}

//CUncontrolled heckboxes and Radio buttons in React bootstrap
export function RadioCheckboxButton() {
  return (
    <div>
      <p>Select the courses you like</p>
      <ToggleButtonGroup type="checkbox" size="sm" vertical>
        <ToggleButton value={1}>Button 1</ToggleButton>
        <ToggleButton value={2}>Button 2</ToggleButton>
        <ToggleButton value={3}>Button 3</ToggleButton>
      </ToggleButtonGroup>
      <p>Select from the options below</p>
      <ToggleButtonGroup type="radio" name="options" className="ml-3" size="sm">
        <ToggleButton value={1}>Radio Button 1</ToggleButton>
        <ToggleButton value={2}>Radio Button 2</ToggleButton>
        <ToggleButton value={3}>Radio Button 3</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

//Controlled Checkboxes in react
export function ControlledCheckbox() {
  const [value, setValue] = useState(false);

  const handleChange = (val) => setValue(val);

  return (
    <ToggleButtonGroup
      type="checkbox"
      value={value}
      onChange={handleChange}
      className="mt-2"
      size="sm"
    >
      <ToggleButton value={1}>Option 1</ToggleButton>
      <ToggleButton value={2}>Option 2</ToggleButton>
      <ToggleButton value={3}>Option 3</ToggleButton>
    </ToggleButtonGroup>
  );
}

export function InputFunction() {
  return (
    <div className="mt-2">
      <p className="ml-3">12345fghut</p>
      <ButtonToolbar>
        <InputGroup>
          <InputGroup.Prepend className="ml-3">
            <InputGroup.Text>@</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            type="text"
            placeholder="Enter the same character as seen above"
          ></FormControl>
        </InputGroup>
      </ButtonToolbar>
    </div>
  );
}

//DropDown Button in React Bootstrap
export function Btn2() {
  return (
    <DropdownButton size="lg" className="ml-3 mt-3" title="Dropdown Button">
      <DropdownItem eventKey={1} href="http://www.clacified.com">
        Laundry
      </DropdownItem>
      <Dropdown.Divider />
      <DropdownItem eventKey={2} href="http://www.clacified.com">
        Cooking
      </DropdownItem>
      <Dropdown.Divider />
      <DropdownItem eventKey={3} href="http://www.clacified.com">
        Barbing
      </DropdownItem>
    </DropdownButton>
  );
}
