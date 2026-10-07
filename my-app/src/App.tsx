import './App.css';
import { Counter, Posts, Search } from './lessons/lesson39';
import { User } from './components/User/User';
import { TabValue, type TabItem } from './components/Tabs/types';
import { Tabs } from './components/Tabs/Tabs';
import { useState } from 'react';

const tabs: TabItem[] = [
  { value: TabValue.All, label: 'All' },
  { value: TabValue.Favorites, label: 'Favorites' },
  { value: TabValue.Popular, label: 'Popular' },
];

const PostsPage = () => {
  const [activeTab, setActiveTab] = useState(TabValue.All);

  return (
    <>
      <Tabs items={tabs} activeTab={activeTab} onChange={setActiveTab} />
      <Posts />
    </>
  );
};
function App() {
  return (
    <>
      <header className="header">
        <User username="Artem Malkin" />
      </header>
      <main className="main">
        <Counter />
        <Search />
        <PostsPage />
      </main>
      <footer className="footer">footer</footer>
    </>
  );
}

export default App;
