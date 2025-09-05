import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button } from '@mui/material';
import './App.css';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from 'axios';

function App() {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8080/api/email/generate", 
        {
        emailContent,
        tone
      },
  { headers: { "Content-Type": "application/json" } }
  
    );

      setGeneratedReply(
        typeof response.data === 'string'
          ? response.data
          : JSON.stringify(response.data)
      );
    } catch (error) {
      console.error("Error generating reply:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Email Reply Generator
      </Typography>

      <Box sx={{ mx: 3 }}>
        <TextField
          fullWidth
          multiline
          rows={6}
          variant="outlined"
          label="Original Email Content"
          value={emailContent}
          onChange={(e) => setEmailContent(e.target.value)}
          sx={{ mb: 3 }}
        />

        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel>Tone (Optional)</InputLabel>
          <Select
            value={tone}
            onChange={(e) => setTone(e.target.value)}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="Professional">Professional</MenuItem>
            <MenuItem value="Casual">Casual</MenuItem>
            <MenuItem value="Friendly">Friendly</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="contained"
          sx={{ mb: 3 }}
          onClick={handleSubmit}
          disabled={!emailContent || loading}
        >
          {loading ? 'Generating...' : 'Generate Reply'}
        </Button>
      </Box>

      <Box sx={{ mx: 3 }}>
        <TextField
          fullWidth
          multiline
          rows={6}
          variant="outlined"
          value={generatedReply}
          inputProps={{ readOnly: true }}
          sx={{ mb: 3 }}
        />

        <Button
          variant="outlined"
          onClick={() => navigator.clipboard.writeText(generatedReply)}
        >
          Copy to Clipboard
        </Button>
      </Box>
    </Container>
  );
}

export default App;
