import {
  Sample,
  AlertDismissible,
  Example,
  AlertDismissibleButton,
} from "./components/alert";
import { Grids } from "./components/grid";
import { Bread } from "./components/Breadcrumb";
import {
  Btn,
  ButtonLoader,
  RadioCheckboxButton,
  ControlledCheckbox,
  InputFunction,
  Btn2,
} from "./components/button";
import { NavCard } from "./components/imageEffect/navigation";
import { CarouselDisplay } from "./components/carousel";
import { FormHandler, CRBoxes } from "./components/FormActions/form";
import { FormValidation } from "./components/FormActions/fomValidation";
import { CardDisplay } from "./components/imageEffect/card";
import "bootstrap/scss/bootstrap.scss";
import './custom.scss';
import { ImageShow} from "./components/imageEffect/imageShow";
import {Jumbo} from './components/imageEffect/Jumbotron';

function App() {
  return (
    <div className="App">
      <Bread />
      <Sample />
      <Grids />
      <AlertDismissible />
      <Example />
      <AlertDismissibleButton />
      <Btn />
      <ButtonLoader />
      <RadioCheckboxButton />
      <ControlledCheckbox />
      <InputFunction />
      <Btn2 />
      <NavCard />
      <CarouselDisplay />
      <FormHandler />
      <CRBoxes />
      <FormValidation />
      <CardDisplay />
      <ImageShow />
      <Jumbo />
    </div>
  );
}

export default App;
