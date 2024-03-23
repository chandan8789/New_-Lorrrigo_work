import { Button, Card, Checkbox, FormControlLabel, TextField } from '@mui/material'
import React from 'react'

function CreateAddress() {
  return (
      <>
      <div className="container-fluid p-0 p-md-1">
        <div className="cotainer">
            <div className="row">
                <div className="col-12">
                    <h3>Create Address</h3>
                </div>
                <div className="col-12">
                    <h4>Upload Bulk Sheet</h4>
                </div>
                 
                <div className="col-12 col-md-6 p-md-3 p-2">
                  <div className='py-1'>
                  <h5 className='text-uppercase'>Create Single</h5>
                  </div>
                <Card sx={{ width:'100%',padding:{lg:'25px', xs:'5px' }   }}>
                <div className="form-container-left">

                        <div className="mb-2">
                        <TextField   size="small" label="Name" name="name"  fullWidth  margin="normal" />
                        </div>
                        <div className="mb-2">
                        <TextField   size="small" label="Phone" name="alternamePhone"  fullWidth  margin="normal" />
                        </div>
                        <div className="mb-2">
                        <TextField   size="small" label="Pincode" name="pincode"  fullWidth  margin="normal" />
                        </div>
                        <div className="mb-2">
                        <TextField   size="small" label="Country" name="country"  fullWidth  margin="normal" />
                        </div>
                        <div className="mb-2">
                        <TextField   size="small" label="State" name="state"  fullWidth  margin="normal" />
                        </div>
                        <div className="mb-2">
                        <TextField   size="small" label="City" name="city"  fullWidth  margin="normal" />
                        </div>
                        <div className="mb-2">
                        <TextField   size="small" label="Full Address" name="address"  fullWidth  margin="normal" />
                        </div>
                        </div>
                </Card>
               
                </div>
                <div className="col-12 col-md-6 p-2 p-md-3 ">
                     <div className='d-flex align-items-center justify-content-between'>
                     <h5 className='text-uppercase'>Return Address</h5>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Return Address same as above" />
                     </div>
                    <Card sx={{ width:'100%', padding:{lg:'25px', xs:'5px'} }}>
                    <div className="form-container-right">

                            <div className="mb-2">
                            <TextField   size="small" label="Return Name" name="ReturnName"  fullWidth  margin="normal" />
                            </div>
                            <div className="mb-2">
                            <TextField   size="small" label="Phone" name="ReturnPhone"  fullWidth  margin="normal" />
                            </div>
                            <div className="mb-2">
                            <TextField   size="small" label="Pincode" name="ReturnPincode"  fullWidth  margin="normal" />
                            </div>
                            <div className="mb-2">
                            <TextField   size="small" label="Country" name="returnCountry"  fullWidth  margin="normal" />
                            </div>
                            <div className="mb-2">
                            <TextField   size="small" label="State" name="returnState"  fullWidth  margin="normal" />
                            </div>
                            <div className="mb-2">
                            <TextField   size="small" label="City" name="returnCity"  fullWidth  margin="normal" />
                            </div>
                            <div className="mb-2">
                            <TextField   size="small" label="Full Address" name="returnAddress"  fullWidth  margin="normal" />
                            </div>
                            
                            </div>
                    </Card>
                    
                </div>
                <Card sx={{width:'100%'}}>
                <div className="my-3 d-flex align-items-center justify-content-center">
                    <Button variant='contained' sx={{width:{xs:'100%', lg:'300px'}}}>Submit</Button>
                 </div>
                </Card>
            </div>
        </div>
      </div>
      </>
  )
}

export default CreateAddress