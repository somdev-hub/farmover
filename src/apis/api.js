import axios from "axios";

const ADDRESS = "http://localhost:9090";

const email = localStorage.getItem("email");

const apiInstance = axios.create({
  baseURL: ADDRESS,
  headers: {
    "Content-Type": "application/json"
  }
});

const formDataInstance = axios.create({
  baseURL: ADDRESS,
  headers: {
    "Content-Type": "multipart/form-data"
  }
});

apiInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

formDataInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

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
    const response = await apiInstance.post(
      `${ADDRESS}/production/${email}`,
      data
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getProductionData = async () => {
  try {
    // const email = localStorage.getItem("email");
    const response = await apiInstance.get(
      `${ADDRESS}/production/?email=${email}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateProductionData = async (data) => {
  try {
    const response = await apiInstance.put(
      `${ADDRESS}/production/${data.token}`,
      data
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getEachProductionData = async () => {
  try {
    // const email = localStorage.getItem("email");
    const response = await apiInstance.get(
      `${ADDRESS}/production/crops?email=${email}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getQueuedProductionViaToken = async (token) => {
  try {
    const response = await apiInstance.get(
      `${ADDRESS}/production/${token}?email=${email}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUsedServicesInProduction = async () => {
  try {
    const response = await apiInstance.get(
      `${ADDRESS}/production/service-usage?email=${email}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUsedWarehousesInProduction = async () => {
  try {
    const response = await apiInstance.get(
      `${ADDRESS}/production/warehouses?email=${email}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCalendarEvents = async () => {
  try {
    const response = await apiInstance.get(
      `${ADDRESS}/calendar/get-events?email=${email}&role=${localStorage.getItem(
        "role"
      )}`
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
    const response = await formDataInstance.post(
      `${ADDRESS}/warehouse/addWarehouse?email=${email}`,
      formData
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const addStorageArea = async (data) => {
  try {
    const response = await apiInstance.post(
      `${ADDRESS}/storage/addStorage?email=${email}`,
      data
    );
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getStorageAreas = async () => {
  try {
    const response = await apiInstance.get(
      `${ADDRESS}/storage/?email=${email}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getStorageCards = async () => {
  try {
    const response = await apiInstance.get(
      `${ADDRESS}/storage/card?email=${email}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getWarehouses = async () => {
  try {
    const response = await apiInstance.get(`${ADDRESS}/warehouse/all`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getSpecificWarehouse = async (id) => {
  try {
    const response = await apiInstance.get(`${ADDRESS}/warehouse/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getWarehouseByOwner = async () => {
  try {
    const response = await apiInstance.get(
      `${ADDRESS}/warehouse/?email=${email}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addWarehouseUsage = async (data) => {
  try {
    const response = await apiInstance.post(
      `${ADDRESS}/production/add-warehouse?email=${email}`,
      data
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getBookings = async () => {
  try {
    const response = await apiInstance.get(
      `${ADDRESS}/warehouse/bookings?email=${email}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMonthStorageUsage = async () => {
  try {
    const response = await apiInstance.get(
      `${ADDRESS}/warehouse/recent?email=${email}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMonthlySalesOverview = async () => {
  try {
    const response = await apiInstance.get(
      `${ADDRESS}/warehouse/monthly-sales?email=${email}`
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

  try {
    const response = await formDataInstance.post(
      `${ADDRESS}/services/`,
      formData
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getDashboardServices = async () => {
  try {
    const response = await apiInstance.get(
      `${ADDRESS}/services/dashboard?email=${email}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getServicesByOwner = async () => {
  try {
    const response = await apiInstance.get(
      `${ADDRESS}/services/?email=${email}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getSpecificService = async (id) => {
  try {
    const response = await apiInstance.get(`${ADDRESS}/services/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getAvailableServices = async () => {
  try {
    const response = await apiInstance.get(`${ADDRESS}/services/available`);
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
    const response = await apiInstance.post(
      `${ADDRESS}/production/add-service`,
      {
        productionToken: production_token,
        serviceId: service_id,
        email: email,
        duration: duration
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getContractDetails = async () => {
  try {
    const response = await apiInstance.get(
      `${ADDRESS}/services/contract-details/?email=${email}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getExpenseChartData = async () => {
  try {
    const response = await apiInstance.get(
      `${ADDRESS}/chart/expenses?email=${email}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getRevenueChartData = async () => {
  try {
    const response = await apiInstance.get(
      `${ADDRESS}/chart/revenue?email=${email}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductionChartData = async () => {
  try {
    const response = await apiInstance.get(
      `${ADDRESS}/chart/production?email=${email}`
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
    const response = await formDataInstance.post(
      `${ADDRESS}/company/?email=${email}`,
      formData
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getCompanyWarehouseCardsViaItems = async () => {
  try {
    const response = await apiInstance.get(`${ADDRESS}/company/each-item`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getWarehouseMarket = async (id) => {
  try {
    const response = await apiInstance.get(
      `${ADDRESS}/company/warehouse-market/${id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getWarehouseFarmers = async (id) => {
  try {
    const response = await apiInstance.get(
      `${ADDRESS}/company/warehouse/farmers/${id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const purchaseCrops = async (productionTokens) => {
  try {
    const response = await apiInstance.post(
      `${ADDRESS}/company/purchase?email=${email}`,
      {
        ...productionTokens
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getWarehousesByAvailableCrops = async () => {
  try {
    const response = await apiInstance.get(
      `${ADDRESS}/company/warehouses/crops`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCompanyPurchases = async () => {
  try {
    const response = await apiInstance.get(
      `${ADDRESS}/company/purchases?email=${email}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCompanyCropCards = async () => {
  try {
    const response = await apiInstance.get(
      `${ADDRESS}/company/crop-cards?email=${email}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCropsSalesReport = async () => {
  try {
    const response = await apiInstance.get(
      `${ADDRESS}/production/sales-report?email=${email}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getOrderOverview = async (page) => {
  try {
    const response = await apiInstance.get(
      `${ADDRESS}/production/overview?email=${email}&page=${page}&size=5`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getWarehouseSalesOverview = async () => {
  try {
    const response = await apiInstance.get(
      `${ADDRESS}/warehouse/overview?email=${email}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getWarehouseUsageChartData = async () => {
  try {
    const response = await apiInstance.get(
      `${ADDRESS}/chart/warehouse-usage?email=${email}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getWarehouseRevenueFromBookingsChartData = async () => {
  try {
    const response = await apiInstance.get(
      `${ADDRESS}/chart/warehouse-revenue/bookings?email=${email}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getWarehouseRevenueFromSalesChartData = async () => {
  try {
    const response = await apiInstance.get(
      `${ADDRESS}/chart/warehouse-revenue/sales?email=${email}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addVideo = async (data) => {
  const formData = new FormData();
  formData.append("title", data.title);
  formData.append("video", data.video);
  formData.append("tags", JSON.stringify(data.tags));
  formData.append("longDescription", data.longDescription);
  formData.append("description", data.description);
  formData.append("thumbnail", data.thumbnail);

  try {
    const response = await formDataInstance.post(
      `${ADDRESS}/videos/?ownerEmail=${email}`,
      formData
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const addArticle = async (data) => {
  const formData = new FormData();
  formData.append("title", data.title);
  formData.append("tags", JSON.stringify(data.tags));
  formData.append("subHeading", data.subHeading);
  formData.append("thumbnail", data.thumbnail);
  formData.append("content", JSON.stringify(data.content));

  try {
    const response = await formDataInstance.post(
      `${ADDRESS}/articles/?ownerEmail=${email}`,
      formData
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteArticle = async (id) => {
  try {
    const response = await apiInstance.delete(`${ADDRESS}/articles/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getVideosByUser = async () => {
  try {
    const response = await apiInstance.get(
      `${ADDRESS}/videos/get-by-email?ownerEmail=${email}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getArticlesByUser = async () => {
  try {
    const response = await apiInstance.get(
      `${ADDRESS}/articles/get-by-email?ownerEmail=${email}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getVideoById = async (id) => {
  try {
    const response = await apiInstance.get(`${ADDRESS}/videos/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getVideoComments = async (id, page, size) => {
  try {
    const response = await apiInstance.get(
      `${ADDRESS}/videos/comments/${id}?page=${page}&size=${size}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getArticleById = async (id) => {
  try {
    const response = await apiInstance.get(
      `${ADDRESS}/articles/${id}?email=${email}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getVideosForUsers = async (page, size) => {
  try {
    const response = await apiInstance.get(
      `${ADDRESS}/videos/?page=${page}&size=${size}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getArticlesForUsers = async (page, size) => {
  try {
    const response = await apiInstance.get(
      `${ADDRESS}/articles/?page=${page}&size=${size}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addViewToVideo = async (id) => {
  try {
    const response = await apiInstance.put(
      `${ADDRESS}/videos/view/${id}?email=${email}`,
      {}
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const toggleUpVoteVideo = async (id) => {
  try {
    const response = await apiInstance.put(
      `${ADDRESS}/videos/upvote/${id}?email=${email}`,
      {}
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const toggleDownVoteVideo = async (id) => {
  try {
    const response = await apiInstance.put(
      `${ADDRESS}/videos/downvote/${id}?email=${email}`,
      {}
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const addCommentToVideo = async (id, comment) => {
  try {
    const response = await apiInstance.post(`${ADDRESS}/videos/comment/${id}`, {
      comment: comment,
      email: email
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const addViewToArticle = async (id) => {
  try {
    const response = await apiInstance.put(
      `${ADDRESS}/articles/view/${id}?email=${email}`,
      {}
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const toggleUpVoteArticle = async (id) => {
  try {
    const response = await apiInstance.put(
      `${ADDRESS}/articles/upvote/${id}?email=${email}`,
      {}
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const toggleDownVoteArticle = async (id) => {
  try {
    const response = await apiInstance.put(
      `${ADDRESS}/articles/downvote/${id}?email=${email}`,
      {}
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const addCommentToArticle = async (id, comment) => {
  try {
    const response = await apiInstance.post(
      `${ADDRESS}/articles/comment/${id}`,
      {
        comment: comment,
        email: email
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getContentCreatorDashboardCards = async () => {
  try {
    const response = await apiInstance.get(
      `${ADDRESS}/content-creator/cards?email=${email}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getViewsByRolesChartData = async () => {
  try {
    const response = await apiInstance.get(
      `${ADDRESS}/chart/content-creator/views-by-roles?email=${email}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getViewsByMonthChartData = async () => {
  try {
    const response = await apiInstance.get(
      `${ADDRESS}/chart/content-creator/views-by-month?email=${email}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getEngagementsByRolesChartData = async () => {
  try {
    const response = await apiInstance.get(
      `${ADDRESS}/chart/content-creator/engagements-by-roles?email=${email}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getRecentComments = async () => {
  try {
    const response = await apiInstance.get(
      `${ADDRESS}/content-creator/recent?email=${email}&page=0&size=5`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
