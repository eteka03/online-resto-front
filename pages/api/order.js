import Cors from 'cors'
// Initializing the cors middleware
const cors = Cors({
    methods: ['GET', 'POST','HEAD'],
  })
  
  // Helper method to wait for a middleware to execute before continuing
  // And to throw an error when an error happens in a middleware
  function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
      fn(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result)
        }
  
        return resolve(result)
      })
    })
  }


  async function order(req, res) {
    // Run the middleware
    await runMiddleware(req, res, cors)
  
    // Rest of the API logic
    const {tableId} = req.query
    const {commandeList} = req.body
    
    res.json({ tableId , commandeList })
  }

  export default order