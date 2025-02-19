'use client'

import React, { useState } from 'react'
import Navbar from '@/components/common/Navbar'
import Sidebar from '@/components/common/Sidebar'

const ParticipantsPage = () => {
  const participants = [
    { id: 1, name: 'Dede Wijaya', role: 'Penari', image: '/default-avatar.png' },
    { id: 2, name: 'Alvin.Z', role: 'Programer', image: '/default-avatar.png' },
    { id: 3, name: 'Dede Wijaya', role: 'Penari', image: '/default-avatar.png' },
    { id: 4, name: 'Alvin.Z', role: 'Programer', image: '/default-avatar.png' },
    { id: 5, name: 'Dede Wijaya', role: 'Penari', image: '/default-avatar.png' },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div className="flex flex-1 pt-24">
        <div className="fixed left-0 h-screen">
          <Sidebar />
        </div>
        <div className="flex-1 ml-64 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl text-gray-600">Participants</h1>
            <input 
              type="text" 
              placeholder="Search..." 
              className="px-4 py-2 border rounded-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {participants.map((participant) => (
              <div key={participant.id} className="bg-white rounded-lg shadow-sm p-4 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                    <img 
                      src={participant.image} 
                      alt={participant.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">{participant.name}</h3>
                    <p className="text-gray-600 text-sm">{participant.role}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button 
                    className="px-4 py-1 text-sm font-medium rounded bg-yellow-500 text-white hover:bg-yellow-600"
                  >
                    history
                  </button>
                  <button 
                    className="px-4 py-1 text-sm font-medium rounded bg-gray-100 text-gray-700 hover:bg-gray-200"
                  >
                    Detail
                  </button>
                  <button 
                    className="px-4 py-1 text-sm font-medium rounded bg-red-500 text-white hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ParticipantsPage 