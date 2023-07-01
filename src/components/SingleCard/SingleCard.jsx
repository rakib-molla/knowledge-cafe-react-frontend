import React from 'react';
import './SingleCard.css'
import { ToastContainer, toast } from 'react-toastify';


const SingleCard = ({singleData, handWatchTime, bookmarkHandler}) => {
    
    const {id, authorName, blogTitle, images, blogCoverImage, authorImage, readTime, publishDate, tags} = singleData;

    const handleComplete =()=>{
        toast("Post Read Complete");
    }
    
    return (
        <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl my-10 p-10">
                <figure><img className='w-full' src={blogCoverImage} alt="image" /></figure>
                <div className="card-body">
                    <div className='flex justify-between'>
                        <div className='flex'>
                            <div className='mr-4'>
                                
                                <img className='rounded w-10 h-10' src={authorImage} alt="" />
                            </div>
                            <div className='exo'>
                                <p className='font-bold'>{authorName}</p>
                                <p>{publishDate}</p>
                            </div>
                        </div>
                        <div>
                        <div className='flex '>
                            <p className='exo me-3'>  {readTime} min read </p>
                            <span className='cursor-pointer' onClick={()=>bookmarkHandler(singleData)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                </svg>

                            </span>
                        </div>
                        </div>
                    </div>
                    <h2 className="card-title exo font-bold text-3xl">{blogTitle}</h2>
                    <p className='exo'>{tags}</p>
                    <div className="card-actions justify-start display-block">
                        <button onClick={handleComplete} className="exo"><u onClick={()=>handWatchTime(readTime)}>Mark as Read</u></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;