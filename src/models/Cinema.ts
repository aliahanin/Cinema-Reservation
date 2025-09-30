
import { Reservable } from "./Reservable";
export class Cinema<T extends Reservable> {
  private items: T[] = [];
  add(item: T): void {
    this.items.push(item);
  }
  getSelectedSeats(): T[] {
    return this.items.filter(
      (item: any) => typeof item.isSelected === "function" && item.isSelected()
    );
  }
  render(container: HTMLDivElement): void {
    this.items.forEach((item: any) => {
      if (item.LoadReserve) item.LoadReserve();
      if (item.getElement) container.appendChild(item.getElement());
    });
  }
}
