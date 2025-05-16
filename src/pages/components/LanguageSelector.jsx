import React from 'react';

const LanguageSelect = ({ value, onChange }) => {
  return (
    <div style={{ textAlign: 'center', marginBottom: '1rem',marginTop:'0.5rem' }}>
      <label htmlFor="language-select" style={{ marginRight: '0.5rem', fontWeight: '600' }}>
        Language:
      </label>
      <select
        id="language-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          padding: '0.4rem 0.8rem',
          fontSize: '1rem',
          borderRadius: '4px',
          border: '1px solid #ccc',
          cursor: 'pointer',
        }}
      >
        <option value="en">English</option>
        <option value="ko">한국어</option>
      </select>
    </div>
  );
};

export default LanguageSelect;
