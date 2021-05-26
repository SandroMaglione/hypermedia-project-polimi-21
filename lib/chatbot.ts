import { Chatbot } from 'chatbot-types'

export const chatbot: Chatbot = {
  name: 'navigation-chatbot',
  data: {
    kb: {
      continue_v: ['About us', 'Complete', 'Next'],
      steps_v: ['', '/areas', '/products', '/people'],
      stay_message: 'I do not understand, can you repeat?',
      init: 'Welcome to our website, we are glad to have you here',
      question: {
        unkown: 'I cannot understand, could you repeat?',
        initials: [
          'What are you looking for?',
          'Do you want to know more about us?',
        ],
        choices: [
          {
            id: 'complete',
            intents: ['complete', 'stop', 'nothing'],
            utterance: ['Thank you', 'See you later'],
            payload: null,
          },
          {
            id: 'aboutus-guide',
            intents: ['about us', 'info'],
            utterance: ['More info about us', 'Here we go'],
            payload: null,
          },
        ],
      },
      complete: 'Okay, see you later then',
      'aboutus-guide': 'We have a lot to offer!',
      aboutus: {
        unknown: 'Select an existing section please',
        initials: [
          'Areas, products, people?',
          'Which section of the website you want to visit?',
        ],
        choices: [
          {
            id: 'areas',
            intents: ['area', 'areas'],
            utterance: ['Lets see the areas'],
            payload: null,
          },
          {
            id: 'products',
            intents: ['product', 'products'],
            utterance: ['Lets see the products'],
            payload: null,
          },
          {
            id: 'people',
            intents: ['people'],
            utterance: ['Lets see the people'],
            payload: null,
          },
        ],
      },
      areas: 'This are all the areas of the company!',
      products: 'This are all the products of the company!',
      people: 'This are all the people of the company!',
    },
    process: {
      firstActivityId: 'start',
      activities: [
        {
          my_id: 'start',
          my_type: 'START',
          next_id: 'init',
          callback: 'start',
        },
        {
          my_id: 'init',
          my_type: 'TASK',
          next_id: 'question',
          callback: 'nothing',
        },
        {
          my_id: 'question',
          my_type: 'OR',
          next_id: 'end',
          callback: 'generic_or',
          choices: ['complete', 'aboutus-guide'],
        },
        {
          my_id: 'complete',
          my_type: 'TASK',
          next_id: null,
          callback: 'nothing',
        },
        {
          my_id: 'aboutus-guide',
          my_type: 'TASK',
          next_id: 'aboutus',
          callback: 'guide',
        },
        {
          my_id: 'aboutus',
          my_type: 'OR',
          next_id: 'end',
          callback: 'generic_or',
          choices: ['areas', 'products', 'people'],
        },
        {
          my_id: 'areas-guide',
          my_type: 'TASK',
          next_id: 'areas',
          callback: 'guide',
        },
        {
          my_id: 'products-guide',
          my_type: 'TASK',
          next_id: 'products',
          callback: 'guide',
        },
        {
          my_id: 'people-guide',
          my_type: 'TASK',
          next_id: 'people',
          callback: 'guide',
        },
        {
          my_id: 'areas',
          my_type: 'TASK',
          next_id: null,
          callback: 'nothing',
        },
        {
          my_id: 'products',
          my_type: 'TASK',
          next_id: null,
          callback: 'nothing',
        },
        {
          my_id: 'people',
          my_type: 'TASK',
          next_id: null,
          callback: 'nothing',
        },
      ],
    },
  },
}
