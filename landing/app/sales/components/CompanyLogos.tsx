export default function CompanyLogos() {
  const companies = [
    { name: 'Pipedrive', logo: 'https://www.activepieces.com/logos/pipedrive.png' },
    { name: 'Rakuten', logo: 'https://www.activepieces.com/logos/rakuten.png' },
    { name: 'Experience.com', logo: 'https://www.activepieces.com/logos/experiencecom.png' },
    { name: 'Roblox', logo: 'https://www.activepieces.com/logos/roblox.png' },
    { name: 'Exabeam', logo: 'https://www.activepieces.com/logos/exabeam.png' },
    { name: 'Alfred24', logo: 'https://www.activepieces.com/logos/alfred24.png' },
    { name: 'Contentful', logo: 'https://www.activepieces.com/logos/contentful.png' },
    { name: 'VTS', logo: 'https://www.activepieces.com/logos/vts.png' },
  ];

  return (
    <div className="w-[30rem] pt-16 grid grid-cols-2 justify-center items-center [&_img]:h-6 gap-y-10">
      {companies.map((company) => (
        <img 
          key={company.name}
          src={company.logo} 
          alt={company.name}
        />
      ))}
    </div>
  );
}
