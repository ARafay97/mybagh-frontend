import './AnnouncementBar.css';

const MESSAGES = [
  '🍳 Breakfast served until 3PM daily',
  '🍽️ Starters, Mains & Street Food from 3PM',
  '📍 667 Stockport Road, Manchester, M12 4QE',
  '📞 Book events: 07587 049396',
  '🎉 Birthdays · Family Gatherings · Corporate Events · Mehndi Nights',
];

export default function AnnouncementBar() {
  const text = MESSAGES.join('   ✦   ');
  return (
    <div className="announce-bar" role="marquee" aria-label="Announcements">
      <div className="announce-bar__track">
        <span aria-hidden="true">{text}&emsp;&emsp;{text}</span>
      </div>
    </div>
  );
}
