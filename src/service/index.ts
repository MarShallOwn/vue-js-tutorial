import { serviceProvider } from "./serviceProviders";

export const getJobsAPI = <T>() => serviceProvider.get<T>("/jobs");

export const getJobAPI = <T>(id: number) => serviceProvider.get<T>(`/jobs/${id}`);

export const getUserByEmailAPI = <T>(email: string) => serviceProvider.get<T>(`/users?email=${email}`);

export const getUsersAPI = <T>() => serviceProvider.get<T>(`/users`);

export const registerUserAPI = <T>(data: T) => serviceProvider.post<T>(`/users`, data);