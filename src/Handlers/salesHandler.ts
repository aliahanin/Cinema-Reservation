import Swal from "sweetalert2";

export function handleSales() {
  document.getElementById("showSalesButton")?.addEventListener("click", async () => {
    let count = 0;
    const TICKET_PRICE = 10000;

    for (let i = 1; i <= 5; i++) {
      for (let j = 1; j <= 8; j++) {
        const key = `seat-${i}-${j}`;
        if (localStorage.getItem(key) === "reserved") {
          count++;
        }
      }
    }

    const totalPrice = count * TICKET_PRICE;

    await Swal.fire({
      title: "گزارش فروش",
      html: `
        <p>تعداد بلیط فروخته شده: <b>${count}</b></p>
        <p>میزان فروش کل: <b>${totalPrice.toLocaleString()} تومان</b></p>
      `,
      icon: "info",
      confirmButtonText: "باشه"
    });
  });
}