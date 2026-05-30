export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
}

export const buildResponse = <T>(success: boolean, message: string, data?: T): ApiResponse<T> => ({
  success,
  message,
  data
});
