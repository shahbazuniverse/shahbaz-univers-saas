'use client';

import { useEffect, useState } from 'react';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push('/login');
      } else {
        setUser(currentUser);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Welcome to Dashboard, {user?.email}!
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Profile</h2>
            <p className="text-gray-600 mb-4">{user?.email}</p>
            <p className="text-sm text-gray-500">Account verified: {user?.emailVerified ? 'Yes' : 'No'}</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Account Info</h2>
            <p className="text-gray-600 mb-4">User ID: {user?.uid?.substring(0, 10)}...</p>
            <p className="text-sm text-gray-500">Created: {new Date(user?.metadata?.createdAt).toLocaleDateString()}</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Status</h2>
            <p className="text-gray-600 mb-4">Active</p>
            <p className="text-sm text-gray-500">All systems operational</p>
          </div>
        </div>
      </div>
    </main>
  );
}
