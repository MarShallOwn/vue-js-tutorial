import { serviceProvider } from "./serviceProviders";

export const getJobsAPI = <T>() => serviceProvider.get<T>("/jobs");

export const getJobAPI = <T>(id: number) => serviceProvider.get<T>(`/jobs/${id}`);