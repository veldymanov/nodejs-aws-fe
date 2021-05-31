import * as Yup from 'yup';

export type Product = {
  id: string,
  sku: string,
  title: string,
  description: string,
  price: number,
  count: number,
};

export const ProductSchema = Yup.object().shape({
  string: Yup.string().required(),
  title: Yup.string().required(),
  description: Yup.string(),
  price: Yup.number().required(),
  count: Yup.number().required(),
});
