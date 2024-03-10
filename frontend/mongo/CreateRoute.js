import Route from './Route.js'
import crypto from 'crypto'

const create_route = async (identity_route) => {
  const shortened_route = crypto.randomBytes(2).toString('hex')
  const new_route = new Route({
    shortened_route,
    identity_route
  })
  
  try {
    await new_route.save()
  } catch (e) {
    console.error(e)
  }

  console.log("Generated a new route:", new_route)

  return shortened_route
}

export default create_route