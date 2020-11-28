import { Props } from 'react';

export default interface Produto extends Props<any> {
  image: string;
  title: string;
  icon: string;
  backgroundImage: string;
  text: string;
  qualidade: string[];
}
