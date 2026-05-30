import { Navbar } from './components/layout/Navbar';
import { PageContainer } from './components/layout/PageContainer';
import { Dashboard } from './pages/Dashboard';

const App = () => (
  <div className="min-h-screen bg-slate-100">
    <Navbar />
    <PageContainer>
      <Dashboard />
    </PageContainer>
  </div>
);

export default App;
