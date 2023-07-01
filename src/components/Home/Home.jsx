
import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import SingleCard from '../SingleCard/SingleCard';


const Home = () => {

    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch("data.json")
        .then(res => res.json())
        .then(data => setData(data))
    },[]);
    // console.log(data);
    
    const [readTime, setReadTime] = useState('');

    const handelReadTime=(time)=>{
        const previousReadTime = JSON.parse(localStorage.getItem('watchTime'));
        if(previousReadTime){
            const sum = parseInt(previousReadTime) + parseInt(time);
            localStorage.setItem('watchTime', sum);
            setReadTime(sum);
        }else{
            localStorage.setItem('watchTime', time);
            setReadTime(time);
        }
        
    }

    // bookmark 
    const [bo, setBo] = useState([]);
const bookmarkHandler=({blogTitle,id})=>{
   
    
    const previousBookmark = JSON.parse(localStorage.getItem("bookmark"));
    let bookmark = [];
    const blogName = {blogTitle, id, bookmark:true};

    if(previousBookmark){
        const isBookmarked = previousBookmark.find(data => data.id === id);
        if(isBookmarked){
            
        }else{
            bookmark.push(...previousBookmark, blogName);
            localStorage.setItem("bookmark", JSON.stringify(bookmark));
        }
    }else{
        bookmark.push(blogName);
        localStorage.setItem("bookmark", JSON.stringify(bookmark));
        
    }setBo(previousBookmark);
} 
// console.log(bo);


// bookmark

    // const [cart, setCart] = useState([]);
    // const bookmarkHandler=(singleData)=>{
    //     const newCart = [...cart, singleData];
    //     setCart(newCart);
    // }

    
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-between mx-20'>
            <div className='mx-auto'>
                {
                    data.map(singleData => <SingleCard bookmarkHandler={bookmarkHandler} key={singleData.id} singleData={singleData} handWatchTime={handelReadTime}></SingleCard>)
                }
            </div>
            <div className='mx-10'>
                { <SideBar  bo={bo}  readTime={readTime}> </SideBar> }
            
            </div>
        </div>
        
    );
};

export default Home;

