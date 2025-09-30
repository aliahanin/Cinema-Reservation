import { Reservable } from "./Reservable";
import { SeatInfo } from "../Interface/SeatInfo";

export class Seat extends Reservable {
  private element: HTMLDivElement;
  private reserved: boolean = false;
  private selected: boolean = false;
  constructor(public row: number, public number: number) {
    super();
    this.element = document.createElement("div");
    this.element.classList.add("seat");
    this.element.addEventListener("click", () => this.toggleSelect());
    this.updateUI();
  }
  toggleSelect() {
    if (this.reserved) return;
    this.selected = !this.selected;
    this.updateUI();
  }

  updateUI(): void {
    this.element.classList.remove("reserved", "selected");
    if (this.reserved) {
      this.element.classList.add("reserved");
    } else if (this.selected) {
      this.element.classList.add("selected");
    }
  }
  reserve(): void {
    this.reserved = true;
    this.selected = false;
    this.updateUI();
  }
  isReserve(): boolean {
    return this.reserved;
  }
  isSelected(): boolean {
    return this.selected;
  }
  getElement(): HTMLDivElement {
    return this.element;
  }
  saveToStorage(): void {
    const key = `seat-${this.row}-${this.number}`;
    localStorage.setItem(key, "reserved");
  }
  LoadReserve(): void {
    const key = `seat-${this.row}-${this.number}`;
    if (localStorage.getItem(key) === "reserved") {
      this.reserve();
    }
  }

  getInfo(): SeatInfo {
    return { row: this.row, number: this.number };
  }
}
