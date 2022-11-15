import {each, includes, isNil, values} from "lodash";
import { buildQueryString,Method } from "./buildqueryString";

const prepSubmission = async function (unPreppedBody:any):Promise<{preppedHeaders:{}, preppedBody: string|FormData}>{
    console.log("prepping body");
    const formDataUnprocessed:any = values(unPreppedBody).some(value => value instanceof File);
    if(formDataUnprocessed){
        //body must be submitted as a FormData instance
        const formData = new FormData();
        each(formDataUnprocessed, (value:any, key:any)=>{
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
    }else{
        //submit as json
        return{
            preppedHeaders: { "Content-Type": "application/json"},
            preppedBody: JSON.stringify(unPreppedBody)
        };
    }
}


const run = async(path:any,method:any,headers?:any,body?:any) => {
    console.log("running api call")
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
    }else{
        throw new Error(result.error || `Error:${response.statusText}`);
    }
}

export const get = async(path:any,query:any) => {
    console.log("making get api call");
    return await run(`${path}${buildQueryString(query)}`,Method.GET);
}

export const post = async(path:any,body:any) => {
    console.log("making post api call")
    const {preppedHeaders, preppedBody} = await prepSubmission(body||{});
    return await run(path,Method.POST,preppedHeaders,preppedBody)
}

export const put = async(path:any,body:any) => {
   console.log("making put api call");
   const {preppedHeaders, preppedBody} = await prepSubmission(body||{});
   return await run(path,Method.POST,preppedHeaders,preppedBody)
}

export const destroy = async(path:any,body:any) => {
    console.log("making delete call")
    const {preppedHeaders, preppedBody} = await prepSubmission(body||{});
    return await run(path,Method.POST,preppedHeaders,preppedBody)
}

export const patch = async(path:any,body:any) => {
    console.log("making patch call")
    const {preppedHeaders, preppedBody} = await prepSubmission(body||{});
    return await run(path,Method.POST,preppedHeaders,preppedBody)
}