type SellerUser ={

phoneNumber:string;
Email:string;
FirstName :string
LastName :string;
Address1:string;
Address2 ?:string;
Country:string;
City:string;
State :string;
Zip :string;
PanCardNumber:string;
AadharCardNumber:string;
GSTNumber?:string;
Password:string;
ConfirmPassword:string;
}
type SellerUserErrorType={
    phoneNumber:string;
Email:string;
FirstName :string
LastName :string;
Address1:string;
Address2 ?:string;
Country:string;
City:string;
State :string;
Zip :string;
PanCardNumber:string;
AadharCardNumber:string;
GSTNumber?:string;
Password:string;
ConfirmPassword:string;

}
type BookToSell={
   

    name:string;
    description:string;
    imageUrl:string;
    price:string;
    category:string;
    class:string;
    author:string;
}
type BookToSellErrorType={
    name:string;
    description:string;
    imageUrl:string;
    price:string;
    category:string;
    class:string;
    author:string;

}
type  Category= {
    category: string;
    id: string;
  }
  type SearchBook={
   

    name:string;
    description:string;
    imageUrl:string;
    price:string;
    category:string;
    class:string;
    author:string;
    id:number;
}
type AddressInput={
   
    line1:string;
    line2:string;
    city:string;
    state:string;
    postalcode:string;
    country:string;

}