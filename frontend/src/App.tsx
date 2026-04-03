import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import MainApp from './MainApp';
import LandingPage from './components/home/LandingPage';
import { AdminLogin } from './admin/pages/AdminLogin';
import { AdminDashboard } from './admin/pages/AdminDashboard';
import { AdminAnalytics } from './admin/pages/AdminAnalytics';
import { AdminKnowledgeGaps } from './admin/pages/AdminKnowledgeGaps';
import { AdminProtectedRoute } from './admin/components/AdminProtectedRoute';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Landing Page Route */}
            <Route path="/home" element={<LandingPage />} />
            
            {/* Redirect root to /home */}
            <Route path="/" element={<Navigate to="/home" replace />} />
            
            {/* User Auth Routes */}
            <Route path="/home/login" element={<Login />} />
            <Route path="/home/registration" element={<Register />} />
            
            {/* User Application Routes */}
            <Route
              path="/app"
              element={
                <ProtectedRoute>
                  <MainApp />
                </ProtectedRoute>
              }
            />

            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="/admin/dashboard"
              element={
                <AdminProtectedRoute>
                  <AdminDashboard />
                </AdminProtectedRoute>
              }
            />
            <Route
              path="/admin/analytics"
              element={
                <AdminProtectedRoute>
                  <AdminAnalytics />
                </AdminProtectedRoute>
              }
            />
            <Route
              path="/admin/knowledge-gaps"
              element={
                <AdminProtectedRoute>
                  <AdminKnowledgeGaps />
                </AdminProtectedRoute>
              }
            />

            {/* Catch-all Redirect to /home */}
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </Router>
        <Toaster position="top-right" />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
