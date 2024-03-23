import { Box, Container, Grid,  FormControl,FormLabel, TextField, Button, Stepper, StepLabel, Step} from "@mui/material"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateShipment() {
  const [formData, setFormData] = useState({
    pincode: '',
    name: '',
    phone: '',
    state: '',
    city: '',
    address: '',
  });
const navigate = useNavigate()
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Access all form data here
    console.log('Form Data:', formData);

    // Example of using the data:
    alert(`Form submitted with Pincode: ${formData.pincode}, Name: ${formData.name}, and other fields.`);

    // Reset the form after submission (optional)
    setFormData({
      pincode: '',
      name: '',
      phone: '',
      state: '',
      city: '',
      address: '',
    });
  };
  const steps = [
    'Enter Recipients Details',
    'Package And Order Details',
    'Seller Details And Return Details',
  ];
  
  return (
   <>
    <Container maxWidth="lg">
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>

    <h3 style={{textAlign:'start'}}>Create New Shipment</h3>
     <Box sx={{ flexGrow: 1 }}>
      <Grid container   spacing={2}>
        <Grid item xs={12}>
        <form onSubmit={handleSubmit}>
        <Grid container spacing={1.2}>
          <Grid item xs={12}>
            <TextField
              label="Pincode"
              type="number"
              size="small"
              value={formData.pincode}
              onChange={handleChange}
              name="pincode"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Name"
              size="small"
              value={formData.name}
              onChange={handleChange}
              name="name"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Phone"
              type="number"
              size="small"
              value={formData.phone}
              onChange={handleChange}
              name="phone"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="State"
              value={formData.state}
              onChange={handleChange}
              size="small"
              name="state"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="City"
              value={formData.city}
              onChange={handleChange}
              size="small"
              name="city"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <FormLabel id="address-label">Address</FormLabel>
              <TextField
                labelId="address-label"
                value={formData.address}
                onChange={handleChange}
                name="address"
                size="small"
                multiline
                rows={4}
                fullWidth
                margin="normal"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" onClick={()=>navigate("/package-product-details")}  variant="contained" fullWidth>
              Next
            </Button>
          </Grid>
        </Grid>
      </form>
        </Grid>
        
      </Grid>
    </Box>
    </Container>
   </>
  )
}

export default CreateShipment