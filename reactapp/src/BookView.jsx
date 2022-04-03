import React, { Component } from "react"
import axios from 'axios';
import Button from '@material-ui/core/Button';
export class Viewbooking extends Component {
   
   constructor(props) {
      super(props)
      this.state = {
         data: []
      }
   }

   handleFormSubmit = result => {
      localStorage.setItem('id', result);
   }
  
   componentDidMount() {     
      axios.get('http://localhost/api-student/book.php').then(res => {         
         this.setState({ data: res.data });
      });
   }
  
   render() {     
       const deleteUser = async id => {
         axios.delete('http://localhost/api-student/book.php/'+id).then(res => {             
            if(res.data.status == 1){
               alert("Successfully Deleted...!");
               this.componentDidMount();
            }
            else{
               alert("Failed to Delete...!");
            }
         });
        
       };
      const edit = (id) => {
         localStorage.setItem('id', id);         
         window.location.href = "/bookEdit";
      }
      return (
         <div className="maincontainer">
            <h1 className="mr-5 ml-5 mt-5">Booking List</h1>
            <div className="container mb-5 mt-5 text-left" style={{ padding: "20px" }}>
               <table class="table table-bordered">
                  <thead>
                     <tr>
                        <th> ID</th>
                        <th>Serial No</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Image</th>
                     
                        <th>Action</th>
                     </tr>
                  </thead>
                  <tbody>
                     {this.state.data.map((result) => {
                        return (

                           <tr>
                              <td>{result.id}</td>
                              <td>{result.serialNumber}</td>
                              <td>{result.name}</td>
                              <td>{result.price}</td>
                              <td>{result.qty}</td>
                              <td> <img src={result.imageUrl} height="100px" /></td>
                              
                              <td>
                                 <Button color="secondary" variant="contained" onClick={() => deleteUser(result.id)}>Delete</Button>&nbsp;&nbsp;
                                 <Button color="primary" variant="contained" onClick={() => edit(result.id)}>Edit</Button></td>
                           </tr>
                        )
                     })}
                  </tbody>
               </table>
            </div>
         </div>
      )
   }
};

export default Viewbooking;