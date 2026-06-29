import './Menu.css';

const platters = [
  { name: 'Platter 1', price: '£6.99', desc: '1 Omelette, 1 Plain Paratha, 1 Karak Chai — Choose Channa, Saag or Daal' },
  { name: 'Platter 2', price: '£7.99', desc: '1 Keema Paratha, 1 Karak Chai — Choose Channa, Saag or Daal' },
  { name: 'Platter 3', price: '£5.99', desc: '1 Plain Paratha, 1 Karak Chai — Choose Channa, Saag or Daal' },
  { name: 'Platter 4', price: '£8.49', desc: '1 Naan or 2 Roti, 1 Sweet Lassi Glass — Choose Channa, Saag or Daal' },
  { name: 'Platter 5', price: '£10.99', desc: '2 Makai Roti with Saag and 1 Sweet Lassi Glass' },
  { name: 'Platter 6', price: '£7.99', desc: '1 Aloo Paratha, 1 Karak Chai — Choose Channa, Saag or Daal' },
  { name: 'Halwa Puri', price: '£6.99', desc: '3 Puris with Channa & Halwa' },
  { name: 'Halwa Puri (For 2)', price: '£12.99', desc: '4 Puris, Channa, Halwa and 2 Small Sweet Lassi or Karak Chai' },
  { name: 'Paya', price: '£10.99', desc: 'With 2 Rotis or 1 Naan' },
  { name: 'Nihari', price: '£9.99', desc: 'With 2 Rotis or 1 Naan' },
];

const specials = [
  { name: 'Lahori Chicken Cholay', price: '£8.99' },
  { name: 'Lahori Chana', price: '£4.99' },
  { name: 'Saag', price: '£5.99' },
  { name: 'Saag Paneer', price: '£9.99' },
  { name: 'Tarka Daal', price: '£6.99' },
  { name: 'Masala Omelette', price: '£1.99' },
  { name: 'Cheese Omelette', price: '£2.49' },
  { name: 'Nihari', price: '£9.99' },
  { name: 'Paya', price: '£9.99' },
  { name: 'Lamb Haleem', price: '£9.99' },
  { name: 'Halwa', price: '£2.49' },
];

const sides = [
  { name: 'Naan', price: '£0.99' },
  { name: 'Roti', price: '£0.99' },
  { name: 'Kulcha', price: '£1.99' },
  { name: 'Lacha Paratha', price: '£2.49' },
  { name: 'Aloo Paratha', price: '£2.99' },
  { name: 'Keema Paratha', price: '£3.99' },
  { name: 'Chicken Cheese Paratha', price: '£4.49' },
  { name: 'Cheese Paratha', price: '£3.49' },
  { name: 'Molie Paratha', price: '£3.99' },
  { name: 'Saag Paratha', price: '£4.99' },
  { name: 'Mix Veg Paratha', price: '£4.99' },
  { name: 'Nutella Paratha', price: '£4.99' },
  { name: 'Anda Paratha Roll', price: '£3.99' },
  { name: 'Keema Paratha Roll', price: '£4.99' },
  { name: 'Chicken Paratha Roll', price: '£4.99' },
];

function MenuItem({ name, price, desc }) {
  return (
    <div className="menu-item">
      <div className="menu-item__main">
        <span className="menu-item__name">{name}</span>
        <span className="menu-item__dots" />
        <span className="menu-item__price">{price}</span>
      </div>
      {desc && <p className="menu-item__desc">{desc}</p>}
    </div>
  );
}

function MenuSection({ title, items }) {
  return (
    <section className="menu-section">
      <h2 className="menu-section__title">{title}</h2>
      <div className="menu-section__items">
        {items.map(item => <MenuItem key={item.name} {...item} />)}
      </div>
    </section>
  );
}

export default function BreakfastMenu() {
  return (
    <div className="menu-page">
      <div className="menu-page__header">
        <h1 className="menu-page__title">Bagh Breakfast</h1>
        <p className="menu-page__note">Served until 3PM every day</p>
      </div>
      <div className="menu-page__body">
        <MenuSection title="Breakfast Platters" items={platters} />
        <MenuSection title="Breakfast Specials" items={specials} />
        <MenuSection title="Parathas &amp; Sides" items={sides} />
      </div>
    </div>
  );
}
