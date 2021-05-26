import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Chat: () => import('../../components/Chat.vue' /* webpackChunkName: "components/chat" */).then(c => wrapFunctional(c.default || c)),
  OrientationInfo: () => import('../../components/OrientationInfo.vue' /* webpackChunkName: "components/orientation-info" */).then(c => wrapFunctional(c.default || c)),
  SectionTitle: () => import('../../components/SectionTitle.vue' /* webpackChunkName: "components/section-title" */).then(c => wrapFunctional(c.default || c)),
  LayoutFooterSection: () => import('../../components/layout/FooterSection.vue' /* webpackChunkName: "components/layout-footer-section" */).then(c => wrapFunctional(c.default || c)),
  LayoutHeaderMenu: () => import('../../components/layout/HeaderMenu.vue' /* webpackChunkName: "components/layout-header-menu" */).then(c => wrapFunctional(c.default || c)),
  SectionFeatureSection: () => import('../../components/section/FeatureSection.vue' /* webpackChunkName: "components/section-feature-section" */).then(c => wrapFunctional(c.default || c)),
  SectionGridSection: () => import('../../components/section/GridSection.vue' /* webpackChunkName: "components/section-grid-section" */).then(c => wrapFunctional(c.default || c)),
  SectionHeroSection: () => import('../../components/section/HeroSection.vue' /* webpackChunkName: "components/section-hero-section" */).then(c => wrapFunctional(c.default || c)),
  SectionTestimonialsSection: () => import('../../components/section/TestimonialsSection.vue' /* webpackChunkName: "components/section-testimonials-section" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
