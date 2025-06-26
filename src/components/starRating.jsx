import React,{useState} from 'react';

const StarRating = ({onSubmit}) => {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(null);
    const [reviewText, setReviewText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if (rating === 0 )
            return alert("Please select a star rating");

            const review ={
                rating,
                reviewText,
                date: new Date().toISOString(),
            
        };
         if (onSubmit){
            onSubmit(review)
        } else {
      console.log("Submitted Review:", review); // Replace this later with backend logic
    } 
    //reset
    setRating(0);
    setHover(null);
    setReviewText('')

    }
    return (
        <form onSubmit={handleSubmit} >
            <h3>Rate this Product</h3>
            <div>
                {[1,2,3,4,5].map((star) =>(
                    <span key={star} onClick={() => setRating(star)} onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(null)} className={`text-3xl cursor-pointer
                         ${(hover || rating) >= star ? "text-yellow-400" : "text-gray-300"}`}> ★</span>
                ))}
            </div>

            <textarea className='w-full border-gray-300 rounded-md px-3 py-2 text-sm mb-3'
            name="" id="" onChange={(e) => setReviewText(e.target.value)} value={reviewText} placeholder='Write your review'></textarea>
            <button type='submit' className='bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90'>Submit Review</button>
        </form>
    );
};

export default StarRating;