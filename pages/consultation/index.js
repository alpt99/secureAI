import React, { useState } from 'react';
import Layout from '../../components/layout';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      setMessages([...messages, inputValue]);
      setInputValue('');
    }
  };

  return (
    <Layout>
        <div className='flex flex-row h-screen'>
            <div className=' w-3/4 h-5/6 m-4 flex flex-col'>
                <div className='text-center'>GPT-4</div>
                <div className="flex-grow bg-gray-200 p-4">
                    {messages.map((message, index) => (
                    <div key={index} className="mb-2">
                        {message}
                    </div>
                    ))}
                </div>
                <div className="bg-white p-4">
                    <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Type your message..."
                    className="border border-gray-300 rounded p-2 w-full"
                    />
                    <button
                    onClick={handleSendMessage}
                    className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                    >
                    Send
                    </button>
                </div>
                </div>
            <div className=' w-1/4 h-5/6 m-4 flex flex-col'>
                <div className='text-center'>Confidential Words</div>
                <div className="flex-grow bg-gray-200 p-4">
                    {messages.map((message, index) => (
                    <div key={index} className="mb-2">
                        {message}
                    </div>
                    ))}
                </div>
                <div className="bg-white p-4">
                    <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Type your message..."
                    className="border border-gray-300 rounded p-2 w-full"
                    />
                    <button
                    onClick={handleSendMessage}
                    className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                    >
                    Send
                    </button>
                    <button className="btn btn-primary text-white">Button</button>
                </div>
            </div>
        </div>
    </Layout>
  );
};

export default ChatInterface;
