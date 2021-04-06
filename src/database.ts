import { connect } from 'mongoose'

export async function startConnection() {
    const db = await connect('mongodb+srv://prueba:asd.456@cluster0.xb8um.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
        useNewUrlParser: true,
        useFindAndModify: false 
    });
    console.log('Database is connected');
}
