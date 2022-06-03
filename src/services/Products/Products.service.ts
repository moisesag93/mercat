import { IProduct } from "../../model/types";

export const listProducts = async () => {
    const url = 'https://amiiboapi.com/api/amiibo/';
    const data = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then((response: any) => response.json())
      .catch((error) => { console.log(error) });
    data.amiibo.forEach((element: IProduct) => {
      element.price = parseFloat((Math.random() * Math.random() * 100).toFixed(2));
    });
    return data.amiibo as Array<IProduct>;
  }