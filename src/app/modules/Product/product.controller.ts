import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProductService } from "./product.service";

const createProduct = catchAsync(async (req, res) => {
    const result = await ProductService.createProductIntoDB(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Product created successfully',
      data: result,
      
    });
  });
  const getAllProduct = catchAsync(async (req, res) => {
    const query = req.query; // Get query parameters from request
    const result = await ProductService.getAllProductFromDB(query);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Products retrieved successfully',
      data: result,
    });
  });



  const getSingleProduct = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await ProductService.getSingleProductFromDB(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'single product retrieved successfully',
      data: result,
      
    });
  });
  const getCategoryProduct = catchAsync(async (req, res) => {
    const { category } = req.params;
    const result = await ProductService.getSingleProductFromDB(category);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'single category retrieved successfully',
      data: result,
      
    });
  });



  
  const updateProduct = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await ProductService.updateProductFromDB(id, req.body);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Product updated successfully',
      data: result,
      
    });
  });
  const deleteProducts = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await ProductService.deleteProducts(id);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Product deleted successfully',
      data: result,
      
    });
  });


  export const ProductController = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    updateProduct,
    getCategoryProduct,
    deleteProducts
   
  }