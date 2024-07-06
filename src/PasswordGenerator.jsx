import React, { useState } from 'react';
import "./App.css"
const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const numbers = '0123456789';
    const specialChars = '@#$&*';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let allChars = '';
    if (includeNumbers) allChars += numbers;
    if (includeSpecialChars) allChars += specialChars;
    if (includeLowercase) allChars += lowercase;
    if (includeUppercase) allChars += uppercase;

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      generatedPassword += allChars[randomIndex];
    }

    setPassword(generatedPassword);
  };

  return (
    <div>
      <h1>Password Generator</h1>
      <div>
        <label>
          Length:
          <input
            type="number"
            min="1"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
          Include Numbers
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={includeSpecialChars}
            onChange={(e) => setIncludeSpecialChars(e.target.checked)}
          />
          Include Special Characters
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={includeLowercase}
            onChange={(e) => setIncludeLowercase(e.target.checked)}
          />
          Include Lowercase Letters
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={(e) => setIncludeUppercase(e.target.checked)}
          />
          Include Uppercase Letters
        </label>
      </div>
      <button onClick={generatePassword}>Generate Password</button>
      {password && (
        <div>
          <h3>Your Generated Password:</h3>
          <p>{password}</p>
        </div>
      )}
    </div>
  );
};

export default PasswordGenerator;
