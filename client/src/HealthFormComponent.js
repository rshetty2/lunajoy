import React, { useState } from 'react';
import axios from 'axios';

const HealthFormComponent = () => {
    const [formData, setFormData] = useState({
      patient_id: '',
      record_Date: '',
      mood_level: '',
      anxiety_level: '',
      sleep_hours: '',
      sleep_quality: '',
      sleep_disturbance: '',
      activity_type: '',
      activity_duration: '',
      social_frequency: '',
      stress_level: '',
      symptom_type: '',
      symptom_level: ''
    });


      // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to the REST API
      const response = await axios.post('http://127.0.0.1:4001/api/health', formData);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (

    <div style={{
      display: 'flex',
      justifyContent: 'left',
      alignItems: 'align',
      marginLeft: 20,
      height: '100vh'
  }}>
   
    <br/>
    <br/>
    <br/>
    <div>
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: 'auto' }}>
      
      <label>Patient ID (1-3):</label><input
        type="text"
        name="patient_id"
        value={formData.patient_id}
        onChange={handleChange}
        style={{ margin: '8px 0' }}
      />

      <label>Record Date:</label>
      <input
        type="date"
        defaultValue={Date.now}
        name="record_Date"
        value={formData.record_Date}
        onChange={handleChange}
        style={{ margin: '8px 0' }}
      />

      <label>Mood level (1-10):</label>
      <input
        type="text"
        name="mood_level"
        value={formData.mood_level}
        onChange={handleChange}
        style={{ margin: '8px 0' }}
      />
      <label>Anxiety level (1-10):</label>
      <input
        type="text"
        name="anxiety_level"
        value={formData.anxiety_level}
        onChange={handleChange}
        style={{ margin: '8px 0' }}
      />
       <label>Sleep duration (In Hours):</label>
      <input
        type="text"
        name="sleep_hours"
        value={formData.sleep_hours}
        onChange={handleChange}
        style={{ margin: '8px 0' }}
      />
      <label>Sleep Quality (1-10):</label>
      <input
        type="text"
        name="sleep_quality"
        value={formData.sleep_quality}
        onChange={handleChange}
        style={{ margin: '8px 0' }}
      />

      <label>Sleep Disturbance (Y or N):</label>
      <input
        type="text"
        name="sleep_disturbance"
        value={formData.sleep_disturbance}
        onChange={handleChange}
        style={{ margin: '8px 0' }}
      />

       <label>Activity Type (Run, Swim etc):</label>
      <input
        type="text"
        name="activity_type"
        value={formData.activity_type}
        onChange={handleChange}
        style={{ margin: '8px 0' }}
      />

      <label>Activity duration (In Hours):</label>
      <input
        type="text"
        name="activity_duration"
        value={formData.activity_duration}
        onChange={handleChange}
        style={{ margin: '8px 0' }}
      />

      <label>Social frequency (Times):</label>
       <input
        type="text"
        name="social_frequency"
        value={formData.social_frequency}
        onChange={handleChange}
        style={{ margin: '8px 0' }}
      />

      <label>Stress Level (1-10):</label>
      <input
        type="text"
        name="stress_level"
        value={formData.stress_level}
        onChange={handleChange}
        style={{ margin: '8px 0' }}
      />

      <label>Symptom Type (Headache, Backache etc):</label>
      <input
        type="text"
        name="symptom_type"
        value={formData.symptom_type}
        onChange={handleChange}
        style={{ margin: '8px 0' }}
      />

      <label>Symptom Level(1-10) :</label>
      <input
        type="text"
        name="symptom_level"
        value={formData.symptom_level}
        onChange={handleChange}
        style={{ margin: '8px 0' }}
      />
      {/* Submit button and other inputs */}
      <button type="submit" style={{ margin: '8px 0', padding: '10px' }}>
        Submit
      </button>
    </form>
    </div>
    </div>
  );
};


export default HealthFormComponent;