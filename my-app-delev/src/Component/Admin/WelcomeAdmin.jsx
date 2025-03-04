import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link ,useNavigate} from 'react-router-dom'
function WelcomeAdmin() {

	const navigate = useNavigate()
 


const [saveit,setdata]=useState([])


  useEffect(()=>{
    axios.get("http://localhost:5000/api/Foods/getall").then((res)=>{
      setdata(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  
    },[])

    function deleteFood(id) {
      axios.delete("http://localhost:5000/api/Foods/" + id).then(response => {
        console.log(response); 
      }).catch(err => console.log(err))
    }

  console.log(saveit);
  

  return (
    
    <div>
      
     <Link to="/" className="text-blue-500 text-lg  flex justify-center  mt-5 font-bold">BACK TO HOME</Link>
   
<div class="max-w-2xl  ">
 

	<div class=" ">
		<div class="p-4">
			<label for="table-search" class="sr-only">Search</label>
			<div class="relative mt-1">
				<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd"
							d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
							clip-rule="evenodd"></path>
					</svg>
				</div>
				<input type="text" id="table-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items"/>
        </div>
			</div>
      
			<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
				<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
					
						<th scope="col" class="px-6 py-3">
							Product name
						</th>
						<th scope="col" class="px-6 py-3">
						rate
						</th>
						<th scope="col" class="px-6 py-3">
							Category
						</th>
						<th scope="col" class="px-6 py-3">
							Price
						</th>
            <th scope="col" class="px-6 py-3">
							img
						</th>
						<th scope="col" class="px-6 py-3">
							<span class="sr-only">Edit</span>
						</th>
					</tr>
				</thead>
				<tbody>
        {saveit.map((e)=>(
          	<tr
						class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
					
						<th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
						{e.name}
						</th>
						<td class="px-6 py-4">
						{e.rate}/5
						</td>
						<td class="px-6 py-4">
							{e.dsc}
						</td>
						<td class="px-6 py-4">
							{e.price} $
						</td>
            <td class="py-0">
							{e.img} $
						</td>
						<td class="px-6 py-4 text-right">
							<a onClick={()=>{navigate("/Edit",{state:{data:e}})}} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
							
						</td>

						<td class="px-6 py-4 text-right">
							<a class="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
							<Link to="/Add">ADD</Link>
						</td>



            <td class="px-6 py-4 text-right">
							<a  class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={()=>{deleteFood(e._id);}}>DELETE</a>
						</td>

						


					</tr>
        ))}
				
          
				
				</tbody>
        
			</table>
		</div>

	
	</div>
    </div>
  )
}

export default WelcomeAdmin