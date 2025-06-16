import React from 'react';

 export const Contact = () => {
const {register,handleSubmit,reset,formState: { errors }} = useForm();
//   const handleFormSubmit = (event) => {
//     event.preventDefault(); // form submit ke default behavior ko roke
//     // const formData = new FormData(event.target); // form se data le
//     const formData = new FormData(event.target); // form se data le
//     const formInputData = Object.fromEntries(formData.entries()); // readable object banaye
//     console.log(formInputData); // ab console me dikhega
//   }




  const handleFormSubmit = (formData)=>{
     //console.log(formData.entries());
    const formInputData = Object.fromEntries(formData.entries());
    // console.log(formInputData);
  }

  return (
    <section className='section-contact'>
      <h1 className='container-title'>Contect us</h1>
      <div className='contact-wrapper container'>
        <form action={handleFormSubmit}>
          <input type="text" required autoComplete='false' className='form-control' placeholder='Enter your name' name='username' {...register("Name",{
            require:true,
            minLength: { value: 2, message: "Min 2 character length" },
            maxLength: 10,
            })}/>
          <input type="email" className='form-control' required autoComplete='false' placeholder='Enter Your Email' name='email'/>
          <textarea name="message" className='form-control2'required autoComplete='false' placeholder='Enter your message' rows="10"></textarea>
          <button type='submit' value="send">Send</button>
        </form>
      </div>
    </section>
  );
}
