import {each, isEmpty, isUndefined, toString} from "lodash";

export const Method = {
    DELETE : "DELETE",
    GET : "GET",
    PATCH : "PATCH",
    POST : "POST",
    PUT : "PUT",
}

export const buildQueryString = async (query) => {
    if(isEmpty(query)){
        return "";
    }
    const result = [];
    each(query,(value,key) =>{
        if(!isUndefined(value)){
            result.push(`${key}=${encodeURIComponent(toString(value))}`);
        }
    });
    return `?${result.join("&")}`;
}