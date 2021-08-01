import {render} from "@testing-library/react";
import App from "./App";

test("h1 is rendered", ()=>{
   const {getByText} = render(<App/>);
   console.log(getByText);
   const h1 = getByText(/Hello react testing library!/);
   expect(h1).toHaveTextContent("Hello react testing library!");
});