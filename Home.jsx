import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='p-10 text-center'>
      <h1 className='text-5xl font-bold text-red-600'>Blood Donor Portal</h1>

      <p className='mt-5'>Find blood donors instantly during emergencies.</p>

      <div className='mt-8 flex justify-center gap-5'>
        <Link to='/register'>
          <button className='bg-red-500 text-white px-6 py-2 rounded'>
            Register
          </button>
        </Link>

        <Link to='/search'>
          <button className='bg-black text-white px-6 py-2 rounded'>
            Search Donor
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home