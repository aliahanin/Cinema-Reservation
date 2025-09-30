import { Reservable } from "./Reservable";
export class Seat extends Reservable {
    constructor(row, number) {
        super();
        this.row = row;
        this.number = number;
        this.reserved = false;
        this.selected = false;
        this.element = document.createElement("div");
        this.element.classList.add("seat");
        this.element.addEventListener("click", () => this.toggleSelect());
        this.updateUI();
    }
    toggleSelect() {
        if (this.reserved)
            return;
        this.selected = !this.selected;
        this.updateUI();
    }
    updateUI() {
        this.element.classList.remove("reserved", "selected");
        if (this.reserved) {
            this.element.classList.add("reserved");
        }
        else if (this.selected) {
            this.element.classList.add("selected");
        }
    }
    reserve() {
        this.reserved = true;
        this.selected = false;
        this.updateUI();
    }
    isReserve() {
        return this.reserved;
    }
    isSelected() {
        return this.selected;
    }
    getElement() {
        return this.element;
    }
    saveToStorage() {
        const key = `seat-${this.row}-${this.number}`;
        localStorage.setItem(key, "reserved");
    }
    LoadReserve() {
        const key = `seat-${this.row}-${this.number}`;
        if (localStorage.getItem(key) === "reserved") {
            this.reserve();
        }
    }
    getInfo() {
        return { row: this.row, number: this.number };
    }
}
