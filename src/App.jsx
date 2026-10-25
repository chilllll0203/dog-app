import { useState, useEffect } from 'react';
import './App.css';
import CardDog from './CardDog';
import axios from 'axios';
import { Box,Button, List, ListItem } from '@mui/material';

function App() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDogsData() {
      try {
        const requests = Array.from({ length: 12 }, () => 
          axios.get('https://dog.ceo/api/breeds/image/random')
        );
        
        const responses = await Promise.all(requests);
        
        const dogsList = responses.map((response, index) => ({
          id: index + 1,
          name: `Dog ${index + 1}`,
          link: response.data.message, 
          breed: "Unknown",
          age: Math.floor(Math.random() * 10) + 1
        }));

        setDogs(dogsList);
      } catch (error) {
        console.error('Ошибка при загрузке собак:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchDogsData();
  }, []);

  if (loading) {
    return <div>Загрузка собак...</div>;
  }

  return (
    <>
      <Box component="nav" sx={{ display: 'flex', gap: '15px', backgroundColor: '#2b2b2b'}}>
        <Button variant="text" onClick={() => console.log('На Главную')} sx={{color:' #e8e8e8'}}>Главная</Button>
        <Button variant="text" onClick={() => console.log('К собакам')} sx={{color:' #e8e8e8'}}>Наши питомцы</Button>
        <Button variant="text" onClick={() => console.log('В контакты')} sx={{color:' #e8e8e8'}}>Контакты</Button>
      </Box>
      <List sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        padding: '20px'
      }}>
        {dogs.map((dog) => (
          <ListItem key={dog.id} sx={{ display: 'block', padding: 0 }}>
            <CardDog
              link_dog={dog.link}
              name={dog.name}
              bread={dog.breed}
              age={dog.age}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default App;






