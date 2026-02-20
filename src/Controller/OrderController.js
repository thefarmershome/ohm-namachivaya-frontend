import { apiEndPoint } from "../Constant/ApiConstant.js";
import { ApiService } from "../Service/apiService.js";
import { apiConfig } from "../config/Config.js";


const OrderController = {
    async postOrder(data) {
        return await ApiService.callPOST(apiConfig.API_VERSION_1, apiEndPoint.POST_ORDER, "", data);
    },
    async confirmOrder(data) {
        return await ApiService.callPOST(apiConfig.API_VERSION_1, apiEndPoint.CONFIRM_ORDER, "", data);
    }
}
export default OrderController;
