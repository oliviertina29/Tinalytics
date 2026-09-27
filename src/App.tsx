import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { CoursesPage } from './pages/CoursesPage';
import { CoursePage } from './pages/CoursePage';
import { BusinessPage } from './pages/BusinessPage';
import { AboutPage } from './pages/AboutPage';
import { SignupPage } from './pages/SignupPage';
import { QuizPage } from './pages/QuizPage';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="formations" element={<CoursesPage />} />
            <Route path="formations/:slug" element={<CoursePage />} />
            <Route path="entreprises" element={<BusinessPage />} />
            <Route path="a-propos" element={<AboutPage />} />
            <Route path="inscription" element={<SignupPage />} />
            <Route path="test-de-niveau" element={<QuizPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  );
}

export default App;
