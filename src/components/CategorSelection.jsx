import React from 'react';

const CategorSelection = ({ onSelectCategory, activeCategory }) => {
    const categories = ["Startups", "Security", "AI", "Apps", "Tech"];

    return (
        <div>
            <button>All</button>
            {
                categories.map((category) => (
                    <button key={category}>{category}</button>
                ))
            }
        </div>
    );
};

export default CategorSelection;
