'use client';

import { FormEvent } from 'react';

export default function ChatInput({
  input,
  setInput,
  onSubmit,
  isLoading,
}: {
  input: string;
  setInput: (v: string) => void;
  onSubmit: (e: FormEvent) => void;
  isLoading: boolean;
}) {
  return (
    <form onSubmit={onSubmit} className="p-4 sm:p-6 border-t border-zinc-200/50 dark:border-zinc-800/50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm">
      <div className="flex gap-3 max-w-3xl mx-auto">
        <input
          className="flex-1 bg-white dark:bg-zinc-800 px-5 py-3.5 rounded-2xl border border-zinc-200/80 dark:border-zinc-700/80 outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-purple-500/50 focus:border-transparent text-sm placeholder:text-zinc-400 dark:placeholder:text-zinc-500 shadow-sm transition-all"
          value={input}
          onChange={e => setInput(e.currentTarget.value)}
          placeholder="Ask me about study resources..."
          autoFocus
        />
        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2"
        >
          {isLoading ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span className="hidden sm:inline">Thinking...</span>
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <span className="hidden sm:inline">Send</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
