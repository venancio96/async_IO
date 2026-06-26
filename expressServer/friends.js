const express = require('express');

const router = express.Router();

let friends = {
    "johnsmith@gamil.com": {"firstName": "John","lastName": "Doe","DOB":"22-12-1990"},
    "annasmith@gamil.com":{"firstName": "Anna","lastName": "smith","DOB":"02-07-1983"},
    "peterjones@gamil.com":{"firstName": "Peter","lastName": "Jones","DOB":"21-03-1989"}
};


// GET request: Retrieve all friends
router.get("/",(req,res)=>{

  res.send(friends,null,4);//This line is to be replaced with actual return value
});

// GET by specific ID request: Retrieve a single friend with email ID
router.get("/:email",(req,res)=>{

    const email = req.params.email;
    res.send(friends[email]);

});


// POST request: Add a new friend
router.post("/",(req,res)=>{
  if(req.body.email)
  {
    friends[req.body.email] =
    {
        "firstName":req.body.firstName,
        "lastName":req.body.lastName,
        "DOB":req.body.DOB        
    };
  }
  res.send("the user" + (``) + (eq.body.email) + "has been added");
});


// PUT request: Update the details of a friend with email id
router.put("/:email", (req, res) => {
  const email = req.params.email;
  let friend = friends[email];
  if(friend)
  {
    let DOB = req.params.DOB;
    let firstName = req.params.firstName;
    let lastName = req.params.lastName;   
  
  if(DOB)
  {
    friend["DOD"] = DOB;
    friend["firstName"] = firstName;
    friend["lastName"] = lastName;
  }
  friends[email] = friend;
  res.send(`friend with the ${email} updated`);
}
  res.send("unable to find friend")//This line is to be replaced with actual return value
});


// DELETE request: Delete a friend by email id
router.delete("/:email", (req, res) => {
  const email = req.params.email;
  if(email){
  delete friends[email];
  }
  res.send(`friend with the email ${email} is deleted`);
});

module.exports=router;
