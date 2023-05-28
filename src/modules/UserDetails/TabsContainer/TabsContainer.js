import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./TabsContainerStyles.css";
import UserTodos from "../UserTodos/UserTodos";
import UserPosts from "../UserPosts/UserPosts";
import UserAlbums from "../UserAlbums/UserAlbums"

function TabsContainer() {
  return (
    <Tabs className="tabs">
      <TabList className="tabs__list">
        <Tab className="tab">TODOS</Tab>
        <Tab className="tab">POSTS</Tab>
        <Tab className="tab">ALBUMS</Tab>
      </TabList>

      <TabPanel>
        <hr />
        <UserTodos />
      </TabPanel>
      <TabPanel>
        <hr />
        <UserPosts />
      </TabPanel>
      <TabPanel>
        <hr />
        <UserAlbums />
      </TabPanel>
    </Tabs>
  );
}

export default TabsContainer;
