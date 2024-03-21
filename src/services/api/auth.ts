import axios, { AxiosError } from "axios";
import {
  requestHandler,
  SuccessResponse,
  ErrorResponse,
} from "../../utils/requestHandler";
import { AuthFieldsProps } from "@/pages/LoginPage/LoginCommon";
import { User } from "../../types";
import { SERVER_ADDRESS, API_VERSION } from "../../config";

interface AuthResponse {
  user: User;
  token: string;
}

export const registerUser = requestHandler<AuthFieldsProps, AuthResponse>(
  (params) =>
    axios.post(SERVER_ADDRESS + API_VERSION + "/auth/register", params)
);

export const loginUser = requestHandler<
  { phone: string; password: string },
  AuthResponse
>((params) => axios.post(SERVER_ADDRESS + API_VERSION + "/auth/login", params));

export type AuthFunc = (
  data: AuthFieldsProps
) => Promise<SuccessResponse<AuthResponse> | ErrorResponse<AxiosError>>;
