import Work from ".";
import { mount } from "cypress/react";

describe("<Stepper />", () => {
  it("mounts", () => {
    mount(<Work />);
  });
});
