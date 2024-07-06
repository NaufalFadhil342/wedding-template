import { v4 as uuidv4 } from 'uuid';
import chanel from '../image/chanel.png';
import lux from '../image/lux.png';
import playboy from '../image/playboy.png';
import shampoo from '../image/shampoo.png';

const galleryData = [
  'https://images.unsplash.com/photo-1504642635227-12ab2b71b540?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1618283183337-d7c72ea52804?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1596457221755-b96bc3a6df18?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1580151134699-e0cfbeb763d3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1574871786514-46e1680ea587?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1591604442449-ecc9943efabf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

const historyData = [
  {
    id: uuidv4(),
    image: 'https://images.unsplash.com/photo-1543501527-49e855165f73?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'First time we met',
    date: 'July 20, 2024',
  },
  {
    id: uuidv4(),
    image: 'https://images.unsplash.com/photo-1603394956091-583833c68ea9?q=80&w=1390&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Our first date',
    date: 'August 10, 2024',
  },
  {
    id: uuidv4(),
    image: 'https://images.pexels.com/photos/14600070/pexels-photo-14600070.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Our Marriage Proposal',
    date: 'October 30, 2024',
  },
  {
    id: uuidv4(),
    image: 'https://images.pexels.com/photos/5902752/pexels-photo-5902752.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Our Ceremony',
    date: 'January 10, 2024',
  },
];

const partnerData = [
  {
    id: uuidv4(),
    tag: 'groom',
    name: 'Justin Hubner',
    label: 'Best Friend',
    image: 'https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8MXwwfHx8Mg%3D%3D',
  },
  {
    id: uuidv4(),
    tag: 'groom',
    name: 'Sandy Walsh',
    label: 'Brother',
    image: 'https://images.unsplash.com/photo-1583692331501-5339b76cbf1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG1hbnxlbnwwfDF8MHx8fDI%3D',
  },
  {
    id: uuidv4(),
    tag: 'groom',
    name: 'Ivar Jenner',
    label: 'Future Brother In Law',
    image: 'https://images.unsplash.com/photo-1619169312864-c81168058d7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG1hbnxlbnwwfDF8MHx8fDI%3D',
  },
  {
    id: uuidv4(),
    tag: 'bride',
    name: 'Emma Grace',
    label: 'Best Friend',
    image: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: uuidv4(),
    tag: 'bride',
    name: 'Alice Stella',
    label: 'Sister',
    image: 'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: uuidv4(),
    tag: 'bride',
    name: 'Abigail Chloe',
    label: 'Future Sister In Law',
    image: 'https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const invitationImage = {
  image: 'https://images.unsplash.com/photo-1494955870715-979ca4f13bf0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};

const giftData = [chanel, lux, playboy, shampoo, lux, shampoo];

const ceremonyData = [
  {
    id: uuidv4(),
    image: 'https://images.unsplash.com/photo-1572790079612-f578a458b127?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    label: 'Dancing Party',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, dignissimos veritatis maxime dicta suscipit ex est sapiente, mollitia excepturi vitae sequi maiores nisi! Repellat, enim.',
  },
  {
    id: uuidv4(),
    image: 'https://images.unsplash.com/photo-1524148612500-b1dbb66d7ee2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    label: 'Flower and Flower',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, dignissimos veritatis maxime dicta suscipit ex est sapiente, mollitia excepturi vitae sequi maiores nisi! Repellat, enim.',
  },
  {
    id: uuidv4(),
    image: 'https://images.unsplash.com/photo-1664033614806-48afc482ef80?q=80&w=1634&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    label: 'Food Stand',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, dignissimos veritatis maxime dicta suscipit ex est sapiente, mollitia excepturi vitae sequi maiores nisi! Repellat, enim.',
  },
];

export { historyData, partnerData, invitationImage, ceremonyData, giftData, galleryData };
