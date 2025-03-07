import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import { useNavigate } from 'react-router-dom';
//import emailjs from "emailjs-com";






const Shop = ({ shop,onInputChange,emailsaved,count}) => {
const [dt,setDT]=useState(shop)
const [total,setTotal]=useState(0)
  const navigate = useNavigate();

  const handleSubmit = () => {
   

    navigate('/order',{state:{tot:total}});

  };
  
  const totalprice=()=>{
    setTotal(shop.reduce((acc,e,i)=>{
      return acc+=e.price
    },0))
  }

  useEffect(()=>{
    totalprice()
  },[]) 

  /*function sendEmail(e) {
    e.preventDefault();

emailjs.sendForm('service_de7ooak', 'template_29f7jyy', e.target, 'c1KDl9CcFGoJ5SOA2')
    .then((result) => {
      handleSubmit()
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()

}*/


  return (
    
    <div>
      <Navbar count={count} />
      <div className="mt-20">
        <h1 className="flex items-center justify-center font-bold text-black-600 lg:text-4xl">FAST <span className='text-yellow-400'> && </span> YUMMY
        
        </h1>
      </div>
      <div className="container p-12 mx-auto">
        <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
          <div className="flex flex-col md:w-full">
            <h2 className="mb-4 font-bold md:text-xl text-heading ">Shipping Address
            </h2>
            <form className="justify-center w-full mx-auto"  onSubmit={ sendEmail  }>
              <div className="">
                <div className="space-x-0 lg:flex lg:space-x-4">
                  <div className="w-full lg:w-1/2">
                    <label for="firstName" className="block mb-3 text-sm font-semibold text-gray-500">First
                      Name</label>
                    <input name="firstName" type="text"  onChange={onInputChange} placeholder="First Name"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                  </div>
                  <div className="w-full lg:w-1/2 ">
                    <label for="firstName" className="block mb-3 text-sm font-semibold text-gray-500">Last
                      Name</label>
                    <input name="Last Name" type="text" placeholder="Last Name"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full">
                    <label for="Email"
                      className="block mb-3 text-sm font-semibold text-gray-500">Email</label>
                    <input name="email" type="text" placeholder="Email" onChange={emailsaved}
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full">
                    <label for="Address"
                      className="block mb-3 text-sm font-semibold text-gray-500">Address</label>
                    <textarea
                      className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                      name="Address" cols="20" rows="4" placeholder="Address"></textarea>
                  </div>
                </div>
                <div className="space-x-0 lg:flex lg:space-x-4">
                  <div className="w-full lg:w-1/2">
                    <label for="city"
                      className="block mb-3 text-sm font-semibold text-gray-500">City</label>
                    <input name="city" type="text" placeholder="City"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                  </div>
                  <div className="w-full lg:w-1/2 ">
                    <label for="postcode" className="block mb-3 text-sm font-semibold text-gray-500">
                      Postcode</label>
                    <input name="postcode" type="text" placeholder="Post Code"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <label className="flex items-center text-sm group text-heading">
                    <input type="checkbox"
                      className="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1"/>
                      <span className="ml-2">Save this information for next time</span></label>
                </div>
                <div className="relative pt-3 xl:pt-6"><label for="note"
                  className="block mb-3 text-sm font-semibold text-gray-500"> Notes
                  (Optional)</label><textarea name="note"
                    className="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                    rows="4" placeholder="Notes for delivery"></textarea>
                </div>
                <div className="mt-4">
                  <button
                    className="w-full px-6 py-2 text-blue-200 bg-blue-600 hover:bg-blue-900" >Process</button>
                </div>
              </div>
            </form>
          </div>
          <div className="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
            <div className="pt-12 md:pt-0 2xl:ps-4">
              <h2 className="text-xl font-bold">Order Summary
              </h2>
              <div className="mt-8">
                <div className="flex flex-col space-y-4">
                 {dt.map((e,i)=>(
                   <div className="flex space-x-4">
                   <div>
                     <img src={e.img} alt="image"
                       className="w-60"/>
                   </div>
                   <div>
                     <h2 className="text-xl font-bold">{e.name}</h2>
                     <p className="text-sm">{e.dsc}</p>
                     <span className="text-red-600 mr-1">Price:</span>{e.price}$
                   </div>
                   <div>
                     <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                       viewBox="0 0 24 24" stroke="currentColor"   onClick={()=>{
                        setDT(dt.filter((k,j)=>{
                          return j!==i
                        }))
                        setTotal(total-e.price)
                       }}>
                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                         d="M6 18L18 6M6 6l12 12" />
                     </svg>
                   </div>
                 </div>
                

                 ))}
                 
                </div>
              </div>
              <div className="flex p-4 mt-4">
                <h2 className="text-xl font-bold">ITEMS {dt.length}</h2>
              </div>
              <div
                className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Subtotal<span className="ml-2">${total}</span></div>
              <div
                className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Shipping Tax<span className="ml-2">$10</span></div>
              <div
                className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Total<span className="ml-2">${total+10}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop