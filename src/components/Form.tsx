import React, { useState } from 'react';

const Form: React.FC = () => {
    const [idea, setIdea] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setIdea(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('/api/analyze', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ idea }),
            });

            const data = await response.json();
            // Handle the response data as needed
        } catch (error) {
            console.error('Error analyzing startup idea:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={idea}
                onChange={handleChange}
                placeholder="Enter your startup idea here..."
                rows={10}
                required
            />
            <button type="submit" disabled={loading}>
                {loading ? 'Analyzing...' : 'Analyze'}
            </button>
        </form>
    );
};

export default Form;