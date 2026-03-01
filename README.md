<img src="src/assets/img/icon-128.png" width="64"/>

# AI Summary Chrome Extension

A Chrome extension that uses Google's Gemini AI to summarize any webpage. Click the floating AI button on any page to get a concise, readable summary.

## Features

- **One-click summarization** — Extract and summarize page content with a single click
- **Floating AI button** — Always visible in the bottom-left corner on any webpage
- **Modal display** — Summary appears in a centered modal with blurred backdrop
- **Secure API key storage** — Your Gemini API key is stored locally and never displayed after saving

## Tech Stack

- **AI Model:** Google Gemini (`gemini-2.5-flash-lite`) via [@google/genai](https://www.npmjs.com/package/@google/genai)
- **Frontend:** React 18, Webpack 5
- **Extension:** Chrome Manifest V3

## Getting Started

### Prerequisites

- Node.js 18 or later

### Install & Build

#### Clone the repository

```bash
git clone <repository-url>
cd ai-summary-chrome-extension
```

#### Install dependencies

```bash
npm install
```

#### Build the extension

```bash
npm run build
```

### Load in Chrome

1. Open `chrome://extensions/`
2. Enable **Developer mode** (top right)
3. Click **Load unpacked**
4. Select the `build` folder from this project

### Usage

1. **Add your API key** — Click the extension icon to open the popup. Enter your [Gemini API key](https://aistudio.google.com/apikey) (from Google AI Studio) and click **Save API Key**. The key is stored locally and treated as a password.
2. **Summarize a page** — Visit any webpage and click the purple AI button in the bottom-left corner. The extension extracts the page text, sends it to Gemini, and displays a two-paragraph summary in a modal.
3. **Close the modal** — Click outside the modal or the × button to close.

### Managing Your API Key

- **Replace:** Enter a new key and click **Save API Key**
- **Delete:** Click **Delete API Key** to remove it from storage

### Disable AI Summary Chrome Extension

You can disable/enable the feature in the extension popup.
