import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const Forms = props => {
  return (

    // FORM CONTAINER on the landing page
    <div>
      <p style={{ fontWeight: "bold", color: "green", textAlign: "center" }}>
        Signup to continue
      </p>

      {/* Form with inline styles */}
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            style={{ height: "25px",fontSize:10 }}
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="email"
            
          />
        
          <Label for="examplePassword">Password</Label>
          <Input
            style={{ height: "25px" }}
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password "
          />
        
          <Label for="exampleFile">File</Label>
          <Input  type="file" name="file" id="exampleFile" />
          <FormText color="muted">your pic is safe with us</FormText>
        
          <legend style={{ fontSize: 15 }}>Select Gender</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />
              Male
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />
              Female
            </Label>
          </FormGroup>
        </FormGroup>

        <button
          style={{
            marginBottom: "10px",
            backgroundColor: "#06B440",
            color: "#fff"
          }}
        >
          Submit
        </button>
      </Form>
    </div>
  );
};

export default Forms;
