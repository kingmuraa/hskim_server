import React from "react";
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const Kakaomap = () => {
    return (
        <>
            <Map className="mt-10 h-96 w-full container mx-auto px-5 flex justify-between py-4 items-center"
                center={{ lat: 37.48424, lng: 126.92972 }}   // 지도의 중심 좌표
                // style={{ width: '800px', height: '600px' }} // 지도 크기
                level={3} // 지도 확대 레벨
                >
                <MapMarker position={{ lat: 37.48424, lng: 126.92972 }}></MapMarker>                                  
            </Map>
        </>
    )

    
};

export default Kakaomap;
