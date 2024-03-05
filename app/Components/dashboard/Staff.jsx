
const Staff = () => {
  return (
    <>
        <form>
                <div className="row dashboard-input row-gap-4 mt-5">
                <div className="col-12 col-md-6">
                      <label for="exampleFormControlInput1" className="form-label">التخصص</label>
                        <select className="form-select" aria-label="Default select example">
                          <option selected>اختر الفئة  </option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                  </div>
                  <div className="col-12 col-md-6">
                      <label for="exampleFormControlInput1" className="form-label">الفئة  </label>
                        <select className="form-select" aria-label="Default select example">
                          <option selected>اختر الفئة</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                  </div>
                  <div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" className="form-label"> اسم الوظيفة </label>
							<input type="text" className="form-control" placeholder={" برجاء ادخال اسم الوظيفة   "} required	
							/>
						</div>
            <div className="col-12 col-md-6">
							<label for="exampleFormControlInput1" className="form-label">رقم الهاتف </label>
							<input type="tel" className="form-control" placeholder={" برجاء ادخال رقم الهاتف  "} required	
							/>
						</div>
                   </div>
                </form>
    </>
  )
}

export default Staff