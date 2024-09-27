import API from "./api";

// Village GUID 
const GUID = 'c7442333-41ae-4629-b9a6-dd3256513d40';

// Fetch the village profile
export const fetchVillageProfile = async () => {
  try {
    const response = await API.get(`/api/village/profile`, {
      params: { guid: GUID },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching village profile:', error);
    throw error;
  }
};

// Fetch village UMKM (Micro, Small, and Medium Enterprises)
export const fetchVillageUMKM = async (page = 1, limit = 10) => {
  try {
    const response = await API.get(`/api/umkm/village`, {
      params: { guid: GUID, page, limit },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching village UMKM:', error);
    throw error;
  }
};

// Fetch village news
export const fetchVillageNews = async (page = 1, limit = 10) => {
  try {
    const response = await API.get(`/api/report/village`, {
      params: { guid: GUID, page, limit, type: 'news' },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching village news:', error);
    throw error;
  }
};

// Fetch village activities
export const fetchVillageActivities = async (page = 1, limit = 10) => {
  try {
    const response = await API.get(`/api/report/village`, {
      params: { guid: GUID, page, limit, type: 'activity' },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching village activities:', error);
    throw error;
  }
};

// Fetch village assets
export const fetchVillageAssets = async (page = 1, limit = 10) => {
  try {
    const response = await API.get(`/api/report/village`, {
      params: { guid: GUID, page, limit, type: 'asset' },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching village assets:', error);
    throw error;
  }
};
