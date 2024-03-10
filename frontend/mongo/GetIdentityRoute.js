import Route from './Route.js'

const get_identity_route = async (shortened_route) => {
  try {
    if (await Route.exists({ shortened_route })) {
      const route = await Route.findOne({ shortened_route })

      return route.identity_route
    } else {
      return -1
    }
  } catch (e) {
    console.error(e)
  }
}

export default get_identity_route