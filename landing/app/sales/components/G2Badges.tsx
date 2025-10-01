export default function G2Badges() {
  const badges = [
    { name: 'G2 Top 25 2024', src: 'https://www.activepieces.com/badges/g2-top25-24.svg' },
    { name: 'G2 Most Implementable Winter 2024', src: 'https://www.activepieces.com/badges/g2-most-implementable-w24.svg' },
    { name: 'G2 High Performer Winter 2024', src: 'https://www.activepieces.com/badges/g2-high-performer-w24.svg' },
  ];

  return (
    <div className="mt-16 flex gap-4">
      {badges.map((badge) => (
        <img 
          key={badge.name}
          className="w-24" 
          src={badge.src}
          alt={badge.name}
        />
      ))}
    </div>
  );
}
