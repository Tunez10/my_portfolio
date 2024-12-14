import React, { useState } from 'react'
import { CreateMessage } from '../util/api/contact';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { useNavigate, useParams } from 'react-router-dom'

const notify = () => toast("Thank you!!");

const AddContact = () => {
  // const navigate = useNavigate()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      name : name,
      email : email,
      subject : subject,
      message : message,
    }
    alert('Message has been sent sucessfully!');


    await CreateMessage(payload).then((response) => {
      console.log('Data saved successfully', response.data);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      // navigate('/')
    })
    .catch((error) =>{
      console.error('Error sving data', error);
    });
    
  };

  




  return (
    <div id='contact' className='md:mt-20 mt-10 lg:mx-48 scroll-mt-10 mx-5 ' data-aos="fade-down">
      <div>
        <p className='font-bold text-center text-4xl underline underline-offset-[20px] decoration-teal-600'>Contact</p>
        <p className='mt-10 text-center'>Contact us via any of the following, or send us a message</p>
      </div>

      <div className='lg:flex justify-between mt-10 shadow-lg shadow-teal-600 p-5 '>
        <div className='flex gap-3'>
          <i className='pi pi-map-marker text-3xl rounded-full border border-teal-600 p-4 text-teal-600 hover:bg-teal-600 hover:text-white hover:cursor-pointer'></i>
          <div>
            <p className='font-bold text-lg'>Address</p>
            <p>Omo Wale-Kuye estate Ikolaba Ibadan Oyo State</p>
          </div>
        </div>

        <div className='flex gap-3 my-10 lg:my-0 '>
          <i className='pi pi-phone text-3xl rounded-full border border-teal-600 p-4 text-teal-600 hover:bg-teal-600 hover:text-white'></i>
          <div>
            <p className='font-bold text-lg'>phone</p>
            <p>+2348142852472</p>
          </div>
        </div>

        <div className='flex gap-3'>
          <i className='pi pi-envelope text-3xl rounded-full border border-teal-600 p-4 text-teal-600 hover:bg-teal-600 hover:text-white'></i>
          <div>
            <p className='font-bold text-lg'>Email</p>
            <p>peterekene162@gmail.com</p>
          </div>
        </div>

      </div>

     

      <form action="" className='mt-10 flex flex-col gap-5 shadow-xl md:p-10 p-5 ' onSubmit={handleSubmit}>
        <div className='md:flex gap-10'>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='your name' className='md:w-[50%] w-full p-3 my-5 md:my-0 border rounded-xl ring-0 focus:ring-1 focus:ring-teal-600 focus:outline-none' />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="" id="" placeholder='your email' className=' md:w-[50%] w-full border rounded-xl ring-0 focus:ring-1 focus:ring-teal-600 focus:outline-none p-3' />
        </div>
        <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder='subject' className='border rounded-xl ring-0 focus:ring-1 focus:ring-teal-600 focus:outline-none w-full p-3' />
        <textarea name="" value={message} onChange={(e) => setMessage(e.target.value)} id="" className='border rounded-xl ring-0 focus:ring-1 focus:ring-teal-600 focus:outline-none p-3' placeholder='message'>
        </textarea>
        <div className='p-3 border lg:w-[20%] rounded-full bg-teal-600 flex mb-5 justify-center mx-auto text-white hover:bg-teal-500 hover:cursor-pointer'>
          <button onClick={notify}>Submit</button>
          <ToastContainer />
        </div>
        {/* <input type="submit" value="submit" className='border lg:w-[20%] p-3 rounded-full bg-teal-600 flex mb-5 justify-center mx-auto text-white hover:bg-teal-500 hover:cursor-pointer' /> */}
          
      </form>

    </div>
  );

};

export default AddContact;


  