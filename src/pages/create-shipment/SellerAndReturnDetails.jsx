import { Box, Button, Container, Step, StepLabel, Stepper, TextField } from "@mui/material";


const steps = [
  'Enter Recipients Details',
  'Package And Order Details',
  'Seller Details And Return Details',
 
];

function SellerAndReturnDetails() {
  return (
    <>
<Container maxWidth="lg" sx={{marginBottom:'10px'}}>
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={3} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
</Container>



    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div>
              <h5>Seller Details</h5>
            </div>
            <div className="form-container-left">
            <div className="mb-2">
                  <TextField   size="small" label="Seller Name" name="productName"  fullWidth  margin="normal" />
                  </div>
                  <div className="mb-2">
                  <TextField   size="small" label="Seller Address" name="Product Category"  fullWidth  margin="normal" />
                  </div>
                  <div className="mb-2">
                  <TextField   size="small" label="GST Of Seller" name="Order Value"  fullWidth  margin="normal" />
                  </div>
                  <div className="mb-2">
                  <TextField   size="small" label="Invoice No" name="CODValue"  fullWidth  margin="normal" />
                  </div>
                  <div className="mb-2">
                  <TextField   size="small" label="Eway Bill No" name="CODValue"  fullWidth  margin="normal" />
                  </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div>
              <h5>Enter Return Details</h5>
            </div>
            <div className="form-container-left">
            <div className="mb-2">
                  <TextField   size="small" label="RTS Name" name="productName"  fullWidth  margin="normal" />
                  </div>
                  <div className="mb-2">
                  <TextField   size="small" label="RTS Phone" name="Product Category"  fullWidth  margin="normal" />
                  </div>
                  <div className="mb-2">
                  <TextField   size="small" label="RTS Pincode" name="Order Value"  fullWidth  margin="normal" />
                  </div>
                  <div className="mb-2">
                  <TextField   size="small" label="RTS Address" name="CODValue"  fullWidth  margin="normal" />
                  </div>
                  
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
          <Button type="submit"  variant="contained" fullWidth>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SellerAndReturnDetails