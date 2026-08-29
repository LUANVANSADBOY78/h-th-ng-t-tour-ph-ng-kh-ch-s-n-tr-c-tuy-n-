export const getFlights = (req, res) => {
  // Demo dữ liệu giả, sau này lấy từ CSDL MySQL
  const flights = [
    { id: 1, airline: 'Vietnam Airlines', route: 'SGN-HAN', price: 1500000 },
    { id: 2, airline: 'VietJet Air', route: 'SGN-BKK', price: 2133250 },
  ];
  res.status(200).json({ success: true, data: flights });
};

export const getHotels = (req, res) => {
  const hotels = [
    { id: 1, name: 'JW Marriott Hanoi', location: 'Hà Nội' },
    { id: 2, name: 'Vinpearl Resort Phú Quốc', location: 'Phú Quốc' },
  ];
  res.status(200).json({ success: true, data: hotels });
};
