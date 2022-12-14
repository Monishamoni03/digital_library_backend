import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const bookSchema = new mongoose.Schema({
  
  bookName: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  category: {
    type: String,
    reuired: true
  },
  description: {
    type: String,
    required: true
  }
    // bookCategoryId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'Book Category'
    // },
  }
  
);

//for book id
autoIncrement.initialize(mongoose.connection);
bookSchema.plugin(autoIncrement.plugin, 'Book');

export default mongoose.model('Book', bookSchema);