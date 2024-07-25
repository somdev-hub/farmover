import axios from "axios";

const ADDRESS = "http://localhost:9090";
const NODE_ADDRESS = "http://localhost:5000";

const email = localStorage.getItem("email");

export const signup = async (data) => {
  try {
    console.log(data);
    const response = await axios.post(`${ADDRESS}/register`, data, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (data) => {
  try {
    const response = await axios.post(`${ADDRESS}/login`, data, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const postProductionData = async (data) => {
  try {
    console.log(email);
    const response = await axios.post(`${ADDRESS}/production/${email}`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getProductionData = async () => {
  try {
    // const email = localStorage.getItem("email");
    const response = await axios.get(`${ADDRESS}/production/?email=${email}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateProductionData = async (data) => {
  try {
    const response = await axios.put(
      `${ADDRESS}/production/${data.token}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getEachProductionData = async () => {
  try {
    // const email = localStorage.getItem("email");
    const response = await axios.get(
      `${ADDRESS}/production/crops?email=${email}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getQueuedProductionViaToken = async (token) => {
  try {
    const response = await axios.get(
      `${ADDRESS}/production/${token}?email=${email}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCalendarEvents = async () => {
  try {
    const response = await axios.get(
      `${ADDRESS}/calendar/get-events?email=${email}&role=${localStorage.getItem(
        "role"
      )}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const postWarehouseData = async (data) => {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("warehouseDetails", data.warehouseDetails);
  formData.append("facilities", JSON.stringify(data.facilities));
  formData.append("address", data.warehouseAddress);
  formData.append("pin", data.pin);
  formData.append("ownership", data.ownership);
  formData.append("warehouseBackground", data.warehouseBackground);
  formData.append("warehouseImage", data.warehouseImage);

  try {
    const response = await axios.post(
      `${ADDRESS}/warehouse/addWarehouse?email=${email}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const addStorageArea = async (data) => {
  try {
    const response = await axios.post(
      `${ADDRESS}/storage/addStorage?email=${email}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getStorageAreas = async () => {
  try {
    const response = await axios.get(`${ADDRESS}/storage/?email=${email}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getStorageCards = async () => {
  try {
    const response = await axios.get(`${ADDRESS}/storage/card?email=${email}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getWarehouses = async () => {
  try {
    const response = await axios.get(`${ADDRESS}/warehouse/all`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getSpecificWarehouse = async (id) => {
  try {
    const response = await axios.get(`${ADDRESS}/warehouse/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getWarehouseByOwner = async () => {
  try {
    const response = await axios.get(`${ADDRESS}/warehouse/?email=${email}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addWarehouseUsage = async (data) => {
  try {
    const response = await axios.post(
      `${ADDRESS}/production/add-warehouse?email=${email}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getBookings = async () => {
  try {
    const response = await axios.get(
      `${ADDRESS}/warehouse/bookings?email=${email}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addService = async (data) => {
  const formData = new FormData();
  formData.append("serviceName", data.serviceName);
  formData.append("serviceType", data.serviceType);
  formData.append("serviceDescription", data.serviceDescription);
  formData.append("status", data.status);
  formData.append("pricePerDay", data.pricePerDay);
  formData.append("features", JSON.stringify(data.features));
  formData.append("machineType", data.machineType);
  formData.append("machineLoad", data.machineLoad);
  formData.append("fuelType", data.fuelType);
  formData.append("serviceImage", data.serviceImage);
  formData.append("email", email);

  // for (let [key, value] of formData.entries()) {
  //   console.log(`${key}: ${value}`);
  // }

  try {
    const response = await axios.post(`${ADDRESS}/services/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
    // console.log(response.data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getDashboardServices = async () => {
  try {
    const response = await axios.get(
      `${ADDRESS}/services/dashboard?email=${email}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getServicesByOwner = async () => {
  try {
    const response = await axios.get(`${ADDRESS}/services/?email=${email}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getSpecificService = async (id) => {
  try {
    const response = await axios.get(`${ADDRESS}/services/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getAvailableServices = async () => {
  try {
    const response = await axios.get(`${ADDRESS}/services/available`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const purchaseService = async (
  service_id,
  duration,
  production_token
) => {
  try {
    const response = await axios.post(
      `${ADDRESS}/production/add-service`,
      {
        productionToken: production_token,
        serviceId: service_id,
        email: email,
        duration: duration
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getContractDetails = async () => {
  try {
    const response = await axios.get(
      `${ADDRESS}/services/contract-details/?email=${email}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getExpenseChartData = async () => {
  try {
    const response = await axios.get(
      `${ADDRESS}/chart/expenses?email=${email}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getRevenueChartData = async () => {
  try {
    const response = await axios.get(
      `${ADDRESS}/chart/revenue?email=${email}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductionChartData = async () => {
  try {
    const response = await axios.get(
      `${ADDRESS}/chart/production?email=${email}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addCompany = async (data) => {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("companyDetails", data.companyDetails);
  formData.append("address", data.address);
  formData.append("pin", data.pin);
  formData.append("ownership", data.ownership);
  formData.append("companyIndustry", data.companyIndustry);
  formData.append("companyImage", data.companyImage);

  try {
    const response = await axios.post(
      `${ADDRESS}/company/?email=${email}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getCompanyWarehouseCardsViaItems = async () => {
  try {
    const response = await axios.get(`${ADDRESS}/company/each-item`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getWarehouseMarket = async (id) => {
  try {
    const response = await axios.get(
      `${ADDRESS}/company/warehouse-market/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getWarehouseFarmers = async (id) => {
  try {
    const response = await axios.get(
      `${ADDRESS}/company/warehouse/farmers/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const purchaseCrops = async (productionTokens) => {
  try {
    const response = await axios.post(
      `${ADDRESS}/company/purchase?email=${email}`,
      {
        ...productionTokens
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getWarehousesByAvailableCrops = async () => {
  try {
    const response = await axios.get(`${ADDRESS}/company/warehouses/crops`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCompanyPurchases = async () => {
  try {
    const response = await axios.get(
      `${ADDRESS}/company/purchases?email=${email}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCompanyCropCards = async () => {
  try {
    const response = await axios.get(
      `${ADDRESS}/company/crop-cards?email=${email}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCropsSalesReport = async () => {
  try {
    const response = await axios.get(
      `${ADDRESS}/production/sales-report?email=${email}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getOrderOverview = async () => {
  try {
    const response = await axios.get(
      `${ADDRESS}/production/overview?email=${email}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getWarehouseSalesOverview = async () => {
  try {
    const response = await axios.get(
      `${ADDRESS}/warehouse/overview?email=${email}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getWarehouseUsageChartData = async () => {
  try {
    const response = await axios.get(
      `${ADDRESS}/chart/warehouse-usage?email=${email}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getWarehouseRevenueFromBookingsChartData = async () => {
  try {
    const response = await axios.get(
      `${ADDRESS}/chart/warehouse-revenue/bookings?email=${email}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getWarehouseRevenueFromSalesChartData = async () => {
  try {
    const response = await axios.get(
      `${ADDRESS}/chart/warehouse-revenue/sales?email=${email}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
