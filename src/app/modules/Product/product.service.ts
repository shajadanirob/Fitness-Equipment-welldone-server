/* eslint-disable prefer-const */

import { TProduct } from "./product.inerface";
import { Product } from "./product.model";
import { FilterQuery, SortOrder } from 'mongoose';

const createProductIntoDB = async (payload: TProduct): Promise<TProduct> => {
    const result = await Product.create(payload);
    return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getAllProductFromDB = async (query: any): Promise<TProduct[]> => {
    const { search, categories, priceRange, sort } = query;

    let filter: FilterQuery<TProduct> = {};

    if (search) {
        filter.name = { $regex: search, $options: 'i' };
    }

    if (categories) {
        const categoryArray = categories.split(',');
        filter.category = { $in: categoryArray };
    }

    if (priceRange) {
        const [minPrice, maxPrice] = priceRange.split('-').map(Number);
        filter.price = { $gte: minPrice, $lte: maxPrice };
    }

    let sortOption: { [key: string]: SortOrder } = {};
    if (sort) {
        const [sortField, sortOrder] = sort.split('_');
        sortOption[sortField] = sortOrder === 'asc' ? 1 : -1;
    }

    console.log('Filter:', filter);
    console.log('Sort Option:', sortOption);

    const result = await Product.find(filter).sort(sortOption);
    console.log('Result:', result);

    return result;
};

const getSingleProductFromDB = async (id: string): Promise<TProduct | null> => {
    const result = await Product.findById(id);
    return result;
};

const getCategoryFromDb = async (category: string): Promise<TProduct | null> => {
    const result = await Product.findOne({ category });
    return result;
};

const updateProductFromDB = async (id: string, payload: Partial<TProduct>): Promise<TProduct | null> => {
    const result = await Product.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
};

const deleteProducts = async (id: string): Promise<TProduct | null> => {
    // Finding and deleting a product by its ID
    const result = await Product.findByIdAndDelete(id);
    return result;
};

export const ProductService = {
    createProductIntoDB,
    getAllProductFromDB,
    updateProductFromDB,
    getSingleProductFromDB,
    getCategoryFromDb,
    deleteProducts
};
