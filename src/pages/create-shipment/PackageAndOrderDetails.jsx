import { Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, Step, StepLabel, Stepper, TextField } from "@mui/material"
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function PackageAndOrderDetails() {
  const navigate = useNavigate()
    const [age, setAge] =useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };

    const steps = [
      'Enter Recipients Details',
      'Package And Order Details',
      'Seller Details And Return Details',
     
    ];
  
  return (
    <>
 <Container maxWidth="lg" sx={{marginBottom:'10px'}}>
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={2} alternativeLabel>
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
            <div className="mb-4">
              <h5>Caegory Details</h5>
            </div>
          <div className="form-container">
       <Box sx={{ minWidth: 120, marginBottom:4 }}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Delivery Partner*</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          size="small"
          label="Select Delivery Partner*"
          onChange={handleChange}
        >
          <MenuItem value={10}>Partner1</MenuItem>
          <MenuItem value={20}>Partner2</MenuItem>
          <MenuItem value={30}>Partner3</MenuItem>
        </Select>
      </FormControl>
       </Box>

       <Box sx={{ minWidth: 120, marginBottom:4 }}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Delivery Type*</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          size="small"
          value={age}
          label="Select Delivery Type*"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
       </Box>

       <Box sx={{ minWidth: 120, marginBottom:4 }}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Pickup Address*</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          size="small"
          value={age}
          label="Select Pickup Address**"
          onChange={handleChange}
        >
          <MenuItem value={10}> Address1</MenuItem>
          <MenuItem value={20}>Address2</MenuItem>
          <MenuItem value={30}>Address3</MenuItem>
        </Select>
      </FormControl>
       </Box>

       <Grid item xs={12} sm={12}>
            <TextField
              label="Name"
              
              onChange={handleChange}
              name="name"
              fullWidth
              size="small"
             sx={{marginBottom:4}}
            />
          </Grid>

       <Grid container xs={12} columnSpacing={1}>
       <Grid item xs={12} sm={4}>
            <TextField
              label="Length"
              
              onChange={handleChange}
              name="length"
              fullWidth
              size="small"
             sx={{marginBottom:4}}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Breadth"
              
              onChange={handleChange}
              name="Breadth"
              fullWidth
              size="small"
             sx={{marginBottom:4}}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              label="Height"
              size="small"
              onChange={handleChange}
              name="Height"
              fullWidth
             sx={{marginBottom:4}}
            />
          </Grid>
       </Grid>
          

       <Box sx={{ minWidth: 120, marginBottom:4 }}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Payment Mode*</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Payment Mode*"
          size="small"
          onChange={handleChange}
        >
          <MenuItem value={10}>Online</MenuItem>
          <MenuItem value={20}>Offline</MenuItem>
          
        </Select>
      </FormControl>
       </Box>
       </div>
          </div>
          <div className="col-12 col-md-6">
          <h5>Product/Order Details</h5>
                 
                 <div className="form-container-right">
                  <div className="mb-2">
                  <TextField label="Product Name" name="productName"  fullWidth  margin="normal"   size="small" />
                  </div>
                  <div className="mb-2">
                  <TextField label="Product Category" name="Product Category"  fullWidth  margin="normal"   size="small" />
                  </div>
                  <div className="mb-2">
                  <TextField label="Order Value" name="Order Value"  fullWidth  margin="normal"   size="small" />
                  </div>
                  <div className="mb-2">
                  <TextField label="COD Value" name="CODValue"  fullWidth  margin="normal"   size="small" />
                  </div>
                 </div>



            </div>
        </div>
        <div className="row">
          <div className="col-12">
          <Button type="submit" onClick={()=>navigate("/seller-and-return-details")}  variant="contained" fullWidth>
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>





    {/* <Grid container spacing={2}>
      <Grid xs={12} md={6}>
       <div className="form-container">
       <Box sx={{ minWidth: 120, marginBottom:4 }}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Delivery Partner*</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Select Delivery Partner*"
          onChange={handleChange}
        >
          <MenuItem value={10}>Partner1</MenuItem>
          <MenuItem value={20}>Partner2</MenuItem>
          <MenuItem value={30}>Partner3</MenuItem>
        </Select>
      </FormControl>
       </Box>

       <Box sx={{ minWidth: 120, marginBottom:4 }}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Delivery Type*</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Select Delivery Type*"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
       </Box>

       <Box sx={{ minWidth: 120, marginBottom:4 }}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Pickup Address*</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Select Pickup Address**"
          onChange={handleChange}
        >
          <MenuItem value={10}> Address1</MenuItem>
          <MenuItem value={20}>Address2</MenuItem>
          <MenuItem value={30}>Address3</MenuItem>
        </Select>
      </FormControl>
       </Box>

       <Grid item xs={12} sm={12}>
            <TextField
              label="Name"
              
              onChange={handleChange}
              name="name"
              fullWidth
             sx={{marginBottom:4}}
            />
          </Grid>

       <Grid container xs={12} columnSpacing={1}>
       <Grid item xs={12} sm={4}>
            <TextField
              label="Length"
              
              onChange={handleChange}
              name="length"
              fullWidth
             sx={{marginBottom:4}}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Breadth"
              
              onChange={handleChange}
              name="Breadth"
              fullWidth
             sx={{marginBottom:4}}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              label="Height"
              
              onChange={handleChange}
              name="Height"
              fullWidth
             sx={{marginBottom:4}}
            />
          </Grid>
       </Grid>
          

       <Box sx={{ minWidth: 120, marginBottom:4 }}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Payment Mode*</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Payment Mode*"
          onChange={handleChange}
        >
          <MenuItem value={10}>Online</MenuItem>
          <MenuItem value={20}>Offline</MenuItem>
          
        </Select>
      </FormControl>
       </Box>
       </div>
  </Grid>
  <Grid xs={12} md={6}>
       <div>Product/Order Details</div>
  </Grid>
  
 
</Grid> */}
    
    </>
  )
}

export default PackageAndOrderDetails