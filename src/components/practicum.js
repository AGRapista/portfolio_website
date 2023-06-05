import React from 'react';

const Practicum = () => {
    const docs_url = "https://docs.google.com/document/d/1m2G4qZfyfuGhbhVnM7woTDWhkazuKVMlre5NXKd7csE/preview"

    return (
        <div className="col-8 about-page">
            <iframe src={docs_url} width="100%" height="800px"></iframe>
        </div>
    );
}

export default Practicum