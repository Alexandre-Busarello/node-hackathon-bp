import mongoose from 'mongoose';

const connect = () => {
  mongoose.connect(process.env.MONGODB_URI || '');
  mongoose.Promise = global.Promise;

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('MongoDB connection successful');
  });
};

export {
  connect,
};
