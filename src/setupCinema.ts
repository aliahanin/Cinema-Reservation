import { Cinema } from "./models/Cinema";
import { Seat } from "./models/Seat";

export const cinema = new Cinema<Seat>();

export function setupCinema() {
  const CinemaDiv = document.getElementById("cinema") as HTMLDivElement;
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 8; j++) {
      const seat = new Seat(i, j);
      cinema.add(seat);
    }
  }
  cinema.render(CinemaDiv);
}
