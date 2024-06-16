

const UserDetails = () => {
  
  return (
    <div className="bg-white p-8 rounded-lg shadow-md h-full max-w-md mx-auto">
      <div className="flex justify-center mb-4">
        <img
          src="/avatar2.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          className="text-black w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Contact</label>
        <input
          type="text"
          name="contact"
          className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Occupation</label>
        <input
          type="text"
          name="occupation"
          className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Update
      </button>
    </div>
  );
};

export default UserDetails;
