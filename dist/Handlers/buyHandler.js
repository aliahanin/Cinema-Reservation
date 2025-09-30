var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Swal from "sweetalert2";
export function handleBuy(cinema) {
    var _a;
    (_a = document.getElementById("buyButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
        const selected = cinema.getSelectedSeats();
        if (selected.length === 0) {
            yield Swal.fire({
                title: "هیچ صندلی انتخاب نشده!",
                text: "لطفاً حداقل یک صندلی انتخاب کنید.",
                icon: "warning",
                confirmButtonText: "باشه"
            });
            return;
        }
        const total = selected.length * 10000;
        const result = yield Swal.fire({
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
            const invoice = document.getElementById("invoice");
            const invoiceDetails = document.getElementById("invoice-details");
            invoiceDetails.innerHTML = `
        <p>مبلغ نهایی : <b>${total.toLocaleString()} تومان</b></p>
        <p>صندلی‌های رزرو شده:</p>
        <ul>
          ${selected.map(s => `<li>ردیف ${s.getInfo().row} --- صندلی ${s.getInfo().number}</li>`).join("")}
        </ul>
      `;
            invoice.style.display = "block";
            yield Swal.fire({
                title: "خرید موفق!",
                text: "صندلی‌های شما با موفقیت رزرو شدند.",
                icon: "success",
                timer: 2000,
                showConfirmButton: false
            });
        }
    }));
}
