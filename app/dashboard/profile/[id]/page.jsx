import Layout from '@/app/Components/Layout'
import Navbar from '@/app/Components/dashboard/dashboardNavbar'
import React from 'react'
import userLogo from '/public/img/male.png'
import Image from 'next/image'
import Link from 'next/link'
const page = ({params}) => {
  return (
    <>
        <Navbar params={params.id}/>
        <Layout>
        <div className="card">
								<div className="card-body">
									
									<form>
										<div className="row form-row">
											<div className="col-12 col-md-12 mb-3">
												<div className="form-group">
													<div className="change-avatar">
														<div className="profile-img text-center mb-2">
                            <Link href={`/`}>
                                  <Image src={userLogo} className="rounded-circle" width={150} height={150} style={{ marginLeft : '30px'}}  alt="profile" />
                             </Link>		
             									</div>
														<div className="upload-img">
															<div className="change-photo-btn">
																<span><i className="fa fa-upload"></i> تغير الصوره</span>
																<input type="file" className="upload"/>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="col-12 col-md-6">
												<div className="form-group">
													<label>First Name</label>
													<input type="text" className="form-control" value="Richard"/>
												</div>
											</div>
											<div className="col-12 col-md-6">
												<div className="form-group">
													<label>Last Name</label>
													<input type="text" className="form-control" value="Wilson"/>
												</div>
											</div>
											<div className="col-12 col-md-6">
												<div className="form-group">
													<label>Date of Birth</label>
													<div className="cal-icon">
														<input type="text" className="form-control datetimepicker" value="24-07-1983"/>
													</div>
												</div>
											</div>
											<div className="col-12 col-md-6">
												<div className="form-group">
													<label>Blood Group</label>
													<select className="form-control select">
														<option>A-</option>
														<option>A+</option>
														<option>B-</option>
														<option>B+</option>
														<option>AB-</option>
														<option>AB+</option>
														<option>O-</option>
														<option>O+</option>
													</select>
												</div>
											</div>
											<div className="col-12 col-md-6">
												<div className="form-group">
													<label>Email ID</label>
													<input type="email" className="form-control" value="richard@example.com"/>
												</div>
											</div>
											<div className="col-12 col-md-6">
												<div className="form-group">
													<label>Mobile</label>
													<input type="text" value="+1 202-555-0125" className="form-control"/>
												</div>
											</div>
											<div className="col-12">
												<div className="form-group">
												<label>Address</label>
													<input type="text" className="form-control" value="806 Twin Willow Lane"/>
												</div>
											</div>
											<div className="col-12 col-md-6">
												<div className="form-group">
													<label>City</label>
													<input type="text" className="form-control" value="Old Forge"/>
												</div>
											</div>
											<div className="col-12 col-md-6">
												<div className="form-group">
													<label>State</label>
													<input type="text" className="form-control" value="Newyork"/>
												</div>
											</div>
											<div className="col-12 col-md-6">
												<div className="form-group">
													<label>Zip Code</label>
													<input type="text" className="form-control" value="13420"/>
												</div>
											</div>
											<div className="col-12 col-md-6">
												<div className="form-group">
													<label>Country</label>
													<input type="text" className="form-control" value="United States"/>
												</div>
											</div>
										</div>
										<div className="submit-section">
											<button type="submit" className="btn btn-primary submit-btn">Save Changes</button>
										</div>
									</form>
									
								</div>
							</div>
        </Layout>
    </>
  )
}

export default page