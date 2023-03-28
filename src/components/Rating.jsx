import { useRef, useState } from "react";
import star from "../assets/icon-star.svg";
import thankyou from "../assets/illustration-thank-you.svg";

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const buttonRef = useRef(null);

  const handleSetRating = (e, rating) => {
    buttonRef.current = e.target;
    setRating(rating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    rating !== 0 ? setIsSubmitted(true) : window.alert("Select a value!");
  };

  return (
    <div className="w-full h-full p-6 grid place-items-center align-center">
      <div className="p-6 bg-gradient-to-b from-darkblue to-darkblue/30 rounded-lg w-[327px] h-[382px]">
        {!isSubmitted ? (
          <div>
            <img className="bg-white/10 p-2 rounded-full" src={star} />
            <h1 className="text-2xl font-bold py-3">How did we do?</h1>
            <p className="py-3 font-normal">
              Please let us know how we did with your support request. All feedback is appreciated
              to help us improve our offering!
            </p>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="grid grid-cols-5 grid-flow-col gap-4 rounded-full font-sm my-3">
                {[1, 2, 3, 4, 5].map((rating, index) => (
                  <button
                    key={index}
                    ref={buttonRef}
                    type="button"
                    onClick={(e) => handleSetRating(e, rating)}
                    className="bg-mediumgrey/20 p-2 rounded-full focus:bg-lightgrey hover:bg-primary transition ease-in-out duration-300">
                    {rating}
                  </button>
                ))}
              </div>
              <button className="uppercase w-full p-2 mt-2 bg-primary rounded-full text-bold tracking-wider hover:bg-white hover:text-primary transition ease-in-out duration-300">
                Submit
              </button>
            </form>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 place-items-center justify-center text-center">
            <div>
              <img src={thankyou} />
            </div>
            <div className="bg-white/10 rounded-full p-2 px-3 text-primary text-md">You selected {rating} out of 5</div>
            <div className="text-2xl">Thank you!</div>
            <div className="text-sm text-white/60">
              We appreciate you taking the time to give a rating. If you ever need more support,
              don't hesitate to get in touch!
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Rating;
