import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import SportsCard from "src/app/components/sportsCard";

import { mockEvents } from "../../../fixtures/sportsEventsMock";

describe("Sports Card", () => {
  const [mockCard] = mockEvents;

  const mockOnClick = jest.fn();

  const mockProps = {
    card: mockCard,
    onClick: mockOnClick,
    ctaText: "Select",
    isDisabled: false,
  };

  test("Component renders", () => {
    const { container } = render(<SportsCard {...mockProps} />);
    expect(container).toBeDefined();
    expect(screen.getByText(mockCard.name)).toBeInTheDocument();
    expect(screen.getByText(mockCard.category)).toBeInTheDocument();
  });

  test("Should call onClick on cta click if cta is not disabled", async () => {
    const user = userEvent.setup();
    render(<SportsCard {...mockProps} isDisabled={false} />);
    const cta = screen.getByRole("button", { name: /Select/ });
    await user.click(cta);
    expect(mockOnClick).toHaveBeenCalled();
  });

  test("Should disable cta onclick when is disabled is true", async () => {
    render(<SportsCard {...mockProps} isDisabled={true} />);
    const cta = screen.getByRole("button", { name: /Select/ });
    expect(cta).toBeDisabled();
  });
});
