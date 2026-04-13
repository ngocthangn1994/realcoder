'use client';

import { useState } from 'react';

export function useAuth() {
  const [token, setToken] = useState<string | null>(null);
  return { token, login: setToken, logout: () => setToken(null) };
}
