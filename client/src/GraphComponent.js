import React, { useEffect,useState } from 'react';
import io from 'socket.io-client';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import axios from 'axios';



const WebSocketComponent = () => {

  const [clientId, setClientId] = useState('');
  const [updates, setUpdates] = useState([]);
  const [socket, setSocket] =  useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    console.log('ENTERING useEffect');

    const fetchData = async () => {
      try {
        // Make the GET request
        const allHealth = await axios.get('http://127.0.0.1:4001/api/health/all');
        // Update state with the response data
        setUpdates(allHealth.data);
      } catch (error) {
        // Handle any errors
        console.log('Error');
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    // Call the fetch function
    fetchData();

    const socketIo = io('ws://127.0.0.1:8080',{query: {client:1}});
  
    socketIo.open = () => {     
            console.log('INSIDE OPEN METHOD');
    } 


    // Handle updates from server
    socketIo.on('message', (msg) => {
      setUpdates(prevUpdates => [...prevUpdates, msg.data]);
    });

    return () => {
      socketIo.off();
    };
  },[]);
  
  
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'align',
      marginLeft: 20,
      height: '100vh'
  }}>
     {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {updates && (
      <div>

      <BarChart width={600} height={300} data={updates} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="record_Date" label="Date" tick={{ fontSize: '10px', width: '50px', wordWrap: 'break-word' }} />
      <YAxis label="Level"/>
      <Tooltip />
      <Legend />
      <Bar dataKey="anxiety_level" fill="#8884d8" />
      <Bar dataKey="mood_level" fill="#82ca9d" />
      <Bar dataKey="social_frequency" fill="#ffca9e" /> 
    </BarChart>

      </div>
    )}
    </div>
  );
};


export default WebSocketComponent;