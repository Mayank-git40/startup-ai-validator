import React from 'react';

interface ResultProps {
    summary: string;
    strengths: string[];
    weaknesses: string[];
    targetAudience: string[];
    revenueIdeas: string[];
    improvementSuggestions: string[];
}

const Results: React.FC<ResultProps> = ({
    summary,
    strengths,
    weaknesses,
    targetAudience,
    revenueIdeas,
    improvementSuggestions,
}) => {
    return (
        <div className="results-card">
            <h2>Analysis Results</h2>
            <p><strong>Summary:</strong> {summary}</p>
            <div>
                <h3>Strengths</h3>
                <ul>
                    {strengths.map((strength, index) => (
                        <li key={index}>{strength}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Weaknesses</h3>
                <ul>
                    {weaknesses.map((weakness, index) => (
                        <li key={index}>{weakness}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Target Audience</h3>
                <ul>
                    {targetAudience.map((audience, index) => (
                        <li key={index}>{audience}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Revenue Ideas</h3>
                <ul>
                    {revenueIdeas.map((idea, index) => (
                        <li key={index}>{idea}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Improvement Suggestions</h3>
                <ul>
                    {improvementSuggestions.map((suggestion, index) => (
                        <li key={index}>{suggestion}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Results;