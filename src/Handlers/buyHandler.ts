import Swal from "sweetalert2";
import { Cinema } from "../models/Cinema";
import { Seat } from "../models/Seat";

export function handleBuy(cinema: Cinema<Seat>) {
  document.getElementById("buyButton")?.addEventListener("click", async () => {
    const selected = cinema.getSelectedSeats();

    if (selected.length === 0) {
      await Swal.fire({
        title: "هیچ صندلی انتخاب نشده!",
        text: "لطفاً حداقل یک صندلی انتخاب کنید.",
        icon: "warning",
        confirmButtonText: "باشه"
      });
      return;
    }

    const total = selected.length * 10000;

    const result = await Swal.fire({
      title: "تأیید خرید",
      html: `شما <b>${selected.length}</b> صندلی انتخاب کرده‌اید.<br>مبلغ قابل پرداخت: <b>${total.toLocaleString()} تومان</b>.<br>آیا ادامه می‌دهید؟`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "بله، ادامه بده",
      cancelButtonText: "خیر",
      reverseButtons: true
    });

    if (result.isConfirmed) {
      selected.forEach((seat) => {
        seat.saveToStorage();
        seat.reserve();
      });

      const invoice = document.getElementById("invoice")!;
      const invoiceDetails = document.getElementById("invoice-details")!;
      invoiceDetails.innerHTML = `
        <p>مبلغ نهایی : <b>${total.toLocaleString()} تومان</b></p>
        <p>صندلی‌های رزرو شده:</p>
        <ul>
          ${selected.map(s => `<li>ردیف ${s.getInfo().row} --- صندلی ${s.getInfo().number}</li>`).join("")}
        </ul>
      `;
      invoice.style.display = "block";

      await Swal.fire({
        title: "خرید موفق!",
        text: "صندلی‌های شما با موفقیت رزرو شدند.",
        icon: "success",
        timer: 2000,
        showConfirmButton: false
      });
    }
  });
}