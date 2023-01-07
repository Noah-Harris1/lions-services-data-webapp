export class  Order {
  id: number;
  title: string;
  quantity: number;
  message: string;
  city: string;

  constructor(Id,Title,Quantity,Message,City){
    this.id = Id;
    this.title = Title;
    this.quantity = Quantity;
    this.message = Message;
    this.city = City;
  }
}



