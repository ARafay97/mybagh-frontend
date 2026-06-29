import './Menu.css';

const starters = [
  { name: 'Poppadoms (2)', price: '£2.99' },
  { name: 'Lamb Chops', price: '£9.99' },
  { name: 'Chicken Wings', price: '£4.99' },
  { name: 'Lamb Seekh Kebab', price: '£6.49' },
  { name: 'Chicken Seekh Kebab', price: '£5.99' },
  { name: 'Chicken Tikka', price: '£5.99' },
  { name: 'Reshmi Kebab', price: '£6.99' },
  { name: 'Cheesy Gola Kebab', price: '£7.49' },
  { name: 'Achari Boti', price: '£6.99' },
  { name: 'Green Boti', price: '£6.99' },
  { name: 'Kastoori Boti', price: '£6.99' },
  { name: 'Lahori Masala Fish', price: '£9.99' },
];

const mains = [
  { name: '½ KG Chicken Karahi', price: '£13.99' },
  { name: 'Full KG Chicken Karahi', price: '£24.99' },
  { name: '½ KG Lamb Karahi', price: '£15.99' },
  { name: 'Full KG Lamb Karahi', price: '£29.99' },
  { name: 'Matka Smoke Chicken', price: '£12.99' },
  { name: 'Matka Smoke Lamb', price: '£14.49' },
  { name: 'Matka Achari Lamb', price: '£14.49' },
  { name: 'Matka Achari Chicken', price: '£12.99' },
  { name: 'Chicken Matka Biryani', price: '£9.99' },
  { name: 'Lamb Matka Biryani', price: '£12.99' },
  { name: 'Chicken Shashlik', price: '£12.99' },
  { name: 'Bhindi Lamb', price: '£11.99' },
  { name: 'Hot Shot Parmesan', price: '£13.99' },
  { name: 'Kebab Handi', price: '£12.99' },
  { name: 'Lamb Haleem', price: '£9.99' },
];

const grillPlatters = [
  { name: 'BBQ Sharing Platter (For 1)', price: '£12.99', desc: 'Lamb seekh kebab, lamb chop, chicken tikka, chicken wings, fish pakora served with rice' },
  { name: 'BBQ Sharing Platter (For 2)', price: '£19.99', desc: 'Lamb seekh kebabs, lamb chops, chicken tikka, chicken wings and fish pakora' },
  { name: 'Kebab Platter (For 2)', price: '£17.99', desc: 'Lamb Seekh Kebab, Chicken Seekh Kebab and Chapli Kebab' },
  { name: 'Tikka Rice Platter (For 2)', price: '£21.99', desc: 'Achari tikka, kastoori tikka, chicken tikka & green boti over fragrant rice' },
  { name: 'Bagh Platter (For 4)', price: '£69.99', desc: 'Achari boti, green boti, lamb chops, chicken seekh kebab, lahori masala fish, chicken wings, chips and rice' },
];

const streetFood = [
  { name: 'Gol Gappay (6)', price: '£4.99' },
  { name: 'Chicken Loaded Fries', price: '£6.99' },
  { name: 'Nacho Loaded Fries', price: '£7.99' },
  { name: 'Dynamite Chicken', price: '£6.99' },
  { name: 'Dynamite Prawn', price: '£8.99' },
  { name: 'Samosa Chaat', price: '£4.99' },
  { name: 'Papri Chaat (V)', price: '£4.99' },
  { name: 'Aloo Tikki Chaat', price: '£4.99' },
];

const vegMains = [
  { name: 'Tarka Daal (V/VG)', price: '£6.99' },
  { name: 'Lahori Chana (V/VG)', price: '£4.99' },
  { name: 'Saag Paneer (V)', price: '£9.99' },
  { name: 'Palak Paneer (V)', price: '£9.99' },
  { name: 'Bhindi Masala (V/VG)', price: '£5.99' },
];

const sides = [
  { name: 'Tandoori Roti', price: '£0.99' },
  { name: 'Plain Naan', price: '£0.99' },
  { name: 'Kulcha', price: '£1.99' },
  { name: 'Garlic Naan', price: '£1.99' },
  { name: 'Cheese Naan', price: '£2.99' },
  { name: 'Chips', price: '£2.99' },
  { name: 'Steamed Rice', price: '£2.99' },
  { name: 'Kids Meal', price: '£5.99' },
  { name: 'Egg Fried Rice', price: '£3.49' },
  { name: 'Pilau Rice', price: '£3.49' },
];

const mocktails = [
  { name: 'Strawberry Skyline', price: '£5.99' },
  { name: 'Mint Mojito', price: '£5.99' },
  { name: 'Faux Signature Royale', price: '£5.99' },
  { name: 'Blue Ocean', price: '£5.99' },
  { name: 'Heaven on the Rocks', price: '£5.99' },
  { name: 'Sunset Elixir', price: '£5.99' },
  { name: 'Bagh Lemonade', price: '£2.99' },
];

const desserts = [
  { name: 'Bagh Kheer', price: '£3.49' },
  { name: 'Bagh Rasmalai', price: '£3.99' },
  { name: 'Chocolate Springs', price: '£4.99' },
  { name: 'Classic Milk Cake', price: '£3.99' },
  { name: 'Gajar Halwa', price: '£3.99' },
  { name: 'Cake of the Day', price: '£3.49' },
  { name: 'Gulab Jamun (2 pc)', price: '£6.99' },
  { name: 'Lahori Kulfi', price: '£2.49' },
  { name: 'Ice Cream (2 Scoops)', price: '£2.99' },
];

const drinks = [
  { name: 'Karak Chai', price: 'Glass £2.49 / Large £2.99' },
  { name: 'Pink Chai', price: 'Regular £2.49 / Large £2.99' },
  { name: 'Mint Tea', price: 'Regular £1.99 / Large £2.49' },
  { name: 'English Tea', price: 'Regular £1.99 / Large £2.49' },
  { name: 'Coffee', price: 'Regular £2.49 / Large £2.99' },
  { name: 'Sweet Lassi', price: 'Glass £2.49 / Jug £6.99' },
  { name: 'Nimkeen Lassi', price: 'Glass £2.49 / Jug £6.99' },
  { name: 'Mango Lassi', price: 'Glass £2.99 / Jug £8.99' },
  { name: 'Matka Chai', price: '£3.49' },
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

function MenuSection({ title, items, note }) {
  return (
    <section className="menu-section">
      <h2 className="menu-section__title">{title}</h2>
      {note && <p className="menu-section__note">{note}</p>}
      <div className="menu-section__items">
        {items.map(item => <MenuItem key={item.name} {...item} />)}
      </div>
    </section>
  );
}

export default function MainMenu() {
  return (
    <div className="menu-page">
      <div className="menu-page__header">
        <h1 className="menu-page__title">MyBagh Cafe &amp; Restaurant</h1>
        <p className="menu-page__note">Starters, Mains &amp; Street Food available from 3PM · Desserts &amp; Drinks all day</p>
      </div>
      <div className="menu-page__body">
        <MenuSection title="Starters" items={starters} />
        <MenuSection title="Mains" items={mains} />
        <MenuSection title="Grill Platters" items={grillPlatters} />
        <MenuSection title="Street Food" items={streetFood} />
        <MenuSection title="Vegetarian Mains" items={vegMains} />
        <MenuSection title="Sides" items={sides} />
        <MenuSection title="Mocktails" items={mocktails} />
        <MenuSection title="Desserts" items={desserts} />
        <MenuSection title="Drinks of Culture" items={drinks} />
      </div>
      <p className="menu-page__allergy">Please contact our staff about any allergies or any concerns you may have.</p>
    </div>
  );
}
