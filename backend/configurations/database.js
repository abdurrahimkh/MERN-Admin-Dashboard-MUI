import mongoose from 'mongoose';
export const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('MONGODB Connected'))
    .catch(err => console.log('Database Connection Error', err));
};
