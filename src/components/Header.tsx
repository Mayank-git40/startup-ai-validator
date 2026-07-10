import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-blue-600 text-white p-4">
            <h1 className="text-2xl font-bold">Startup Validator AI</h1>
            <p className="mt-2">Analyze your startup ideas with AI-powered insights.</p>
        </header>
    );
};

export default Header;