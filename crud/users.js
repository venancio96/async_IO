const express = require('express');
const router = express.Router();


let users = [
    {
        firstName: "John",
        lastName: "wick",
        email:"johnwick@gamil.com",
        DOB:"22-01-1990",
    },
    {
        firstName: "John",
        lastName: "smith",
        email:"johnsmith@gamil.com",
        DOB:"21-07-1983",
    },
    {
        firstName: "Joyal",
        lastName: "white",
        email:"joyalwhite@gamil.com",
        DOB:"21-03-1989",
    },
];

// GET request: Retrieve all users
router.get("/",(req,res)=>{
  res.send(users);
  //curl localhost:5000/user/
  });

// GET by specific ID request: Retrieve a single user with email ID
router.get("/:email",(req,res)=>{
  const email = req.params.email;
  let filtered_users = users.filter((user) => user.email === email);
  res.send(filtered_users);
  // curl localhost:5000/user/johnsmith@gamil.com
});


// POST request: Create a new user
router.post("/",(req,res)=>{
  users.push({
    
    "firstName": req.query.firstName,
    "lastName": req.query.lastName,
    "email": req.query.email,
    "DOB": req.query.DOB
  })
  res.send("the user" + req.query.firstName + "has been added");
  // curl --request POST 'localhost:5000/user?firstName=Jon&lastName=Lovato&email=jonlovato@theworld.com&DOB=10/10/1995'
  //curl localhost:5000/user/jonlovato@theworld.com
});


// PUT request: Update the details of a user by email ID
router.put("/:email", (req, res) => {
  const email = req.params.email;
  let filtered_users = users.filter((user)=> user.email === email);
  if(filtered_users >0)
  {
    let filtered_user = filtered_users[0];
    
    let DOB = req.query.DOB;
    if(DOB)
    {
        filtered_user.DOB = DOB;
    }

    let firstName = req.query.firstName;
    if(firstName)
    {
        filtered_user.firstName = firstName;
    }

    let lastName = req.query.lastName;
    if(lastName)
    {
        filtered_user.lastName = lastName;
    }

    //replace old user entry with updated user
    users = users.filter((user) => user.email != email);
    users.push(filtered_user);
    res.send(`user with email ${email} updated`);
  }
  else
  {
    res.send("no user found");
  }
  //curl --request PUT 'localhost:5000/user/johnsmith@gmail.com?DOB=1/1/1971'
  //curl localhost:5000/user/johnsmith@gmail.com

});


// DELETE request: Delete a user by email ID
router.delete("/:email", (req, res) => {
  const email = req.params.email;
  users = users.filter((user) => user.email === email);

  res.send(`user with email ${email} deleted.`);
  //curl --request DELETE 'localhost:5000/user/johnsmith@gmail.com'

});


router.get("/",(req,res)=>{
    //Send a JSON response containing the users array, formatted with an indentation of 4 spaces for readability
res.send(JSON.stringify({users}, null, 4));
});
module.exports=router;
