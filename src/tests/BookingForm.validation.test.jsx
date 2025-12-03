import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import BookingForm from "../components/BookingForm";

beforeEach(() => {
    window.fetchAPI = vi.fn(() => ["17:00"]);
    window.submitAPI = vi.fn(() => true);
});

test("date input has required attribute", () => {
    render(<BookingForm availableTimes={["17:00"]} dispatch={vi.fn()} onSuccess={() => {}} />);
    const input = screen.getByLabelText(/choose date/i);
    expect(input).toBeRequired();
});

test("time select has required attribute", () => {
    render(<BookingForm availableTimes={["17:00"]} dispatch={vi.fn()} onSuccess={() => {}} />);
    const select = screen.getByLabelText(/choose time/i);
    expect(select).toBeRequired();
});

test("guests input has min and max", () => {
    render(<BookingForm availableTimes={["17:00"]} dispatch={vi.fn()} onSuccess={() => {}} />);
    const guests = screen.getByLabelText(/guests/i);
    expect(guests).toHaveAttribute("min", "1");
    expect(guests).toHaveAttribute("max", "10");
    expect(guests).toBeRequired();
});

test("occasion select has required attribute", () => {
    render(<BookingForm availableTimes={["17:00"]} dispatch={vi.fn()} onSuccess={() => {}} />);
    const occasion = screen.getByLabelText(/occasion/i);
    expect(occasion).toBeRequired();
});
