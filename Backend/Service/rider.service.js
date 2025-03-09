import riderModel from '../Models/rider.model.js'

const CreateRider = async ({firstname, lastname, email, password, color, plate, capacity, vehicleType}) => {
    if(!firstname || !email || !password || !color || !plate || !capacity || !vehicleType) {
        return {error: 'Missing required fields.'};
    }

    const Rider = riderModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType
        }
    })

    return Rider
}

export default CreateRider;