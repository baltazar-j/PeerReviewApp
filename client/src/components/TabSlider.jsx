import React from 'react';
import { useTheme } from '@mui/system';
import { Tabs } from '@mui/base/Tabs';
import { TabsList } from '@mui/base/TabsList';
import { TabPanel } from '@mui/base/TabPanel';
import { buttonClasses } from '@mui/base/Button';
import { Tab, tabClasses } from '@mui/base/Tab';
import MyPosts from './MyPosts.jsx';

export default function UnstyledTabsCustomized() {
  return (
    <React.Fragment>
      <Tabs defaultValue={1}>
        <TabsList className="CustomTabsList">
          <Tab className="CustomTab" value={1}>
            My Posts
          </Tab>
          <Tab className="CustomTab" value={2}>
            Friends
          </Tab>
        </TabsList>
        <TabPanel className="CustomTabPanel" value={1}>
            <MyPosts />
        </TabPanel>
        <TabPanel className="CustomTabPanel" value={2}>
            Second page {/* Component here */}
        </TabPanel>
      </Tabs>
      <Styles />
    </React.Fragment>
  );
}

function useIsDarkMode() {
  const theme = useTheme();
  return theme.palette.mode === 'dark';
}

function Styles() {
    // Replace this with your app logic for determining dark mode
    const isDarkMode = useIsDarkMode();
    return (
        <style>
        {`
        .CustomTabsList {
          min-width: 400px;
          background-color: var(--background-color);
          border-radius: 12px;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          align-content: space-between;
          box-shadow: 0px 4px 6px ${
            isDarkMode ? 'rgba(0,0,0, 0.4)' : 'rgba(0,0,0, 0.2)'
          };
        }
  
        .CustomTab {
          font-family: 'IBM Plex Sans', sans-serif;
          color: var(--text-color);
          cursor: pointer;
          font-size: 0.875rem;
          font-weight: bold;
          background-color: transparent;
          width: 100%;
          line-height: 1.5;
          padding: 8px 12px;
          margin: 6px;
          border: none;
          border-radius: 8px;
          display: flex;
          justify-content: center;
        }
  
        .CustomTab:hover {
          background-color: var(--dark-grey-accent);
        }
  
        .CustomTab:focus {
          color: var(--text-color);
          outline: 3px solid var(--button-color);
        }
  
        .CustomTab.${tabClasses.selected} {
          background-color: var(--button-color);
          color: var(--text-color);
        }
  
        .CustomTab.${buttonClasses.disabled} {
          opacity: 0.5;
          cursor: not-allowed;
        }
  
        .CustomTabPanel {
          width: 100%;
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 0.875rem;
          color: var(--text-color);
          background-color: var(--background-color);
          padding: 16px;
          border-radius: 8px;
        }
        `}
      </style>
    );
}
