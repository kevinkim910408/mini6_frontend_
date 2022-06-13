import React, {useState, useEffect} from "react"
import Pic1 from '../../Public/Image/profile_profile1.png'
import Pic2 from '../../Public/Image/profile_profile2.png'
import Pic3 from '../../Public/Image/profile_profile3.png'
import Pic4 from '../../Public/Image/profile_profile4.png'
import Pic5 from '../../Public/Image/profile_profile5.png'
import Pic6 from '../../Public/Image/profile_profile6.png'
import { getCookie } from "../../Shared/Cookie"

export const useImage = () =>{
    const [userPic, setUserPic] = useState();
    const profile = getCookie("profilepic");

    useEffect(()=>{
        setUserPic(profile)
    },[profile])

    switch(userPic){
        case "profile_profile1.png":
            return Pic1;
        case "profile_profile2.png":
            return Pic2;
        case "profile_profile3.png":
            return Pic3;
        case "profile_profile4.png":
            return Pic4;
        case "profile_profile5.png":
            return Pic5;
        case "profile_profile6.png":
            return Pic6;
        default:
            return userPic;
    }
}