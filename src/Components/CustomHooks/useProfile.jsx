import React,{useEffect, useState} from 'react'
import Pic1 from '../../Public/Image/profile_profile1.png'
import Pic2 from '../../Public/Image/profile_profile2.png'
import Pic3 from '../../Public/Image/profile_profile3.png'
import Pic4 from '../../Public/Image/profile_profile4.png'
import Pic5 from '../../Public/Image/profile_profile5.png'
import Pic6 from '../../Public/Image/profile_profile6.png'

const useProfile = (profile) => {
    const [userPic, setUserPic] = useState();

    useEffect(()=>{
        setUserPic(profile)
    },[profile])

    switch(userPic){
        case "profile1":
            return Pic1;
        case "profile2":
            return Pic2;
        case "profile3":
            return Pic3;
        case "profile4":
            return Pic4;
        case "profile5":
            return Pic5;
        case "profile6":
            return Pic6;
        default:
            return userPic;
    }
}

export default useProfile