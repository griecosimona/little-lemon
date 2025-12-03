import { render, screen } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

test("renders the Choose date label", () => {
    // 👇 MOCK dell'API prima di renderizzare il componente
    window.fetchAPI = vi.fn(() => ["17:00", "18:00"]);
    window.submitAPI = vi.fn(() => true); // ti servirà più avanti per handleSubmit

    const mockDispatch = vi.fn();

    render(
        <BookingForm
            availableTimes={["17:00", "18:00"]} // se il componente le usa come prop
            dispatch={mockDispatch}
            onSuccess={() => {}}
        />
    );

    const label = screen.getByText(/choose date/i);
    expect(label).toBeInTheDocument();
});
