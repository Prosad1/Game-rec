'use client'
import Image from "next/image";
import { useState } from 'react';
import {} from '@mui/material';
import axios from 'axios';
import httpProxy from 'http-proxy-middleware';

export default function Home() {
  const apiKey = process.env.STEAM_API_KEY;

  const appId = 730;
  const url = `https://store.steampowered.com/api/appdetails?appids=${appId}&key=${apiKey}&format=json`;

  axios.get(url)
  .then(response => {
    // Process the response
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error fetching data from API:', error);
  });
  
}