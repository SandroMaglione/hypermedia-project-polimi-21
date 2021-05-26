import { wrapFunctional } from './utils'

export { default as Chat } from '../../components/Chat.vue'
export { default as OrientationInfo } from '../../components/OrientationInfo.vue'
export { default as SectionTitle } from '../../components/SectionTitle.vue'
export { default as LayoutFooterSection } from '../../components/layout/FooterSection.vue'
export { default as LayoutHeaderMenu } from '../../components/layout/HeaderMenu.vue'
export { default as SectionFeatureSection } from '../../components/section/FeatureSection.vue'
export { default as SectionGridSection } from '../../components/section/GridSection.vue'
export { default as SectionHeroSection } from '../../components/section/HeroSection.vue'
export { default as SectionTestimonialsSection } from '../../components/section/TestimonialsSection.vue'

export const LazyChat = import('../../components/Chat.vue' /* webpackChunkName: "components/chat" */).then(c => wrapFunctional(c.default || c))
export const LazyOrientationInfo = import('../../components/OrientationInfo.vue' /* webpackChunkName: "components/orientation-info" */).then(c => wrapFunctional(c.default || c))
export const LazySectionTitle = import('../../components/SectionTitle.vue' /* webpackChunkName: "components/section-title" */).then(c => wrapFunctional(c.default || c))
export const LazyLayoutFooterSection = import('../../components/layout/FooterSection.vue' /* webpackChunkName: "components/layout-footer-section" */).then(c => wrapFunctional(c.default || c))
export const LazyLayoutHeaderMenu = import('../../components/layout/HeaderMenu.vue' /* webpackChunkName: "components/layout-header-menu" */).then(c => wrapFunctional(c.default || c))
export const LazySectionFeatureSection = import('../../components/section/FeatureSection.vue' /* webpackChunkName: "components/section-feature-section" */).then(c => wrapFunctional(c.default || c))
export const LazySectionGridSection = import('../../components/section/GridSection.vue' /* webpackChunkName: "components/section-grid-section" */).then(c => wrapFunctional(c.default || c))
export const LazySectionHeroSection = import('../../components/section/HeroSection.vue' /* webpackChunkName: "components/section-hero-section" */).then(c => wrapFunctional(c.default || c))
export const LazySectionTestimonialsSection = import('../../components/section/TestimonialsSection.vue' /* webpackChunkName: "components/section-testimonials-section" */).then(c => wrapFunctional(c.default || c))
