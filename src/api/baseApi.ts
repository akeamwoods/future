import axios from 'axios';

const BASE_URL = 'https://search-api.fie.future.net.uk/widget.php';

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const get = async (params = {}) => {
  try {
    const response = await apiClient.get('', { params });
    return response.data;
  } catch (error) {
    console.error('API GET error:', error);
    throw error;
  }
};
