import React from 'react';
import '../css/About.css';

import form from '../images/Form.jpg';
import { TextField, Select, MenuItem, Button } from '@mui/material';
import { fetchCountries } from '../functions/Countries';
import { useState, useEffect } from 'react';
import circle from '../images/circle.png';

function Venturist() {
  const [countries, setCountries] = useState([]);
  const Customer = ['Regular Customer', 'Social Venturist'];
  const Styles = [
    'Renaissance Art',
    'Neoclassicalism Art',
    'Constructivism Art',
    'Cubism Art',
    'Expressionism Art',
    'Futurism Art',
    'Impressionism Art',
    'Mannerism Art',
    'Realism Art',
    'Romanticism Art',
    'Symbolism Art',
  ];

  const Preferences = ['BASIC (5k)', 'Standard (10k)', 'Premium (15k)'];

  useEffect(() => {
    fetchCountries().then(({ data }) => {
      setCountries(data);
    });
  }, []);

  const initialState = {
    Person: '',
    Paintings: '',
    Sponsered: '',
    Name: '',
    Country: '',
    Email: '',
    Contact: '',
    Address: '',
    Preference: '',
    Idea: '',
  };
  const [vacancy, setVacancy] = useState(initialState);

  const {
    Person,
    Paintings,
    Sponsered,
    Name,
    Country,
    Email,
    Contact,
    Address,
    Preference,
    Idea,
  } = vacancy;

  const handleInputChange = (e) => {
    e.preventDefault();
    setVacancy({ ...vacancy, [e.target.name]: e.target.value });
    console.log(vacancy);
    console.log(vacancy);
  };

  return (
    <div className="text-black" id="contact">
      <h1 className="text-5xl text-center bg-gray-200 py-10 text-black">
        Be a Social Venturist
      </h1>
      <div className="flex flex-col items-center md:flex-row  bg-black">
        <div className="w-full px-8 lg:w-1/2 bg-white pb-20">
          <h1 className="mt-8 text-2xl mb-10">Fill in the Form</h1>
          <div className="flex flex-col space-y-4">
            {/* Country */}
            <div className="flex flex-col space-y-4">
              <label htmlFor="">Country of your Primary Residence</label>
              <Select
                onChange={handleInputChange}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                sx={{
                  width: 700,
                  maxWidth: '100%',
                }}
                name="Country"
                value={Country}
              >
                {countries.map(({ name: { common } }, i) => {
                  return (
                    <MenuItem key={i} value={common}>
                      {common}
                    </MenuItem>
                  );
                })}
              </Select>
            </div>
            {/* You are a */}
            <div className="flex flex-col space-y-4">
              <label htmlFor="">You are a.</label>
              <Select
                onChange={handleInputChange}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                sx={{
                  width: 700,
                  maxWidth: '100%',
                }}
                name="Person"
                value={Person}
              >
                {Customer.map((cus, ind) => {
                  return (
                    <MenuItem key={ind} value={cus}>
                      {cus}
                    </MenuItem>
                  );
                })}
              </Select>
            </div>
            {/* paintings */}
            <div className="flex flex-col space-y-4">
              <label htmlFor="">Preferred Painting Style</label>
              <Select
                onChange={handleInputChange}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                sx={{
                  width: 700,
                  maxWidth: '100%',
                }}
                name="Paintings"
                value={Paintings}
              >
                {Styles.map((sty, ind) => {
                  return (
                    <MenuItem key={ind} value={sty}>
                      {sty}
                    </MenuItem>
                  );
                })}
              </Select>
            </div>
            {/* Sponsered by */}
            <div className="flex flex-col space-y-4">
              <label className="">Sponsored by</label>
              <TextField
                sx={{
                  width: 700,
                  maxWidth: '100%',
                }}
                id="outlined-basic"
                label="Enter Here"
                variant="outlined"
                name="Sponsered"
                value={Sponsered}
                onChange={handleInputChange}
              />
            </div>
            {/* Name  */}
            <div className="flex flex-col space-y-4">
              <label className="">Name</label>
              <TextField
                sx={{
                  width: 700,
                  maxWidth: '100%',
                }}
                id="outlined-basic"
                label="Enter Here"
                variant="outlined"
                name="Name"
                value={Name}
                onChange={handleInputChange}
              />
            </div>
            {/* Email  */}
            <div className="flex flex-col space-y-4">
              <label className="">Email</label>
              <TextField
                sx={{
                  width: 700,
                  maxWidth: '100%',
                }}
                id="outlined-basic"
                label="Enter Here"
                variant="outlined"
                name="Email"
                value={Email}
                onChange={handleInputChange}
              />
            </div>
            {/* Contact Number  */}
            <div className="flex flex-col space-y-4">
              <label className="">Contact Number</label>
              <TextField
                sx={{
                  width: 700,
                  maxWidth: '100%',
                }}
                id="outlined-basic"
                label="Enter Here"
                variant="outlined"
                name="Contact"
                value={Contact}
                onChange={handleInputChange}
              />
            </div>

            {/* Address */}
            <div className="flex flex-col space-y-4">
              <label className="">Postal Address </label>
              <TextField
                id="standard-multiline-flexible"
                label="Address"
                multiline
                maxRows={4}
                variant="standard"
                sx={{ width: 700, maxWidth: '100%' }}
                value={Address}
                name="Address"
                onChange={handleInputChange}
              />
            </div>
            {/* Preference */}
            <div className="flex flex-col space-y-4">
              <label htmlFor="">You Preference</label>
              <Select
                onChange={handleInputChange}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                sx={{
                  width: 700,
                  maxWidth: '100%',
                }}
                name="Preference"
                value={Preference}
              >
                {Preferences.map((cus, ind) => {
                  return (
                    <MenuItem key={ind} value={cus}>
                      {cus}
                    </MenuItem>
                  );
                })}
              </Select>
            </div>
            {/* Idea */}
            <div className="flex flex-col space-y-4">
              <label htmlFor="">
                If you want to give your idea about the painting, to the Artist
                (optional)
              </label>
              <TextField
                id="standard-multiline-flexible"
                label="Enter here"
                multiline
                maxRows={4}
                variant="standard"
                sx={{ width: 700, maxWidth: '100%' }}
                value={Idea}
                name="Idea"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="w-4/6 text-center lg:w-1/2 mt-20 ">
          <img src={circle} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Venturist;
