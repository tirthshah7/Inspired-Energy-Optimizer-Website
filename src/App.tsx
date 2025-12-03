import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { Features } from './components/Features';
import { DashboardGallery } from './components/DashboardGallery';
import { HowItWorks } from './components/HowItWorks';
import { UseCases } from './components/UseCases';
import { Proof } from './components/Proof';
import { FinalCTA } from './components/FinalCTA';

// Lazy load page components for better performance
const ProductPage = lazy(() => import('./components/ProductPage').then(module => ({ default: module.ProductPage })));
const SolutionsPage = lazy(() => import('./components/SolutionsPage').then(module => ({ default: module.SolutionsPage })));
const AboutPage = lazy(() => import('./components/AboutPage').then(module => ({ default: module.AboutPage })));
const ContactPage = lazy(() => import('./components/ContactPage').then(module => ({ default: module.ContactPage })));

// Loading fallback component
function PageLoader() {
  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-[#22c55e] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-[#94a3b8]">Loading...</p>
      </div>
    </div>
  );
}

// Home page component
function HomePage() {
  return (
    <main>
      <Hero />
      <ProblemSolution />
      <Features />
      <DashboardGallery />
      <HowItWorks />
      <UseCases />
      <Proof />
      <FinalCTA />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0f172a] text-[#f8fafc]">
        <Header />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
