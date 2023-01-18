import { createBrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Admin } from './screens/Admin';
import { Finance } from './screens/Finance';
import Home from './screens/Home';
import { HR } from './screens/HR';
import { EmployeeHiring } from './screens/HR/Hiring/Hiring';
import { BasicDetails } from './screens/HR/Hiring/BasicDetails';
import { FinalRound } from './screens/HR/Hiring/FinalRound';
import { L1Form } from './screens/HR/Hiring/L1Form';
import { L2Form } from './screens/HR/Hiring/L2Form';
import { IT } from './screens/IT';
import { Login } from './screens/Login';
import { Sales } from './screens/Sales';
import { Onboarding } from './screens/HR/Onboarding/Onboarding';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute condition={() => localStorage.getItem('token')}>
        <Home />
      </ProtectedRoute>
    ),
    children: [
      {
        path: 'admin',
        element: (
          <ProtectedRoute condition={() => localStorage.getItem('token')}>
            <Admin />
          </ProtectedRoute>
        ),
      },
      {
        path: 'hr',
        element: (
          <ProtectedRoute condition={() => localStorage.getItem('token')}>
            <HR />
          </ProtectedRoute>
        ),
      },
      {
        path: 'employeehiring',
        element: (
          <ProtectedRoute condition={() => localStorage.getItem('token')}>
            <EmployeeHiring />
          </ProtectedRoute>
        ),
        children: [
          {
            index: true,
            element: (
              <ProtectedRoute condition={() => localStorage.getItem('token')}>
                <BasicDetails />
              </ProtectedRoute>
            ),
          },
          {
            path: 'l1',
            element: (
              <ProtectedRoute condition={() => localStorage.getItem('token')}>
                <L1Form />
              </ProtectedRoute>
            ),
          },
          {
            path: 'l2',
            element: (
              <ProtectedRoute condition={() => localStorage.getItem('token')}>
                <L2Form />
              </ProtectedRoute>
            ),
          },
          {
            path: 'final',
            element: (
              <ProtectedRoute condition={() => localStorage.getItem('token')}>
                <FinalRound />
              </ProtectedRoute>
            ),
          },
        ],
      },
      {
        path: 'onboarding',
        element: (
          <ProtectedRoute condition={() => localStorage.getItem('token')}>
            <Onboarding />
          </ProtectedRoute>
        ),
      },
      {
        path: 'it',
        element: (
          <ProtectedRoute condition={() => localStorage.getItem('token')}>
            <IT />
          </ProtectedRoute>
        ),
      },
      {
        path: 'finance',
        element: (
          <ProtectedRoute condition={() => localStorage.getItem('token')}>
            <Finance />
          </ProtectedRoute>
        ),
      },
      {
        path: 'sales',
        element: (
          <ProtectedRoute condition={() => localStorage.getItem('token')}>
            <Sales />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
  },
]);
