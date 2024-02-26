import React, { useState } from 'react';
import { Flex, Text, Box, HoverCard, Inset, Grid, Button, Portal, Card } from '@radix-ui/themes';

const Onleaves = () => {
  // Custom data for 9 people with unique images
  const allPeopleOnLeave = [
    {
      id: 1,
      name: 'Saloni Sousa',
      email: 'saloni@example.com',
      reason: 'Vacation',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
      id: 2,
      name: 'Karan Kumar',
      email: 'karan@example.com',
      reason: 'Personal Leave',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
      id: 3,
      name: 'Saniya Mulani',
      email: 'saniya@example.com',
      reason: 'Sick Leave',
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
    {
      id: 4,
      name: 'Nita Jain',
      email: 'nita@example.com',
      reason: 'Family Emergency',
      image: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
      id: 5,
      name: 'Soham Patil',
      email: 'soham@example.com',
      reason: 'Conference',
      image: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      id: 6,
      name: 'Daksh Swami',
      email: 'daksh@example.com',
      reason: 'Maternity Leave',
      image: 'https://randomuser.me/api/portraits/men/6.jpg',
    },
    {
      id: 7,
      name: 'Aisha Gupta',
      email: 'aisha@example.com',
      reason: 'Bereavement Leave',
      image: 'https://randomuser.me/api/portraits/women/7.jpg',
    },
    {
      id: 8,
      name: 'Rahul Mehta',
      email: 'rahul@example.com',
      reason: 'Training',
      image: 'https://randomuser.me/api/portraits/men/8.jpg',
    },
    {
      id: 9,
      name: 'John Doe',
      email: 'john@example.com',
      reason: 'Medical Leave',
      image: 'https://randomuser.me/api/portraits/men/9.jpg',
    },
    {
      id: 10,
      name: 'Soham Patil',
      email: 'soham@example.com',
      reason: 'Conference',
      image: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    
  ];

  const [peopleOnLeave, setPeopleOnLeave] = useState(allPeopleOnLeave.slice(0, 4)); // Initial display of 4 people
  const [displayedInPopup, setDisplayedInPopup] = useState([]); // Track displayed in popup

  const handleShowAll = () => {
    setDisplayedInPopup(allPeopleOnLeave);
  };

  const handlePopupShow = () => {
    const notDisplayedInPopup = allPeopleOnLeave.filter(
      (person) => !displayedInPopup.some((displayed) => displayed.id === person.id)
    );
    setPeopleOnLeave(notDisplayedInPopup.slice(0, 4)); // Show 4 not displayed in popup
  };

  const handleClose = () => {
    setDisplayedInPopup([]);
  };

  const handlePopupClick = (e) => {
    e.stopPropagation(); // Prevent closing of main content
    handleClose();
  };

  return (
    <Box p="3" mt="8" ml="4" 
      style={{
        width: '50.125rem',
        height: '17.188rem',
        borderColor: 'black',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: '8px',
      }}
    >
      <Grid columns="0.5fr 0.5fr">
        <Text as="div" size="6" weight="bold">
          On Leave
        </Text>
        <Text align="right" size="5" color="lime">
          {displayedInPopup.length !== allPeopleOnLeave.length && (
            <Button size="20" style={{ backgroundColor: 'white', color: 'limegreen' }} onClick={handleShowAll}>
              Show All
            </Button>
          )}
        </Text>
      </Grid>
      <Flex direction="row" gap="7" ml="9" mr="2" mt="6">
        {peopleOnLeave.map((person) => (
          <Inset clip="padding-box" side="top" pb="current" key={person.id}>
            <HoverCard.Root>
              <HoverCard.Trigger>
                <Flex direction="column" borderColor="white" align="center" gap="3">
                  <Box>
                    <img src={person.image} alt={person.name} className="rounded-2xl" />
                  </Box>
                  <Text weight="bold" size="3">
                    {person.name}
                  </Text>
                </Flex>
              </HoverCard.Trigger>
              <HoverCard.Content sideOffset={10} alignOffset={10}>
                <Flex direction="column" gap="3">
                  <Text weight="bold" size="2">{person.name}</Text>
                  <Text size="1">{person.email}</Text>
                  <Text size="1" style={{ fontStyle: 'italic' }}>{person.reason}</Text>
                </Flex>
              </HoverCard.Content>
            </HoverCard.Root>
          </Inset>
        ))}
      </Flex>
      {displayedInPopup.length !== 0 && (
        <Portal>
          <Box
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: '999',
            }}
            onClick={handleClose}
          >
            <Card
              style={{
                width: '70%',
                maxWidth: '600px',
                backgroundColor: 'white',
                borderRadius: '10px',
                padding: '20px',
                maxHeight: '80vh',
                overflowY: 'auto',
                position: 'relative', 
              }}
              onClick={handlePopupClick} 
            >
              <Text weight="bold" size="4" mt="3">Remaining on Leave</Text>
              <Flex direction="column" gap="5" padding="20px" style={{ backgroundColor: 'white', borderRadius: '15px' }}>
                {displayedInPopup.map((person) => (
                  !peopleOnLeave.some((displayed) => displayed.id === person.id) && (
                    <Flex key={person.id} align="center" gap="3" style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>
                      <Box>
                        <img src={person.image} alt={person.name} className="rounded-2xl" style={{ width: '70px', height: '70px', margin: '20px' }} />
                      </Box>
                      <Flex direction="column" gap="2">
                        <Text weight="bold" size="2">{person.name}</Text>
                        <Text size="1" style={{ marginBottom: '5px' }}>{person.email}</Text>
                        <Text size="1" style={{ fontStyle: 'italic' }}>{person.reason}</Text>
                      </Flex>
                    </Flex>
                  )
                ))}
              </Flex>
            </Card>
          </Box>
        </Portal>
      )}
    </Box>
  );
};

export default Onleaves;
