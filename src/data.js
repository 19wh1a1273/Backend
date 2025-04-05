export const fetchDestinations = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Paris, France', landmark: 'Eiffel Tower', bestTime: 'April - June, September - November', img: 'https://www.travelandleisure.com/thmb/Qa7_o8_XVpIVH5vqq7i73UlTSkU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg' },
        { id: 2, name: 'Tokyo, Japan', landmark: 'Shibuya Crossing', bestTime: 'March - May, September - November', img: 'https://www.universalweather.com/blog/wp-content/uploads/2019/07/tokyo-ops-7-19.jpg' },
        { id: 3, name: 'New York, USA', landmark: 'Statue of Liberty', bestTime: 'April - June, September - November', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/800px-New_york_times_square-terabass.jpg' },
        { id: 4, name: 'Sydney, Australia', landmark: 'Sydney Opera House', bestTime: 'September - November, March - May', img: 'https://images.squarespace-cdn.com/content/v1/55ee34aae4b0bf70212ada4c/1577545161018-1F9Z9ZZQG9JO2O4WCWQX/keith-zhu-qaNcz43MeY8-unsplash+%281%29.jpg?format=1500w' },
        { id: 5, name: 'Rio de Janeiro, Brazil', landmark: 'Christ the Redeemer', bestTime: 'December - March', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKbZgY7P82VBTdeAEoVkjg4unvqc-B-FTJ6w&s' },
      ]);
    }, 1000);
  });
};

export const tipsData = [
  'Pack light and carry versatile clothing.',
  'Keep a backup of your important documents.',
  'Learn basic phrases of the local language.',
  'Carry a portable charger for your devices.',
  'Mix cash and cards for financial flexibility.',
];