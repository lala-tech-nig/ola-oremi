import React from 'react'

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center gap-6 max-w-md w-full">
        <div className="flex items-center justify-center">
          <svg className="animate-spin h-12 w-12 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
          </svg>
        </div>

        <div className="text-center">
          <h1 className="text-2xl font-semibold text-blue-700">Uploading…</h1>
          <p className="mt-2 text-sm text-gray-700">We're uploading your files — check back in a few minutes.</p>
        </div>

        <div className="w-full">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600 rounded-full w-1/3 animate-progress" />
          </div>
        </div>

        <p className="text-xs text-gray-500">Tip: keep this tab open while your upload completes.</p>
      </div>
    </main>
  )
}