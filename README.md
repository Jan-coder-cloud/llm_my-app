# College Study Resource Guide Chatbot

An AI-powered chatbot built with Next.js and Google Gemini that helps students find trusted study resources, reference materials, and learning platforms for various computer science subjects.

## Features

- 🤖 **AI-Powered Recommendations**: Uses Google Gemini 2.5 Flash for intelligent study resource suggestions
- 📚 **Comprehensive Coverage**: Provides guidance for Programming, DSA, OS, DBMS, Networks, and more
- 💬 **Real-time Chat Interface**: Smooth, responsive chat experience with streaming responses
- 🎯 **Curated Resources**: Only recommends verified, well-known free study platforms
- 📖 **Markdown Support**: Rich text formatting in chat messages
- 🛠️ **Tool Calling**: Extensible architecture with support for custom tools (weather example included)

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **AI SDK**: [Vercel AI SDK](https://sdk.vercel.ai/) v6
- **LLM Provider**: Google Gemini 2.5 Flash
- **Styling**: Tailwind CSS v4
- **UI Components**: Custom React components
- **Markdown**: [@uiw/react-markdown-preview](https://github.com/uiwjs/react-markdown-preview)
- **Schema Validation**: Zod

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Google AI API key (Get it from [Google AI Studio](https://makersuite.google.com/app/apikey))

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Jan-coder-cloud/llm_my-app.git
cd my-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```env
GOOGLE_GENERATIVE_AI_API_KEY=your_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
my-app/
├── app/
│   ├── api/
│   │   └── chat/
│   │       ├── route.ts       # API endpoint for chat
│   │       └── tools.ts       # Tool definitions for AI
│   ├── components/
│   │   ├── ChatInput.tsx      # Message input component
│   │   ├── ChatMessage.tsx    # Individual message display
│   │   └── MessageList.tsx    # Message list container
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Main chat page
├── public/                    # Static assets
├── next.config.ts             # Next.js configuration
├── tailwind.config.ts         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies
```

## How It Works

1. **User Input**: Students type questions about study resources
2. **AI Processing**: Google Gemini analyzes the query
3. **Guided Responses**: The chatbot provides:
   - Trusted free resources (GeeksforGeeks, LeetCode, etc.)
   - Standard reference books (CLRS, Galvin OS, etc.)
   - YouTube channels for learning
   - Time management and study planning advice
4. **Streaming Response**: Answers are streamed in real-time for better UX

## Recommended Resources

The chatbot suggests resources from trusted platforms including:

- **Coding Practice**: LeetCode, CodeChef, Codeforces, HackerRank
- **Learning Platforms**: GeeksforGeeks, W3Schools, IndiaBix
- **YouTube Channels**: Neso Academy, Gate Smashers, Abdul Bari, Kunal Kushwaha, Telusko, Corey Schafer
- **Reference Books**: CLRS (Algorithms), Galvin OS, Korth DBMS, Kurose & Ross (Networks)

## Tool Calling (Optional)

The app includes support for AI tool calling. To enable:

1. Uncomment the following lines in `app/api/chat/route.ts`:
```typescript
tools,            // Enable tool calling
maxSteps: 5,      // Allow multi-step tool use
```

2. Add custom tools in `app/api/chat/tools.ts`

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GOOGLE_GENERATIVE_AI_API_KEY` | Google AI API key | Yes |

## Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## License

This project is private and for educational purposes.

## Acknowledgments

- Built with [Vercel AI SDK](https://sdk.vercel.ai/)
- Powered by Google Gemini
- UI inspired by modern chat interfaces

---

**Note**: This chatbot is designed for academic guidance only and prioritizes free, verified learning resources.