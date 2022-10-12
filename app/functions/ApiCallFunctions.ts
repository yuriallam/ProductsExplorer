import { IP } from "../constants/IP";
import axios from "axios";

const instance = axios.create();

type HTTP_METHODS = "GET";
export async function makeRemoteRequest<T>(url: string, method: HTTP_METHODS, data: any = null) {
    return instance<T>({
        method: method,
        url: url,
        data: data
    });
}


export async function getRequest<T>(path: string) {
    return makeRemoteRequest<T>(IP + path, "GET");
}