import ContactForm from "./ContactForm"


const GetInTouch = () => {
   
  return (
    <div className="lg:min-h-screen">
        <div className="text-center">
        <h2 className="text-4xl font-semibold underline">Get In Touch</h2>
        <div className="text-center items-center justify-center flex mt-4">
        <p className="lg:w-[40%] w-[90%] text-lg ">I'm actively looking for any new opportunities, my inbox is always open. Whether you have a question or want to hire me or just want to say hello, I'll try my best to get back to you!</p>

        </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-10 mt-10 ">
            {/* <div className="flex gap-2">
            <input type="text" placeholder="Full Name" className="border-2 p-2 border-blue-500"/>
            <input type="email" placeholder="xyz@gmail.com" className="border-2 p-2 border-blue-500"/>
            </div>
           <div>
           <textarea placeholder="hi ankit" className="border-2 border-blue-500 p-2"/> */}
 <ContactForm/>
           </div>
        </div>
      
  )
}

export default GetInTouch;