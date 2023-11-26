import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import MainContent from "src/app/components/mainContent.tsx";
import { mockEvents } from "../../../fixtures/sportsEventsMock";

describe("Main Content", () => {
  it("Component renders", async () => {
    render(<MainContent sportsEventList={mockEvents} />);
    // expect(container).toBeDefined();
  });
});
