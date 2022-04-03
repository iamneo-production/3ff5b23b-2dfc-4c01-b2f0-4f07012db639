import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid, Hidden } from '@material-ui/core';
const EditBooking = () => {
   const [user, setUser] = useState({
      serialNumber: "",
      name: "",
      price: "",
      qty: "",
      description: "",
      imageUrl: ""
   });

   const { serialNumber, name, price, qty, description, imageUrl } = user;
   const onInputChange = e => {
      setUser({ ...user, [e.target.name]: e.target.value });
   };

   const [baseImage, setBaseImage] = useState("");   
   const [imageU, setimageU] = useState(""); 
   const uploadImage = async (e) => {   
      const file = e.target.files[0];
      const base64 = await convertBase64(file);
      setBaseImage(base64);
      setimageU(base64);
     
   };

   const convertBase64 = (file) => {
      return new Promise((resolve, reject) => {
         const fileReader = new FileReader();
         fileReader.readAsDataURL(file);
         fileReader.onload = () => {          
            resolve(fileReader.result);
         };
         fileReader.onerror = (error) => {
            reject(error);
         };
      });
   };

   const onSubmit = e => {
      e.preventDefault();
      let formData = new FormData(); 
      formData.append('serialNumber', user.serialNumber);
      formData.append('name', user.name);
      formData.append('price', user.price);
      formData.append('qty', user.qty);
      formData.append('description', user.description);
      formData.append('imageUrl', imageU);
      axios({
         method: 'post',
         url: 'http://localhost/api-student/book.php',
         data: formData,
         config: { headers: { 'Content-Type': 'multipart/form-data' } }
      })
         .then(function (response) {
            if (response.data.status === 1) {
               alert("successfully Created.");
               window.location.href = "/bookView";
               //  window.location.href="/getBookedTheme";        
            } else {
               alert("Failed to Create...!");
            }
         })
         .error(function (response) {
            alert("Failed to Create...!");
         });
   };


   return (
      <div className="container">
         <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Add Books</h2>
            <form onSubmit={e => onSubmit(e)} >

               <Grid container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justify="center"
                  style={{}}>
                  <TextField
                     variant="outlined"
                     placeholder="Input Serial Number"
                     label="Serial Number"
                     name="serialNumber"
                     onChange={e => onInputChange(e)}
                     value={serialNumber}
                     required
                     margin="normal"
                  />
                  <br />
                  <TextField
                     variant="outlined"
                     placeholder="Enter Product Name"
                     label="Product Name"
                     name="name"
                     onChange={e => onInputChange(e)}
                     required
                     margin="normal"

                  />
                  <br />
                  <TextField
                     variant="outlined"
                     placeholder="Enter Procuct Price"
                     label="Product Price"
                     name="price"
                     type="number"
                     onChange={e => onInputChange(e)}
                     required
                     margin="normal"

                  />
                  <br />
                  <TextField
                     variant="outlined"
                     placeholder="Enter Product Quantity"
                     label="Product Quantity"
                     name="qty"
                     type="number"
                     onChange={e => onInputChange(e)}
                     required
                     margin="normal"

                  />
                  <br />
                  <TextField
                     
                     name="imageUrl"
                     value={imageU}
                     onChange={e => onInputChange(e)}
                     required
                   

                  />
                  <TextField
                     id="originalFileName"
                     type="file"
                     inputProps={{ accept: 'image/*' }}
                     required
                     label="Document"
                     name="originalFileName"
                     onChange={(e) => {
                        uploadImage(e);
                     }}
                     size="small"
                     variant="standard"
                  />
              
                  <img src={baseImage} height="100px" />
                  <br />
                  <Button
                     color="primary"
                     variant="contained"
                     type="onSubmit"
                  >Update</Button>
               </Grid>



            </form>
         </div>
      </div>
   );
};

export default EditBooking;
