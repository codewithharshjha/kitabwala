import vine from '@vinejs/vine'
import { parsePhoneNumberFromString } from 'libphonenumber-js';

 export const SellerUserSchema = vine.object({

  Email: vine.string().email(),

  Password: vine
    .string()
    .minLength(8)
    .maxLength(32),
    
    phoneNumber: vine.string().minLength(10),
    FirstName:vine.string().minLength(5).maxLength(15),
    LastName:vine.string().minLength(2).maxLength(15),
    Address1:vine.string().minLength(5).maxLength(55),
    Address2:vine.string().minLength(5).maxLength(55),
    City:vine.string().minLength(5).maxLength(15),
    State:vine.string().minLength(5).maxLength(15),
    Zip:vine.string().minLength(5).maxLength(15),
    PanCardNumber:vine.string().minLength(10),
    AadharCardNumber:vine.string().minLength(10),
    GSTNumber:vine.string().minLength(10),
    Country:vine.string(),
    ConfirmPassword:vine.string().minLength(8).maxLength(32),


})
export const BookToSellSchema=vine.object({
  name:vine.string(),
  description:vine.string().minLength(15).maxLength(100),
  price:vine.string(),
  imageUrl:vine.string(),
  category:vine.string(),
  author:vine.string(),
  class:vine.string()
})

