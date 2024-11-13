import axios from 'axios';
const commonAPI=async(httpMEthod,url,reqbody)=>{
    const reqConfig={
        method:httpMEthod,
        url,
        data:reqbody
    }
    return await axios(reqConfig).then(res=>{
        return res
    })
    .catch(err=>{
        return err
    })
}
export default commonAPI