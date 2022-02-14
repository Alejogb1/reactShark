import { useEffect, useRef, useState } from 'react'

import siteMetadata from '@/data/siteMetadata'
const NewsletterForm = ({ title = 'Want me to write articles for your SaaS?' }) => {
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
    <div>
      <div className="pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">{title}</div>
      <div className="flex flex-col sm:flex-row">
        <div className="flex w-full mt-2 rounded-md shadow-sm sm:mt-0 sm:ml-3">
          <button
            style={{ backgroundColor: 'blue' }}
            className={`py-2 sm:py-0 w-full bg-orange-500 px-4 rounded-md font-medium text-white ${
              subscribed ? 'cursor-default' : 'hover:bg-orange-700 dark:hover:bg-orange-400'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600 dark:ring-offset-black`}
            type="submit"
            disabled={subscribed}
          >
            <a href="https://forms.gle/AvvUKc1tdEyUXWhy6" target="blank">
              Complete form
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
