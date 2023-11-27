import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import MainContent from "src/app/components/mainContent.tsx";

import { mockEvents } from "../../../fixtures/sportsEventsMock";

describe("Main Content", () => {
  test("Component renders", async () => {
    const { container } = render(<MainContent sportsEventList={mockEvents} />);
    expect(container).toBeDefined();
  });
});
