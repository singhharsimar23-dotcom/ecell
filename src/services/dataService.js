// Mock data service for E-Cell Member Portal
// This file centralizes all data interaction logic for easy backend integration

// Mock user database
let mockUsers = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
    rollNumber: 'CS2021001'
  }
];

// Mock upcoming events
const mockEvents = [
  {
    id: 1,
    title: 'Startup Pitch Competition',
    date: '2025-12-15',
    time: '10:00 AM',
    venue: 'Main Auditorium',
    description: 'Present your startup ideas to industry leaders and VCs',
    category: 'Competition'
  },
  {
    id: 2,
    title: 'Entrepreneurship Workshop',
    date: '2025-12-20',
    time: '2:00 PM',
    venue: 'Innovation Lab',
    description: 'Learn the fundamentals of starting and scaling a business',
    category: 'Workshop'
  },
  {
    id: 3,
    title: 'Hackathon 2025',
    date: '2025-12-28',
    time: '9:00 AM',
    venue: 'Tech Hub',
    description: '48-hour coding marathon to build innovative solutions',
    category: 'Hackathon'
  },
  {
    id: 4,
    title: 'VC Networking Night',
    date: '2026-01-05',
    time: '6:00 PM',
    venue: 'Conference Hall',
    description: 'Connect with venture capitalists and angel investors',
    category: 'Networking'
  },
  {
    id: 5,
    title: 'Product Design Sprint',
    date: '2026-01-12',
    time: '11:00 AM',
    venue: 'Design Studio',
    description: 'Intensive workshop on user-centric product development',
    category: 'Workshop'
  },
  {
    id: 6,
    title: 'Founder\'s Talk Series',
    date: '2026-01-18',
    time: '4:00 PM',
    venue: 'Seminar Hall',
    description: 'Hear success stories from successful entrepreneurs',
    category: 'Talk'
  }
];

/**
 * Register a new user
 * @param {string} name - User's full name
 * @param {string} email - User's email
 * @param {string} password - User's password
 * @param {string} rollNumber - User's roll number
 * @returns {Promise<{success: boolean, error?: string}>}
 */
export const registerUser = async (name, email, password, rollNumber) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  // Check if user already exists
  const existingUser = mockUsers.find(u => u.email === email);
  if (existingUser) {
    return { success: false, error: 'User with this email already exists' };
  }

  // Check if roll number already exists
  const existingRoll = mockUsers.find(u => u.rollNumber === rollNumber);
  if (existingRoll) {
    return { success: false, error: 'User with this roll number already exists' };
  }

  // Create new user
  const newUser = {
    id: String(mockUsers.length + 1),
    name,
    email,
    password,
    rollNumber
  };

  mockUsers.push(newUser);
  return { success: true };
};

/**
 * Login user
 * @param {string} email - User's email
 * @param {string} password - User's password
 * @returns {Promise<{user?: object, token?: string, error?: string}>}
 */
export const loginUser = async (email, password) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  const user = mockUsers.find(u => u.email === email && u.password === password);
  
  if (!user) {
    return { error: 'Invalid email or password' };
  }

  // Generate mock token
  const token = `mock-token-${user.id}-${Date.now()}`;

  // Return user without password
  const { password: _, ...userWithoutPassword } = user;
  
  return {
    user: userWithoutPassword,
    token
  };
};

/**
 * Fetch user profile
 * @param {string} token - Authentication token
 * @returns {Promise<{user?: object, error?: string}>}
 */
export const fetchUserProfile = async (token) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));

  // Extract user ID from token (mock implementation)
  const userId = token.split('-')[2];
  const user = mockUsers.find(u => u.id === userId);

  if (!user) {
    return { error: 'User not found' };
  }

  // Return user without password
  const { password: _, ...userWithoutPassword } = user;
  return { user: userWithoutPassword };
};

/**
 * Fetch upcoming events
 * @returns {Promise<Array>}
 */
export const fetchUpcomingEvents = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 400));

  return mockEvents;
};
