'use client';

import React, { useState, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
import Link from "next/link";
import { Button } from "@/components/ui/button";

// --- CRITICAL COMPONENTS (Load Immediately) ---
import { MegaProducts } from '../components/MegaProducts';

// --- DYNAMIC IMPORTS (Lazy Loaded for Speed) ---
const FactoryStories = dynamic(() => import('../private/dashboard/FactoryStories'), { ssr: false });
const LiveStreamCommandCenter = dynamic(() => import('../components/LiveStreamCommandCenter'), {
    loading: () => <div className="h-96 animate-pulse bg-slate-100 rounded-lg" />
});
const ProductPage = dynamic(() => import('./videos/ProductPage'));
const HeroSection = dynamic(() => import('../components/hero'));
const Product3DShowcase = dynamic(() => import('./videos/Product3DShowcase'), { ssr: false });
const BusinessSolutions = dynamic(() => import('../components/busineesSolution'));
const CosmoBlog = dynamic(() => import('../components/cosmoBlog'));
const ChatBlog = dynamic(() => import('../components/chatBlog'));
const ProductCarousel = dynamic(() => import('../components/productCarousel'));
const SourcingRequest = dynamic(() => import('../components/SourcingRequest'));
const EngagementAnalytics = dynamic(() => import('./sellerHomepage/EngagementAnalytics'));
const IndustryNews = dynamic(() => import('./news/IndustryNews'));
const HotProductVideos = dynamic(() => import('./category/HotProductVideos'));
const InfiniteLiveFeed = dynamic(() => import('../components/InfiniteLiveFeed'));
const AssociationsCarousel = dynamic(() => import('../components/productCarousel2'));
const FloatingQuoteBtn = dynamic(() => import('../components/FloatingQuoteBtn'), { ssr: false });

import { newInnovationData } from "@/lib/newsData";
import { DesignCapabilities } from '../components/design-capabilities';
import { MegaStories } from '../components/mega-stories';
import { VerticalAccordion } from '../components/VerticalAccordion';
import AiRobotics from '../components/AiRobotics';
import MegaProduct from '../components/MegaProduct';
import CastingCarousel from '../components/CastingCarousel';
import MegaBlog from '../components/MegaBlog';  
import MegaMagazine from '../components/MegaMagazine';
import OtherMetalsDirectory from '../components/OtherMetalsDirectory';
import ProductCarouselo from '../components/productCarouselo';
import HighFlowGrates from './HighFlowGrates';
import IndustrialManifest from './IndustrialManifest';
import MegaQSeries from './MegaQSeries';
import MegaFoundationPage from './mega-foundation/page';
 import MegaFeaShowcase from './MegaFeaShowcase';
import { Hero } from './Hero';
import MegaMediaHub from '../components/MegaMediaHub';
import MegaTactilePlates from './MegaTactilePlates';
import MegaRebarSection from './MegaRebarSection';
import MegaRebarLiteCatalog from './MegaRebarLiteCatalog';

export default function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const token = localStorage.getItem('authToken');
        if (token) {
            setIsLoggedIn(true);
            setUserName(localStorage.getItem('userName') || 'Member');
        }
    }, []);

    if (!isMounted) return null;

    return (
        <div className="bg-white">
            
            <Hero />
            <Product3DShowcase /> 
            <MegaQSeries/>
            <MegaProducts />
            <MegaMediaHub/>
            <MegaRebarSection/>
            <MegaRebarLiteCatalog/>
            <MegaTactilePlates/>
            <LiveStreamCommandCenter />
             <MegaFeaShowcase/>
            <IndustrialManifest/>
            <ProductPage />
            <MegaMagazine/>
            <HighFlowGrates/>
            <CastingCarousel />
            <OtherMetalsDirectory/>
            {/* <MetalDirectory /> */}
            <FactoryStories /> 
            <MegaBlog />
            <HeroSection />
            <AiRobotics />
            {/* Non-Critical Visuals */}
            <MegaStories />
            <BusinessSolutions />

            {/* Blogs & Feed */}
            <CosmoBlog />
            <ChatBlog />
            <MegaProduct />
            <DesignCapabilities />
            <ProductCarousel />
            <ProductCarouselo/>

            {/* Data-Heavy Footer Content */}
            <SourcingRequest />
            <EngagementAnalytics />
            <IndustryNews />

            <HotProductVideos
                title={newInnovationData.title}
                videos={newInnovationData.videos}
            />

            <VerticalAccordion />
            <InfiniteLiveFeed />
            <AssociationsCarousel />

            <FloatingQuoteBtn />
        </div>
    );
}