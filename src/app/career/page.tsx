const CareerDetails = () => {
  const careers = [
    {
      companyName: 'Company A',
      period: '2020 - Present',
      title: 'Senior Frontend Developer',
    },
    {
      companyName: 'Company B',
      period: '2018 - 2020',
      title: 'Frontend Developer',
    },
    {
      companyName: 'Company C',
      period: '2015 - 2018',
      title: 'Junior Frontend Developer',
    },
  ];

  return (
    <div className="bg-black text-white p-8 max-w-[500px] text-center">
      <h1 className="text-xl font-bold text-center mb-6">경력 사항</h1>
      {careers.map((career, index) => (
        <div key={index} className="bg-gray-800 p-4 rounded-lg mb-4">
          <h2 className="text-lg font-semibold">{career.companyName}</h2>
          <p className="text-md">{career.period}</p>
          <p className="text-md">{career.title}</p>
        </div>
      ))}
    </div>
  );
};

export default function Career() {
  return (
    <>
      <h1>Career</h1>
      <div className="flex justify-center">
        <CareerDetails />
      </div>
    </>
  );
}
