'use client';

import { useEffect, useRef } from 'react';
import type { UIMessage } from 'ai';
import ChatMessage from './ChatMessage';

export default function MessageList({ messages }: { messages: UIMessage[] }) {
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (messages.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center max-w-md space-y-6">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-xl">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
              Welcome to Study Resource Guide!
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Ask me about programming languages, DSA, OS, DBMS, Networks, competitive coding platforms, or any study resources you need.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {['Python tutorials', 'DSA resources', 'DBMS books', 'OS concepts'].map((suggestion, i) => (
              <div
                key={i}
                className="px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs font-medium text-zinc-700 dark:text-zinc-300 border border-zinc-200/50 dark:border-zinc-700/50"
              >
                {suggestion}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
      <div className="max-w-3xl mx-auto space-y-6">
        {messages.map(m => (
          <ChatMessage key={m.id} message={m} />
        ))}
      </div>
      <div ref={endRef} />
    </div>
  );
}
