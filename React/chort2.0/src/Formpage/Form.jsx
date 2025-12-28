import { useState } from "react";

export default function StudentProfile() {
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [image, setImage] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-100">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-80">
        <h2 className="text-2xl font-bold text-center mb-4">Student Profile</h2>

        {/* Profile Image */}
        <div className="flex flex-col items-center mb-4">
          <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden mb-2">
            {image ? (
              <img
                src={image}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                No Image
              </div>
            )}
          </div>

          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
            className="text-sm"
          />
        </div>

        {/* Name */}
        <div className="mb-3">
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Roll No */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Roll No</label>
          <input
            type="text"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            placeholder="Enter roll number"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Button */}
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition">
          Save Profile
        </button>
      </div>
    </div>
  );
}








