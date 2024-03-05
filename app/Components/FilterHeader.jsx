import { localUrl } from "@/lib/baseUrl";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const FilterHeader = ({ Categories }) => {
  const [getAllStates, setGetAllStates] = useState([]);
  const [getStateId, setGetStateId] = useState(0);
  const [getCatId, setGetCatId] = useState(0);
  const [getVal, setGetVal] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetch(`${localUrl}/rest/test.branch/getStates`)
      .then((res) => res.json())
      .then((data) => {
        return setGetAllStates(data.reverse());
      });
  }, []);

  const handleSearch = (catId, stateId, searchVal) => {
    router.push(`/filter/${catId}/state/${stateId}/city/0/page/0/${searchVal.replace(/\s+/g, '-')}`);
  };

  return (
    <div className="mb-5">
      <div className="d-flex justify-content-center align-items-center w-100">
        <div className="row w-100 w-md-75 row-gap-3">
          <div className="col-12 col-md-3">
            <input
              type="text"
              className="form-control HeaderSearch"
              placeholder="اكتب كلمة البحث"
              onChange={(e) => setGetVal(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch(getCatId, getStateId, getVal);
                }
              }}
            />
          </div>
                  <div className="col-12 col-md-4">
                      <select className="form-select HeaderSearch" aria-label="Default select example" onChange={(e)=> setGetCatId(e.target.value)}> 
                        <option value={0} selected={getCatId == 0 }>اختر التصنيف</option>
                            {Categories.map((item)=>{
                                  return (
                       <option value={item.id} key={item.id} selected={getCatId == item.id}>{item.name}</option>
                                   )
                    })}
                       </select>
                </div>
                  <div className="col-12 col-md-3">
                     <select data-trigger="" name="choices-single-defaul"  className="form-select HeaderSearch" aria-label="Default select example" onChange={(e)=> setGetStateId(e.target.value)}>
                        {getAllStates.map((item)=>{
                            return (
                                <option value={item.id} key={item.id} >{item.name}</option>
                                )
                            })}
                     </select>
                  </div>
                  <div className="col-12 col-md-2">
                  <button
              type="button"
              onClick={() => handleSearch(getCatId, getStateId, getVal)}
              className="btn w-100 HeaderSearch"
              style={{ backgroundColor: "#15558d", color: "#fff" }}
            >
              البحث
            </button>
                  </div>

                </div>
               

        
      </div>
      </div>
    )
}

export default FilterHeader