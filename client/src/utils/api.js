import {each, isNil, values} from "lodash";
import { buildQueryString,Method } from "./buildqueryString";

const prepSubmission = async(unPreppedBody)=>{
    const formDataUnprocessed = values(unPreppedBody).some(value => value instanceof File);
    if(formDataUnprocessed){
        //body must be submitted as a FormData instance
        const formData = new FormData();
        each(formDataUnprocessed, (value, key)=>{
            if(!isNil(value)){
                if(value instanceof File){
                    formData.append(key,value);
                }else{
                    formData.append(key,value.toString())
                }
            }
        })
        //no headers necessary for FormData body
        return { preppedHeaders:{}, preppedBody: formData}
    }
        //submit as json
    return{
            preppedHeaders: { "Content-Type": "application/json"},
            preppedBody: JSON.stringify(unPreppedBody)
    };

}


const run = async(path,method,headers,body) => {
    const response = await fetch(`/v1${path}`,{
        body,credentials:"include",
        headers,method
    });
    const {ok} = response;
    let result;
    try{
        result = await response.json()
    }catch{
        result = {}
    }
    if(ok){
        return result;
    }
    throw new Error(result.error || `Error:${response.statusText}`);
}

export const get = async(path,query) => {
    return run(`${path}${buildQueryString(query)}`,Method.GET);
}

export const post = async(path,body) => {
    const {preppedHeaders, preppedBody} = await prepSubmission(body||{});
    return run(path,Method.POST,preppedHeaders,preppedBody)
}

export const put = async(path,body) => {
   const {preppedHeaders, preppedBody} = await prepSubmission(body||{});
   return run(path,Method.POST,preppedHeaders,preppedBody)
}

export const destroy = async(path,body) => {
    const {preppedHeaders, preppedBody} = await prepSubmission(body||{});
    return run(path,Method.POST,preppedHeaders,preppedBody)
}

export const patch = async(path,body) => {
    const {preppedHeaders, preppedBody} = await prepSubmission(body||{});
    return run(path,Method.POST,preppedHeaders,preppedBody)
}