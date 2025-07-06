// pages/index.tsx
import React from 'react';
import Card from '../components/common/Card';

export default function Home() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">Welcome to ALX Listing App</h1>
      <p className="text-lg text-gray-700 mb-6">This is the homepage of your Airbnb clone.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Card
          title="Seaside Villa"
          description="Enjoy beautiful ocean views."
          image="/assets/property1.jpg"
        />
        <Card
          title="Mountain Cabin"
          description="Cozy retreat in the mountains."
          image="/assets/property2.jpg"
        />
      </div>
    </div>
  );
}
