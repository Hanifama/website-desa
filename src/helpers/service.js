import API from "./api";

// GUID desa
const GUID = '2305e536-0ef6-48e7-9aac-79ca236433fa';

// Mengambil profil desa
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

// Mengambil UMKM desa
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

// Mengambil berita desa
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

// Mengambil berita kegiatan desa
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

// Mengambil aset desa
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
