import { useState } from 'react';
        formData
      );

      alert(res.data.message);

    } catch (error) {
      alert(error.response.data.message);
    }
  }

  return (
    <div className='flex justify-center items-center h-screen'>

      <form
        onSubmit={handleSubmit}
        className='shadow-lg p-10 rounded w-96'
      >

        <h2 className='text-3xl font-bold mb-5'>Register</h2>

        <input type='text' name='name' placeholder='Name'
        className='border p-2 w-full mb-3'
        onChange={handleChange} />

        <input type='email' name='email' placeholder='Email'
        className='border p-2 w-full mb-3'
        onChange={handleChange} />

        <input type='password' name='password' placeholder='Password'
        className='border p-2 w-full mb-3'
        onChange={handleChange} />

        <input type='text' name='bloodGroup' placeholder='Blood Group'
        className='border p-2 w-full mb-3'
        onChange={handleChange} />

        <input type='text' name='city' placeholder='City'
        className='border p-2 w-full mb-3'
        onChange={handleChange} />

        <input type='text' name='phone' placeholder='Phone'
        className='border p-2 w-full mb-3'
        onChange={handleChange} />

        <button className='bg-red-600 text-white w-full py-2 rounded'>
          Register
        </button>

      </form>

    </div>
  )
}

export default Register