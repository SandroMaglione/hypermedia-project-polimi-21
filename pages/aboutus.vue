<template>
  <div>
    <layout-header-menu current="About us" />

    <!-- Company strengths 1 -->
    <section-feature-section
      title="Our Vision"
      desc="No matter which industry you belong to, every business must become digital"
      image_url="https://previews.123rf.com/images/guykantawan/guykantawan1706/guykantawan170600012/81210378-doppia-esposizione-di-monete-e-concetto-di-sfondo-finanza-e-affari-di-sfondo-della-città.jpg"
    />

    <!-- Company strengths 2 -->
    <section-feature-section
      title="Our Mission"
      desc="Our mission is to enhance business growth of our customers with creative design, development and to deliver market defining high quality solutions that create value and reliable competitive advantage to customers around the globe."
      image_url="https://previews.123rf.com/images/guykantawan/guykantawan1706/guykantawan170600012/81210378-doppia-esposizione-di-monete-e-concetto-di-sfondo-finanza-e-affari-di-sfondo-della-città.jpg"
      left="true"
    />

    <!-- Company strengths 3 -->
    <section-feature-section
      title="We are project driven"
      desc="Our specialists make sure that they produce customized and verified solutions as per needs and requirements of the customers at par excellence."
      image_url="https://previews.123rf.com/images/guykantawan/guykantawan1706/guykantawan170600012/81210378-doppia-esposizione-di-monete-e-concetto-di-sfondo-finanza-e-affari-di-sfondo-della-città.jpg"
    />
    <!-- Company's projects -->
    <section-grid-section
      title="Projects"
      subtitle="Projects of the company"
      buttontext="View All"
      :posts="postsAreas"
      :has-view-all="false"
    />
    <!-- Company's testimonials -->
    <section-testimonials-section />
    <!-- Company's partners -->
    <section-grid-section
      title="Partners"
      subtitle="Partners of the company"
      buttontext="View All"
      :posts="postsAreas"
      :has-view-all="false"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      postsAreas: [
        {
          title: 'Boost your conversion rate',
          href: '#',
          category: {
            name: 'Article',
            href: '#',
            color: 'bg-indigo-100 text-indigo-800',
          },
          description:
            'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
          date: 'Mar 16, 2020',
          datetime: '2020-03-16',
          author: {
            name: 'Paul York',
            href: '#',
            imageUrl:
              'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
          readingTime: '6 min',
        },
        {
          title: 'How to use search engine optimization to drive sales',
          href: '#',
          category: {
            name: 'Video',
            href: '#',
            color: 'bg-pink-100 text-pink-800',
          },
          description:
            'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
          date: 'Mar 10, 2020',
          datetime: '2020-03-10',
          author: {
            name: 'Dessie Ryan',
            href: '#',
            imageUrl:
              'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
          readingTime: '4 min',
        },
        {
          title: 'Improve your customer experience',
          href: '#',
          category: {
            name: 'Case Study',
            href: '#',
            color: 'bg-green-100 text-green-800',
          },
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.',
          date: 'Feb 12, 2020',
          datetime: '2020-02-12',
          author: {
            name: 'Easer Collins',
            href: '#',
            imageUrl:
              'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
          readingTime: '11 min',
        },
        {
          title: 'Improve your customer experience',
          href: '#',
          category: {
            name: 'Case Study',
            href: '#',
            color: 'bg-green-100 text-green-800',
          },
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.',
          date: 'Feb 12, 2020',
          datetime: '2020-02-12',
          author: {
            name: 'Easer Collins',
            href: '#',
            imageUrl:
              'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
          readingTime: '11 min',
        },
        {
          title: 'Improve your customer experience',
          href: '#',
          category: {
            name: 'Case Study',
            href: '#',
            color: 'bg-green-100 text-green-800',
          },
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.',
          date: 'Feb 12, 2020',
          datetime: '2020-02-12',
          author: {
            name: 'Easer Collins',
            href: '#',
            imageUrl:
              'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
          readingTime: '11 min',
        },
      ],
    }
  },
  // SEO metadata
  head() {
    return {
      title: 'About us - Rocket Inc.',
      meta: [
        {
          hid: 'aboutus',
          content:
            'Learn more about Rocket Inc., who we are, what we do, why choosing us',
          name: 'Rocket Inc. about us',
        },
      ],
    }
  },
})
</script>
