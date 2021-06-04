import React from 'react';
import lime from './assets/lime.svg';
import './App.css';
import ImageProvider from './components/ImageProvider';
import ImageSet from './components/ImageSet';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

const App: React.FC = () => {
  return (
    <ImageProvider>
      <div className="w-screen h-screen">
        <div className="bg-lime md:h-24 shadow-2xl items-center flex">
          <div className="w-max flex ml-10">
            <img src={lime} alt="lime" className="w-12 mr-3" />
            <h1 className="text-4xl font-bold text-gray-700 mt-1">LimeCRM</h1>
          </div>
        </div>
        <ImageSet />
      </div>
    </ImageProvider>
  );
}

export default App;
