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
export function handleSales() {
    var _a;
    (_a = document.getElementById("showSalesButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
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
        yield Swal.fire({
            title: "گزارش فروش",
            html: `
        <p>تعداد بلیط فروخته شده: <b>${count}</b></p>
        <p>میزان فروش کل: <b>${totalPrice.toLocaleString()} تومان</b></p>
      `,
            icon: "info",
            confirmButtonText: "باشه"
        });
    }));
}
