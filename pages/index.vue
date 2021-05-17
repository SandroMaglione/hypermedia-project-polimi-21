<template>
  <div>
    <HeroSection />
    <GridSection
      title="Areas"
      subtitle="Main areas of the company"
      buttontext="Learn more"
      :posts="postsAreas"
    />
    <GridSection
      title="Team"
      subtitle="Team of the company"
      buttontext="Learn more"
      :posts="postsAreas"
    />
    <GridSection
      title="Products"
      subtitle="Products of the company"
      buttontext="Learn more"
      :posts="postsAreas"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeroSection from '../components/HeroSection'
import GridSection from '../components/GridSection'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Areas', href: '#' },
  { name: 'People', href: '#' },
  { name: 'Products', href: '#' },
  { name: 'About us', href: '#' },
  { name: 'Contact us', href: '#' },
]

export default Vue.extend({
  beforeMount() {
    this.letMeTry()
  },

  methods: {
    async letMeTry() {
      console.log('LET MY TRY')
      let { data: area, error } = await this.$supabase.from('area').select('*')
      console.log(area)
    },
  },

  components: {
    HeroSection,
    GridSection,
  },
  layout: 'page',
  data() {
    return {
      navigation,
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
})
</script>
