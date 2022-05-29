require('express-async-errors')
const express = require('express')
const app = express()
const Task = require('./models/task')
const taskRouter = require('./routes/task')
const errorHandlerMiddleware = require('./middleware/error-handler')
 require('./db/connect')
const port = process.env.PORT || 3400
const notFound = require('./middleware/not-found')
app.use(express.static('./public'))
app.use(express.json())




app.use('/api/v1/tasks', taskRouter)

app.get('/jjj' , async(req, res) => {
  const dee =  Task.find({ })
  // const ree = dee.sort('name')
  let red = await dee.select('name')
  console.log(red)
  red = red.filter((update) => {
    return update.name === "Champ"
  })
  // const red = await ree
  res.json({red})
})
app.use(notFound.notFound)
app.use(errorHandlerMiddleware)
app.listen(port,  () => {
// try {
//  await configDB()
console.log(`App is running already on ${port}`);
// }catch (error) {
//     console.log(error.message)
// }
})

// let calculator = {

//    set read(c) {
//       let [a, b] = c.split('')
//       this.a = a,
//       this.b = b
//     },
//     mul() {
//         return this.a * this.b;
//       },
//       sum() {
//         return this.a + this.b;
//       }
//   };
  
//   calculator.read = "48"
//   console.log( calculator.sum() );
//   console.log( calculator.mul() );

// function Accumulator(startingValue) {
  //   this.value = startingValue;
  
  //   this.read = function() {
  //     this.value += 8;
  //   };
  
  // }
  
  // let accumulator = new Accumulator(1);
  // accumulator.read();
  // accumulator.read();
  // console.log(accumulator.value);
