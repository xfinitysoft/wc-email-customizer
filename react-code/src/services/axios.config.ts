import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
export const axiosInstance = axios.create({
    baseURL: xseeb_base_url.xseeb_base_url,
    //baseURL: 'http://lastest-version.local',
    headers: { 'X-WP-Nonce': xseeb_base_url.nonce }
});

export const request = {
    async get<T>(url: string, config?: AxiosRequestConfig | undefined) {
        return axiosInstance.get<T>(url, config).then((data) => data.data);
    },
    async post<T>(
        url: string,
        data?: any,
        config?: AxiosRequestConfig | undefined
    ) {
        return axiosInstance.post<T>(url, data, config).then((data) => data.data);
    },
};