import axios from 'axios';
// const baseUrl = 'http://192.168.0.151:4004/';

const baseUrl = 'http://192.168.1.4:4004/';
// const baseUrl = 'http://56.228.23.224:4004/';

axios.interceptors.response.use(
    response => response,
    error => {
      console.error('Axios error:', error);
      return Promise.reject(error);
    }
  );

  export const postRequest=async (url:string,data:any,successCallback:(data:any)=>void,errorCallback:(data:any)=>void)=>{
    console.log(`${baseUrl}${url}`)
    console.log(data)
    try {
        const response = await axios.post(`${baseUrl}${url}`,data);
        console.log('***>',response.data);
        if(!response)errorCallback(response) 
        successCallback(response.data)
      } catch (error) {
        errorCallback(error)
        console.log('***>> ',error);

      }
}

export const putRequest=async (url:string,data:any,successCallback:(data:any)=>void,errorCallback:(data:any)=>void)=>{
  console.log(`${baseUrl}${url}`)
  try {
      const response = await axios.put(`${baseUrl}${url}`,data);
      console.log('***>',response.data);
      if(!response)errorCallback(response) 
      successCallback(response.data)
    } catch (error) {
      errorCallback(error)
      console.log('***>> ',error);

    }
}

  export const getRequest=async (url:string,successCallback:(data:any)=>void,errorCallback:(data:any)=>void)=>{
    console.log(`${baseUrl}${url}`)
    try {
        const response = await axios.get(`${baseUrl}${url}`);
        console.log('***>',response.data);
        if(!response)errorCallback(response) 
        successCallback(response.data)
      } catch (error) {
        errorCallback(error)
        console.log('***>> ',error);

      }
}