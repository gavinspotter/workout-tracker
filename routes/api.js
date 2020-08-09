in this file i would require:
  
packages:
# express 
folders/files:
# ../models/userModel.js

i would do five routes:

1 # a post route - /api/workouts
2 # a put route - /api/workouts/:id 
3 # a get route - /api/workouts 
4 # a get route - /api/workouts/range
5 # a delete route - /api/workouts 

there are three routes all with the same route:

# one for posting or saving data
# one for getting data 
# and one for deleting data 

for the post route i would use the create function 
for the put route i would use the findbyIdandUpdate which explains what the put route does 
for the get route i would use the find function 
for the delete route i would use the findByIdAndDelete function 