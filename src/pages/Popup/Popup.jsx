import React, { useState, useEffect } from 'react';
import './Popup.css';

const STORAGE_KEY = 'apiKey';

const Popup = () => {
  const [apiKey, setApiKey] = useState('');
  const [hasKeySaved, setHasKeySaved] = useState(false);
  const [saved, setSaved] = useState(false);
  const [status, setStatus] = useState('');

  useEffect(() => {
    chrome.storage.local.get(STORAGE_KEY, (result) => {
      setHasKeySaved(!!result[STORAGE_KEY]);
    });
  }, []);

  const handleSave = () => {
    const key = apiKey.trim();
    if (!key) {
      setStatus('Please enter your API key');
      return;
    }
    chrome.storage.local.set({ [STORAGE_KEY]: key }, () => {
      setSaved(true);
      setHasKeySaved(true);
      setApiKey('');
      setStatus('API key saved');
      setTimeout(() => {
        setSaved(false);
        setStatus('');
      }, 2000);
    });
  };

  const handleDelete = () => {
    chrome.storage.local.remove(STORAGE_KEY, () => {
      setHasKeySaved(false);
      setApiKey('');
      setStatus('API key deleted');
      setSaved(true);
      setTimeout(() => {
        setStatus('');
        setSaved(false);
      }, 2000);
    });
  };

  return (
    <div className="popup">
      <div className="popup-header">
        <h1 className="popup-title">AI Summary</h1>
        <p className="popup-subtitle">Summarize any webpage with Gemini</p>
      </div>

      <div className="popup-body">
        <label htmlFor="api-key" className="popup-label">
          Gemini API Key
        </label>
        <input
          id="api-key"
          type="password"
          className="popup-input"
          placeholder={hasKeySaved ? 'Enter new key to replace' : 'Enter your API key'}
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          autoComplete="new-password"
        />
        {hasKeySaved && !apiKey && (
          <p className="popup-configured">API key is configured</p>
        )}
        <p className="popup-hint">
          Get your API key from{' '}
          <a
            href="https://aistudio.google.com/apikey"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google AI Studio
          </a>
        </p>

        <div className="popup-buttons">
          <button
            className={`popup-save-btn ${saved ? 'popup-save-btn--saved' : ''}`}
            onClick={handleSave}
          >
            {saved ? 'Saved!' : 'Save API Key'}
          </button>
          {hasKeySaved && (
            <button
              className="popup-delete-btn"
              onClick={handleDelete}
            >
              Delete API Key
            </button>
          )}
        </div>

        {status && (
          <p className={`popup-status ${saved ? 'popup-status--success' : ''}`}>
            {status}
          </p>
        )}
      </div>
    </div>
  );
};

export default Popup;
