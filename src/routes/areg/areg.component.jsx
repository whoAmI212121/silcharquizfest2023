import React, { useState } from 'react';

const AccommodationRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    city: '',
    email: '',
    mobile: '',
    idProofCategory: 'Aadhaar',
    idProofNumber: '',
    idProofUpload: '',
    accommodationDays: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submission logic here, e.g., sending data to a server or saving it to state.
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-2/3 lg:w-1/2">
        <h2 className="text-2xl font-bold text-center mb-6">Accommodation Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-gray-600 font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div>
              <label htmlFor="dob" className="block text-gray-600 font-semibold">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="city" className="block text-gray-600 font-semibold">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="mt-4">
            <label htmlFor="email" className="block text-gray-600 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="mt-4">
            <label htmlFor="mobile" className="block text-gray-600 font-semibold">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="mt-4">
            <label htmlFor="idProofCategory" className="block text-gray-600 font-semibold">ID Proof Category</label>
            <select
              name="idProofCategory"
              value={formData.idProofCategory}
              onChange={handleChange}
              className="form-select"
            >
              <option value="Aadhaar">Aadhaar</option>
              <option value="Voter ID">Voter ID</option>
              <option value="Pan Card">Pan Card</option>
              <option value="Passport">Passport</option>
              <option value="Any other valid ID">Any other valid ID</option>
            </select>
          </div>

          <div className="mt-4">
            <label htmlFor="idProofNumber" className="block text-gray-600 font-semibold">ID Proof Number</label>
            <input
              type="text"
              name="idProofNumber"
              value={formData.idProofNumber}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="mt-4">
            <label htmlFor="idProofUpload" className="block text-gray-600 font-semibold">ID Proof Upload</label>
            <input type="file" name="idProofUpload" onChange={handleChange} className="form-input" />
          </div>

          <div className="mt-4">
            <label htmlFor="accommodationDays" className="block text-gray-600 font-semibold">Accommodation required for days</label>
            <input
              type="text"
              name="accommodationDays"
              value={formData.accommodationDays}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="mt-6 text-center">
            <button type="submit" className="btn bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded-full">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccommodationRegistrationForm;
