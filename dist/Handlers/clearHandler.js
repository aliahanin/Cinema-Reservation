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
export function handleClear() {
    var _a;
    (_a = document.getElementById("clearStorageButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
        const result = yield Swal.fire({
            title: "آیا مطمئن هستید؟",
            text: "با حذف اطلاعات، تمامی صندلی‌های رزرو شده پاک می‌شوند!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "بله، حذف کن",
            cancelButtonText: "خیر، منصرف شدم",
            reverseButtons: true
        });
        if (result.isConfirmed) {
            localStorage.clear();
            yield Swal.fire({
                title: "اطلاعات حذف شد!",
                text: "تمامی اطلاعات ذخیره شده پاک شدند.",
                icon: "success",
                timer: 2000,
                showConfirmButton: false
            });
            location.reload();
        }
        else {
            yield Swal.fire({
                title: "لغو شد!",
                text: "اطلاعات شما دست نخورده باقی ماند.",
                icon: "info",
                timer: 1500,
                showConfirmButton: false
            });
        }
    }));
}
