import Swal from "sweetalert2";

export function handleClear() {
  document.getElementById("clearStorageButton")?.addEventListener("click", async () => {
    const result = await Swal.fire({
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

      await Swal.fire({
        title: "اطلاعات حذف شد!",
        text: "تمامی اطلاعات ذخیره شده پاک شدند.",
        icon: "success",
        timer: 2000,
        showConfirmButton: false
      });

      location.reload();
    } else {
      await Swal.fire({
        title: "لغو شد!",
        text: "اطلاعات شما دست نخورده باقی ماند.",
        icon: "info",
        timer: 1500,
        showConfirmButton: false
      });
    }
  });
}