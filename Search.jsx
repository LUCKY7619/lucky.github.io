import { useState } from 'react';
  const [city, setCity] = useState('');
  const [donors, setDonors] = useState([]);

  const searchDonors = async () => {

    const res = await axios.get(
      `http://localhost:5000/api/donors/search?bloodGroup=${bloodGroup}&city=${city}`
    );

    setDonors(res.data);
  }

  return (
    <div className='p-10'>

      <h1 className='text-4xl font-bold mb-5'>Search Donors</h1>

      <div className='flex gap-3 mb-5'>

        <input
        type='text'
        placeholder='Blood Group'
        className='border p-2'
        onChange={(e) => setBloodGroup(e.target.value)}
        />

        <input
        type='text'
        placeholder='City'
        className='border p-2'
        onChange={(e) => setCity(e.target.value)}
        />

        <button
        onClick={searchDonors}
        className='bg-red-600 text-white px-5 rounded'>
          Search
        </button>

      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>

        {donors.map((donor) => (

          <div key={donor._id}
          className='shadow-lg p-5 rounded'>

            <h2 className='text-2xl font-bold'>{donor.name}</h2>

            <p>Blood Group: {donor.bloodGroup}</p>
            <p>City: {donor.city}</p>
            <p>Phone: {donor.phone}</p>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Search