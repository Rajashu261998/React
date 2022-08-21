import React from "react";

//function for form reset
function handleSubmit(e){
  setTimeout(() => {
    e.target.reset();
  }, 3000);
}

const Contact = () => {
  return (
    <div
      name="contact"
      className="contact w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          I'D LOVE TO HEAR FROM YOU
          </p>
          <p className="py-6">If you are interested to hire me I am always open to new opportunities and interesting projects! Feel free to contact me if you have any other requests or questions regarding web development.</p>
        </div>

        <h1 style={{textAlign:"center"}}>REACH OUT TO ME DIRECTLY ON - <span style={{color:"white",background:"teal",fontWeight:"bold",fontSize:"1.5rem"}}>+918299017812</span></h1><br></br>

        <h1 style={{textAlign:"center"}}>OR</h1><br></br>
        
        <div className=" flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            action="https://getform.io/f/21deb08f-459c-47bc-879e-2b80f93ddc07"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button type="submit" className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Send Message
            </button>
          </form> 
        </div>
      </div>
    </div>
  );
};

export default Contact;