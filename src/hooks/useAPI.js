// src/hooks/useVillageMarket.js
import { useState, useEffect } from 'react';
import { fetchVillageActivities, fetchVillageAssets, fetchVillageNews, fetchVillageProfile, fetchVillageUMKM } from '../helpers/service';

export const useVillageMarket = (page = 1, limit = 10) => {
    const [assets, setAssets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadAssets = async () => {
            try {
                const data = await fetchVillageAssets(page, limit);
                setAssets(data.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to load assets');
                setLoading(false);
            }
        };

        loadAssets();
    }, [page, limit]);

    return { assets, loading, error };
};

export const useVillageProfile = () => {
    const [profile, setProfile] = useState(null);
    const [aparattus, setApparatus] = useState(null)
    const [boundaryData, setBoundaryData] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            setLoading(true);
            try {
                const data = await fetchVillageProfile();
                setProfile(data.vaillage);
                setApparatus(data.vaillage.organizationalStructure);
                setBoundaryData(data.vaillage.villageBoundaries);                
            } catch (err) {
                setError('Failed to load village profile');
            } finally {
                setLoading(false);
            }
        };
        fetchProfile();
    }, []);

    return { profile, aparattus, boundaryData, loading, error };
};

export const useVillageNews = () => {
    const [news, setNews] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            setLoading(true);
            try {
                const data = await fetchVillageNews();
                setNews(data.data);
            } catch (err) {
                setError('Failed to load village profile');
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    return { news, loading, error };
};

export const useVillageUMKM = () => {
    const [produkUMKM, setprodukUMKM] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            setLoading(true);
            try {
                const data = await fetchVillageUMKM();
                setprodukUMKM(data.data);
            } catch (err) {
                setError('Failed to load village profile');
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    return { produkUMKM, loading, error };
};

export const useVillageActivities = () => {
    const [activities, setActivities] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            setLoading(true);
            try {
                const data = await fetchVillageActivities();
                setActivities(data.data);
            } catch (err) {
                setError('Failed to load village profile');
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    return { activities, loading, error };
};
