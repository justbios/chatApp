
import React from 'react';
import RootNavigation from './src/navigation';


/*
TODO:
ARHITECTURE:
1. Create navigation (DONE)
1.1 Auth navigation (DONE)
1.2 App navigation (DONE)
1.3 tab navigation
2. connect firebase 
2.1 firebase auth (DONE)

AUTH:
1. Create Sing in Screen (DONE)
1.1 add sing in (DONE)


DASBOARD: 
1. Add Dashboard screen
1.1 search bar
1.2 stories
1.3  chat list

CHAT:
1. messages
2. input fields
3. user info

*/


const App = () => {
	return (
		<RootNavigation />
	);
};

export default App;
