import React, { useState } from 'react';
import imgs from './assets/img.jpg';
import img1 from './assets/img1.jpg';
import { Flex,Card } from '@radix-ui/themes';

const Navbar = () => {
  const [showAll, setShowAll] = useState(false);

  // Array of images with associated names
  const images = [
    { name: 'Saloni', image: imgs },
    { name: 'Priya', image: imgs },
    { name: 'Divya', image: imgs },
    // { name: 'Saloni', image: imgs },
    // { name: 'Person 3', image: imgs },
    // { name: 'Saloni', image: img1 },
    // { name: 'Saloni', image: img1 },
    // { name: 'Saloni', image: img1 },
    // { name: 'Saloni', image: img1 },
    // { name: 'Saloni', image: img1 },
    // { name: 'Saloni', image: img1 },
    // { name: 'Saloni', image: img1 },

  ];

  // Function to toggle the showAll state
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  // displayed in the popup
  const popupImages = images.slice(4);

  // Function to close the popup window
  const closePopup = () => {
    setShowAll(false);
  };

  // MongoDB connection and insertion code (replace with your actual code)
  const addToDatabase = async (name, image) => {
    try {
      // Connect to MongoDB
      // Example: const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      // await client.connect();

      // Insert data into MongoDB
      // Example: await client.db("your_database").collection("your_collection").insertOne({ name, image });

      // Close the MongoDB connection
      // Example: await client.close();
    } catch (error) {
      console.error('Error adding to database:', error);
    }
  };

  return (
    <Card align="center" columns='1' gap="6" p="4" ml='2' mt='5' wrap="wrap" className='Onleaves' >
      <div className="flex  max-w-[740px] rounded-2xl mx-auto relative pt-7 pl-6">
        <h1 className="text-2xl font-bold top-2  left-8 absolute">On Leave</h1>
        <h1 className="text  top-3 color-red right-8 absolute" onClick={toggleShowAll}>
          {showAll ? 'Hide' : 'Show all'}
        </h1>

        {/* Display only first 4 images */}
        {images.slice(0, 4).map((item, index) => (
          <div key={index} className="p- mt-3" style={{ padding: 12 }}>
            <div className="max-w-xs rounded-2xl overflow-hidden shadow-lg">
              <img
                className="w-full h-40 object-cover"
                src={item.image}
                alt={item.name}
              />
            </div>
            <div className="font-bold text-xl mt-3 text-center">{item.name}</div>
          </div>
        ))}

        {/* Show popup when showAll is true */}

        {showAll && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg max-w-[80%] max-h-[80%] overflow-auto">
              <h2 className="text-xl font-bold mb-4">Remaining OnLeaves</h2>
              <div className="grid grid-cols-5 gap-4">
                {popupImages.map((item, index) => (
                  <div key={index}>
                    <img
                      className="w-full h-24 object-cover"
                      src={item.image}
                      alt={item.name}
                    />
                    <div className="font-bold text-center mt-2">{item.name}</div>
                  </div>
                ))}
              </div>
              <button className="bg-gray-200 text-gray-800 px-4 py-2 mt-4 rounded-md" onClick={closePopup}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default Navbar;
