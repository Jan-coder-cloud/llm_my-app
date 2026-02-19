import type { UIMessage } from 'ai';

export default function ChatMessage({ message }: { message: UIMessage }) {
  const isUser = message.role === 'user';
  const text = message.parts
    .filter((p): p is Extract<typeof p, { type: 'text' }> => p.type === 'text')
    .map(p => p.text)
    .join('');

  return (
    <div className={`flex gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'} group animate-in fade-in slide-in-from-bottom-4 duration-500`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-md ${
        isUser
          ? 'bg-gradient-to-br from-blue-500 to-purple-600'
          : 'bg-gradient-to-br from-green-500 to-teal-600'
      }`}>
        {isUser ? (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        )}
      </div>
      <div className={`flex flex-col gap-1 ${isUser ? 'items-end' : 'items-start'} max-w-[75%]`}>
        <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400 px-1">
          {isUser ? 'You' : 'AI Assistant'}
        </div>
        <div
          className={`px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap shadow-sm ${
            isUser
              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-br-md'
              : 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-200/50 dark:border-zinc-700/50 rounded-bl-md'
          }`}
        >
          {text}
        </div>
      </div>
    </div>
  );
}