import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, AntdProvider } from '@shared/config/providers';
import { ErrorBoundary } from '@shared/ui/ErrorBoundary';
import { AppRouter } from '@app/router';

export const App = () => (
  <ErrorBoundary>
    <QueryClientProvider>
      <AntdProvider>
        <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
          <AppRouter />
        </BrowserRouter>
      </AntdProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);
