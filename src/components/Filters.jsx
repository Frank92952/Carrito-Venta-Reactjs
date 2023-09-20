import { MdOutlinePriceChange, MdOutlineFormatListBulleted} from "react-icons/md";
import { useState, useId } from "react"; 
import { useFilters } from "../hooks/useFilters";
function Filters() {
    const { setFilters } = useFilters()

    const [minPrice, setMinPrice] = useState(0)
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value)
        setFilters(prevState => ({
            ... prevState,
            minPrice: event.target.value
        }))
    }
    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ... prevState,
            category: event.target.value
        }))
    }
   return(
   <section className='flex justify-between  pl-2 pr-2 mt-10 '>
        <div className='flex gap-2 items-center'>
            <label htmlFor='minPriceFilterId'><MdOutlinePriceChange className="h-10 w-10 "/></label>
            <input  className=""
                type='range'
                id='minPriceFilterId'
                min='0'
                max='1200'
                onChange={handleChangeMinPrice}
          />
          <span>${minPrice}</span>
        </div>
        <div className="flex items-center  ">
            <label htmlFor='categoryFilterId'><MdOutlineFormatListBulleted className="h-10 w-10 " /></label>
            <select className="bg-slate-400  text-white h-7 border-2 rounded-lg border-black" id='categoryFilterId' onChange={handleChangeCategory}>
                <option value='all'>Todas</option>
                <option value='laptops'>Portátiles</option>
                <option value='smartphones'>Celulares</option>
            </select>
        </div>
    </section>
  )
}

export default Filters