import { setupCinema, cinema } from "./setupCinema";
import { handleBuy } from "./Handlers/buyHandler";
import { handleClear } from "./Handlers/clearHandler";
import { handleSales } from "./Handlers/salesHandler";
setupCinema();
handleBuy(cinema);
handleClear();
handleSales();
