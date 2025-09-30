export class Cinema {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    getSelectedSeats() {
        return this.items.filter((item) => typeof item.isSelected === "function" && item.isSelected());
    }
    render(container) {
        this.items.forEach((item) => {
            if (item.LoadReserve)
                item.LoadReserve();
            if (item.getElement)
                container.appendChild(item.getElement());
        });
    }
}
