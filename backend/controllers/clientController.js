import Product from '../models/Product.js';
import ProductStat from '../models/ProductStat.js';
import User from '../models/User.js';

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    const ProductWithStats = await Promise.all(
      products.map(async product => {
        const stat = await ProductStat.find({
          productId: product._id,
        });
        return {
          ...product._doc,
          stat,
        };
      })
    );
    res.status(200).json(ProductWithStats);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getCustomers = async (req, res) => {
  try {
    const customers = await User.find({ role: 'user' }).select('-password');
    res.json(customers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
