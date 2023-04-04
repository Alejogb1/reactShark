import { useEffect, useRef, useState } from 'react'

import siteMetadata from '@/data/siteMetadata'
const NewsletterForm = ({ title = 'How I got $10,000 in MRR in less than 8 months with my SaaS' }, { description = 'Build a Node.js & React app at warp speed with this SaaS boilerplate.' }) => {
  const inputEl = useRef(null)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const subscribe = async (e) => {
    e.preventDefault()

    const submit = async () => {}
    if (error) {
      setError(true)
      setMessage('Your e-mail address is invalid or you are already subscribed!')
      return
    }

    const supabaseValue = inputEl.current.value

    inputEl.current.value = ''
    setError(false)
    setSubscribed(true)
    const { error, data } = supabase.from('newsletter_rs').insert([supabaseValue])

    setMessage('Successfully! 🎉 You are now subscribed.')
  }

  return (
    <div style={{ border: '1px solid black', borderRadius: '5px', padding: '15px' }}>
      <div className="pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">{title}</div>
      <div className="pb-1 text-md font-light text-gray-600 dark:text-gray-100 ">{description}</div> 
      <div className="flex flex-col sm:flex-row ">
        <div className="flex w-full mt-2 rounded-md shadow-sm sm:mt-0">
          <button
            style={{ backgroundColor: 'blue' }}
            className="hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            type="submit"
            disabled={subscribed}
          >
            <a href="https://usegravity.app?ref=reactshark" target="blank">
              Buy now
            </a>
          </button>
        </div>
      </div>
      {error && (
        <div className="pt-2 text-sm text-red-500 w-72 sm:w-96 dark:text-red-400">{message}</div>
      )}
    </div>
  )
}

export default NewsletterForm

export const BlogNewsletterForm = ({ title }) => (
  <div className="flex items-center justify-center">
    <div className="p-6 bg-gray-100 dark:bg-gray-800 sm:px-14 sm:py-8">
      <NewsletterForm title={title} />
    </div>
  </div>
)
