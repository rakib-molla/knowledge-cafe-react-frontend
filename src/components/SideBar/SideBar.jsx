import React, { useEffect, useState } from 'react';


const SideBar = ({ readTime, bo }) => {

   

    const [time, setTime] = useState(readTime);

    useEffect(() => {
        const getReadTime = localStorage.getItem('watchTime');
        setTime(getReadTime);
    }, [readTime]);

    const [localData, setLocalData] = useState({});
    useEffect(() => {
        const dataSt = localStorage.getItem('bookmark');
        let data = [];

        if (dataSt) {
            try {
                data = JSON.parse(dataSt);
            } catch (error) {
                console.error('Error parsing bookmark data', error);
            }
        }

        setLocalData(data);
    }, [bo]);

    



    return (
        <div className=''>
            <h2 className='font-bold p-6 bg-blue-50 rounded-lg border text-center'>Spent time on read : {time ? time : 0} min</h2>
            <div className='bg-gray-50 mt-5 '>
                <h1 className='font-bold text-xl text-center rounded-lg'>Bookmarked Blogs :  {bo ? bo.length + 1 : 0}</h1>


                <div className='text-center'>
                    {Array.isArray(localData) && localData.map(
                        title => <h1 className='bg-gray-100 shadow-lg my-1 p-5 font-bold '>
                            {title.blogTitle}</h1>)}
                </div>
            </div>
        </div>
    );
};

export default SideBar;