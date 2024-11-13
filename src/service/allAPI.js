import commonAPI from "./commonApi"
import SERVER_URL from "./Server_url"

// save video 
// save video api call by add.jsx
export  const addVideo=async(video)=>{
   return await commonAPI("POST",`${SERVER_URL}/AddVideos`,video)

}

// get video
// get video api call by view.jsx
export const getAllVideo=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/AddVideos`,"")
    
}

// api call for deleting video card
export const deleteVideo=async(videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/AddVideos/${videoId}`,{})
    
}
// api call for save history
     export const saveHistory=async(video)=>{
    return await commonAPI("POST",`${SERVER_URL}/History`,video)
}
// api to show history
export const getAllHistory=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/History`,"")
}
// api to delete history
export const deleteHistory=async(videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/History/${videoId}`,{})
}
// api to Add Category
export  const addCategory=async(categoryDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/AllCategory`,categoryDetails)
 
 }
// api to show Category
export const getAllCategory=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/AllCategory`,"")
}
