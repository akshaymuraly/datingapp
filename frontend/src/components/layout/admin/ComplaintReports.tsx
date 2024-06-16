interface propsType{
  props:{heading:(string|number)[],
  content:string[],
  url:string[]}
}
const complaintArray = [
    {
        Type:"Spam",
        Status:"active",
        Message:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga temporibus iusto molestiae sapiente, aut voluptatibus esse animi deserunt! Aperiam soluta possimus molestias, excepturi tempore labore dicta saepe sunt est beatae animi laboriosam
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga temporibus iusto molestiae sapiente, aut voluptatibus esse animi deserunt! Aperiam soluta possimus molestias, excepturi tempore labore dicta saepe sunt est beatae animi laboriosam
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga temporibus iusto molestiae sapiente, aut voluptatibus esse animi deserunt! Aperiam soluta possimus molestias, excepturi tempore labore dicta saepe sunt est beatae animi laboriosam
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga temporibus iusto molestiae sapiente, aut voluptatibus esse animi deserunt! Aperiam soluta possimus molestias, excepturi tempore labore dicta saepe sunt est beatae animi laboriosam
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga temporibus iusto molestiae sapiente, aut voluptatibus esse animi deserunt! Aperiam soluta possimus molestias, excepturi tempore labore dicta saepe sunt est beatae animi laboriosam
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga temporibus iusto molestiae sapiente, aut voluptatibus esse animi deserunt! Aperiam soluta possimus molestias, excepturi tempore labore dicta saepe sunt est beatae animi laboriosam
        `,
        Affected:"Someone",
        Against:"Albert",

    },
     {
        Type:"Spam",
        Status:"active",
        Message:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga temporibus iusto molestiae sapiente, aut voluptatibus esse animi deserunt! Aperiam soluta possimus molestias, excepturi tempore labore dicta saepe sunt est beatae animi laboriosam
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga temporibus iusto molestiae sapiente, aut voluptatibus esse animi deserunt! Aperiam soluta possimus molestias, excepturi tempore labore dicta saepe sunt est beatae animi laboriosam
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga temporibus iusto molestiae sapiente, aut voluptatibus esse animi deserunt! Aperiam soluta possimus molestias, excepturi tempore labore dicta saepe sunt est beatae animi laboriosam
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga temporibus iusto molestiae sapiente, aut voluptatibus esse animi deserunt! Aperiam soluta possimus molestias, excepturi tempore labore dicta saepe sunt est beatae animi laboriosam
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga temporibus iusto molestiae sapiente, aut voluptatibus esse animi deserunt! Aperiam soluta possimus molestias, excepturi tempore labore dicta saepe sunt est beatae animi laboriosam
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga temporibus iusto molestiae sapiente, aut voluptatibus esse animi deserunt! Aperiam soluta possimus molestias, excepturi tempore labore dicta saepe sunt est beatae animi laboriosam
        `,
        Affected:"Someone",
        Against:"Albert",

    },
     {
        Type:"Spam",
        Status:"active",
        Message:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga temporibus iusto molestiae sapiente, aut voluptatibus esse animi deserunt! Aperiam soluta possimus molestias, excepturi tempore labore dicta saepe sunt est beatae animi laboriosam
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga temporibus iusto molestiae sapiente, aut voluptatibus esse animi deserunt! Aperiam soluta possimus molestias, excepturi tempore labore dicta saepe sunt est beatae animi laboriosam
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga temporibus iusto molestiae sapiente, aut voluptatibus esse animi deserunt! Aperiam soluta possimus molestias, excepturi tempore labore dicta saepe sunt est beatae animi laboriosam
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga temporibus iusto molestiae sapiente, aut voluptatibus esse animi deserunt! Aperiam soluta possimus molestias, excepturi tempore labore dicta saepe sunt est beatae animi laboriosam
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga temporibus iusto molestiae sapiente, aut voluptatibus esse animi deserunt! Aperiam soluta possimus molestias, excepturi tempore labore dicta saepe sunt est beatae animi laboriosam
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga temporibus iusto molestiae sapiente, aut voluptatibus esse animi deserunt! Aperiam soluta possimus molestias, excepturi tempore labore dicta saepe sunt est beatae animi laboriosam
        `,
        Affected:"Someone",
        Against:"Albert",

    },
     {
        Type:"Spam",
        Status:"active",
        Message:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga temporibus iusto molestiae sapiente, aut voluptatibus esse animi deserunt! Aperiam soluta possimus molestias, excepturi tempore labore dicta saepe sunt est beatae animi laboriosam
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga temporibus iusto molestiae sapiente, aut voluptatibus esse animi deserunt! Aperiam soluta possimus molestias, excepturi tempore labore dicta saepe sunt est beatae animi laboriosam
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga temporibus iusto molestiae sapiente, aut voluptatibus esse animi deserunt! Aperiam soluta possimus molestias, excepturi tempore labore dicta saepe sunt est beatae animi laboriosam
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga temporibus iusto molestiae sapiente, aut voluptatibus esse animi deserunt! Aperiam soluta possimus molestias, excepturi tempore labore dicta saepe sunt est beatae animi laboriosam
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga temporibus iusto molestiae sapiente, aut voluptatibus esse animi deserunt! Aperiam soluta possimus molestias, excepturi tempore labore dicta saepe sunt est beatae animi laboriosam
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga temporibus iusto molestiae sapiente, aut voluptatibus esse animi deserunt! Aperiam soluta possimus molestias, excepturi tempore labore dicta saepe sunt est beatae animi laboriosam
        `,
        Affected:"Someone",
        Against:"Albert",

    }
    
]
const ComplaintReports:React.FC<propsType> = ({props:{heading,content,url}}) => {
  return (
    <div className="w-full h-full">
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div className="flex flex-col sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
        <div>
            <button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                <svg className="w-3 h-3 text-gray-500 dark:text-gray-400 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
                </svg>
                Last 30 days
                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
            </button>
            {/* Dropdown menu */}
            <div id="dropdownRadio" className="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top" style={{position: "absolute", inset: "auto auto 0px 0px", margin: 0}}>
                <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioButton">
                    <li>
                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input id="filter-radio-example-1" type="radio" value="last" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="filter-radio-example-1" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last day</label>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input defaultChecked id="filter-radio-example-2" type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="filter-radio-example-2" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last 7 days</label>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input id="filter-radio-example-3" type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="filter-radio-example-3" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last 30 days</label>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input id="filter-radio-example-4" type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="filter-radio-example-4" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last month</label>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input id="filter-radio-example-5" type="radio" value="" name="filter-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="filter-radio-example-5" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last year</label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <label htmlFor="table-search" className="sr-only">Search</label>
        <div className="relative">
            <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
            </div>
            <input type="text" id="table-search" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items"/>
        </div>
    </div>
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="p-4">
                    <div className="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                    </div>
                </th>
                {
                  heading.map((item,index)=>{
                    return(
                         <th key={index} scope="col" className="px-6 py-3">
                              {item}
                        </th>
                    )
                  })
                }
            </tr>
        </thead>
        <tbody>
            {
                complaintArray.map((item,index)=>{
                    return(
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                    </div>
                </td>
                {/* <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                    <img className="w-10 h-10 rounded-full" src="/docs/images/products/apple-watch.png" alt="Apple Watch"/>
                    <div className="ps-3">
                        <div className="text-base font-semibold">{item.Type}</div>
                        <div className="font-normal text-gray-500"></div>
                    </div>  
                </th> */}
                 <td className="px-6 py-4">
                    {item.Type}
                </td>
                <td className="px-6 py-4">
                    {item.Status}
                </td>
                <td className="px-6 py-4 h-[100px] w-[300px]">
                    <div className="h-full w-full overflow-scroll">{item.Message}</div>
                </td>
                <td className="px-6 py-4">
                    <div className="h-full w-full overflow-scroll">{item.Affected}</div>
                </td>
                <td className="px-6 py-4 ">
                    <div className="h-full w-full overflow-scroll">{item.Against}</div>
                </td>
                <td className="px-6 py-4">
                    <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Ban</button>
                </td>
            </tr>
                    )
                })
            }
            
        </tbody>
    </table>
    {/* --------------------END OF TABLE---------------------------- */}
    <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span className="font-semibold text-gray-900 dark:text-white">1-10</span> of <span className="font-semibold text-gray-900 dark:text-white">1000</span></span>
        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
            </li>
            <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
            </li>
            <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
            </li>
            <li>
        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
            </li>
        </ul>
    </nav>
</div>
</div>

  )
}

export default ComplaintReports